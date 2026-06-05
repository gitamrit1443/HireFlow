using HireFlow.Domain.Common;
using HireFlow.Domain.Enums;

namespace HireFlow.Domain.Entities;

public class StageHistory : BaseEntity
{
    public Guid ApplicationId { get; set; }
    public JobApplication Application { get; set; } = null!;
    public HiringStage FromStage { get; set; }
    public HiringStage ToStage { get; set; }
    public string? ChangedBy { get; set; }
    public Guid? ChangedById { get; set; }
    public string? Notes { get; set; }
    public DateTime ChangedAt { get; set; } = DateTime.UtcNow;
}

/// <summary>Matches frontend Interview interface exactly</summary>
public class Interview : BaseEntity
{
    public Guid ApplicationId { get; set; }
    public JobApplication Application { get; set; } = null!;

    public Guid JobId { get; set; }
    public Job Job { get; set; } = null!;

    // Recruiter who scheduled
    public Guid? RecruiterProfileId { get; set; }
    public RecruiterProfile? RecruiterProfile { get; set; }

    // Matches frontend Interview model
    public InterviewRound Round { get; set; }
    public InterviewMode Mode { get; set; }
    public InterviewStatus Status { get; set; } = InterviewStatus.Scheduled;

    public DateTime ScheduledDate { get; set; }
    public string StartTime { get; set; } = string.Empty;  // "14:00"
    public string EndTime { get; set; } = string.Empty;    // "15:30"
    public string Timezone { get; set; } = "IST";

    public string? MeetingLink { get; set; }
    public string? Location { get; set; }
    public string? Agenda { get; set; }

    // Interviewers stored as JSON for flexibility
    public string? InterviewersJson { get; set; }   // JSON: [{id,name,role,avatarColor}]

    public InterviewFeedback? Feedback { get; set; }
    public ICollection<InterviewBooking> Bookings { get; set; } = new List<InterviewBooking>();
}

/// <summary>Matches frontend InterviewFeedback exactly</summary>
public class InterviewFeedback : BaseEntity
{
    public Guid InterviewId { get; set; }
    public Interview Interview { get; set; } = null!;

    public string SubmittedBy { get; set; } = string.Empty;
    public Guid SubmittedById { get; set; }
    public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;

    // Scores 1-10
    public int TechnicalScore { get; set; }
    public int CommunicationScore { get; set; }
    public int ProblemSolvingScore { get; set; }
    public int CultureFitScore { get; set; }
    public int OverallScore { get; set; }

    public HireRecommendation Recommendation { get; set; }
    public string Strengths { get; set; } = string.Empty;
    public string Concerns { get; set; } = string.Empty;
    public string Notes { get; set; } = string.Empty;
}

/// <summary>Candidate booking a free AI-bot interview slot</summary>
public class InterviewBooking : BaseEntity
{
    public Guid CandidateProfileId { get; set; }
    public CandidateProfile CandidateProfile { get; set; } = null!;

    public Guid? InterviewId { get; set; }  // linked to a recruiter interview if any
    public Interview? Interview { get; set; }

    public DateTime BookedFor { get; set; }
    public InterviewStatus Status { get; set; } = InterviewStatus.Scheduled;
    public bool IsAiBot { get; set; } = false;
    public string? ExternalSessionId { get; set; }  // interviewing.io session id
    public string? SummaryJson { get; set; }         // AI interview summary
    public string? RecordingUrl { get; set; }
}
