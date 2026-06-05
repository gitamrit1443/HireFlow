import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  id: string; name: string; email: string;
  role: 'recruiter' | 'candidate'; avatar: string;
  initials: string; company: string; title: string;
  phone?: string; twoFactorEnabled?: boolean;
}

interface LocalAccount extends User {
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private http   = inject(HttpClient);

  private readonly DEMO_USERS = [
    { id:'1', name:'Rahul Mehta', email:'recruiter@hireflow.com', password:'demo1234',
      role:'recruiter' as const, avatar:'', initials:'RM', company:'HireFlow Inc.', title:'Senior Recruiter' },
    { id:'2', name:'Sarah Williams', email:'candidate@hireflow.com', password:'demo1234',
      role:'candidate' as const, avatar:'', initials:'SW', company:'', title:'Frontend Developer' }
  ];

  currentUser  = signal<User | null>(this._load());
  isLoggedIn   = computed(() => !!this.currentUser());
  isRecruiter  = computed(() => this.currentUser()?.role === 'recruiter');
  isCandidate  = computed(() => this.currentUser()?.role === 'candidate');
  userInitials = computed(() => this.currentUser()?.initials ?? '?');
  userName     = computed(() => this.currentUser()?.name ?? '');
  userTitle    = computed(() => this.currentUser()?.title ?? '');

  login(email: string, password: string): Promise<{ success: boolean; message: string; requiresTwoFactor?: boolean }> {
    const localResult = this._demoLogin(email, password);
    if (localResult.success) return Promise.resolve(localResult);

    return new Promise(resolve => {
      this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
        .pipe(catchError(() => of(null)))
        .subscribe(res => {
          if (!res) { resolve(this._demoLogin(email, password)); return; }
          if (!res.success) { resolve({ success: false, message: 'Invalid email or password.' }); return; }
          if (res.data?.requiresTwoFactor) {
            localStorage.setItem('hireflow_2fa_token', res.data.accessToken);
            resolve({ success: true, message: '2FA required', requiresTwoFactor: true }); return;
          }
          this._store(res); resolve({ success: true, message: 'Welcome back!' });
        });
    });
  }

  verify2FA(code: string): Promise<{ success: boolean; message: string }> {
    const tempToken = localStorage.getItem('hireflow_2fa_token') ?? '';
    return new Promise(resolve => {
      this.http.post<any>(`${environment.apiUrl}/auth/login/2fa`, { tempToken, code }).subscribe({
        next: res => { if (!res.success) { resolve({ success: false, message: 'Invalid code.' }); return; }
          localStorage.removeItem('hireflow_2fa_token'); this._store(res);
          resolve({ success: true, message: 'Welcome back!' }); },
        error: () => resolve({ success: false, message: 'Verification failed.' })
      });
    });
  }

  register(data: any): Promise<{ success: boolean; message: string }> {
    return Promise.resolve(this._localRegister(data));
  }

  updateProfile(data: { name: string; company?: string; phone?: string; title?: string }): void {
    const user = this.currentUser();
    if (!user) return;
    const updated: User = {
      ...user,
      name: data.name.trim(),
      company: data.company?.trim() ?? '',
      phone: data.phone?.trim() ?? '',
      title: data.title?.trim() || user.title,
      initials: this._initials(data.name),
    };
    this.currentUser.set(updated);
    localStorage.setItem('hireflow_user', JSON.stringify(updated));
    const accounts = this._accounts().map(account =>
      account.email.toLowerCase() === updated.email.toLowerCase()
        ? { ...account, ...updated, password: account.password }
        : account
    );
    this._saveAccounts(accounts);
  }

  changePassword(currentPassword: string, newPassword: string): { success: boolean; message: string } {
    const user = this.currentUser();
    if (!user) return { success: false, message: 'Please sign in again.' };

    const email = user.email.toLowerCase();
    const accounts = this._accounts();
    const localIndex = accounts.findIndex(a => a.email.toLowerCase() === email);
    if (localIndex >= 0) {
      if (accounts[localIndex].password !== currentPassword) {
        return { success: false, message: 'Current password is incorrect.' };
      }
      accounts[localIndex] = { ...accounts[localIndex], password: newPassword };
      this._saveAccounts(accounts);
      return { success: true, message: 'Password updated successfully.' };
    }

    const overrides = this._passwordOverrides();
    const demo = this.DEMO_USERS.find(u => u.email.toLowerCase() === email);
    if (demo) {
      const expected = overrides[email] ?? demo.password;
      if (expected !== currentPassword) return { success: false, message: 'Current password is incorrect.' };
      overrides[email] = newPassword;
      localStorage.setItem('hireflow_password_overrides', JSON.stringify(overrides));
      return { success: true, message: 'Password updated successfully.' };
    }

    return { success: false, message: 'Password change is available for demo and locally registered accounts.' };
  }

