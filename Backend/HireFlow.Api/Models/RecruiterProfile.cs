namespace HireFlowBackend.Models;

public class RecruiterProfile
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public Guid? CompanyId { get; set; }
    public string? Designation { get; set; }

    public User User { get; set; } = null!;
    public Company? Company { get; set; }
}
