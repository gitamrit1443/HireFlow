using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class ApplicationService : IApplicationService
{
    private readonly HireFlowDbContext _db;

    public ApplicationService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<ApplicationDto>> ApplyAsync(ApplyJobRequest request, Guid candidateUserId)
    {
        var candidate = await _db.Users.FirstOrDefaultAsync(x => x.Id == candidateUserId);
        if (candidate is null) return ServiceResult<ApplicationDto>.Fail("User not found.");
        if (candidate.Role != "Candidate") return ServiceResult<ApplicationDto>.Fail("Only Candidate can apply.");

        var job = await _db.Jobs.FirstOrDefaultAsync(x => x.Id == request.JobId && x.Status == "open");
        if (job is null) return ServiceResult<ApplicationDto>.Fail("Open job not found.");

        var alreadyApplied = await _db.JobApplications.AnyAsync(x => x.JobId == request.JobId && x.CandidateUserId == candidateUserId);
        if (alreadyApplied) return ServiceResult<ApplicationDto>.Fail("You already applied for this job.");

        var application = new JobApplication
        {
            JobId = request.JobId,
            CandidateUserId = candidateUserId,
            ResumeUrl = request.ResumeUrl,
            CoverLetter = request.CoverLetter,
            Status = "submitted",
            Stage = "applied"
        };

        _db.JobApplications.Add(application);
        _db.Notifications.Add(new Notification
        {
            UserId = job.CreatedByUserId,
            Title = "New application received",
            Message = $"{candidate.FullName} applied for {job.Title}."
        });

        await _db.SaveChangesAsync();

        var saved = await ApplicationQuery().AsNoTracking().FirstAsync(x => x.Id == application.Id);
        return ServiceResult<ApplicationDto>.Ok(DtoMapper.ToDto(saved));
    }

    public async Task<ServiceResult<string>> WithdrawAsync(Guid applicationId, Guid candidateUserId)
    {
        var application = await _db.JobApplications.FirstOrDefaultAsync(x => x.Id == applicationId && x.CandidateUserId == candidateUserId);
        if (application is null) return ServiceResult<string>.Fail("Application not found.");

        application.Status = "withdrawn";
        application.Stage = "withdrawn";
        await _db.SaveChangesAsync();

        return ServiceResult<string>.Ok("Application withdrawn.");
    }

    public async Task<ServiceResult<PagedResult<ApplicationDto>>> GetMyApplicationsAsync(Guid candidateUserId, int page, int pageSize)
    {
        page = Math.Max(1, page);
        pageSize = Math.Clamp(pageSize, 1, 200);

        var query = ApplicationQuery()
            .AsNoTracking()
            .Where(x => x.CandidateUserId == candidateUserId);

        var total = await query.CountAsync();
        var apps = await query
            .OrderByDescending(x => x.AppliedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return ServiceResult<PagedResult<ApplicationDto>>.Ok(new PagedResult<ApplicationDto>
        {
            Items = apps.Select(DtoMapper.ToDto).ToList(),
            Page = page,
            PageSize = pageSize,
            TotalCount = total
        });
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
}
