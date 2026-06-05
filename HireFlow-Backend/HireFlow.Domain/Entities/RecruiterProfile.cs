using HireFlow.Domain.Common;

namespace HireFlow.Domain.Entities;

public class RecruiterProfile : BaseEntity
{
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    public string? Title { get; set; }
    public string? Department { get; set; }
    public string? Bio { get; set; }
    public string? AvatarColor { get; set; }
    public string? LinkedInUrl { get; set; }

    public Guid? CompanyId { get; set; }
    public Company? Company { get; set; }

    // Navigations
    public ICollection<Job> PostedJobs { get; set; } = new List<Job>();
    public ICollection<Interview> ScheduledInterviews { get; set; } = new List<Interview>();
    public ICollection<HireMeeting> CreatedMeetings { get; set; } = new List<HireMeeting>();
}
