import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardService } from '../../../core/services/dashboard.service';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { ActivityFeedComponent } from '../../../shared/components/activity-feed/activity-feed.component';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ["/recruiter/candidates", a0];
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.stage;
const _forTrack2 = ($index, $item) => $item.id;
function RecruiterDashboardComponent_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-stat-card", 13);
} if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    i0.ɵɵproperty("stat", stat_r1);
} }
function RecruiterDashboardComponent_For_35_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", stage_r2.count, " ");
} }
function RecruiterDashboardComponent_For_35_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", stage_r2.count, " ");
} }
function RecruiterDashboardComponent_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "span", 53);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 54)(4, "div", 55);
    i0.ɵɵconditionalCreate(5, RecruiterDashboardComponent_For_35_Conditional_5_Template, 2, 1, "span", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, RecruiterDashboardComponent_For_35_Conditional_6_Template, 2, 1, "span", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 58);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stage_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", stage_r2.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", stage_r2.percentage, "%");
    i0.ɵɵproperty("ngClass", stage_r2.barColorClass);
    i0.ɵɵadvance();
    i0.ɵɵconditional(stage_r2.percentage > 20 ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(stage_r2.percentage <= 20 ? 6 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", stage_r2.percentage, "% ");
} }
function RecruiterDashboardComponent_For_73_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const interviewer_r3 = ctx.$implicit;
    i0.ɵɵproperty("title", interviewer_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", interviewer_r3[0], " ");
} }
function RecruiterDashboardComponent_For_73_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 72);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 73);
    i0.ɵɵelement(2, "path", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Join Meeting ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const interview_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", interview_r4.meetingLink, i0.ɵɵsanitizeUrl);
} }
function RecruiterDashboardComponent_For_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 59);
    i0.ɵɵelement(2, "app-avatar", 60);
    i0.ɵɵelementStart(3, "div", 61)(4, "p", 62);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 63);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 64);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 65);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(11, "svg", 66);
    i0.ɵɵelement(12, "path", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "span", 68);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 69)(16, "span", 52);
    i0.ɵɵtext(17, "Panel:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 70);
    i0.ɵɵrepeaterCreate(19, RecruiterDashboardComponent_For_73_For_20_Template, 2, 2, "div", 71, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 27);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(23, RecruiterDashboardComponent_For_73_Conditional_23_Template, 4, 1, "a", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const interview_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", interview_r4.candidateName)("color", interview_r4.avatarColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", interview_r4.candidateName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(interview_r4.jobTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", interview_r4.mode === "online" ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", interview_r4.mode === "online" ? "\uD83D\uDD17 Online" : "\uD83C\uDFE2 In-office", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", interview_r4.scheduledDate, ", ", interview_r4.scheduledTime, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(interview_r4.interviewers);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(interview_r4.interviewers.join(", "));
    i0.ɵɵadvance();
    i0.ɵɵconditional(interview_r4.meetingLink ? 23 : -1);
} }
function RecruiterDashboardComponent_For_104_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "div", 84);
    i0.ɵɵelement(2, "div", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 86);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const candidate_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", candidate_r5.score, "%");
    i0.ɵɵproperty("ngClass", ctx_r5.getScoreColor(candidate_r5.score));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", candidate_r5.score, " ");
} }
function RecruiterDashboardComponent_For_104_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "Not scored");
    i0.ɵɵelementEnd();
} }
function RecruiterDashboardComponent_For_104_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 50)(1, "td", 75)(2, "div", 23);
    i0.ɵɵelement(3, "app-avatar", 76);
    i0.ɵɵelementStart(4, "div", 77)(5, "p", 62);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 63);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "td", 78)(10, "p", 79);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 52);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td", 78);
    i0.ɵɵelement(15, "app-stage-badge", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 78);
    i0.ɵɵconditionalCreate(17, RecruiterDashboardComponent_For_104_Conditional_17_Template, 5, 4, "div", 69)(18, RecruiterDashboardComponent_For_104_Conditional_18_Template, 2, 0, "span", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 78)(20, "span", 81);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 78)(23, "span", 82);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td", 78)(26, "a", 83);
    i0.ɵɵtext(27, " View \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const candidate_r5 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", candidate_r5.name)("color", candidate_r5.avatarColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", candidate_r5.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", candidate_r5.currentRole, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", candidate_r5.jobTitle, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(candidate_r5.department);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("stage", candidate_r5.stage);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(candidate_r5.score > 0 ? 17 : 18);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(candidate_r5.assignedTo);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.formatDate(candidate_r5.appliedDate), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, candidate_r5.id));
} }
export class RecruiterDashboardComponent {
    constructor() {
        this.dashboardService = inject(DashboardService);
        this.candidatesApi = inject(CandidatesApiService);
        this.auth = inject(AuthService);
        this.firstName = signal(this.auth.userName().split(' ')[0] || 'Recruiter', ...(ngDevMode ? [{ debugName: "firstName" }] : []));
        this.stats = signal([], ...(ngDevMode ? [{ debugName: "stats" }] : []));
        this.pipelineStages = signal([], ...(ngDevMode ? [{ debugName: "pipelineStages" }] : []));
        this.recentActivity = signal([], ...(ngDevMode ? [{ debugName: "recentActivity" }] : []));
        this.upcomingInterviews = signal([], ...(ngDevMode ? [{ debugName: "upcomingInterviews" }] : []));
        this.recentCandidates = signal([], ...(ngDevMode ? [{ debugName: "recentCandidates" }] : []));
        this.totalCandidates = signal(0, ...(ngDevMode ? [{ debugName: "totalCandidates" }] : []));
        this.selectedCount = signal(0, ...(ngDevMode ? [{ debugName: "selectedCount" }] : []));
        this.rejectedCount = signal(0, ...(ngDevMode ? [{ debugName: "rejectedCount" }] : []));
        this.conversionRate = signal(0, ...(ngDevMode ? [{ debugName: "conversionRate" }] : []));
        this.today = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        });
    }
    async ngOnInit() {
        const [dashboard, candidates] = await Promise.all([
            this.dashboardService.getRecruiterDashboard(),
            this.candidatesApi.loadAll(),
        ]);
        this.stats.set(dashboard.statCards ?? []);
        this.pipelineStages.set(dashboard.pipelineStages ?? []);
        this.recentActivity.set(dashboard.recentActivity ?? []);
        this.upcomingInterviews.set(dashboard.upcomingInterviews ?? []);
        this.recentCandidates.set(candidates.slice(0, 7));
        this.totalCandidates.set(candidates.filter(c => c.stage !== 'rejected').length);
        this.selectedCount.set(candidates.filter(c => c.stage === 'selected').length);
        this.rejectedCount.set(candidates.filter(c => c.stage === 'rejected').length);
        this.conversionRate.set(candidates.length
            ? Math.round((this.selectedCount() / candidates.length) * 100)
            : 0);
    }
    formatDate(isoDate) {
        return new Date(isoDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
    }
    getScoreColor(score) {
        if (score >= 80)
            return 'bg-emerald-500';
        if (score >= 60)
            return 'bg-amber-400';
        return 'bg-rose-400';
    }
    static { this.ɵfac = function RecruiterDashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecruiterDashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecruiterDashboardComponent, selectors: [["app-recruiter-dashboard"]], decls: 108, vars: 9, consts: [[1, "p-6", "space-y-6", "max-w-screen-2xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "font-medium", "text-slate-700"], [1, "flex", "items-center", "gap-2", "flex-shrink-0"], [1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "hover:border-slate-300", "normal-case", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"], ["routerLink", "/recruiter/jobs/new", 1, "btn", "btn-sm", "btn-primary", "normal-case", "font-medium", "px-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "xl:grid-cols-4", "gap-4"], [3, "stat"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4"], [1, "lg:col-span-2", "bg-white", "rounded-xl", "border", "border-slate-200", "p-6"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-0.5"], ["routerLink", "/recruiter/pipeline", 1, "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-medium", "flex", "items-center", "gap-1"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"], [1, "space-y-3"], [1, "flex", "items-center", "gap-3"], [1, "mt-5", "pt-4", "border-t", "border-slate-100", "flex", "items-center", "gap-6"], [1, "text-center"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500"], [1, "text-lg", "font-bold", "text-emerald-600"], [1, "text-lg", "font-bold", "text-rose-500"], [1, "text-lg", "font-bold", "text-indigo-600"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6"], ["title", "Live", 1, "w-2", "h-2", "bg-emerald-500", "rounded-full", "animate-pulse"], [3, "activities"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "ml-2", "text-xs", "font-normal", "text-slate-500"], ["routerLink", "/recruiter/interviews", 1, "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-medium"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-3", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "hover:shadow-card-hover", "transition-shadow", "duration-200"], [1, "bg-white", "rounded-xl", "border", "border-slate-200"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-slate-100"], ["routerLink", "/recruiter/candidates", 1, "btn", "btn-xs", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3.5", "h-3.5", "ml-1"], [1, "overflow-x-auto"], [1, "w-full"], [1, "border-b", "border-slate-100", "bg-slate-50/50"], [1, "text-left", "px-6", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider", "w-56"], [1, "text-left", "px-4", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-4", "py-3"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/50", "transition-colors", "duration-100", "group"], [1, "px-6", "py-3", "border-t", "border-slate-100", "bg-slate-50/30"], [1, "text-xs", "text-slate-400"], [1, "text-xs", "text-slate-500", "w-24", "text-right", "flex-shrink-0"], [1, "flex-1", "h-6", "bg-slate-50", "rounded-md", "overflow-hidden", "border", "border-slate-100", "relative"], [1, "h-full", "rounded-md", "transition-all", "duration-700", "ease-out", "flex", "items-center", "pl-2", 3, "ngClass"], [1, "text-xs", "font-semibold", "text-white"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-xs", "font-semibold", "text-slate-600"], [1, "text-xs", "font-medium", "text-slate-400", "w-10", "flex-shrink-0"], [1, "flex", "items-start", "gap-3", "mb-3"], ["size", "md", 3, "name", "color"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-900", "truncate"], [1, "text-xs", "text-slate-500", "truncate"], [1, "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", "flex-shrink-0", 3, "ngClass"], [1, "flex", "items-center", "gap-1.5", "mb-3"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5", "text-slate-400", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-slate-600", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "flex", "-space-x-1.5"], [1, "w-6", "h-6", "rounded-full", "bg-slate-200", "border-2", "border-white", "flex", "items-center", "justify-center", "text-xs", "font-semibold", "text-slate-600", 3, "title"], ["target", "_blank", 1, "mt-3", "flex", "items-center", "gap-1.5", "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-medium", 3, "href"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"], [1, "px-6", "py-3.5"], ["size", "sm", 3, "name", "color"], [1, "min-w-0"], [1, "px-4", "py-3.5"], [1, "text-sm", "text-slate-700", "truncate", "max-w-40"], [3, "stage"], [1, "text-sm", "text-slate-600"], [1, "text-sm", "text-slate-500"], [1, "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-150", "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-medium", "whitespace-nowrap", 3, "routerLink"], [1, "w-14", "h-1.5", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", 3, "ngClass"], [1, "text-sm", "font-medium", "text-slate-700"]], template: function RecruiterDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, " Here's your hiring pipeline for ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 5)(10, "button", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(11, "svg", 7);
            i0.ɵɵelement(12, "path", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " Import CSV ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "a", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(15, "svg", 10);
            i0.ɵɵelement(16, "path", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " Post a Job ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "div", 12);
            i0.ɵɵrepeaterCreate(19, RecruiterDashboardComponent_For_20_Template, 1, 1, "app-stat-card", 13, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div")(25, "h2", 17);
            i0.ɵɵtext(26, "Hiring Pipeline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p", 18);
            i0.ɵɵtext(28, "Active candidates across all stages");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "a", 19);
            i0.ɵɵtext(30, " View board ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(31, "svg", 20);
            i0.ɵɵelement(32, "path", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(33, "div", 22);
            i0.ɵɵrepeaterCreate(34, RecruiterDashboardComponent_For_35_Template, 9, 7, "div", 23, _forTrack1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 24)(37, "div", 25)(38, "p", 26);
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p", 27);
            i0.ɵɵtext(41, "Total Active");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 25)(43, "p", 28);
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "p", 27);
            i0.ɵɵtext(46, "Selected");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 25)(48, "p", 29);
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "p", 27);
            i0.ɵɵtext(51, "Rejected");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 25)(53, "p", 30);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "p", 27);
            i0.ɵɵtext(56, "Conversion Rate");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(57, "div", 31)(58, "div", 16)(59, "h2", 17);
            i0.ɵɵtext(60, "Recent Activity");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(61, "span", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(62, "app-activity-feed", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "div")(64, "div", 34)(65, "h2", 17);
            i0.ɵɵtext(66, " Upcoming Interviews ");
            i0.ɵɵelementStart(67, "span", 35);
            i0.ɵɵtext(68, "\u2014 Today");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "a", 36);
            i0.ɵɵtext(70, " View schedule \u2192 ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "div", 37);
            i0.ɵɵrepeaterCreate(72, RecruiterDashboardComponent_For_73_Template, 24, 10, "div", 38, _forTrack2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "div", 39)(75, "div", 40)(76, "div")(77, "h2", 17);
            i0.ɵɵtext(78, "Recent Candidates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "p", 18);
            i0.ɵɵtext(80, "Latest activity across all open roles");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "a", 41);
            i0.ɵɵtext(82, " View all ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(83, "svg", 42);
            i0.ɵɵelement(84, "path", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(85, "div", 43)(86, "table", 44)(87, "thead")(88, "tr", 45)(89, "th", 46);
            i0.ɵɵtext(90, "Candidate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "th", 47);
            i0.ɵɵtext(92, "Applied For");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "th", 47);
            i0.ɵɵtext(94, "Stage");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "th", 47);
            i0.ɵɵtext(96, "Score");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "th", 47);
            i0.ɵɵtext(98, "Assigned To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "th", 47);
            i0.ɵɵtext(100, "Applied");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(101, "th", 48);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(102, "tbody", 49);
            i0.ɵɵrepeaterCreate(103, RecruiterDashboardComponent_For_104_Template, 28, 13, "tr", 50, _forTrack2);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(105, "div", 51)(106, "p", 52);
            i0.ɵɵtext(107);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Good morning, ", ctx.firstName());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.today);
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.stats());
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.pipelineStages());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalCandidates());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.selectedCount());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.rejectedCount());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.conversionRate(), "%");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("activities", ctx.recentActivity());
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.upcomingInterviews());
            i0.ɵɵadvance(31);
            i0.ɵɵrepeater(ctx.recentCandidates());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate2(" Showing ", ctx.recentCandidates().length, " of ", ctx.totalCandidates(), " candidates ");
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink,
            StatCardComponent,
            StageBadgeComponent,
            AvatarComponent,
            ActivityFeedComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecruiterDashboardComponent, [{
        type: Component,
        args: [{
                selector: 'app-recruiter-dashboard',
                standalone: true,
                imports: [
                    CommonModule,
                    RouterLink,
                    StatCardComponent,
                    StageBadgeComponent,
                    AvatarComponent,
                    ActivityFeedComponent,
                ],
                template: `
    <div class="p-6 space-y-6 max-w-screen-2xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-xl font-bold text-slate-900">Good morning, {{ firstName() }}</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            Here's your hiring pipeline for
            <span class="font-medium text-slate-700">{{ today }}</span>
          </p>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 hover:border-slate-300 normal-case font-medium">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Import CSV
          </button>
          <a routerLink="/recruiter/jobs/new"
             class="btn btn-sm btn-primary normal-case font-medium px-4">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Post a Job
          </a>
        </div>
      </div>


      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        @for (stat of stats(); track stat.label) {
          <app-stat-card [stat]="stat" />
        }
      </div>


      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">

          <div class="flex items-center justify-between mb-5">
            <div>
              <h2 class="text-sm font-semibold text-slate-900">Hiring Pipeline</h2>
              <p class="text-xs text-slate-500 mt-0.5">Active candidates across all stages</p>
            </div>
            <a routerLink="/recruiter/pipeline"
               class="text-xs text-indigo-600 hover:text-indigo-700 font-medium
                      flex items-center gap-1">
              View board
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div class="space-y-3">
            @for (stage of pipelineStages(); track stage.stage) {
              <div class="flex items-center gap-3">

                <span class="text-xs text-slate-500 w-24 text-right flex-shrink-0">
                  {{ stage.label }}
                </span>

                <div class="flex-1 h-6 bg-slate-50 rounded-md overflow-hidden
                            border border-slate-100 relative">
                  <div
                    class="h-full rounded-md transition-all duration-700 ease-out flex items-center pl-2"
                    [ngClass]="stage.barColorClass"
                    [style.width.%]="stage.percentage"
                  >
                    @if (stage.percentage > 20) {
                      <span class="text-xs font-semibold text-white">
                        {{ stage.count }}
                      </span>
                    }
                  </div>
                  @if (stage.percentage <= 20) {
                    <span class="absolute right-2 top-1/2 -translate-y-1/2
                                 text-xs font-semibold text-slate-600">
                      {{ stage.count }}
                    </span>
                  }
                </div>

                <span class="text-xs font-medium text-slate-400 w-10 flex-shrink-0">
                  {{ stage.percentage }}%
                </span>

              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 flex items-center gap-6">
            <div class="text-center">
              <p class="text-lg font-bold text-slate-900">{{ totalCandidates() }}</p>
              <p class="text-xs text-slate-500">Total Active</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-emerald-600">{{ selectedCount() }}</p>
              <p class="text-xs text-slate-500">Selected</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-rose-500">{{ rejectedCount() }}</p>
              <p class="text-xs text-slate-500">Rejected</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-indigo-600">{{ conversionRate() }}%</p>
              <p class="text-xs text-slate-500">Conversion Rate</p>
            </div>
          </div>

        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-sm font-semibold text-slate-900">Recent Activity</h2>
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                  title="Live"></span>
          </div>
          <app-activity-feed [activities]="recentActivity()" />
        </div>

      </div>


      <div>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm font-semibold text-slate-900">
            Upcoming Interviews
            <span class="ml-2 text-xs font-normal text-slate-500">— Today</span>
          </h2>
          <a routerLink="/recruiter/interviews"
             class="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
            View schedule →
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          @for (interview of upcomingInterviews(); track interview.id) {
            <div class="bg-white rounded-xl border border-slate-200 p-4
                        hover:shadow-card-hover transition-shadow duration-200">

              <div class="flex items-start gap-3 mb-3">
                <app-avatar
                  [name]="interview.candidateName"
                  [color]="interview.avatarColor"
                  size="md"
                />
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-slate-900 truncate">
                    {{ interview.candidateName }}
                  </p>
                  <p class="text-xs text-slate-500 truncate">{{ interview.jobTitle }}</p>
                </div>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                      [ngClass]="interview.mode === 'online'
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-slate-100 text-slate-600'">
                  {{ interview.mode === 'online' ? '🔗 Online' : '🏢 In-office' }}
                </span>
              </div>

              <div class="flex items-center gap-1.5 mb-3">
                <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0"
                     fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs text-slate-600 font-medium">
                  {{ interview.scheduledDate }}, {{ interview.scheduledTime }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-xs text-slate-400">Panel:</span>
                <div class="flex -space-x-1.5">
                  @for (interviewer of interview.interviewers; track interviewer) {
                    <div class="w-6 h-6 rounded-full bg-slate-200 border-2 border-white
                                flex items-center justify-center text-xs font-semibold
                                text-slate-600"
                         [title]="interviewer">
                      {{ interviewer[0] }}
                    </div>
                  }
                </div>
                <span class="text-xs text-slate-500">{{ interview.interviewers.join(', ') }}</span>
              </div>

              @if (interview.meetingLink) {
                <a [href]="interview.meetingLink"
                   target="_blank"
                   class="mt-3 flex items-center gap-1.5 text-xs text-indigo-600
                          hover:text-indigo-700 font-medium">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  Join Meeting
                </a>
              }

            </div>
          }
        </div>
      </div>


      <div class="bg-white rounded-xl border border-slate-200">

        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 class="text-sm font-semibold text-slate-900">Recent Candidates</h2>
            <p class="text-xs text-slate-500 mt-0.5">Latest activity across all open roles</p>
          </div>
          <a routerLink="/recruiter/candidates"
             class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                    hover:bg-slate-50 normal-case font-medium">
            View all
            <svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-100 bg-slate-50/50">
                <th class="text-left px-6 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider w-56">Candidate</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Applied For</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Stage</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Score</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Assigned To</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Applied</th>
                <th class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              @for (candidate of recentCandidates(); track candidate.id) {
                <tr class="hover:bg-slate-50/50 transition-colors duration-100 group">

                  <td class="px-6 py-3.5">
                    <div class="flex items-center gap-3">
                      <app-avatar
                        [name]="candidate.name"
                        [color]="candidate.avatarColor"
                        size="sm"
                      />
                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-slate-900 truncate">
                          {{ candidate.name }}
                        </p>
                        <p class="text-xs text-slate-500 truncate">
                          {{ candidate.currentRole }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td class="px-4 py-3.5">
                    <p class="text-sm text-slate-700 truncate max-w-40">
                      {{ candidate.jobTitle }}
                    </p>
                    <p class="text-xs text-slate-400">{{ candidate.department }}</p>
                  </td>

                  <td class="px-4 py-3.5">
                    <app-stage-badge [stage]="candidate.stage" />
                  </td>

                  <td class="px-4 py-3.5">
                    @if (candidate.score > 0) {
                      <div class="flex items-center gap-2">
                        <div class="w-14 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            class="h-full rounded-full"
                            [ngClass]="getScoreColor(candidate.score)"
                            [style.width.%]="candidate.score"
                          ></div>
                        </div>
                        <span class="text-sm font-medium text-slate-700">
                          {{ candidate.score }}
                        </span>
                      </div>
                    } @else {
                      <span class="text-xs text-slate-400">Not scored</span>
                    }
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-600">{{ candidate.assignedTo }}</span>
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-500">
                      {{ formatDate(candidate.appliedDate) }}
                    </span>
                  </td>

                  <td class="px-4 py-3.5">
                    <a
                      [routerLink]="['/recruiter/candidates', candidate.id]"
                      class="opacity-0 group-hover:opacity-100 transition-opacity duration-150
                             text-xs text-indigo-600 hover:text-indigo-700 font-medium
                             whitespace-nowrap"
                    >
                      View →
                    </a>
                  </td>

                </tr>
              }
            </tbody>
          </table>
        </div>

        <div class="px-6 py-3 border-t border-slate-100 bg-slate-50/30">
          <p class="text-xs text-slate-400">
            Showing {{ recentCandidates().length }} of {{ totalCandidates() }} candidates
          </p>
        </div>

      </div>

    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecruiterDashboardComponent, { className: "RecruiterDashboardComponent", filePath: "src/app/features/recruiter/dashboard/dashboard.component.ts", lineNumber: 371 }); })();
