using System.Text.Json;

namespace HireFlowBackend.DTOs;

public class CreateInterviewRequest
{
    public Guid ApplicationId { get; set; }
    public Guid? JobId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string? ScheduledDate { get; set; }
    public string? StartTime { get; set; }
    public string? EndTime { get; set; }
    public string Timezone { get; set; } = "IST";
    public JsonElement? Round { get; set; }
    public JsonElement? Mode { get; set; }
    public string? MeetingLink { get; set; }
    public string? Location { get; set; }
    public string? Agenda { get; set; }
    public List<InterviewerDto> Interviewers { get; set; } = [];
}

public class SubmitFeedbackRequest
{
    public Guid InterviewId { get; set; }
    public string Feedback { get; set; } = string.Empty;
    public int TechnicalScore { get; set; }
    public int CommunicationScore { get; set; }
    public int ProblemSolvingScore { get; set; }
    public int CultureFitScore { get; set; }
    public int OverallScore { get; set; }
    public JsonElement? Recommendation { get; set; }
    public string? Strengths { get; set; }
    public string? Concerns { get; set; }
    public string? Notes { get; set; }
}

public class BookAiInterviewRequest
{
    public Guid ApplicationId { get; set; }
    public DateTime PreferredTime { get; set; }
}

public class InterviewerDto
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string AvatarColor { get; set; } = "#4F46E5";
}

public class InterviewFeedbackDto
{
    public Guid InterviewId { get; set; }
    public string SubmittedBy { get; set; } = string.Empty;
    public DateTime SubmittedAt { get; set; }
    public int TechnicalScore { get; set; }
    public int CommunicationScore { get; set; }
    public int ProblemSolvingScore { get; set; }
    public int CultureFitScore { get; set; }
    public int OverallScore { get; set; }
    public string Recommendation { get; set; } = "maybe";
    public string Strengths { get; set; } = string.Empty;
    public string Concerns { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
}

public class InterviewDto
{
    public Guid Id { get; set; }
    public Guid ApplicationId { get; set; }
    public Guid CandidateId { get; set; }
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateColor { get; set; } = "#4F46E5";
    public string JobTitle { get; set; } = string.Empty;
    public Guid JobId { get; set; }
    public string Department { get; set; } = string.Empty;
    public string Round { get; set; } = "technical";
    public string Mode { get; set; } = "online";
    public string Status { get; set; } = "scheduled";
    public DateTime ScheduledAt { get; set; }
    public string ScheduledDate { get; set; } = string.Empty;
    public string StartTime { get; set; } = string.Empty;
    public string EndTime { get; set; } = string.Empty;
    public string Timezone { get; set; } = "IST";
    public List<InterviewerDto> Interviewers { get; set; } = [];
    public string? MeetingLink { get; set; }
    public string? Location { get; set; }
    public string? Agenda { get; set; }
    public InterviewFeedbackDto? Feedback { get; set; }
}
