// REPLACE your existing DependencyInjection.cs with this version
// Adds: DailyCoService, RapidApiJobsService, PlagiarismHttpClient

using HireFlow.Application.Interfaces;
using HireFlow.Infrastructure.Data;
using HireFlow.Infrastructure.Services.Applications;
using HireFlow.Infrastructure.Services.Auth;
using HireFlow.Infrastructure.Services.Background;
using HireFlow.Infrastructure.Services.Dashboard;
using HireFlow.Infrastructure.Services.Email;
using HireFlow.Infrastructure.Services.HireMeet;
using HireFlow.Infrastructure.Services.Interview;
using HireFlow.Infrastructure.Services.Jobs;
using HireFlow.Infrastructure.Services.Notifications;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HireFlow.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        // ---- EF Core ----
        services.AddDbContext<HireFlowDbContext>(options =>
        {
            var provider = configuration["Database:Provider"];
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            if (string.Equals(provider, "Sqlite", StringComparison.OrdinalIgnoreCase))
            {
                options.UseSqlite(connectionString);
                return;
            }

            options.UseSqlServer(
                connectionString,
                sql => sql.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null)
            );
        });

        // ---- Auth ----
        services.AddScoped<TokenService>();
        services.AddScoped<TwoFactorService>();
        services.AddScoped<IAuthService, AuthService>();

        // ---- Daily.co HTTP client ----
        services.AddHttpClient<DailyCoService>()
            .SetHandlerLifetime(TimeSpan.FromMinutes(5));
        services.AddScoped<HireMeetServiceV2>();
        // Register V2 as the IHireMeetService implementation
        services.AddScoped<IHireMeetService>(sp => sp.GetRequiredService<HireMeetServiceV2>());

        // ---- RapidAPI Jobs HTTP client ----
        services.AddHttpClient<RapidApiJobsService>()
            .SetHandlerLifetime(TimeSpan.FromMinutes(5));

        // ---- Plagiarism service HTTP client ----
        services.AddHttpClient("plagiarism", client =>
        {
            client.Timeout = TimeSpan.FromSeconds(30);
        });

        // ---- Core services ----
        services.AddScoped<IJobService, JobService>();
        services.AddScoped<ICandidateService, CandidateService>();
        services.AddScoped<IApplicationService, ApplicationService>();
        services.AddScoped<IInterviewService, InterviewService>();
        services.AddScoped<IDashboardService, DashboardService>();
        services.AddScoped<INotificationService, NotificationService>();
        services.AddScoped<IEmailService, EmailService>();

        // ---- Background jobs ----
        services.AddScoped<JobSyncBackgroundJob>();
        services.AddScoped<InterviewReminderJob>();
        services.AddScoped<RapidApiJobsService>();

        return services;
    }
}
