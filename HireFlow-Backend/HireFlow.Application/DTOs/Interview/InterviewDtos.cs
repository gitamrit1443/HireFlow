using HireFlow.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace HireFlow.Application.DTOs.Interview;

public class InterviewerDto
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string AvatarColor { get; set; } = "#6366F1";
}

/// <summary>Matches frontend Interview interface exactly</summary>
public class InterviewDto
{
    public Guid Id { get; set; }
    public string CandidateId { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateColor { get; set; } = "#6366F1";
    public string JobTitle { get; set; } = string.Empty;
    public string JobId { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Round { get; set; } = string.Empty;           // "technical","hr" etc
    public string Mode { get; set; } = string.Empty;            // "online","offline","phone"
    public string Status { get; set; } = string.Empty;          // "scheduled","completed" etc
    public string ScheduledDate { get; set; } = string.Empty;   // "2025-04-22"
    public string StartTime { get; set; } = string.Empty;       // "14:00"
    public string EndTime { get; set; } = string.Empty;         // "15:30"
    public string Timezone { get; set; } = "IST";
    public List<InterviewerDto> Interviewers { get; set; } = new();
    public string? MeetingLink { get; set; }
    public string? Location { get; set; }
    public string? Agenda { get; set; }
    public InterviewFeedbackDto? Feedback { get; set; }
}

/// <summary>Matches frontend InterviewFeedback exactly</summary>
public class InterviewFeedbackDto
{
    public string InterviewId { get; set; } = string.Empty;
    public string SubmittedBy { get; set; } = string.Empty;
    public string SubmittedAt { get; set; } = string.Empty;
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

public class CreateInterviewRequest
{
    [Required] public Guid ApplicationId { get; set; }
    [Required] public Guid JobId { get; set; }
    [Required] public InterviewRound Round { get; set; }
    [Required] public InterviewMode Mode { get; set; }
    [Required] public DateTime ScheduledDate { get; set; }
    [Required] public string StartTime { get; set; } = string.Empty;
    [Required] public string EndTime { get; set; } = string.Empty;
    public string Timezone { get; set; } = "IST";
    public List<InterviewerDto> Interviewers { get; set; } = new();
    public string? MeetingLink { get; set; }
    public string? Location { get; set; }
    public string? Agenda { get; set; }
}

public class SubmitFeedbackRequest
{
    [Required] public Guid InterviewId { get; set; }
    [Range(1, 10)] public int TechnicalScore { get; set; }
    [Range(1, 10)] public int CommunicationScore { get; set; }
    [Range(1, 10)] public int ProblemSolvingScore { get; set; }
    [Range(1, 10)] public int CultureFitScore { get; set; }
    [Range(1, 10)] public int OverallScore { get; set; }
    [Required] public HireRecommendation Recommendation { get; set; }
    public string Strengths { get; set; } = string.Empty;
    public string Concerns { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
}

public class BookAiInterviewRequest
{
    [Required] public DateTime BookedFor { get; set; }
    public Guid? JobId { get; set; }
}
