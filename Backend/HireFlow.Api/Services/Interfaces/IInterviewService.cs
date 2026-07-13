using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IInterviewService
{
    Task<ServiceResult<List<InterviewDto>>> GetInterviewsAsync(Guid userId);
    Task<ServiceResult<List<InterviewDto>>> GetUpcomingAsync(Guid userId);
    Task<ServiceResult<InterviewDto>> GetInterviewByIdAsync(Guid id, Guid userId);
    Task<ServiceResult<List<InterviewDto>>> GetForCandidateAsync(Guid applicationId, Guid userId);
    Task<ServiceResult<InterviewDto>> CreateInterviewAsync(CreateInterviewRequest request, Guid recruiterUserId);
    Task<ServiceResult<string>> CancelInterviewAsync(Guid id, Guid recruiterUserId);
    Task<ServiceResult<string>> SubmitFeedbackAsync(SubmitFeedbackRequest request, Guid recruiterUserId);
    Task<ServiceResult<InterviewDto>> BookAiInterviewAsync(BookAiInterviewRequest request, Guid candidateUserId);
}
