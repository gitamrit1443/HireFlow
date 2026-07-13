namespace HireFlowBackend.DTOs;

public class PlagiarismCheckRequest
{
    public string Text { get; set; } = string.Empty;
}

public class PlagiarismSourceDto
{
    public string Title { get; set; } = string.Empty;
    public string? Doi { get; set; }
    public string? PublicationYear { get; set; }
    public double SimilarityScore { get; set; }
}

public class PlagiarismCheckResponse
{
    public string Provider { get; set; } = "OpenAlex";
    public bool IsLikelyCopied { get; set; }
    public double HighestSimilarityScore { get; set; }
    public List<PlagiarismSourceDto> Sources { get; set; } = [];
    public string Note { get; set; } = "Basic open API similarity check. Final plagiarism decision manually verify karna.";
}

public class FullAnalysisRequest
{
    public string ApplicationId { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateEmail { get; set; } = string.Empty;
    public string CoverLetter { get; set; } = string.Empty;
    public string ResumeText { get; set; } = string.Empty;
    public int ApplicationsCountToday { get; set; }
}

public class FullAnalysisResponse
{
    public string ApplicationId { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public PlagiarismAnalysisDto Plagiarism { get; set; } = new();
    public SpamAnalysisDto Spam { get; set; } = new();
    public string OverallRisk { get; set; } = "low";
    public string Recommendation { get; set; } = "clear";
    public string Summary { get; set; } = string.Empty;
}

public class PlagiarismAnalysisDto
{
    public int SimilarityPercent { get; set; }
    public bool IsPlagiarised { get; set; }
    public string RiskLevel { get; set; } = "low";
    public List<string> MatchedSegments { get; set; } = [];
    public string Verdict { get; set; } = string.Empty;
}

public class SpamAnalysisDto
{
    public bool IsSpam { get; set; }
    public int SpamPercent { get; set; }
    public string RiskLevel { get; set; } = "low";
    public List<string> Flags { get; set; } = [];
    public string Verdict { get; set; } = string.Empty;
}
