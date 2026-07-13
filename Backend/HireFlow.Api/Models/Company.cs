namespace HireFlowBackend.Models;

public class Company
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string? Website { get; set; }
    public string? Location { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public List<RecruiterProfile> Recruiters { get; set; } = [];
    public List<Job> Jobs { get; set; } = [];
}
