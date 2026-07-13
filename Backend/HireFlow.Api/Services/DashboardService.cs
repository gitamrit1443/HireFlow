using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class DashboardService : IDashboardService
{
    private readonly HireFlowDbContext _db;

    public DashboardService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<RecruiterDashboardDto>> GetRecruiterDashboardAsync(Guid recruiterUserId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == recruiterUserId);
        if (user is null) return ServiceResult<RecruiterDashboardDto>.Fail("User not found.");

        var jobQuery = _db.Jobs.AsNoTracking().AsQueryable();
        var appQuery = _db.JobApplications.AsNoTracking().Include(x => x.Job).Include(x => x.CandidateUser).AsQueryable();
        var interviewQuery = _db.Interviews.AsNoTracking().Include(x => x.JobApplication).ThenInclude(x => x.Job).Include(x => x.JobApplication).ThenInclude(x => x.CandidateUser).AsQueryable();

        if (user.Role != "Admin")
        {
            jobQuery = jobQuery.Where(x => x.CreatedByUserId == recruiterUserId);
            appQuery = appQuery.Where(x => x.Job.CreatedByUserId == recruiterUserId || x.AssignedRecruiterId == recruiterUserId);
            interviewQuery = interviewQuery.Where(x => x.JobApplication.Job.CreatedByUserId == recruiterUserId);
        }

        var totalJobs = await jobQuery.CountAsync();
        var openJobs = await jobQuery.CountAsync(x => x.Status == "open");
        var totalApplications = await appQuery.CountAsync();
        var interviewsScheduled = await interviewQuery.CountAsync(x => x.Status == "scheduled");
        var stageCounts = await appQuery.GroupBy(x => x.Stage).Select(g => new { Stage = g.Key, Count = g.Count() }).ToListAsync();
        var recentApps = await appQuery.OrderByDescending(x => x.AppliedAt).Take(5).ToListAsync();
        var upcoming = await interviewQuery.Where(x => x.ScheduledAt >= DateTime.UtcNow && x.Status == "scheduled").OrderBy(x => x.ScheduledAt).Take(5).ToListAsync();

        var appliedCount = Math.Max(1, stageCounts.FirstOrDefault(x => x.Stage == "applied")?.Count ?? totalApplications);

        return ServiceResult<RecruiterDashboardDto>.Ok(new RecruiterDashboardDto
        {
            TotalJobs = totalJobs,
            OpenJobs = openJobs,
            TotalApplications = totalApplications,
            InterviewsScheduled = interviewsScheduled,
            StatCards =
            [
                new() { Label = "Open Jobs", Value = openJobs, Change = openJobs, Trend = "up" },
                new() { Label = "Applications", Value = totalApplications, Change = totalApplications, Trend = "up" },
                new() { Label = "Interviews", Value = interviewsScheduled, Change = interviewsScheduled, Trend = "neutral" },
                new() { Label = "Total Jobs", Value = totalJobs, Change = totalJobs, Trend = "up" }
            ],
            PipelineStages = stageCounts.Select(x => new PipelineStageCountDto
            {
                Stage = DtoMapper.NormalizeStage(x.Stage),
                Label = ToLabel(DtoMapper.NormalizeStage(x.Stage)),
                Count = x.Count,
                Percentage = Math.Clamp((int)Math.Round((double)x.Count / appliedCount * 100), 0, 100)
            }).ToList(),
            RecentActivity = recentApps.Select(x => new ActivityItemDto
            {
                Id = x.Id,
                Type = "application",
                CandidateName = x.CandidateUser.FullName,
                Message = $"applied for {x.Job.Title}",
                TimeAgo = "Today"
            }).ToList(),
            UpcomingInterviews = upcoming.Select(x => new UpcomingInterviewDto
            {
                Id = x.Id,
                CandidateName = x.JobApplication.CandidateUser.FullName,
                JobTitle = x.JobApplication.Job.Title,
                ScheduledTime = $"{x.ScheduledAt:hh:mm tt} – {x.ScheduledAt.AddHours(1):hh:mm tt}",
                ScheduledDate = x.ScheduledAt.Date == DateTime.UtcNow.Date ? "Today" : x.ScheduledAt.ToString("MMM dd"),
                Mode = DtoMapper.NormalizeMode(x.Mode),
                Interviewers = [user.FullName],
                MeetingLink = x.MeetingLink
            }).ToList()
        });
    }

    public async Task<ServiceResult<CandidateDashboardDto>> GetCandidateDashboardAsync(Guid candidateUserId)
    {
        var applications = _db.JobApplications.AsNoTracking().Where(x => x.CandidateUserId == candidateUserId);
        var appIds = await applications.Select(x => x.Id).ToListAsync();

        return ServiceResult<CandidateDashboardDto>.Ok(new CandidateDashboardDto
        {
            TotalApplications = appIds.Count,
            ActiveApplications = await applications.CountAsync(x => x.Status != "withdrawn"),
            InterviewsScheduled = await _db.Interviews.AsNoTracking().CountAsync(x => appIds.Contains(x.JobApplicationId) && x.Status == "scheduled")
        });
    }

    public async Task<ServiceResult<AnalyticsDto>> GetAnalyticsAsync(Guid recruiterUserId, DateTime? from, DateTime? to)
    {
        var start = from ?? DateTime.UtcNow.AddDays(-30);
        var end = to ?? DateTime.UtcNow;

        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == recruiterUserId);
        if (user is null) return ServiceResult<AnalyticsDto>.Fail("User not found.");

        var jobs = _db.Jobs.AsNoTracking().Where(x => x.CreatedAt >= start && x.CreatedAt <= end);
        var apps = _db.JobApplications.AsNoTracking().Include(x => x.Job).Where(x => x.AppliedAt >= start && x.AppliedAt <= end);

        if (user.Role != "Admin")
        {
            jobs = jobs.Where(x => x.CreatedByUserId == recruiterUserId);
            apps = apps.Where(x => x.Job.CreatedByUserId == recruiterUserId || x.AssignedRecruiterId == recruiterUserId);
        }

        var appsList = await apps.ToListAsync();
        var jobsList = await jobs.Include(x => x.Applications).ToListAsync();
        var hires = appsList.Count(x => x.Stage == "selected");

        return ServiceResult<AnalyticsDto>.Ok(new AnalyticsDto
        {
            JobsCreated = jobsList.Count,
            ApplicationsReceived = appsList.Count,
            CandidatesShortlisted = appsList.Count(x => x.Stage == "shortlisted"),
            From = start,
            To = end,
            TotalApplicationsThisMonth = appsList.Count,
            TotalHiresThisMonth = hires,
            AverageDaysToHire = 14,
            OfferAcceptanceRate = hires == 0 ? 0 : 80,
            ApplicationTrend = [new() { Month = DateTime.UtcNow.ToString("MMM"), Value = appsList.Count }],
            HireTrend = [new() { Month = DateTime.UtcNow.ToString("MMM"), Value = hires }],
            StageConversionRates = appsList.GroupBy(x => DtoMapper.NormalizeStage(x.Stage)).ToDictionary(g => g.Key, g => g.Count()),
            TopPerformingJobs = jobsList.Select(x => new TopPerformingJobDto
            {
                JobTitle = x.Title,
                Applications = x.Applications.Count,
                Hires = x.Applications.Count(a => a.Stage == "selected")
            }).OrderByDescending(x => x.Applications).Take(5).ToList()
        });
    }

    private static string ToLabel(string stage) => stage switch
    {
        "hr_round" => "HR Round",
        _ => string.Join(' ', stage.Split('_').Select(s => char.ToUpperInvariant(s[0]) + s[1..]))
    };
}
