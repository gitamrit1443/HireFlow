using HireFlow.Application.Common;
using HireFlow.Application.DTOs.Auth;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace HireFlow.Infrastructure.Services.Auth;

public class AuthService : IAuthService
{
    private readonly HireFlowDbContext _db;
    private readonly TokenService _tokenService;
    private readonly TwoFactorService _twoFactorService;
    private readonly IEmailService _emailService;
    private readonly IConfiguration _config;

    private const int MaxFailedAttempts = 5;
    private const int LockoutMinutes = 15;
    private const int RefreshTokenDays = 7;

    public AuthService(
        HireFlowDbContext db,
        TokenService tokenService,
        TwoFactorService twoFactorService,
        IEmailService emailService,
        IConfiguration config)
    {
        _db = db;
        _tokenService = tokenService;
        _twoFactorService = twoFactorService;
        _emailService = emailService;
        _config = config;
    }

    public async Task<Result<LoginResponse>> LoginAsync(LoginRequest request, string ipAddress)
    {
        var user = await _db.Users
            .FirstOrDefaultAsync(u => u.Email == request.Email.ToLower().Trim() && !u.IsDeleted);

        // OWASP: Same error message for invalid email/password (no user enumeration)
        if (user == null)
            return Result<LoginResponse>.Failure("Invalid email or password.");

        if (!user.IsActive)
            return Result<LoginResponse>.Failure("Account is deactivated. Contact support.");

        // Lockout check
        if (user.IsLockedOut)
            return Result<LoginResponse>.Failure($"Account locked. Try again after {user.LockoutEnd:HH:mm UTC}.");

        // Password verification
        if (!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            user.FailedLoginAttempts++;
            if (user.FailedLoginAttempts >= MaxFailedAttempts)
            {
                user.LockoutEnd = DateTime.UtcNow.AddMinutes(LockoutMinutes);
                user.FailedLoginAttempts = 0;
            }
            await _db.SaveChangesAsync();
            await LogAuditAsync(user.Id, "LOGIN_FAILED", null, null, ipAddress, false);
            return Result<LoginResponse>.Failure("Invalid email or password.");
        }

        // Reset failed attempts on success
        user.FailedLoginAttempts = 0;
        user.LockoutEnd = null;

        // ---- 2FA check ----
        if (user.TwoFactorEnabled && user.TwoFactorSetupComplete)
        {
            // If no 2FA code provided, issue temp token for second step
            if (string.IsNullOrEmpty(request.TwoFactorCode))
            {
                await _db.SaveChangesAsync();
                var tempToken = _tokenService.GenerateTempTwoFactorToken(user.Id);
                return Result<LoginResponse>.Success(new LoginResponse
                {
                    RequiresTwoFactor = true,
                    AccessToken = tempToken,        // temp token used as "pending" marker
                    RefreshToken = string.Empty,
                    User = MapToUserDto(user)
                });
            }

            // Verify TOTP or backup code
            bool codeValid = _twoFactorService.VerifyCode(user.TwoFactorSecret!, request.TwoFactorCode);
            if (!codeValid && !string.IsNullOrEmpty(user.TwoFactorBackupCodes))
            {
                var (verified, updatedJson) = _twoFactorService.VerifyBackupCode(
                    user.TwoFactorBackupCodes, request.TwoFactorCode);
                if (verified)
                {
                    user.TwoFactorBackupCodes = updatedJson;
                    codeValid = true;
                }
            }

            if (!codeValid)
            {
                await _db.SaveChangesAsync();
                return Result<LoginResponse>.Failure("Invalid authenticator code.");
            }
        }

        user.LastLoginAt = DateTime.UtcNow;
        user.LastLoginIp = ipAddress;

        var response = await GenerateTokensAsync(user, ipAddress);
        await _db.SaveChangesAsync();
        await LogAuditAsync(user.Id, "LOGIN_SUCCESS", null, null, ipAddress, true);

        return Result<LoginResponse>.Success(response);
    }

