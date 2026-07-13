using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IJobService
{
    Task<ServiceResult<PagedResult<JobDto>>> GetJobsAsync(JobFilterRequest filter);
    Task<ServiceResult<JobDto>> GetJobByIdAsync(Guid id);
    Task<ServiceResult<JobDto>> CreateJobAsync(CreateJobRequest request, Guid userId);
    Task<ServiceResult<JobDto>> UpdateJobAsync(Guid id, UpdateJobRequest request, Guid userId);
    Task<ServiceResult<string>> DeleteJobAsync(Guid id, Guid userId);
    Task<ServiceResult<string>> ChangeJobStatusAsync(Guid id, string status, Guid userId);
}
