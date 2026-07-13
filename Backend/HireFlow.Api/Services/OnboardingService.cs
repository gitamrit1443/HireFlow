using System.Text.RegularExpressions;
using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public partial class OnboardingService : IOnboardingService
{
    private readonly HireFlowDbContext _db;

    public OnboardingService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<OnboardingStatusDto>> GetStatusAsync(Guid userId)
    {
        var user = await UserQuery().AsNoTracking().FirstOrDefaultAsync(x => x.Id == userId);
        return user is null
            ? ServiceResult<OnboardingStatusDto>.Fail("User not found.")
            : ServiceResult<OnboardingStatusDto>.Ok(OnboardingRules.ToStatusDto(user));
    }

    public async Task<ServiceResult<OnboardingStatusDto>> CompleteCandidateAsync(
        Guid userId,
        CandidateOnboardingRequest request)
    {
        var user = await UserQuery().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<OnboardingStatusDto>.Fail("User not found.");
        if (user.Role != "Candidate")
            return ServiceResult<OnboardingStatusDto>.Fail("Only candidate accounts can use candidate onboarding.");

        var validationError = ValidateCandidateRequest(request);
        if (validationError is not null) return ServiceResult<OnboardingStatusDto>.Fail(validationError);

        var skills = NormalizeSkills(request.Skills);
        user.FullName = request.FullName.Trim();
        user.CandidateProfile ??= new CandidateProfile { UserId = user.Id };
        user.CandidateProfile.Phone = request.Phone.Trim();
        user.CandidateProfile.ResumeUrl = NormalizeOptional(request.ResumeUrl);
        user.CandidateProfile.SkillsCsv = string.Join(',', skills);
        user.CandidateProfile.ExperienceSummary = request.ExperienceSummary.Trim();

        await _db.SaveChangesAsync();
        return ServiceResult<OnboardingStatusDto>.Ok(OnboardingRules.ToStatusDto(user));
    }

    public async Task<ServiceResult<OnboardingStatusDto>> CompleteRecruiterAsync(
        Guid userId,
        RecruiterOnboardingRequest request)
    {
        var user = await UserQuery().FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return ServiceResult<OnboardingStatusDto>.Fail("User not found.");
        if (user.Role != "Recruiter")
            return ServiceResult<OnboardingStatusDto>.Fail("Only recruiter accounts can use recruiter onboarding.");

        var validationError = ValidateRecruiterRequest(request);
        if (validationError is not null) return ServiceResult<OnboardingStatusDto>.Fail(validationError);

        user.FullName = request.FullName.Trim();
        user.RecruiterProfile ??= new RecruiterProfile { UserId = user.Id };
        user.RecruiterProfile.Designation = request.Designation.Trim();

        if (user.RecruiterProfile.Company is null)
        {
            user.RecruiterProfile.Company = new Company();
        }

        user.RecruiterProfile.Company.Name = request.CompanyName.Trim();
        user.RecruiterProfile.Company.Website = NormalizeOptional(request.Website);
        user.RecruiterProfile.Company.Location = request.Location.Trim();

        await _db.SaveChangesAsync();
        return ServiceResult<OnboardingStatusDto>.Ok(OnboardingRules.ToStatusDto(user));
    }

    private IQueryable<User> UserQuery() => _db.Users
        .Include(x => x.CandidateProfile)
        .Include(x => x.RecruiterProfile)
            .ThenInclude(x => x!.Company);

    private static string? ValidateCandidateRequest(CandidateOnboardingRequest request)
    {
        request.FullName ??= string.Empty;
        request.Phone ??= string.Empty;
        request.ExperienceSummary ??= string.Empty;
        request.Skills ??= [];

        if (string.IsNullOrWhiteSpace(request.FullName)) return "Full name required.";
        if (request.FullName.Trim().Length > 100) return "Full name cannot exceed 100 characters.";

        var phone = request.Phone.Trim();
        if (phone.Length is < 7 or > 20 || !PhoneRegex().IsMatch(phone))
            return "Enter a valid phone number containing 7 to 20 characters.";

        if (!TryValidateOptionalHttpUrl(request.ResumeUrl, out var resumeError)) return resumeError;

        var skills = NormalizeSkills(request.Skills);
        if (skills.Count == 0) return "Add at least one skill.";
        if (skills.Count > 30) return "A maximum of 30 skills is allowed.";
        if (skills.Any(x => x.Length > 50)) return "Each skill must be 50 characters or fewer.";
        if (skills.Any(x => x.Contains(','))) return "Skills cannot contain commas.";

        var experience = request.ExperienceSummary.Trim();
        if (experience.Length < 20) return "Experience summary must contain at least 20 characters.";
        if (experience.Length > 4000) return "Experience summary cannot exceed 4000 characters.";

        return null;
    }

    private static string? ValidateRecruiterRequest(RecruiterOnboardingRequest request)
    {
        request.FullName ??= string.Empty;
        request.Designation ??= string.Empty;
        request.CompanyName ??= string.Empty;
        request.Location ??= string.Empty;

        if (string.IsNullOrWhiteSpace(request.FullName)) return "Full name required.";
        if (request.FullName.Trim().Length > 100) return "Full name cannot exceed 100 characters.";

        if (string.IsNullOrWhiteSpace(request.Designation)) return "Designation required.";
        if (request.Designation.Trim().Length > 100) return "Designation cannot exceed 100 characters.";

        if (string.IsNullOrWhiteSpace(request.CompanyName)) return "Company name required.";
        if (request.CompanyName.Trim().Length > 150) return "Company name cannot exceed 150 characters.";

        if (!TryValidateOptionalHttpUrl(request.Website, out var websiteError)) return websiteError;

        if (string.IsNullOrWhiteSpace(request.Location)) return "Company location required.";
        if (request.Location.Trim().Length > 200) return "Company location cannot exceed 200 characters.";

        return null;
    }

    private static bool TryValidateOptionalHttpUrl(string? value, out string? error)
    {
        error = null;
        if (string.IsNullOrWhiteSpace(value)) return true;
        if (value.Trim().Length > 2048)
        {
            error = "URL cannot exceed 2048 characters.";
            return false;
        }

        if (!Uri.TryCreate(value.Trim(), UriKind.Absolute, out var uri) ||
            (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
        {
            error = "URL must be an absolute HTTP or HTTPS URL.";
            return false;
        }

        return true;
    }

    private static List<string> NormalizeSkills(IEnumerable<string>? skills) => (skills ?? [])
        .Where(x => !string.IsNullOrWhiteSpace(x))
        .Select(x => x.Trim())
        .Distinct(StringComparer.OrdinalIgnoreCase)
        .ToList();

    private static string? NormalizeOptional(string? value) =>
        string.IsNullOrWhiteSpace(value) ? null : value.Trim();

    [GeneratedRegex(@"^[0-9+()\-\s]+$")]
    private static partial Regex PhoneRegex();
}
