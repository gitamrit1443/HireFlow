import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LoginComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "Please enter a valid email address.");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 18);
    i0.ɵɵelement(1, "path", 25);
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 18);
    i0.ɵɵelement(1, "path", 26);
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "Password must be at least 6 characters.");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 27);
    i0.ɵɵelement(2, "path", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.loginError());
} }
function LoginComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
    i0.ɵɵtext(1, " Signing in\u2026 ");
} }
function LoginComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Sign in to HireFlow ");
} }
export class LoginComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : []));
        this.isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
        this.loginError = signal(null, ...(ngDevMode ? [{ debugName: "loginError" }] : []));
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    fieldError(field) {
        const ctrl = this.loginForm.get(field);
        return !!(ctrl?.invalid && ctrl?.touched);
    }
    togglePassword() { this.showPassword.update(v => !v); }
    async onSubmit() {
        this.loginForm.markAllAsTouched();
        if (this.loginForm.invalid)
            return;
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
    static { this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 42, vars: 10, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-slate-50", "via-slate-100", "to-indigo-50", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-sm"], [1, "text-center", "mb-8"], [1, "w-12", "h-12", "bg-indigo-600", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "shadow-lg", "shadow-indigo-200"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-6", "h-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "text-2xl", "font-bold", "text-slate-900", "tracking-tight"], [1, "text-sm", "text-slate-500", "mt-1"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "p-8"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-semibold", "text-slate-700", "mb-1.5"], ["formControlName", "email", "type", "email", "placeholder", "you@company.com", "autocomplete", "email", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "transition-all", "duration-150", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "ngClass"], [1, "mt-1.5", "text-xs", "text-rose-500"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-sm", "font-semibold", "text-slate-700"], [1, "relative"], ["formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 1, "w-full", "pl-3.5", "pr-10", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "transition-all", "duration-150", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", 3, "type", "ngClass"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "hover:text-slate-600", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], [1, "flex", "items-center", "gap-2.5", "p-3", "bg-rose-50", "border", "border-rose-200", "rounded-xl", "text-rose-700", "text-sm"], ["type", "submit", 1, "w-full", "btn", "btn-primary", "normal-case", "font-semibold", "py-2.5", "text-sm", "rounded-xl", "disabled:opacity-60", "disabled:cursor-not-allowed", "mt-2", 3, "disabled"], [1, "text-center", "text-sm", "text-slate-500", "mt-5"], ["routerLink", "/auth/signup", 1, "text-indigo-600", "hover:text-indigo-700", "font-semibold", "ml-1"], [1, "text-center", "text-xs", "text-slate-400", "mt-6"], ["href", "#", 1, "hover:text-slate-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"], [1, "font-medium"], [1, "loading", "loading-spinner", "loading-xs", "mr-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h1", 6);
            i0.ɵɵtext(7, "HireFlow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 7);
            i0.ɵɵtext(9, "Sign in to your workspace");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 8)(11, "form", 9);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(12, "div")(13, "label", 10);
            i0.ɵɵtext(14, " Email address ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 11);
            i0.ɵɵconditionalCreate(16, LoginComponent_Conditional_16_Template, 2, 0, "p", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div")(18, "div", 13)(19, "label", 14);
            i0.ɵɵtext(20, "Password");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 15);
            i0.ɵɵelement(22, "input", 16);
            i0.ɵɵelementStart(23, "button", 17);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_23_listener() { return ctx.togglePassword(); });
            i0.ɵɵconditionalCreate(24, LoginComponent_Conditional_24_Template, 2, 0, ":svg:svg", 18)(25, LoginComponent_Conditional_25_Template, 2, 0, ":svg:svg", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(26, LoginComponent_Conditional_26_Template, 2, 0, "p", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(27, LoginComponent_Conditional_27_Template, 5, 1, "div", 19);
            i0.ɵɵelementStart(28, "button", 20);
            i0.ɵɵconditionalCreate(29, LoginComponent_Conditional_29_Template, 2, 0)(30, LoginComponent_Conditional_30_Template, 1, 0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "p", 21);
            i0.ɵɵtext(32, " New to HireFlow? ");
            i0.ɵɵelementStart(33, "a", 22);
            i0.ɵɵtext(34, " Create account ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "p", 23);
            i0.ɵɵtext(36, " \u00A9 2025 HireFlow \u00B7 ");
            i0.ɵɵelementStart(37, "a", 24);
            i0.ɵɵtext(38, "Privacy");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(39, " \u00B7 ");
            i0.ɵɵelementStart(40, "a", 24);
            i0.ɵɵtext(41, "Terms");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("formGroup", ctx.loginForm);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", ctx.fieldError("email") ? "border-rose-300 bg-rose-50" : "border-slate-200");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.fieldError("email") ? 16 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("type", ctx.showPassword() ? "text" : "password")("ngClass", ctx.fieldError("password") ? "border-rose-300 bg-rose-50" : "border-slate-200");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showPassword() ? 24 : 25);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.fieldError("password") ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loginError() ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.isLoading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isLoading() ? 29 : 30);
        } }, dependencies: [CommonModule, i1.NgClass, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
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
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 137 }); })();
