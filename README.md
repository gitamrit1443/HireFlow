<div align="center">

<img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot.png" alt="HireFlow Banner" width="100%" />

<br/>

# 🚀 HireFlow

### *End-to-End Recruitment Pipeline Management System*

<p align="center">
  <a href="https://github.com/gitamrit1443/HireFlow/stargazers">
    <img src="https://img.shields.io/github/stars/gitamrit1443/HireFlow?style=for-the-badge&color=FFD700&labelColor=0D1117" alt="Stars"/>
  </a>
  <a href="https://github.com/gitamrit1443/HireFlow/network/members">
    <img src="https://img.shields.io/github/forks/gitamrit1443/HireFlow?style=for-the-badge&color=00BFFF&labelColor=0D1117" alt="Forks"/>
  </a>
  <a href="https://github.com/gitamrit1443/HireFlow/issues">
    <img src="https://img.shields.io/github/issues/gitamrit1443/HireFlow?style=for-the-badge&color=FF6347&labelColor=0D1117" alt="Issues"/>
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge&labelColor=0D1117" alt="License"/>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge&labelColor=0D1117" alt="Status"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/ASP.NET_Core_8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt="ASP.NET Core 8"/>
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" alt="C#"/>
  <img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS"/>
</p>

<p align="center">
  <b>HireFlow</b> is a full-stack, role-based recruitment management platform that streamlines the entire hiring lifecycle — from job posting to candidate onboarding — with real-time pipeline tracking, interview scheduling, and analytics dashboards.
</p>

<br/>

