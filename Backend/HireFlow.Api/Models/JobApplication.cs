namespace HireFlowBackend.Models;

public class JobApplication
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid JobId { get; set; }
    public Guid CandidateUserId { get; set; }
    public Guid? AssignedRecruiterId { get; set; }
    public string Status { get; set; } = "Submitted";
    public string Stage { get; set; } = "Applied";
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? Notes { get; set; }
    public string? TagsCsv { get; set; }
    public bool IsFlagged { get; set; }
    public string? FlagReason { get; set; }
    public DateTime AppliedAt { get; set; } = DateTime.UtcNow;

    public Job Job { get; set; } = null!;
    public User CandidateUser { get; set; } = null!;
    public User? AssignedRecruiter { get; set; }
    public CandidateScore? Score { get; set; }
    public List<Interview> Interviews { get; set; } = [];
}
