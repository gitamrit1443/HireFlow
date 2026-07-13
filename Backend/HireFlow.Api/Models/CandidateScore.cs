namespace HireFlowBackend.Models;

public class CandidateScore
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid JobApplicationId { get; set; }
    public int TechnicalScore { get; set; }
    public int CommunicationScore { get; set; }
    public int CultureFitScore { get; set; }
    public int OverallScore { get; set; }
    public string? Comment { get; set; }
    public Guid ScoredByUserId { get; set; }
    public DateTime ScoredAt { get; set; } = DateTime.UtcNow;

    public JobApplication JobApplication { get; set; } = null!;
    public User ScoredByUser { get; set; } = null!;
}