  logout(): void {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}).pipe(catchError(() => of(null))).subscribe();
    ['hireflow_token','hireflow_refresh_token','hireflow_user','hireflow_2fa_token'].forEach(k => localStorage.removeItem(k));
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  private _store(res: any): void {
    // Login response has accessToken; register response has only user
    if (res.data.accessToken) {
      localStorage.setItem('hireflow_token', res.data.accessToken);
    }
    if (res.data.refreshToken) {
      localStorage.setItem('hireflow_refresh_token', res.data.refreshToken);
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
      title: roleRaw === 'recruiter' ? 'Recruiter' : 'Candidate',
      twoFactorEnabled: u.twoFactorEnabled ?? false
    };
    this.currentUser.set(user);
    localStorage.setItem('hireflow_user', JSON.stringify(user));
    this.router.navigate([roleRaw === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard']);

  }

  private _demoLogin(email: string, password: string): { success: boolean; message: string } {
    const normalizedEmail = email.toLowerCase().trim();
    const local = this._accounts().find(u => u.email.toLowerCase() === normalizedEmail && u.password === password);
    if (local) {
      const { password: _, ...safe } = local;
      this.currentUser.set(safe);
      localStorage.setItem('hireflow_user', JSON.stringify(safe));
      this.router.navigate([safe.role === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard']);
      return { success: true, message: 'Welcome back!' };
    }

    const overrides = this._passwordOverrides();
    const match = this.DEMO_USERS.find(u =>
      u.email.toLowerCase() === normalizedEmail && (overrides[normalizedEmail] ?? u.password) === password
    );
    if (!match) return { success: false, message: 'Incorrect email or password. Try demo credentials above or your registered account.' };
    const { password: _, ...safe } = match;
    this.currentUser.set(safe);
    localStorage.setItem('hireflow_user', JSON.stringify(safe));
    this.router.navigate([safe.role === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard']);
    return { success: true, message: 'Welcome back! (Demo mode)' };
  }

  private _load(): User | null {
    try { const r = localStorage.getItem('hireflow_user'); return r ? JSON.parse(r) : null; } catch { return null; }
  }

  private _localRegister(data: any): { success: boolean; message: string } {
    const email = String(data.email ?? '').toLowerCase().trim();
    const accounts = this._accounts();
    if (accounts.some(account => account.email.toLowerCase() === email) ||
        this.DEMO_USERS.some(account => account.email.toLowerCase() === email)) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const name = String(data.fullName ?? data.name ?? '').trim();
    const role = data.role === 'candidate' ? 'candidate' : 'recruiter';
    const account: LocalAccount = {
      id: `local-${Date.now()}`,
      name,
      email,
      password: data.password,
      role,
      avatar: '',
      initials: this._initials(name),
      company: String(data.company ?? '').trim(),
      phone: String(data.phone ?? '').trim(),
      title: role === 'candidate' ? 'Candidate' : 'Recruiter',
    };
    this._saveAccounts([...accounts, account]);
    const { password: _, ...safe } = account;
    this.currentUser.set(safe);
    localStorage.setItem('hireflow_user', JSON.stringify(safe));
    this.router.navigate([role === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard']);
    return { success: true, message: 'Account created successfully.' };
  }

  private _accounts(): LocalAccount[] {
    try { return JSON.parse(localStorage.getItem('hireflow_accounts') ?? '[]'); } catch { return []; }
  }

  private _saveAccounts(accounts: LocalAccount[]): void {
    localStorage.setItem('hireflow_accounts', JSON.stringify(accounts));
  }

  private _passwordOverrides(): Record<string, string> {
    try { return JSON.parse(localStorage.getItem('hireflow_password_overrides') ?? '{}'); } catch { return {}; }
  }

  private _initials(name: string): string {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    return ((parts[0]?.[0] ?? '?') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }
}
