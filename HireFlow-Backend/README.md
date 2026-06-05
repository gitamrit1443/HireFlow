# HireFlow Backend — ASP.NET Core 8.0

Clean Architecture backend for HireFlow hiring pipeline management platform.

---

## 🏗️ Project Structure

```
HireFlow.sln
├── HireFlow.Domain          → Entities, Enums (no dependencies)
├── HireFlow.Application     → DTOs, Interfaces, Common (depends on Domain)
├── HireFlow.Infrastructure  → EF Core, Services, Repositories (depends on Application)
└── HireFlow.API             → Controllers, Middleware, Program.cs (depends on all)
```

---

## ⚡ Quick Start

### 1. Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- SQL Server (local or Azure)
- Visual Studio 2022 / Rider / VS Code

### 2. Configure Connection String

Edit `HireFlow.API/appsettings.Development.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=HireFlowDb;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Jwt": {
    "Secret": "YOUR_256_BIT_SECRET_MIN_32_CHARACTERS_HERE!!"
  }
}
```

### 3. Apply EF Core Migrations

```bash
# From solution root
cd HireFlow.API

# Add initial migration (first time only)
dotnet ef migrations add InitialCreate --project ../HireFlow.Infrastructure --startup-project .

# Apply to database
dotnet ef database update --project ../HireFlow.Infrastructure --startup-project .
```

### 4. Run the API

```bash
cd HireFlow.API
dotnet run
```

API: `https://localhost:7001`  
Swagger: `https://localhost:7001/swagger`  
Hangfire: `https://localhost:7001/hangfire` (admin only)

---

## 🔐 Authentication Flow

### Standard Login (no 2FA)
```
POST /api/v1/auth/login
→ Returns: { accessToken, refreshToken, user }
```

### Login with 2FA enabled
```
Step 1: POST /api/v1/auth/login
        → Returns: { requiresTwoFactor: true, accessToken: "<tempToken>" }

Step 2: POST /api/v1/auth/login/2fa
        Body: { tempToken: "<tempToken>", code: "123456" }
        → Returns: { accessToken, refreshToken, user }
```

### Setup 2FA (Google Authenticator)
```
POST /api/v1/auth/2fa/setup    → Returns QR code (base64 PNG) + backup codes
POST /api/v1/auth/2fa/enable   → Verify code to activate
POST /api/v1/auth/2fa/disable  → Requires password
```

### Token Refresh
```
POST /api/v1/auth/refresh-token   (uses HttpOnly cookie automatically)
```

---

## 📋 API Endpoints

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/auth/login` | ❌ | Login |
| POST | `/api/v1/auth/login/2fa` | ❌ | Complete 2FA login |
| POST | `/api/v1/auth/register` | ❌ | Register Candidate/Recruiter |
| GET  | `/api/v1/auth/me` | ✅ | Get current user |
| POST | `/api/v1/auth/refresh-token` | ❌ | Refresh JWT |
| POST | `/api/v1/auth/logout` | ✅ | Logout |
| POST | `/api/v1/auth/forgot-password` | ❌ | Request reset |
| POST | `/api/v1/auth/reset-password` | ❌ | Reset password |
| POST | `/api/v1/auth/change-password` | ✅ | Change password |
| POST | `/api/v1/auth/verify-email` | ❌ | Verify email |
| POST | `/api/v1/auth/2fa/setup` | ✅ | Setup 2FA |
| POST | `/api/v1/auth/2fa/enable` | ✅ | Enable 2FA |
| POST | `/api/v1/auth/2fa/disable` | ✅ | Disable 2FA |

### Jobs
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/v1/jobs` | ❌ | List jobs (filterable, paginated) |
| GET  | `/api/v1/jobs/{id}` | ❌ | Get job by ID |
| POST | `/api/v1/jobs` | Recruiter | Create job |
| PUT  | `/api/v1/jobs/{id}` | Recruiter | Update job |
| DELETE | `/api/v1/jobs/{id}` | Recruiter | Delete job |
| PATCH | `/api/v1/jobs/{id}/status` | Recruiter | Change status |
| POST | `/api/v1/jobs/sync` | Admin | Trigger external sync |

### Candidates (Recruiter view of applicants)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/v1/candidates` | Recruiter | List with pipeline filters |
| GET  | `/api/v1/candidates/{applicationId}` | Recruiter | Get candidate detail |
| PATCH | `/api/v1/candidates/stage` | Recruiter | Move pipeline stage |
| PATCH | `/api/v1/candidates/assign` | Recruiter | Assign recruiter |
| POST | `/api/v1/candidates/{id}/tags` | Recruiter | Add tag |
| DELETE | `/api/v1/candidates/{id}/tags/{tag}` | Recruiter | Remove tag |
| PATCH | `/api/v1/candidates/{id}/notes` | Recruiter | Update notes |
| POST | `/api/v1/candidates/score` | Recruiter | Submit evaluation score |
| GET  | `/api/v1/candidates/{id}/score` | Recruiter | Get score |
| POST | `/api/v1/candidates/{id}/flag` | Recruiter | Flag spam |

