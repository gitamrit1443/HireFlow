using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class HireMeetService : IHireMeetService
{
    private readonly HireFlowDbContext _db;
    private readonly IDailyCoService _dailyCoService;

    public HireMeetService(HireFlowDbContext db, IDailyCoService dailyCoService)
    {
        _db = db;
        _dailyCoService = dailyCoService;
    }

    public async Task<ServiceResult<List<MeetingDto>>> GetMeetingsAsync(Guid userId)
    {
        var query = MeetingQuery().AsNoTracking();
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<List<MeetingDto>>.Fail("User not found.");
        if (user.Role != "Admin") query = query.Where(x => x.CreatedByUserId == userId);

        var meetings = await query.OrderByDescending(x => x.StartTime).ToListAsync();
        return ServiceResult<List<MeetingDto>>.Ok(meetings.Select(DtoMapper.ToDto).ToList());
    }

    public async Task<ServiceResult<MeetingDto>> GetByRoomCodeAsync(string roomCode)
    {
        var meeting = await MeetingQuery().AsNoTracking().FirstOrDefaultAsync(x => x.RoomCode == roomCode || x.DailyRoomName == roomCode);
        return meeting is null
            ? ServiceResult<MeetingDto>.Fail("Meeting not found.")
            : ServiceResult<MeetingDto>.Ok(DtoMapper.ToDto(meeting));
    }

    public async Task<ServiceResult<MeetingDto>> CreateMeetingAsync(CreateMeetingRequest request, Guid recruiterUserId)
    {
        if (string.IsNullOrWhiteSpace(request.Title)) return ServiceResult<MeetingDto>.Fail("Title required.");

        JobApplication? app = null;
        if (request.ApplicationId.HasValue)
        {
            app = await _db.JobApplications
                .Include(x => x.Job)
                .Include(x => x.CandidateUser)
                .FirstOrDefaultAsync(x => x.Id == request.ApplicationId.Value);
            if (app is null) return ServiceResult<MeetingDto>.Fail("Application not found.");
            if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<MeetingDto>.Fail("You cannot create meeting for this application.");
        }

        var startTime = request.ScheduledFor ?? (request.StartTime == default ? DateTime.UtcNow.AddMinutes(10) : request.StartTime);
        var roomCode = await GenerateRoomCodeAsync();
        var dailyRoomName = roomCode.ToLowerInvariant().Replace("hf-", "hireflow-");
        var dailyRoom = await _dailyCoService.CreateRoomAsync(dailyRoomName, startTime, request.EndTime);

        var meeting = new HireMeeting
        {
            Title = request.Title.Trim(),
            StartTime = startTime,
            EndTime = request.EndTime,
            JobApplicationId = request.ApplicationId,
            CandidateName = request.CandidateName ?? app?.CandidateUser.FullName,
            CandidateId = request.CandidateId ?? request.ApplicationId?.ToString(),
            JobTitle = request.JobTitle ?? app?.Job.Title,
            CreatedByUserId = recruiterUserId,
            RoomCode = roomCode,
            DailyRoomName = dailyRoom.RoomName,
            DailyRoomUrl = dailyRoom.Url,
            Status = "waiting"
        };

        _db.HireMeetings.Add(meeting);
        await _db.SaveChangesAsync();

        var saved = await MeetingQuery().AsNoTracking().FirstAsync(x => x.Id == meeting.Id);
        return ServiceResult<MeetingDto>.Ok(DtoMapper.ToDto(saved));
    }

    public async Task<ServiceResult<string>> UpdateStatusAsync(UpdateMeetingStatusRequest request, Guid recruiterUserId)
    {
        var id = request.MeetingId != Guid.Empty ? request.MeetingId : request.Id;
        var meeting = await _db.HireMeetings.FirstOrDefaultAsync(x => x.Id == id);
        if (meeting is null) return ServiceResult<string>.Fail("Meeting not found.");
        if (!await CanManageMeeting(meeting, recruiterUserId)) return ServiceResult<string>.Fail("You cannot update this meeting.");

        meeting.Status = DtoMapper.NormalizeMeetingStatus(request.Status);
        meeting.Duration = request.Duration ?? meeting.Duration;
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Status updated.");
    }

    public async Task<ServiceResult<string>> DeleteMeetingAsync(Guid id, Guid recruiterUserId)
    {
        var meeting = await _db.HireMeetings.FirstOrDefaultAsync(x => x.Id == id);
        if (meeting is null) return ServiceResult<string>.Fail("Meeting not found.");
        if (!await CanManageMeeting(meeting, recruiterUserId)) return ServiceResult<string>.Fail("You cannot delete this meeting.");

        _db.HireMeetings.Remove(meeting);
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Meeting deleted.");
    }

    public async Task<ServiceResult<JoinMeetingResponse>> JoinMeetingAsync(JoinMeetingRequest request, Guid? userId)
    {
        var meeting = await MeetingQuery().FirstOrDefaultAsync(x => x.RoomCode == request.RoomCode || x.DailyRoomName == request.RoomCode);
        if (meeting is null) return ServiceResult<JoinMeetingResponse>.Fail("Invalid room code.");

        var participantName = FirstNonEmpty(request.ParticipantName, request.CandidateName, meeting.CandidateName, "HireFlow User")!;
        meeting.CandidateName = participantName;
        if (meeting.Status == "waiting") meeting.Status = "live";
        await _db.SaveChangesAsync();

        var isHost = string.Equals(request.Role, "host", StringComparison.OrdinalIgnoreCase);
        if (!isHost && userId.HasValue)
        {
            var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId.Value);
            isHost = user?.Role is "Recruiter" or "Admin";
        }

        var token = await _dailyCoService.CreateMeetingTokenAsync(meeting.DailyRoomName ?? meeting.RoomCode, participantName, isHost);
        var dto = DtoMapper.ToDto(meeting);

        return ServiceResult<JoinMeetingResponse>.Ok(new JoinMeetingResponse
        {
            MeetingId = meeting.Id,
            RoomCode = meeting.RoomCode,
            Status = DtoMapper.NormalizeMeetingStatus(meeting.Status),
            Message = userId.HasValue ? "Authenticated user joined." : "Guest joined.",
            Meeting = dto,
            DailyRoomUrl = meeting.DailyRoomUrl ?? dto.MeetUrl,
            MeetingToken = token,
            IsHost = isHost
        });
    }

    private IQueryable<HireMeeting> MeetingQuery() => _db.HireMeetings
        .Include(x => x.CreatedByUser)
        .Include(x => x.JobApplication)
            .ThenInclude(x => x!.CandidateUser)
        .Include(x => x.JobApplication)
            .ThenInclude(x => x!.Job);

    private async Task<string> GenerateRoomCodeAsync()
    {
        string code;
        do
        {
            code = $"HF-{Random.Shared.Next(100000, 999999)}";
        } while (await _db.HireMeetings.AnyAsync(x => x.RoomCode == code));

        return code;
    }

    private async Task<bool> CanManageMeeting(HireMeeting meeting, Guid userId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;
        return user.Role == "Admin" || meeting.CreatedByUserId == userId;
    }

    private async Task<bool> CanManageApplication(JobApplication app, Guid userId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;
        return user.Role == "Admin" || app.Job.CreatedByUserId == userId || app.AssignedRecruiterId == userId;
    }

    private static string? FirstNonEmpty(params string?[] values) => values.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x))?.Trim();
}
