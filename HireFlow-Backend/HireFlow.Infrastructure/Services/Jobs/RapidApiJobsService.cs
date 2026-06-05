using System.Text.Json;
using System.Text.Json.Serialization;
using HireFlow.Domain.Entities;
using HireFlow.Domain.Enums;
using HireFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace HireFlow.Infrastructure.Services.Jobs;

// ---- RapidAPI Response Models ----

public class JSearchJob
{
    [JsonPropertyName("job_id")]          public string JobId { get; set; } = string.Empty;
    [JsonPropertyName("job_title")]       public string JobTitle { get; set; } = string.Empty;
    [JsonPropertyName("employer_name")]   public string EmployerName { get; set; } = string.Empty;
    [JsonPropertyName("job_city")]        public string? JobCity { get; set; }
    [JsonPropertyName("job_country")]     public string? JobCountry { get; set; }
    [JsonPropertyName("job_description")] public string? JobDescription { get; set; }
    [JsonPropertyName("job_employment_type")] public string? JobEmploymentType { get; set; }
    [JsonPropertyName("job_apply_link")] public string? JobApplyLink { get; set; }
    [JsonPropertyName("job_posted_at_datetime_utc")] public string? PostedAt { get; set; }
    [JsonPropertyName("job_min_salary")]  public decimal? MinSalary { get; set; }
    [JsonPropertyName("job_max_salary")]  public decimal? MaxSalary { get; set; }
    [JsonPropertyName("job_required_skills")] public List<string>? RequiredSkills { get; set; }
    [JsonPropertyName("job_experience_in_place_of_education")] public bool? IsRemote { get; set; }
    [JsonPropertyName("job_is_remote")]  public bool? JobIsRemote { get; set; }
}

public class JSearchResponse
{
    [JsonPropertyName("data")] public List<JSearchJob>? Data { get; set; }
    [JsonPropertyName("status")] public string? Status { get; set; }
}

public class LinkedInJob
{
    [JsonPropertyName("id")]          public string Id { get; set; } = string.Empty;
    [JsonPropertyName("title")]       public string Title { get; set; } = string.Empty;
    [JsonPropertyName("company")]     public string Company { get; set; } = string.Empty;
    [JsonPropertyName("location")]    public string? Location { get; set; }
    [JsonPropertyName("url")]         public string? Url { get; set; }
    [JsonPropertyName("description")] public string? Description { get; set; }
    [JsonPropertyName("type")]        public string? Type { get; set; }
    [JsonPropertyName("postedAt")]    public string? PostedAt { get; set; }
}

public class LinkedInJobsResponse
{
    [JsonPropertyName("data")] public List<LinkedInJob>? Data { get; set; }
}

// ---- Service ----

public class RapidApiJobsService
{
    private readonly HttpClient _http;
    private readonly HireFlowDbContext _db;
    private readonly ILogger<RapidApiJobsService> _logger;
    private readonly string _rapidApiKey;

    // RapidAPI hosts
    private const string JSearchHost = "jsearch.p.rapidapi.com";
    private const string LinkedInHost = "linkedin-data-api.p.rapidapi.com";

    public RapidApiJobsService(
        HttpClient http,
        HireFlowDbContext db,
        IConfiguration config,
        ILogger<RapidApiJobsService> logger)
    {
        _http = http;
        _db = db;
        _logger = logger;
        _rapidApiKey = config["ExternalApis:RapidApiKey"]
            ?? throw new InvalidOperationException("RapidApiKey not configured.");
    }

    /// <summary>Master sync — runs daily via Hangfire</summary>
    public async Task SyncAllAsync()
    {
        _logger.LogInformation("[JobSync] Starting full sync at {Time}", DateTime.UtcNow);

        var tasks = new[]
        {
            SyncJSearchJobsAsync("software engineer India", JobSource.Indeed),
            SyncJSearchJobsAsync("angular developer India", JobSource.Indeed),
            SyncJSearchJobsAsync("dotnet developer India", JobSource.Indeed),
            SyncJSearchJobsAsync("full stack developer India", JobSource.Wellfound),
            SyncLinkedInJobsAsync("software-engineer"),
            SyncLinkedInJobsAsync("angular-developer"),
        };

        await Task.WhenAll(tasks);
        _logger.LogInformation("[JobSync] Full sync complete");
    }

    /// <summary>Sync jobs from JSearch API (aggregates Indeed, Glassdoor, etc.)</summary>
    public async Task SyncJSearchJobsAsync(string query, JobSource source)
    {
        try
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
                $"https://{JSearchHost}/search?query={Uri.EscapeDataString(query)}&page=1&num_pages=1&date_posted=today");

            request.Headers.Add("X-RapidAPI-Key", _rapidApiKey);
            request.Headers.Add("X-RapidAPI-Host", JSearchHost);

            var response = await _http.SendAsync(request);
            if (!response.IsSuccessStatusCode)
            {
                _logger.LogWarning("[JSearch] {Query} failed: {Status}", query, response.StatusCode);
                return;
            }

            var json = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<JSearchResponse>(json);
            if (result?.Data == null) return;

