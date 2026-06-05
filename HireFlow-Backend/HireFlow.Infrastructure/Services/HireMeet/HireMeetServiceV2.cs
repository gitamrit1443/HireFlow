using System.Text.Json;
using HireFlow.Application.Common;
using HireFlow.Application.DTOs.HireMeet;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace HireFlow.Infrastructure.Services.HireMeet;

// ---- Extra DTOs for Daily.co join ----
public class JoinMeetingResponse
{
    public HireMeetingDto Meeting { get; set; } = null!;
    public string DailyRoomUrl { get; set; } = string.Empty;  // https://hireroom.daily.co/abc-def-ghi
    public string MeetingToken { get; set; } = string.Empty;  // JWT token for participant
    public bool IsHost { get; set; }
}

public class HireMeetServiceV2 : IHireMeetService
{
    private readonly HireFlowDbContext _db;
    private readonly DailyCoService _daily;

    public HireMeetServiceV2(HireFlowDbContext db, DailyCoService daily)
    {
        _db = db;
        _daily = daily;
    }

    public async Task<Result<List<HireMeetingDto>>> GetMeetingsAsync(Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<List<HireMeetingDto>>.Success(new());

        var meetings = await _db.HireMeetings
            .Where(m => m.RecruiterProfileId == recruiter.Id)
            .OrderByDescending(m => m.CreatedAt)
            .ToListAsync();

        return Result<List<HireMeetingDto>>.Success(meetings.Select(MapToDto).ToList());
    }

    public async Task<Result<HireMeetingDto>> GetByRoomCodeAsync(string roomCode)
    {
        var meeting = await _db.HireMeetings.FirstOrDefaultAsync(m => m.RoomCode == roomCode);
        if (meeting == null) return Result<HireMeetingDto>.Failure("Meeting room not found.");
        return Result<HireMeetingDto>.Success(MapToDto(meeting));
    }

    /// <summary>
    /// Creates a HireMeeting in DB + a real Daily.co room.
    /// Returns the meeting with the Daily.co room URL.
    /// </summary>
    public async Task<Result<HireMeetingDto>> CreateMeetingAsync(CreateMeetingRequest request, Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<HireMeetingDto>.Failure("Recruiter not found.");

        // Generate unique room code (used as Daily.co room name too)
        var roomCode = GenerateRoomCode();

        // Create real Daily.co room
        var (success, roomUrl, _) = await _daily.CreateRoomAsync(
            roomName: roomCode,
            isPrivate: true,
            expiryMinutes: 240   // 4 hour max
        );

        if (!success)
            return Result<HireMeetingDto>.Failure("Failed to create video room. Please try again.");

        var meeting = new HireMeeting
        {
            RoomCode = roomCode,
            Title = request.Title.Trim(),
            CandidateName = request.CandidateName.Trim(),
            CandidateId = request.CandidateId != null ? Guid.Parse(request.CandidateId) : null,
            JobTitle = request.JobTitle.Trim(),
            CreatedBy = recruiter.User.FullName,
            CreatedById = recruiterId,
            ScheduledFor = request.ScheduledFor,
            Status = MeetingStatus.Waiting,
            RecruiterProfileId = recruiter.Id
        };

        _db.HireMeetings.Add(meeting);
        await _db.SaveChangesAsync();

        var dto = MapToDto(meeting);
        dto.MeetUrl = roomUrl;  // Real Daily.co URL
        return Result<HireMeetingDto>.Success(dto);
    }

