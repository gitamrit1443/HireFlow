import { Routes } from '@angular/router';
import { authGuard, guestGuard, recruiterGuard, candidateGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/recruiter/dashboard', pathMatch: 'full' },

  // ── Auth ─────────────────────────────────────────────────────────────────
  {
    path: 'auth',
    children: [
      { path: 'login',    canActivate: [guestGuard],
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Sign In — HireFlow' },
      { path: 'signup',   canActivate: [guestGuard],
        loadComponent: () => import('./features/auth/signup/signup.component').then(m => m.SignupComponent),
        title: 'Create Account — HireFlow' },
      { path: 'forgot-password', canActivate: [guestGuard],
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Reset Password — HireFlow' },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // ── Recruiter ─────────────────────────────────────────────────────────────
  {
    path: 'recruiter',
    canActivate: [authGuard, recruiterGuard],
    loadComponent: () => import('./shared/layout/recruiter-layout/recruiter-layout.component')
      .then(m => m.RecruiterLayoutComponent),
    children: [
      { path: 'dashboard',
        loadComponent: () => import('./features/recruiter/dashboard/dashboard.component').then(m => m.RecruiterDashboardComponent),
        title: 'Dashboard — HireFlow' },
      { path: 'jobs',
        loadComponent: () => import('./features/recruiter/jobs/jobs.component').then(m => m.JobsComponent),
        title: 'Jobs — HireFlow' },
      { path: 'jobs/new',
        loadComponent: () => import('./features/recruiter/jobs/job-form.component').then(m => m.JobFormComponent),
        title: 'Post a Job — HireFlow' },
      { path: 'jobs/:id/edit',
        loadComponent: () => import('./features/recruiter/jobs/job-form.component').then(m => m.JobFormComponent),
        title: 'Edit Job — HireFlow' },
      { path: 'candidates',
        loadComponent: () => import('./features/recruiter/candidates/candidates.component').then(m => m.CandidatesComponent),
        title: 'Candidates — HireFlow' },
      { path: 'candidates/:id',
        loadComponent: () => import('./features/recruiter/candidates/candidate-detail.component').then(m => m.CandidateDetailComponent),
        title: 'Candidate Profile — HireFlow' },
      { path: 'pipeline',
        loadComponent: () => import('./features/recruiter/pipeline/pipeline.component').then(m => m.PipelineComponent),
        title: 'Pipeline — HireFlow' },
      { path: 'interviews',
        loadComponent: () => import('./features/recruiter/interviews/interviews.component').then(m => m.InterviewsComponent),
        title: 'Interviews — HireFlow' },
      { path: 'interviews/room/:roomId',
        loadComponent: () => import('./features/recruiter/interviews/interview-room.component').then(m => m.InterviewRoomComponent),
        title: 'Interview Room — HireFlow' },
      // ✅ NEW: HireMeet
      { path: 'hiremeet',
        loadComponent: () => import('./features/recruiter/hiremeet/hiremeet.component').then(m => m.HireMeetComponent),
        title: 'HireMeet — HireFlow' },
      { path: 'analytics',
        loadComponent: () => import('./features/recruiter/analytics/analytics.component').then(m => m.AnalyticsComponent),
        title: 'Analytics — HireFlow' },
      { path: 'settings',
        loadComponent: () => import('./features/recruiter/settings/settings.component').then(m => m.SettingsComponent),
        title: 'Settings — HireFlow' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // ── Candidate ─────────────────────────────────────────────────────────────
  {
    path: 'candidate',
    canActivate: [authGuard, candidateGuard],
    children: [
      { path: 'dashboard',
        loadComponent: () => import('./features/candidate/dashboard/candidate-dashboard.component').then(m => m.CandidateDashboardComponent),
        title: 'My Applications — HireFlow' },
      { path: 'settings',
        loadComponent: () => import('./features/recruiter/settings/settings.component').then(m => m.SettingsComponent),
        title: 'Settings — HireFlow' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // ── HireMeet room (accessible without login for candidates) ──────────────
  {
    path: 'meet/:roomCode',
    loadComponent: () => import('./features/recruiter/hiremeet/meet-room.component').then(m => m.MeetRoomComponent),
    title: 'HireMeet Room — HireFlow'
  },

  { path: '**', redirectTo: '/auth/login' }
];
