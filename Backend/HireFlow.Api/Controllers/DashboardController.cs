using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/dashboard")]
[Route("dashboard")]
[Authorize]
public class DashboardController : ApiControllerBase
{
    private readonly IDashboardService _dashboardService;

    public DashboardController(IDashboardService dashboardService)
    {
        _dashboardService = dashboardService;
    }

    [HttpGet("recruiter")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Recruiter()
    {
        var result = await _dashboardService.GetRecruiterDashboardAsync(CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<RecruiterDashboardDto>.Ok(result.Data!));
    }

    [HttpGet("candidate")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> Candidate()
    {
        var result = await _dashboardService.GetCandidateDashboardAsync(CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<CandidateDashboardDto>.Ok(result.Data!));
    }

    [HttpGet("analytics")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Analytics([FromQuery] DateTime? from, [FromQuery] DateTime? to)
    {
        var result = await _dashboardService.GetAnalyticsAsync(CurrentUserId, from, to);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<AnalyticsDto>.Ok(result.Data!));
    }
}
