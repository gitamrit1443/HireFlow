using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using HireFlowBackend.Services.Interfaces;

namespace HireFlowBackend.Services;

public class DailyCoService : IDailyCoService
{
    private readonly HttpClient _http;
    private readonly IConfiguration _configuration;

    public DailyCoService(HttpClient http, IConfiguration configuration)
    {
        _http = http;
        _configuration = configuration;
    }

    public async Task<DailyRoomResult> CreateRoomAsync(string roomName, DateTime startTime, DateTime? endTime)
    {
        var apiKey = _configuration["DailyCo:ApiKey"]?.Trim();
        var subdomain = (_configuration["DailyCo:Subdomain"] ?? "hireroom").Trim();
        var fallbackUrl = $"https://{subdomain}.daily.co/{roomName}";

        if (string.IsNullOrWhiteSpace(apiKey))
        {
            return new DailyRoomResult { RoomName = roomName, Url = fallbackUrl, UsedDailyApi = false };
        }

        try
        {
            using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.daily.co/v1/rooms");
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
            var exp = new DateTimeOffset(endTime ?? startTime.AddHours(2)).ToUnixTimeSeconds();
            var payload = new
            {
                name = roomName,
                privacy = "public",
                properties = new
                {
                    exp,
                    enable_chat = true,
                    enable_screenshare = true,
                    start_video_off = false,
                    start_audio_off = false
                }
            };
            request.Content = new StringContent(JsonSerializer.Serialize(payload), Encoding.UTF8, "application/json");
            using var response = await _http.SendAsync(request);
            var body = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                return new DailyRoomResult { RoomName = roomName, Url = fallbackUrl, UsedDailyApi = false };
            }

            using var doc = JsonDocument.Parse(body);
            var url = doc.RootElement.TryGetProperty("url", out var urlElement) ? urlElement.GetString() : fallbackUrl;
            var name = doc.RootElement.TryGetProperty("name", out var nameElement) ? nameElement.GetString() : roomName;
            return new DailyRoomResult { RoomName = name ?? roomName, Url = url ?? fallbackUrl, UsedDailyApi = true };
        }
        catch
        {
            return new DailyRoomResult { RoomName = roomName, Url = fallbackUrl, UsedDailyApi = false };
        }
    }

    public async Task<string> CreateMeetingTokenAsync(string roomName, string participantName, bool isHost)
    {
        var apiKey = _configuration["DailyCo:ApiKey"]?.Trim();
        if (string.IsNullOrWhiteSpace(apiKey)) return string.Empty;

        try
        {
            using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.daily.co/v1/meeting-tokens");
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
            var payload = new
            {
                properties = new
                {
                    room_name = roomName,
                    user_name = string.IsNullOrWhiteSpace(participantName) ? "HireFlow User" : participantName,
                    is_owner = isHost
                }
            };
            request.Content = new StringContent(JsonSerializer.Serialize(payload), Encoding.UTF8, "application/json");
            using var response = await _http.SendAsync(request);
            var body = await response.Content.ReadAsStringAsync();
            if (!response.IsSuccessStatusCode) return string.Empty;
            using var doc = JsonDocument.Parse(body);
            return doc.RootElement.TryGetProperty("token", out var tokenElement) ? tokenElement.GetString() ?? string.Empty : string.Empty;
        }
        catch
        {
            return string.Empty;
        }
    }
}
