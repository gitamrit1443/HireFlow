using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface INotificationService
{
    Task<ServiceResult<List<NotificationDto>>> GetNotificationsAsync(Guid userId, bool unreadOnly);
    Task<ServiceResult<string>> MarkAsReadAsync(Guid id, Guid userId);
    Task MarkAllAsReadAsync(Guid userId);
}
