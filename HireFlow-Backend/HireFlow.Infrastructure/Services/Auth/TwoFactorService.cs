using OtpNet;
using QRCoder;
using System.Text.Json;
using System.Security.Cryptography;

namespace HireFlow.Infrastructure.Services.Auth;

public class TwoFactorService
{
    private const string AppName = "HireFlow";

    /// <summary>Generates a new TOTP secret (Base32 encoded)</summary>
    public string GenerateSecret()
    {
        var key = KeyGeneration.GenerateRandomKey(20); // 160-bit key
        return Base32Encoding.ToString(key);
    }

    /// <summary>Generates a QR code PNG as Base64 for Google Authenticator</summary>
    public string GenerateQrCodeBase64(string email, string secret)
    {
        var otpAuthUrl = $"otpauth://totp/{Uri.EscapeDataString(AppName)}:{Uri.EscapeDataString(email)}" +
                         $"?secret={secret}&issuer={Uri.EscapeDataString(AppName)}&algorithm=SHA1&digits=6&period=30";

        using var qrGenerator = new QRCodeGenerator();
        using var qrData = qrGenerator.CreateQrCode(otpAuthUrl, QRCodeGenerator.ECCLevel.Q);
        using var qrCode = new PngByteQRCode(qrData);
        var qrBytes = qrCode.GetGraphic(20);
        return Convert.ToBase64String(qrBytes);
    }

    /// <summary>Verifies a TOTP code against a secret (allows 1 step drift)</summary>
    public bool VerifyCode(string secret, string code)
    {
        if (string.IsNullOrWhiteSpace(secret) || string.IsNullOrWhiteSpace(code))
            return false;

        try
        {
            var keyBytes = Base32Encoding.ToBytes(secret);
            var totp = new Totp(keyBytes, step: 30, mode: OtpHashMode.Sha1, totpSize: 6);
            // Allow 1 step window (30 seconds before/after)
            return totp.VerifyTotp(code.Replace(" ", ""), out _, new VerificationWindow(previous: 1, future: 1));
        }
        catch
        {
            return false;
        }
    }

    /// <summary>Generates 8 one-time backup codes</summary>
    public List<string> GenerateBackupCodes()
    {
        var codes = new List<string>();
        for (int i = 0; i < 8; i++)
        {
            var bytes = new byte[5];
            RandomNumberGenerator.Fill(bytes);
            var code = Convert.ToHexString(bytes).ToLower();
            // Format: xxxxx-xxxxx
            codes.Add($"{code[..5]}-{code[5..]}");
        }
        return codes;
    }

    /// <summary>Hashes backup codes for storage</summary>
    public string HashBackupCodes(List<string> codes)
    {
        var hashed = codes.Select(c => BCrypt.Net.BCrypt.HashPassword(c.Replace("-", ""))).ToList();
        return JsonSerializer.Serialize(hashed);
    }

    /// <summary>Verifies and consumes a backup code (removes it from stored list)</summary>
    public (bool verified, string updatedJson) VerifyBackupCode(string storedHashedJson, string inputCode)
    {
        try
        {
            var hashedCodes = JsonSerializer.Deserialize<List<string>>(storedHashedJson) ?? new();
            var normalised = inputCode.Replace("-", "").ToLower().Trim();

            for (int i = 0; i < hashedCodes.Count; i++)
            {
                if (BCrypt.Net.BCrypt.Verify(normalised, hashedCodes[i]))
                {
                    hashedCodes.RemoveAt(i); // consume — one time use
                    return (true, JsonSerializer.Serialize(hashedCodes));
                }
            }
            return (false, storedHashedJson);
        }
        catch
        {
            return (false, storedHashedJson);
        }
    }
}
