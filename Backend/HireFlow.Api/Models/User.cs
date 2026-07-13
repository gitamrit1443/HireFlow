namespace HireFlowBackend.Models;

public class User
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Role { get; set; } = "Candidate"; // Admin, Recruiter, Candidate
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public CandidateProfile? CandidateProfile { get; set; }
    public RecruiterProfile? RecruiterProfile { get; set; }
}
