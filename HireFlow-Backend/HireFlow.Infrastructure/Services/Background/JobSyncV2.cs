// REPLACE BackgroundJobs.cs SyncExternalJobsAsync with this

using HireFlow.Infrastructure.Services.Jobs;
using Microsoft.Extensions.Logging;

namespace HireFlow.Infrastructure.Services.Background;

public class JobSyncBackgroundJobV2
{
    private readonly RapidApiJobsService _rapidApi;
    private readonly ILogger<JobSyncBackgroundJobV2> _logger;

    public JobSyncBackgroundJobV2(
        RapidApiJobsService rapidApi,
        ILogger<JobSyncBackgroundJobV2> logger)
    {
        _rapidApi = rapidApi;
        _logger = logger;
    }

    /// <summary>
    /// Daily job sync — fetches from LinkedIn + JSearch via RapidAPI.
    /// Registered in Program.cs as Hangfire recurring job.
    /// </summary>
    public async Task SyncExternalJobsAsync()
    {
        _logger.LogInformation("[JobSync] Starting RapidAPI job sync at {Time}", DateTime.UtcNow);
        try
        {
            await _rapidApi.SyncAllAsync();
            _logger.LogInformation("[JobSync] Completed successfully");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "[JobSync] Failed");
        }
    }
}
