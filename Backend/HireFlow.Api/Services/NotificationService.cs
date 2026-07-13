using HireFlowBackend.Common;
using HireFlowBackend.Data;
using HireFlowBackend.DTOs;
using HireFlowBackend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Services;

public class NotificationService : INotificationService
{
    private readonly HireFlowDbContext _db;

    public NotificationService(HireFlowDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResult<List<NotificationDto>>> GetNotificationsAsync(Guid userId, bool unreadOnly)
    {
        var query = _db.Notifications.AsNoTracking().Where(x => x.UserId == userId);
        if (unreadOnly) query = query.Where(x => !x.IsRead);

        var notifications = await query.OrderByDescending(x => x.CreatedAt).ToListAsync();
        return ServiceResult<List<NotificationDto>>.Ok(notifications.Select(DtoMapper.ToDto).ToList());
    }

    public async Task<ServiceResult<string>> MarkAsReadAsync(Guid id, Guid userId)
    {
        var notification = await _db.Notifications.FirstOrDefaultAsync(x => x.Id == id && x.UserId == userId);
        if (notification is null) return ServiceResult<string>.Fail("Notification not found.");

        notification.IsRead = true;
        await _db.SaveChangesAsync();
        return ServiceResult<string>.Ok("Marked as read.");
    }

    public async Task MarkAllAsReadAsync(Guid userId)
    {
        var notifications = await _db.Notifications.Where(x => x.UserId == userId && !x.IsRead).ToListAsync();
        foreach (var notification in notifications) notification.IsRead = true;
        await _db.SaveChangesAsync();
    }
}
