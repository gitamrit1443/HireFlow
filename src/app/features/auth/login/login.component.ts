import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50
                flex items-center justify-center p-4">

      <div class="w-full max-w-sm">

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

          <div class="flex items-start gap-2.5 p-3 bg-indigo-50 border border-indigo-100
                      rounded-xl mb-6">
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
            </svg>
            <div>
              <p class="text-xs font-semibold text-indigo-700">Demo credentials</p>
              <p class="text-xs text-indigo-600 mt-0.5">
                recruiter&#64;hireflow.com / demo1234
              </p>
            </div>
          </div>

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
                <p class="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                  <svg class="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                  </svg>
                  Please enter a valid email address.
                </p>
              }
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="text-sm font-semibold text-slate-700">Password</label>
                <a routerLink="/auth/forgot-password"
                   class="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
                  Forgot password?
                </a>
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
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                    </svg>
                  } @else {
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  }
                </button>
              </div>
              @if (fieldError('password')) {
                <p class="mt-1.5 text-xs text-rose-500">
                  Password must be at least 6 characters.
                </p>
              }
            </div>

            <div class="flex items-center gap-2.5">
              <input type="checkbox" id="remember" formControlName="remember"
                class="w-4 h-4 rounded border-slate-300 accent-indigo-600"/>
              <label for="remember" class="text-sm text-slate-600 font-medium cursor-pointer">
                Keep me signed in for 30 days
              </label>
            </div>

            @if (loginError()) {
              <div class="flex items-center gap-2.5 p-3 bg-rose-50 border border-rose-200
                          rounded-xl text-rose-700 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
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
                     rounded-xl disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              @if (isLoading()) {
                <span class="loading loading-spinner loading-xs mr-2"></span>
                Signing in…
              } @else {
                Sign in to HireFlow
              }
            </button>

          </form>

          <div class="relative my-5">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-100"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="px-3 bg-white text-xs text-slate-400 font-medium">or</span>
            </div>
          </div>

          <button class="w-full flex items-center justify-center gap-3 py-2.5 px-4
                         border border-slate-200 rounded-xl text-sm font-medium text-slate-600
                         hover:bg-slate-50 hover:border-slate-300 transition-all duration-150">
            <svg class="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google SSO
          </button>

        </div>

        <p class="text-center text-sm text-slate-500 mt-5">
          Don't have an account?
          <a routerLink="/auth/signup"
             class="text-indigo-600 hover:text-indigo-700 font-semibold ml-1">
            Request access
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

  private fb     = inject(FormBuilder);
  private router = inject(Router);

  showPassword = signal(false);
  isLoading    = signal(false);
  loginError   = signal<string | null>(null);

  loginForm: FormGroup = this.fb.group({
    email:    ['recruiter@hireflow.com', [Validators.required, Validators.email]],
    password: ['demo1234',              [Validators.required, Validators.minLength(6)]],
    remember: [false],
  });

  fieldError(field: string): boolean {
    const ctrl = this.loginForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
  togglePassword(): void {
    this.showPassword.update(v => !v);
  }


  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    this.loginError.set(null);

    const { email, password } = this.loginForm.value;

    setTimeout(() => {
      if (email === 'recruiter@hireflow.com' && password === 'demo1234') {
        this.router.navigate(['/recruiter/dashboard']);
      } else if (email === 'candidate@hireflow.com' && password === 'demo1234') {
        this.router.navigate(['/candidate/dashboard']);
      } else {
        this.isLoading.set(false);
        this.loginError.set('Incorrect email or password. Try the demo credentials above.');
      }
    }, 900);
  }
}
