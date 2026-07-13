using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class CandidateService : ICandidateService
{
    private readonly HireFlowDbContext _db;

    public CandidateService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<PagedResult<ApplicationDto>>> GetCandidatesAsync(CandidateFilterRequest filter, Guid recruiterUserId)
    {
        filter.Page = Math.Max(1, filter.Page);
        filter.PageSize = Math.Clamp(filter.PageSize, 1, 200);

        var query = ApplicationQuery().AsNoTracking().AsQueryable();

        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == recruiterUserId);
        if (user is null) return ServiceResult<PagedResult<ApplicationDto>>.Fail("User not found.");
        if (user.Role != "Admin")
        {
            query = query.Where(x => x.Job.CreatedByUserId == recruiterUserId || x.AssignedRecruiterId == recruiterUserId);
        }

        if (!string.IsNullOrWhiteSpace(filter.Stage))
        {
            var stage = DtoMapper.NormalizeStage(filter.Stage);
            query = query.Where(x => x.Stage == stage);
        }

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var search = filter.Search.Trim();
            query = query.Where(x => x.CandidateUser.FullName.Contains(search) || x.CandidateUser.Email.Contains(search));
        }

        var total = await query.CountAsync();
        var apps = await query
            .OrderByDescending(x => x.AppliedAt)
            .Skip((filter.Page - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .ToListAsync();

        return ServiceResult<PagedResult<ApplicationDto>>.Ok(new PagedResult<ApplicationDto>
        {
            Items = apps.Select(DtoMapper.ToDto).ToList(),
            Page = filter.Page,
            PageSize = filter.PageSize,
            TotalCount = total
        });
    }

    public async Task<ServiceResult<ApplicationDto>> GetCandidateByIdAsync(Guid applicationId, Guid recruiterUserId)
    {
        var app = await ApplicationQuery().AsNoTracking().FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<ApplicationDto>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<ApplicationDto>.Fail("You cannot view this application.");

        return ServiceResult<ApplicationDto>.Ok(DtoMapper.ToDto(app));
    }

    public async Task<ServiceResult<string>> UpdateStageAsync(UpdateCandidateStageRequest request, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == request.ApplicationId);
        if (app is null) return ServiceResult<string>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<string>.Fail("You cannot update this application.");

        app.Stage = NormalizeStage(request.Stage);
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Stage updated.");
    }

    public async Task<ServiceResult<string>> AssignRecruiterAsync(AssignCandidateRequest request, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == request.ApplicationId);
        if (app is null) return ServiceResult<string>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<string>.Fail("You cannot assign this application.");

        var recruiter = await _db.Users.FirstOrDefaultAsync(x => x.Id == request.RecruiterUserId && (x.Role == "Recruiter" || x.Role == "Admin"));
        if (recruiter is null) return ServiceResult<string>.Fail("Recruiter not found.");

        app.AssignedRecruiterId = request.RecruiterUserId;
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Recruiter assigned.");
    }

    public async Task<ServiceResult<string>> AddTagAsync(Guid applicationId, string tag, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<string>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<string>.Fail("You cannot update this application.");

        tag = tag.Trim();
        if (string.IsNullOrWhiteSpace(tag)) return ServiceResult<string>.Fail("Tag required.");

        var tags = GetTags(app).ToHashSet(StringComparer.OrdinalIgnoreCase);
        tags.Add(tag);
        app.TagsCsv = string.Join(',', tags);
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Tag added.");
    }

    public async Task<ServiceResult<string>> RemoveTagAsync(Guid applicationId, string tag, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<string>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<string>.Fail("You cannot update this application.");

        var tags = GetTags(app)
            .Where(x => !string.Equals(x, tag, StringComparison.OrdinalIgnoreCase))
            .ToList();

        app.TagsCsv = string.Join(',', tags);
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Tag removed.");
    }

    public async Task<ServiceResult<string>> UpdateNotesAsync(Guid applicationId, string notes, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<string>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<string>.Fail("You cannot update this application.");

        app.Notes = notes;
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Notes updated.");
    }

    public async Task<ServiceResult<CandidateScoreDto>> SubmitScoreAsync(SubmitCandidateScoreRequest request, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == request.ApplicationId);
        if (app is null) return ServiceResult<CandidateScoreDto>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<CandidateScoreDto>.Fail("You cannot score this application.");

        var score = await _db.CandidateScores.FirstOrDefaultAsync(x => x.JobApplicationId == request.ApplicationId);
        if (score is null)
        {
            score = new CandidateScore { JobApplicationId = request.ApplicationId, ScoredByUserId = recruiterUserId };
            _db.CandidateScores.Add(score);
        }

        score.TechnicalScore = ClampScore(request.TechnicalScore);
        score.CommunicationScore = ClampScore(request.CommunicationScore);
        score.CultureFitScore = ClampScore(request.CultureFitScore);
        score.OverallScore = request.OverallScore > 0 ? ClampScore(request.OverallScore) : (score.TechnicalScore + score.CommunicationScore + score.CultureFitScore) / 3;
        score.Comment = request.Comment ?? request.Notes;
        score.ScoredAt = DateTime.UtcNow;

        await _db.SaveChangesAsync();
        return ServiceResult<CandidateScoreDto>.Ok(DtoMapper.ToDto(score));
    }

    public async Task<ServiceResult<CandidateScoreDto>> GetScoreAsync(Guid applicationId, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<CandidateScoreDto>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<CandidateScoreDto>.Fail("You cannot view this score.");

        var score = await _db.CandidateScores.AsNoTracking().FirstOrDefaultAsync(x => x.JobApplicationId == applicationId);
        return score is null
            ? ServiceResult<CandidateScoreDto>.Fail("Score not found.")
            : ServiceResult<CandidateScoreDto>.Ok(DtoMapper.ToDto(score));
    }

    public async Task<ServiceResult<string>> FlagApplicationAsync(Guid applicationId, string reason, Guid recruiterUserId)
    {
        var app = await _db.JobApplications.Include(x => x.Job).FirstOrDefaultAsync(x => x.Id == applicationId);
        if (app is null) return ServiceResult<string>.Fail("Application not found.");
        if (!await CanManageApplication(app, recruiterUserId)) return ServiceResult<string>.Fail("You cannot flag this application.");

        app.IsFlagged = true;
        app.FlagReason = reason;
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Application flagged.");
    }

    private IQueryable<JobApplication> ApplicationQuery() => _db.JobApplications
        .Include(x => x.Job)
            .ThenInclude(x => x.Company)
        .Include(x => x.Job)
            .ThenInclude(x => x.CreatedByUser)
        .Include(x => x.CandidateUser)
            .ThenInclude(x => x.CandidateProfile)
        .Include(x => x.AssignedRecruiter)
        .Include(x => x.Score);

    private static List<string> GetTags(JobApplication app) => string.IsNullOrWhiteSpace(app.TagsCsv)
        ? []
        : app.TagsCsv.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList();

    private async Task<bool> CanManageApplication(JobApplication app, Guid userId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;
        return user.Role == "Admin" || app.Job.CreatedByUserId == userId || app.AssignedRecruiterId == userId;
    }

    private static string NormalizeStage(System.Text.Json.JsonElement? stage)
    {
        if (stage is null || stage.Value.ValueKind is System.Text.Json.JsonValueKind.Null or System.Text.Json.JsonValueKind.Undefined) return "applied";
        if (stage.Value.ValueKind == System.Text.Json.JsonValueKind.Number && stage.Value.TryGetInt32(out var n))
        {
            return n switch
            {
                2 => "shortlisted",
                3 => "assessment",
                4 => "interview",
                5 => "hr_round",
                6 => "selected",
                7 => "rejected",
                _ => "applied"
            };
        }
        var value = stage.Value.ValueKind == System.Text.Json.JsonValueKind.String ? stage.Value.GetString() : stage.Value.ToString();
        return DtoMapper.NormalizeStage(value);
    }

    private static int ClampScore(int score) => Math.Clamp(score, 0, 100);
}
