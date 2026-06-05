using HireFlow.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace HireFlow.Application.DTOs.Auth;

public class LoginRequest
{
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required, MinLength(6)]
    public string Password { get; set; } = string.Empty;

    public string? TwoFactorCode { get; set; }
    public string? RecaptchaToken { get; set; }
}

public class RegisterRequest
{
    [Required]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    public string LastName { get; set; } = string.Empty;

    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required, MinLength(8)]
    public string Password { get; set; } = string.Empty;

    [Required]
    public string ConfirmPassword { get; set; } = string.Empty;

    [Required]
    public UserRole Role { get; set; }

    public string? Company { get; set; }
    public string? PhoneNumber { get; set; }
}

public class LoginResponse
{
    public string AccessToken { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public DateTime AccessTokenExpiry { get; set; }
    public DateTime RefreshTokenExpiry { get; set; }
    public UserDto User { get; set; } = null!;
    public bool RequiresTwoFactor { get; set; } = false;
    public bool TwoFactorSetupRequired { get; set; } = false;
}

public class UserDto
{
    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public UserRole Role { get; set; }
    public string? Company { get; set; }
    public string? ProfileImageUrl { get; set; }
    public bool TwoFactorEnabled { get; set; }
    public bool IsEmailVerified { get; set; }
}

public class TwoFactorSetupResponse
{
    public string Secret { get; set; } = string.Empty;        // Base32 secret
    public string QrCodeBase64 { get; set; } = string.Empty;  // PNG QR code base64
    public string ManualEntryKey { get; set; } = string.Empty;
    public string AccountName { get; set; } = string.Empty;
    public List<string> BackupCodes { get; set; } = new();
}

public class TwoFactorVerifyRequest
{
    [Required, StringLength(6, MinimumLength = 6)]
    public string Code { get; set; } = string.Empty;
}

public class TwoFactorLoginRequest
{
    [Required]
    public string TempToken { get; set; } = string.Empty;     // short-lived JWT after password
    [Required]
    public string Code { get; set; } = string.Empty;           // TOTP or backup code
}

public class RefreshTokenRequest
{
    [Required]
    public string RefreshToken { get; set; } = string.Empty;
}

public class ForgotPasswordRequest
{
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;
}

public class ResetPasswordRequest
{
    [Required]
    public string Token { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;

    [Required, MinLength(8)]
    public string NewPassword { get; set; } = string.Empty;

    [Required]
    public string ConfirmPassword { get; set; } = string.Empty;
}

public class ChangePasswordRequest
{
    [Required]
    public string CurrentPassword { get; set; } = string.Empty;

    [Required, MinLength(8)]
    public string NewPassword { get; set; } = string.Empty;

    [Required]
    public string ConfirmPassword { get; set; } = string.Empty;
}

public class VerifyEmailRequest
{
    [Required]
    public string Token { get; set; } = string.Empty;
    [Required]
    public string Email { get; set; } = string.Empty;
}
