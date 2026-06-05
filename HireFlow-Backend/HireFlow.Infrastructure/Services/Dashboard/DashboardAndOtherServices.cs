using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Dashboard;
using HireFlow.Application.DTOs.Notifications;
using HireFlow.Application.DTOs.Applications;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MailKit.Net.Smtp;
using MimeKit;
using System.Text.Json;

namespace HireFlow.Infrastructure.Services.Dashboard
{

public class DashboardService : IDashboardService
{
    private readonly HireFlowDbContext _db;
    public DashboardService(HireFlowDbContext db) => _db = db;

    public async Task<Result<RecruiterDashboardDto>> GetRecruiterDashboardAsync(Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<RecruiterDashboardDto>.Failure("Recruiter not found.");

        var activeJobs = await _db.Jobs.CountAsync(j => j.RecruiterProfileId == recruiter.Id && j.Status == JobStatus.Open);
        var totalCandidates = await _db.JobApplications
            .CountAsync(a => a.Job.RecruiterProfileId == recruiter.Id);
        var today = DateTime.UtcNow.Date;
        var interviewsToday = await _db.Interviews
            .CountAsync(i => i.RecruiterProfileId == recruiter.Id
                && i.ScheduledDate == today && i.Status == InterviewStatus.Scheduled);
        var pendingFeedback = await _db.Interviews
            .CountAsync(i => i.RecruiterProfileId == recruiter.Id
                && i.Status == InterviewStatus.Completed && i.Feedback == null);

        // Pipeline stage counts — matches frontend PipelineStageCount exactly
        var apps = await _db.JobApplications
            .Where(a => a.Job.RecruiterProfileId == recruiter.Id && a.Stage != HiringStage.Rejected)
            .ToListAsync();

        int Count(HiringStage from) => apps.Count(a => a.Stage >= from);
        int applied = Count(HiringStage.Applied);

        var pipeline = new List<PipelineStageCountDto>
        {
            Stage("applied","Applied", applied, applied, "bg-blue-400","bg-blue-100 text-blue-700"),
            Stage("shortlisted","Shortlisted", Count(HiringStage.Shortlisted), applied, "bg-indigo-400","bg-indigo-100 text-indigo-700"),
            Stage("assessment","Assessment", Count(HiringStage.Assessment), applied, "bg-amber-400","bg-amber-100 text-amber-700"),
            Stage("interview","Interview", Count(HiringStage.Interview), applied, "bg-violet-400","bg-violet-100 text-violet-700"),
            Stage("hr_round","HR Round", Count(HiringStage.HrRound), applied, "bg-orange-400","bg-orange-100 text-orange-700"),
            Stage("selected","Selected", Count(HiringStage.Selected), applied, "bg-emerald-400","bg-emerald-100 text-emerald-700"),
        };

        // Recent activity (last 20 stage changes)
        var stageChanges = await _db.StageHistories
            .Include(sh => sh.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(sh => sh.Application).ThenInclude(a => a.Job)
            .Where(sh => sh.Application.Job.RecruiterProfileId == recruiter.Id)
            .OrderByDescending(sh => sh.ChangedAt)
            .Take(10)
            .ToListAsync();

        var activity = stageChanges.Select(sh => new ActivityItemDto
        {
            Id = sh.Id.ToString(),
            Type = "stage_change",
            CandidateName = sh.Application.CandidateProfile.User.FullName,
            Message = $"moved to {sh.ToStage.ToString().Replace("HrRound", "HR Round")}",
            TimeAgo = TimeAgo(sh.ChangedAt),
            AvatarColor = sh.Application.CandidateProfile.AvatarColor ?? "#6366F1"
        }).ToList();

        // Upcoming interviews
        var upcomingInterviews = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .Where(i => i.RecruiterProfileId == recruiter.Id
                && i.ScheduledDate >= today && i.Status == InterviewStatus.Scheduled)
            .OrderBy(i => i.ScheduledDate).ThenBy(i => i.StartTime)
            .Take(5)
            .ToListAsync();

        var upcomingDtos = upcomingInterviews.Select(i =>
        {
            List<string> interviewers;
            try
            {
                var list = JsonSerializer.Deserialize<List<Application.DTOs.Interview.InterviewerDto>>(i.InterviewersJson ?? "[]") ?? new();
                interviewers = list.Select(iv => iv.Name).ToList();
            }
            catch { interviewers = new(); }

            return new UpcomingInterviewDto
            {
                Id = i.Id.ToString(),
                CandidateName = i.Application.CandidateProfile.User.FullName,
                AvatarColor = i.Application.CandidateProfile.AvatarColor ?? "#6366F1",
                JobTitle = i.Job.Title,
                ScheduledTime = $"{FormatTime(i.StartTime)} – {FormatTime(i.EndTime)}",
                ScheduledDate = i.ScheduledDate.Date == today ? "Today" :
                                i.ScheduledDate.Date == today.AddDays(1) ? "Tomorrow" :
                                i.ScheduledDate.ToString("MMM d"),
                Mode = i.Mode == InterviewMode.Online ? "online" : "offline",
                Interviewers = interviewers,
                MeetingLink = i.MeetingLink
            };
        }).ToList();

        return Result<RecruiterDashboardDto>.Success(new RecruiterDashboardDto
        {
            StatCards = new List<StatCardDto>
            {
                new() { Label="Active Jobs", Value=activeJobs, Change=2, Trend="up",
                    IconPath="M21 13.255A23.931...", AccentClass="bg-indigo-50 text-indigo-600" },
                new() { Label="Total Candidates", Value=totalCandidates, Change=18, Trend="up",
                    IconPath="M12 4.354a4 4...", AccentClass="bg-blue-50 text-blue-600" },
                new() { Label="Interviews Today", Value=interviewsToday, Change=0, Trend="neutral",
                    IconPath="M8 7V3m8 4V3...", AccentClass="bg-violet-50 text-violet-600" },
                new() { Label="Pending Feedback", Value=pendingFeedback, Change=3, Trend="up",
                    IconPath="M8 12h.01M12...", AccentClass="bg-amber-50 text-amber-600" }
            },
            PipelineStages = pipeline,
            RecentActivity = activity,
            UpcomingInterviews = upcomingDtos
        });
    }

    public async Task<Result<CandidateDashboardDto>> GetCandidateDashboardAsync(Guid candidateUserId)
    {
        var candidate = await _db.CandidateProfiles.FirstOrDefaultAsync(cp => cp.UserId == candidateUserId);
        if (candidate == null) return Result<CandidateDashboardDto>.Failure("Candidate not found.");

        var apps = await _db.JobApplications
            .Include(a => a.Job)
            .Where(a => a.CandidateProfileId == candidate.Id)
            .OrderByDescending(a => a.AppliedDate)
            .ToListAsync();

        return Result<CandidateDashboardDto>.Success(new CandidateDashboardDto
        {
            TotalApplications = apps.Count,
            ActiveApplications = apps.Count(a => a.Stage != HiringStage.Rejected),
            InterviewsScheduled = apps.Count(a => a.Stage == HiringStage.Interview),
            Offers = apps.Count(a => a.Stage == HiringStage.Selected),
            RecentApplications = apps.Take(5).Select(a => new ApplicationSummaryDto
            {
                JobTitle = a.Job.Title,
                CompanyName = a.Job.Company?.Name ?? string.Empty,
                Stage = a.Stage.ToString().ToLower(),
                AppliedDate = a.AppliedDate.ToString("yyyy-MM-dd"),
                StatusBadgeClass = a.Stage switch
                {
                    HiringStage.Selected => "bg-emerald-100 text-emerald-700",
                    HiringStage.Rejected => "bg-rose-100 text-rose-700",
                    HiringStage.Interview => "bg-violet-100 text-violet-700",
                    _ => "bg-blue-100 text-blue-700"
                }
            }).ToList()
        });
    }

    public async Task<Result<AnalyticsDto>> GetAnalyticsAsync(Guid recruiterId, DateTime? from, DateTime? to)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<AnalyticsDto>.Failure("Recruiter not found.");

        var fromDate = from ?? DateTime.UtcNow.AddMonths(-6);
        var toDate = to ?? DateTime.UtcNow;

        var apps = await _db.JobApplications
            .Where(a => a.Job.RecruiterProfileId == recruiter.Id
                && a.AppliedDate >= fromDate && a.AppliedDate <= toDate)
            .ToListAsync();

        var hires = apps.Count(a => a.Stage == HiringStage.Selected);
        var trend = apps.GroupBy(a => a.AppliedDate.ToString("MMM yyyy"))
            .Select(g => new MonthlyDataPoint { Month = g.Key, Value = g.Count() })
            .ToList();

        return Result<AnalyticsDto>.Success(new AnalyticsDto
        {
            TotalApplicationsThisMonth = apps.Count(a => a.AppliedDate >= DateTime.UtcNow.AddMonths(-1)),
            TotalHiresThisMonth = apps.Count(a => a.Stage == HiringStage.Selected && a.LastActivityDate >= DateTime.UtcNow.AddMonths(-1)),
            AverageDaysToHire = 18.5,
            OfferAcceptanceRate = hires > 0 ? Math.Round((double)hires / apps.Count * 100, 1) : 0,
            ApplicationTrend = trend,
            HireTrend = apps.Where(a => a.Stage == HiringStage.Selected)
                .GroupBy(a => a.LastActivityDate.ToString("MMM yyyy"))
                .Select(g => new MonthlyDataPoint { Month = g.Key, Value = g.Count() }).ToList()
        });
    }

