using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IDashboardService
{
    Task<ServiceResult<RecruiterDashboardDto>> GetRecruiterDashboardAsync(Guid recruiterUserId);
    Task<ServiceResult<CandidateDashboardDto>> GetCandidateDashboardAsync(Guid candidateUserId);
    Task<ServiceResult<AnalyticsDto>> GetAnalyticsAsync(Guid recruiterUserId, DateTime? from, DateTime? to);
}
