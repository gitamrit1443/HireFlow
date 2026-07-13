namespace HireFlowBackend.Models;

public class Interview
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid JobApplicationId { get; set; }
    public Guid CreatedByUserId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public string Round { get; set; } = "technical";
    public string Mode { get; set; } = "online";
    public string? MeetingLink { get; set; }
    public string? Location { get; set; }
    public string? Agenda { get; set; }
    public string Timezone { get; set; } = "IST";
    public string? InterviewersJson { get; set; }
    public string Status { get; set; } = "scheduled"; // scheduled, cancelled, completed, rescheduled
    public string? Feedback { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public JobApplication JobApplication { get; set; } = null!;
    public User CreatedByUser { get; set; } = null!;
}