    private static PipelineStageCountDto Stage(string stage, string label, int count, int applied,
        string barColor, string badge) => new()
    {
        Stage = stage, Label = label, Count = count, BarColorClass = barColor, BadgeClass = badge,
        Percentage = applied > 0 ? (int)Math.Round((double)count / applied * 100) : 0
    };

    private static string TimeAgo(DateTime dt)
    {
        var diff = DateTime.UtcNow - dt;
        if (diff.TotalMinutes < 60) return $"{(int)diff.TotalMinutes}m ago";
        if (diff.TotalHours < 24) return $"{(int)diff.TotalHours}h ago";
        if (diff.TotalDays < 2) return "Yesterday";
        return $"{(int)diff.TotalDays} days ago";
    }

    private static string FormatTime(string t)
    {
        if (!TimeSpan.TryParse(t, out var ts)) return t;
        var h = ts.Hours % 12 == 0 ? 12 : ts.Hours % 12;
        return $"{h}:{ts.Minutes:D2} {(ts.Hours >= 12 ? "PM" : "AM")}";
    }
}

// ===================== Notification Service =====================

}

namespace HireFlow.Infrastructure.Services.Notifications
{

public class NotificationService : INotificationService
{
    private readonly HireFlowDbContext _db;
    public NotificationService(HireFlowDbContext db) => _db = db;

