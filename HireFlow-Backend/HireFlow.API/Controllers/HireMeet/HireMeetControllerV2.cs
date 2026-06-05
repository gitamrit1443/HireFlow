using HireFlow.Application.Common;
using HireFlow.Application.DTOs.HireMeet;
using HireFlow.Application.Interfaces;
using HireFlow.Infrastructure.Services.HireMeet;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HireFlow.API.Controllers.HireMeet;

[ApiController]
[Route("api/v1/hiremeet")]
[Authorize]
public class HireMeetControllerV2 : ControllerBase
{
    private readonly HireMeetServiceV2 _meet;

    public HireMeetControllerV2(HireMeetServiceV2 meet) => _meet = meet;

    [HttpGet]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> GetMeetings()
    {
        var result = await _meet.GetMeetingsAsync(GetUserId());
        return Ok(ApiResponse<List<HireMeetingDto>>.Ok(result.Data!));
    }

    [HttpGet("room/{roomCode}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetByRoomCode(string roomCode)
    {
        var result = await _meet.GetByRoomCodeAsync(roomCode);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<HireMeetingDto>.Ok(result.Data!));
    }

    [HttpPost]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Create([FromBody] CreateMeetingRequest request)
    {
        var result = await _meet.CreateMeetingAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<HireMeetingDto>.Ok(result.Data!, "Meeting room created."));
    }

    /// <summary>
    /// Join a meeting room.
    /// Returns Daily.co room URL + meeting token for iframe embed.
    /// Frontend embeds: https://hireroom.daily.co/{roomCode}?t={token}
    /// </summary>
    [HttpPost("join")]
    [AllowAnonymous]
    public async Task<IActionResult> Join([FromBody] JoinMeetingRequest request)
    {
        Guid? userId = User.Identity?.IsAuthenticated == true ? GetUserId() : null;
        var isHost = User.IsInRole("Recruiter") || User.IsInRole("Admin");

        var result = await _meet.JoinWithTokenAsync(request, userId, isHost);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));

        return Ok(ApiResponse<JoinMeetingResponse>.Ok(result.Data!,
            "Joined meeting. Use dailyRoomUrl + meetingToken to connect."));
    }

    [HttpPatch("status")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> UpdateStatus([FromBody] UpdateMeetingStatusRequest request)
    {
        var result = await _meet.UpdateStatusAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Status updated."));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await _meet.DeleteMeetingAsync(id, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Meeting deleted."));
    }

    private Guid GetUserId() => Guid.Parse(
        User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub")
        ?? Guid.Empty.ToString());
}
