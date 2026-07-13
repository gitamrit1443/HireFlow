using HireFlowBackend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Data;

public static class DataSeeder
{
    public static async Task SeedAsync(HireFlowDbContext db)
    {
        var hasher = new PasswordHasher<User>();

        var company = await db.Companies.FirstOrDefaultAsync(x => x.Name == "HireFlow Demo Company");
        if (company is null)
        {
            company = new Company
            {
                Name = "HireFlow Demo Company",
                Website = "https://hireflow.local",
                Location = "Remote / Mohali"
            };
            db.Companies.Add(company);
        }

        var admin = await EnsureUserAsync(db, hasher, "Admin", "admin@hireflow.com", "Admin@123", "Admin");
        var recruiter = await EnsureUserAsync(db, hasher, "Amrit Recruiter", "recruiter@hireflow.com", "Recruiter@123", "Recruiter");
        var candidate = await EnsureUserAsync(db, hasher, "Arjun Candidate", "candidate@hireflow.com", "Candidate@123", "Candidate");
        var candidateTwo = await EnsureUserAsync(db, hasher, "Neha Sharma", "neha.candidate@hireflow.com", "Candidate@123", "Candidate");

        if (!await db.RecruiterProfiles.AnyAsync(x => x.UserId == recruiter.Id))
        {
            db.RecruiterProfiles.Add(new RecruiterProfile
            {
                User = recruiter,
                Company = company,
                Designation = "HR Manager"
            });
        }

        await EnsureCandidateProfileAsync(db, candidate, "+91-9999999999", "C#, ASP.NET Core, SQL Server, Angular", "2 years");
        await EnsureCandidateProfileAsync(db, candidateTwo, "+91-8888888888", "Angular, TypeScript, SCSS, REST APIs", "1 year");

        await db.SaveChangesAsync();

        var backendJob = await EnsureJobAsync(db, recruiter, company,
            "ASP.NET Core Developer",
            "Engineering",
            "Build REST APIs using ASP.NET Core, EF Core, JWT authentication and SQL Server.",
            "Remote",
            "full-time",
            "1-3 years",
            450000,
            900000,
            "C#, ASP.NET Core, SQL Server, JWT, EF Core");

        var frontendJob = await EnsureJobAsync(db, recruiter, company,
            "Angular Frontend Developer",
            "Product Engineering",
            "Create clean responsive dashboards, recruiter pipeline screens and candidate-facing UI.",
            "Hybrid - Mohali",
            "full-time",
            "0-2 years",
            350000,
            650000,
            "Angular, TypeScript, SCSS, REST APIs, RxJS");

        var qaJob = await EnsureJobAsync(db, recruiter, company,
            "QA Automation Intern",
            "Quality Assurance",
            "Test job, application, interview and dashboard flows for a hiring SaaS platform.",
            "Remote",
            "contract",
            "Fresher",
            120000,
            240000,
            "Manual Testing, API Testing, Postman, SQL");

        await db.SaveChangesAsync();

        await EnsureApplicationAsync(db, backendJob, candidate, recruiter, "Interview", "Shortlisted",
            "I have worked on ASP.NET Core Web API, SQL Server and Angular projects. I can contribute to API development and debugging.",
            82);
        await EnsureApplicationAsync(db, frontendJob, candidateTwo, recruiter, "Applied", "Submitted",
            "I have built responsive Angular dashboards and reusable components with SCSS and TypeScript.",
            76);

        if (!await db.HireMeetings.AnyAsync(x => x.CreatedByUserId == recruiter.Id))
        {
            db.HireMeetings.Add(new HireMeeting
            {
                Title = "Technical Interview - Arjun Candidate",
                RoomCode = "HF-123456",
                DailyRoomName = "hireflow-123456",
                DailyRoomUrl = "https://hireroom.daily.co/hireflow-123456",
                StartTime = DateTime.UtcNow.AddHours(2),
                CandidateName = "Arjun Candidate",
                CandidateId = candidate.Id.ToString(),
                JobTitle = backendJob.Title,
                CreatedByUserId = recruiter.Id,
                Status = "waiting"
            });
        }

        if (!await db.Notifications.AnyAsync(x => x.UserId == recruiter.Id))
        {
            db.Notifications.Add(new Notification
            {
                User = recruiter,
                Title = "Demo data ready",
                Message = "Jobs, candidates, applications and HireMeet demo room are ready for testing."
            });
        }

        if (!await db.Notifications.AnyAsync(x => x.UserId == candidate.Id))
        {
            db.Notifications.Add(new Notification
            {
                User = candidate,
                Title = "Welcome to HireFlow",
                Message = "Your candidate account is ready. You can track your application status."
            });
        }

        await db.SaveChangesAsync();
    }

