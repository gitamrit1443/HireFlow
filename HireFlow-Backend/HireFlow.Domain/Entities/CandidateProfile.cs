using HireFlow.Domain.Common;

namespace HireFlow.Domain.Entities;

public class CandidateProfile : BaseEntity
{
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    public string? Headline { get; set; }
    public string? Bio { get; set; }
    public string? Location { get; set; }
    public string? CurrentRole { get; set; }
    public string? CurrentCompany { get; set; }
    public int? YearsOfExperience { get; set; }
    public string? AvatarColor { get; set; }        // hex colour, matches frontend
    public string? LinkedInUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string? PortfolioUrl { get; set; }
    public bool OpenToWork { get; set; } = true;
    public decimal? ExpectedSalaryMin { get; set; }
    public decimal? ExpectedSalaryMax { get; set; }
    public string? Skills { get; set; }             // JSON: ["Angular","TypeScript"]
    public string? PreferredLocations { get; set; } // JSON array

    // Navigations
    public ICollection<Resume> Resumes { get; set; } = new List<Resume>();
    public ICollection<CoverLetter> CoverLetters { get; set; } = new List<CoverLetter>();
    public ICollection<Portfolio> Portfolios { get; set; } = new List<Portfolio>();
    public ICollection<JobApplication> Applications { get; set; } = new List<JobApplication>();
    public ICollection<WorkExperience> WorkExperiences { get; set; } = new List<WorkExperience>();
    public ICollection<Education> Educations { get; set; } = new List<Education>();
    public ICollection<Certification> Certifications { get; set; } = new List<Certification>();
    public ICollection<InterviewBooking> InterviewBookings { get; set; } = new List<InterviewBooking>();
}
