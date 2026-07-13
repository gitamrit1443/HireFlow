using System.Text.Json;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;

namespace HireFlowBackend.Services;

public static class DtoMapper
{
    public static JobDto ToDto(Job job)
    {
        var skills = SplitCsv(job.SkillsCsv);
        var status = NormalizeStatus(job.Status);
        var type = NormalizeJobType(job.EmploymentType);
        var apps = job.Applications ?? new List<JobApplication>();

        return new JobDto
        {
            Id = job.Id,
            Title = job.Title,
            Department = job.Department,
            Description = job.Description,
            Location = job.Location ?? string.Empty,
            Type = type,
            EmploymentType = type,
            Experience = job.Experience,
            Salary = job.Salary,
            SalaryMin = job.SalaryMin,
            SalaryMax = job.SalaryMax,
            Currency = string.IsNullOrWhiteSpace(job.Currency) ? "INR" : job.Currency,
            Skills = skills,
            Status = status,
            PostedDate = job.CreatedAt,
            ClosingDate = job.ClosingDate,
            ApplicantsCount = apps.Count,
            ShortlistedCount = apps.Count(x => NormalizeStage(x.Stage) is "shortlisted" or "assessment" or "interview" or "hr_round" or "selected"),
            HiringManager = string.IsNullOrWhiteSpace(job.HiringManager) ? job.CreatedByUser.FullName : job.HiringManager,
            Openings = job.Openings <= 0 ? 1 : job.Openings,
            CompanyName = job.Company?.Name,
            RecruiterName = job.CreatedByUser.FullName,
            CreatedAt = job.CreatedAt
        };
    }

    public static ApplicationDto ToDto(JobApplication app)
    {
        var profile = app.CandidateUser.CandidateProfile;
        var tags = SplitCsv(app.TagsCsv);
        var skills = SplitCsv(profile?.SkillsCsv);
        var stage = NormalizeStage(app.Stage);
        var score = app.Score?.OverallScore ?? 0;
        var assignedTo = app.AssignedRecruiter?.FullName ?? app.Job.CreatedByUser.FullName;
        var companyName = app.Job.Company?.Name ?? string.Empty;

        return new ApplicationDto
        {
            Id = app.Id,
            ApplicationId = app.Id,
            JobId = app.JobId,
            JobTitle = app.Job.Title,
            CompanyName = companyName,
            CandidateUserId = app.CandidateUserId,
            CandidateName = app.CandidateUser.FullName,
            CandidateEmail = app.CandidateUser.Email,
            Name = app.CandidateUser.FullName,
            Email = app.CandidateUser.Email,
            Phone = profile?.Phone ?? string.Empty,
            CurrentRole = profile?.ExperienceSummary ?? "Candidate",
            Department = app.Job.Department,
            Location = app.Job.Location ?? string.Empty,
            Experience = ExtractExperienceYears(profile?.ExperienceSummary),
            Skills = skills.Count > 0 ? skills : SplitCsv(app.Job.SkillsCsv),
            Status = app.Status,
            Stage = stage,
            Score = score,
            ResumeUrl = app.ResumeUrl,
            CoverLetter = app.CoverLetter,
            Notes = app.Notes,
            Tags = tags,
            IsFlagged = app.IsFlagged,
            FlagReason = app.FlagReason,
            AppliedAt = app.AppliedAt,
            AppliedDate = app.AppliedAt,
            LastActivityDate = app.AppliedAt,
            AssignedTo = assignedTo
        };
    }

    public static CandidateScoreDto ToDto(CandidateScore score)
    {
        var technical = score.TechnicalScore;
        var communication = score.CommunicationScore;
        var problemSolving = 0;
        var culture = score.CultureFitScore;
        var overall = score.OverallScore;

        return new CandidateScoreDto
        {
            Id = score.Id,
            ApplicationId = score.JobApplicationId,
            CandidateId = score.JobApplicationId,
            TechnicalScore = technical,
            Technical = technical,
            CommunicationScore = communication,
            Communication = communication,
            ProblemSolvingScore = problemSolving,
            ProblemSolving = problemSolving,
            CultureFitScore = culture,
            CultureFit = culture,
            OverallScore = overall,
            Overall = overall,
            Recommendation = overall >= 8 ? "strong_hire" : overall >= 6 ? "hire" : overall >= 4 ? "maybe" : "no_hire",
            Comment = score.Comment,
            Notes = score.Comment,
            EvaluatedBy = score.ScoredByUser?.FullName ?? string.Empty,
            ScoredAt = score.ScoredAt,
            EvaluatedAt = score.ScoredAt
        };
    }

