using System.Text.Json;

namespace HireFlowBackend.DTOs;

public class JobFilterRequest
{
    public string? Search { get; set; }
    public string? Location { get; set; }
    public string? Status { get; set; }
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 20;
}

public class CreateJobRequest
{
    public string Title { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string? Location { get; set; }
    public JsonElement? Type { get; set; }
    public string? EmploymentType { get; set; }
    public string Experience { get; set; } = string.Empty;
    public decimal? Salary { get; set; }
    public decimal? SalaryMin { get; set; }
    public decimal? SalaryMax { get; set; }
    public string Currency { get; set; } = "INR";
    public List<string> Skills { get; set; } = [];
    public JsonElement? Status { get; set; }
    public DateTime? ClosingDate { get; set; }
    public string HiringManager { get; set; } = string.Empty;
    public int Openings { get; set; } = 1;
    public Guid? CompanyId { get; set; }
}

public class UpdateJobRequest : CreateJobRequest { }

public class ChangeJobStatusRequest
{
    public JsonElement? Status { get; set; }
}

public class JobDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Type { get; set; } = "full-time";
    public string EmploymentType { get; set; } = "full-time";
    public string Experience { get; set; } = string.Empty;
    public decimal? Salary { get; set; }
    public decimal SalaryMin { get; set; }
    public decimal SalaryMax { get; set; }
    public string Currency { get; set; } = "INR";
    public List<string> Skills { get; set; } = [];
    public string Status { get; set; } = "open";
    public DateTime PostedDate { get; set; }
    public DateTime? ClosingDate { get; set; }
    public int ApplicantsCount { get; set; }
    public int ShortlistedCount { get; set; }
    public string HiringManager { get; set; } = string.Empty;
    public int Openings { get; set; } = 1;
    public string? CompanyName { get; set; }
    public string RecruiterName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public int? Source { get; set; }
    public string? ExternalUrl { get; set; }
}
