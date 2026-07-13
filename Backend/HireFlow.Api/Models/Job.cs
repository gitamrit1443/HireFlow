namespace HireFlowBackend.Models;

public class Job
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Title { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string? Location { get; set; }
    public string? EmploymentType { get; set; }
    public string Experience { get; set; } = string.Empty;
    public decimal? Salary { get; set; }
    public decimal SalaryMin { get; set; }
    public decimal SalaryMax { get; set; }
    public string Currency { get; set; } = "INR";
    public string? SkillsCsv { get; set; }
    public string Status { get; set; } = "open"; // open, closed, draft, paused
    public DateTime? ClosingDate { get; set; }
    public string HiringManager { get; set; } = string.Empty;
    public int Openings { get; set; } = 1;
    public Guid CreatedByUserId { get; set; }
    public Guid? CompanyId { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public User CreatedByUser { get; set; } = null!;
    public Company? Company { get; set; }
    public List<JobApplication> Applications { get; set; } = [];
}