    public static InterviewDto ToDto(Interview interview)
    {
        var scheduledDate = interview.ScheduledAt.ToString("yyyy-MM-dd");
        var startTime = interview.ScheduledAt.ToString("HH:mm");
        var endTime = interview.ScheduledAt.AddHours(1).ToString("HH:mm");
        var interviewers = Deserialize<List<InterviewerDto>>(interview.InterviewersJson) ?? new List<InterviewerDto>();
        if (interviewers.Count == 0)
        {
            interviewers.Add(new InterviewerDto
            {
                Id = interview.CreatedByUserId.ToString(),
                Name = interview.CreatedByUser?.FullName ?? "Recruiter",
                Role = "Recruiter"
            });
        }

        return new InterviewDto
        {
            Id = interview.Id,
            ApplicationId = interview.JobApplicationId,
            CandidateId = interview.JobApplicationId,
            CandidateName = interview.JobApplication.CandidateUser.FullName,
            JobTitle = interview.JobApplication.Job.Title,
            JobId = interview.JobApplication.JobId,
            Department = interview.JobApplication.Job.Department,
            Round = NormalizeRound(interview.Round),
            Mode = NormalizeMode(interview.Mode),
            Status = NormalizeInterviewStatus(interview.Status),
            ScheduledAt = interview.ScheduledAt,
            ScheduledDate = scheduledDate,
            StartTime = startTime,
            EndTime = endTime,
            Timezone = string.IsNullOrWhiteSpace(interview.Timezone) ? "IST" : interview.Timezone,
            Interviewers = interviewers,
            MeetingLink = interview.MeetingLink,
            Location = interview.Location,
            Agenda = interview.Agenda,
            Feedback = Deserialize<InterviewFeedbackDto>(interview.Feedback)
        };
    }

    public static MeetingDto ToDto(HireMeeting meeting)
    {
        var candidateName = meeting.CandidateName ?? meeting.JobApplication?.CandidateUser.FullName;
        var jobTitle = meeting.JobTitle ?? meeting.JobApplication?.Job?.Title ?? string.Empty;
        return new MeetingDto
        {
            Id = meeting.Id,
            Title = meeting.Title,
            RoomCode = meeting.RoomCode,
            StartTime = meeting.StartTime,
            EndTime = meeting.EndTime,
            ScheduledFor = meeting.StartTime,
            Status = NormalizeMeetingStatus(meeting.Status),
            CreatedByName = meeting.CreatedByUser.FullName,
            CreatedBy = meeting.CreatedByUser.FullName,
            CreatedAt = meeting.CreatedAt,
            CandidateName = candidateName,
            CandidateId = meeting.CandidateId ?? meeting.JobApplicationId?.ToString(),
            JobTitle = jobTitle,
            MeetUrl = meeting.DailyRoomUrl ?? string.Empty,
            DailyRoomUrl = meeting.DailyRoomUrl ?? string.Empty,
            Duration = meeting.Duration
        };
    }

    public static NotificationDto ToDto(Notification notification) => new()
    {
        Id = notification.Id,
        Title = notification.Title,
        Message = notification.Message,
        IsRead = notification.IsRead,
        CreatedAt = notification.CreatedAt
    };

    public static string NormalizeStatus(string? status) => (status ?? "open").Trim().ToLowerInvariant() switch
    {
        "closed" => "closed",
        "draft" => "draft",
        "paused" => "paused",
        _ => "open"
    };

    public static string NormalizeStage(string? stage) => (stage ?? "applied").Trim().ToLowerInvariant().Replace(" ", "_") switch
    {
        "shortlisted" => "shortlisted",
        "assessment" => "assessment",
        "interview" => "interview",
        "hr_round" => "hr_round",
        "selected" => "selected",
        "rejected" => "rejected",
        "withdrawn" => "withdrawn",
        _ => "applied"
    };

    public static string NormalizeJobType(string? type) => (type ?? "full-time").Trim().ToLowerInvariant().Replace(" ", "-") switch
    {
        "part-time" => "part-time",
        "contract" => "contract",
        "remote" => "remote",
        _ => "full-time"
    };

    public static string NormalizeRound(string? round) => (round ?? "technical").Trim().ToLowerInvariant().Replace(" ", "_") switch
    {
        "screening" => "screening",
        "system_design" => "system_design",
        "hr" => "hr",
        "leadership" => "leadership",
        "final" => "final",
        _ => "technical"
    };

    public static string NormalizeMode(string? mode) => (mode ?? "online").Trim().ToLowerInvariant() switch
    {
        "offline" => "offline",
        "phone" => "phone",
        _ => "online"
    };

    public static string NormalizeInterviewStatus(string? status) => (status ?? "scheduled").Trim().ToLowerInvariant() switch
    {
        "completed" => "completed",
        "cancelled" => "cancelled",
        "rescheduled" => "rescheduled",
        _ => "scheduled"
    };

    public static string NormalizeMeetingStatus(string? status) => (status ?? "waiting").Trim().ToLowerInvariant() switch
    {
        "live" => "live",
        "ended" => "ended",
        _ => "waiting"
    };

    public static List<string> SplitCsv(string? value) => string.IsNullOrWhiteSpace(value)
        ? []
        : value.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList();

    public static string JoinCsv(IEnumerable<string>? values) => values is null
        ? string.Empty
        : string.Join(',', values.Where(x => !string.IsNullOrWhiteSpace(x)).Select(x => x.Trim()).Distinct(StringComparer.OrdinalIgnoreCase));

    private static T? Deserialize<T>(string? json)
    {
        if (string.IsNullOrWhiteSpace(json)) return default;
        try { return JsonSerializer.Deserialize<T>(json); }
        catch { return default; }
    }

    private static int ExtractExperienceYears(string? value)
    {
        if (string.IsNullOrWhiteSpace(value)) return 0;
        var number = new string(value.Where(char.IsDigit).Take(2).ToArray());
        return int.TryParse(number, out var years) ? years : 0;
    }
}
