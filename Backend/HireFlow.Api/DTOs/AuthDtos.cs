using System.Text.Json;

namespace HireFlowBackend.DTOs;

public class RegisterRequest
{
    public string FullName { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string ConfirmPassword { get; set; } = string.Empty;
    public JsonElement? Role { get; set; }
    public string? Company { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Phone { get; set; }
    public string? Title { get; set; }
    public string? Department { get; set; }
    public string? Location { get; set; }
    public int? ExperienceYears { get; set; }
    public List<string> Skills { get; set; } = [];
}

public class LoginRequest
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class ChangePasswordRequest
{
    public string CurrentPassword { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
    public string ConfirmPassword { get; set; } = string.Empty;
}

public class VerifyTwoFactorRequest
{
    public string TempToken { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
}

public class AuthResponse
{
    public string AccessToken { get; set; } = string.Empty;
    public string RefreshToken { get; set; } = string.Empty;
    public DateTime ExpiresAt { get; set; }
    public bool RequiresTwoFactor { get; set; } = false;
    public UserDto User { get; set; } = new();
}

public class UserDto
{
    public Guid Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string? Company { get; set; }
    public string? Phone { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Title { get; set; }
    public string? Department { get; set; }
    public string? Location { get; set; }
    public int? ExperienceYears { get; set; }
    public List<string> Skills { get; set; } = [];
    public bool TwoFactorEnabled { get; set; } = false;
}
