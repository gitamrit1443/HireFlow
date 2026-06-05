using System.Diagnostics;

namespace HireFlow.API.Middleware;

public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    // Paths to skip logging (health checks, swagger, static assets)
    private static readonly HashSet<string> _skipPaths = new(StringComparer.OrdinalIgnoreCase)
    {
        "/health", "/favicon.ico", "/swagger", "/swagger/index.html"
    };

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var path = context.Request.Path.Value ?? string.Empty;
        if (_skipPaths.Any(s => path.StartsWith(s, StringComparison.OrdinalIgnoreCase)))
        {
            await _next(context);
            return;
        }

        var sw = Stopwatch.StartNew();
        var requestId = context.TraceIdentifier;
        var method = context.Request.Method;
        var ip = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";

        // OWASP: Never log Authorization headers or passwords
        _logger.LogInformation(
            "HTTP {Method} {Path} started | IP: {Ip} | RequestId: {RequestId}",
            method, path, ip, requestId);

        try
        {
            await _next(context);

            sw.Stop();
            var statusCode = context.Response.StatusCode;
            var level = statusCode >= 500
                ? LogLevel.Error
                : statusCode >= 400 ? LogLevel.Warning : LogLevel.Information;

            _logger.Log(level,
                "HTTP {Method} {Path} {StatusCode} | {ElapsedMs}ms | IP: {Ip} | RequestId: {RequestId}",
                method, path, statusCode, sw.ElapsedMilliseconds, ip, requestId);
        }
        catch (Exception ex)
        {
            sw.Stop();
            _logger.LogError(ex,
                "HTTP {Method} {Path} EXCEPTION | {ElapsedMs}ms | IP: {Ip} | RequestId: {RequestId}",
                method, path, sw.ElapsedMilliseconds, ip, requestId);
            throw;
        }
    }
}
