using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/jobs")]
[Route("jobs")]
public class JobsController : ApiControllerBase
{
    private readonly IJobService _jobService;

    public JobsController(IJobService jobService)
    {
        _jobService = jobService;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetJobs([FromQuery] JobFilterRequest filter)
    {
        var result = await _jobService.GetJobsAsync(filter);
        return Ok(ApiResponse<PagedResult<JobDto>>.Ok(result.Data!));
    }

    [HttpGet("{id:guid}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetJob(Guid id)
    {
        var result = await _jobService.GetJobByIdAsync(id);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<JobDto>.Ok(result.Data!));
    }

    [HttpPost]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> CreateJob(CreateJobRequest request)
    {
        var result = await _jobService.CreateJobAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return CreatedAtAction(nameof(GetJob), new { id = result.Data!.Id }, ApiResponse<JobDto>.Ok(result.Data!, "Job created."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> UpdateJob(Guid id, UpdateJobRequest request)
    {
        var result = await _jobService.UpdateJobAsync(id, request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<JobDto>.Ok(result.Data!, "Job updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> DeleteJob(Guid id)
    {
        var result = await _jobService.DeleteJobAsync(id, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPatch("{id:guid}/status")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> ChangeStatus(Guid id, ChangeJobStatusRequest request)
    {
        var result = await _jobService.ChangeJobStatusAsync(id, request.Status?.ToString() ?? string.Empty, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }
}
