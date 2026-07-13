namespace HireFlowBackend.Models;

public class CandidateProfile
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public string? Phone { get; set; }
    public string? ResumeUrl { get; set; }
    public string? SkillsCsv { get; set; }
    public string? ExperienceSummary { get; set; }

    public User User { get; set; } = null!;
}
