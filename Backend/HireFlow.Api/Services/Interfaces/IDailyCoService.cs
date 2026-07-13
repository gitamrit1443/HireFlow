using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IDailyCoService
{
    Task<DailyRoomResult> CreateRoomAsync(string roomName, DateTime startTime, DateTime? endTime);
    Task<string> CreateMeetingTokenAsync(string roomName, string participantName, bool isHost);
}

public class DailyRoomResult
{
    public string RoomName { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public bool UsedDailyApi { get; set; }
}
