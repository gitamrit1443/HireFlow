using HireFlow.Application.Common;
using HireFlow.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

namespace HireFlow.API.Controllers.Analysis;

public class FullAnalysisRequest
{
    public string ApplicationId { get; set; } = string.Empty;
    public string CandidateName { get; set; } = string.Empty;
    public string CandidateEmail { get; set; } = string.Empty;
    public string CoverLetter { get; set; } = string.Empty;
    public string ResumeText { get; set; } = string.Empty;
    public int ApplicationsCountToday { get; set; }
}

[ApiController]
[Route("api/v1/analysis")]
[Authorize(Roles = "Recruiter,Admin")]
public class AnalysisController : ControllerBase
{
    private readonly HttpClient _http;
    private readonly HireFlowDbContext _db;
    private readonly IConfiguration _config;

    public AnalysisController(IHttpClientFactory factory, HireFlowDbContext db, IConfiguration config)
    {
        _http = factory.CreateClient("plagiarism");
        _db = db;
        _config = config;
    }

    /// <summary>
    /// Full plagiarism + spam analysis.
    /// Fetches all existing cover letters from DB, then calls FastAPI service.
    /// </summary>
    [HttpPost("full")]
    public async Task<IActionResult> FullAnalysis([FromBody] FullAnalysisRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.CoverLetter))
            return BadRequest(ApiResponse<object>.Fail("A cover letter is required for analysis."));

        // Fetch all existing cover letters for comparison
        var existingTexts = await _db.JobApplications
            .Where(a => a.CoverLetterText != null && a.CoverLetterText.Length > 50
                        && a.Id.ToString() != request.ApplicationId)
            .Select(a => a.CoverLetterText!)
            .Take(200)  // Cap at 200 for performance
            .ToListAsync();

        // Count today's applications from this candidate
        var candidateApp = await _db.JobApplications
            .Include(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .FirstOrDefaultAsync(a => a.Id.ToString() == request.ApplicationId);

        int appsToday = 0;
        if (candidateApp != null)
        {
            var today = DateTime.UtcNow.Date;
            appsToday = await _db.JobApplications
                .CountAsync(a => a.CandidateProfileId == candidateApp.CandidateProfileId
                                 && a.AppliedDate.Date == today);
        }

        // Build FastAPI payload
        var payload = new
        {
            application_id        = request.ApplicationId,
            candidate_name        = request.CandidateName,
            candidate_email       = request.CandidateEmail,
            cover_letter          = request.CoverLetter,
            resume_text           = request.ResumeText,
            job_title             = candidateApp?.Job?.Title ?? "",
            existing_cover_letters = existingTexts,
            applications_count_today = appsToday,
            same_ip_count         = 0  // Can wire in from AuditLog if needed
        };

        var json = JsonSerializer.Serialize(payload);
        var baseUrl = _config["ExternalApis:PlagiarismService:BaseUrl"] ?? "http://localhost:8000";

        HttpResponseMessage response;
        try
        {
            response = await _http.PostAsync(
                $"{baseUrl}/api/plagiarism/full-analysis",
                new StringContent(json, Encoding.UTF8, "application/json")
            );
        }
        catch (HttpRequestException)
        {
            return StatusCode(503, ApiResponse<object>.Fail("Analysis service unavailable."));
        }
        catch (TaskCanceledException)
        {
            return StatusCode(504, ApiResponse<object>.Fail("Analysis service timed out."));
        }

        if (!response.IsSuccessStatusCode)
            return StatusCode(503, ApiResponse<object>.Fail("Analysis service unavailable."));

        var resultJson = await response.Content.ReadAsStringAsync();
        using var doc = JsonDocument.Parse(resultJson);

        return Ok(doc.RootElement);
    }
}
