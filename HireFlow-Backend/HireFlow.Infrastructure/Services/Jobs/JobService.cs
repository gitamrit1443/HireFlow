using System.Text.Json;
using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Jobs;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace HireFlow.Infrastructure.Services.Jobs;

public class JobService : IJobService
{
    private readonly HireFlowDbContext _db;
    private readonly RapidApiJobsService _rapidApiJobs;

    public JobService(HireFlowDbContext db, RapidApiJobsService rapidApiJobs)
    {
        _db = db;
        _rapidApiJobs = rapidApiJobs;
    }

    public async Task<Result<PagedResult<JobDto>>> GetJobsAsync(JobFilterRequest filter)
    {
        var query = _db.Jobs.Include(j => j.Company).AsQueryable();

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var s = filter.Search.ToLower();
            query = query.Where(j =>
                j.Title.ToLower().Contains(s) ||
                j.Department.ToLower().Contains(s) ||
                j.Description.ToLower().Contains(s) ||
                j.HiringManager.ToLower().Contains(s));
        }

        if (filter.Status.HasValue)
            query = query.Where(j => j.Status == filter.Status.Value);

        if (filter.Type.HasValue)
            query = query.Where(j => j.Type == filter.Type.Value);

        if (!string.IsNullOrWhiteSpace(filter.Department))
            query = query.Where(j => j.Department.ToLower() == filter.Department.ToLower());

        if (!string.IsNullOrWhiteSpace(filter.Location))
            query = query.Where(j => j.Location.ToLower().Contains(filter.Location.ToLower()));

        if (filter.Source.HasValue)
            query = query.Where(j => j.Source == filter.Source.Value);

        query = filter.SortBy.ToLower() switch
        {
            "title" => filter.SortDir == "asc" ? query.OrderBy(j => j.Title) : query.OrderByDescending(j => j.Title),
            "applicantscount" => filter.SortDir == "asc" ? query.OrderBy(j => j.ApplicantsCount) : query.OrderByDescending(j => j.ApplicantsCount),
            _ => filter.SortDir == "asc" ? query.OrderBy(j => j.PostedDate) : query.OrderByDescending(j => j.PostedDate)
        };

        var total = await query.CountAsync();
        var items = await query
            .Skip((filter.Page - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .ToListAsync();

        return Result<PagedResult<JobDto>>.Success(new PagedResult<JobDto>
        {
            Items = items.Select(MapToDto).ToList(),
            TotalCount = total,
            Page = filter.Page,
            PageSize = filter.PageSize
        });
    }

    public async Task<Result<JobDto>> GetJobByIdAsync(Guid id)
    {
        var job = await _db.Jobs.Include(j => j.Company).FirstOrDefaultAsync(j => j.Id == id);
        if (job == null) return Result<JobDto>.Failure("Job not found.");
        return Result<JobDto>.Success(MapToDto(job));
    }

    public async Task<Result<JobDto>> CreateJobAsync(CreateJobRequest request, Guid recruiterId)
    {
        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null) return Result<JobDto>.Failure("Recruiter profile not found.");

        var job = new Job
        {
            Title = request.Title.Trim(),
            Department = request.Department.Trim(),
            Location = request.Location.Trim(),
            Type = request.Type,
            Experience = request.Experience.Trim(),
            SalaryMin = request.SalaryMin,
            SalaryMax = request.SalaryMax,
            Currency = request.Currency,
            Skills = JsonSerializer.Serialize(request.Skills),
            Description = request.Description.Trim(),
            Status = request.Status,
            ClosingDate = request.ClosingDate,
            HiringManager = request.HiringManager.Trim(),
            Openings = request.Openings,
            PostedDate = DateTime.UtcNow,
            Source = JobSource.HireFlow,
            RecruiterProfileId = recruiter.Id,
            CompanyId = recruiter.CompanyId
        };

        _db.Jobs.Add(job);
        await _db.SaveChangesAsync();
        return Result<JobDto>.Success(MapToDto(job));
    }

    public async Task<Result<JobDto>> UpdateJobAsync(UpdateJobRequest request, Guid recruiterId)
    {
        var job = await _db.Jobs.FindAsync(request.Id);
        if (job == null) return Result<JobDto>.Failure("Job not found.");

        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null || job.RecruiterProfileId != recruiter.Id)
            return Result<JobDto>.Failure("You don't have permission to edit this job.");

