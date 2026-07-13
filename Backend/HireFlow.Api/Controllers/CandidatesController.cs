using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/candidates")]
[Route("candidates")]
[Authorize(Roles = "Recruiter,Admin")]
public class CandidatesController : ApiControllerBase
{
    private readonly ICandidateService _candidateService;

    public CandidatesController(ICandidateService candidateService)
    {
        _candidateService = candidateService;
    }

    [HttpGet]
    public async Task<IActionResult> GetCandidates([FromQuery] CandidateFilterRequest filter)
    {
        var result = await _candidateService.GetCandidatesAsync(filter, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<PagedResult<ApplicationDto>>.Ok(result.Data!));
    }

    [HttpGet("{applicationId:guid}")]
    public async Task<IActionResult> GetCandidate(Guid applicationId)
    {
        var result = await _candidateService.GetCandidateByIdAsync(applicationId, CurrentUserId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<ApplicationDto>.Ok(result.Data!));
    }

    [HttpPatch("stage")]
    public async Task<IActionResult> UpdateStage(UpdateCandidateStageRequest request)
    {
        var result = await _candidateService.UpdateStageAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPatch("assign")]
    public async Task<IActionResult> Assign(AssignCandidateRequest request)
    {
        var result = await _candidateService.AssignRecruiterAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPost("{applicationId:guid}/tags")]
    public async Task<IActionResult> AddTag(Guid applicationId, TagRequest request)
    {
        var result = await _candidateService.AddTagAsync(applicationId, request.Tag, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpDelete("{applicationId:guid}/tags/{tag}")]
    public async Task<IActionResult> RemoveTag(Guid applicationId, string tag)
    {
        var result = await _candidateService.RemoveTagAsync(applicationId, tag, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPatch("{applicationId:guid}/notes")]
    public async Task<IActionResult> UpdateNotes(Guid applicationId, NotesRequest request)
    {
        var result = await _candidateService.UpdateNotesAsync(applicationId, request.Notes, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPost("score")]
    public async Task<IActionResult> SubmitScore(SubmitCandidateScoreRequest request)
    {
        var result = await _candidateService.SubmitScoreAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<CandidateScoreDto>.Ok(result.Data!, "Score saved."));
    }

    [HttpGet("{applicationId:guid}/score")]
    public async Task<IActionResult> GetScore(Guid applicationId)
    {
        var result = await _candidateService.GetScoreAsync(applicationId, CurrentUserId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<CandidateScoreDto>.Ok(result.Data!));
    }

    [HttpPost("{applicationId:guid}/flag")]
    public async Task<IActionResult> Flag(Guid applicationId, FlagRequest request)
    {
        var result = await _candidateService.FlagApplicationAsync(applicationId, request.Reason, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }
}
