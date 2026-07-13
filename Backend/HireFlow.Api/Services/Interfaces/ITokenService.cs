using HireFlowBackend.DTOs;
using HireFlowBackend.Models;

namespace HireFlowBackend.Services.Interfaces;

public interface ITokenService
{
    AuthResponse CreateToken(User user);
}
