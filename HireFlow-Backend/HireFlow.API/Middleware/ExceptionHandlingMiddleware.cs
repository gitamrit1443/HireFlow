using System.Net;
using System.Text.Json;
using HireFlow.Application.Common;
using Microsoft.AspNetCore.Mvc;

namespace HireFlow.API.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;
    private readonly IWebHostEnvironment _env;

    public ExceptionHandlingMiddleware(RequestDelegate next,
        ILogger<ExceptionHandlingMiddleware> logger,
        IWebHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception ex)
    {
        var correlationId = context.TraceIdentifier;

        _logger.LogError(ex,
            "Unhandled exception. CorrelationId: {CorrelationId} | Path: {Path} | Method: {Method}",
            correlationId, context.Request.Path, context.Request.Method);

        context.Response.ContentType = "application/json";

        var (statusCode, message) = ex switch
        {
            UnauthorizedAccessException => (HttpStatusCode.Unauthorized, "Unauthorized."),
            KeyNotFoundException => (HttpStatusCode.NotFound, "Resource not found."),
            ArgumentException => (HttpStatusCode.BadRequest, ex.Message),
            InvalidOperationException => (HttpStatusCode.BadRequest, ex.Message),
            OperationCanceledException => (HttpStatusCode.ServiceUnavailable, "Request cancelled."),
            _ => (HttpStatusCode.InternalServerError, "An unexpected error occurred.")
        };

        context.Response.StatusCode = (int)statusCode;

        // OWASP: Never expose stack traces or internal details in production
        var response = new
        {
            success = false,
            message = _env.IsDevelopment() ? ex.Message : message,
            correlationId,
            errors = _env.IsDevelopment()
                ? new[] { ex.ToString() }
                : new[] { message },
            timestamp = DateTime.UtcNow
        };

        var json = JsonSerializer.Serialize(response, new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        });

        await context.Response.WriteAsync(json);
    }
}
