using HireFlow.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace HireFlow.Application.DTOs.HireMeet;

/// <summary>Matches frontend HireMeeting interface exactly</summary>
public class HireMeetingDto
{
    public Guid Id { get; set; }
    public string RoomCode { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string? CandidateId { get; set; }
    public string JobTitle { get; set; } = string.Empty;
    public string CreatedBy { get; set; } = string.Empty;
    public string CreatedAt { get; set; } = string.Empty;
    public string? ScheduledFor { get; set; }
    public string Status { get; set; } = "waiting";   // "waiting","live","ended"
    public int? Duration { get; set; }
    public string MeetUrl { get; set; } = string.Empty;
}

public class CreateMeetingRequest
{
    [Required] public string Title { get; set; } = string.Empty;
    [Required] public string CandidateName { get; set; } = string.Empty;
    public string? CandidateId { get; set; }
    [Required] public string JobTitle { get; set; } = string.Empty;
    public DateTime? ScheduledFor { get; set; }
}

public class UpdateMeetingStatusRequest
{
    [Required] public Guid Id { get; set; }
    [Required] public MeetingStatus Status { get; set; }
    public int? Duration { get; set; }
}

public class JoinMeetingRequest
{
    [Required] public string RoomCode { get; set; } = string.Empty;
    [Required] public string ParticipantName { get; set; } = string.Empty;
    public string? Role { get; set; }  // "recruiter" or "candidate"
}
