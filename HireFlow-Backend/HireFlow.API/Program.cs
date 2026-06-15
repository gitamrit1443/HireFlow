using HireFlow.API.Extensions;
using HireFlow.API.Middleware;
using HireFlow.Infrastructure;
using HireFlow.Infrastructure.Data;
using HireFlow.Infrastructure.Services.Background;
using Hangfire;
using Hangfire.Dashboard;
using Serilog;
using Serilog.Events;
using Microsoft.EntityFrameworkCore;

// Bootstrap logger — captures any startup crash before full Serilog is configured
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateBootstrapLogger();

try
{
    Log.Information("Starting HireFlow API…");

    var builder = WebApplication.CreateBuilder(args);
    builder.Logging.ClearProviders();
    builder.Logging.AddConsole();

    // ── Full Serilog config (reads from appsettings.json "Serilog" section) ──
    // builder.Host.UseSerilog((ctx, sp, cfg) =>
    // {
    //     cfg
    //         .ReadFrom.Configuration(ctx.Configuration)
    //         .ReadFrom.Services(sp)
    //         .Enrich.FromLogContext()
    //         .Enrich.WithEnvironmentName()
    //         .Enrich.WithThreadId()
    //         .Enrich.WithProperty("Application", "HireFlow.API")
    //         .WriteTo.Console(outputTemplate:
    //             "[{Timestamp:HH:mm:ss} {Level:u3}] {SourceContext}: {Message:lj}{NewLine}{Exception}")
    //         .WriteTo.File(
    //             path: "logs/hireflow-.log",
    //             rollingInterval: RollingInterval.Day,
    //             retainedFileCountLimit: 14);

    //     var conn = ctx.Configuration.GetConnectionString("DefaultConnection");
    //     if (!string.IsNullOrEmpty(conn))
    //     {
    //         cfg.WriteTo.MSSqlServer(
    //             connectionString: conn,
    //             sinkOptions: new Serilog.Sinks.MSSqlServer.MSSqlServerSinkOptions
    //             {
    //                 TableName        = "ApplicationLogs",
    //                 AutoCreateSqlTable = true
    //             },
    //             restrictedToMinimumLevel: LogEventLevel.Warning);
    //     }
    // });

    // ── DI registrations ──────────────────────────────────────────────────
    builder.Services.AddInfrastructure(builder.Configuration);
    builder.Services.AddJwtAuthentication(builder.Configuration);
    builder.Services.AddAuthorization();
    builder.Services.AddCorsPolicy(builder.Configuration);
    builder.Services.AddRateLimitingPolicies();
    var hangfireEnabled = builder.Configuration.GetValue("Hangfire:Enabled", true);
    if (hangfireEnabled)
        builder.Services.AddHangfireJobs(builder.Configuration);
    builder.Services.AddSwaggerWithJwt();

    builder.Services.AddControllers()
        .AddJsonOptions(o =>
        {
            o.JsonSerializerOptions.PropertyNamingPolicy =
                System.Text.Json.JsonNamingPolicy.CamelCase;
            o.JsonSerializerOptions.DefaultIgnoreCondition =
                System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
        });

    builder.Services.AddApiVersioning(o =>
    {
        o.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1, 0);
        o.AssumeDefaultVersionWhenUnspecified = true;
        o.ReportApiVersions = true;
    });

    builder.Services.AddDbContext<HireFlowDbContext>(options=>options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

    var healthChecks = builder.Services.AddHealthChecks();
    if (!string.Equals(
            builder.Configuration["Database:Provider"],
            "Sqlite",
            StringComparison.OrdinalIgnoreCase))
    {
        healthChecks.AddSqlServer(
            builder.Configuration.GetConnectionString("DefaultConnection")!,
            name: "sql-server",
            tags: new[] { "db", "ready" });
    }

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddHttpContextAccessor();
    builder.Services.AddMemoryCache();

    // ── Build app ─────────────────────────────────────────────────────────
    var app = builder.Build();

    // ── Auto-migrate + seed on startup ────────────────────────────────────
    try
    {
        await DbInitializer.InitializeAsync(app.Services);
    }
    catch (Exception ex)
    {
        Log.Warning(ex,
            "DB initialisation failed — app will continue. " +
            "Ensure SQL Server is running and the connection string is correct.");
    }

    // ── Middleware pipeline (ORDER MATTERS) ───────────────────────────────
    app.UseMiddleware<SecurityHeadersMiddleware>();
    app.UseMiddleware<ExceptionHandlingMiddleware>();
    app.UseMiddleware<RequestLoggingMiddleware>();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "HireFlow API v1");
            c.RoutePrefix      = "swagger";
            c.DisplayRequestDuration();
        });
    }

    app.UseHttpsRedirection();
    app.UseCors("HireFlowCors");
    app.UseRateLimiter();
    app.UseAuthentication();
    app.UseAuthorization();

    if (hangfireEnabled)
    {
        app.UseHangfireDashboard("/hangfire", new DashboardOptions
        {
            Authorization = new[] { new HangfireAuthFilter() }
        });
    }

    app.MapHealthChecks("/health");
    app.MapControllers();

    // ── Recurring jobs ────────────────────────────────────────────────────
    if (hangfireEnabled)
    {
        RecurringJob.AddOrUpdate<JobSyncBackgroundJob>(
            "sync-external-jobs",
            job => job.SyncExternalJobsAsync(),
            Cron.Daily(6));

        RecurringJob.AddOrUpdate<InterviewReminderJob>(
            "send-interview-reminders",
            job => job.SendRemindersAsync(),
            Cron.Hourly());
    }

    app.Run();
}
catch (Exception ex) when (ex is not HostAbortedException)
{
    Log.Fatal(ex, "HireFlow API terminated unexpectedly.");
}
finally
{
    Log.CloseAndFlush();
}

// ── Hangfire dashboard auth ───────────────────────────────────────────────
public class HangfireAuthFilter : Hangfire.Dashboard.IDashboardAuthorizationFilter
{
    public bool Authorize(Hangfire.Dashboard.DashboardContext context)
    {
        var http = context.GetHttpContext();
        return http.User.Identity?.IsAuthenticated == true
               && http.User.IsInRole("Admin");
    }
}
