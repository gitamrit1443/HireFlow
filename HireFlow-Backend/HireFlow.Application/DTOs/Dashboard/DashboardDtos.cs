namespace HireFlow.Application.DTOs.Dashboard;

/// <summary>Matches frontend StatCard interface</summary>
public class StatCardDto
{
    public string Label { get; set; } = string.Empty;
    public object Value { get; set; } = 0;
    public int Change { get; set; }
    public string Trend { get; set; } = "neutral";     // "up","down","neutral"
    public string IconPath { get; set; } = string.Empty;
    public string AccentClass { get; set; } = string.Empty;
}

/// <summary>Matches frontend PipelineStageCount</summary>
public class PipelineStageCountDto
{
    public string Stage { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public int Count { get; set; }
    public string BarColorClass { get; set; } = string.Empty;
    public string BadgeClass { get; set; } = string.Empty;
    public int Percentage { get; set; }
}

/// <summary>Matches frontend ActivityItem</summary>
public class ActivityItemDto
{
    public string Id { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string TimeAgo { get; set; } = string.Empty;
    public string AvatarColor { get; set; } = "#6366F1";
}

/// <summary>Matches frontend UpcomingInterview</summary>
public class UpcomingInterviewDto
{
    public string Id { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string AvatarColor { get; set; } = "#6366F1";
    public string JobTitle { get; set; } = string.Empty;
    public string ScheduledTime { get; set; } = string.Empty;
    public string ScheduledDate { get; set; } = string.Empty;
    public string Mode { get; set; } = "online";
    public List<string> Interviewers { get; set; } = new();
    public string? MeetingLink { get; set; }
}

public class RecruiterDashboardDto
{
    public List<StatCardDto> StatCards { get; set; } = new();
    public List<PipelineStageCountDto> PipelineStages { get; set; } = new();
    public List<ActivityItemDto> RecentActivity { get; set; } = new();
    public List<UpcomingInterviewDto> UpcomingInterviews { get; set; } = new();
}

public class CandidateDashboardDto
{
    public int TotalApplications { get; set; }
    public int ActiveApplications { get; set; }
    public int InterviewsScheduled { get; set; }
    public int Offers { get; set; }
    public List<ApplicationSummaryDto> RecentApplications { get; set; } = new();
    public List<UpcomingInterviewDto> UpcomingInterviews { get; set; } = new();
}

public class ApplicationSummaryDto
{
    public string JobTitle { get; set; } = string.Empty;
    public string CompanyName { get; set; } = string.Empty;
    public string Stage { get; set; } = string.Empty;
    public string AppliedDate { get; set; } = string.Empty;
    public string StatusBadgeClass { get; set; } = string.Empty;
}

public class AnalyticsDto
{
    public int TotalApplicationsThisMonth { get; set; }
    public int TotalHiresThisMonth { get; set; }
    public double AverageDaysToHire { get; set; }
    public double OfferAcceptanceRate { get; set; }
    public List<MonthlyDataPoint> ApplicationTrend { get; set; } = new();
    public List<MonthlyDataPoint> HireTrend { get; set; } = new();
    public Dictionary<string, int> StageConversionRates { get; set; } = new();
    public List<TopJobDto> TopPerformingJobs { get; set; } = new();
}

public class MonthlyDataPoint
{
    public string Month { get; set; } = string.Empty;
    public int Value { get; set; }
}

public class TopJobDto
{
    public string JobTitle { get; set; } = string.Empty;
    public int Applications { get; set; }
    public int Hires { get; set; }
}