    public async Task<Result<List<NotificationDto>>> GetNotificationsAsync(Guid userId, bool unreadOnly = false)
    {
        var query = _db.Notifications.Where(n => n.UserId == userId);
        if (unreadOnly) query = query.Where(n => !n.IsRead);

        var list = await query.OrderByDescending(n => n.CreatedAt).Take(50).ToListAsync();
        return Result<List<NotificationDto>>.Success(list.Select(n => new NotificationDto
        {
            Id = n.Id, Type = n.Type, Title = n.Title, Message = n.Message,
            IsRead = n.IsRead, ReadAt = n.ReadAt, ActionUrl = n.ActionUrl, CreatedAt = n.CreatedAt
        }).ToList());
    }

    public async Task<Result> MarkAsReadAsync(Guid notificationId, Guid userId)
    {
        var n = await _db.Notifications.FirstOrDefaultAsync(n => n.Id == notificationId && n.UserId == userId);
        if (n == null) return Result.Failure("Notification not found.");
        n.IsRead = true;
        n.ReadAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> MarkAllAsReadAsync(Guid userId)
    {
        var list = await _db.Notifications.Where(n => n.UserId == userId && !n.IsRead).ToListAsync();
        foreach (var n in list) { n.IsRead = true; n.ReadAt = DateTime.UtcNow; }
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task CreateNotificationAsync(Guid userId, string title, string message,
        NotificationType type, string? actionUrl = null)
    {
        _db.Notifications.Add(new Notification
        {
            UserId = userId, Title = title, Message = message,
            Type = type, ActionUrl = actionUrl
        });
        await _db.SaveChangesAsync();
    }
}

// ===================== Application (Apply) Service =====================

}

namespace HireFlow.Infrastructure.Services.Applications
{

public class ApplicationService : IApplicationService
{
    private readonly HireFlowDbContext _db;
    private readonly INotificationService _notifications;
    public ApplicationService(HireFlowDbContext db, INotificationService notifications)
    { _db = db; _notifications = notifications; }

