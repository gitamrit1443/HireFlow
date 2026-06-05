using HireFlow.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace HireFlow.Application.DTOs.Jobs;

/// <summary>Matches frontend Job interface exactly</summary>
public class JobDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;       // "full-time" etc (frontend format)
    public string Experience { get; set; } = string.Empty;
    public decimal SalaryMin { get; set; }
    public decimal SalaryMax { get; set; }
    public string Currency { get; set; } = "INR";
    public List<string> Skills { get; set; } = new();
    public string Description { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;     // "open","closed" etc
    public string PostedDate { get; set; } = string.Empty; // ISO date
    public string? ClosingDate { get; set; }
    public int ApplicantsCount { get; set; }
    public int ShortlistedCount { get; set; }
    public string HiringManager { get; set; } = string.Empty;
    public int Openings { get; set; }
    public string? CompanyName { get; set; }
    public JobSource Source { get; set; }
    public string? ExternalUrl { get; set; }
}

public class CreateJobRequest
{
    [Required] public string Title { get; set; } = string.Empty;
    [Required] public string Department { get; set; } = string.Empty;
    [Required] public string Location { get; set; } = string.Empty;
    [Required] public JobType Type { get; set; }
    [Required] public string Experience { get; set; } = string.Empty;
    public decimal SalaryMin { get; set; }
    public decimal SalaryMax { get; set; }
    public string Currency { get; set; } = "INR";
    public List<string> Skills { get; set; } = new();
    [Required] public string Description { get; set; } = string.Empty;
    public JobStatus Status { get; set; } = JobStatus.Draft;
    public DateTime? ClosingDate { get; set; }
    [Required] public string HiringManager { get; set; } = string.Empty;
    public int Openings { get; set; } = 1;
}

public class UpdateJobRequest : CreateJobRequest
{
    public Guid Id { get; set; }
}

public class JobFilterRequest
{
    public string? Search { get; set; }
    public JobStatus? Status { get; set; }
    public JobType? Type { get; set; }
    public string? Department { get; set; }
    public string? Location { get; set; }
    public JobSource? Source { get; set; }
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 20;
    public string SortBy { get; set; } = "postedDate";
    public string SortDir { get; set; } = "desc";
}
