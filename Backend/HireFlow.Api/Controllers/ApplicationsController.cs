using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/applications")]
[Route("applications")]
[Authorize]
public class ApplicationsController : ApiControllerBase
{
    private readonly IApplicationService _applicationService;

    public ApplicationsController(IApplicationService applicationService)
    {
        _applicationService = applicationService;
    }

    [HttpPost]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> Apply(ApplyJobRequest request)
    {
        var result = await _applicationService.ApplyAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<ApplicationDto>.Ok(result.Data!, "Application submitted."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> Withdraw(Guid id)
    {
        var result = await _applicationService.WithdrawAsync(id, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpGet("mine")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> Mine([FromQuery] int page = 1, [FromQuery] int pageSize = 20)
    {
        var result = await _applicationService.GetMyApplicationsAsync(CurrentUserId, page, pageSize);
        return Ok(ApiResponse<PagedResult<ApplicationDto>>.Ok(result.Data!));
    }
}
