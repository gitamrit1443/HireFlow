namespace HireFlowBackend.Models;

public class HireMeeting
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Title { get; set; } = string.Empty;
    public string RoomCode { get; set; } = string.Empty;
    public string? DailyRoomName { get; set; }
    public string? DailyRoomUrl { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public string Status { get; set; } = "waiting"; // waiting, live, ended
    public int? Duration { get; set; }
    public Guid CreatedByUserId { get; set; }
    public Guid? JobApplicationId { get; set; }
    public string? CandidateName { get; set; }
    public string? CandidateId { get; set; }
    public string? JobTitle { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public User CreatedByUser { get; set; } = null!;
    public JobApplication? JobApplication { get; set; }
}
