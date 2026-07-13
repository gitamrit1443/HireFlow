namespace HireFlowBackend.DTOs;

public class RecruiterDashboardDto
{
    public int TotalJobs { get; set; }
    public int OpenJobs { get; set; }
    public int TotalApplications { get; set; }
    public int InterviewsScheduled { get; set; }
    public List<StatCardDto> StatCards { get; set; } = [];
    public List<PipelineStageCountDto> PipelineStages { get; set; } = [];
    public List<ActivityItemDto> RecentActivity { get; set; } = [];
    public List<UpcomingInterviewDto> UpcomingInterviews { get; set; } = [];
}

public class CandidateDashboardDto
{
    public int TotalApplications { get; set; }
    public int ActiveApplications { get; set; }
    public int InterviewsScheduled { get; set; }
}

public class AnalyticsDto
{
    public int JobsCreated { get; set; }
    public int ApplicationsReceived { get; set; }
    public int CandidatesShortlisted { get; set; }
    public DateTime From { get; set; }
    public DateTime To { get; set; }
    public int TotalApplicationsThisMonth { get; set; }
    public int TotalHiresThisMonth { get; set; }
    public int AverageDaysToHire { get; set; }
    public int OfferAcceptanceRate { get; set; }
    public List<TrendPointDto> ApplicationTrend { get; set; } = [];
    public List<TrendPointDto> HireTrend { get; set; } = [];
    public Dictionary<string, int> StageConversionRates { get; set; } = [];
    public List<TopPerformingJobDto> TopPerformingJobs { get; set; } = [];
}

public class StatCardDto
{
    public string Label { get; set; } = string.Empty;
    public object Value { get; set; } = 0;
    public int Change { get; set; }
    public string Trend { get; set; } = "neutral";
    public string IconPath { get; set; } = "";
    public string AccentClass { get; set; } = "bg-indigo-100 text-indigo-600";
}

public class PipelineStageCountDto
{
    public string Stage { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public int Count { get; set; }
    public string BarColorClass { get; set; } = "bg-indigo-500";
    public string BadgeClass { get; set; } = "badge badge-outline";
    public int Percentage { get; set; }
}

public class ActivityItemDto
{
    public Guid Id { get; set; }
    public string Type { get; set; } = "application";
    public string CandidateName { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string TimeAgo { get; set; } = "Today";
    public string AvatarColor { get; set; } = "#4F46E5";
}

public class UpcomingInterviewDto
{
    public Guid Id { get; set; }
    public string CandidateName { get; set; } = string.Empty;
    public string AvatarColor { get; set; } = "#4F46E5";
    public string JobTitle { get; set; } = string.Empty;
    public string ScheduledTime { get; set; } = string.Empty;
    public string ScheduledDate { get; set; } = string.Empty;
    public string Mode { get; set; } = "online";
    public List<string> Interviewers { get; set; } = [];
    public string? MeetingLink { get; set; }
}

public class TrendPointDto
{
    public string Month { get; set; } = string.Empty;
    public int Value { get; set; }
}

public class TopPerformingJobDto
{
    public string JobTitle { get; set; } = string.Empty;
    public int Applications { get; set; }
    public int Hires { get; set; }
}
