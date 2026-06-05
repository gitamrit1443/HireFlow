using HireFlow.Application.Interfaces;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace HireFlow.Infrastructure.Services.Background;

public class JobSyncBackgroundJob
{
    private readonly IJobService _jobService;
    private readonly ILogger<JobSyncBackgroundJob> _logger;

    public JobSyncBackgroundJob(IJobService jobService, ILogger<JobSyncBackgroundJob> logger)
    {
        _jobService = jobService;
        _logger = logger;
    }

    /// <summary>
    /// Runs daily via Hangfire.
    /// Fetches jobs from LinkedIn, Indeed, Jooble, Wellfound, Founder.
    /// Wire in API keys from appsettings.json.
    /// </summary>
    public async Task SyncExternalJobsAsync()
    {
        _logger.LogInformation("[JobSync] Starting external job sync at {Time}", DateTime.UtcNow);
        var result = await _jobService.SyncExternalJobsAsync();
        if (result.IsSuccess)
            _logger.LogInformation("[JobSync] Completed successfully");
        else
            _logger.LogWarning("[JobSync] Failed: {Error}", result.Error);
    }
}

public class InterviewReminderJob
{
    private readonly HireFlowDbContext _db;
    private readonly IEmailService _emailService;
    private readonly ILogger<InterviewReminderJob> _logger;

    public InterviewReminderJob(HireFlowDbContext db, IEmailService emailService,
        ILogger<InterviewReminderJob> logger)
    {
        _db = db;
        _emailService = emailService;
        _logger = logger;
    }

    /// <summary>Runs hourly — sends email reminders for interviews in the next 24h</summary>
    public async Task SendRemindersAsync()
    {
        var window = DateTime.UtcNow.AddHours(24);

        var upcoming = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .Where(i => i.Status == Domain.Enums.InterviewStatus.Scheduled
                && i.ScheduledDate <= DateOnly.FromDateTime(window).ToDateTime(TimeOnly.MinValue))
            .ToListAsync();

        foreach (var interview in upcoming)
        {
            try
            {
                var email = interview.Application.CandidateProfile.User.Email;
                var name = interview.Application.CandidateProfile.User.FullName;
                var dateTime = interview.ScheduledDate.Date + TimeSpan.Parse(interview.StartTime);
                await _emailService.SendInterviewReminderAsync(email, name, dateTime, interview.Job.Title);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[InterviewReminder] Failed for interview {Id}", interview.Id);
            }
        }
    }
}
