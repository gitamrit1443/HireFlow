using HireFlowBackend.DTOs;
using HireFlowBackend.Models;

namespace HireFlowBackend.Services;

public static class OnboardingRules
{
    public static bool IsComplete(User user) => GetMissingFields(user).Count == 0;

    public static List<string> GetMissingFields(User user)
    {
        if (user.Role == "Admin") return [];

        if (user.Role == "Candidate")
        {
            var profile = user.CandidateProfile;
            var missing = new List<string>();

            if (string.IsNullOrWhiteSpace(user.FullName)) missing.Add("fullName");
            if (string.IsNullOrWhiteSpace(profile?.Phone)) missing.Add("phone");
            if (string.IsNullOrWhiteSpace(profile?.SkillsCsv)) missing.Add("skills");
            if (string.IsNullOrWhiteSpace(profile?.ExperienceSummary)) missing.Add("experienceSummary");

            return missing;
        }

        if (user.Role == "Recruiter")
        {
            var profile = user.RecruiterProfile;
            var missing = new List<string>();

            if (string.IsNullOrWhiteSpace(user.FullName)) missing.Add("fullName");
            if (string.IsNullOrWhiteSpace(profile?.Designation)) missing.Add("designation");
            if (string.IsNullOrWhiteSpace(profile?.Company?.Name)) missing.Add("companyName");
            if (string.IsNullOrWhiteSpace(profile?.Company?.Location)) missing.Add("location");

            return missing;
        }

        return ["supportedRole"];
    }

    public static OnboardingStatusDto ToStatusDto(User user)
    {
        var missing = GetMissingFields(user);
        var isComplete = missing.Count == 0;

        return new OnboardingStatusDto
        {
            Role = user.Role,
            IsComplete = isComplete,
            NextStep = isComplete ? "dashboard" : user.Role.ToLowerInvariant() + "-onboarding",
            MissingFields = missing,
            CandidateProfile = user.Role == "Candidate" ? ToCandidateProfileDto(user.CandidateProfile) : null,
            RecruiterProfile = user.Role == "Recruiter" ? ToRecruiterProfileDto(user.RecruiterProfile) : null
        };
    }

    private static CandidateOnboardingProfileDto ToCandidateProfileDto(CandidateProfile? profile) => new()
    {
        Phone = profile?.Phone,
        ResumeUrl = profile?.ResumeUrl,
        Skills = string.IsNullOrWhiteSpace(profile?.SkillsCsv)
            ? []
            : profile.SkillsCsv.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries).ToList(),
        ExperienceSummary = profile?.ExperienceSummary
    };

    private static RecruiterOnboardingProfileDto ToRecruiterProfileDto(RecruiterProfile? profile) => new()
    {
        Designation = profile?.Designation,
        CompanyId = profile?.CompanyId,
        CompanyName = profile?.Company?.Name,
        Website = profile?.Company?.Website,
        Location = profile?.Company?.Location
    };
}
