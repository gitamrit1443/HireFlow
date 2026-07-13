using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/plagiarism")]
[Route("plagiarism")]
[Authorize(Roles = "Recruiter,Admin")]
public class PlagiarismController : ApiControllerBase
{
    private readonly IPlagiarismService _plagiarismService;

    public PlagiarismController(IPlagiarismService plagiarismService)
    {
        _plagiarismService = plagiarismService;
    }

    [HttpPost("check")]
    public async Task<IActionResult> Check(PlagiarismCheckRequest request)
    {
        var result = await _plagiarismService.CheckAsync(request.Text);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<PlagiarismCheckResponse>.Ok(result.Data!, "Plagiarism check completed."));
    }
}
