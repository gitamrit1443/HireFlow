using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IApplicationService
{
    Task<ServiceResult<ApplicationDto>> ApplyAsync(ApplyJobRequest request, Guid candidateUserId);
    Task<ServiceResult<string>> WithdrawAsync(Guid applicationId, Guid candidateUserId);
    Task<ServiceResult<PagedResult<ApplicationDto>>> GetMyApplicationsAsync(Guid candidateUserId, int page, int pageSize);
}
