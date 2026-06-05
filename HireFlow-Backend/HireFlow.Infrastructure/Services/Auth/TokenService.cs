using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using HireFlow.Application.Interfaces;
using HireFlow.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace HireFlow.Infrastructure.Services.Auth;

public class TokenService : ITokenService
{
    private readonly IConfiguration _config;
    private readonly string _jwtSecret;
    private readonly string _issuer;
    private readonly string _audience;
    private readonly int _accessTokenMinutes;

    public TokenService(IConfiguration config)
    {
        _config = config;
        _jwtSecret = config["Jwt:Secret"] ?? throw new InvalidOperationException("JWT Secret not configured");
        _issuer = config["Jwt:Issuer"] ?? "HireFlow";
        _audience = config["Jwt:Audience"] ?? "HireFlowUsers";
        _accessTokenMinutes = int.Parse(config["Jwt:AccessTokenMinutes"] ?? "15");
    }

    public string GenerateAccessToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new(JwtRegisteredClaimNames.Email, user.Email),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new(JwtRegisteredClaimNames.Iat,
                DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(),
                ClaimValueTypes.Integer64),
            new(ClaimTypes.Role, user.Role.ToString()),
            new("firstName", user.FirstName),
            new("lastName", user.LastName),
            new("fullName", user.FullName),
            new("role", user.Role.ToString().ToLower()),
            new("emailVerified", user.IsEmailVerified.ToString().ToLower()),
            new("twoFactorEnabled", user.TwoFactorEnabled.ToString().ToLower())
        };

        if (user.Company != null)
            claims.Add(new("company", user.Company));

        var token = new JwtSecurityToken(
            issuer: _issuer,
            audience: _audience,
            claims: claims,
            notBefore: DateTime.UtcNow,
            expires: DateTime.UtcNow.AddMinutes(_accessTokenMinutes),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    /// <summary>Short-lived token (5 min) issued after password check, used to complete 2FA step</summary>
    public string GenerateTempTwoFactorToken(Guid userId)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, userId.ToString()),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim("purpose", "2fa_pending")
        };

        var token = new JwtSecurityToken(
            issuer: _issuer,
            audience: _audience,
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(5),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public string GenerateRefreshToken()
    {
        var randomBytes = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomBytes);
        return Convert.ToBase64String(randomBytes);
    }

    public async Task<Guid?> ValidateTempTwoFactorTokenAsync(string token)
    {
        return await Task.FromResult(ValidateTempToken(token));
    }

    private Guid? ValidateTempToken(string token)
    {
        try
        {
            var handler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret));

            var principal = handler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = key,
                ValidateIssuer = true,
                ValidIssuer = _issuer,
                ValidateAudience = true,
                ValidAudience = _audience,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            }, out _);

            var purposeClaim = principal.FindFirst("purpose")?.Value;
            if (purposeClaim != "2fa_pending") return null;

            var sub = principal.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;
            return sub != null ? Guid.Parse(sub) : null;
        }
        catch
        {
            return null;
        }
    }

    public (bool isValid, Guid? userId) ValidateRefreshToken(string token)
    {
        // Refresh tokens are opaque random bytes — validation is done via DB lookup
        // This method just checks the token isn't empty
        if (string.IsNullOrWhiteSpace(token))
            return (false, null);
        return (true, null);
    }

    public static string HashToken(string token)
    {
        var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(token));
        return Convert.ToBase64String(bytes);
    }
}
