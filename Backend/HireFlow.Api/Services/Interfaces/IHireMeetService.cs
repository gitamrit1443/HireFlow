using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IHireMeetService
{
    Task<ServiceResult<List<MeetingDto>>> GetMeetingsAsync(Guid userId);
    Task<ServiceResult<MeetingDto>> GetByRoomCodeAsync(string roomCode);
    Task<ServiceResult<MeetingDto>> CreateMeetingAsync(CreateMeetingRequest request, Guid recruiterUserId);
    Task<ServiceResult<string>> UpdateStatusAsync(UpdateMeetingStatusRequest request, Guid recruiterUserId);
    Task<ServiceResult<string>> DeleteMeetingAsync(Guid id, Guid recruiterUserId);
    Task<ServiceResult<JoinMeetingResponse>> JoinMeetingAsync(JoinMeetingRequest request, Guid? userId);
}
