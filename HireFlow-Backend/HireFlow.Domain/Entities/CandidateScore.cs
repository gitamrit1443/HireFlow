using HireFlow.Domain.Common;
using HireFlow.Domain.Enums;

namespace HireFlow.Domain.Entities;

public class CandidateScore : BaseEntity
{
    public Guid ApplicationId { get; set; }
    public JobApplication Application { get; set; } = null!;

    // Matches frontend CandidateScore exactly
    public int Technical { get; set; }        // 0-10
    public int Communication { get; set; }    // 0-10
    public int ProblemSolving { get; set; }   // 0-10
    public int CultureFit { get; set; }       // 0-10
    public int Overall { get; set; }          // 0-10
    public HireRecommendation Recommendation { get; set; }
    public string Notes { get; set; } = string.Empty;
    public string EvaluatedBy { get; set; } = string.Empty;
    public Guid EvaluatedById { get; set; }
    public DateTime EvaluatedAt { get; set; } = DateTime.UtcNow;
}
