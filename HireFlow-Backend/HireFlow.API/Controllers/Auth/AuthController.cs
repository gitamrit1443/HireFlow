using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Auth;
using HireFlow.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HireFlow.API.Controllers.Auth;

[ApiController]
[Route("api/v1/auth")]
[Produces("application/json")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _auth;

    public AuthController(IAuthService auth) => _auth = auth;

    /// <summary>Login with email + password. Returns access + refresh tokens.</summary>
    [HttpPost("login")]
    [ProducesResponseType(typeof(ApiResponse<LoginResponse>), 200)]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var ip = GetIpAddress();
        var result = await _auth.LoginAsync(request, ip);
        if (!result.IsSuccess) return BadRequest(ApiResponse<LoginResponse>.Fail(result.Error!));

        if (result.Data!.RequiresTwoFactor)
            return Ok(ApiResponse<LoginResponse>.Ok(result.Data, "2FA required"));

        SetRefreshTokenCookie(result.Data.RefreshToken, result.Data.RefreshTokenExpiry);
        return Ok(ApiResponse<LoginResponse>.Ok(result.Data, "Login successful"));
    }

    /// <summary>Complete login with 2FA code (TOTP or backup code)</summary>
    [HttpPost("login/2fa")]
    public async Task<IActionResult> TwoFactorLogin([FromBody] TwoFactorLoginRequest request)
    {
        var ip = GetIpAddress();
        var result = await _auth.TwoFactorLoginAsync(request, ip);
        if (!result.IsSuccess) return BadRequest(ApiResponse<LoginResponse>.Fail(result.Error!));

        SetRefreshTokenCookie(result.Data!.RefreshToken, result.Data.RefreshTokenExpiry);
        return Ok(ApiResponse<LoginResponse>.Ok(result.Data, "Login successful"));
    }

    /// <summary>Register as Candidate or Recruiter</summary>
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ApiResponse<object>.Fail(ModelState.Values
                .SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList()));

        var result = await _auth.RegisterAsync(request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<UserDto>.Ok(result.Data!, "Registration successful. Please verify your email."));
    }

    /// <summary>Refresh access token using refresh token cookie</summary>
    [HttpPost("refresh-token")]
    public async Task<IActionResult> RefreshToken()
    {
        var refreshToken = Request.Cookies["refreshToken"] ??
            Request.Headers["X-Refresh-Token"].FirstOrDefault();

        if (string.IsNullOrEmpty(refreshToken))
            return Unauthorized(ApiResponse<object>.Fail("Refresh token not found."));

        var result = await _auth.RefreshTokenAsync(refreshToken, GetIpAddress());
        if (!result.IsSuccess) return Unauthorized(ApiResponse<object>.Fail(result.Error!));

        SetRefreshTokenCookie(result.Data!.RefreshToken, result.Data.RefreshTokenExpiry);
        return Ok(ApiResponse<LoginResponse>.Ok(result.Data));
    }

    /// <summary>Logout — revokes the refresh token</summary>
    [HttpPost("logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        var refreshToken = Request.Cookies["refreshToken"] ??
            Request.Headers["X-Refresh-Token"].FirstOrDefault();

        if (!string.IsNullOrEmpty(refreshToken))
            await _auth.RevokeTokenAsync(refreshToken, GetIpAddress());

        Response.Cookies.Delete("refreshToken");
        return Ok(ApiResponse.Ok("Logged out successfully."));
    }

    /// <summary>Get current authenticated user</summary>
    [HttpGet("me")]
    [Authorize]
    public async Task<IActionResult> Me()
    {
        var userId = GetUserId();
        if (userId == Guid.Empty) return Unauthorized();
        var result = await _auth.GetCurrentUserAsync(userId);
        if (!result.IsSuccess) return NotFound(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<UserDto>.Ok(result.Data!));
    }

    // ---- 2FA ----

    /// <summary>Initiate 2FA setup — returns QR code + backup codes</summary>
    [HttpPost("2fa/setup")]
    [Authorize]
    public async Task<IActionResult> Setup2FA()
    {
        var userId = GetUserId();
        var result = await _auth.SetupTwoFactorAsync(userId);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse<TwoFactorSetupResponse>.Ok(result.Data!));
    }

    /// <summary>Verify TOTP code and enable 2FA permanently</summary>
    [HttpPost("2fa/enable")]
    [Authorize]
    public async Task<IActionResult> Enable2FA([FromBody] TwoFactorVerifyRequest request)
    {
        var userId = GetUserId();
        var result = await _auth.VerifyAndEnableTwoFactorAsync(userId, request.Code);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("2FA enabled successfully."));
    }

    /// <summary>Disable 2FA (requires password confirmation)</summary>
    [HttpPost("2fa/disable")]
    [Authorize]
    public async Task<IActionResult> Disable2FA([FromBody] TwoFactorVerifyRequest request)
    {
        var userId = GetUserId();
        // Reusing TwoFactorVerifyRequest but passing as password for simplicity
        var result = await _auth.DisableTwoFactorAsync(userId, request.Code);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("2FA disabled."));
    }

    // ---- Password ----

    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
    {
        await _auth.ForgotPasswordAsync(request);
        // Always return 200 to prevent user enumeration (OWASP)
        return Ok(ApiResponse.Ok("If an account with this email exists, a reset link has been sent."));
    }

    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
    {
        var result = await _auth.ResetPasswordAsync(request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Password reset successful."));
    }

    [HttpPost("change-password")]
    [Authorize]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
    {
        var userId = GetUserId();
        var result = await _auth.ChangePasswordAsync(userId, request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Password changed successfully."));
    }

    // ---- Email Verification ----

    [HttpPost("verify-email")]
    public async Task<IActionResult> VerifyEmail([FromBody] VerifyEmailRequest request)
    {
        var result = await _auth.VerifyEmailAsync(request);
        if (!result.IsSuccess) return BadRequest(ApiResponse<object>.Fail(result.Error!));
        return Ok(ApiResponse.Ok("Email verified successfully."));
    }

    [HttpPost("resend-verification")]
    public async Task<IActionResult> ResendVerification([FromBody] ForgotPasswordRequest request)
    {
        await _auth.ResendVerificationEmailAsync(request.Email);
        return Ok(ApiResponse.Ok("Verification email sent if account exists."));
    }

    // ---- Helpers ----

    private void SetRefreshTokenCookie(string token, DateTime expires)
    {
        Response.Cookies.Append("refreshToken", token, new CookieOptions
        {
            HttpOnly = true,      // Not accessible via JS
            Secure = true,        // HTTPS only
            SameSite = SameSiteMode.Strict,
            Expires = expires
        });
    }

    private Guid GetUserId()
    {
        var sub = User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? User.FindFirstValue("sub");
        return Guid.TryParse(sub, out var id) ? id : Guid.Empty;
    }

    private string GetIpAddress()
    {
        var forwardedFor = Request.Headers["X-Forwarded-For"].FirstOrDefault();
        return forwardedFor ?? HttpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";
    }
}
