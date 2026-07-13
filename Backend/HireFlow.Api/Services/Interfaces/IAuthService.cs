using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IAuthService
{
    Task<ServiceResult<AuthResponse>> RegisterAsync(RegisterRequest request);
    Task<ServiceResult<AuthResponse>> LoginAsync(LoginRequest request);
    Task<ServiceResult<UserDto>> GetMeAsync(Guid userId);
    Task<ServiceResult<string>> ChangePasswordAsync(Guid userId, ChangePasswordRequest request);
}
