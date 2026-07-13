using System.Text.Json;
using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class JobService : IJobService
{
    private readonly HireFlowDbContext _db;

    public JobService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<PagedResult<JobDto>>> GetJobsAsync(JobFilterRequest filter)
    {
        filter.Page = Math.Max(1, filter.Page);
        filter.PageSize = Math.Clamp(filter.PageSize, 1, 200);

        var query = GetJobQuery().AsNoTracking().AsQueryable();

        if (!string.IsNullOrWhiteSpace(filter.Search))
        {
            var search = filter.Search.Trim();
            query = query.Where(x => x.Title.Contains(search) || x.Description.Contains(search) || x.Department.Contains(search));
        }

        if (!string.IsNullOrWhiteSpace(filter.Location))
        {
            var location = filter.Location.Trim();
            query = query.Where(x => x.Location != null && x.Location.Contains(location));
        }

        if (!string.IsNullOrWhiteSpace(filter.Status))
        {
            var status = DtoMapper.NormalizeStatus(filter.Status);
            query = query.Where(x => x.Status == status);
        }

        var total = await query.CountAsync();
        var jobs = await query
            .OrderByDescending(x => x.CreatedAt)
            .Skip((filter.Page - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .ToListAsync();

        return ServiceResult<PagedResult<JobDto>>.Ok(new PagedResult<JobDto>
        {
            Items = jobs.Select(DtoMapper.ToDto).ToList(),
            Page = filter.Page,
            PageSize = filter.PageSize,
            TotalCount = total
        });
    }

    public async Task<ServiceResult<JobDto>> GetJobByIdAsync(Guid id)
    {
        var job = await GetJobQuery().AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        return job is null
            ? ServiceResult<JobDto>.Fail("Job not found.")
            : ServiceResult<JobDto>.Ok(DtoMapper.ToDto(job));
    }

    public async Task<ServiceResult<JobDto>> CreateJobAsync(CreateJobRequest request, Guid userId)
    {
        var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<JobDto>.Fail("User not found.");
        if (user.Role is not ("Recruiter" or "Admin")) return ServiceResult<JobDto>.Fail("Only Recruiter/Admin can create job.");

        if (string.IsNullOrWhiteSpace(request.Title)) return ServiceResult<JobDto>.Fail("Title required.");
        if (string.IsNullOrWhiteSpace(request.Description)) return ServiceResult<JobDto>.Fail("Description required.");
        if (!await CompanyExistsAsync(request.CompanyId)) return ServiceResult<JobDto>.Fail("Company not found.");

        var status = NormalizeStatus(request.Status, "open");
        var type = NormalizeJobType(request.Type, request.EmploymentType);
        var salaryMin = request.SalaryMin ?? request.Salary ?? 0;
        var salaryMax = request.SalaryMax ?? request.Salary ?? salaryMin;

        var job = new Job
        {
            Title = request.Title.Trim(),
            Department = request.Department?.Trim() ?? string.Empty,
            Description = request.Description.Trim(),
            Location = request.Location?.Trim(),
            EmploymentType = type,
            Experience = request.Experience?.Trim() ?? string.Empty,
            Salary = request.Salary ?? salaryMax,
            SalaryMin = salaryMin,
            SalaryMax = salaryMax,
            Currency = string.IsNullOrWhiteSpace(request.Currency) ? "INR" : request.Currency.Trim(),
            SkillsCsv = DtoMapper.JoinCsv(request.Skills),
            CompanyId = request.CompanyId,
            CreatedByUserId = userId,
            Status = status,
            ClosingDate = request.ClosingDate,
            HiringManager = string.IsNullOrWhiteSpace(request.HiringManager) ? user.FullName : request.HiringManager.Trim(),
            Openings = request.Openings <= 0 ? 1 : request.Openings
        };

        _db.Jobs.Add(job);
        await _db.SaveChangesAsync();

        var created = await GetJobQuery().AsNoTracking().FirstAsync(x => x.Id == job.Id);
        return ServiceResult<JobDto>.Ok(DtoMapper.ToDto(created));
    }

    public async Task<ServiceResult<JobDto>> UpdateJobAsync(Guid id, UpdateJobRequest request, Guid userId)
    {
        var job = await _db.Jobs.FirstOrDefaultAsync(x => x.Id == id);
        if (job is null) return ServiceResult<JobDto>.Fail("Job not found.");
        if (!await CanManageJob(job, userId)) return ServiceResult<JobDto>.Fail("You cannot update this job.");
        if (string.IsNullOrWhiteSpace(request.Title)) return ServiceResult<JobDto>.Fail("Title required.");
        if (string.IsNullOrWhiteSpace(request.Description)) return ServiceResult<JobDto>.Fail("Description required.");
        if (!await CompanyExistsAsync(request.CompanyId)) return ServiceResult<JobDto>.Fail("Company not found.");

        var type = NormalizeJobType(request.Type, request.EmploymentType);
        var salaryMin = request.SalaryMin ?? request.Salary ?? job.SalaryMin;
        var salaryMax = request.SalaryMax ?? request.Salary ?? job.SalaryMax;

        job.Title = request.Title.Trim();
        job.Department = request.Department?.Trim() ?? job.Department;
        job.Description = request.Description.Trim();
        job.Location = request.Location?.Trim();
        job.EmploymentType = type;
        job.Experience = request.Experience?.Trim() ?? job.Experience;
        job.Salary = request.Salary ?? salaryMax;
        job.SalaryMin = salaryMin;
        job.SalaryMax = salaryMax;
        job.Currency = string.IsNullOrWhiteSpace(request.Currency) ? job.Currency : request.Currency.Trim();
        job.SkillsCsv = DtoMapper.JoinCsv(request.Skills);
        job.CompanyId = request.CompanyId;
        job.Status = NormalizeStatus(request.Status, job.Status);
        job.ClosingDate = request.ClosingDate;
        job.HiringManager = string.IsNullOrWhiteSpace(request.HiringManager) ? job.HiringManager : request.HiringManager.Trim();
        job.Openings = request.Openings <= 0 ? job.Openings : request.Openings;

        await _db.SaveChangesAsync();

        var updated = await GetJobQuery().AsNoTracking().FirstAsync(x => x.Id == id);
        return ServiceResult<JobDto>.Ok(DtoMapper.ToDto(updated));
    }

    public async Task<ServiceResult<string>> DeleteJobAsync(Guid id, Guid userId)
    {
        var job = await _db.Jobs.FirstOrDefaultAsync(x => x.Id == id);
        if (job is null) return ServiceResult<string>.Fail("Job not found.");
        if (!await CanManageJob(job, userId)) return ServiceResult<string>.Fail("You cannot delete this job.");

        _db.Jobs.Remove(job);
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Job deleted.");
    }

    public async Task<ServiceResult<string>> ChangeJobStatusAsync(Guid id, string status, Guid userId)
    {
        var job = await _db.Jobs.FirstOrDefaultAsync(x => x.Id == id);
        if (job is null) return ServiceResult<string>.Fail("Job not found.");
        if (!await CanManageJob(job, userId)) return ServiceResult<string>.Fail("You cannot update this job.");

        job.Status = status.Trim() switch
        {
            "1" => "open",
            "2" => "closed",
            "3" => "draft",
            "4" => "paused",
            _ => DtoMapper.NormalizeStatus(status)
        };
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Status updated.");
    }

    private IQueryable<Job> GetJobQuery() => _db.Jobs
        .Include(x => x.Company)
        .Include(x => x.CreatedByUser)
        .Include(x => x.Applications);

    private async Task<bool> CompanyExistsAsync(Guid? companyId)
    {
        if (!companyId.HasValue) return true;
        return await _db.Companies.AnyAsync(x => x.Id == companyId.Value);
    }

    private async Task<bool> CanManageJob(Job job, Guid userId)
    {
        var user = await _db.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;
        return user.Role == "Admin" || job.CreatedByUserId == userId;
    }

    private static string NormalizeStatus(JsonElement? status, string fallback)
    {
        var value = ReadJsonValue(status);
        return value switch
        {
            "1" => "open",
            "2" => "closed",
            "3" => "draft",
            "4" => "paused",
            null or "" => DtoMapper.NormalizeStatus(fallback),
            _ => DtoMapper.NormalizeStatus(value)
        };
    }

    private static string NormalizeJobType(JsonElement? type, string? fallback)
    {
        var value = ReadJsonValue(type);
        return value switch
        {
            "1" => "full-time",
            "2" => "part-time",
            "3" => "contract",
            "4" => "remote",
            null or "" => DtoMapper.NormalizeJobType(fallback),
            _ => DtoMapper.NormalizeJobType(value)
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
