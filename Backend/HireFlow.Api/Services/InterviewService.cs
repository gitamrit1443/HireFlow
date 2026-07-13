using System.Text.Json;
using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class InterviewService : IInterviewService
{
    private readonly HireFlowDbContext _db;

    public InterviewService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<List<InterviewDto>>> GetInterviewsAsync(Guid userId)
    {
        var query = InterviewQuery().AsNoTracking();
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<List<InterviewDto>>.Fail("User not found.");

        if (user.Role == "Candidate")
            query = query.Where(x => x.JobApplication.CandidateUserId == userId);
        else if (user.Role != "Admin")
            query = query.Where(x => x.CreatedByUserId == userId || x.JobApplication.Job.CreatedByUserId == userId);

        var interviews = await query.OrderByDescending(x => x.ScheduledAt).ToListAsync();
        return ServiceResult<List<InterviewDto>>.Ok(interviews.Select(DtoMapper.ToDto).ToList());
    }

    public async Task<ServiceResult<List<InterviewDto>>> GetUpcomingAsync(Guid userId)
    {
        var result = await GetInterviewsAsync(userId);
        if (!result.IsSuccess) return result;

        var upcoming = result.Data!
            .Where(x => x.ScheduledAt >= DateTime.UtcNow && x.Status == "scheduled")
            .OrderBy(x => x.ScheduledAt)
            .ToList();

        return ServiceResult<List<InterviewDto>>.Ok(upcoming);
    }

    public async Task<ServiceResult<InterviewDto>> GetInterviewByIdAsync(Guid id, Guid userId)
    {
        var interview = await InterviewQuery().AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        if (interview is null) return ServiceResult<InterviewDto>.Fail("Interview not found.");
        if (!await CanViewInterviewAsync(interview, userId)) return ServiceResult<InterviewDto>.Fail("You cannot view this interview.");

        return ServiceResult<InterviewDto>.Ok(DtoMapper.ToDto(interview));
    }

    public async Task<ServiceResult<List<InterviewDto>>> GetForCandidateAsync(Guid applicationId, Guid userId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<List<InterviewDto>>.Fail("Application not found.");

        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<List<InterviewDto>>.Fail("User not found.");
        var canView = user.Role == "Admin" || app.CandidateUserId == userId || app.Job.CreatedByUserId == userId || app.AssignedRecruiterId == userId;
        if (!canView) return ServiceResult<List<InterviewDto>>.Fail("You cannot view interviews for this application.");

        var interviews = await InterviewQuery()
            .AsNoTracking()
            .Where(x => x.JobApplicationId == applicationId)
            .OrderBy(x => x.ScheduledAt)
            .ToListAsync();

        return ServiceResult<List<InterviewDto>>.Ok(interviews.Select(DtoMapper.ToDto).ToList());
    }

    public async Task<ServiceResult<InterviewDto>> CreateInterviewAsync(CreateInterviewRequest request, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == request.ApplicationId);
        if (app is null) return ServiceResult<InterviewDto>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<InterviewDto>.Fail("You cannot create interview for this application.");

        var scheduledAt = ResolveScheduledAt(request);
        var interview = new Interview
        {
            JobApplicationId = request.ApplicationId,
            CreatedByUserId = recruiterUserId,
            ScheduledAt = scheduledAt,
            Round = NormalizeRound(request.Round),
            Mode = NormalizeMode(request.Mode),
            MeetingLink = request.MeetingLink,
            Location = request.Location,
            Agenda = request.Agenda,
            Timezone = string.IsNullOrWhiteSpace(request.Timezone) ? "IST" : request.Timezone,
            InterviewersJson = JsonSerializer.Serialize(request.Interviewers),
            Status = "scheduled"
        };

        app.Stage = "interview";
        _db.Interviews.Add(interview);
        await _db.SaveChangesAsync();

        var saved = await InterviewQuery().AsNoTracking().FirstAsync(x => x.Id == interview.Id);
        return ServiceResult<InterviewDto>.Ok(DtoMapper.ToDto(saved));
    }

    public async Task<ServiceResult<string>> CancelInterviewAsync(Guid id, Guid recruiterUserId)
    {
        var interview = await _db.Interviews.Include(x => x.JobApplication).ThenInclude(x => x.Job).FirstOrDefaultAsync(x => x.Id == id);
        if (interview is null) return ServiceResult<string>.Fail("Interview not found.");
        if (!await CanManageApplication(interview.JobApplication, recruiterUserId)) return ServiceResult<string>.Fail("You cannot cancel this interview.");

        interview.Status = "cancelled";
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Interview cancelled.");
    }

    public async Task<ServiceResult<string>> SubmitFeedbackAsync(SubmitFeedbackRequest request, Guid recruiterUserId)
    {
        var interview = await _db.Interviews.Include(x => x.JobApplication).ThenInclude(x => x.Job).FirstOrDefaultAsync(x => x.Id == request.InterviewId);
        if (interview is null) return ServiceResult<string>.Fail("Interview not found.");
        if (!await CanManageApplication(interview.JobApplication, recruiterUserId)) return ServiceResult<string>.Fail("You cannot submit feedback for this interview.");

        var feedback = new InterviewFeedbackDto
        {
            InterviewId = request.InterviewId,
            SubmittedBy = recruiterUserId.ToString(),
            SubmittedAt = DateTime.UtcNow,
            TechnicalScore = request.TechnicalScore,
            CommunicationScore = request.CommunicationScore,
            ProblemSolvingScore = request.ProblemSolvingScore,
            CultureFitScore = request.CultureFitScore,
            OverallScore = request.OverallScore,
            Recommendation = NormalizeRecommendation(request.Recommendation),
            Strengths = request.Strengths ?? string.Empty,
            Concerns = request.Concerns ?? string.Empty,
            Notes = request.Notes ?? request.Feedback
        };

        interview.Feedback = JsonSerializer.Serialize(feedback);
        interview.Status = "completed";
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Feedback submitted.");
    }

    public async Task<ServiceResult<InterviewDto>> BookAiInterviewAsync(BookAiInterviewRequest request, Guid candidateUserId)
    {
        var app = await _db.JobApplications.FirstOrDefaultAsync(x => x.Id == request.ApplicationId && x.CandidateUserId == candidateUserId);
        if (app is null) return ServiceResult<InterviewDto>.Fail("Application not found.");

        var interview = new Interview
        {
            JobApplicationId = request.ApplicationId,
            CreatedByUserId = candidateUserId,
            ScheduledAt = request.PreferredTime,
            Round = "screening",
            Mode = "online",
            MeetingLink = "https://localhost:7001/ai-interview/demo",
            Status = "scheduled"
        };

        app.Stage = "assessment";
        _db.Interviews.Add(interview);
        await _db.SaveChangesAsync();

        var saved = await InterviewQuery().AsNoTracking().FirstAsync(x => x.Id == interview.Id);
        return ServiceResult<InterviewDto>.Ok(DtoMapper.ToDto(saved));
    }

    private IQueryable<Interview> InterviewQuery() => _db.Interviews
        .Include(x => x.CreatedByUser)
        .Include(x => x.JobApplication)
            .ThenInclude(x => x.Job)
        .Include(x => x.JobApplication)
            .ThenInclude(x => x.CandidateUser);

    private async Task<bool> CanViewInterviewAsync(Interview interview, Guid userId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;
        return user.Role == "Admin"
            || interview.CreatedByUserId == userId
            || interview.JobApplication.CandidateUserId == userId
            || interview.JobApplication.Job.CreatedByUserId == userId
            || interview.JobApplication.AssignedRecruiterId == userId;
    }

    private async Task<bool> CanManageApplication(JobApplication app, Guid userId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;
        return user.Role == "Admin" || app.Job.CreatedByUserId == userId || app.AssignedRecruiterId == userId;
    }

    private static DateTime ResolveScheduledAt(CreateInterviewRequest request)
    {
        if (!string.IsNullOrWhiteSpace(request.ScheduledDate) && !string.IsNullOrWhiteSpace(request.StartTime))
        {
            if (DateTime.TryParse($"{request.ScheduledDate} {request.StartTime}", out var parsed)) return parsed;
        }
        return request.ScheduledAt == default ? DateTime.UtcNow.AddDays(1) : request.ScheduledAt;
    }

    private static string NormalizeRound(JsonElement? round)
    {
        var value = ReadJsonValue(round);
        return value switch
        {
            "1" => "screening",
            "2" => "technical",
            "3" => "system_design",
            "4" => "hr",
            "5" => "leadership",
            "6" => "final",
            _ => DtoMapper.NormalizeRound(value)
        };
    }

    private static string NormalizeMode(JsonElement? mode)
    {
        var value = ReadJsonValue(mode);
        return value switch
        {
            "1" => "online",
            "2" => "offline",
            "3" => "phone",
            _ => DtoMapper.NormalizeMode(value)
        };
    }

    private static string NormalizeRecommendation(JsonElement? recommendation)
    {
        var value = ReadJsonValue(recommendation)?.Trim().ToLowerInvariant();
        return value switch
        {
            "1" => "strong_hire",
            "2" => "hire",
            "3" => "maybe",
            "4" => "no_hire",
            "strong_hire" => "strong_hire",
            "hire" => "hire",
            "no_hire" => "no_hire",
            _ => "maybe"
        };
    }

    private static string? ReadJsonValue(JsonElement? element)
    {
        if (element is null || element.Value.ValueKind is JsonValueKind.Null or JsonValueKind.Undefined) return null;
        if (element.Value.ValueKind == JsonValueKind.Number && element.Value.TryGetInt32(out var n)) return n.ToString();
        if (element.Value.ValueKind == JsonValueKind.String) return element.Value.GetString();
        return element.Value.ToString();
    }
}
