using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/onboarding")]
[Authorize]
public class OnboardingController : ApiControllerBase
{
    private readonly IOnboardingService _onboardingService;

    public OnboardingController(IOnboardingService onboardingService)
    {
        _onboardingService = onboardingService;
    }

    [HttpGet("status")]
    public async Task<IActionResult> GetStatus()
    {
        var result = await _onboardingService.GetStatusAsync(CurrentUserId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<OnboardingStatusDto>.Ok(result.Data!));
    }

    [HttpPut("candidate")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> CompleteCandidate(CandidateOnboardingRequest request)
    {
        var result = await _onboardingService.CompleteCandidateAsync(CurrentUserId, request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<OnboardingStatusDto>.Ok(result.Data!, "Candidate onboarding saved."));
    }

    [HttpPut("recruiter")]
    [Authorize(Roles = "Recruiter")]
    public async Task<IActionResult> CompleteRecruiter(RecruiterOnboardingRequest request)
    {
        var result = await _onboardingService.CompleteRecruiterAsync(CurrentUserId, request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<OnboardingStatusDto>.Ok(result.Data!, "Recruiter onboarding saved."));
    }
}
