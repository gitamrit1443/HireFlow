using System.Reflection.Metadata.Ecma335;
using System.Text;
using HireFlowBackend.Data;
using HireFlowBackend.Services;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Local/private settings file. Keep real API keys here and do not commit this file.
builder.Configuration.AddJsonFile("appsettings.Local.json", optional: true, reloadOnChange: true);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<HireFlowDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddHttpClient<IPlagiarismService, PlagiarismService>(client =>
{
    client.BaseAddress = new Uri(builder.Configuration["ExternalApis:OpenAlexBaseUrl"] ?? "https://api.openalex.org/");
    client.Timeout = TimeSpan.FromSeconds(20);
});

builder.Services.AddHttpClient<IDailyCoService, DailyCoService>(client =>
{
    client.Timeout = TimeSpan.FromSeconds(20);
});

builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IJobService, JobService>();
builder.Services.AddScoped<IApplicationService, ApplicationService>();
builder.Services.AddScoped<ICandidateService, CandidateService>();
builder.Services.AddScoped<IInterviewService, InterviewService>();
builder.Services.AddScoped<IHireMeetService, HireMeetService>();
builder.Services.AddScoped<IDashboardService, DashboardService>();
builder.Services.AddScoped<INotificationService, NotificationService>();

var jwtKey = builder.Configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key missing in appsettings.json");
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false; // localhost ke liye simple rakha hai
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = signingKey,
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddAuthorization();

builder.Services.AddCors(options =>
{
    options.AddPolicy("LocalFrontend", policy =>
    {
        // Demo/local mode: phone + laptop may use different LAN IPs.
        // No cookies are used, JWT goes in Authorization header, so AllowAnyOrigin is OK for local demo.
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "HireFlow Backend API",
        Version = "v1",
        Description = "Simple ASP.NET Core Web API with JWT authentication."
    });

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter JWT token only. Bearer prefix Swagger khud handle karega."
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
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
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<HireFlowDbContext>();
    db.Database.EnsureCreated();
    await DataSeeder.SeedAsync(db);
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Keep local HTTP stable for phone/laptop testing. HTTPS redirection can break LAN/mobile demos.
// if (!app.Environment.IsDevelopment())
// {
//     app.UseHttpsRedirection();
// }

app.UseCors("LocalFrontend");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
var port=Environment.GetEnvironmentVariable("PORT") ??"8080";
app.Run($"http://0.0.0.0:{port}");