        job.Title = request.Title.Trim();
        job.Department = request.Department.Trim();
        job.Location = request.Location.Trim();
        job.Type = request.Type;
        job.Experience = request.Experience.Trim();
        job.SalaryMin = request.SalaryMin;
        job.SalaryMax = request.SalaryMax;
        job.Currency = request.Currency;
        job.Skills = JsonSerializer.Serialize(request.Skills);
        job.Description = request.Description.Trim();
        job.Status = request.Status;
        job.ClosingDate = request.ClosingDate;
        job.HiringManager = request.HiringManager.Trim();
        job.Openings = request.Openings;

        await _db.SaveChangesAsync();
        return Result<JobDto>.Success(MapToDto(job));
    }

    public async Task<Result> DeleteJobAsync(Guid id, Guid recruiterId)
    {
        var job = await _db.Jobs.FindAsync(id);
        if (job == null) return Result.Failure("Job not found.");

        var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
        if (recruiter == null || job.RecruiterProfileId != recruiter.Id)
            return Result.Failure("Permission denied.");

        job.IsDeleted = true;
        job.DeletedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> ChangeJobStatusAsync(Guid id, string status, Guid recruiterId)
{
    var job = await _db.Jobs.FindAsync(id);
    if (job == null) return Result.Failure("Job not found.");

    var recruiter = await _db.RecruiterProfiles.FirstOrDefaultAsync(r => r.UserId == recruiterId);
    if (recruiter == null || job.RecruiterProfileId != recruiter.Id)
        return Result.Failure("Permission denied.");

    var normalizedStatus = status.Trim().ToLowerInvariant();
    if (normalizedStatus is not ("open" or "closed" or "paused" or "draft"))
        return Result.Failure("Invalid status.");

    job.Status = normalizedStatus switch
    {
        "open" => JobStatus.Open,
        "closed" => JobStatus.Closed,
        "paused" => JobStatus.Paused,
        "draft" => JobStatus.Draft,
        _ => JobStatus.Draft
    };

    await _db.SaveChangesAsync();
    return Result.Success();
}

    /// <summary>
    /// Called by the Admin sync endpoint and Hangfire. Uses the RapidAPI-backed
    /// job client to fetch external jobs and upsert them by ExternalJobId.
    /// </summary>
    public async Task<Result> SyncExternalJobsAsync()
    {
        try
        {
            await _rapidApiJobs.SyncAllAsync();
            return Result.Success();
        }
        catch (Exception ex)
        {
            return Result.Failure($"External job sync failed: {ex.Message}");
        }
    }

    private static JobDto MapToDto(Job job)
    {
        List<string> skills;
        try { skills = JsonSerializer.Deserialize<List<string>>(job.Skills) ?? new(); }
        catch { skills = new(); }

        return new JobDto
        {
            Id = job.Id,
            Title = job.Title,
            Department = job.Department,
            Location = job.Location,
            Type = job.Type switch
            {
                JobType.FullTime => "full-time",
                JobType.PartTime => "part-time",
                JobType.Contract => "contract",
                JobType.Remote => "remote",
                _ => "full-time"
            },
            Experience = job.Experience,
            SalaryMin = job.SalaryMin,
            SalaryMax = job.SalaryMax,
            Currency = job.Currency,
            Skills = skills,
            Description = job.Description,
            Status = job.Status switch
            {
                JobStatus.Open => "open",
                JobStatus.Closed => "closed",
                JobStatus.Paused => "paused",
                JobStatus.Draft => "draft",
                _ => "draft"
            },
            PostedDate = job.PostedDate.ToString("yyyy-MM-dd"),
            ClosingDate = job.ClosingDate?.ToString("yyyy-MM-dd"),
            ApplicantsCount = job.ApplicantsCount,
            ShortlistedCount = job.ShortlistedCount,
            HiringManager = job.HiringManager,
            Openings = job.Openings,
            CompanyName = job.Company?.Name,
            Source = job.Source,
            ExternalUrl = job.ExternalUrl
        };
    }
}
