using HireFlow.Domain.Common;
using HireFlow.Domain.Enums;

namespace HireFlow.Domain.Entities;

/// <summary>Matches frontend HireMeeting model exactly</summary>
public class HireMeeting : BaseEntity
{
    public string RoomCode { get; set; } = string.Empty;   // "abc-def-ghi"
    public string Title { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public Guid? CandidateId { get; set; }
    public string JobTitle { get; set; } = string.Empty;
    public string CreatedBy { get; set; } = string.Empty;
    public Guid CreatedById { get; set; }

    public Guid? RecruiterProfileId { get; set; }
    public RecruiterProfile? RecruiterProfile { get; set; }

    public DateTime? ScheduledFor { get; set; }
    public MeetingStatus Status { get; set; } = MeetingStatus.Waiting;
    public int? Duration { get; set; }   // seconds, set when ended

    public string? RecordingUrl { get; set; }
    public string? SummaryJson { get; set; }

    public ICollection<MeetParticipant> Participants { get; set; } = new List<MeetParticipant>();
}

/// <summary>Matches frontend MeetParticipant model</summary>
public class MeetParticipant : BaseEntity
{
    public Guid HireMeetingId { get; set; }
    public HireMeeting HireMeeting { get; set; } = null!;

    public string Name { get; set; } = string.Empty;
    public ParticipantRole Role { get; set; }
    public string AvatarColor { get; set; } = "#6366F1";
    public bool IsHost { get; set; } = false;

    public Guid? UserId { get; set; }
    public DateTime JoinedAt { get; set; } = DateTime.UtcNow;
    public DateTime? LeftAt { get; set; }
}
