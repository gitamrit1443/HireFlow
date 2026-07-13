using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface ICandidateService
{
    Task<ServiceResult<PagedResult<ApplicationDto>>> GetCandidatesAsync(CandidateFilterRequest filter, Guid recruiterUserId);
    Task<ServiceResult<ApplicationDto>> GetCandidateByIdAsync(Guid applicationId, Guid recruiterUserId);
    Task<ServiceResult<string>> UpdateStageAsync(UpdateCandidateStageRequest request, Guid recruiterUserId);
    Task<ServiceResult<string>> AssignRecruiterAsync(AssignCandidateRequest request, Guid recruiterUserId);
    Task<ServiceResult<string>> AddTagAsync(Guid applicationId, string tag, Guid recruiterUserId);
    Task<ServiceResult<string>> RemoveTagAsync(Guid applicationId, string tag, Guid recruiterUserId);
    Task<ServiceResult<string>> UpdateNotesAsync(Guid applicationId, string notes, Guid recruiterUserId);
    Task<ServiceResult<CandidateScoreDto>> SubmitScoreAsync(SubmitCandidateScoreRequest request, Guid recruiterUserId);
    Task<ServiceResult<CandidateScoreDto>> GetScoreAsync(Guid applicationId, Guid recruiterUserId);
    Task<ServiceResult<string>> FlagApplicationAsync(Guid applicationId, string reason, Guid recruiterUserId);
}
