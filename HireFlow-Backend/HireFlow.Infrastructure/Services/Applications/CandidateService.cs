using System.Text.Json;
using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Candidates;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace HireFlow.Infrastructure.Services.Applications;

public class CandidateService : ICandidateService
{
    private readonly HireFlowDbContext _db;
    private readonly INotificationService _notifications;

    public CandidateService(HireFlowDbContext db, INotificationService notifications)
    {
        _db = db;
        _notifications = notifications;
    }

    public async Task<Result<PagedResult<CandidateDto>>> GetCandidatesAsync(
        CandidateFilterRequest filter, Guid recruiterId)
    {
        var query = _db.JobApplications
            .Include(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(a => a.Job)
            .AsQueryable();

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var s = filter.Search.ToLower();
            query = query.Where(a =>
                a.CandidateProfile.User.FirstName.ToLower().Contains(s) ||
                a.CandidateProfile.User.LastName.ToLower().Contains(s) ||
                a.CandidateProfile.User.Email.ToLower().Contains(s) ||
                (a.CandidateProfile.CurrentRole != null && a.CandidateProfile.CurrentRole.ToLower().Contains(s)));
        }

        if (filter.JobId.HasValue)
            query = query.Where(a => a.JobId == filter.JobId.Value);

        if (filter.Stage.HasValue)
            query = query.Where(a => a.Stage == filter.Stage.Value);

        if (!string.IsNullOrWhiteSpace(filter.Department))
            query = query.Where(a => a.Job.Department.ToLower() == filter.Department.ToLower());

        if (filter.AssignedToId.HasValue)
            query = query.Where(a => a.AssignedToId == filter.AssignedToId.Value);

        if (filter.IsFlagged.HasValue)
            query = query.Where(a => a.IsFlagged == filter.IsFlagged.Value);

        query = filter.SortBy.ToLower() switch
        {
            "score" => filter.SortDir == "asc" ? query.OrderBy(a => a.Score) : query.OrderByDescending(a => a.Score),
            "lastactivity" => filter.SortDir == "asc" ? query.OrderBy(a => a.LastActivityDate) : query.OrderByDescending(a => a.LastActivityDate),
            _ => filter.SortDir == "asc" ? query.OrderBy(a => a.AppliedDate) : query.OrderByDescending(a => a.AppliedDate)
        };

        var total = await query.CountAsync();
        var items = await query
            .Skip((filter.Page - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .ToListAsync();

        return Result<PagedResult<CandidateDto>>.Success(new PagedResult<CandidateDto>
        {
            Items = items.Select(MapToDto).ToList(),
            TotalCount = total,
            Page = filter.Page,
            PageSize = filter.PageSize
        });
    }

    public async Task<Result<CandidateDto>> GetCandidateByIdAsync(Guid applicationId)
    {
        var app = await _db.JobApplications
            .Include(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(a => a.Job)
            .FirstOrDefaultAsync(a => a.Id == applicationId);

        if (app == null) return Result<CandidateDto>.Failure("Application not found.");
        return Result<CandidateDto>.Success(MapToDto(app));
    }

    public async Task<Result> UpdateStageAsync(UpdateCandidateStageRequest request, Guid recruiterId)
    {
        var app = await _db.JobApplications
            .Include(a => a.CandidateProfile).ThenInclude(cp => cp.User)
            .Include(a => a.Job)
            .FirstOrDefaultAsync(a => a.Id == request.ApplicationId);

        if (app == null) return Result.Failure("Application not found.");

        var fromStage = app.Stage;
        app.Stage = request.Stage;
        app.LastActivityDate = DateTime.UtcNow;

        // Update job counters
        if (request.Stage == HiringStage.Shortlisted || fromStage == HiringStage.Applied)
        {
            var job = await _db.Jobs.FindAsync(app.JobId);
            if (job != null)
            {
                if (request.Stage == HiringStage.Shortlisted)
                    job.ShortlistedCount = await _db.JobApplications
                        .CountAsync(a => a.JobId == job.Id && a.Stage >= HiringStage.Shortlisted);
            }
        }

        _db.StageHistories.Add(new StageHistory
        {
            ApplicationId = app.Id,
            FromStage = fromStage,
            ToStage = request.Stage,
            ChangedById = recruiterId,
            Notes = request.Notes
        });

        await _db.SaveChangesAsync();

        // Notify candidate
        var stageLabel = request.Stage switch
        {
            HiringStage.Shortlisted => "Shortlisted",
            HiringStage.Assessment => "Assessment Stage",
            HiringStage.Interview => "Interview Scheduled",
            HiringStage.HrRound => "HR Round",
            HiringStage.Selected => "Selected 🎉",
            HiringStage.Rejected => "Application Status Update",
            _ => request.Stage.ToString()
        };

        await _notifications.CreateNotificationAsync(
            app.CandidateProfile.UserId,
            $"Application Update: {app.Job.Title}",
            $"Your application for {app.Job.Title} has been updated to: {stageLabel}",
            HireFlow.Domain.Enums.NotificationType.ApplicationUpdate,
            $"/candidate/dashboard"
        );

        return Result.Success();
    }

    public async Task<Result> AssignRecruiterAsync(AssignCandidateRequest request, Guid currentRecruiterId)
    {
        var app = await _db.JobApplications.FindAsync(request.ApplicationId);
        if (app == null) return Result.Failure("Application not found.");

        var recruiter = await _db.RecruiterProfiles
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.UserId == request.RecruiterId);

        if (recruiter == null) return Result.Failure("Recruiter not found.");

        app.AssignedToId = request.RecruiterId;
        app.AssignedTo = recruiter.User.FullName;
        app.LastActivityDate = DateTime.UtcNow;

        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> AddTagAsync(AddCandidateTagRequest request, Guid recruiterId)
    {
        var app = await _db.JobApplications.FindAsync(request.ApplicationId);
        if (app == null) return Result.Failure("Application not found.");

        var tags = GetTags(app.Tags);
        if (!tags.Contains(request.Tag))
        {
            tags.Add(request.Tag.Trim());
            app.Tags = JsonSerializer.Serialize(tags);
            await _db.SaveChangesAsync();
        }
        return Result.Success();
    }

    public async Task<Result> RemoveTagAsync(Guid applicationId, string tag, Guid recruiterId)
    {
        var app = await _db.JobApplications.FindAsync(applicationId);
        if (app == null) return Result.Failure("Application not found.");

        var tags = GetTags(app.Tags);
        tags.Remove(tag);
        app.Tags = JsonSerializer.Serialize(tags);
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> UpdateNotesAsync(Guid applicationId, string notes, Guid recruiterId)
    {
        var app = await _db.JobApplications.FindAsync(applicationId);
        if (app == null) return Result.Failure("Application not found.");

        app.Notes = notes;
        app.LastActivityDate = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> SubmitScoreAsync(SubmitCandidateScoreRequest request, Guid recruiterId)
    {
        var app = await _db.JobApplications.FindAsync(request.ApplicationId);
        if (app == null) return Result.Failure("Application not found.");

        var recruiterProfile = await _db.RecruiterProfiles
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.UserId == recruiterId);

        var score = new CandidateScore
        {
            ApplicationId = request.ApplicationId,
            Technical = request.Technical,
            Communication = request.Communication,
            ProblemSolving = request.ProblemSolving,
            CultureFit = request.CultureFit,
            Overall = request.Overall,
            Recommendation = request.Recommendation,
            Notes = request.Notes,
            EvaluatedBy = recruiterProfile?.User.FullName ?? "Recruiter",
            EvaluatedById = recruiterId
        };

        _db.CandidateScores.Add(score);

        // Update aggregate score on application
        app.Score = (int)Math.Round((request.Technical + request.Communication +
                                     request.ProblemSolving + request.CultureFit + request.Overall)
                                    / 5.0 * 10);
        app.LastActivityDate = DateTime.UtcNow;

        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result<CandidateScoreDto>> GetScoreAsync(Guid applicationId)
    {
        var score = await _db.CandidateScores
            .OrderByDescending(s => s.CreatedAt)
            .FirstOrDefaultAsync(s => s.ApplicationId == applicationId);

        if (score == null) return Result<CandidateScoreDto>.Failure("No score found.");

        return Result<CandidateScoreDto>.Success(new CandidateScoreDto
        {
            CandidateId = applicationId,
            Technical = score.Technical,
            Communication = score.Communication,
            ProblemSolving = score.ProblemSolving,
            CultureFit = score.CultureFit,
            Overall = score.Overall,
            Recommendation = score.Recommendation switch
            {
                HireRecommendation.StrongHire => "strong_hire",
                HireRecommendation.Hire => "hire",
                HireRecommendation.Maybe => "maybe",
                HireRecommendation.NoHire => "no_hire",
                _ => "maybe"
            },
            Notes = score.Notes,
            EvaluatedBy = score.EvaluatedBy,
            EvaluatedAt = score.EvaluatedAt.ToString("o")
        });
    }

    public async Task<Result> FlagApplicationAsync(Guid applicationId, string reason, Guid recruiterId)
    {
        var app = await _db.JobApplications.FindAsync(applicationId);
        if (app == null) return Result.Failure("Application not found.");

        app.IsFlagged = true;
        app.FlagReason = reason;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    // ---- Helpers ----

    private static List<string> GetTags(string? json)
    {
        if (string.IsNullOrEmpty(json)) return new List<string>();
        try { return JsonSerializer.Deserialize<List<string>>(json) ?? new(); }
        catch { return new(); }
    }

    private static CandidateDto MapToDto(JobApplication app)
    {
        var cp = app.CandidateProfile;
        var user = cp.User;

        List<string> skills;
        try { skills = JsonSerializer.Deserialize<List<string>>(cp.Skills ?? "[]") ?? new(); }
        catch { skills = new(); }

        List<string> tags;
        try { tags = JsonSerializer.Deserialize<List<string>>(app.Tags ?? "[]") ?? new(); }
        catch { tags = new(); }

        return new CandidateDto
        {
            Id = cp.UserId,
            ApplicationId = app.Id,
            Name = user.FullName,
            Email = user.Email,
            Phone = user.PhoneNumber ?? string.Empty,
            AvatarColor = cp.AvatarColor ?? "#6366F1",
            CurrentRole = cp.CurrentRole ?? string.Empty,
            JobTitle = app.Job?.Title ?? string.Empty,
            JobId = app.JobId.ToString(),
            Department = app.Job?.Department ?? string.Empty,
            Location = cp.Location ?? string.Empty,
            Experience = cp.YearsOfExperience ?? 0,
            Skills = skills,
            Stage = app.Stage switch
            {
                HiringStage.Applied => "applied",
                HiringStage.Shortlisted => "shortlisted",
                HiringStage.Assessment => "assessment",
                HiringStage.Interview => "interview",
                HiringStage.HrRound => "hr_round",
                HiringStage.Selected => "selected",
                HiringStage.Rejected => "rejected",
                _ => "applied"
            },
            Score = app.Score,
            AppliedDate = app.AppliedDate.ToString("yyyy-MM-dd"),
            LastActivityDate = app.LastActivityDate.ToString("yyyy-MM-dd"),
            ResumeUrl = app.ResumeUrl,
            Tags = tags,
            AssignedTo = app.AssignedTo ?? string.Empty,
            Notes = app.Notes
        };
    }
}
