import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.value;
function SignupComponent_Conditional_10_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Full name is required.");
    i0.ɵɵelementEnd();
} }
function SignupComponent_Conditional_10_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Enter a valid work email address.");
    i0.ɵɵelementEnd();
} }
function SignupComponent_Conditional_10_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Please enter your role or title.");
    i0.ɵɵelementEnd();
} }
function SignupComponent_Conditional_10_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 13);
    i0.ɵɵtext(2, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 27);
    i0.ɵɵelementEnd();
} }
function SignupComponent_Conditional_10_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div")(2, "label", 13);
    i0.ɵɵtext(3, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "label", 13);
    i0.ɵɵtext(7, "Experience");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div")(10, "label", 13);
    i0.ɵɵtext(11, "Skills");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "input", 31);
    i0.ɵɵelementStart(13, "p", 32);
    i0.ɵɵtext(14, "Separate skills with commas.");
    i0.ɵɵelementEnd()();
} }
function SignupComponent_Conditional_10_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Password must be at least 8 characters.");
    i0.ɵɵelementEnd();
} }
function SignupComponent_Conditional_10_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Passwords do not match.");
    i0.ɵɵelementEnd();
} }
function SignupComponent_Conditional_10_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 24);
    i0.ɵɵelement(1, "input", 33);
    i0.ɵɵelementStart(2, "div")(3, "p", 34);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 35);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_11_0;
    const role_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ((tmp_11_0 = ctx_r1.signupForm.get("role")) == null ? null : tmp_11_0.value) === role_r3.value ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-slate-300");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", role_r3.value);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(role_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(role_r3.desc);
} }
function SignupComponent_Conditional_10_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 36);
    i0.ɵɵtext(1, " Creating account... ");
} }
function SignupComponent_Conditional_10_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Create Account ");
} }
function SignupComponent_Conditional_10_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.signupError());
} }
function SignupComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "form", 12);
    i0.ɵɵlistener("ngSubmit", function SignupComponent_Conditional_10_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSubmit()); });
    i0.ɵɵelementStart(2, "div")(3, "label", 13);
    i0.ɵɵtext(4, "Full Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 14);
    i0.ɵɵconditionalCreate(6, SignupComponent_Conditional_10_Conditional_6_Template, 2, 0, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div")(8, "label", 13);
    i0.ɵɵtext(9, "Work Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "input", 16);
    i0.ɵɵconditionalCreate(11, SignupComponent_Conditional_10_Conditional_11_Template, 2, 0, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div")(13, "label", 13);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div")(17, "label", 13);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 18);
    i0.ɵɵconditionalCreate(20, SignupComponent_Conditional_10_Conditional_20_Template, 2, 0, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(21, SignupComponent_Conditional_10_Conditional_21_Template, 4, 0, "div")(22, SignupComponent_Conditional_10_Conditional_22_Template, 15, 0);
    i0.ɵɵelementStart(23, "div")(24, "label", 13);
    i0.ɵɵtext(25, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div")(28, "label", 13);
    i0.ɵɵtext(29, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 20);
    i0.ɵɵconditionalCreate(31, SignupComponent_Conditional_10_Conditional_31_Template, 2, 0, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div")(33, "label", 13);
    i0.ɵɵtext(34, "Confirm Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(35, "input", 21);
    i0.ɵɵconditionalCreate(36, SignupComponent_Conditional_10_Conditional_36_Template, 2, 0, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div")(38, "label", 22);
    i0.ɵɵtext(39, "I am a\u2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 23);
    i0.ɵɵrepeaterCreate(41, SignupComponent_Conditional_10_For_42_Template, 7, 4, "label", 24, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "button", 25);
    i0.ɵɵconditionalCreate(44, SignupComponent_Conditional_10_Conditional_44_Template, 2, 0)(45, SignupComponent_Conditional_10_Conditional_45_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(46, SignupComponent_Conditional_10_Conditional_46_Template, 2, 1, "p", 26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_11_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.signupForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r1.fieldError("fullName") ? "border-rose-300 bg-rose-50" : "border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.fieldError("fullName") ? 6 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r1.fieldError("email") ? "border-rose-300 bg-rose-50" : "border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.fieldError("email") ? 11 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ((tmp_6_0 = ctx_r1.signupForm.get("role")) == null ? null : tmp_6_0.value) === "recruiter" ? "Company" : "Current / Last Company", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ((tmp_7_0 = ctx_r1.signupForm.get("role")) == null ? null : tmp_7_0.value) === "recruiter" ? "Your Job Title" : "Current Role", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ((tmp_8_0 = ctx_r1.signupForm.get("role")) == null ? null : tmp_8_0.value) === "recruiter" ? "Senior Recruiter" : "Frontend Developer")("ngClass", ctx_r1.fieldError("title") ? "border-rose-300 bg-rose-50" : "border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.fieldError("title") ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(((tmp_11_0 = ctx_r1.signupForm.get("role")) == null ? null : tmp_11_0.value) === "recruiter" ? 21 : 22);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngClass", ctx_r1.fieldError("password") ? "border-rose-300 bg-rose-50" : "border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.fieldError("password") ? 31 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r1.passwordMismatch() ? "border-rose-300 bg-rose-50" : "border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.passwordMismatch() ? 36 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.roles);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.isLoading());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLoading() ? 44 : 45);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.signupError() ? 46 : -1);
} }
function SignupComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 37);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 38);
    i0.ɵɵelement(3, "path", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h2", 40);
    i0.ɵɵtext(5, "Account Created!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 41);
    i0.ɵɵtext(7, " Your onboarding details were saved for ");
    i0.ɵɵelementStart(8, "strong", 42);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, ". ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 43);
    i0.ɵɵtext(12, " Back to Sign In ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r1.signupForm.get("email")) == null ? null : tmp_1_0.value);
} }
export class SignupComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.submitted = signal(false, ...(ngDevMode ? [{ debugName: "submitted" }] : []));
        this.isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
        this.signupError = signal(null, ...(ngDevMode ? [{ debugName: "signupError" }] : []));
        this.roles = [
            { value: 'recruiter', label: 'Recruiter', desc: 'Hiring & talent ops' },
            { value: 'candidate', label: 'Candidate', desc: 'Applying for roles' },
        ];
        this.signupForm = this.fb.group({
            fullName: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            company: [''],
            title: ['', [Validators.required, Validators.minLength(2)]],
            department: [''],
            location: [''],
            experienceYears: [''],
            skills: [''],
            phone: [''],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]],
            role: ['recruiter', Validators.required],
        });
    }
    fieldError(field) {
        const ctrl = this.signupForm.get(field);
        return !!(ctrl?.invalid && ctrl?.touched);
    }
    passwordMismatch() {
        return this.signupForm.touched &&
            this.signupForm.get('password')?.value !== this.signupForm.get('confirmPassword')?.value;
    }
    async onSubmit() {
        this.signupForm.markAllAsTouched();
        if (this.signupForm.invalid || this.passwordMismatch())
            return;
        this.signupError.set(null);
        this.isLoading.set(true);
        const result = await this.auth.register(this.signupForm.value);
        this.isLoading.set(false);
        if (!result.success) {
            this.signupError.set(result.message);
            return;
        }
        this.submitted.set(true);
    }
    static { this.ɵfac = function SignupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SignupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupComponent, selectors: [["app-signup"]], decls: 16, vars: 1, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-slate-50", "via-slate-100", "to-indigo-50", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-sm"], [1, "text-center", "mb-8"], [1, "w-12", "h-12", "bg-indigo-600", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "shadow-lg", "shadow-indigo-200"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-6", "h-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "text-2xl", "font-bold", "text-slate-900", "tracking-tight"], [1, "text-sm", "text-slate-500", "mt-1"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "p-8"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "p-8", "text-center"], [1, "text-center", "text-sm", "text-slate-500", "mt-5"], ["routerLink", "/auth/login", 1, "text-indigo-600", "hover:text-indigo-700", "font-semibold", "ml-1"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-semibold", "text-slate-700", "mb-1.5"], ["formControlName", "fullName", "type", "text", "placeholder", "Priya Sharma", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "ngClass"], [1, "mt-1", "text-xs", "text-rose-500"], ["formControlName", "email", "type", "email", "placeholder", "you@company.com", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "ngClass"], ["formControlName", "company", "type", "text", "placeholder", "Acme Technologies", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "border-slate-200", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], ["formControlName", "title", "type", "text", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "placeholder", "ngClass"], ["formControlName", "phone", "type", "tel", "placeholder", "+91 98765 43210", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "border-slate-200", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], ["formControlName", "password", "type", "password", "placeholder", "At least 8 characters", "autocomplete", "new-password", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "ngClass"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Repeat password", "autocomplete", "new-password", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", 3, "ngClass"], [1, "block", "text-sm", "font-semibold", "text-slate-700", "mb-2"], [1, "grid", "grid-cols-2", "gap-2"], [1, "flex", "items-center", "gap-2.5", "p-3", "rounded-xl", "border-2", "cursor-pointer", "transition-all", "duration-150", 3, "ngClass"], ["type", "submit", 1, "w-full", "btn", "btn-primary", "normal-case", "font-semibold", "py-2.5", "text-sm", "rounded-xl", "disabled:opacity-60", "disabled:cursor-not-allowed", "mt-1", 3, "disabled"], [1, "text-xs", "text-rose-600", "font-semibold", "text-center"], ["formControlName", "department", "type", "text", "placeholder", "Talent Acquisition", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "border-slate-200", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], [1, "grid", "grid-cols-2", "gap-3"], ["formControlName", "location", "type", "text", "placeholder", "Bengaluru", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "border-slate-200", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], ["formControlName", "experienceYears", "type", "number", "min", "0", "max", "50", "placeholder", "3", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "border-slate-200", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], ["formControlName", "skills", "type", "text", "placeholder", "Angular, TypeScript, Figma", 1, "w-full", "px-3.5", "py-2.5", "text-sm", "border", "border-slate-200", "rounded-xl", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all"], [1, "mt-1", "text-xs", "text-slate-400"], ["type", "radio", "formControlName", "role", 1, "accent-indigo-600", "w-3.5", "h-3.5", 3, "value"], [1, "text-xs", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500", "leading-tight"], [1, "loading", "loading-spinner", "loading-xs", "mr-2"], [1, "w-14", "h-14", "bg-emerald-100", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-7", "h-7", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "font-bold", "text-slate-900", "mb-2"], [1, "text-sm", "text-slate-500", "leading-relaxed", "mb-5"], [1, "text-slate-700"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-sm", "normal-case", "font-semibold"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h1", 6);
            i0.ɵɵtext(7, "Create Account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 7);
            i0.ɵɵtext(9, " Sign up and start using HireFlow ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, SignupComponent_Conditional_10_Template, 47, 18, "div", 8)(11, SignupComponent_Conditional_11_Template, 13, 1, "div", 9);
            i0.ɵɵelementStart(12, "p", 10);
            i0.ɵɵtext(13, " Already have an account? ");
            i0.ɵɵelementStart(14, "a", 11);
            i0.ɵɵtext(15, " Sign in ");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(!ctx.submitted() ? 10 : 11);
        } }, dependencies: [CommonModule, i1.NgClass, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MinValidator, i2.MaxValidator, i2.FormGroupDirective, i2.FormControlName, RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupComponent, [{
        type: Component,
        args: [{
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
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  {{ signupForm.get('role')?.value === 'recruiter' ? 'Company' : 'Current / Last Company' }}
                </label>
                <input formControlName="company" type="text" placeholder="Acme Technologies"
                  class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                         text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"/>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  {{ signupForm.get('role')?.value === 'recruiter' ? 'Your Job Title' : 'Current Role' }}
                </label>
                <input formControlName="title" type="text"
                  [placeholder]="signupForm.get('role')?.value === 'recruiter' ? 'Senior Recruiter' : 'Frontend Developer'"
                  class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"
                  [ngClass]="fieldError('title') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"/>
                @if (fieldError('title')) {
                  <p class="mt-1 text-xs text-rose-500">Please enter your role or title.</p>
                }
              </div>

              @if (signupForm.get('role')?.value === 'recruiter') {
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Department</label>
                  <input formControlName="department" type="text" placeholder="Talent Acquisition"
                    class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                           text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                           focus:ring-indigo-500 focus:border-transparent transition-all"/>
                </div>
              } @else {
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-1.5">Location</label>
                    <input formControlName="location" type="text" placeholder="Bengaluru"
                      class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                             text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                             focus:ring-indigo-500 focus:border-transparent transition-all"/>
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-slate-700 mb-1.5">Experience</label>
                    <input formControlName="experienceYears" type="number" min="0" max="50" placeholder="3"
                      class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                             text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                             focus:ring-indigo-500 focus:border-transparent transition-all"/>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Skills</label>
                  <input formControlName="skills" type="text" placeholder="Angular, TypeScript, Figma"
                    class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                           text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                           focus:ring-indigo-500 focus:border-transparent transition-all"/>
                  <p class="mt-1 text-xs text-slate-400">Separate skills with commas.</p>
                </div>
              }

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                <input formControlName="phone" type="tel" placeholder="+91 98765 43210"
                  class="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white
                         text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"/>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
                <input formControlName="password" type="password" placeholder="At least 8 characters"
                  autocomplete="new-password"
                  class="w-full px-3.5 py-2.5 text-sm border rounded-xl bg-white text-slate-900
                         placeholder:text-slate-400 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-transparent transition-all"
                  [ngClass]="fieldError('password') ? 'border-rose-300 bg-rose-50' : 'border-slate-200'"/>
                @if (fieldError('password')) {
                  <p class="mt-1 text-xs text-rose-500">Password must be at least 8 characters.</p>
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
              Your onboarding details were saved for
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
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/auth/signup/signup.component.ts", lineNumber: 227 }); })();