    public async Task<Result<LoginResponse>> TwoFactorLoginAsync(TwoFactorLoginRequest request, string ipAddress)
    {
        var userId = await _tokenService.ValidateTempTwoFactorTokenAsync(request.TempToken);
        if (userId == null)
            return Result<LoginResponse>.Failure("Invalid or expired session. Please log in again.");

        var user = await _db.Users.FindAsync(userId);
        if (user == null || !user.IsActive)
            return Result<LoginResponse>.Failure("User not found.");

        bool codeValid = _twoFactorService.VerifyCode(user.TwoFactorSecret!, request.Code);
        if (!codeValid && !string.IsNullOrEmpty(user.TwoFactorBackupCodes))
        {
            var (verified, updatedJson) = _twoFactorService.VerifyBackupCode(
                user.TwoFactorBackupCodes, request.Code);
            if (verified)
            {
                user.TwoFactorBackupCodes = updatedJson;
                codeValid = true;
            }
        }

        if (!codeValid)
            return Result<LoginResponse>.Failure("Invalid authenticator code.");

        user.LastLoginAt = DateTime.UtcNow;
        user.LastLoginIp = ipAddress;

        var response = await GenerateTokensAsync(user, ipAddress);
        await _db.SaveChangesAsync();
        await LogAuditAsync(user.Id, "2FA_LOGIN_SUCCESS", null, null, ipAddress, true);

        return Result<LoginResponse>.Success(response);
    }

    public async Task<Result<UserDto>> RegisterAsync(RegisterRequest request)
    {
        if (request.Password != request.ConfirmPassword)
            return Result<UserDto>.Failure("Passwords do not match.");

        var exists = await _db.Users.AnyAsync(u => u.Email == request.Email.ToLower().Trim());
        if (exists)
            // OWASP: Do not reveal if email exists — but for UX we hint here (common practice for registration)
            return Result<UserDto>.Failure("An account with this email already exists.");

        var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password, workFactor: 12);

        var user = new User
        {
            Email = request.Email.ToLower().Trim(),
            PasswordHash = passwordHash,
            FirstName = request.FirstName.Trim(),
            LastName = request.LastName.Trim(),
            PhoneNumber = request.PhoneNumber?.Trim(),
            Role = request.Role,
            Company = request.Company?.Trim(),
            IsApproved = request.Role == UserRole.Candidate, // Candidates auto-approved
            IsActive = true
        };

        // Email verification token
        var verifyToken = GenerateSecureToken();
        user.EmailVerificationToken = TokenService.HashToken(verifyToken);
        user.EmailVerificationExpiry = DateTime.UtcNow.AddHours(24);

        _db.Users.Add(user);

        // Create role profile
        if (request.Role == UserRole.Candidate)
            _db.CandidateProfiles.Add(new CandidateProfile { UserId = user.Id });
        else if (request.Role == UserRole.Recruiter)
            _db.RecruiterProfiles.Add(new RecruiterProfile { UserId = user.Id });

        await _db.SaveChangesAsync();

        // Send verification email (fire & forget)
        _ = _emailService.SendVerificationEmailAsync(user.Email, user.FullName, verifyToken);
        _ = _emailService.SendWelcomeEmailAsync(user.Email, user.FullName, request.Role.ToString());

