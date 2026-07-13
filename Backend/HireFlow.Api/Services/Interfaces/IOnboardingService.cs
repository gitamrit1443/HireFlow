using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IOnboardingService
{
    Task<ServiceResult<OnboardingStatusDto>> GetStatusAsync(Guid userId);
    Task<ServiceResult<OnboardingStatusDto>> CompleteCandidateAsync(Guid userId, CandidateOnboardingRequest request);
    Task<ServiceResult<OnboardingStatusDto>> CompleteRecruiterAsync(Guid userId, RecruiterOnboardingRequest request);
}
