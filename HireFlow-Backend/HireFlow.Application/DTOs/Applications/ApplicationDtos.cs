using System.ComponentModel.DataAnnotations;

namespace HireFlow.Application.DTOs.Applications;

public class ApplyJobRequest
{
    [Required] public Guid JobId { get; set; }
    public Guid? ResumeId { get; set; }
    public Guid? CoverLetterId { get; set; }
    public string? CoverLetterText { get; set; }
}

public class ApplicationDto
{
    public Guid Id { get; set; }
    public Guid JobId { get; set; }
    public string JobTitle { get; set; } = string.Empty;
    public string CompanyName { get; set; } = string.Empty;
    public string Stage { get; set; } = string.Empty;
    public int Score { get; set; }
    public string AppliedDate { get; set; } = string.Empty;
    public string LastActivityDate { get; set; } = string.Empty;
    public string? ResumeUrl { get; set; }
    public bool IsFlagged { get; set; }
    public string? FlagReason { get; set; }
}
