using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

[ApiController]
[Route("api/auth")]
[Route("auth")]
public class AuthController : ApiControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var result = await _authService.RegisterAsync(request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<AuthResponse>.Ok(result.Data!, "Registered successfully."));
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var result = await _authService.LoginAsync(request);
        if (!result.IsSuccess) return Unauthorized(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<AuthResponse>.Ok(result.Data!, "Login successful."));
    }

    [HttpPost("login/2fa")]
    [AllowAnonymous]
    public IActionResult Verify2Fa(VerifyTwoFactorRequest request)
    {
        return BadRequest(ApiResponse<object>.Fail("2FA abhi simple demo mode mein disabled hai."));
    }

    [HttpPost("logout")]
    [Authorize]
    public IActionResult Logout()
    {
        return Ok(ApiResponse<string>.Ok("Logged out."));
    }

    [HttpPost("change-password")]
    [Authorize]
    public async Task<IActionResult> ChangePassword(ChangePasswordRequest request)
    {
        var result = await _authService.ChangePasswordAsync(CurrentUserId, request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<string>.Ok(result.Data!, result.Data));
    }

    [HttpGet("me")]
    [Authorize]
    public async Task<IActionResult> Me()
    {
        var result = await _authService.GetMeAsync(CurrentUserId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<UserDto>.Ok(result.Data!));
    }
}
