using System.Text.Json;
using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Interview;
using HireFlow.Application.DTOs.HireMeet;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace HireFlow.Infrastructure.Services.Interview
{

public class InterviewService : IInterviewService
{
    private readonly HireFlowDbContext _db;
    private readonly INotificationService _notifications;

    public InterviewService(HireFlowDbContext db, INotificationService notifications)
    {
        _db = db;
        _notifications = notifications;
    }

    public async Task<Result<List<InterviewDto>>> GetInterviewsAsync(Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<List<InterviewDto>>.Failure("Recruiter not found.");

        var interviews = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .Include(i => i.Feedback)
            .Where(i => i.RecruiterProfileId == recruiter.Id)
            .OrderByDescending(i => i.ScheduledDate)
            .ToListAsync();

        return Result<List<InterviewDto>>.Success(interviews.Select(MapToDto).ToList());
    }

    public async Task<Result<InterviewDto>> GetInterviewByIdAsync(Guid id)
    {
        var interview = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .Include(i => i.Feedback)
            .FirstOrDefaultAsync(i => i.Id == id);

        if (interview == null) return Result<InterviewDto>.Failure("Interview not found.");
        return Result<InterviewDto>.Success(MapToDto(interview));
    }

    public async Task<Result<InterviewDto>> CreateInterviewAsync(CreateInterviewRequest request, Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<InterviewDto>.Failure("Recruiter profile not found.");

        var application = await _db.JobApplications
            .Include(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(a => a.Job)
            .FirstOrDefaultAsync(a => a.Id == request.ApplicationId);

        if (application == null) return Result<InterviewDto>.Failure("Application not found.");

        var interview = new Domain.Entities.Interview
        {
            ApplicationId = request.ApplicationId,
            JobId = request.JobId,
            RecruiterProfileId = recruiter.Id,
            Round = request.Round,
            Mode = request.Mode,
            Status = InterviewStatus.Scheduled,
            ScheduledDate = request.ScheduledDate.Date,
            StartTime = request.StartTime,
            EndTime = request.EndTime,
            Timezone = request.Timezone,
            MeetingLink = request.MeetingLink,
            Location = request.Location,
            Agenda = request.Agenda,
            InterviewersJson = JsonSerializer.Serialize(request.Interviewers)
        };

        _db.Interviews.Add(interview);

        // Update application stage to Interview
        application.Stage = HiringStage.Interview;
        application.LastActivityDate = DateTime.UtcNow;

        await _db.SaveChangesAsync();

        // Notify candidate
        await _notifications.CreateNotificationAsync(
            application.CandidateProfile.UserId,
            $"Interview Scheduled: {application.Job.Title}",
            $"Your {request.Round} interview for {application.Job.Title} is scheduled on {request.ScheduledDate:MMM dd} at {request.StartTime}.",
            NotificationType.InterviewReminder,
            "/candidate/dashboard"
        );

        var created = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .FirstAsync(i => i.Id == interview.Id);

        return Result<InterviewDto>.Success(MapToDto(created));
    }

    public async Task<Result> CancelInterviewAsync(Guid id, Guid recruiterId)
    {
        var interview = await _db.Interviews.FindAsync(id);
        if (interview == null) return Result.Failure("Interview not found.");

        interview.Status = InterviewStatus.Cancelled;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> SubmitFeedbackAsync(SubmitFeedbackRequest request, Guid recruiterId)
    {
        var interview = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile)
            .FirstOrDefaultAsync(i => i.Id == request.InterviewId);

        if (interview == null) return Result.Failure("Interview not found.");

        var recruiter = await _db.RecruiterProfiles
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.UserId == recruiterId);

        var feedback = new InterviewFeedback
        {
            InterviewId = request.InterviewId,
            SubmittedBy = recruiter?.User.FullName ?? "Recruiter",
            SubmittedById = recruiterId,
            SubmittedAt = DateTime.UtcNow,
            TechnicalScore = request.TechnicalScore,
            CommunicationScore = request.CommunicationScore,
            ProblemSolvingScore = request.ProblemSolvingScore,
            CultureFitScore = request.CultureFitScore,
            OverallScore = request.OverallScore,
            Recommendation = request.Recommendation,
            Strengths = request.Strengths,
            Concerns = request.Concerns,
            Notes = request.Notes
        };

        _db.InterviewFeedbacks.Add(feedback);
        interview.Status = InterviewStatus.Completed;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result<List<InterviewDto>>> GetUpcomingAsync(Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<List<InterviewDto>>.Success(new());

        var today = DateTime.UtcNow.Date;
        var interviews = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .Where(i => i.RecruiterProfileId == recruiter.Id
                        && i.ScheduledDate >= today
                        && i.Status == InterviewStatus.Scheduled)
            .OrderBy(i => i.ScheduledDate).ThenBy(i => i.StartTime)
            .ToListAsync();

        return Result<List<InterviewDto>>.Success(interviews.Select(MapToDto).ToList());
    }

    public async Task<Result<List<InterviewDto>>> GetForCandidateAsync(Guid applicationId)
    {
        var interviews = await _db.Interviews
            .Include(i => i.Application).ThenInclude(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(i => i.Job)
            .Include(i => i.Feedback)
            .Where(i => i.ApplicationId == applicationId)
            .OrderByDescending(i => i.ScheduledDate)
            .ToListAsync();

        return Result<List<InterviewDto>>.Success(interviews.Select(MapToDto).ToList());
    }

    public async Task<Result<InterviewDto>> BookAiInterviewAsync(BookAiInterviewRequest request, Guid candidateUserId)
    {
        var candidate = await _db.CandidateProfiles.FirstOrDefaultAsync(cp => cp.UserId == candidateUserId);
        if (candidate == null) return Result<InterviewDto>.Failure("Candidate profile not found.");

        // Stub — will call interviewing.io API when keys are provided
        _db.InterviewBookings.Add(new InterviewBooking
        {
            CandidateProfileId = candidate.Id,
            BookedFor = request.BookedFor,
            IsAiBot = true,
            Status = InterviewStatus.Scheduled,
            ExternalSessionId = null // Set after API call
        });

        await _db.SaveChangesAsync();
        return Result<InterviewDto>.Failure("AI interview booking stub — wire in interviewing.io API key.");
    }

    private static InterviewDto MapToDto(Domain.Entities.Interview i)
    {
        List<InterviewerDto> interviewers;
        try { interviewers = JsonSerializer.Deserialize<List<InterviewerDto>>(i.InterviewersJson ?? "[]") ?? new(); }
        catch { interviewers = new(); }

        InterviewFeedbackDto? feedback = null;
        if (i.Feedback != null)
        {
            feedback = new InterviewFeedbackDto
            {
                InterviewId = i.Id.ToString(),
                SubmittedBy = i.Feedback.SubmittedBy,
                SubmittedAt = i.Feedback.SubmittedAt.ToString("o"),
                TechnicalScore = i.Feedback.TechnicalScore,
                CommunicationScore = i.Feedback.CommunicationScore,
                ProblemSolvingScore = i.Feedback.ProblemSolvingScore,
                CultureFitScore = i.Feedback.CultureFitScore,
                OverallScore = i.Feedback.OverallScore,
                Recommendation = i.Feedback.Recommendation switch
                {
                    HireRecommendation.StrongHire => "strong_hire",
                    HireRecommendation.Hire => "hire",
                    HireRecommendation.Maybe => "maybe",
                    HireRecommendation.NoHire => "no_hire",
                    _ => "maybe"
                },
                Strengths = i.Feedback.Strengths,
                Concerns = i.Feedback.Concerns,
                Notes = i.Feedback.Notes
            };
        }

        var cp = i.Application?.CandidateProfile;

        return new InterviewDto
        {
            Id = i.Id,
            CandidateId = cp?.UserId.ToString() ?? string.Empty,
            CandidateName = cp?.User?.FullName ?? string.Empty,
            CandidateColor = cp?.AvatarColor ?? "#6366F1",
            JobTitle = i.Job?.Title ?? string.Empty,
            JobId = i.JobId.ToString(),
            Department = i.Job?.Department ?? string.Empty,
            Round = i.Round switch
            {
                InterviewRound.Screening => "screening",
                InterviewRound.Technical => "technical",
                InterviewRound.SystemDesign => "system_design",
                InterviewRound.Hr => "hr",
                InterviewRound.Leadership => "leadership",
                InterviewRound.Final => "final",
                _ => "technical"
            },
            Mode = i.Mode switch
            {
                InterviewMode.Online => "online",
                InterviewMode.Offline => "offline",
                InterviewMode.Phone => "phone",
                _ => "online"
            },
            Status = i.Status switch
            {
                InterviewStatus.Scheduled => "scheduled",
                InterviewStatus.Completed => "completed",
                InterviewStatus.Cancelled => "cancelled",
                InterviewStatus.Rescheduled => "rescheduled",
                _ => "scheduled"
            },
            ScheduledDate = i.ScheduledDate.ToString("yyyy-MM-dd"),
            StartTime = i.StartTime,
            EndTime = i.EndTime,
            Timezone = i.Timezone,
            Interviewers = interviewers,
            MeetingLink = i.MeetingLink,
            Location = i.Location,
            Agenda = i.Agenda,
            Feedback = feedback
        };
    }
}

// ===================== HireMeet Service =====================

}

namespace HireFlow.Infrastructure.Services.HireMeet
{

public class HireMeetService : IHireMeetService
{
    private readonly HireFlowDbContext _db;

    public HireMeetService(HireFlowDbContext db) => _db = db;

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
        var meeting = await _db.HireMeetings
            .FirstOrDefaultAsync(m => m.RoomCode == roomCode);

        if (meeting == null) return Result<HireMeetingDto>.Failure("Meeting room not found.");
        return Result<HireMeetingDto>.Success(MapToDto(meeting));
    }

    public async Task<Result<HireMeetingDto>> CreateMeetingAsync(CreateMeetingRequest request, Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.UserId == recruiterId);

        if (recruiter == null) return Result<HireMeetingDto>.Failure("Recruiter not found.");

        var roomCode = GenerateRoomCode();

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
        return Result<HireMeetingDto>.Success(MapToDto(meeting));
    }

    public async Task<Result> UpdateStatusAsync(UpdateMeetingStatusRequest request, Guid recruiterId)
    {
        var meeting = await _db.HireMeetings.FindAsync(request.Id);
        if (meeting == null) return Result.Failure("Meeting not found.");

        meeting.Status = request.Status;
        if (request.Duration.HasValue) meeting.Duration = request.Duration;
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

        meeting.IsDeleted = true;
        meeting.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result<HireMeetingDto>> JoinMeetingAsync(JoinMeetingRequest request, Guid? userId)
    {
        var meeting = await _db.HireMeetings
            .FirstOrDefaultAsync(m => m.RoomCode == request.RoomCode);

        if (meeting == null) return Result<HireMeetingDto>.Failure("Meeting room not found.");
        if (meeting.Status == MeetingStatus.Ended)
            return Result<HireMeetingDto>.Failure("This meeting has ended.");

        // Record participant
        _db.MeetParticipants.Add(new MeetParticipant
        {
            HireMeetingId = meeting.Id,
            Name = request.ParticipantName.Trim(),
            Role = request.Role?.ToLower() == "recruiter" ? ParticipantRole.Recruiter : ParticipantRole.Candidate,
            UserId = userId,
            JoinedAt = DateTime.UtcNow
        });

        if (meeting.Status == MeetingStatus.Waiting)
            meeting.Status = MeetingStatus.Live;

        await _db.SaveChangesAsync();
        return Result<HireMeetingDto>.Success(MapToDto(meeting));
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
        MeetUrl = $"/meet/{m.RoomCode}"
    };
}
}
