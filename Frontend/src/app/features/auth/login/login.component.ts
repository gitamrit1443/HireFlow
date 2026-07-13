import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50
                flex items-center justify-center p-4">

      <div class="w-full max-w-sm">

        <!-- Brand -->
        <div class="text-center mb-8">
          <div class="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center
                      mx-auto mb-4 shadow-lg shadow-indigo-200">
            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight">HireFlow</h1>
          <p class="text-sm text-slate-500 mt-1">Sign in to your workspace</p>
        </div>

        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

          <!-- Form -->
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                Email address
              </label>
              <input
                formControlName="email"
                type="email"
                placeholder="you&#64;company.com"
                autocomplete="email"
                class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                       placeholder:text-slate-400 transition-all duration-150
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                [ngClass]="fieldError('email') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"
              />
              @if (fieldError('email')) {
                <p class="mt-1.5 text-xs text-rose-500">Please enter a valid email address.</p>
              }
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="text-sm font-semibold text-slate-700">Password</label>
              </div>
              <div class="relative">
                <input
                  formControlName="password"
                  [type]="showPassword() ? 'text' : 'password'"
                  placeholder="Enter your password"
                  autocomplete="current-password"
                  class="w-full pl-3.5 pr-10 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 transition-all duration-150
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  [ngClass]="fieldError('password') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"
                />
                <button type="button"
                  (click)="togglePassword()"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400
                         hover:text-slate-600 transition-colors">
                  @if (showPassword()) {
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                    </svg>
                  } @else {
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  }
                </button>
              </div>
              @if (fieldError('password')) {
                <p class="mt-1.5 text-xs text-rose-500">Password must be at least 6 characters.</p>
              }
            </div>

            <!-- Error -->
            @if (loginError()) {
              <div class="flex items-center gap-2.5 p-3 bg-rose-50 border border-rose-200
                          rounded-xl text-rose-700 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                </svg>
                <span class="font-medium">{{ loginError() }}</span>
              </div>
            }

            <button
              type="submit"
              [disabled]="isLoading()"
              class="w-full btn btn-primary normal-case font-semibold py-2.5 text-sm
                     rounded-xl disabled:opacity-60 disabled:cursor-not-allowed mt-2">
              @if (isLoading()) {
                <span class="loading loading-spinner loading-xs mr-2"></span>
                Signing in…
              } @else {
                Sign in to HireFlow
              }
            </button>

          </form>

        </div>

        <p class="text-center text-sm text-slate-500 mt-5">
          New to HireFlow?
          <a routerLink="/auth/signup" class="text-indigo-600 hover:text-indigo-700 font-semibold ml-1">
            Create account
          </a>
        </p>

        <p class="text-center text-xs text-slate-400 mt-6">
          © 2025 HireFlow · <a href="#" class="hover:text-slate-500">Privacy</a> ·
          <a href="#" class="hover:text-slate-500">Terms</a>
        </p>

      </div>
    </div>
  `
})
export class LoginComponent {

  private fb   = inject(FormBuilder);
  private auth = inject(AuthService);

  showPassword = signal(false);
  isLoading    = signal(false);
  loginError   = signal<string | null>(null);

  loginForm: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  fieldError(field: string): boolean {
    const ctrl = this.loginForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  togglePassword(): void { this.showPassword.update(v => !v); }

  async onSubmit(): Promise<void> {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    this.loginError.set(null);

    const { email, password } = this.loginForm.value;

    const result = await this.auth.login(email, password);
    if (!result.success) {
      this.loginError.set(result.message);
      this.isLoading.set(false);
    }
    // On success, AuthService.login() navigates automatically
  }
}