[🌐 Live Demo](#) &nbsp;|&nbsp; [📖 Documentation](#getting-started) &nbsp;|&nbsp; [🐛 Report Bug](https://github.com/gitamrit1443/HireFlow/issues) &nbsp;|&nbsp; [✨ Request Feature](https://github.com/gitamrit1443/HireFlow/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🖥️ Screenshots](#️-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔐 RBAC — Role-Based Access Control](#-rbac--role-based-access-control)
- [☁️ Deployment](#️-deployment)
- [📬 Contact](#-contact)

---

## ✨ Features

### 👤 Authentication & Security
- JWT-based authentication with secure token refresh
- Role-Based Access Control (**Admin**, **HR Manager**, **Recruiter**, **Interviewer**)
- Protected routes with Angular route guards
- Session management and auto-logout

### 📋 Job Management
- Create, publish, and manage job postings
- Rich job descriptions with requirements, tags, and categories
- Job status lifecycle: Draft → Active → Closed → Archived
- Department and location-based filtering

### 🧑‍💼 Candidate Tracking Pipeline
- Drag-and-drop Kanban-style candidate pipeline
- Application stages: Applied → Screened → Interview → Offer → Hired / Rejected
- Bulk candidate actions and status updates
- Candidate profile management with resume uploads

### 📅 Interview Scheduling
- Schedule and manage interviews with interviewers
- Interview type support: Technical, HR, Managerial
- Calendar integration and slot management
- Interview feedback and scoring system

### 📊 Analytics & Reporting
- Real-time recruitment dashboard with KPIs
- Time-to-hire, offer acceptance rate, pipeline velocity metrics
- Department-wise and job-wise candidate breakdown
- Visual charts and data export support

### 🔔 Notifications
- Real-time in-app notifications for stage updates
- Email trigger support for candidate communication
- Activity feed and audit trail

---

## 🖥️ Screenshots

<details open>
<summary><b>🔐 Authentication</b></summary>
<br/>

| Login Page |
|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191444.png" alt="Login Page" width="100%"/> |

</details>

<details open>
<summary><b>📊 Dashboard & Analytics</b></summary>
<br/>

| Main Dashboard | Analytics Overview |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191616.png" alt="Dashboard" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191829.png" alt="Analytics" width="100%"/> |

</details>

<details open>
<summary><b>💼 Job Management</b></summary>
<br/>

| Job Listings | Job Details |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191705.png" alt="Job Listings" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191721.png" alt="Job Details" width="100%"/> |

</details>

<details open>
<summary><b>🧑‍💼 Candidate Pipeline</b></summary>
<br/>

| Candidates List | Pipeline View |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191749.png" alt="Candidates List" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191801.png" alt="Pipeline View" width="100%"/> |

| Candidate Details | Application View |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191815.png" alt="Candidate Details" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191844.png" alt="Application View" width="100%"/> |

</details>

<details open>
<summary><b>📅 Interview Management</b></summary>
<br/>

| Interview Scheduler | Interview Feedback |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20191908.png" alt="Interview Scheduler" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20192143.png" alt="Interview Feedback" width="100%"/> |

</details>

<details open>
<summary><b>⚙️ Settings & Administration</b></summary>
<br/>

| Admin Panel | User Management |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20192155.png" alt="Admin Panel" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20192207.png" alt="User Management" width="100%"/> |

| Role Configuration | Notifications |
|:---:|:---:|
| <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20192218.png" alt="Role Configuration" width="100%"/> | <img src="https://raw.githubusercontent.com/gitamrit1443/HireFlow/main/Frontend/assets/Screenshots/Screenshot%202026-07-14%20192243.png" alt="Notifications" width="100%"/> |

</details>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| ![Angular](https://img.shields.io/badge/Angular_18-DD0031?style=flat-square&logo=angular&logoColor=white) | SPA Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Type-safe JavaScript |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first CSS Styling |
| ![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white) | Reactive State Management |

### Backend
| Technology | Purpose |
|---|---|
| ![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core_8-512BD4?style=flat-square&logo=dotnet&logoColor=white) | Web API Framework |
| ![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white) | Primary Language |
| ![Entity Framework](https://img.shields.io/badge/Entity_Framework_Core-512BD4?style=flat-square&logo=dotnet&logoColor=white) | ORM & Database Access |
| ![JWT](https://img.shields.io/badge/JWT_Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | Authentication |

### Database & Infrastructure
| Technology | Purpose |
|---|---|
| ![SQL Server](https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=flat-square&logo=microsoftsqlserver&logoColor=white) | Relational Database |
| ![Azure](https://img.shields.io/badge/Microsoft_Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white) | Cloud Hosting (Backend) |
| ![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white) | DB Hosting |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Frontend Deployment |

---

## 🏗️ Architecture

```
HireFlow/
├── Backend/                        # ASP.NET Core 8 Web API
│   ├── Controllers/                # API Endpoints (Jobs, Candidates, Interviews...)
│   ├── Models/                     # Domain Entities
│   ├── DTOs/                       # Data Transfer Objects
│   ├── Services/                   # Business Logic Layer
│   ├── Repositories/               # Data Access Layer
│   ├── Middlewares/                # Auth, Error Handling
│   ├── Helpers/                    # JWT, Mapping Helpers
│   └── Program.cs                  # App Entry Point & DI Configuration
│
├── Frontend/                       # Angular 18 SPA
│   ├── src/app/
│   │   ├── core/                   # Auth Guards, Interceptors, Services
│   │   ├── features/
│   │   │   ├── dashboard/          # Analytics Dashboard
│   │   │   ├── jobs/               # Job Posting Management
│   │   │   ├── candidates/         # Candidate Pipeline
│   │   │   ├── interviews/         # Interview Scheduling
│   │   │   └── settings/           # Admin & Role Management
│   │   ├── shared/                 # Reusable Components, Pipes, Directives
│   │   └── layouts/                # Auth Layout, Main App Shell
│   └── assets/
│       └── Screenshots/            # Project Screenshots
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **.NET SDK 8.0+** → [Download](https://dotnet.microsoft.com/download)
- **Node.js 18+** & **npm** → [Download](https://nodejs.org/)
- **Angular CLI** → `npm install -g @angular/cli`
- **SQL Server** (LocalDB / Express / Full) → [Download](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

### 🔧 Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/gitamrit1443/HireFlow.git
cd HireFlow/Backend

# 2. Configure appsettings.json
# Update ConnectionStrings and JwtSettings
```

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=HireFlowDB;Trusted_Connection=True;"
  },
  "JwtSettings": {
    "SecretKey": "YOUR_SUPER_SECRET_KEY_HERE_MIN_32_CHARS",
    "Issuer": "HireFlowAPI",
    "Audience": "HireFlowClient",
    "ExpiryMinutes": 60
  }
}
```

```bash
# 3. Apply EF Core Migrations
dotnet ef database update

# 4. Run the API
dotnet run

# API runs at: https://localhost:7xxx / http://localhost:5xxx
```

---

### 🎨 Frontend Setup

```bash
# 1. Navigate to frontend
cd HireFlow/Frontend

# 2. Install dependencies
npm install

# 3. Configure environment
# Edit src/environments/environment.ts
```

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'   // Your backend URL
};
```

```bash
# 4. Start development server
ng serve

# App runs at: http://localhost:4200
```

---

## 🔐 RBAC — Role-Based Access Control

HireFlow implements a granular 4-tier role system:

| Role | Permissions |
|---|---|
| **🛡️ Admin** | Full system access — manage users, roles, all jobs & candidates, system settings |
| **👔 HR Manager** | Create/manage jobs, view all candidates, generate reports, manage interview pipeline |
| **🔍 Recruiter** | Post jobs, manage assigned candidates, schedule interviews, track applications |
| **🎙️ Interviewer** | View assigned interviews, submit feedback and scores, view candidate profiles |

> Roles are enforced via **JWT Claims** on the backend (`[Authorize(Roles = "Admin,HRManager")]`) and **Angular Route Guards** on the frontend.

---

## ☁️ Deployment

HireFlow is deployed across multiple cloud platforms:

| Layer | Platform | Details |
|---|---|---|
| **Frontend** | ![Vercel](https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel) | Angular SPA with automatic CI/CD on push |
| **Backend API** | ![Azure](https://img.shields.io/badge/Azure_App_Service-0078D4?style=flat-square&logo=microsoftazure&logoColor=white) | ASP.NET Core 8 Web API |
| **Database** | ![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway) | Microsoft SQL Server instance |

### Environment Variables (Production)

```env
# Backend — Azure App Service Configuration
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection=Server=...;Database=HireFlowDB;...
JwtSettings__SecretKey=YOUR_PRODUCTION_SECRET_KEY
JwtSettings__Issuer=HireFlowAPI
JwtSettings__Audience=HireFlowClient
JwtSettings__ExpiryMinutes=60

# Frontend — Vercel Environment Variables
VITE_API_URL=https://your-api.azurewebsites.net/api
```

---

## 📁 Project Structure

```
Backend/
├── Controllers/
│   ├── AuthController.cs           # Login, Register, Refresh Token
│   ├── JobsController.cs           # CRUD for Job Postings
│   ├── CandidatesController.cs     # Candidate Management
│   ├── ApplicationsController.cs   # Application Pipeline
│   ├── InterviewsController.cs     # Interview Scheduling
│   └── UsersController.cs          # User & Role Management
│
├── Models/
│   ├── Job.cs
│   ├── Candidate.cs
│   ├── Application.cs
│   ├── Interview.cs
│   └── User.cs
│
├── Data/
│   └── AppDbContext.cs             # EF Core DbContext
│
└── Program.cs                      # Middleware, DI, CORS, JWT Config
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

```bash
# Fork the repo → Create feature branch → Commit changes → Open PR
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
```

---

## 📬 Contact

<div align="center">

**Amrit Pal Singh**
*Full Stack .NET Developer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/amritpal-singh-900300414)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gitamrit1443)

</div>

---

<div align="center">

**⭐ If HireFlow helped you or inspired you, drop a star — it means a lot!**

*Built with ❤️ using ASP.NET Core 8 & Angular*

</div>