    /// <summary>
    /// Joins a meeting — generates a Daily.co meeting token for the participant.
    /// Returns the room URL + token so frontend can embed Daily.co iframe.
    /// </summary>
    public async Task<Result<JoinMeetingResponse>> JoinWithTokenAsync(
        JoinMeetingRequest request, Guid? userId, bool isHost = false)
    {
        var meeting = await _db.HireMeetings
            .FirstOrDefaultAsync(m => m.RoomCode == request.RoomCode);

        if (meeting == null)
            return Result<JoinMeetingResponse>.Failure("Meeting room not found.");

        if (meeting.Status == MeetingStatus.Ended)
            return Result<JoinMeetingResponse>.Failure("This meeting has already ended.");

        // Generate participant token from Daily.co
        var token = await _daily.CreateMeetingTokenAsync(
            roomName: request.RoomCode,
            userName: request.ParticipantName.Trim(),
            isOwner: isHost,
            expiryMinutes: 180
        );

        if (token == null)
            return Result<JoinMeetingResponse>.Failure("Failed to generate meeting token.");

        // Record participant in DB
        _db.MeetParticipants.Add(new MeetParticipant
        {
            HireMeetingId = meeting.Id,
            Name = request.ParticipantName.Trim(),
            Role = isHost ? ParticipantRole.Recruiter : ParticipantRole.Candidate,
            UserId = userId,
            IsHost = isHost,
            JoinedAt = DateTime.UtcNow
        });

        if (meeting.Status == MeetingStatus.Waiting)
            meeting.Status = MeetingStatus.Live;

        await _db.SaveChangesAsync();

        return Result<JoinMeetingResponse>.Success(new JoinMeetingResponse
        {
            Meeting = MapToDto(meeting),
            DailyRoomUrl = $"https://hireroom.daily.co/{request.RoomCode}",
            MeetingToken = token,
            IsHost = isHost
        });
    }

    // ---- IHireMeetService explicit (uses JoinWithTokenAsync internally) ----
    public async Task<Result<HireMeetingDto>> JoinMeetingAsync(JoinMeetingRequest request, Guid? userId)
    {
        var isHost = request.Role?.ToLower() == "recruiter";
        var result = await JoinWithTokenAsync(request, userId, isHost);
        if (!result.IsSuccess) return Result<HireMeetingDto>.Failure(result.Error!);
        return Result<HireMeetingDto>.Success(result.Data!.Meeting);
    }

    public async Task<Result> UpdateStatusAsync(UpdateMeetingStatusRequest request, Guid recruiterId)
    {
        var meeting = await _db.HireMeetings.FindAsync(request.Id);
        if (meeting == null) return Result.Failure("Meeting not found.");

        meeting.Status = request.Status;

        // If ended, delete Daily.co room to free up resources
        if (request.Status == MeetingStatus.Ended)
        {
            meeting.Duration = request.Duration;
            _ = _daily.DeleteRoomAsync(meeting.RoomCode);  // fire & forget
        }

        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> DeleteMeetingAsync(Guid id, Guid recruiterId)
    {
        var meeting = await _db.HireMeetings.FindAsync(id);
        if (meeting == null) return Result.Failure("Meeting not found.");

        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null || meeting.RecruiterProfileId != recruiter.Id)
            return Result.Failure("Permission denied.");

        // Delete Daily.co room too
        _ = _daily.DeleteRoomAsync(meeting.RoomCode);

        meeting.IsDeleted = true;
        meeting.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public string GenerateRoomCode()
    {
        const string chars = "abcdefghijkmnpqrstuvwxyz23456789";
        string Seg(int len) => new(Enumerable.Range(0, len)
            .Select(_ => chars[Random.Shared.Next(chars.Length)]).ToArray());
        return $"{Seg(3)}-{Seg(3)}-{Seg(3)}";
    }

    private static HireMeetingDto MapToDto(HireMeeting m) => new()
    {
        Id = m.Id,
        RoomCode = m.RoomCode,
        Title = m.Title,
        CandidateName = m.CandidateName,
        CandidateId = m.CandidateId?.ToString(),
        JobTitle = m.JobTitle,
        CreatedBy = m.CreatedBy,
        CreatedAt = m.CreatedAt.ToString("o"),
        ScheduledFor = m.ScheduledFor?.ToString("o"),
        Status = m.Status switch
        {
            MeetingStatus.Waiting => "waiting",
            MeetingStatus.Live => "live",
            MeetingStatus.Ended => "ended",
            _ => "waiting"
        },
        Duration = m.Duration,
        MeetUrl = $"https://hireroom.daily.co/{m.RoomCode}"
    };
}
