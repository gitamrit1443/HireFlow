using HireFlow.Domain.Common;
using HireFlow.Domain.Enums;

namespace HireFlow.Domain.Entities;

public class Job : BaseEntity
{
    // Matches frontend Job interface exactly
    public string Title { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public JobType Type { get; set; }
    public string Experience { get; set; } = string.Empty;   // "3-5 years"
    public decimal SalaryMin { get; set; }
    public decimal SalaryMax { get; set; }
    public string Currency { get; set; } = "INR";
    public string Skills { get; set; } = "[]";               // JSON array
    public string Description { get; set; } = string.Empty;
    public JobStatus Status { get; set; } = JobStatus.Draft;
    public DateTime PostedDate { get; set; } = DateTime.UtcNow;
    public DateTime? ClosingDate { get; set; }
    public string HiringManager { get; set; } = string.Empty;
    public int Openings { get; set; } = 1;

    // Source tracking for aggregated jobs
    public JobSource Source { get; set; } = JobSource.HireFlow;
    public string? ExternalJobId { get; set; }
    public string? ExternalUrl { get; set; }

    // Relations
    public Guid? RecruiterProfileId { get; set; }
    public RecruiterProfile? RecruiterProfile { get; set; }

    public Guid? CompanyId { get; set; }
    public Company? Company { get; set; }

    public ICollection<JobApplication> Applications { get; set; } = new List<JobApplication>();
    public ICollection<Interview> Interviews { get; set; } = new List<Interview>();

    // Computed — kept in sync by service
    public int ApplicantsCount { get; set; } = 0;
    public int ShortlistedCount { get; set; } = 0;
}
