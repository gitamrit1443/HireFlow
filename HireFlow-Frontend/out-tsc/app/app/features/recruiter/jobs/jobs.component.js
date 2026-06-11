import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobsApiService } from '../../../core/services/jobs-api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
function JobsComponent_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dept_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", dept_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(dept_r1);
} }
function JobsComponent_For_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function JobsComponent_For_23_Template_button_click_0_listener() { const tab_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.activeFilter.set(tab_r3.value)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 20);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("border-indigo-600", ctx_r3.activeFilter() === tab_r3.value)("text-indigo-600", ctx_r3.activeFilter() === tab_r3.value)("border-transparent", ctx_r3.activeFilter() !== tab_r3.value)("text-slate-500", ctx_r3.activeFilter() !== tab_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bg-indigo-600", ctx_r3.activeFilter() === tab_r3.value)("text-white", ctx_r3.activeFilter() === tab_r3.value)("bg-slate-100", ctx_r3.activeFilter() !== tab_r3.value)("text-slate-500", ctx_r3.activeFilter() !== tab_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r3.count(), " ");
} }
function JobsComponent_Conditional_24_For_2_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", skill_r5, " ");
} }
function JobsComponent_Conditional_24_For_2_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const job_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" +", job_r6.skills.length - 4, " ");
} }
function JobsComponent_Conditional_24_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 25);
    i0.ɵɵelement(5, "path", 26);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 27);
    i0.ɵɵelement(7, "span", 28);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "h3", 29);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 30);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 31)(15, "span", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(16, "svg", 33);
    i0.ɵɵelement(17, "path", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 35);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "p", 36);
    i0.ɵɵtext(24);
    i0.ɵɵelementStart(25, "span", 37);
    i0.ɵɵtext(26, "/ year");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 38);
    i0.ɵɵrepeaterCreate(28, JobsComponent_Conditional_24_For_2_For_29_Template, 2, 1, "span", 39, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵconditionalCreate(30, JobsComponent_Conditional_24_For_2_Conditional_30_Template, 2, 1, "span", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 41)(32, "div", 42)(33, "div")(34, "p", 43);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p", 44);
    i0.ɵɵtext(37, "Applied");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(38, "div", 45);
    i0.ɵɵelementStart(39, "div")(40, "p", 46);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "p", 44);
    i0.ɵɵtext(43, "Shortlisted");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(44, "div", 45);
    i0.ɵɵelementStart(45, "div")(46, "p", 47);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "p", 44);
    i0.ɵɵtext(49, "Openings");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "a", 48);
    i0.ɵɵtext(51, " Candidates \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const job_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r3.getDeptStyle(job_r6.department).bg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r3.getDeptStyle(job_r6.department).icon);
    i0.ɵɵadvance();
    i0.ɵɵattribute("d", ctx_r3.getDeptIcon(job_r6.department));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r3.getStatusStyle(job_r6.status));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r3.getStatusDot(job_r6.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 17, job_r6.status), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(job_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(job_r6.department);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", job_r6.location, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(job_r6.experience);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", job_r6.type, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r3.jobsApi.formatSalary(job_r6.salaryMin), " \u2013 ", ctx_r3.jobsApi.formatSalary(job_r6.salaryMax), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(job_r6.skills.slice(0, 4));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(job_r6.skills.length > 4 ? 30 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(job_r6.applicantsCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(job_r6.shortlistedCount);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(job_r6.openings);
} }
function JobsComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵrepeaterCreate(1, JobsComponent_Conditional_24_For_2_Template, 52, 19, "div", 21, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.filteredJobs());
} }
function JobsComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 50);
    i0.ɵɵelement(3, "path", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h3", 52);
    i0.ɵɵtext(5, "No jobs match your filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 53);
    i0.ɵɵtext(7, "Try adjusting your search or filter.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 54);
    i0.ɵɵtext(9, " Post New Job ");
    i0.ɵɵelementEnd()();
} }
export class JobsComponent {
    constructor() {
        this.jobsApi = inject(JobsApiService);
        this.jobs = this.jobsApi.jobs;
        this.searchQuery = '';
        this.deptFilter = '';
        this.activeFilter = signal('', ...(ngDevMode ? [{ debugName: "activeFilter" }] : []));
        this.filteredJobs = computed(() => {
            return this.jobs().filter(job => {
                const matchesStatus = !this.activeFilter() || job.status === this.activeFilter();
                const matchesDept = !this.deptFilter || job.department === this.deptFilter;
                const q = this.searchQuery.toLowerCase();
                const matchesSearch = !q
                    || job.title.toLowerCase().includes(q)
                    || job.department.toLowerCase().includes(q);
                return matchesStatus && matchesDept && matchesSearch;
            });
        }, ...(ngDevMode ? [{ debugName: "filteredJobs" }] : []));
        this.totalOpen = computed(() => this.jobs().filter(j => j.status === 'open').length, ...(ngDevMode ? [{ debugName: "totalOpen" }] : []));
        this.statusTabs = [
            { label: 'All', value: '', count: computed(() => this.jobs().length) },
            { label: 'Open', value: 'open', count: computed(() => this.jobs().filter(j => j.status === 'open').length) },
            { label: 'Draft', value: 'draft', count: computed(() => this.jobs().filter(j => j.status === 'draft').length) },
            { label: 'Paused', value: 'paused', count: computed(() => this.jobs().filter(j => j.status === 'paused').length) },
            { label: 'Closed', value: 'closed', count: computed(() => this.jobs().filter(j => j.status === 'closed').length) },
        ];
        this.departments = computed(() => [...new Set(this.jobs().map(j => j.department))], ...(ngDevMode ? [{ debugName: "departments" }] : []));
    }
    ngOnInit() {
        void this.jobsApi.loadAll();
    }
    getDeptStyle(dept) {
        const m = {
            Engineering: { bg: 'bg-indigo-50', icon: 'text-indigo-600' },
            Design: { bg: 'bg-pink-50', icon: 'text-pink-600' },
            Infrastructure: { bg: 'bg-violet-50', icon: 'text-violet-600' },
            Data: { bg: 'bg-blue-50', icon: 'text-blue-600' },
            Product: { bg: 'bg-amber-50', icon: 'text-amber-600' },
            Quality: { bg: 'bg-emerald-50', icon: 'text-emerald-600' },
        };
        return m[dept] ?? { bg: 'bg-slate-100', icon: 'text-slate-500' };
    }
    getDeptIcon(dept) {
        const i = {
            Engineering: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
            Design: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
            Infrastructure: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
            Data: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
            Product: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3',
            Quality: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
        };
        return i[dept] ?? 'M20.25 14.15v4.25';
    }
    getStatusStyle(status) {
        const m = {
            open: 'bg-emerald-100 text-emerald-700',
            draft: 'bg-slate-100 text-slate-600',
            closed: 'bg-rose-100 text-rose-600',
            paused: 'bg-amber-100 text-amber-700',
        };
        return m[status] ?? 'bg-slate-100 text-slate-600';
    }
    getStatusDot(status) {
        const m = {
            open: 'bg-emerald-500', draft: 'bg-slate-400',
            closed: 'bg-rose-500', paused: 'bg-amber-500',
        };
        return m[status] ?? 'bg-slate-400';
    }
    static { this.ɵfac = function JobsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || JobsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JobsComponent, selectors: [["app-jobs"]], decls: 26, vars: 5, consts: [[1, "p-6", "max-w-screen-2xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "flex", "items-center", "gap-2"], [1, "relative"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-slate-400", "pointer-events-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"], ["type", "text", "placeholder", "Search jobs\u2026", 1, "pl-9", "pr-3", "py-2", "text-sm", "bg-white", "border", "border-slate-200", "rounded-lg", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "w-52", 3, "ngModelChange", "ngModel"], [1, "text-sm", "bg-white", "border", "border-slate-200", "rounded-lg", "px-3", "py-2", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["routerLink", "/recruiter/jobs/new", 1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "text-sm", "font-medium", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "transition-colors", "duration-150"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], [1, "flex", "items-center", "gap-0.5", "mb-6", "border-b", "border-slate-200"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "border-b-2", "-mb-px", "transition-colors", "duration-150", 3, "border-indigo-600", "text-indigo-600", "border-transparent", "text-slate-500"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-3", "gap-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "px-4", "py-2.5", "text-sm", "font-medium", "border-b-2", "-mb-px", "transition-colors", "duration-150", 3, "click"], [1, "ml-1.5", "text-xs", "px-1.5", "py-0.5", "rounded-full", "font-semibold"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "hover:shadow-md", "transition-all", "duration-200", "flex", "flex-col", "group"], [1, "p-5", "flex-1"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "text-sm", "font-bold", "text-slate-900", "mb-0.5"], [1, "text-xs", "text-slate-500", "mb-3"], [1, "flex", "flex-wrap", "gap-x-4", "gap-y-1", "text-xs", "text-slate-500", "mb-3"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"], [1, "px-2", "py-0.5", "rounded-full", "bg-slate-100", "text-slate-600", "font-medium", "capitalize"], [1, "text-xs", "font-semibold", "text-slate-700", "mb-3"], [1, "font-normal", "text-slate-400"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "text-xs", "px-2", "py-0.5", "bg-indigo-50", "text-indigo-600", "rounded", "font-medium"], [1, "text-xs", "px-2", "py-0.5", "bg-slate-100", "text-slate-500", "rounded"], [1, "px-5", "py-3", "border-t", "border-slate-100", "bg-slate-50/50", "rounded-b-xl", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4", "text-center"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-400"], [1, "w-px", "h-5", "bg-slate-200"], [1, "text-sm", "font-bold", "text-indigo-600"], [1, "text-sm", "font-bold", "text-slate-700"], ["routerLink", "/recruiter/candidates", 1, "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-semibold", "px-3", "py-1.5", "rounded-lg", "hover:bg-indigo-50", "transition-colors", "duration-150"], [1, "w-14", "h-14", "rounded-2xl", "bg-indigo-50", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7", "text-indigo-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25"], [1, "text-sm", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "mb-4"], ["routerLink", "/recruiter/jobs/new", 1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "text-sm", "font-medium", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "transition-colors"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Job Postings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "div", 5);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(9, "svg", 6);
            i0.ɵɵelement(10, "path", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function JobsComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function JobsComponent_Template_select_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.deptFilter, $event) || (ctx.deptFilter = $event); return $event; });
            i0.ɵɵelementStart(13, "option", 10);
            i0.ɵɵtext(14, "All Departments");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(15, JobsComponent_For_16_Template, 2, 2, "option", 11, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(18, "svg", 13);
            i0.ɵɵelement(19, "path", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, " Post Job ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(21, "div", 15);
            i0.ɵɵrepeaterCreate(22, JobsComponent_For_23_Template, 4, 18, "button", 16, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(24, JobsComponent_Conditional_24_Template, 3, 0, "div", 17)(25, JobsComponent_Conditional_25_Template, 10, 0, "div", 18);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2(" ", ctx.totalOpen(), " open \u2022 ", ctx.jobs().length, " total roles ");
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQuery);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.deptFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.departments());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.statusTabs);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.filteredJobs().length > 0 ? 24 : 25);
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.TitleCasePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobsComponent, [{
        type: Component,
        args: [{
                selector: 'app-jobs',
                standalone: true,
                imports: [CommonModule, RouterLink, FormsModule],
                template: `
    <div class="p-6 max-w-screen-2xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-lg font-bold text-slate-900">Job Postings</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ totalOpen() }} open &bull; {{ jobs().length }} total roles
          </p>
        </div>
        <div class="flex items-center gap-2">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
            <input type="text" placeholder="Search jobs…"
              [(ngModel)]="searchQuery"
              class="pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg
                     text-slate-900 placeholder:text-slate-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 w-52" />
          </div>
          <select [(ngModel)]="deptFilter"
            class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                   text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Departments</option>
            @for (dept of departments(); track dept) {
              <option [value]="dept">{{ dept }}</option>
            }
          </select>
          <a routerLink="/recruiter/jobs/new"
             class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                    bg-indigo-600 text-white rounded-lg hover:bg-indigo-700
                    transition-colors duration-150">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            Post Job
          </a>
        </div>
      </div>

      <div class="flex items-center gap-0.5 mb-6 border-b border-slate-200">
        @for (tab of statusTabs; track tab.label) {
          <button (click)="activeFilter.set(tab.value)"
            class="px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors duration-150"
            [class.border-indigo-600]="activeFilter() === tab.value"
            [class.text-indigo-600]="activeFilter() === tab.value"
            [class.border-transparent]="activeFilter() !== tab.value"
            [class.text-slate-500]="activeFilter() !== tab.value">
            {{ tab.label }}
            <span class="ml-1.5 text-xs px-1.5 py-0.5 rounded-full font-semibold"
                  [class.bg-indigo-600]="activeFilter() === tab.value"
                  [class.text-white]="activeFilter() === tab.value"
                  [class.bg-slate-100]="activeFilter() !== tab.value"
                  [class.text-slate-500]="activeFilter() !== tab.value">
              {{ tab.count() }}
            </span>
          </button>
        }
      </div>

      @if (filteredJobs().length > 0) {
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          @for (job of filteredJobs(); track job.id) {
            <div class="bg-white rounded-xl border border-slate-200
                        hover:shadow-md transition-all duration-200 flex flex-col group">

              <div class="p-5 flex-1">
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                       [ngClass]="getDeptStyle(job.department).bg">
                    <svg class="w-5 h-5" [ngClass]="getDeptStyle(job.department).icon"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            [attr.d]="getDeptIcon(job.department)" />
                    </svg>
                  </div>
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                        [ngClass]="getStatusStyle(job.status)">
                    <span class="w-1.5 h-1.5 rounded-full" [ngClass]="getStatusDot(job.status)"></span>
                    {{ job.status | titlecase }}
                  </span>
                </div>

                <h3 class="text-sm font-bold text-slate-900 mb-0.5">{{ job.title }}</h3>
                <p class="text-xs text-slate-500 mb-3">{{ job.department }}</p>

                <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-3">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                    </svg>
                    {{ job.location }}
                  </span>
                  <span>{{ job.experience }}</span>
                  <span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium capitalize">
                    {{ job.type }}
                  </span>
                </div>

                <p class="text-xs font-semibold text-slate-700 mb-3">
                  {{ jobsApi.formatSalary(job.salaryMin) }} – {{ jobsApi.formatSalary(job.salaryMax) }}
                  <span class="font-normal text-slate-400">/ year</span>
                </p>

                <div class="flex flex-wrap gap-1.5">
                  @for (skill of job.skills.slice(0, 4); track skill) {
                    <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded font-medium">
                      {{ skill }}
                    </span>
                  }
                  @if (job.skills.length > 4) {
                    <span class="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded">
                      +{{ job.skills.length - 4 }}
                    </span>
                  }
                </div>
              </div>

              <div class="px-5 py-3 border-t border-slate-100 bg-slate-50/50 rounded-b-xl
                          flex items-center justify-between">
                <div class="flex items-center gap-4 text-center">
                  <div>
                    <p class="text-sm font-bold text-slate-900">{{ job.applicantsCount }}</p>
                    <p class="text-xs text-slate-400">Applied</p>
                  </div>
                  <div class="w-px h-5 bg-slate-200"></div>
                  <div>
                    <p class="text-sm font-bold text-indigo-600">{{ job.shortlistedCount }}</p>
                    <p class="text-xs text-slate-400">Shortlisted</p>
                  </div>
                  <div class="w-px h-5 bg-slate-200"></div>
                  <div>
                    <p class="text-sm font-bold text-slate-700">{{ job.openings }}</p>
                    <p class="text-xs text-slate-400">Openings</p>
                  </div>
                </div>
                <a routerLink="/recruiter/candidates"
                   class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold
                          px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors duration-150">
                  Candidates →
                </a>
              </div>
            </div>
          }
        </div>

      } @else {
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <div class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25"/>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-slate-800 mb-1">No jobs match your filters</h3>
          <p class="text-sm text-slate-500 mb-4">Try adjusting your search or filter.</p>
          <a routerLink="/recruiter/jobs/new"
             class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                    bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Post New Job
          </a>
        </div>
      }
    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(JobsComponent, { className: "JobsComponent", filePath: "src/app/features/recruiter/jobs/jobs.component.ts", lineNumber: 181 }); })();
