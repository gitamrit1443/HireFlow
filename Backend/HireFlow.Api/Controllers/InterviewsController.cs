using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/interviews")]
[Route("interviews")]
[Authorize]
public class InterviewsController : ApiControllerBase
{
    private readonly IInterviewService _interviewService;

    public InterviewsController(IInterviewService interviewService)
    {
        _interviewService = interviewService;
    }

    [HttpGet]
    public async Task<IActionResult> GetInterviews()
    {
        var result = await _interviewService.GetInterviewsAsync(CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result.Data!));
    }

    [HttpGet("upcoming")]
    public async Task<IActionResult> GetUpcoming()
    {
        var result = await _interviewService.GetUpcomingAsync(CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result.Data!));
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetInterview(Guid id)
    {
        var result = await _interviewService.GetInterviewByIdAsync(id, CurrentUserId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<InterviewDto>.Ok(result.Data!));
    }

    [HttpGet("for-candidate/{applicationId:guid}")]
    public async Task<IActionResult> ForCandidate(Guid applicationId)
    {
        var result = await _interviewService.GetForCandidateAsync(applicationId, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result.Data!));
    }

    [HttpPost]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Create(CreateInterviewRequest request)
    {
        var result = await _interviewService.CreateInterviewAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<InterviewDto>.Ok(result.Data!, "Interview scheduled."));
    }

    [HttpPatch("{id:guid}/cancel")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Cancel(Guid id)
    {
        var result = await _interviewService.CancelInterviewAsync(id, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPost("feedback")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> SubmitFeedback(SubmitFeedbackRequest request)
    {
        var result = await _interviewService.SubmitFeedbackAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPost("book-ai")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> BookAi(BookAiInterviewRequest request)
    {
        var result = await _interviewService.BookAiInterviewAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<InterviewDto>.Ok(result.Data!, "AI interview booked."));
    }
}