    public async Task<Result<ApplicationDto>> ApplyAsync(ApplyJobRequest request, Guid candidateUserId)
    {
        var candidate = await _db.CandidateProfiles.FirstOrDefaultAsync(cp => cp.UserId == candidateUserId);
        if (candidate == null) return Result<ApplicationDto>.Failure("Candidate profile not found.");

        var job = await _db.Jobs.Include(j => j.Company).FirstOrDefaultAsync(j => j.Id == request.JobId);
        if (job == null) return Result<ApplicationDto>.Failure("Job not found.");
        if (job.Status != JobStatus.Open) return Result<ApplicationDto>.Failure("This job is no longer accepting applications.");

        var exists = await _db.JobApplications
            .AnyAsync(a => a.JobId == request.JobId && a.CandidateProfileId == candidate.Id);
        if (exists) return Result<ApplicationDto>.Failure("You have already applied for this job.");

        string? resumeUrl = null;
        if (request.ResumeId.HasValue)
        {
            var resume = await _db.Resumes.FirstOrDefaultAsync(r => r.Id == request.ResumeId && r.CandidateProfileId == candidate.Id);
            resumeUrl = resume?.FileUrl;
        }

        var app = new JobApplication
        {
            JobId = request.JobId,
            CandidateProfileId = candidate.Id,
            Stage = HiringStage.Applied,
            AppliedDate = DateTime.UtcNow,
            LastActivityDate = DateTime.UtcNow,
            ResumeUrl = resumeUrl,
            CoverLetterText = request.CoverLetterText
        };

        _db.JobApplications.Add(app);
        job.ApplicantsCount++;
        await _db.SaveChangesAsync();

        // Notify recruiter if assigned
        if (job.RecruiterProfileId.HasValue)
        {
            var recruiter = await _db.RecruiterProfiles.Include(r => r.User)
                .FirstOrDefaultAsync(r => r.Id == job.RecruiterProfileId);
            if (recruiter != null)
                await _notifications.CreateNotificationAsync(recruiter.UserId,
                    $"New Application: {job.Title}",
                    $"A new candidate has applied for {job.Title}.",
                    NotificationType.NewApplication, $"/recruiter/candidates/{app.Id}");
        }

        return Result<ApplicationDto>.Success(new ApplicationDto
        {
            Id = app.Id, JobId = job.Id, JobTitle = job.Title,
            CompanyName = job.Company?.Name ?? string.Empty,
            Stage = "applied", Score = 0,
            AppliedDate = app.AppliedDate.ToString("yyyy-MM-dd"),
            LastActivityDate = app.LastActivityDate.ToString("yyyy-MM-dd"),
            ResumeUrl = resumeUrl
        });
    }

    public async Task<Result> WithdrawAsync(Guid applicationId, Guid candidateUserId)
    {
        var candidate = await _db.CandidateProfiles.FirstOrDefaultAsync(cp => cp.UserId == candidateUserId);
        if (candidate == null) return Result.Failure("Candidate not found.");

        var app = await _db.JobApplications
            .FirstOrDefaultAsync(a => a.Id == applicationId && a.CandidateProfileId == candidate.Id);
        if (app == null) return Result.Failure("Application not found.");

        app.Stage = HiringStage.Rejected;
        app.LastActivityDate = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result<PagedResult<ApplicationDto>>> GetMyApplicationsAsync(
        Guid candidateUserId, int page = 1, int pageSize = 20)
    {
        var candidate = await _db.CandidateProfiles.FirstOrDefaultAsync(cp => cp.UserId == candidateUserId);
        if (candidate == null) return Result<PagedResult<ApplicationDto>>.Failure("Candidate not found.");

        var query = _db.JobApplications.Include(a => a.Job).ThenInclude(j => j.Company)
            .Where(a => a.CandidateProfileId == candidate.Id)
            .OrderByDescending(a => a.AppliedDate);

        var total = await query.CountAsync();
        var items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

        return Result<PagedResult<ApplicationDto>>.Success(new PagedResult<ApplicationDto>
        {
            Items = items.Select(a => new ApplicationDto
            {
                Id = a.Id, JobId = a.JobId, JobTitle = a.Job.Title,
                CompanyName = a.Job.Company?.Name ?? string.Empty,
                Stage = a.Stage.ToString().ToLower(), Score = a.Score,
                AppliedDate = a.AppliedDate.ToString("yyyy-MM-dd"),
                LastActivityDate = a.LastActivityDate.ToString("yyyy-MM-dd"),
                ResumeUrl = a.ResumeUrl, IsFlagged = a.IsFlagged, FlagReason = a.FlagReason
            }).ToList(),
            TotalCount = total, Page = page, PageSize = pageSize
        });
    }
}

// ===================== Email Service =====================

}

namespace HireFlow.Infrastructure.Services.Email
{

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    private readonly string _smtpHost;
    private readonly int _smtpPort;
    private readonly string _smtpUser;
    private readonly string _smtpPass;
    private readonly string _fromEmail;
    private readonly string _fromName;
    private readonly string _frontendUrl;

