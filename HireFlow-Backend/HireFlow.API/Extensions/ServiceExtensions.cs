using System.Text;
using System.Threading.RateLimiting;
using HireFlow.Infrastructure;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace HireFlow.API.Extensions;

public static class ServiceExtensions
{
    // ==================== JWT AUTHENTICATION ====================
    public static IServiceCollection AddJwtAuthentication(
        this IServiceCollection services, IConfiguration config)
    {
        var secret = config["Jwt:Secret"]
            ?? throw new InvalidOperationException("JWT Secret missing in configuration.");
        var issuer = config["Jwt:Issuer"] ?? "HireFlow";
        var audience = config["Jwt:Audience"] ?? "HireFlowUsers";

        services.AddAuthentication(opts =>
        {
            opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            opts.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(opts =>
        {
            opts.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret)),
                ValidateIssuer = true,
                ValidIssuer = issuer,
                ValidateAudience = true,
                ValidAudience = audience,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero   // Strict expiry
            };

            opts.Events = new JwtBearerEvents
            {
                OnAuthenticationFailed = ctx =>
                {
                    if (ctx.Exception is SecurityTokenExpiredException)
                        ctx.Response.Headers["X-Token-Expired"] = "true";
                    return Task.CompletedTask;
                },
                OnChallenge = ctx =>
                {
                    ctx.HandleResponse();
                    ctx.Response.StatusCode = 401;
                    ctx.Response.ContentType = "application/json";
                    return ctx.Response.WriteAsync(
                        """{"success":false,"message":"Unauthorized. Please log in."}""");
                },
                OnForbidden = ctx =>
                {
                    ctx.Response.StatusCode = 403;
                    ctx.Response.ContentType = "application/json";
                    return ctx.Response.WriteAsync(
                        """{"success":false,"message":"Forbidden. You don't have permission."}""");
                }
            };
        });

        return services;
    }

    // ==================== CORS ====================
    public static IServiceCollection AddCorsPolicy(
        this IServiceCollection services, IConfiguration config)
    {
        var origins = config.GetSection("Cors:AllowedOrigins").Get<string[]>()
            ?? new[] { "http://localhost:4200", "http://localhost:8100" };

        services.AddCors(opts =>
        {
            opts.AddPolicy("HireFlowCors", policy =>
                policy.WithOrigins(origins)
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .AllowCredentials()   // Needed for refresh token cookie
                      .WithExposedHeaders("X-Token-Expired", "X-Correlation-Id")
            );
        });

        return services;
    }

    // ==================== RATE LIMITING (OWASP) ====================
    public static IServiceCollection AddRateLimitingPolicies(this IServiceCollection services)
    {
        services.AddRateLimiter(options =>
        {
            options.RejectionStatusCode = 429;
            options.OnRejected = async (ctx, token) =>
            {
                ctx.HttpContext.Response.ContentType = "application/json";
                await ctx.HttpContext.Response.WriteAsync(
                    """{"success":false,"message":"Too many requests. Please slow down."}""", token);
            };

            // Auth endpoints — strict: 10 requests/minute per IP
            options.AddFixedWindowLimiter("auth", o =>
            {
                o.PermitLimit = 10;
                o.Window = TimeSpan.FromMinutes(1);
                o.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
                o.QueueLimit = 0;
            });

            // General API — 100 requests/minute per user
            options.AddFixedWindowLimiter("api", o =>
            {
                o.PermitLimit = 100;
                o.Window = TimeSpan.FromMinutes(1);
                o.QueueLimit = 0;
            });

            // Job apply — 5 per hour per IP (prevent spam applications)
            options.AddFixedWindowLimiter("apply", o =>
            {
                o.PermitLimit = 5;
                o.Window = TimeSpan.FromHours(1);
                o.QueueLimit = 0;
            });
        });

        return services;
    }

    // ==================== SWAGGER ====================
    public static IServiceCollection AddSwaggerWithJwt(this IServiceCollection services)
    {
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "HireFlow API",
                Version = "v1",
                Description = "HireFlow Hiring Pipeline Management Platform API",
                Contact = new OpenApiContact { Name = "HireFlow Team" }
            });

            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                Scheme = "Bearer",
                BearerFormat = "JWT",
                In = ParameterLocation.Header,
                Description = "Enter your JWT token. Example: Bearer {token}"
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    Array.Empty<string>()
                }
            });

            c.EnableAnnotations();
            c.DescribeAllParametersInCamelCase();
        });

        return services;
    }

    // ==================== HANGFIRE ====================
    public static IServiceCollection AddHangfireJobs(
        this IServiceCollection services, IConfiguration config)
    {
        services.AddHangfire(cfg => cfg
            .SetDataCompatibilityLevel(CompatibilityLevel.Version_180)
            .UseSimpleAssemblyNameTypeSerializer()
            .UseRecommendedSerializerSettings()
            .UseSqlServerStorage(
                config.GetConnectionString("DefaultConnection"),
                new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    DisableGlobalLocks = true
                }
            )
        );

        services.AddHangfireServer();
        return services;
    }
}