            int upserted = 0;
            foreach (var job in result.Data)
            {
                await UpsertJobAsync(new Job
                {
                    Title = Truncate(job.JobTitle, 200),
                    Department = "Engineering",
                    Location = BuildLocation(job.JobCity, job.JobCountry),
                    Type = ParseJobType(job.JobEmploymentType),
                    Experience = "Not specified",
                    SalaryMin = job.MinSalary ?? 0,
                    SalaryMax = job.MaxSalary ?? 0,
                    Currency = "INR",
                    Skills = JsonSerializer.Serialize(job.RequiredSkills ?? new List<string>()),
                    Description = Truncate(job.JobDescription ?? "See job link for details.", 5000),
                    Status = JobStatus.Open,
                    HiringManager = job.EmployerName,
                    Openings = 1,
                    PostedDate = ParseDate(job.PostedAt),
                    Source = source,
                    ExternalJobId = job.JobId,
                    ExternalUrl = job.JobApplyLink
                });
                upserted++;
            }

            _logger.LogInformation("[JSearch] {Query}: {Count} jobs upserted", query, upserted);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[JSearch] {Query} exception", query);
        }
    }

    /// <summary>Sync jobs from LinkedIn Data API via RapidAPI</summary>
    public async Task SyncLinkedInJobsAsync(string keywords)
    {
        try
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
                $"https://{LinkedInHost}/search-jobs?keywords={Uri.EscapeDataString(keywords)}&locationId=102713980&datePosted=past24Hours&start=0");

            request.Headers.Add("X-RapidAPI-Key", _rapidApiKey);
            request.Headers.Add("X-RapidAPI-Host", LinkedInHost);

            var response = await _http.SendAsync(request);
            if (!response.IsSuccessStatusCode)
            {
                _logger.LogWarning("[LinkedIn] {Keywords} failed: {Status}", keywords, response.StatusCode);
                return;
            }

            var json = await response.Content.ReadAsStringAsync();

            // LinkedIn API returns varied structures — parse flexibly
            using var doc = JsonDocument.Parse(json);
            var root = doc.RootElement;

            // Try common response shapes
            JsonElement dataEl;
            if (root.TryGetProperty("data", out dataEl) ||
                root.TryGetProperty("jobs", out dataEl) ||
                root.TryGetProperty("elements", out dataEl))
            {
                if (dataEl.ValueKind == JsonValueKind.Array)
                {
                    int count = 0;
                    foreach (var item in dataEl.EnumerateArray())
                    {
                        var title = GetString(item, "title", "position", "jobTitle") ?? keywords;
                        var company = GetString(item, "company", "companyName", "employer") ?? "Unknown";
                        var location = GetString(item, "location", "jobLocation") ?? "India";
                        var url = GetString(item, "url", "applyUrl", "jobUrl");
                        var jobId = GetString(item, "id", "jobId", "trackingId") ?? Guid.NewGuid().ToString();
                        var description = GetString(item, "description", "summary") ?? "View on LinkedIn.";

                        await UpsertJobAsync(new Job
                        {
                            Title = Truncate(title, 200),
                            Department = "Engineering",
                            Location = Truncate(location, 200),
                            Type = JobType.FullTime,
                            Experience = "Not specified",
                            SalaryMin = 0,
                            SalaryMax = 0,
                            Currency = "INR",
                            Skills = "[]",
                            Description = Truncate(description, 5000),
                            Status = JobStatus.Open,
                            HiringManager = company,
                            Openings = 1,
                            PostedDate = DateTime.UtcNow,
                            Source = JobSource.LinkedIn,
                            ExternalJobId = $"li_{jobId}",
                            ExternalUrl = url
                        });
                        count++;
                    }
                    _logger.LogInformation("[LinkedIn] {Keywords}: {Count} jobs upserted", keywords, count);
                }
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[LinkedIn] {Keywords} exception", keywords);
        }
    }

    // ---- Helpers ----

    private async Task UpsertJobAsync(Job job)
    {
        if (string.IsNullOrEmpty(job.ExternalJobId)) return;

        var existing = await _db.Jobs
            .IgnoreQueryFilters()
            .FirstOrDefaultAsync(j => j.ExternalJobId == job.ExternalJobId);

        if (existing != null)
        {
            // Refresh status and date only
            existing.Status = JobStatus.Open;
            existing.UpdatedAt = DateTime.UtcNow;
        }
        else
        {
            _db.Jobs.Add(job);
        }

        await _db.SaveChangesAsync();
    }

    private static JobType ParseJobType(string? type) => type?.ToUpper() switch
    {
        "FULLTIME" or "FULL_TIME" or "FULL-TIME" => JobType.FullTime,
        "PARTTIME" or "PART_TIME" or "PART-TIME" => JobType.PartTime,
        "CONTRACTOR" or "CONTRACT" => JobType.Contract,
        "REMOTE" => JobType.Remote,
        _ => JobType.FullTime
    };

    private static DateTime ParseDate(string? dateStr)
    {
        if (string.IsNullOrEmpty(dateStr)) return DateTime.UtcNow;
        return DateTime.TryParse(dateStr, out var dt) ? dt : DateTime.UtcNow;
    }

    private static string BuildLocation(string? city, string? country)
    {
        var parts = new[] { city, country }.Where(s => !string.IsNullOrEmpty(s));
        return string.Join(", ", parts).IfEmpty("India");
    }

    private static string? GetString(JsonElement el, params string[] props)
    {
        foreach (var p in props)
            if (el.TryGetProperty(p, out var v) && v.ValueKind == JsonValueKind.String)
                return v.GetString();
        return null;
    }

    private static string Truncate(string s, int max) =>
        s.Length <= max ? s : s[..max];
}

public static class StringExtensions
{
    public static string IfEmpty(this string s, string fallback) =>
        string.IsNullOrWhiteSpace(s) ? fallback : s;
}