    public EmailService(IConfiguration config)
    {
        _config = config;
        _smtpHost = config["Email:SmtpHost"] ?? "smtp.gmail.com";
        _smtpPort = int.Parse(config["Email:SmtpPort"] ?? "587");
        _smtpUser = config["Email:SmtpUser"] ?? string.Empty;
        _smtpPass = config["Email:SmtpPass"] ?? string.Empty;
        _fromEmail = config["Email:FromEmail"] ?? "noreply@hireflow.com";
        _fromName = config["Email:FromName"] ?? "HireFlow";
        _frontendUrl = config["App:FrontendUrl"] ?? "http://localhost:4200";
    }

    public async Task SendVerificationEmailAsync(string toEmail, string name, string token)
    {
        var link = $"{_frontendUrl}/auth/verify-email?token={Uri.EscapeDataString(token)}&email={Uri.EscapeDataString(toEmail)}";
        var body = $@"
<h2>Hi {name},</h2>
<p>Welcome to HireFlow! Please verify your email address to get started.</p>
<p><a href='{link}' style='background:#4F46E5;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;'>
  Verify Email
</a></p>
<p>This link expires in 24 hours.</p>
<p>If you didn't create an account, ignore this email.</p>";

        await SendAsync(toEmail, "Verify your HireFlow account", body);
    }

    public async Task SendPasswordResetEmailAsync(string toEmail, string name, string resetLink)
    {
        var body = $@"
<h2>Hi {name},</h2>
<p>We received a request to reset your HireFlow password.</p>
<p><a href='{resetLink}' style='background:#4F46E5;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;'>
  Reset Password
</a></p>
<p>This link expires in 1 hour. If you didn't request this, ignore this email.</p>";

        await SendAsync(toEmail, "Reset your HireFlow password", body);
    }

    public async Task SendWelcomeEmailAsync(string toEmail, string name, string role)
    {
        var body = $@"
<h2>Welcome to HireFlow, {name}! 🎉</h2>
<p>Your account as a <strong>{role}</strong> has been created successfully.</p>
<p><a href='{_frontendUrl}' style='background:#4F46E5;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;'>
  Go to Dashboard
</a></p>";
        await SendAsync(toEmail, "Welcome to HireFlow!", body);
    }

    public async Task SendInterviewReminderAsync(string toEmail, string candidateName, DateTime interviewDate, string jobTitle)
    {
        var body = $@"
<h2>Interview Reminder</h2>
<p>Hi {candidateName}, your interview for <strong>{jobTitle}</strong> is scheduled for <strong>{interviewDate:MMM dd, yyyy 'at' HH:mm}</strong>.</p>
<p>Good luck! 🍀</p>";
        await SendAsync(toEmail, $"Interview Reminder: {jobTitle}", body);
    }

    public async Task SendApplicationUpdateAsync(string toEmail, string candidateName, string jobTitle, string newStage)
    {
        var body = $@"
<h2>Application Update</h2>
<p>Hi {candidateName}, your application for <strong>{jobTitle}</strong> has been updated to: <strong>{newStage}</strong>.</p>
<p><a href='{_frontendUrl}/candidate/dashboard' style='background:#4F46E5;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;'>
  View Application
</a></p>";
        await SendAsync(toEmail, $"Application Update: {jobTitle}", body);
    }

    private async Task SendAsync(string toEmail, string subject, string htmlBody)
    {
        try
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(_fromName, _fromEmail));
            message.To.Add(new MailboxAddress(string.Empty, toEmail));
            message.Subject = subject;
            message.Body = new TextPart("html") { Text = $"<div style='font-family:sans-serif;max-width:600px;margin:auto'>{htmlBody}</div>" };

            using var client = new SmtpClient();
            await client.ConnectAsync(_smtpHost, _smtpPort, MailKit.Security.SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(_smtpUser, _smtpPass);
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
        catch (Exception ex)
        {
            // Log & swallow — email failure shouldn't break the flow
            Console.WriteLine($"[Email Error] {ex.Message}");
        }
    }
}
}
