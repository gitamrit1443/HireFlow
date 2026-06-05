namespace HireFlow.API.Middleware;

/// <summary>
/// Adds OWASP-recommended security headers to every response.
/// </summary>
public class SecurityHeadersMiddleware
{
    private readonly RequestDelegate _next;

    public SecurityHeadersMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        var headers = context.Response.Headers;

        // Prevent MIME-sniffing
        headers["X-Content-Type-Options"] = "nosniff";

        // Prevent Clickjacking
        headers["X-Frame-Options"] = "DENY";

        // Enable XSS Protection in older browsers
        headers["X-XSS-Protection"] = "1; mode=block";

        // Control referrer info
        headers["Referrer-Policy"] = "strict-origin-when-cross-origin";

        // Permissions policy — restrict dangerous APIs
        headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=(), payment=()";

        // HSTS — force HTTPS (only in production)
        if (!context.Request.IsHttps == false)
            headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains; preload";

        // Content Security Policy
        headers["Content-Security-Policy"] =
            "default-src 'self'; " +
            "script-src 'self' 'unsafe-inline'; " +
            "style-src 'self' 'unsafe-inline'; " +
            "img-src 'self' data: https:; " +
            "font-src 'self' data:; " +
            "connect-src 'self'; " +
            "frame-ancestors 'none'; " +
            "base-uri 'self'; " +
            "form-action 'self';";

        // Remove server information (fingerprinting prevention)
        headers.Remove("Server");
        headers.Remove("X-Powered-By");
        headers.Remove("X-AspNet-Version");
        headers.Remove("X-AspNetMvc-Version");

        await _next(context);
    }
}