    private static async Task<User> EnsureUserAsync(HireFlowDbContext db, PasswordHasher<User> hasher, string name, string email, string password, string role)
    {
        var normalizedEmail = email.ToLowerInvariant();
        var user = await db.Users.FirstOrDefaultAsync(x => x.Email == normalizedEmail);
        if (user is not null) return user;

        user = new User
        {
            FullName = name,
            Email = normalizedEmail,
            Role = role
        };
        user.PasswordHash = hasher.HashPassword(user, password);
        db.Users.Add(user);
        await db.SaveChangesAsync();
        return user;
    }

    private static async Task EnsureCandidateProfileAsync(HireFlowDbContext db, User user, string phone, string skillsCsv, string experience)
    {
        if (await db.CandidateProfiles.AnyAsync(x => x.UserId == user.Id)) return;
        db.CandidateProfiles.Add(new CandidateProfile
        {
            User = user,
            Phone = phone,
            SkillsCsv = skillsCsv,
            ExperienceSummary = experience
        });
    }

    private static async Task<Job> EnsureJobAsync(
        HireFlowDbContext db,
        User recruiter,
        Company company,
        string title,
        string department,
        string description,
        string location,
        string type,
        string experience,
        decimal salaryMin,
        decimal salaryMax,
        string skillsCsv)
    {
        var job = await db.Jobs.FirstOrDefaultAsync(x => x.Title == title && x.CreatedByUserId == recruiter.Id);
        if (job is not null) return job;

        job = new Job
        {
            Title = title,
            Department = department,
            Description = description,
            Location = location,
            EmploymentType = type,
            Experience = experience,
            Salary = salaryMax,
            SalaryMin = salaryMin,
            SalaryMax = salaryMax,
            Currency = "INR",
            SkillsCsv = skillsCsv,
            Status = "open",
            Openings = 2,
            HiringManager = recruiter.FullName,
            Company = company,
            CreatedByUser = recruiter,
            CreatedAt = DateTime.UtcNow
        };
        db.Jobs.Add(job);
        return job;
    }

    private static async Task EnsureApplicationAsync(
        HireFlowDbContext db,
        Job job,
        User candidate,
        User recruiter,
        string stage,
        string status,
        string coverLetter,
        int score)
    {
        var application = await db.JobApplications
            .Include(x => x.Score)
            .FirstOrDefaultAsync(x => x.JobId == job.Id && x.CandidateUserId == candidate.Id);

        if (application is null)
        {
            application = new JobApplication
            {
                Job = job,
                CandidateUser = candidate,
                AssignedRecruiter = recruiter,
                Stage = stage,
                Status = status,
                CoverLetter = coverLetter,
                ResumeUrl = "https://example.com/demo-resume.pdf",
                TagsCsv = "demo,shortlisted",
                AppliedAt = DateTime.UtcNow.AddDays(-Random.Shared.Next(1, 10))
            };
            db.JobApplications.Add(application);
            await db.SaveChangesAsync();
        }

        if (application.Score is null && !await db.CandidateScores.AnyAsync(x => x.JobApplicationId == application.Id))
        {
            db.CandidateScores.Add(new CandidateScore
            {
                JobApplication = application,
                TechnicalScore = score,
                CommunicationScore = Math.Max(60, score - 5),
                CultureFitScore = Math.Max(60, score - 8),
                OverallScore = score,
                Comment = "Demo candidate score generated for portfolio flow.",
                ScoredByUser = recruiter
            });
        }
    }
}
