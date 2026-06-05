using HireFlow.Domain.Common;

namespace HireFlow.Domain.Entities;

public class Company : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? LogoUrl { get; set; }
    public string? Website { get; set; }
    public string? Industry { get; set; }
    public string? Location { get; set; }
    public string? Size { get; set; }   // "1-10", "11-50", "51-200", "200+"
    public bool IsVerified { get; set; } = false;

    public ICollection<RecruiterProfile> Recruiters { get; set; } = new List<RecruiterProfile>();
    public ICollection<Job> Jobs { get; set; } = new List<Job>();
}
