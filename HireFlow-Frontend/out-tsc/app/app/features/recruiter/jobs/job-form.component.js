import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { JobsApiService } from '../../../core/services/jobs-api.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ({ standalone: true });
const _forTrack0 = ($index, $item) => $item.value;
function JobFormComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Job title is required.");
    i0.ɵɵelementEnd();
} }
function JobFormComponent_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dept_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", dept_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(dept_r1);
} }
function JobFormComponent_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 47);
    i0.ɵɵelement(1, "input", 48);
    i0.ɵɵelementStart(2, "span", 49);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const type_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("border-indigo-500", ((tmp_10_0 = ctx_r2.jobForm.get("type")) == null ? null : tmp_10_0.value) === type_r2.value)("bg-indigo-50", ((tmp_11_0 = ctx_r2.jobForm.get("type")) == null ? null : tmp_11_0.value) === type_r2.value)("border-slate-200", ((tmp_12_0 = ctx_r2.jobForm.get("type")) == null ? null : tmp_12_0.value) !== type_r2.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", type_r2.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r2.label);
} }
function JobFormComponent_For_69_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 50);
    i0.ɵɵlistener("click", function JobFormComponent_For_69_Template_button_click_2_listener() { const $index_r5 = i0.ɵɵrestoreView(_r4).$index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.removeSkill($index_r5)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 51);
    i0.ɵɵelement(4, "path", 52);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", skill_r6.value, " ");
} }
function JobFormComponent_Conditional_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1, "No skills added yet.");
    i0.ɵɵelementEnd();
} }
function JobFormComponent_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 36);
    i0.ɵɵtext(1, "Description is required.");
    i0.ɵɵelementEnd();
} }
function JobFormComponent_Conditional_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} }
function JobFormComponent_For_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 53);
    i0.ɵɵelement(1, "input", 54);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const s_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("border-indigo-500", ((tmp_10_0 = ctx_r2.jobForm.get("status")) == null ? null : tmp_10_0.value) === s_r7.value)("bg-indigo-50", ((tmp_11_0 = ctx_r2.jobForm.get("status")) == null ? null : tmp_11_0.value) === s_r7.value)("text-indigo-700", ((tmp_12_0 = ctx_r2.jobForm.get("status")) == null ? null : tmp_12_0.value) === s_r7.value)("border-slate-200", ((tmp_13_0 = ctx_r2.jobForm.get("status")) == null ? null : tmp_13_0.value) !== s_r7.value)("text-slate-600", ((tmp_14_0 = ctx_r2.jobForm.get("status")) == null ? null : tmp_14_0.value) !== s_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", s_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", s_r7.label, " ");
} }
function JobFormComponent_Conditional_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1, " Please fix the errors above before submitting. ");
    i0.ɵɵelementEnd();
} }
function JobFormComponent_Conditional_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37);
    i0.ɵɵtext(1, " All fields marked ");
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " are required. ");
    i0.ɵɵelementEnd();
} }
function JobFormComponent_Conditional_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 44);
    i0.ɵɵelement(1, "span", 55);
    i0.ɵɵtext(2, " Saving\u2026 ");
    i0.ɵɵelementEnd();
} }
function JobFormComponent_Conditional_112_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.isEditMode() ? "Save Changes" : "Post Job", " ");
} }
export class JobFormComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.jobsApi = inject(JobsApiService);
        this.auth = inject(AuthService);
        this.jobId = null;
        this.isEditMode = signal(false, ...(ngDevMode ? [{ debugName: "isEditMode" }] : []));
        this.formSubmitted = signal(false, ...(ngDevMode ? [{ debugName: "formSubmitted" }] : []));
        this.formSubmitting = signal(false, ...(ngDevMode ? [{ debugName: "formSubmitting" }] : []));
        this.newSkillInput = '';
        this.jobForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            department: ['', Validators.required],
            location: ['', Validators.required],
            type: ['full-time'],
            openings: [1, [Validators.required, Validators.min(1)]],
            experience: [''],
            salaryMin: [0],
            salaryMax: [0],
            skills: this.fb.array([]), // Dynamic FormArray
            description: ['', Validators.required],
            status: ['open'],
            closingDate: [''],
        });
        this.departments = ['Engineering', 'Design', 'Infrastructure', 'Data', 'Product', 'Quality'];
        this.jobTypes = [
            { value: 'full-time', label: 'Full-time' },
            { value: 'part-time', label: 'Part-time' },
            { value: 'remote', label: 'Remote' },
            { value: 'contract', label: 'Contract' },
        ];
        this.statusOptions = [
            { value: 'open', label: 'Publish' },
            { value: 'draft', label: 'Draft' },
        ];
    }
    get skillsArray() {
        return this.jobForm.get('skills');
    }
    async ngOnInit() {
        this.jobId = this.route.snapshot.paramMap.get('id');
        if (this.jobId) {
            this.isEditMode.set(true);
            const job = await this.jobsApi.getById(this.jobId);
            if (job) {
                this.jobForm.patchValue(job);
                job.skills.forEach(skill => this.skillsArray.push(this.fb.control(skill)));
            }
        }
    }
    addSkill() {
        const val = this.newSkillInput.trim();
        if (!val)
            return;
        const exists = this.skillsArray.controls.some(c => c.value.toLowerCase() === val.toLowerCase());
        if (!exists) {
            this.skillsArray.push(this.fb.control(val));
        }
        this.newSkillInput = '';
    }
    removeSkill(index) {
        this.skillsArray.removeAt(index);
    }
    isInvalid(field) {
        const c = this.jobForm.get(field);
        return !!(this.formSubmitted() && c?.invalid);
    }
    async onSubmit() {
        this.formSubmitted.set(true);
        if (this.jobForm.invalid)
            return;
        this.formSubmitting.set(true);
        try {
            const value = this.jobForm.getRawValue();
            const payload = {
                title: value.title ?? '',
                department: value.department ?? '',
                location: value.location ?? '',
                type: (value.type ?? 'full-time'),
                openings: value.openings ?? 1,
                experience: value.experience ?? '',
                salaryMin: value.salaryMin ?? 0,
                salaryMax: value.salaryMax ?? 0,
                currency: 'INR',
                skills: this.skillsArray.getRawValue(),
                description: value.description ?? '',
                status: (value.status ?? 'draft'),
                closingDate: value.closingDate || null,
                hiringManager: this.auth.userName() || 'Recruiter',
            };
            if (this.jobId)
                await this.jobsApi.update(this.jobId, payload);
            else
                await this.jobsApi.create(payload);
            this.formSubmitting.set(false);
            await this.router.navigate(['/recruiter/jobs']);
        }
        catch {
            this.formSubmitting.set(false);
        }
    }
    static { this.ɵfac = function JobFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || JobFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JobFormComponent, selectors: [["app-job-form"]], decls: 113, vars: 21, consts: [[1, "p-6", "max-w-3xl", "mx-auto"], [1, "mb-6"], ["routerLink", "/recruiter/jobs", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "text-slate-500", "hover:text-slate-700", "mb-3", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 19.5L8.25 12l7.5-7.5"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6", "mb-4"], [1, "text-sm", "font-semibold", "text-slate-900", "mb-4", "pb-3", "border-b", "border-slate-100"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "sm:col-span-2"], [1, "block", "text-xs", "font-semibold", "text-slate-700", "mb-1.5"], [1, "text-rose-500"], ["type", "text", "formControlName", "title", "placeholder", "e.g. Senior Frontend Engineer", 1, "w-full", "px-3", "py-2", "text-sm", "border", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "text-xs", "text-rose-500", "mt-1"], ["formControlName", "department", 1, "w-full", "px-3", "py-2", "text-sm", "border", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["value", ""], [3, "value"], ["type", "text", "formControlName", "location", "placeholder", "e.g. Bangalore, IN (Hybrid)", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "grid", "grid-cols-2", "gap-2"], [1, "flex", "items-center", "gap-2", "p-2.5", "border", "rounded-lg", "cursor-pointer", "transition-colors", "duration-150", 3, "border-indigo-500", "bg-indigo-50", "border-slate-200"], ["type", "number", "formControlName", "openings", "min", "1", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], ["type", "text", "formControlName", "experience", "placeholder", "e.g. 3\u20136 years", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["type", "number", "formControlName", "salaryMin", "min", "0", "placeholder", "1500000", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["type", "number", "formControlName", "salaryMax", "min", "0", "placeholder", "2500000", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "flex-wrap", "gap-2", "mb-3", "min-h-[32px]"], [1, "inline-flex", "items-center", "gap-1.5", "pl-2.5", "pr-1.5", "py-1", "bg-indigo-50", "text-indigo-700", "text-xs", "font-medium", "rounded-full"], [1, "text-xs", "text-slate-400", "py-1"], [1, "flex", "gap-2"], ["type", "text", "placeholder", "Type a skill and press Enter or Add", 1, "flex-1", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "keydown.enter", "ngModel", "ngModelOptions"], ["type", "button", 1, "px-4", "py-2", "text-sm", "font-medium", "border", "border-slate-200", "text-slate-700", "bg-white", "rounded-lg", "hover:bg-slate-50", "transition-colors", "duration-150", 3, "click"], [1, "text-xs", "text-slate-400", "mt-1.5"], ["formControlName", "description", "rows", "6", "placeholder", "Describe the role, responsibilities, and requirements\u2026", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "items-center", "justify-between", "mt-1"], [1, "text-xs", "text-rose-500"], [1, "text-xs", "text-slate-400"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6", "mb-6"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-1.5", "py-2", "border", "rounded-lg", "cursor-pointer", "text-xs", "font-medium", "transition-colors", 3, "border-indigo-500", "bg-indigo-50", "text-indigo-700", "border-slate-200", "text-slate-600"], [1, "text-slate-400", "font-normal"], ["type", "date", "formControlName", "closingDate", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "items-center", "justify-between", "bg-white", "rounded-xl", "border", "border-slate-200", "px-6", "py-4", "sticky", "bottom-4", "shadow-lg"], [1, "text-xs", "text-rose-500", "font-medium"], [1, "flex", "items-center", "gap-2"], ["routerLink", "/recruiter/jobs", 1, "px-4", "py-2", "text-sm", "font-medium", "text-slate-600", "border", "border-slate-200", "rounded-lg", "hover:bg-slate-50", "transition-colors", "duration-150"], ["type", "submit", 1, "px-5", "py-2", "text-sm", "font-medium", "text-white", "bg-indigo-600", "rounded-lg", "hover:bg-indigo-700", "transition-colors", "duration-150", "disabled:opacity-50", 3, "disabled"], [1, "flex", "items-center", "gap-2", "p-2.5", "border", "rounded-lg", "cursor-pointer", "transition-colors", "duration-150"], ["type", "radio", "formControlName", "type", 1, "accent-indigo-600", 3, "value"], [1, "text-xs", "font-medium", "text-slate-700"], ["type", "button", 1, "w-4", "h-4", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-indigo-200", "transition-colors", "duration-150", "text-indigo-500", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-1.5", "py-2", "border", "rounded-lg", "cursor-pointer", "text-xs", "font-medium", "transition-colors"], ["type", "radio", "formControlName", "status", 1, "sr-only", 3, "value"], [1, "w-3.5", "h-3.5", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin"]], template: function JobFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, " Back to Jobs ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "h1", 5);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 6);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "form", 7);
            i0.ɵɵlistener("ngSubmit", function JobFormComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(11, "div", 8)(12, "h2", 9);
            i0.ɵɵtext(13, " Role Details ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 10)(15, "div", 11)(16, "label", 12);
            i0.ɵɵtext(17, " Job Title ");
            i0.ɵɵelementStart(18, "span", 13);
            i0.ɵɵtext(19, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(20, "input", 14);
            i0.ɵɵconditionalCreate(21, JobFormComponent_Conditional_21_Template, 2, 0, "p", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div")(23, "label", 12);
            i0.ɵɵtext(24, " Department ");
            i0.ɵɵelementStart(25, "span", 13);
            i0.ɵɵtext(26, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "select", 16)(28, "option", 17);
            i0.ɵɵtext(29, "Select department\u2026");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(30, JobFormComponent_For_31_Template, 2, 2, "option", 18, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div")(33, "label", 12);
            i0.ɵɵtext(34, " Location ");
            i0.ɵɵelementStart(35, "span", 13);
            i0.ɵɵtext(36, "*");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(37, "input", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div")(39, "label", 12);
            i0.ɵɵtext(40, " Employment Type ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 20);
            i0.ɵɵrepeaterCreate(42, JobFormComponent_For_43_Template, 4, 8, "label", 21, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "div")(45, "label", 12);
            i0.ɵɵtext(46, " Number of Openings ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(47, "input", 22);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "div", 8)(49, "h2", 9);
            i0.ɵɵtext(50, " Experience & Compensation ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 23)(52, "div")(53, "label", 12);
            i0.ɵɵtext(54, " Experience Required ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(55, "input", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "div")(57, "label", 12);
            i0.ɵɵtext(58, " Min Salary (\u20B9) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(59, "input", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div")(61, "label", 12);
            i0.ɵɵtext(62, " Max Salary (\u20B9) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(63, "input", 26);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(64, "div", 8)(65, "h2", 9);
            i0.ɵɵtext(66, " Required Skills ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div", 27);
            i0.ɵɵrepeaterCreate(68, JobFormComponent_For_69_Template, 5, 1, "span", 28, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵconditionalCreate(70, JobFormComponent_Conditional_70_Template, 2, 0, "span", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 30)(72, "input", 31);
            i0.ɵɵtwoWayListener("ngModelChange", function JobFormComponent_Template_input_ngModelChange_72_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.newSkillInput, $event) || (ctx.newSkillInput = $event); return $event; });
            i0.ɵɵlistener("keydown.enter", function JobFormComponent_Template_input_keydown_enter_72_listener($event) { $event.preventDefault(); return ctx.addSkill(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "button", 32);
            i0.ɵɵlistener("click", function JobFormComponent_Template_button_click_73_listener() { return ctx.addSkill(); });
            i0.ɵɵtext(74, " Add ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "p", 33);
            i0.ɵɵtext(76, " Add 3\u20138 skills. These appear as searchable tags on the job card. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "div", 8)(78, "h2", 9);
            i0.ɵɵtext(79, " Job Description ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "textarea", 34);
            i0.ɵɵtext(81, "          ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "div", 35);
            i0.ɵɵconditionalCreate(83, JobFormComponent_Conditional_83_Template, 2, 0, "p", 36)(84, JobFormComponent_Conditional_84_Template, 1, 0, "span");
            i0.ɵɵelementStart(85, "span", 37);
            i0.ɵɵtext(86);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(87, "div", 38)(88, "h2", 9);
            i0.ɵɵtext(89, " Publishing Settings ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "div", 10)(91, "div")(92, "label", 12);
            i0.ɵɵtext(93, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "div", 30);
            i0.ɵɵrepeaterCreate(95, JobFormComponent_For_96_Template, 3, 12, "label", 39, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div")(98, "label", 12);
            i0.ɵɵtext(99, " Application Deadline ");
            i0.ɵɵelementStart(100, "span", 40);
            i0.ɵɵtext(101, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(102, "input", 41);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(103, "div", 42)(104, "div");
            i0.ɵɵconditionalCreate(105, JobFormComponent_Conditional_105_Template, 2, 0, "p", 43)(106, JobFormComponent_Conditional_106_Template, 5, 0, "p", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "div", 44)(108, "a", 45);
            i0.ɵɵtext(109, " Cancel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "button", 46);
            i0.ɵɵconditionalCreate(111, JobFormComponent_Conditional_111_Template, 3, 0, "span", 44)(112, JobFormComponent_Conditional_112_Template, 1, 1);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_15_0;
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.isEditMode() ? "Edit Job Posting" : "Post a New Job", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.isEditMode() ? "Update the details for this role." : "Fill in the details to publish a new role.", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.jobForm);
            i0.ɵɵadvance(10);
            i0.ɵɵclassProp("border-rose-400", ctx.isInvalid("title"))("border-slate-200", !ctx.isInvalid("title"));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isInvalid("title") ? 21 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵclassProp("border-rose-400", ctx.isInvalid("department"))("border-slate-200", !ctx.isInvalid("department"));
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.departments);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.jobTypes);
            i0.ɵɵadvance(26);
            i0.ɵɵrepeater(ctx.skillsArray.controls);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.skillsArray.length === 0 ? 70 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.newSkillInput);
            i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(20, _c0));
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.isInvalid("description") ? 83 : 84);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ((tmp_15_0 = ctx.jobForm.get("description")) == null ? null : tmp_15_0.value == null ? null : tmp_15_0.value.length) || 0, " chars ");
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.statusOptions);
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(ctx.formSubmitted() && ctx.jobForm.invalid ? 105 : 106);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.formSubmitting());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.formSubmitting() ? 111 : 112);
        } }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, FormsModule, i1.NgModel], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobFormComponent, [{
        type: Component,
        args: [{
                selector: 'app-job-form',
                standalone: true,
                imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
                template: `
    <div class="p-6 max-w-3xl mx-auto">

      <div class="mb-6">
        <a routerLink="/recruiter/jobs"
           class="inline-flex items-center gap-1.5 text-sm text-slate-500
                  hover:text-slate-700 mb-3 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          Back to Jobs
        </a>
        <h1 class="text-lg font-bold text-slate-900">
          {{ isEditMode() ? 'Edit Job Posting' : 'Post a New Job' }}
        </h1>
        <p class="text-sm text-slate-500 mt-0.5">
          {{ isEditMode() ? 'Update the details for this role.' : 'Fill in the details to publish a new role.' }}
        </p>
      </div>

      <form [formGroup]="jobForm" (ngSubmit)="onSubmit()">

        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Role Details
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Job Title <span class="text-rose-500">*</span>
              </label>
              <input type="text" formControlName="title"
                placeholder="e.g. Senior Frontend Engineer"
                class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                       placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                [class.border-rose-400]="isInvalid('title')"
                [class.border-slate-200]="!isInvalid('title')" />
              @if (isInvalid('title')) {
                <p class="text-xs text-rose-500 mt-1">Job title is required.</p>
              }
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Department <span class="text-rose-500">*</span>
              </label>
              <select formControlName="department"
                class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
                [class.border-rose-400]="isInvalid('department')"
                [class.border-slate-200]="!isInvalid('department')">
                <option value="">Select department…</option>
                @for (dept of departments; track dept) {
                  <option [value]="dept">{{ dept }}</option>
                }
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Location <span class="text-rose-500">*</span>
              </label>
              <input type="text" formControlName="location"
                placeholder="e.g. Bangalore, IN (Hybrid)"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Employment Type
              </label>
              <div class="grid grid-cols-2 gap-2">
                @for (type of jobTypes; track type.value) {
                  <label class="flex items-center gap-2 p-2.5 border rounded-lg cursor-pointer
                                transition-colors duration-150"
                         [class.border-indigo-500]="jobForm.get('type')?.value === type.value"
                         [class.bg-indigo-50]="jobForm.get('type')?.value === type.value"
                         [class.border-slate-200]="jobForm.get('type')?.value !== type.value">
                    <input type="radio" formControlName="type" [value]="type.value"
                           class="accent-indigo-600" />
                    <span class="text-xs font-medium text-slate-700">{{ type.label }}</span>
                  </label>
                }
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Number of Openings
              </label>
              <input type="number" formControlName="openings" min="1"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Experience &amp; Compensation
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Experience Required
              </label>
              <input type="text" formControlName="experience"
                placeholder="e.g. 3–6 years"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Min Salary (₹)
              </label>
              <input type="number" formControlName="salaryMin" min="0"
                placeholder="1500000"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Max Salary (₹)
              </label>
              <input type="number" formControlName="salaryMax" min="0"
                placeholder="2500000"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Required Skills
          </h2>

          <div class="flex flex-wrap gap-2 mb-3 min-h-[32px]">
            @for (skill of skillsArray.controls; track $index) {
              <span class="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1
                           bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                {{ skill.value }}
                <button type="button" (click)="removeSkill($index)"
                  class="w-4 h-4 flex items-center justify-center rounded-full
                         hover:bg-indigo-200 transition-colors duration-150 text-indigo-500">
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </span>
            }
            @if (skillsArray.length === 0) {
              <span class="text-xs text-slate-400 py-1">No skills added yet.</span>
            }
          </div>

          <div class="flex gap-2">
            <input type="text" [(ngModel)]="newSkillInput" [ngModelOptions]="{ standalone: true }"
              placeholder="Type a skill and press Enter or Add"
              (keydown.enter)="$event.preventDefault(); addSkill()"
              class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                     text-slate-900 placeholder:text-slate-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="button" (click)="addSkill()"
              class="px-4 py-2 text-sm font-medium border border-slate-200 text-slate-700
                     bg-white rounded-lg hover:bg-slate-50 transition-colors duration-150">
              Add
            </button>
          </div>
          <p class="text-xs text-slate-400 mt-1.5">
            Add 3–8 skills. These appear as searchable tags on the job card.
          </p>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Job Description
          </h2>
          <textarea formControlName="description" rows="6"
            placeholder="Describe the role, responsibilities, and requirements…"
            class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                   text-slate-900 placeholder:text-slate-400 resize-none
                   focus:outline-none focus:ring-2 focus:ring-indigo-500">
          </textarea>
          <div class="flex items-center justify-between mt-1">
            @if (isInvalid('description')) {
              <p class="text-xs text-rose-500">Description is required.</p>
            } @else {
              <span></span>
            }
            <span class="text-xs text-slate-400">
              {{ jobForm.get('description')?.value?.length || 0 }} chars
            </span>
          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Publishing Settings
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">Status</label>
              <div class="flex gap-2">
                @for (s of statusOptions; track s.value) {
                  <label class="flex-1 flex items-center justify-center gap-1.5 py-2
                                border rounded-lg cursor-pointer text-xs font-medium transition-colors"
                         [class.border-indigo-500]="jobForm.get('status')?.value === s.value"
                         [class.bg-indigo-50]="jobForm.get('status')?.value === s.value"
                         [class.text-indigo-700]="jobForm.get('status')?.value === s.value"
                         [class.border-slate-200]="jobForm.get('status')?.value !== s.value"
                         [class.text-slate-600]="jobForm.get('status')?.value !== s.value">
                    <input type="radio" formControlName="status" [value]="s.value" class="sr-only" />
                    {{ s.label }}
                  </label>
                }
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Application Deadline <span class="text-slate-400 font-normal">(optional)</span>
              </label>
              <input type="date" formControlName="closingDate"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

          </div>
        </div>


        <div class="flex items-center justify-between bg-white rounded-xl border border-slate-200
                    px-6 py-4 sticky bottom-4 shadow-lg">
          <div>
            @if (formSubmitted() && jobForm.invalid) {
              <p class="text-xs text-rose-500 font-medium">
                Please fix the errors above before submitting.
              </p>
            } @else {
              <p class="text-xs text-slate-400">
                All fields marked <span class="text-rose-500">*</span> are required.
              </p>
            }
          </div>
          <div class="flex items-center gap-2">
            <a routerLink="/recruiter/jobs"
               class="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200
                      rounded-lg hover:bg-slate-50 transition-colors duration-150">
              Cancel
            </a>
            <button type="submit"
              class="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg
                     hover:bg-indigo-700 transition-colors duration-150 disabled:opacity-50"
              [disabled]="formSubmitting()">
              @if (formSubmitting()) {
                <span class="flex items-center gap-2">
                  <span class="w-3.5 h-3.5 border-2 border-white/30 border-t-white
                               rounded-full animate-spin"></span>
                  Saving…
                </span>
              } @else {
                {{ isEditMode() ? 'Save Changes' : 'Post Job' }}
              }
            </button>
          </div>
        </div>

      </form>
    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(JobFormComponent, { className: "JobFormComponent", filePath: "src/app/features/recruiter/jobs/job-form.component.ts", lineNumber: 302 }); })();
