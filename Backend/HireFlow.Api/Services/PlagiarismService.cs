using System.Text.Json;
using HireFlowBackend.Common;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;

namespace HireFlowBackend.Services;

public class PlagiarismService : IPlagiarismService
{
    private readonly HttpClient _httpClient;
    private readonly string? _apiKey;

    public PlagiarismService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _apiKey = configuration["ExternalApis:OpenAlexApiKey"];
    }

    public async Task<ServiceResult<PlagiarismCheckResponse>> CheckAsync(string text)
    {
        if (string.IsNullOrWhiteSpace(text)) return ServiceResult<PlagiarismCheckResponse>.Fail("Text required.");

        var chunks = BuildChunks(text);
        var sources = new List<PlagiarismSourceDto>();

        foreach (var chunk in chunks)
        {
            var url = $"works?search={Uri.EscapeDataString(chunk)}&per-page=3{ApiKeyQuery()}";
            using var response = await _httpClient.GetAsync(url);
            if (!response.IsSuccessStatusCode) continue;

            await using var stream = await response.Content.ReadAsStreamAsync();
            using var doc = await JsonDocument.ParseAsync(stream);

            if (!doc.RootElement.TryGetProperty("results", out var results)) continue;

            foreach (var item in results.EnumerateArray())
            {
                var title = item.TryGetProperty("title", out var titleElement) ? titleElement.GetString() ?? string.Empty : string.Empty;
                if (string.IsNullOrWhiteSpace(title)) continue;

                var doi = item.TryGetProperty("doi", out var doiElement) ? doiElement.GetString() : null;
                var year = item.TryGetProperty("publication_year", out var yearElement) ? yearElement.ToString() : null;

                var score = Similarity(chunk, title);
                sources.Add(new PlagiarismSourceDto
                {
                    Title = title,
                    Doi = doi,
                    PublicationYear = year,
                    SimilarityScore = score
                });
            }
        }

        var finalSources = sources
            .GroupBy(x => x.Title)
            .Select(x => x.OrderByDescending(y => y.SimilarityScore).First())
            .OrderByDescending(x => x.SimilarityScore)
            .Take(5)
            .ToList();

        var highest = finalSources.Count == 0 ? 0 : finalSources.Max(x => x.SimilarityScore);

        return ServiceResult<PlagiarismCheckResponse>.Ok(new PlagiarismCheckResponse
        {
            HighestSimilarityScore = highest,
            IsLikelyCopied = highest >= 0.45,
            Sources = finalSources
        });
    }

    private string ApiKeyQuery() => string.IsNullOrWhiteSpace(_apiKey) ? string.Empty : $"&api_key={Uri.EscapeDataString(_apiKey)}";

    private static List<string> BuildChunks(string text)
    {
        var clean = string.Join(' ', text.Split(new[] { ' ', '\r', '\n', '\t' }, StringSplitOptions.RemoveEmptyEntries));
        var words = clean.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        var chunks = new List<string>();

        for (var i = 0; i < words.Length && chunks.Count < 3; i += 35)
        {
            chunks.Add(string.Join(' ', words.Skip(i).Take(35)));
        }

        if (chunks.Count == 0) chunks.Add(clean);
        return chunks;
    }

    private static double Similarity(string a, string b)
    {
        var left = Words(a);
        var right = Words(b);
        if (left.Count == 0 || right.Count == 0) return 0;

        var intersection = left.Intersect(right).Count();
        var union = left.Union(right).Count();
        return Math.Round(intersection / (double)union, 2);
    }

    private static HashSet<string> Words(string value) => value
        .ToLowerInvariant()
        .Split(' ', ',', '.', ';', ':', '!', '?', '(', ')', '[', ']', '{', '}', '-', '_', '/', '\\')
        .Where(x => x.Length > 3)
        .ToHashSet();
}
