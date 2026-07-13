using System.Text.Json;

namespace HireFlowBackend.DTOs;

public class CandidateFilterRequest
{
    public string? Stage { get; set; }
    public string? Search { get; set; }
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 20;
}

public class UpdateCandidateStageRequest
{
    public Guid ApplicationId { get; set; }
    public JsonElement? Stage { get; set; }
}

public class AssignCandidateRequest
{
    public Guid ApplicationId { get; set; }
    public Guid RecruiterUserId { get; set; }
}

public class TagRequest
{
    public string Tag { get; set; } = string.Empty;
}

public class NotesRequest
{
    public string Notes { get; set; } = string.Empty;
}

public class FlagRequest
{
    public string Reason { get; set; } = string.Empty;
}

public class SubmitCandidateScoreRequest
{
    public Guid ApplicationId { get; set; }
    public int TechnicalScore { get; set; }
    public int CommunicationScore { get; set; }
    public int ProblemSolvingScore { get; set; }
    public int CultureFitScore { get; set; }
    public int OverallScore { get; set; }
    public string? Comment { get; set; }
    public string? Notes { get; set; }
}

public class CandidateScoreDto
{
    public Guid Id { get; set; }
    public Guid ApplicationId { get; set; }
    public Guid CandidateId { get; set; }
    public int TechnicalScore { get; set; }
    public int Technical { get; set; }
    public int CommunicationScore { get; set; }
    public int Communication { get; set; }
    public int ProblemSolvingScore { get; set; }
    public int ProblemSolving { get; set; }
    public int CultureFitScore { get; set; }
    public int CultureFit { get; set; }
    public int OverallScore { get; set; }
    public int Overall { get; set; }
    public string Recommendation { get; set; } = "maybe";
    public string? Comment { get; set; }
    public string? Notes { get; set; }
    public string EvaluatedBy { get; set; } = string.Empty;
    public DateTime ScoredAt { get; set; }
    public DateTime EvaluatedAt { get; set; }
}
