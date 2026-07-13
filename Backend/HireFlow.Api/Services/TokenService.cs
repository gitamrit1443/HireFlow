using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using HireFlowBackend.DTOs;
using HireFlowBackend.Models;
using HireFlowBackend.Services.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace HireFlowBackend.Services;

public class TokenService : ITokenService
{
    private readonly IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public AuthResponse CreateToken(User user)
    {
        var key = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt:Key missing.");
        var issuer = _configuration["Jwt:Issuer"] ?? "HireFlow";
        var audience = _configuration["Jwt:Audience"] ?? "HireFlowUsers";
        var expiryMinutes = int.TryParse(_configuration["Jwt:ExpiryMinutes"], out var parsed) ? parsed : 120;
        var expiresAt = DateTime.UtcNow.AddMinutes(expiryMinutes);

        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new(JwtRegisteredClaimNames.Email, user.Email),
            new(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new(ClaimTypes.Name, user.FullName),
            new(ClaimTypes.Email, user.Email),
            new(ClaimTypes.Role, user.Role)
        };

        var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            expires: expiresAt,
            signingCredentials: credentials);

        return new AuthResponse
        {
            AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
            RefreshToken = Guid.NewGuid().ToString("N"),
            ExpiresAt = expiresAt,
            RequiresTwoFactor = false,
            User = AuthService.ToUserDto(user)
        };
    }
}
