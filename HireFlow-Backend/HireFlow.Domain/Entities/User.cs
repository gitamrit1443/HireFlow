using HireFlow.Domain.Common;
using HireFlow.Domain.Enums;

namespace HireFlow.Domain.Entities;

public class User : BaseEntity
{
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? PhoneNumber { get; set; }
    public string? ProfileImageUrl { get; set; }
    public UserRole Role { get; set; }
    public string? Company { get; set; }

    // Email verification
    public bool IsEmailVerified { get; set; } = false;
    public string? EmailVerificationToken { get; set; }
    public DateTime? EmailVerificationExpiry { get; set; }

    // Account status
    public bool IsActive { get; set; } = true;
    public bool IsApproved { get; set; } = false; // admin approval for recruiters
    public DateTime? LastLoginAt { get; set; }
    public string? LastLoginIp { get; set; }

    // Lockout (OWASP: account lockout after failed attempts)
    public int FailedLoginAttempts { get; set; } = 0;
    public DateTime? LockoutEnd { get; set; }

    // 2FA (TOTP - Google Authenticator compatible)
    public bool TwoFactorEnabled { get; set; } = false;
    public string? TwoFactorSecret { get; set; }       // Base32 secret
    public bool TwoFactorSetupComplete { get; set; } = false;
    public string? TwoFactorBackupCodes { get; set; }  // JSON: hashed backup codes

    // Password reset
    public string? PasswordResetToken { get; set; }    // hashed token
    public DateTime? PasswordResetExpiry { get; set; }

    // Navigations
    public CandidateProfile? CandidateProfile { get; set; }
    public RecruiterProfile? RecruiterProfile { get; set; }
    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    public ICollection<Notification> Notifications { get; set; } = new List<Notification>();
    public ICollection<AuditLog> AuditLogs { get; set; } = new List<AuditLog>();

    public string FullName => $"{FirstName} {LastName}".Trim();
    public bool IsLockedOut => LockoutEnd.HasValue && LockoutEnd > DateTime.UtcNow;
}
