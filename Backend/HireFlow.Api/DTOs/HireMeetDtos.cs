namespace HireFlowBackend.DTOs;

public class CreateMeetingRequest
{
    public string Title { get; set; } = string.Empty;
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public Guid? ApplicationId { get; set; }
    public string? CandidateName { get; set; }
    public string? CandidateId { get; set; }
    public string? JobTitle { get; set; }
    public DateTime? ScheduledFor { get; set; }
}

public class UpdateMeetingStatusRequest
{
    public Guid Id { get; set; }
    public Guid MeetingId { get; set; }
    public string Status { get; set; } = string.Empty;
    public int? Duration { get; set; }
}

public class JoinMeetingRequest
{
    public string RoomCode { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string ParticipantName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
}

public class JoinMeetingResponse
{
    public Guid MeetingId { get; set; }
    public string RoomCode { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public MeetingDto Meeting { get; set; } = new();
    public string DailyRoomUrl { get; set; } = string.Empty;
    public string MeetingToken { get; set; } = string.Empty;
    public bool IsHost { get; set; }
}

public class MeetingDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string RoomCode { get; set; } = string.Empty;
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public DateTime? ScheduledFor { get; set; }
    public string Status { get; set; } = string.Empty;
    public string CreatedByName { get; set; } = string.Empty;
    public string CreatedBy { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public string? CandidateName { get; set; }
    public string? CandidateId { get; set; }
    public string JobTitle { get; set; } = string.Empty;
    public string MeetUrl { get; set; } = string.Empty;
    public string DailyRoomUrl { get; set; } = string.Empty;
    public int? Duration { get; set; }
}
