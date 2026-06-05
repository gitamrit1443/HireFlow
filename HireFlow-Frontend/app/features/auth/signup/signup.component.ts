import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-signup',
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
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight">Create Account</h1>
          <p class="text-sm text-slate-500 mt-1">
            Sign up and start using HireFlow
          </p>
        </div>

        @if (!submitted()) {
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-4">

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input formControlName="fullName" type="text" placeholder="Priya Sharma"
                  class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"
                  [ngClass]="fieldError('fullName') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"/>
                @if (fieldError('fullName')) {
                  <p class="mt-1 text-xs text-rose-500">Full name is required.</p>
                }
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Work Email</label>
                <input formControlName="email" type="email" placeholder="you&#64;company.com"
                  class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"
                  [ngClass]="fieldError('email') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"/>
                @if (fieldError('email')) {
                  <p class="mt-1 text-xs text-rose-500">Enter a valid work email address.</p>
                }
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                <input formControlName="company" type="text" placeholder="Acme Technologies Pvt Ltd"
                  class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                         text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"/>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                <input formControlName="phone" type="tel" placeholder="+91 98765 43210"
                  class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                         text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"/>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
                <input formControlName="password" type="password" placeholder="At least 6 characters"
                  autocomplete="new-password"
                  class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"
                  [ngClass]="fieldError('password') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"/>
                @if (fieldError('password')) {
                  <p class="mt-1 text-xs text-rose-500">Password must be at least 6 characters.</p>
                }
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Confirm Password</label>
                <input formControlName="confirmPassword" type="password" placeholder="Repeat password"
                  autocomplete="new-password"
                  class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"
                  [ngClass]="passwordMismatch() ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"/>
                @if (passwordMismatch()) {
                  <p class="mt-1 text-xs text-rose-500">Passwords do not match.</p>
                }
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">I am a…</label>
                <div class="grid grid-cols-2 gap-2">
                  @for (role of roles; track role.value) {
                    <label
                      class="flex items-center gap-2.5 p-3 rounded-xl border-2 cursor-pointer
                             transition-all duration-150"
                      [ngClass]="signupForm.get('role')?.value === role.value
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-slate-200 hover:border-slate-300'">
                      <input type="radio" formControlName="role" [value]="role.value"
                        class="accent-indigo-600 w-3.5 h-3.5"/>
                      <div>
                        <p class="text-xs font-bold text-slate-800">{{ role.label }}</p>
                        <p class="text-xs text-slate-500 leading-tight">{{ role.desc }}</p>
                      </div>
                    </label>
                  }
                </div>
              </div>

              <button type="submit"
                [disabled]="isLoading()"
                class="w-full btn btn-primary normal-case font-semibold py-2.5 text-sm
                       rounded-xl disabled:opacity-60 disabled:cursor-not-allowed mt-1">
                @if (isLoading()) {
                  <span class="loading loading-spinner loading-xs mr-2"></span>
                  Creating account...
                } @else {
                  Create Account
                }
              </button>

              @if (signupError()) {
                <p class="text-xs text-rose-600 font-semibold text-center">{{ signupError() }}</p>
              }

            </form>
          </div>

        } @else {
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
            <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center
                        mx-auto mb-4">
              <svg class="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 class="text-lg font-bold text-slate-900 mb-2">Account Created!</h2>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
              You are being signed in with
              <strong class="text-slate-700">{{ signupForm.get('email')?.value }}</strong>.
            </p>
            <a routerLink="/auth/login"
               class="btn btn-primary btn-sm normal-case font-semibold">
              Back to Sign In
            </a>
          </div>
        }

        <p class="text-center text-sm text-slate-500 mt-5">
          Already have an account?
          <a routerLink="/auth/login" class="text-indigo-600 hover:text-indigo-700 font-semibold ml-1">
            Sign in
          </a>
        </p>

      </div>
    </div>
  `
})
export class SignupComponent {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  submitted  = signal(false);
  isLoading  = signal(false);
  signupError = signal<string | null>(null);

  readonly roles = [
    { value:'recruiter', label:'Recruiter', desc:'Hiring & talent ops' },
    { value:'candidate', label:'Candidate', desc:'Applying for roles' },
  ];

  signupForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email:    ['', [Validators.required, Validators.email]],
    company:  [''],
    phone:    [''],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    role:     ['recruiter', Validators.required],
  });

  fieldError(field: string): boolean {
    const ctrl = this.signupForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  passwordMismatch(): boolean {
    return this.signupForm.touched &&
      this.signupForm.get('password')?.value !== this.signupForm.get('confirmPassword')?.value;
  }

  async onSubmit(): Promise<void> {
    this.signupForm.markAllAsTouched();
    if (this.signupForm.invalid || this.passwordMismatch()) return;
    this.signupError.set(null);
    this.isLoading.set(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const result = await this.auth.register(this.signupForm.value);
    this.isLoading.set(false);
    if (!result.success) {
      this.signupError.set(result.message);
      return;
    }
    this.submitted.set(true);
  }
}
