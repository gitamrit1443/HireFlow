import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  id: string; name: string; email: string;
  role: 'recruiter' | 'candidate'; avatar: string;
  initials: string; company: string; title: string;
  phone?: string; twoFactorEnabled?: boolean;
  department?: string; location?: string;
  experienceYears?: number; skills?: string[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private http   = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  currentUser  = signal<User | null>(this._load());
  isLoggedIn   = computed(() => !!this.currentUser());
  isRecruiter  = computed(() => this.currentUser()?.role === 'recruiter');
  isCandidate  = computed(() => this.currentUser()?.role === 'candidate');
  userInitials = computed(() => this.currentUser()?.initials ?? '?');
  userName     = computed(() => this.currentUser()?.name ?? '');
  userTitle    = computed(() => this.currentUser()?.title ?? '');

  login(email: string, password: string): Promise<{ success: boolean; message: string; requiresTwoFactor?: boolean }> {
    return new Promise(resolve => {
      this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
        .subscribe({
          next: res => {
            if (!res?.success) {
              resolve({ success: false, message: res?.message ?? 'Invalid email or password.' });
              return;
            }
            if (res.data?.requiresTwoFactor) {
              this.storageSet('hireflow_2fa_token', res.data.accessToken);
              resolve({ success: true, message: '2FA required', requiresTwoFactor: true });
              return;
            }
            this._store(res);
            resolve({ success: true, message: 'Welcome back!' });
          },
          error: err => resolve({
            success: false,
            message: this._apiError(err, 'Unable to sign in. Please try again.')
          })
        });
    });
  }

  verify2FA(code: string): Promise<{ success: boolean; message: string }> {
    const tempToken = this.storageGet('hireflow_2fa_token') ?? '';
    return new Promise(resolve => {
      this.http.post<any>(`${environment.apiUrl}/auth/login/2fa`, { tempToken, code }).subscribe({
        next: res => { if (!res.success) { resolve({ success: false, message: 'Invalid code.' }); return; }
          this.storageRemove('hireflow_2fa_token'); this._store(res);
          resolve({ success: true, message: 'Welcome back!' }); },
        error: () => resolve({ success: false, message: 'Verification failed.' })
      });
    });
  }

  async register(data: any): Promise<{ success: boolean; message: string }> {
    const nameParts = String(data.fullName ?? '').trim().split(/\s+/);
    const payload = {
      firstName: nameParts[0],
      lastName: nameParts.slice(1).join(' ') || nameParts[0],
      email: String(data.email ?? '').trim(),
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: data.role === 'recruiter' ? 2 : 1,
      company: String(data.company ?? '').trim() || null,
      phoneNumber: String(data.phone ?? '').trim() || null,
      title: String(data.title ?? '').trim() || null,
      department: String(data.department ?? '').trim() || null,
      location: String(data.location ?? '').trim() || null,
      experienceYears: data.experienceYears === '' ? null : Number(data.experienceYears),
      skills: String(data.skills ?? '')
        .split(',')
        .map((skill: string) => skill.trim())
        .filter(Boolean),
    };

    try {
      const response = await firstValueFrom(
        this.http.post<any>(`${environment.apiUrl}/auth/register`, payload)
      );
      if (!response?.success) {
        return { success: false, message: response?.message ?? 'Registration failed.' };
      }
      return this.login(payload.email, payload.password);
    } catch (error) {
      return {
        success: false,
        message: this._apiError(error, 'Unable to create account. Please try again.')
      };
    }
  }

  updateProfile(data: {
    name: string; company?: string; phone?: string; title?: string;
    department?: string; location?: string; experienceYears?: number; skills?: string[];
  }): void {
    const user = this.currentUser();
    if (!user) return;
    const updated: User = {
      ...user,
      name: data.name.trim(),
      company: data.company?.trim() ?? '',
      phone: data.phone?.trim() ?? '',
      title: data.title?.trim() || user.title,
      department: data.department?.trim() ?? user.department ?? '',
      location: data.location?.trim() ?? user.location ?? '',
      experienceYears: data.experienceYears ?? user.experienceYears,
      skills: data.skills ?? user.skills ?? [],
      initials: this._initials(data.name),
    };
    this.currentUser.set(updated);
    this.storageSet('hireflow_user', JSON.stringify(updated));
  }

  async changePassword(
    currentPassword: string,
    newPassword: string
  ): Promise<{ success: boolean; message: string }> {
    const user = this.currentUser();
    if (!user) return { success: false, message: 'Please sign in again.' };

    try {
      const response = await firstValueFrom(
        this.http.post<any>(`${environment.apiUrl}/auth/change-password`, {
          currentPassword,
          newPassword,
          confirmPassword: newPassword
        })
      );
      return {
        success: response?.success === true,
        message: response?.message ?? 'Password changed successfully.'
      };
    } catch (error) {
      return {
        success: false,
        message: this._apiError(error, 'Unable to change password.')
      };
    }
  }

  logout(): void {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}).pipe(catchError(() => of(null))).subscribe();
    ['hireflow_token','hireflow_refresh_token','hireflow_user','hireflow_2fa_token'].forEach(k => this.storageRemove(k));
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  private _store(res: any): void {
    // Login response has accessToken; register response has only user
    if (res.data.accessToken) {
      this.storageSet('hireflow_token', res.data.accessToken);
    }
    if (res.data.refreshToken) {
      this.storageSet('hireflow_refresh_token', res.data.refreshToken);
    }
    const u = res.data.user ?? res.data;
    // Backend sends fullName directly, or firstName+lastName separately
    const name = u.fullName?.trim() || `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim() || u.name || '';
    const roleRaw = typeof u.role === 'number'
      ? (u.role === 2 ? 'recruiter' : 'candidate')
      : (u.role?.toLowerCase() === 'recruiter' ? 'recruiter' : 'candidate');
    const initials = name.split(' ').filter(Boolean)
      .map((p: string) => p[0]).slice(0, 2).join('').toUpperCase() || '?';
    const user: User = {
      id: u.id, name, email: u.email, role: roleRaw as any, avatar: '',
      initials, company: u.company ?? '',
      title: u.title ?? (roleRaw === 'recruiter' ? 'Recruiter' : 'Candidate'),
      department: u.department ?? '',
      location: u.location ?? '',
      experienceYears: u.experienceYears,
      skills: u.skills ?? [],
      twoFactorEnabled: u.twoFactorEnabled ?? false
    };
    this.currentUser.set(user);
    this.storageSet('hireflow_user', JSON.stringify(user));
    this.router.navigate([roleRaw === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard']);

  }

  private _load(): User | null {
    try { const r = this.storageGet('hireflow_user'); return r ? JSON.parse(r) : null; } catch { return null; }
  }

  private _initials(name: string): string {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    return ((parts[0]?.[0] ?? '?') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }


  private storageGet(key: string): string | null {
    if (!this.isBrowser) return null;
    try { return localStorage.getItem(key); } catch { return null; }
  }

  private storageSet(key: string, value: string): void {
    if (!this.isBrowser) return;
    try { localStorage.setItem(key, value); } catch { /* ignore storage errors */ }
  }

  private storageRemove(key: string): void {
    if (!this.isBrowser) return;
    try { localStorage.removeItem(key); } catch { /* ignore storage errors */ }
  }

  private _apiError(error: any, fallback: string): string {
    const errors = error?.error?.errors;
    if (Array.isArray(errors) && errors.length) return errors.join(' ');
    if (errors && typeof errors === 'object') {
      const validationErrors = Object.values(errors).flat();
      if (validationErrors.length) return validationErrors.join(' ');
    }
    if (error?.status === 0) {
     return 'Backend connection failed. Please try again later.';
    }
    return error?.error?.message
      ?? error?.error?.error
      ?? (error?.status ? `${fallback} (HTTP ${error.status})` : fallback);
  }
}
