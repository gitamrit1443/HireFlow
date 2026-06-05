using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using HireFlow.Infrastructure.Services.Auth;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HireFlow.Infrastructure.Data;

public static class DbInitializer
{
    public static async Task InitializeAsync(IServiceProvider services)
    {
        using var scope  = services.CreateScope();
        var db     = scope.ServiceProvider.GetRequiredService<HireFlowDbContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<HireFlowDbContext>>();

        try
        {
            // Try EF Core migrations first; fall back to EnsureCreated
            // if no migration files exist yet (common during first-time setup).
            var pending = await db.Database.GetPendingMigrationsAsync();
            if (pending.Any())
            {
                logger.LogInformation("Applying {Count} pending migrations…", pending.Count());
                await db.Database.MigrateAsync();
            }
            else
            {
                // No migration files — create schema directly from model
                await db.Database.EnsureCreatedAsync();
            }
        }
        catch (Exception ex)
        {
            logger.LogWarning(ex,
                "Migration failed — attempting EnsureCreated as fallback.");
            try
            {
                await db.Database.EnsureCreatedAsync();
            }
            catch (Exception innerEx)
            {
                logger.LogError(innerEx,
                    "EnsureCreated also failed. " +
                    "Check your SQL Server connection string in appsettings.json.");
                throw;
            }
        }

        // ── Seed only when database is empty ───────────────────────────────
        if (await db.Users.IgnoreQueryFilters().AnyAsync())
        {
            logger.LogInformation("Database already seeded — skipping.");
            return;
        }

        logger.LogInformation("Seeding demo data…");
        await SeedAsync(db);
        logger.LogInformation("Seed complete.");
    }

    // ── Seed data ───────────────────────────────────────────────────────────
    private static async Task SeedAsync(HireFlowDbContext db)
    {
        // Admin
        var admin = new User
        {
            Email          = "admin@hireflow.com",
            FirstName      = "Admin",
            LastName       = "HireFlow",
            PasswordHash   = BCrypt.Net.BCrypt.HashPassword("Admin@123", workFactor: 12),
            Role           = UserRole.Admin,
            IsEmailVerified = true,
            IsActive       = true,
            IsApproved     = true
        };
        db.Users.Add(admin);

        // Demo Company
        var company = new Company
        {
            Name        = "TechCorp Solutions",
            Description = "A leading software company",
            Industry    = "Technology",
            Location    = "Bangalore, India",
            Size        = "51-200",
            IsVerified  = true
        };
        db.Companies.Add(company);

        // Demo Recruiter
        var recruiterUser = new User
        {
            Email          = "recruiter@hireflow.com",
            FirstName      = "Priya",
            LastName       = "Sharma",
            PasswordHash   = BCrypt.Net.BCrypt.HashPassword("Recruiter@123", workFactor: 12),
            Role           = UserRole.Recruiter,
            IsEmailVerified = true,
            IsActive       = true,
            IsApproved     = true,
            Company        = "TechCorp Solutions"
        };
        db.Users.Add(recruiterUser);

        // Demo Candidate
        var candidateUser = new User
        {
            Email          = "candidate@hireflow.com",
            FirstName      = "Arjun",
            LastName       = "Mehta",
            PasswordHash   = BCrypt.Net.BCrypt.HashPassword("Candidate@123", workFactor: 12),
            Role           = UserRole.Candidate,
            IsEmailVerified = true,
            IsActive       = true,
            IsApproved     = true
        };
        db.Users.Add(candidateUser);

        await db.SaveChangesAsync();

        // Profiles
        var recruiterProfile = new RecruiterProfile
        {
            UserId = recruiterUser.Id,
            CompanyId = company.Id,
            Title = "Technical Recruiter",
            Department = "Talent Acquisition"
        };
        db.RecruiterProfiles.Add(recruiterProfile);
        db.CandidateProfiles.Add(new CandidateProfile { UserId = candidateUser.Id });

        // Demo Job — keep this aligned with HireFlow.Domain.Entities.Job
        var job = new Job
        {
            Title          = "Senior Angular Developer",
            Department     = "Engineering",
            Description    = "We are looking for an experienced Angular developer to join our team.",
            Location       = "Bangalore, India (Hybrid)",
            Type           = JobType.FullTime,
            Experience     = "3+ years Angular, TypeScript, REST APIs",
            SalaryMin      = 1200000,
            SalaryMax      = 1800000,
            Currency       = "INR",
            Skills         = "[\"Angular\",\"TypeScript\",\"RxJS\",\"REST APIs\"]",
            HiringManager  = recruiterUser.FullName,
            Openings       = 2,
            RecruiterProfileId = recruiterProfile.Id,
            CompanyId      = company.Id,
            Status         = JobStatus.Open,
            Source         = JobSource.HireFlow
        };
        db.Jobs.Add(job);

        await db.SaveChangesAsync();
    }
}
