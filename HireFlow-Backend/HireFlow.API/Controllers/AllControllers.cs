using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Jobs;
using HireFlow.Application.DTOs.Candidates;
using HireFlow.Application.DTOs.Applications;
using HireFlow.Application.DTOs.Interview;
using HireFlow.Application.DTOs.HireMeet;
using HireFlow.Application.DTOs.Dashboard;
using HireFlow.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

// ===================== JOBS CONTROLLER =====================
namespace HireFlow.API.Controllers.Jobs
{

[ApiController]
[Route("api/v1/jobs")]
[Authorize]
public class JobsController : ControllerBase
{
    private readonly IJobService _jobs;
    public JobsController(IJobService jobs) => _jobs = jobs;

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetJobs([FromQuery] JobFilterRequest filter)
    {
        var result = await _jobs.GetJobsAsync(filter);
        return Ok(ApiResponse<PagedResult<JobDto>>.Ok(result.Data!));
    }

    [HttpGet("{id:guid}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetJob(Guid id)
    {
        var result = await _jobs.GetJobByIdAsync(id);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<JobDto>.Ok(result.Data!));
    }

    [HttpPost]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> CreateJob([FromBody] CreateJobRequest request)
    {
        var result = await _jobs.CreateJobAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return CreatedAtAction(nameof(GetJob), new { id = result.Data!.Id },
            ApiResponse<JobDto>.Ok(result.Data, "Job created successfully."));
    }

    [HttpPut("{id:guid}")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> UpdateJob(Guid id, [FromBody] UpdateJobRequest request)
    {
        request.Id = id;
        var result = await _jobs.UpdateJobAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<JobDto>.Ok(result.Data!));
    }

    [HttpDelete("{id:guid}")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> DeleteJob(Guid id)
    {
        var result = await _jobs.DeleteJobAsync(id, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Job deleted."));
    }

    [HttpPatch("{id:guid}/status")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> ChangeStatus(Guid id, [FromBody] ChangeStatusRequest body)
    {
        var result = await _jobs.ChangeJobStatusAsync(id, body.Status, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Status updated."));
    }

    [HttpPost("sync")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> SyncJobs()
    {
        var result = await _jobs.SyncExternalJobsAsync();
        return Ok(ApiResponse.Ok("External job sync triggered."));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}

public class ChangeStatusRequest
{
    public string Status { get; set; } = string.Empty;
}

// ===================== CANDIDATES CONTROLLER =====================
}

namespace HireFlow.API.Controllers.Candidates
{

[ApiController]
[Route("api/v1/candidates")]
[Authorize(Roles = "Recruiter,Admin")]
public class CandidatesController : ControllerBase
{
    private readonly ICandidateService _candidates;
    public CandidatesController(ICandidateService candidates) => _candidates = candidates;

    [HttpGet]
    public async Task<IActionResult> GetCandidates([FromQuery] CandidateFilterRequest filter)
    {
        var result = await _candidates.GetCandidatesAsync(filter, GetUserId());
        return Ok(ApiResponse<PagedResult<CandidateDto>>.Ok(result.Data!));
    }

    [HttpGet("{applicationId:guid}")]
    public async Task<IActionResult> GetCandidate(Guid applicationId)
    {
        var result = await _candidates.GetCandidateByIdAsync(applicationId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<CandidateDto>.Ok(result.Data!));
    }

    [HttpPatch("stage")]
    public async Task<IActionResult> UpdateStage([FromBody] UpdateCandidateStageRequest request)
    {
        var result = await _candidates.UpdateStageAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Stage updated."));
    }

    [HttpPatch("assign")]
    public async Task<IActionResult> Assign([FromBody] AssignCandidateRequest request)
    {
        var result = await _candidates.AssignRecruiterAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Recruiter assigned."));
    }

    [HttpPost("{applicationId:guid}/tags")]
    public async Task<IActionResult> AddTag(Guid applicationId, [FromBody] TagRequest body)
    {
        var result = await _candidates.AddTagAsync(
            new AddCandidateTagRequest { ApplicationId = applicationId, Tag = body.Tag }, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Tag added."));
    }

    [HttpDelete("{applicationId:guid}/tags/{tag}")]
    public async Task<IActionResult> RemoveTag(Guid applicationId, string tag)
    {
        var result = await _candidates.RemoveTagAsync(applicationId, tag, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Tag removed."));
    }

    [HttpPatch("{applicationId:guid}/notes")]
    public async Task<IActionResult> UpdateNotes(Guid applicationId, [FromBody] NotesRequest body)
    {
        var result = await _candidates.UpdateNotesAsync(applicationId, body.Notes, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Notes updated."));
    }

    [HttpPost("score")]
    public async Task<IActionResult> SubmitScore([FromBody] SubmitCandidateScoreRequest request)
    {
        var result = await _candidates.SubmitScoreAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Score submitted."));
    }

    [HttpGet("{applicationId:guid}/score")]
    public async Task<IActionResult> GetScore(Guid applicationId)
    {
        var result = await _candidates.GetScoreAsync(applicationId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<CandidateScoreDto>.Ok(result.Data!));
    }

    [HttpPost("{applicationId:guid}/flag")]
    public async Task<IActionResult> Flag(Guid applicationId, [FromBody] FlagRequest body)
    {
        var result = await _candidates.FlagApplicationAsync(applicationId, body.Reason, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Application flagged."));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}

public class TagRequest { public string Tag { get; set; } = string.Empty; }
public class NotesRequest { public string Notes { get; set; } = string.Empty; }
public class FlagRequest { public string Reason { get; set; } = string.Empty; }

// ===================== APPLICATIONS CONTROLLER (Candidate-facing) =====================
}

namespace HireFlow.API.Controllers.Applications
{

[ApiController]
[Route("api/v1/applications")]
[Authorize]
public class ApplicationsController : ControllerBase
{
    private readonly IApplicationService _apps;
    public ApplicationsController(IApplicationService apps) => _apps = apps;

    [HttpPost]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> Apply([FromBody] ApplyJobRequest request)
    {
        var result = await _apps.ApplyAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<ApplicationDto>.Ok(result.Data!, "Application submitted."));
    }

    [HttpDelete("{applicationId:guid}")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> Withdraw(Guid applicationId)
    {
        var result = await _apps.WithdrawAsync(applicationId, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Application withdrawn."));
    }

    [HttpGet("mine")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> MyApplications([FromQuery] int page = 1, [FromQuery] int pageSize = 20)
    {
        var result = await _apps.GetMyApplicationsAsync(GetUserId(), page, pageSize);
        return Ok(ApiResponse<PagedResult<ApplicationDto>>.Ok(result.Data!));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}

// ===================== INTERVIEWS CONTROLLER =====================
}

namespace HireFlow.API.Controllers.Interview
{

[ApiController]
[Route("api/v1/interviews")]
[Authorize]
public class InterviewsController : ControllerBase
{
    private readonly IInterviewService _interviews;
    public InterviewsController(IInterviewService interviews) => _interviews = interviews;

    [HttpGet]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> GetInterviews()
    {
        var result = await _interviews.GetInterviewsAsync(GetUserId());
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result.Data!));
    }

    [HttpGet("upcoming")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> GetUpcoming()
    {
        var result = await _interviews.GetUpcomingAsync(GetUserId());
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result.Data!));
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetInterview(Guid id)
    {
        var result = await _interviews.GetInterviewByIdAsync(id);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<InterviewDto>.Ok(result.Data!));
    }

    [HttpGet("for-candidate/{applicationId:guid}")]
    public async Task<IActionResult> ForCandidate(Guid applicationId)
    {
        var result = await _interviews.GetForCandidateAsync(applicationId);
        return Ok(ApiResponse<List<InterviewDto>>.Ok(result.Data!));
    }

    [HttpPost]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Create([FromBody] CreateInterviewRequest request)
    {
        var result = await _interviews.CreateInterviewAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<InterviewDto>.Ok(result.Data!, "Interview scheduled."));
    }

    [HttpPatch("{id:guid}/cancel")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Cancel(Guid id)
    {
        var result = await _interviews.CancelInterviewAsync(id, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Interview cancelled."));
    }

    [HttpPost("feedback")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> SubmitFeedback([FromBody] SubmitFeedbackRequest request)
    {
        var result = await _interviews.SubmitFeedbackAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Feedback submitted."));
    }

    [HttpPost("book-ai")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> BookAiInterview([FromBody] BookAiInterviewRequest request)
    {
        var result = await _interviews.BookAiInterviewAsync(request, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<InterviewDto>.Ok(result.Data!));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}

// ===================== HIREMEET CONTROLLER =====================
}

namespace HireFlow.API.Controllers.HireMeet
{

[ApiController]
[Route("api/v1/hiremeet")]
[Authorize]
[NonController]
public class HireMeetController : ControllerBase
{
    private readonly IHireMeetService _meet;
    public HireMeetController(IHireMeetService meet) => _meet = meet;

    [HttpGet]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> GetMeetings()
    {
        var result = await _meet.GetMeetingsAsync(GetUserId());
        return Ok(ApiResponse<List<HireMeetingDto>>.Ok(result.Data!));
    }

    [HttpGet("room/{roomCode}")]
    [AllowAnonymous] // candidate joins without auth
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
        return Ok(ApiResponse<HireMeetingDto>.Ok(result.Data!, "Meeting created."));
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

    [HttpPost("join")]
    public async Task<IActionResult> Join([FromBody] JoinMeetingRequest request)
    {
        Guid? userId = User.Identity?.IsAuthenticated == true ? GetUserId() : null;
        var result = await _meet.JoinMeetingAsync(request, userId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<HireMeetingDto>.Ok(result.Data!, "Joined meeting."));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}

// ===================== DASHBOARD CONTROLLER =====================
}

namespace HireFlow.API.Controllers.Dashboard
{

[ApiController]
[Route("api/v1/dashboard")]
[Authorize]
public class DashboardController : ControllerBase
{
    private readonly IDashboardService _dash;
    public DashboardController(IDashboardService dash) => _dash = dash;

    [HttpGet("recruiter")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> RecruiterDashboard()
    {
        var result = await _dash.GetRecruiterDashboardAsync(GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<RecruiterDashboardDto>.Ok(result.Data!));
    }

    [HttpGet("candidate")]
    [Authorize(Roles = "Candidate")]
    public async Task<IActionResult> CandidateDashboard()
    {
        var result = await _dash.GetCandidateDashboardAsync(GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<CandidateDashboardDto>.Ok(result.Data!));
    }

    [HttpGet("analytics")]
    [Authorize(Roles = "Recruiter,Admin")]
    public async Task<IActionResult> Analytics(
        [FromQuery] DateTime? from, [FromQuery] DateTime? to)
    {
        var result = await _dash.GetAnalyticsAsync(GetUserId(), from, to);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<AnalyticsDto>.Ok(result.Data!));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}

// ===================== NOTIFICATIONS CONTROLLER =====================
}

namespace HireFlow.API.Controllers.Notification
{

[ApiController]
[Route("api/v1/notifications")]
[Authorize]
public class NotificationsController : ControllerBase
{
    private readonly INotificationService _notifications;
    public NotificationsController(INotificationService notifications) => _notifications = notifications;

    [HttpGet]
    public async Task<IActionResult> GetNotifications([FromQuery] bool unreadOnly = false)
    {
        var result = await _notifications.GetNotificationsAsync(GetUserId(), unreadOnly);
        return Ok(ApiResponse<List<HireFlow.Application.DTOs.Notifications.NotificationDto>>.Ok(result.Data!));
    }

    [HttpPatch("{id:guid}/read")]
    public async Task<IActionResult> MarkRead(Guid id)
    {
        var result = await _notifications.MarkAsReadAsync(id, GetUserId());
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Marked as read."));
    }

    [HttpPatch("read-all")]
    public async Task<IActionResult> MarkAllRead()
    {
        await _notifications.MarkAllAsReadAsync(GetUserId());
        return Ok(ApiResponse.Ok("All notifications marked as read."));
    }

    private Guid GetUserId() => Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? User.FindFirstValue("sub") ?? Guid.Empty.ToString());
}
}
