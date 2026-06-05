# 🚀 HireFlow — Complete Project

Full-stack hiring pipeline platform: Angular frontend + ASP.NET Core 8 backend + FastAPI plagiarism service.

---

## 📁 Project Structure

```
HireFlow-Complete/
├── HireFlow-Backend/          ← ASP.NET Core 8.0 (Clean Architecture)
├── HireFlow-Frontend/         ← Angular 17+ (Standalone Components)
├── hireflow-plagiarism/       ← Python FastAPI (Plagiarism + Spam Detection)
├── docker-compose.yml         ← Run everything with one command
└── README.md
```

---

## ⚡ Option A — Docker (Recommended, Easiest)

```bash
# 1. Install Docker Desktop
# 2. From project root:
docker-compose up --build

# Services will start:
# Backend  → http://localhost:5000
# Swagger  → http://localhost:5000/swagger
# FastAPI  → http://localhost:8000/docs
# SQL      → localhost:1433
```

---

## 🔧 Option B — Manual Setup

### 1. SQL Server
Install SQL Server Express or use Azure SQL.
Update connection string in `HireFlow-Backend/HireFlow.API/appsettings.json`.

### 2. Backend (ASP.NET Core 8)
```bash
cd HireFlow-Backend

# Restore packages
dotnet restore

# Apply DB migrations
dotnet ef migrations add InitialCreate \
  --project HireFlow.Infrastructure \
  --startup-project HireFlow.API

dotnet ef database update \
  --project HireFlow.Infrastructure \
  --startup-project HireFlow.API

# Run
dotnet run --project HireFlow.API
# → http://localhost:5000
# → http://localhost:5000/swagger
```

### 3. FastAPI (Plagiarism Service)
```bash
cd hireflow-plagiarism

python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
# → http://localhost:8000
# → http://localhost:8000/docs
```

### 4. Frontend (Angular)
```bash
cd HireFlow-Frontend

npm install

ng serve
# → http://localhost:4200
```

---

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Recruiter | recruiter@hireflow.com | Recruiter@123 |
| Candidate | candidate@hireflow.com | Candidate@123 |
| Admin | admin@hireflow.com | Admin@123 |

> ⚠️ Change passwords before production deployment!

---

## 🔐 API Keys Already Configured

| Service | Status |
|---------|--------|
| Daily.co (HireMeet video) | ✅ Configured — `hireroom.daily.co` |
| RapidAPI (LinkedIn + JSearch jobs) | ✅ Configured |
| Email (Gmail SMTP) | ⚙️ Add your Gmail app password |
| interviewing.io (AI interviews) | ⚙️ Add your API key |

---

## 📡 All API Endpoints

### Auth
```
POST /api/v1/auth/login              Login (returns JWT)
POST /api/v1/auth/login/2fa          Complete 2FA login
POST /api/v1/auth/register           Register candidate/recruiter
GET  /api/v1/auth/me                 Current user
POST /api/v1/auth/refresh-token      Refresh JWT
POST /api/v1/auth/logout             Logout
POST /api/v1/auth/forgot-password    Request password reset
POST /api/v1/auth/reset-password     Reset password
POST /api/v1/auth/change-password    Change password
POST /api/v1/auth/verify-email       Email verification
POST /api/v1/auth/2fa/setup          Setup Google Authenticator
POST /api/v1/auth/2fa/enable         Enable 2FA
POST /api/v1/auth/2fa/disable        Disable 2FA
```

### Jobs
```
GET    /api/v1/jobs                  List (public, filterable)
GET    /api/v1/jobs/{id}             Get by ID
POST   /api/v1/jobs                  Create [Recruiter]
PUT    /api/v1/jobs/{id}             Update [Recruiter]
DELETE /api/v1/jobs/{id}             Delete [Recruiter]
PATCH  /api/v1/jobs/{id}/status      Change status
POST   /api/v1/jobs/sync             Trigger external sync [Admin]
```

### Candidates (Recruiter pipeline view)
```
GET    /api/v1/candidates            List with filters
GET    /api/v1/candidates/{id}       Candidate detail
PATCH  /api/v1/candidates/stage      Move pipeline stage
PATCH  /api/v1/candidates/assign     Assign recruiter
POST   /api/v1/candidates/{id}/tags  Add tag
DELETE /api/v1/candidates/{id}/tags/{tag}  Remove tag
PATCH  /api/v1/candidates/{id}/notes Update notes
POST   /api/v1/candidates/score      Submit evaluation
GET    /api/v1/candidates/{id}/score Get score
POST   /api/v1/candidates/{id}/flag  Flag as spam
```

