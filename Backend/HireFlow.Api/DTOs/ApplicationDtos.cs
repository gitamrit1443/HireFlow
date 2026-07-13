namespace HireFlowBackend.DTOs;

public class ApplyJobRequest
{
    public Guid JobId { get; set; }
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
}

public class ApplicationDto
{
    public Guid Id { get; set; }
    public Guid ApplicationId { get; set; }
    public Guid JobId { get; set; }
    public string JobTitle { get; set; } = string.Empty;
    public string CompanyName { get; set; } = string.Empty;
    public Guid CandidateUserId { get; set; }
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateEmail { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string CurrentRole { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public int Experience { get; set; }
    public List<string> Skills { get; set; } = [];
    public string AvatarColor { get; set; } = "#4F46E5";
    public string Status { get; set; } = string.Empty;
    public string Stage { get; set; } = string.Empty;
    public int Score { get; set; }
    public string? ResumeUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? Notes { get; set; }
    public List<string> Tags { get; set; } = [];
    public bool IsFlagged { get; set; }
    public string? FlagReason { get; set; }
    public DateTime AppliedAt { get; set; }
    public DateTime AppliedDate { get; set; }
    public DateTime LastActivityDate { get; set; }
    public string AssignedTo { get; set; } = string.Empty;
}
