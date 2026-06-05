using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace HireFlow.Infrastructure.Services.HireMeet;

public class DailyCoRoom
{
    [JsonPropertyName("id")]        public string Id { get; set; } = string.Empty;
    [JsonPropertyName("name")]      public string Name { get; set; } = string.Empty;
    [JsonPropertyName("url")]       public string Url { get; set; } = string.Empty;
    [JsonPropertyName("privacy")]   public string Privacy { get; set; } = string.Empty;
    [JsonPropertyName("created_at")]public long CreatedAt { get; set; }
}

public class DailyCoToken
{
    [JsonPropertyName("token")] public string Token { get; set; } = string.Empty;
}

public class DailyCoService
{
    private readonly HttpClient _http;
    private readonly ILogger<DailyCoService> _logger;
    private readonly string _subdomain;

    public DailyCoService(HttpClient http, IConfiguration config, ILogger<DailyCoService> logger)
    {
        _http = http;
        _logger = logger;
        _subdomain = config["DailyCo:Subdomain"] ?? "hireroom";

        var apiKey = config["DailyCo:ApiKey"]
            ?? throw new InvalidOperationException("DailyCo:ApiKey not configured.");

        _http.BaseAddress = new Uri("https://api.daily.co/v1/");
        _http.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", apiKey);
        _http.DefaultRequestHeaders.Accept
            .Add(new MediaTypeWithQualityHeaderValue("application/json"));
    }

    /// <summary>Creates a Daily.co room and returns the room URL</summary>
    public async Task<(bool success, string roomUrl, string roomName)> CreateRoomAsync(
        string roomName, bool isPrivate = true, int expiryMinutes = 60)
    {
        try
        {
            var expiry = DateTimeOffset.UtcNow.AddMinutes(expiryMinutes).ToUnixTimeSeconds();

            var body = JsonSerializer.Serialize(new
            {
                name = roomName,
                privacy = isPrivate ? "private" : "public",
                properties = new
                {
                    exp = expiry,                    // Room auto-expires
                    max_participants = 10,
                    enable_chat = true,
                    enable_screenshare = true,
                    enable_recording = "cloud",
                    start_video_off = false,
                    start_audio_off = false,
                    eject_at_room_exp = true         // Kick everyone when room expires
                }
            });

            var response = await _http.PostAsync("rooms",
                new StringContent(body, Encoding.UTF8, "application/json"));

            if (!response.IsSuccessStatusCode)
            {
                var err = await response.Content.ReadAsStringAsync();
                _logger.LogError("[DailyCo] CreateRoom failed: {Error}", err);
                return (false, string.Empty, string.Empty);
            }

            var room = JsonSerializer.Deserialize<DailyCoRoom>(
                await response.Content.ReadAsStringAsync());

            var roomUrl = $"https://{_subdomain}.daily.co/{roomName}";
            return (true, roomUrl, roomName);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[DailyCo] CreateRoom exception");
            return (false, string.Empty, string.Empty);
        }
    }

    /// <summary>
    /// Generates a meeting token for a participant.
    /// isOwner = true for recruiter (host), false for candidate.
    /// </summary>
    public async Task<string?> CreateMeetingTokenAsync(
        string roomName, string userName, bool isOwner = false, int expiryMinutes = 60)
    {
        try
        {
            var expiry = DateTimeOffset.UtcNow.AddMinutes(expiryMinutes).ToUnixTimeSeconds();

            var body = JsonSerializer.Serialize(new
            {
                properties = new
                {
                    room_name = roomName,
                    user_name = userName,
                    is_owner = isOwner,
                    exp = expiry,
                    enable_recording = isOwner ? "cloud" : (object?)null,
                    start_video_off = false,
                    start_audio_off = false
                }
            });

            var response = await _http.PostAsync("meeting-tokens",
                new StringContent(body, Encoding.UTF8, "application/json"));

            if (!response.IsSuccessStatusCode) return null;

            var token = JsonSerializer.Deserialize<DailyCoToken>(
                await response.Content.ReadAsStringAsync());

            return token?.Token;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[DailyCo] CreateToken exception");
            return null;
        }
    }

    /// <summary>Deletes a Daily.co room after meeting ends</summary>
    public async Task<bool> DeleteRoomAsync(string roomName)
    {
        try
        {
            var response = await _http.DeleteAsync($"rooms/{roomName}");
            return response.IsSuccessStatusCode;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[DailyCo] DeleteRoom exception");
            return false;
        }
    }

    /// <summary>Gets room info — used to check if room exists</summary>
    public async Task<DailyCoRoom?> GetRoomAsync(string roomName)
    {
        try
        {
            var response = await _http.GetAsync($"rooms/{roomName}");
            if (!response.IsSuccessStatusCode) return null;
            return JsonSerializer.Deserialize<DailyCoRoom>(
                await response.Content.ReadAsStringAsync());
        }
        catch { return null; }
    }
}