### Applications (Candidate actions)
```
POST   /api/v1/applications          Apply for job
DELETE /api/v1/applications/{id}     Withdraw
GET    /api/v1/applications/mine     My applications
```

### Interviews
```
GET    /api/v1/interviews            All interviews [Recruiter]
GET    /api/v1/interviews/upcoming   Upcoming [Recruiter]
GET    /api/v1/interviews/{id}       Get by ID
POST   /api/v1/interviews            Schedule interview
PATCH  /api/v1/interviews/{id}/cancel Cancel
POST   /api/v1/interviews/feedback   Submit feedback
POST   /api/v1/interviews/book-ai    Book AI interview [Candidate]
```

### HireMeet (Real video rooms — Daily.co)
```
GET    /api/v1/hiremeet              All meetings [Recruiter]
GET    /api/v1/hiremeet/room/{code}  Get room (public)
POST   /api/v1/hiremeet             Create room [Recruiter]
POST   /api/v1/hiremeet/join        Join + get Daily.co token (public)
PATCH  /api/v1/hiremeet/status      Update status
DELETE /api/v1/hiremeet/{id}        Delete room
```

### Dashboard & Analytics
```
GET    /api/v1/dashboard/recruiter  Recruiter stats
GET    /api/v1/dashboard/candidate  Candidate stats
GET    /api/v1/dashboard/analytics  Analytics & trends
```

### Notifications
```
GET    /api/v1/notifications        List notifications
PATCH  /api/v1/notifications/{id}/read    Mark read
PATCH  /api/v1/notifications/read-all    Mark all read
```

### Analysis (Plagiarism proxy)
```
POST   /api/v1/analysis/full        Full plagiarism + spam check
```

---

## 🔒 Security Features

| Feature | Details |
|---------|---------|
| JWT Auth | 15 min access token |
| Refresh Tokens | 7 days, HttpOnly cookie, rotation |
| 2FA | TOTP (Google Authenticator) + 8 backup codes |
| Password | BCrypt work factor 12 |
| Account Lockout | 5 fails → 15 min lock |
| Rate Limiting | Auth: 10/min, API: 100/min |
| OWASP Headers | CSP, HSTS, X-Frame-Options |
| Soft Delete | All entities |
| Audit Log | All auth events in DB |
| Input Sanitization | All string inputs trimmed |
| SQL Injection | EF Core parameterized queries |

---

## 🏗️ Frontend Features

| Feature | Status |
|---------|--------|
| Login / Register | ✅ Real API + demo fallback |
| Recruiter Dashboard | ✅ Stats, pipeline, activity |
| Job Management | ✅ CRUD + external sync |
| Candidate Pipeline | ✅ Kanban-style stages |
| Interview Scheduling | ✅ Full schedule + feedback |
| HireMeet Video | ✅ Real Daily.co rooms |
| Plagiarism Check | ✅ Real-time widget |
| Analytics | ✅ Charts + trends |
| Notifications | ✅ In-app |
| Dark Sidebar | ✅ Mobile responsive |
| Ionic Mobile Ready | ✅ |

---

## 📅 Background Jobs (Hangfire)

| Job | Schedule |
|-----|----------|
| External job sync | Daily 6 AM UTC |
| Interview reminders | Hourly |

Dashboard: `http://localhost:5000/hangfire` (Admin only)

---

## 🧪 Testing

### Test Auth
```bash
# Login
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"recruiter@hireflow.com","password":"Recruiter@123"}'

# Use returned token:
curl -H "Authorization: Bearer {token}" \
  http://localhost:5000/api/v1/dashboard/recruiter
```

### Test HireMeet
```bash
# Create room (with token)
curl -X POST http://localhost:5000/api/v1/hiremeet \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{"title":"Technical Interview","candidateName":"Rahul","jobTitle":"SDE"}'

# Join room (public)
curl -X POST http://localhost:5000/api/v1/hiremeet/join \
  -H "Content-Type: application/json" \
  -d '{"roomCode":"abc-def-ghi","participantName":"Rahul"}'
```

### Test Plagiarism
```bash
curl -X POST http://localhost:8000/api/plagiarism/full-analysis \
  -H "Content-Type: application/json" \
  -d '{
    "application_id": "test-1",
    "candidate_name": "Rahul Verma",
    "candidate_email": "rahul@test.com",
    "cover_letter": "I am writing to express my interest in this position...",
    "existing_cover_letters": []
  }'
```
