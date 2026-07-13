using System.Text.Json;
using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class AuthService : IAuthService
{
    private readonly HireFlowDbContext _db;
    private readonly ITokenService _tokenService;
    private readonly PasswordHasher<User> _hasher = new();

    public AuthService(HireFlowDbContext db, ITokenService tokenService)
    {
        _db = db;
        _tokenService = tokenService;
    }

    public async Task<ServiceResult<AuthResponse>> RegisterAsync(RegisterRequest request)
    {
        request.Email = (request.Email ?? string.Empty).Trim().ToLowerInvariant();
        request.Password ??= string.Empty;
        request.ConfirmPassword ??= string.Empty;

        var fullName = BuildFullName(request);
        var normalizedRole = NormalizeRole(request.Role);

        if (string.IsNullOrWhiteSpace(fullName)) return ServiceResult<AuthResponse>.Fail("Full name required.");
        if (string.IsNullOrWhiteSpace(request.Email)) return ServiceResult<AuthResponse>.Fail("Email required.");
        if (request.Password.Length < 6) return ServiceResult<AuthResponse>.Fail("Password minimum 6 characters hona chahiye.");
        if (!string.IsNullOrWhiteSpace(request.ConfirmPassword) && request.Password != request.ConfirmPassword)
            return ServiceResult<AuthResponse>.Fail("Password and confirm password match nahi ho rahe.");
        if (normalizedRole is null) return ServiceResult<AuthResponse>.Fail("Role Recruiter ya Candidate hona chahiye.");

        var exists = await _db.Users.AnyAsync(x => x.Email == request.Email);
        if (exists) return ServiceResult<AuthResponse>.Fail("Email already registered.");

        Company? company = null;
        if (normalizedRole == "Recruiter" && !string.IsNullOrWhiteSpace(request.Company))
        {
            var companyName = request.Company.Trim();
            company = await _db.Companies.FirstOrDefaultAsync(x => x.Name == companyName);
            if (company is null)
            {
                company = new Company { Name = companyName, Location = request.Location };
                _db.Companies.Add(company);
            }
        }

        var user = new User
        {
            FullName = fullName,
            Email = request.Email,
            Role = normalizedRole
        };
        user.PasswordHash = _hasher.HashPassword(user, request.Password);

        if (user.Role == "Candidate")
        {
            user.CandidateProfile = new CandidateProfile
            {
                Phone = FirstNonEmpty(request.PhoneNumber, request.Phone),
                SkillsCsv = DtoMapper.JoinCsv(request.Skills),
                ExperienceSummary = request.ExperienceYears.HasValue ? $"{request.ExperienceYears.Value} years" : request.Title
            };
        }

        if (user.Role == "Recruiter")
        {
            user.RecruiterProfile = new RecruiterProfile
            {
                Company = company,
                Designation = request.Title ?? "Recruiter"
            };
        }

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        return ServiceResult<AuthResponse>.Ok(_tokenService.CreateToken(user));
    }

    public async Task<ServiceResult<AuthResponse>> LoginAsync(LoginRequest request)
    {
        var email = (request.Email ?? string.Empty).Trim().ToLowerInvariant();
        var password = request.Password ?? string.Empty;
        var user = await _db.Users
            .Include(x => x.CandidateProfile)
            .Include(x => x.RecruiterProfile)
                .ThenInclude(x => x!.Company)
            .FirstOrDefaultAsync(x => x.Email == email);
        if (user is null) return ServiceResult<AuthResponse>.Fail("Invalid email or password.");

        var result = _hasher.VerifyHashedPassword(user, user.PasswordHash, password);
        if (result == PasswordVerificationResult.Failed)
            return ServiceResult<AuthResponse>.Fail("Invalid email or password.");

        return ServiceResult<AuthResponse>.Ok(_tokenService.CreateToken(user));
    }

    public async Task<ServiceResult<UserDto>> GetMeAsync(Guid userId)
    {
        var user = await _db.Users
            .Include(x => x.CandidateProfile)
            .Include(x => x.RecruiterProfile)
                .ThenInclude(x => x!.Company)
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<UserDto>.Fail("User not found.");

        return ServiceResult<UserDto>.Ok(ToUserDto(user));
    }

    public async Task<ServiceResult<string>> ChangePasswordAsync(Guid userId, ChangePasswordRequest request)
    {
        var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<string>.Fail("User not found.");
        if ((request.NewPassword ?? string.Empty).Length < 6) return ServiceResult<string>.Fail("New password minimum 6 characters hona chahiye.");
        if (!string.IsNullOrWhiteSpace(request.ConfirmPassword) && request.NewPassword != request.ConfirmPassword)
            return ServiceResult<string>.Fail("New password and confirm password match nahi ho rahe.");

        var current = _hasher.VerifyHashedPassword(user, user.PasswordHash, request.CurrentPassword ?? string.Empty);
        if (current == PasswordVerificationResult.Failed) return ServiceResult<string>.Fail("Current password incorrect.");

        user.PasswordHash = _hasher.HashPassword(user, request.NewPassword);
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Password changed successfully.");
    }

    public static UserDto ToUserDto(User user)
    {
        var parts = user.FullName.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        var firstName = parts.FirstOrDefault() ?? user.FullName;
        var lastName = parts.Length > 1 ? string.Join(' ', parts.Skip(1)) : string.Empty;
        var profile = user.CandidateProfile;
        var recruiter = user.RecruiterProfile;
        var company = recruiter?.Company?.Name ?? string.Empty;

        return new UserDto
        {
            Id = user.Id,
            FullName = user.FullName,
            Name = user.FullName,
            FirstName = firstName,
            LastName = lastName,
            Email = user.Email,
            Role = user.Role,
            Company = company,
            Phone = profile?.Phone,
            PhoneNumber = profile?.Phone,
            Title = recruiter?.Designation ?? (user.Role == "Recruiter" ? "Recruiter" : "Candidate"),
            Department = string.Empty,
            Location = recruiter?.Company?.Location,
            ExperienceYears = ExtractExperienceYears(profile?.ExperienceSummary),
            Skills = DtoMapper.SplitCsv(profile?.SkillsCsv),
            TwoFactorEnabled = false
        };
    }

    private static string BuildFullName(RegisterRequest request)
    {
        if (!string.IsNullOrWhiteSpace(request.FullName)) return request.FullName.Trim();
        return $"{request.FirstName} {request.LastName}".Trim();
    }

    private static string? NormalizeRole(JsonElement? role)
    {
        if (role is null || role.Value.ValueKind == JsonValueKind.Null || role.Value.ValueKind == JsonValueKind.Undefined) return "Candidate";
        if (role.Value.ValueKind == JsonValueKind.Number && role.Value.TryGetInt32(out var n))
        {
            return n switch
            {
                2 => "Recruiter",
                1 => "Candidate",
                _ => null
            };
        }

        var value = role.Value.ValueKind == JsonValueKind.String ? role.Value.GetString() : role.Value.ToString();
        if (string.IsNullOrWhiteSpace(value)) return "Candidate";
        return value.Trim().ToLowerInvariant() switch
        {
            "2" => "Recruiter",
            "recruiter" => "Recruiter",
            "1" => "Candidate",
            "candidate" => "Candidate",
            "admin" => "Admin",
            _ => null
        };
    }

    private static int? ExtractExperienceYears(string? value)
    {
        if (string.IsNullOrWhiteSpace(value)) return null;
        var number = new string(value.Where(char.IsDigit).Take(2).ToArray());
        return int.TryParse(number, out var years) ? years : null;
    }

    private static string? FirstNonEmpty(params string?[] values) => values.FirstOrDefault(x => !string.IsNullOrWhiteSpace(x))?.Trim();
}
