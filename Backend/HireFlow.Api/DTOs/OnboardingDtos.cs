namespace HireFlowBackend.DTOs;

public class CandidateOnboardingRequest
{
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string? ResumeUrl { get; set; }
    public List<string> Skills { get; set; } = [];
    public string ExperienceSummary { get; set; } = string.Empty;
}

public class RecruiterOnboardingRequest
{
    public string FullName { get; set; } = string.Empty;
    public string Designation { get; set; } = string.Empty;
    public string CompanyName { get; set; } = string.Empty;
    public string? Website { get; set; }
    public string Location { get; set; } = string.Empty;
}

public class CandidateOnboardingProfileDto
{
    public string? Phone { get; set; }
    public string? ResumeUrl { get; set; }
    public List<string> Skills { get; set; } = [];
    public string? ExperienceSummary { get; set; }
}

public class RecruiterOnboardingProfileDto
{
    public string? Designation { get; set; }
    public Guid? CompanyId { get; set; }
    public string? CompanyName { get; set; }
    public string? Website { get; set; }
    public string? Location { get; set; }
}

public class OnboardingStatusDto
{
    public string Role { get; set; } = string.Empty;
    public bool IsComplete { get; set; }
    public string NextStep { get; set; } = string.Empty;
    public List<string> MissingFields { get; set; } = [];
    public CandidateOnboardingProfileDto? CandidateProfile { get; set; }
    public RecruiterOnboardingProfileDto? RecruiterProfile { get; set; }
}
