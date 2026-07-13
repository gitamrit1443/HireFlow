using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/hiremeet")]
[Route("hiremeet")]
public class HireMeetController : ApiControllerBase
{
    private readonly IHireMeetService _hireMeetService;
    private readonly IConfiguration _configuration;

    public HireMeetController(IHireMeetService hireMeetService, IConfiguration configuration)
    {
        _hireMeetService = hireMeetService;
        _configuration = configuration;
    }

    [HttpGet("config-status")]
    [Authorize(Roles = "Recruiter,Admin")]
    public IActionResult ConfigStatus()
    {
        var apiKey = _configuration["DailyCo:ApiKey"]?.Trim();
        return Ok(ApiResponse<object>.Ok(new
        {
            hasApiKey = !string.IsNullOrWhiteSpace(apiKey),
            subdomain = _configuration["DailyCo:Subdomain"] ?? "hireroom",
            note = string.IsNullOrWhiteSpace(apiKey)
                ? "Daily.co API key missing. Fallback room URL will be used."
                : "Daily.co API key found. New rooms will be created through Daily.co."
        }));
    }

    [HttpGet]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> GetMeetings()
    {
        var result = await _hireMeetService.GetMeetingsAsync(CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<List<MeetingDto>>.Ok(result.Data!));
    }

    [HttpGet("room/{roomCode}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetByRoomCode(string roomCode)
    {
        var result = await _hireMeetService.GetByRoomCodeAsync(roomCode);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<MeetingDto>.Ok(result.Data!));
    }

    [HttpPost]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Create(CreateMeetingRequest request)
    {
        var result = await _hireMeetService.CreateMeetingAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<MeetingDto>.Ok(result.Data!, "Meeting created."));
    }

    [HttpPatch("status")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> UpdateStatus(UpdateMeetingStatusRequest request)
    {
        var result = await _hireMeetService.UpdateStatusAsync(request, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await _hireMeetService.DeleteMeetingAsync(id, CurrentUserId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!));
    }

    [HttpPost("join")]
    [AllowAnonymous]
    public async Task<IActionResult> Join(JoinMeetingRequest request)
    {
        var userId = User.Identity?.IsAuthenticated == true ? CurrentUserId : (Guid?)null;
        var result = await _hireMeetService.JoinMeetingAsync(request, userId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<JoinMeetingResponse>.Ok(result.Data!, "Joined meeting."));
    }
}