### Applications (Candidate actions)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/applications` | Candidate | Apply for job |
| DELETE | `/api/v1/applications/{id}` | Candidate | Withdraw |
| GET  | `/api/v1/applications/mine` | Candidate | My applications |

### Interviews
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/v1/interviews` | Recruiter | All interviews |
| GET  | `/api/v1/interviews/upcoming` | Recruiter | Upcoming only |
| GET  | `/api/v1/interviews/{id}` | ✅ | Get by ID |
| POST | `/api/v1/interviews` | Recruiter | Schedule interview |
| PATCH | `/api/v1/interviews/{id}/cancel` | Recruiter | Cancel |
| POST | `/api/v1/interviews/feedback` | Recruiter | Submit feedback |
| POST | `/api/v1/interviews/book-ai` | Candidate | Book AI bot interview |
| GET  | `/api/v1/interviews/for-candidate/{applicationId}` | ✅ | Candidate's interviews |

### HireMeet (Video Rooms)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/v1/hiremeet` | Recruiter | All meetings |
| GET  | `/api/v1/hiremeet/room/{roomCode}` | ❌ | Get by room code |
| POST | `/api/v1/hiremeet` | Recruiter | Create meeting |
| PATCH | `/api/v1/hiremeet/status` | Recruiter | Update status |
| DELETE | `/api/v1/hiremeet/{id}` | Recruiter | Delete meeting |
| POST | `/api/v1/hiremeet/join` | ❌ | Join meeting (candidate) |

### Dashboard & Analytics
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/v1/dashboard/recruiter` | Recruiter | Recruiter dashboard stats |
| GET  | `/api/v1/dashboard/candidate` | Candidate | Candidate dashboard |
| GET  | `/api/v1/dashboard/analytics` | Recruiter | Analytics & trends |

### Notifications
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/v1/notifications` | ✅ | Get notifications |
| PATCH | `/api/v1/notifications/{id}/read` | ✅ | Mark one read |
| PATCH | `/api/v1/notifications/read-all` | ✅ | Mark all read |

---

## 🔒 Security Practices (OWASP)

| Practice | Implementation |
|----------|---------------|
| Password hashing | BCrypt with work factor 12 |
| Account lockout | 5 failed attempts → 15 min lockout |
| JWT | 15 min access token, 7 day refresh token |
| Refresh token rotation | New token on every refresh, reuse detection |
| 2FA | TOTP (Google Authenticator), 8 backup codes |
| Rate limiting | Auth: 10/min, API: 100/min, Apply: 5/hour |
| Security headers | CSP, HSTS, X-Frame-Options, X-Content-Type-Options |
| CORS | Strict origin whitelist |
| Soft delete | All entities support soft delete |
| Input sanitisation | Trim on all string inputs |
| SQL injection | EF Core parameterised queries |
| Error handling | Stack traces hidden in production |
| Audit logging | All auth events logged to DB |
| Token hashing | Refresh tokens hashed (SHA-256) before DB storage |
| HttpOnly cookies | Refresh token in HttpOnly + Secure + SameSite=Strict |

---

## 🔑 Default Seed Credentials (Dev only)

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@hireflow.com | Admin@123 |
| Recruiter | recruiter@hireflow.com | Recruiter@123 |
| Candidate | candidate@hireflow.com | Candidate@123 |

**⚠️ Change all passwords immediately in production!**

---

## 📅 Background Jobs (Hangfire)

| Job | Schedule | Description |
|-----|----------|-------------|
| `sync-external-jobs` | Daily 6 AM UTC | Sync jobs from LinkedIn, Indeed, Jooble, Wellfound |
| `send-interview-reminders` | Hourly | Email reminders for upcoming interviews |

Access dashboard: `GET /hangfire` (Admin role required)

---

## 🔧 Adding External API Keys

Edit `appsettings.json` → `ExternalApis` section:

```json
"ExternalApis": {
  "LinkedIn": { "ClientId": "...", "ClientSecret": "..." },
  "Indeed": { "PublisherId": "..." },
  "Jooble": { "ApiKey": "..." },
  "Wellfound": { "ApiKey": "..." },
  "InterviewingIo": { "ApiKey": "..." }
}
```

Then implement the clients in:
`HireFlow.Infrastructure/Services/Jobs/JobService.cs` → `SyncExternalJobsAsync()`

---

## 📦 Key NuGet Packages

| Package | Purpose |
|---------|---------|
| Microsoft.EntityFrameworkCore.SqlServer | ORM + SQL Server |
| BCrypt.Net-Next | Password hashing |
| OtpNet | TOTP 2FA |
| QRCoder | 2FA QR code generation |
| Hangfire.SqlServer | Background jobs |
| Serilog.AspNetCore | Structured logging |
| MailKit | Email sending |
| FluentValidation | Input validation |
| AutoMapper | Object mapping |
