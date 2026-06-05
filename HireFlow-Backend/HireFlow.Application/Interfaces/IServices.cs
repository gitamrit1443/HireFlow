using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Auth;
using HireFlow.Application.DTOs.Candidates;
using HireFlow.Application.DTOs.Applications;
using HireFlow.Application.DTOs.Dashboard;
using HireFlow.Application.DTOs.HireMeet;
using HireFlow.Application.DTOs.Interview;
using HireFlow.Application.DTOs.Jobs;
using HireFlow.Application.DTOs.Notifications;
using HireFlow.Domain.Entities;

namespace HireFlow.Application.Interfaces;

public interface IAuthService
{
    Task<Result<LoginResponse>> LoginAsync(LoginRequest request, string ipAddress);
    Task<Result<LoginResponse>> TwoFactorLoginAsync(TwoFactorLoginRequest request, string ipAddress);
    Task<Result<UserDto>> RegisterAsync(RegisterRequest request);
    Task<Result<LoginResponse>> RefreshTokenAsync(string refreshToken, string ipAddress);
    Task<Result> RevokeTokenAsync(string refreshToken, string ipAddress);
    Task<Result<TwoFactorSetupResponse>> SetupTwoFactorAsync(Guid userId);
    Task<Result> VerifyAndEnableTwoFactorAsync(Guid userId, string code);
    Task<Result> DisableTwoFactorAsync(Guid userId, string password);
    Task<Result> ForgotPasswordAsync(ForgotPasswordRequest request);
    Task<Result> ResetPasswordAsync(ResetPasswordRequest request);
    Task<Result> ChangePasswordAsync(Guid userId, ChangePasswordRequest request);
    Task<Result> VerifyEmailAsync(VerifyEmailRequest request);
    Task<Result> ResendVerificationEmailAsync(string email);
    Task<Result<UserDto>> GetCurrentUserAsync(Guid userId);
}

public interface IJobService
{
    Task<Result<PagedResult<JobDto>>> GetJobsAsync(JobFilterRequest filter);
    Task<Result<JobDto>> GetJobByIdAsync(Guid id);
    Task<Result<JobDto>> CreateJobAsync(CreateJobRequest request, Guid recruiterId);
    Task<Result<JobDto>> UpdateJobAsync(UpdateJobRequest request, Guid recruiterId);
    Task<Result> DeleteJobAsync(Guid id, Guid recruiterId);
    Task<Result> ChangeJobStatusAsync(Guid id, string status, Guid recruiterId);
    Task<Result> SyncExternalJobsAsync();
}

public interface ICandidateService
{
    Task<Result<PagedResult<CandidateDto>>> GetCandidatesAsync(CandidateFilterRequest filter, Guid recruiterId);
    Task<Result<CandidateDto>> GetCandidateByIdAsync(Guid applicationId);
    Task<Result> UpdateStageAsync(UpdateCandidateStageRequest request, Guid recruiterId);
    Task<Result> AssignRecruiterAsync(AssignCandidateRequest request, Guid currentRecruiterId);
    Task<Result> AddTagAsync(AddCandidateTagRequest request, Guid recruiterId);
    Task<Result> RemoveTagAsync(Guid applicationId, string tag, Guid recruiterId);
    Task<Result> UpdateNotesAsync(Guid applicationId, string notes, Guid recruiterId);
    Task<Result> SubmitScoreAsync(SubmitCandidateScoreRequest request, Guid recruiterId);
    Task<Result<CandidateScoreDto>> GetScoreAsync(Guid applicationId);
    Task<Result> FlagApplicationAsync(Guid applicationId, string reason, Guid recruiterId);
}

public interface IApplicationService
{
    Task<Result<ApplicationDto>> ApplyAsync(ApplyJobRequest request, Guid candidateUserId);
    Task<Result> WithdrawAsync(Guid applicationId, Guid candidateUserId);
    Task<Result<PagedResult<ApplicationDto>>> GetMyApplicationsAsync(Guid candidateUserId, int page = 1, int pageSize = 20);
}

public interface IInterviewService
{
    Task<Result<List<InterviewDto>>> GetInterviewsAsync(Guid recruiterId);
    Task<Result<InterviewDto>> GetInterviewByIdAsync(Guid id);
    Task<Result<InterviewDto>> CreateInterviewAsync(CreateInterviewRequest request, Guid recruiterId);
    Task<Result> CancelInterviewAsync(Guid id, Guid recruiterId);
    Task<Result> SubmitFeedbackAsync(SubmitFeedbackRequest request, Guid recruiterId);
    Task<Result<List<InterviewDto>>> GetUpcomingAsync(Guid recruiterId);
    Task<Result<List<InterviewDto>>> GetForCandidateAsync(Guid applicationId);
    Task<Result<InterviewDto>> BookAiInterviewAsync(BookAiInterviewRequest request, Guid candidateUserId);
}

public interface IHireMeetService
{
    Task<Result<List<HireMeetingDto>>> GetMeetingsAsync(Guid recruiterId);
    Task<Result<HireMeetingDto>> GetByRoomCodeAsync(string roomCode);
    Task<Result<HireMeetingDto>> CreateMeetingAsync(CreateMeetingRequest request, Guid recruiterId);
    Task<Result> UpdateStatusAsync(UpdateMeetingStatusRequest request, Guid recruiterId);
    Task<Result> DeleteMeetingAsync(Guid id, Guid recruiterId);
    Task<Result<HireMeetingDto>> JoinMeetingAsync(JoinMeetingRequest request, Guid? userId);
    string GenerateRoomCode();
}

public interface IDashboardService
{
    Task<Result<RecruiterDashboardDto>> GetRecruiterDashboardAsync(Guid recruiterId);
    Task<Result<CandidateDashboardDto>> GetCandidateDashboardAsync(Guid candidateUserId);
    Task<Result<AnalyticsDto>> GetAnalyticsAsync(Guid recruiterId, DateTime? from, DateTime? to);
}

public interface INotificationService
{
    Task<Result<List<NotificationDto>>> GetNotificationsAsync(Guid userId, bool unreadOnly = false);
    Task<Result> MarkAsReadAsync(Guid notificationId, Guid userId);
    Task<Result> MarkAllAsReadAsync(Guid userId);
    Task CreateNotificationAsync(Guid userId, string title, string message,
        HireFlow.Domain.Enums.NotificationType type, string? actionUrl = null);
}

public interface IEmailService
{
    Task SendVerificationEmailAsync(string toEmail, string name, string token);
    Task SendPasswordResetEmailAsync(string toEmail, string name, string resetLink);
    Task SendWelcomeEmailAsync(string toEmail, string name, string role);
    Task SendInterviewReminderAsync(string toEmail, string candidateName, DateTime interviewDate, string jobTitle);
    Task SendApplicationUpdateAsync(string toEmail, string candidateName, string jobTitle, string newStage);
}

public interface ITokenService
{
    string GenerateAccessToken(User user);
    string GenerateTempTwoFactorToken(Guid userId);
    string GenerateRefreshToken();
    Task<Guid?> ValidateTempTwoFactorTokenAsync(string token);
    (bool isValid, Guid? userId) ValidateRefreshToken(string token);
}
