using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/analysis")]
[Route("analysis")]
[Authorize(Roles = "Recruiter,Admin")]
public class AnalysisController : ApiControllerBase
{
    private readonly IPlagiarismService _plagiarismService;

    public AnalysisController(IPlagiarismService plagiarismService)
    {
        _plagiarismService = plagiarismService;
    }

    [HttpPost("full")]
    public async Task<IActionResult> Full(FullAnalysisRequest request)
    {
        var text = string.Join("\n\n", new[] { request.CoverLetter, request.ResumeText }
            .Where(x => !string.IsNullOrWhiteSpace(x)));

        if (string.IsNullOrWhiteSpace(text))
        {
            text = $"Candidate {request.CandidateName} application analysis.";
        }

        var plagiarism = await _plagiarismService.CheckAsync(text);
        var plagiarismScore = plagiarism.IsSuccess ? (int)Math.Round(plagiarism.Data!.HighestSimilarityScore) : 0;
        plagiarismScore = Math.Clamp(plagiarismScore, 0, 100);

        var spam = CalculateSpam(request);
        var overall = RiskLevel(Math.Max(plagiarismScore, spam.Score));
        var recommendation = overall is "critical" or "high" ? "review" : "clear";

        var response = new FullAnalysisResponse
        {
            ApplicationId = request.ApplicationId,
            CandidateName = request.CandidateName,
            OverallRisk = overall,
            Recommendation = recommendation,
            Summary = BuildSummary(overall, plagiarismScore, spam.Score),
            Plagiarism = new PlagiarismAnalysisDto
            {
                SimilarityPercent = plagiarismScore,
                IsPlagiarised = plagiarismScore >= 70,
                RiskLevel = RiskLevel(plagiarismScore),
                MatchedSegments = plagiarism.IsSuccess
                    ? plagiarism.Data!.Sources.Take(3).Select(x => x.Title).Where(x => !string.IsNullOrWhiteSpace(x)).ToList()
                    : [],
                Verdict = plagiarism.IsSuccess
                    ? plagiarism.Data!.Note
                    : "Open plagiarism provider unavailable; local heuristic completed."
            },
            Spam = new SpamAnalysisDto
            {
                IsSpam = spam.Score >= 70,
                SpamPercent = spam.Score,
                RiskLevel = RiskLevel(spam.Score),
                Flags = spam.Flags,
                Verdict = spam.Flags.Count == 0
                    ? "No major spam signals detected."
                    : "Some spam-like or low-effort application signals were detected."
            }
        };

        return Ok(ApiResponse<FullAnalysisResponse>.Ok(response, "Analysis completed."));
    }

    private static (int Score, List<string> Flags) CalculateSpam(FullAnalysisRequest request)
    {
        var flags = new List<string>();
        var score = 0;
        var text = (request.CoverLetter ?? string.Empty).Trim();
        var lower = text.ToLowerInvariant();

        if (text.Length < 80)
        {
            score += 25;
            flags.Add("Cover letter is very short.");
        }

        var suspicious = new[] { "urgent hire", "guaranteed", "click here", "work from home earning", "copy paste", "100% sure" };
        foreach (var phrase in suspicious)
        {
            if (lower.Contains(phrase))
            {
                score += 20;
                flags.Add($"Suspicious phrase detected: {phrase}");
            }
        }

        if (request.ApplicationsCountToday > 10)
        {
            score += 30;
            flags.Add("High number of applications submitted today.");
        }

        if (!string.IsNullOrWhiteSpace(request.CandidateEmail) && !request.CandidateEmail.Contains('@'))
        {
            score += 20;
            flags.Add("Candidate email format looks invalid.");
        }

        return (Math.Clamp(score, 0, 100), flags);
    }

    private static string RiskLevel(int score) => score switch
    {
        >= 85 => "critical",
        >= 65 => "high",
        >= 35 => "medium",
        _ => "low"
    };

    private static string BuildSummary(string risk, int plagiarismScore, int spamScore)
    {
        return risk switch
        {
            "critical" => $"Critical review recommended. Similarity {plagiarismScore}% and spam score {spamScore}%.",
            "high" => $"Manual review recommended. Similarity {plagiarismScore}% and spam score {spamScore}%.",
            "medium" => $"Application looks mostly usable, but a recruiter should quickly review it. Similarity {plagiarismScore}% and spam score {spamScore}%.",
            _ => $"Application looks clear for demo screening. Similarity {plagiarismScore}% and spam score {spamScore}%."
        };
    }
}
