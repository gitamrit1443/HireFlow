using HireFlow.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace HireFlow.Application.DTOs.Candidates;

/// <summary>Matches frontend Candidate interface exactly</summary>
public class CandidateDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string AvatarColor { get; set; } = "#6366F1";
    public string CurrentRole { get; set; } = string.Empty;
    public string JobTitle { get; set; } = string.Empty;
    public string JobId { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public int Experience { get; set; }
    public List<string> Skills { get; set; } = new();
    public string Stage { get; set; } = "applied";           // frontend string format
    public int Score { get; set; }
    public string AppliedDate { get; set; } = string.Empty;
    public string LastActivityDate { get; set; } = string.Empty;
    public string? ResumeUrl { get; set; }
    public List<string> Tags { get; set; } = new();
    public string AssignedTo { get; set; } = string.Empty;
    public string? Notes { get; set; }
    public Guid ApplicationId { get; set; }
}

/// <summary>Matches frontend CandidateScore exactly</summary>
public class CandidateScoreDto
{
    public Guid CandidateId { get; set; }
    public int Technical { get; set; }
    public int Communication { get; set; }
    public int ProblemSolving { get; set; }
    public int CultureFit { get; set; }
    public int Overall { get; set; }
    public string Recommendation { get; set; } = "maybe"; // "strong_hire"|"hire"|"maybe"|"no_hire"
    public string Notes { get; set; } = string.Empty;
    public string EvaluatedBy { get; set; } = string.Empty;
    public string EvaluatedAt { get; set; } = string.Empty;
}

public class UpdateCandidateStageRequest
{
    [Required] public Guid ApplicationId { get; set; }
    [Required] public HiringStage Stage { get; set; }
    public string? Notes { get; set; }
}

public class AssignCandidateRequest
{
    [Required] public Guid ApplicationId { get; set; }
    [Required] public Guid RecruiterId { get; set; }
}

public class AddCandidateTagRequest
{
    [Required] public Guid ApplicationId { get; set; }
    [Required] public string Tag { get; set; } = string.Empty;
}

public class SubmitCandidateScoreRequest
{
    [Required] public Guid ApplicationId { get; set; }
    [Range(0, 10)] public int Technical { get; set; }
    [Range(0, 10)] public int Communication { get; set; }
    [Range(0, 10)] public int ProblemSolving { get; set; }
    [Range(0, 10)] public int CultureFit { get; set; }
    [Range(0, 10)] public int Overall { get; set; }
    [Required] public HireRecommendation Recommendation { get; set; }
    public string Notes { get; set; } = string.Empty;
}

public class CandidateFilterRequest
{
    public string? Search { get; set; }
    public Guid? JobId { get; set; }
    public HiringStage? Stage { get; set; }
    public string? Department { get; set; }
    public Guid? AssignedToId { get; set; }
    public bool? IsFlagged { get; set; }
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 20;
    public string SortBy { get; set; } = "appliedDate";
    public string SortDir { get; set; } = "desc";
}