        return Result<UserDto>.Success(MapToUserDto(user));
    }

    public async Task<Result<LoginResponse>> RefreshTokenAsync(string refreshToken, string ipAddress)
    {
        var tokenHash = TokenService.HashToken(refreshToken);
        var storedToken = await _db.RefreshTokens
            .Include(rt => rt.User)
            .FirstOrDefaultAsync(rt => rt.TokenHash == tokenHash);

        if (storedToken == null)
            return Result<LoginResponse>.Failure("Invalid refresh token.");

        if (!storedToken.IsActive)
        {
            // OWASP: Detect token reuse — revoke entire family
            if (storedToken.IsRevoked)
            {
                await RevokeTokenFamilyAsync(storedToken.User.Id, ipAddress);
                await _db.SaveChangesAsync();
            }
            return Result<LoginResponse>.Failure("Refresh token expired or revoked. Please log in again.");
        }

        // Rotate refresh token
        var newRefreshToken = _tokenService.GenerateRefreshToken();
        storedToken.IsRevoked = true;
        storedToken.RevokedAt = DateTime.UtcNow;
        storedToken.RevokedByIp = ipAddress;
        storedToken.ReplacedByToken = newRefreshToken;

        var user = storedToken.User;
        var response = await GenerateTokensAsync(user, ipAddress);
        await _db.SaveChangesAsync();

        return Result<LoginResponse>.Success(response);
    }

    public async Task<Result> RevokeTokenAsync(string refreshToken, string ipAddress)
    {
        var tokenHash = TokenService.HashToken(refreshToken);
        var storedToken = await _db.RefreshTokens.FirstOrDefaultAsync(rt => rt.TokenHash == tokenHash);

        if (storedToken == null || !storedToken.IsActive)
            return Result.Failure("Invalid token.");

        storedToken.IsRevoked = true;
        storedToken.RevokedAt = DateTime.UtcNow;
        storedToken.RevokedByIp = ipAddress;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result<TwoFactorSetupResponse>> SetupTwoFactorAsync(Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);
        if (user == null) return Result<TwoFactorSetupResponse>.Failure("User not found.");
        if (user.TwoFactorEnabled) return Result<TwoFactorSetupResponse>.Failure("2FA is already enabled.");

        var secret = _twoFactorService.GenerateSecret();
        user.TwoFactorSecret = secret;
        user.TwoFactorSetupComplete = false;

        var backupCodes = _twoFactorService.GenerateBackupCodes();
        user.TwoFactorBackupCodes = _twoFactorService.HashBackupCodes(backupCodes);

        await _db.SaveChangesAsync();

        var qrBase64 = _twoFactorService.GenerateQrCodeBase64(user.Email, secret);

        return Result<TwoFactorSetupResponse>.Success(new TwoFactorSetupResponse
        {
            Secret = secret,
            QrCodeBase64 = qrBase64,
            ManualEntryKey = FormatSecretForDisplay(secret),
            AccountName = $"HireFlow ({user.Email})",
            BackupCodes = backupCodes
        });
    }

    public async Task<Result> VerifyAndEnableTwoFactorAsync(Guid userId, string code)
    {
        var user = await _db.Users.FindAsync(userId);
        if (user == null) return Result.Failure("User not found.");
        if (user.TwoFactorSecret == null) return Result.Failure("2FA setup not initiated.");

        if (!_twoFactorService.VerifyCode(user.TwoFactorSecret, code))
            return Result.Failure("Invalid code. Please scan the QR code again and retry.");

        user.TwoFactorEnabled = true;
        user.TwoFactorSetupComplete = true;
        await _db.SaveChangesAsync();
        await LogAuditAsync(userId, "2FA_ENABLED", null, null, null, true);
        return Result.Success();
    }

    public async Task<Result> DisableTwoFactorAsync(Guid userId, string password)
    {
        var user = await _db.Users.FindAsync(userId);
        if (user == null) return Result.Failure("User not found.");
        if (!BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
            return Result.Failure("Incorrect password.");

        user.TwoFactorEnabled = false;
        user.TwoFactorSetupComplete = false;
        user.TwoFactorSecret = null;
        user.TwoFactorBackupCodes = null;
        await _db.SaveChangesAsync();
        await LogAuditAsync(userId, "2FA_DISABLED", null, null, null, true);
        return Result.Success();
    }

    public async Task<Result> ForgotPasswordAsync(ForgotPasswordRequest request)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email.ToLower().Trim());
        // OWASP: Always return success (don't reveal if email exists)
        if (user == null) return Result.Success();

        var rawToken = GenerateSecureToken();
        user.PasswordResetToken = TokenService.HashToken(rawToken);
        user.PasswordResetExpiry = DateTime.UtcNow.AddHours(1);
        await _db.SaveChangesAsync();

        var resetLink = $"{_config["App:FrontendUrl"]}/auth/reset-password?token={Uri.EscapeDataString(rawToken)}&email={Uri.EscapeDataString(user.Email)}";
        _ = _emailService.SendPasswordResetEmailAsync(user.Email, user.FullName, resetLink);
        return Result.Success();
    }

    public async Task<Result> ResetPasswordAsync(ResetPasswordRequest request)
    {
        if (request.NewPassword != request.ConfirmPassword)
            return Result.Failure("Passwords do not match.");

        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email.ToLower().Trim());
        if (user == null) return Result.Failure("Invalid reset request.");

        var tokenHash = TokenService.HashToken(request.Token);
        if (user.PasswordResetToken != tokenHash)
            return Result.Failure("Invalid or expired reset token.");

        if (user.PasswordResetExpiry < DateTime.UtcNow)
            return Result.Failure("Reset token has expired. Please request a new one.");

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.NewPassword, workFactor: 12);
        user.PasswordResetToken = null;
        user.PasswordResetExpiry = null;

        // Invalidate all refresh tokens on password reset (OWASP)
        await RevokeTokenFamilyAsync(user.Id, "password_reset");
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> ChangePasswordAsync(Guid userId, ChangePasswordRequest request)
    {
        if (request.NewPassword != request.ConfirmPassword)
            return Result.Failure("Passwords do not match.");

        var user = await _db.Users.FindAsync(userId);
        if (user == null) return Result.Failure("User not found.");

        if (!BCrypt.Net.BCrypt.Verify(request.CurrentPassword, user.PasswordHash))
            return Result.Failure("Current password is incorrect.");

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.NewPassword, workFactor: 12);
        await RevokeTokenFamilyAsync(userId, "password_change");
        await _db.SaveChangesAsync();
        await LogAuditAsync(userId, "PASSWORD_CHANGED", null, null, null, true);
        return Result.Success();
    }

    public async Task<Result> VerifyEmailAsync(VerifyEmailRequest request)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email.ToLower().Trim());
        if (user == null) return Result.Failure("Invalid verification request.");

        if (user.IsEmailVerified) return Result.Success(); // Already verified

        var tokenHash = TokenService.HashToken(request.Token);
        if (user.EmailVerificationToken != tokenHash)
            return Result.Failure("Invalid verification token.");

        if (user.EmailVerificationExpiry < DateTime.UtcNow)
            return Result.Failure("Verification link has expired. Please request a new one.");

        user.IsEmailVerified = true;
        user.EmailVerificationToken = null;
        user.EmailVerificationExpiry = null;
        await _db.SaveChangesAsync();
        return Result.Success();
    }

    public async Task<Result> ResendVerificationEmailAsync(string email)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == email.ToLower().Trim());
        if (user == null || user.IsEmailVerified) return Result.Success();

        var verifyToken = GenerateSecureToken();
        user.EmailVerificationToken = TokenService.HashToken(verifyToken);
        user.EmailVerificationExpiry = DateTime.UtcNow.AddHours(24);
        await _db.SaveChangesAsync();

        _ = _emailService.SendVerificationEmailAsync(user.Email, user.FullName, verifyToken);
        return Result.Success();
    }

    public async Task<Result<UserDto>> GetCurrentUserAsync(Guid userId)
    {
        var user = await _db.Users.FindAsync(userId);
        if (user == null) return Result<UserDto>.Failure("User not found.");
        return Result<UserDto>.Success(MapToUserDto(user));
    }

    // ---- Private helpers ----

    private async Task<LoginResponse> GenerateTokensAsync(User user, string ipAddress)
    {
        var accessToken = _tokenService.GenerateAccessToken(user);
        var rawRefresh = _tokenService.GenerateRefreshToken();

        _db.RefreshTokens.Add(new RefreshToken
        {
            UserId = user.Id,
            Token = rawRefresh,
            TokenHash = TokenService.HashToken(rawRefresh),
            ExpiresAt = DateTime.UtcNow.AddDays(RefreshTokenDays),
            CreatedByIp = ipAddress
        });

        return new LoginResponse
        {
            AccessToken = accessToken,
            RefreshToken = rawRefresh,
            AccessTokenExpiry = DateTime.UtcNow.AddMinutes(15),
            RefreshTokenExpiry = DateTime.UtcNow.AddDays(RefreshTokenDays),
            User = MapToUserDto(user),
            RequiresTwoFactor = false
        };
    }

    private async Task RevokeTokenFamilyAsync(Guid userId, string reason)
    {
        var tokens = await _db.RefreshTokens
            .Where(rt => rt.UserId == userId && !rt.IsRevoked)
            .ToListAsync();

        foreach (var t in tokens)
        {
            t.IsRevoked = true;
            t.RevokedAt = DateTime.UtcNow;
            t.RevokedByIp = reason;
        }
    }

    private async Task LogAuditAsync(Guid userId, string action, string? entityType,
        string? entityId, string? ip, bool isSuccess)
    {
        _db.AuditLogs.Add(new AuditLog
        {
            UserId = userId,
            Action = action,
            EntityType = entityType,
            EntityId = entityId,
            IpAddress = ip,
            IsSuccess = isSuccess
        });
        await _db.SaveChangesAsync();
    }

    private static string GenerateSecureToken()
    {
        var bytes = new byte[32];
        System.Security.Cryptography.RandomNumberGenerator.Fill(bytes);
        return Convert.ToBase64String(bytes)
            .Replace("+", "-").Replace("/", "_").Replace("=", "");
    }

    private static string FormatSecretForDisplay(string secret)
    {
        return string.Join(" ", Enumerable.Range(0, secret.Length / 4)
            .Select(i => secret.Substring(i * 4, 4)));
    }

    private static UserDto MapToUserDto(User user) => new()
    {
        Id = user.Id,
        Email = user.Email,
        FirstName = user.FirstName,
        LastName = user.LastName,
        FullName = user.FullName,
        Role = user.Role,
        Company = user.Company,
        ProfileImageUrl = user.ProfileImageUrl,
        TwoFactorEnabled = user.TwoFactorEnabled,
        IsEmailVerified = user.IsEmailVerified
    };
}
