using HireFlow.Domain.Common;
using HireFlow.Domain.Enums;

namespace HireFlow.Domain.Entities;

public class JobApplication : BaseEntity
{
    public Guid JobId { get; set; }
    public Job Job { get; set; } = null!;

    public Guid CandidateProfileId { get; set; }
    public CandidateProfile CandidateProfile { get; set; } = null!;

    // Matches frontend Candidate model
    public HiringStage Stage { get; set; } = HiringStage.Applied;
    public int Score { get; set; } = 0;               // 0-100
    public string? Tags { get; set; }                 // JSON: ["Top Prospect","Referral"]
    public string? AssignedTo { get; set; }           // recruiter name
    public Guid? AssignedToId { get; set; }
    public string? Notes { get; set; }

    // Application metadata
    public DateTime AppliedDate { get; set; } = DateTime.UtcNow;
    public DateTime LastActivityDate { get; set; } = DateTime.UtcNow;
    public string? ResumeUrl { get; set; }
    public string? CoverLetterText { get; set; }

    // Spam detection
    public bool IsFlagged { get; set; } = false;
    public string? FlagReason { get; set; }

    // Navigations
    public ICollection<CandidateScore> Scores { get; set; } = new List<CandidateScore>();
    public ICollection<StageHistory> StageHistories { get; set; } = new List<StageHistory>();
}
