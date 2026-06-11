import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { DashboardService } from '../../../core/services/dashboard.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.key;
const _forTrack2 = ($index, $item) => $item.name;
function AnalyticsComponent_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AnalyticsComponent_For_10_Template_button_click_0_listener() { const p_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activePeriod.set(p_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activePeriod() === p_r2 ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", p_r2, " ");
} }
function AnalyticsComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "p", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 45)(6, "span", 46);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 47);
    i0.ɵɵtext(9, "vs last month");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const kpi_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", kpi_r4.valueColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(kpi_r4.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(kpi_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", kpi_r4.trend === "up" ? "text-emerald-600" : "text-rose-500");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", kpi_r4.trend === "up" ? "\u2191" : "\u2193", " ", kpi_r4.change, " ");
} }
function AnalyticsComponent_For_30_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(stage_r5.count);
} }
function AnalyticsComponent_For_30_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", stage_r5.count, " ");
} }
function AnalyticsComponent_For_30_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" (", stage_r5.convRate, "%) ");
} }
function AnalyticsComponent_For_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 49)(4, "div", 50);
    i0.ɵɵconditionalCreate(5, AnalyticsComponent_For_30_Conditional_5_Template, 2, 1, "span", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, AnalyticsComponent_For_30_Conditional_6_Template, 2, 1, "span", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 53)(8, "span", 54);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, AnalyticsComponent_For_30_Conditional_10_Template, 2, 1, "span", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stage_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", stage_r5.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", stage_r5.pct, "%")("background-color", stage_r5.color);
    i0.ɵɵadvance();
    i0.ɵɵconditional(stage_r5.pct > 18 ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(stage_r5.pct <= 18 ? 6 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", stage_r5.pct, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(stage_r5.convRate !== null ? 10 : -1);
} }
function AnalyticsComponent_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "p", 56);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 57);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", s_r6.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r6.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r6.label);
} }
function AnalyticsComponent_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 58)(2, "span", 59);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 60);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 61);
    i0.ɵɵelement(7, "div", 62);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const dept_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(dept_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dept_r7.count);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", dept_r7.pct, "%")("background-color", dept_r7.color);
} }
function AnalyticsComponent_For_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelement(1, "div", 63);
    i0.ɵɵelementStart(2, "span", 64);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", s_r8.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r8.label);
} }
function AnalyticsComponent_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 65)(2, "div", 66)(3, "span", 67);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 64);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 60);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 68);
    i0.ɵɵelement(10, "div", 69);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const range_r9 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", range_r9.badgeClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", range_r9.label, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(range_r9.range);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", range_r9.count, " candidates ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", range_r9.pct, "%");
    i0.ɵɵproperty("ngClass", range_r9.barClass);
} }
function AnalyticsComponent_For_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 71)(4, "div", 58)(5, "span", 72);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 64);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 61);
    i0.ɵɵelement(10, "div", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 74)(12, "span", 47);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 46);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const rec_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", rec_r10.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", rec_r10.name.split(" ")[0][0], "", rec_r10.name.split(" ")[1][0], " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(rec_r10.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", rec_r10.interviews, " interviews");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", rec_r10.pct, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", rec_r10.feedback, " feedback submitted ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", rec_r10.rate >= 80 ? "text-emerald-600" : "text-amber-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", rec_r10.rate, "% rate ");
} }
function AnalyticsComponent_For_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 75)(2, "span", 76);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 71)(5, "div", 77)(6, "p", 60);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 78);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 79);
    i0.ɵɵelement(11, "div", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 80);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const reason_r11 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-color", reason_r11.iconBg);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(reason_r11.icon);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(reason_r11.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", reason_r11.count, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", reason_r11.count / ctx_r2.rejectedCount() * 100, "%")("background-color", reason_r11.barColor);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.Math.round(reason_r11.count / ctx_r2.rejectedCount() * 100), "% of rejections ");
} }
export class AnalyticsComponent {
    constructor() {
        this.candidatesApi = inject(CandidatesApiService);
        this.dashboardService = inject(DashboardService);
        this.analytics = signal(null, ...(ngDevMode ? [{ debugName: "analytics" }] : []));
        this.Math = Math;
        this.activePeriod = signal('Current', ...(ngDevMode ? [{ debugName: "activePeriod" }] : []));
        this.periods = ['Current', 'This quarter', 'Last 6 mo'];
        this.kpiCards = computed(() => [
            { label: 'Avg. Time to Hire', value: `${this.analytics()?.averageDaysToHire ?? 0} days`, valueColor: 'text-slate-900', trend: 'down', change: 'live data' },
            { label: 'Applications', value: this.analytics()?.totalApplicationsThisMonth ?? 0, valueColor: 'text-indigo-600', trend: 'up', change: 'this month' },
            { label: 'Offer Acceptance', value: `${this.analytics()?.offerAcceptanceRate ?? 0}%`, valueColor: 'text-emerald-600', trend: 'up', change: 'current rate' },
            { label: 'Hires', value: this.analytics()?.totalHiresThisMonth ?? 0, valueColor: 'text-amber-600', trend: 'up', change: 'this month' },
        ], ...(ngDevMode ? [{ debugName: "kpiCards" }] : []));
        this.funnelData = computed(() => {
            const candidates = this.candidatesApi.candidates();
            const total = candidates.length;
            const stageData = [
                { key: 'applied', label: 'Applied', color: '#60A5FA', order: 0 },
                { key: 'shortlisted', label: 'Shortlisted', color: '#818CF8', order: 1 },
                { key: 'assessment', label: 'Assessment', color: '#FCD34D', order: 2 },
                { key: 'interview', label: 'Interview', color: '#A78BFA', order: 3 },
                { key: 'hr_round', label: 'HR Round', color: '#FB923C', order: 4 },
                { key: 'selected', label: 'Selected', color: '#34D399', order: 5 },
            ];
            const stageOrder = ['applied', 'shortlisted', 'assessment', 'interview', 'hr_round', 'selected'];
            return stageData.map(s => {
                const idx = stageOrder.indexOf(s.key);
                const count = candidates.filter(c => stageOrder.indexOf(c.stage) >= idx && c.stage !== 'rejected').length;
                const prevCount = idx === 0 ? total : (() => {
                    const prevIdx = idx - 1;
                    return candidates.filter(c => stageOrder.indexOf(c.stage) >= prevIdx && c.stage !== 'rejected').length;
                })();
                return {
                    ...s,
                    count,
                    pct: Math.round((count / (total || 1)) * 100),
                    convRate: prevCount > 0 ? Math.round((count / prevCount) * 100) : null,
                };
            });
        }, ...(ngDevMode ? [{ debugName: "funnelData" }] : []));
        this.funnelSummary = computed(() => {
            const cs = this.candidatesApi.candidates();
            const total = cs.length;
            const selected = cs.filter(c => c.stage === 'selected').length;
            const rejected = cs.filter(c => c.stage === 'rejected').length;
            return [
                { label: 'Total', value: total, color: 'text-slate-900' },
                { label: 'Active', value: total - rejected, color: 'text-indigo-600' },
                { label: 'Selected', value: selected, color: 'text-emerald-600' },
                { label: 'Rejected', value: rejected, color: 'text-rose-500' },
            ];
        }, ...(ngDevMode ? [{ debugName: "funnelSummary" }] : []));
        this.departmentData = computed(() => {
            const cs = this.candidatesApi.candidates();
            const depts = ['Engineering', 'Design', 'Product', 'Data', 'Infrastructure'];
            const colors = ['#6366F1', '#F59E0B', '#10B981', '#0EA5E9', '#8B5CF6'];
            const maxCount = Math.max(...depts.map(d => cs.filter(c => c.department === d).length), 1);
            return depts.map((dept, i) => ({
                name: dept,
                count: cs.filter(c => c.department === dept).length,
                pct: Math.round((cs.filter(c => c.department === dept).length / maxCount) * 100),
                color: colors[i],
            })).sort((a, b) => b.count - a.count);
        }, ...(ngDevMode ? [{ debugName: "departmentData" }] : []));
        this.stageLegend = [
            { label: 'Active', color: '#6366F1' },
            { label: 'Selected', color: '#10B981' },
            { label: 'Rejected', color: '#EF4444' },
        ];
        this.scoreRanges = computed(() => {
            const scored = this.candidatesApi.candidates().filter(c => c.score > 0);
            const total = scored.length || 1;
            return [
                { label: 'Excellent', range: '80–100', count: scored.filter(c => c.score >= 80).length, barClass: 'bg-emerald-500', badgeClass: 'bg-emerald-100 text-emerald-700', pct: 0 },
                { label: 'Good', range: '60–79', count: scored.filter(c => c.score >= 60 && c.score < 80).length, barClass: 'bg-amber-400', badgeClass: 'bg-amber-100 text-amber-700', pct: 0 },
                { label: 'Average', range: '40–59', count: scored.filter(c => c.score >= 40 && c.score < 60).length, barClass: 'bg-orange-400', badgeClass: 'bg-orange-100 text-orange-700', pct: 0 },
                { label: 'Below avg', range: '0–39', count: scored.filter(c => c.score > 0 && c.score < 40).length, barClass: 'bg-rose-400', badgeClass: 'bg-rose-100 text-rose-700', pct: 0 },
            ].map(r => ({ ...r, pct: Math.round((r.count / total) * 100) }));
        }, ...(ngDevMode ? [{ debugName: "scoreRanges" }] : []));
        this.averageScore = computed(() => {
            const scored = this.candidatesApi.candidates().filter(c => c.score > 0);
            if (!scored.length)
                return 0;
            return Math.round(scored.reduce((s, c) => s + c.score, 0) / scored.length);
        }, ...(ngDevMode ? [{ debugName: "averageScore" }] : []));
        this.recruiterActivity = computed(() => [], ...(ngDevMode ? [{ debugName: "recruiterActivity" }] : []));
        this.rejectedCount = computed(() => this.candidatesApi.candidates().filter(c => c.stage === 'rejected').length, ...(ngDevMode ? [{ debugName: "rejectedCount" }] : []));
        this.rejectionReasons = [];
    }
    async ngOnInit() {
        const [analytics] = await Promise.all([
            this.dashboardService.getAnalytics(),
            this.candidatesApi.loadAll(),
        ]);
        this.analytics.set(analytics);
    }
    static { this.ɵfac = function AnalyticsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnalyticsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 92, vars: 2, consts: [[1, "p-6", "space-y-6", "max-w-screen-xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "flex", "gap-2"], [1, "flex", "items-center", "gap-1", "bg-slate-100", "p-1", "rounded-lg"], [1, "px-3", "py-1.5", "rounded-md", "text-xs", "font-semibold", "transition-all", 3, "ngClass"], [1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5"], [1, "lg:col-span-2", "bg-white", "rounded-xl", "border", "border-slate-200", "p-6"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-0.5"], ["routerLink", "/recruiter/pipeline", 1, "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-semibold"], [1, "space-y-3.5"], [1, "flex", "items-center", "gap-3"], [1, "mt-5", "pt-4", "border-t", "border-slate-100", "grid", "grid-cols-4", "gap-4"], [1, "text-center"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6"], [1, "text-sm", "font-bold", "text-slate-900", "mb-1"], [1, "text-xs", "text-slate-500", "mb-4"], [1, "space-y-3"], [1, "mt-5", "pt-4", "border-t", "border-slate-100"], [1, "text-xs", "text-slate-500", "font-medium", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "items-center", "gap-1.5"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-5"], [1, "text-xs", "text-slate-500", "mb-5"], [1, "space-y-4"], [1, "mt-5", "pt-4", "border-t", "border-slate-100", "flex", "items-center", "justify-between"], [1, "text-xs", "text-slate-500", "font-medium"], [1, "text-lg", "font-bold", "text-indigo-600"], [1, "flex", "items-center", "justify-between"], [1, "text-base", "font-bold", "text-slate-900", "mt-0.5"], [1, "text-right"], [1, "text-base", "font-bold", "text-emerald-600", "mt-0.5"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "flex", "items-start", "gap-3", "p-4", "bg-slate-50", "rounded-xl", "border", "border-slate-100"], [1, "px-3", "py-1.5", "rounded-md", "text-xs", "font-semibold", "transition-all", 3, "click", "ngClass"], [1, "text-2xl", "font-bold", 3, "ngClass"], [1, "text-sm", "font-medium", "text-slate-600", "mt-1"], [1, "flex", "items-center", "gap-1", "mt-2"], [1, "text-xs", "font-semibold", 3, "ngClass"], [1, "text-xs", "text-slate-400"], [1, "text-xs", "text-slate-500", "font-medium", "w-24", "text-right", "flex-shrink-0"], [1, "flex-1", "h-8", "bg-slate-50", "rounded-lg", "overflow-hidden", "border", "border-slate-100", "relative"], [1, "h-full", "rounded-lg", "flex", "items-center", "px-3", "transition-all", "duration-700"], [1, "text-xs", "font-bold", "text-white"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-bold", "text-slate-600"], [1, "flex", "items-center", "gap-2", "w-20", "flex-shrink-0"], [1, "text-xs", "font-semibold", "text-slate-500"], [1, "text-xs", "text-slate-400", "hidden", "md:inline"], [1, "text-lg", "font-bold", 3, "ngClass"], [1, "text-xs", "text-slate-400", "font-medium", "mt-0.5"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-xs", "font-semibold", "text-slate-700"], [1, "text-xs", "font-bold", "text-slate-900"], [1, "h-2", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-700"], [1, "w-2", "h-2", "rounded-full"], [1, "text-xs", "text-slate-500"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], [1, "h-3", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-700", 3, "ngClass"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "text-xs", "font-semibold", "text-slate-800"], [1, "h-full", "rounded-full", "bg-indigo-500", "transition-all", "duration-700"], [1, "flex", "items-center", "justify-between", "mt-1"], [1, "w-9", "h-9", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-base"], [1, "flex", "items-center", "justify-between", "gap-2", "mb-1"], [1, "text-sm", "font-bold", "text-slate-700", "flex-shrink-0"], [1, "h-1.5", "bg-slate-200", "rounded-full", "overflow-hidden"], [1, "text-xs", "text-slate-500", "mt-1.5"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Hiring Analytics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, " Live data \u00B7 All Departments ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "div", 5);
            i0.ɵɵrepeaterCreate(9, AnalyticsComponent_For_10_Template, 2, 2, "button", 6, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(12, "svg", 8);
            i0.ɵɵelement(13, "path", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, " Export PDF ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "div", 10);
            i0.ɵɵrepeaterCreate(16, AnalyticsComponent_For_17_Template, 10, 6, "div", 11, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div")(22, "h2", 15);
            i0.ɵɵtext(23, "Hiring Funnel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p", 16);
            i0.ɵɵtext(25, "Candidates per stage \u2014 current pipeline");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "a", 17);
            i0.ɵɵtext(27, " View board \u2192 ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 18);
            i0.ɵɵrepeaterCreate(29, AnalyticsComponent_For_30_Template, 11, 9, "div", 19, _forTrack1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 20);
            i0.ɵɵrepeaterCreate(32, AnalyticsComponent_For_33_Template, 5, 3, "div", 21, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 22)(35, "h2", 23);
            i0.ɵɵtext(36, "By Department");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p", 24);
            i0.ɵɵtext(38, "Candidates per team");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 25);
            i0.ɵɵrepeaterCreate(40, AnalyticsComponent_For_41_Template, 8, 6, "div", null, _forTrack2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 26)(43, "p", 27);
            i0.ɵɵtext(44, "Stage Mix");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 28);
            i0.ɵɵrepeaterCreate(46, AnalyticsComponent_For_47_Template, 4, 3, "div", 29, _forTrack0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(48, "div", 30)(49, "div", 22)(50, "h2", 23);
            i0.ɵɵtext(51, "Score Distribution");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "p", 31);
            i0.ɵɵtext(53, "Composite score breakdown across candidates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 32);
            i0.ɵɵrepeaterCreate(55, AnalyticsComponent_For_56_Template, 11, 7, "div", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "div", 33)(58, "span", 34);
            i0.ɵɵtext(59, "Average Score");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "span", 35);
            i0.ɵɵtext(61);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(62, "div", 22)(63, "h2", 23);
            i0.ɵɵtext(64, "Recruiter Activity");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "p", 31);
            i0.ɵɵtext(66, "Interviews scheduled and feedback submitted");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div", 32);
            i0.ɵɵrepeaterCreate(68, AnalyticsComponent_For_69_Template, 16, 11, "div", 19, _forTrack2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 26)(71, "div", 36)(72, "div")(73, "p", 34);
            i0.ɵɵtext(74, "Avg. Time to Hire");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "p", 37);
            i0.ɵɵtext(76, "18 days");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "div", 38)(78, "p", 34);
            i0.ɵɵtext(79, "Offer Acceptance Rate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "p", 39);
            i0.ɵɵtext(81, "82%");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(82, "div", 22)(83, "div", 14)(84, "div")(85, "h2", 15);
            i0.ɵɵtext(86, "Rejection Reasons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "p", 16);
            i0.ɵɵtext(88);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(89, "div", 40);
            i0.ɵɵrepeaterCreate(90, AnalyticsComponent_For_91_Template, 14, 10, "div", 41, _forTrack0);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.periods);
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.kpiCards());
            i0.ɵɵadvance(13);
            i0.ɵɵrepeater(ctx.funnelData());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.funnelSummary());
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.departmentData());
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.stageLegend);
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.scoreRanges());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.averageScore());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.recruiterActivity());
            i0.ɵɵadvance(20);
            i0.ɵɵtextInterpolate1(" Why candidates were not progressed \u2014 ", ctx.rejectedCount(), " total rejections ");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.rejectionReasons);
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsComponent, [{
        type: Component,
        args: [{
                selector: 'app-analytics',
                standalone: true,
                imports: [CommonModule, RouterLink],
                template: `
    <div class="p-6 space-y-6 max-w-screen-xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-xl font-bold text-slate-900">Hiring Analytics</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            Live data · All Departments
          </p>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            @for (p of periods; track p) {
              <button (click)="activePeriod.set(p)"
                class="px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
                [ngClass]="activePeriod() === p
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'">
                {{ p }}
              </button>
            }
          </div>
          <button class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        @for (kpi of kpiCards(); track kpi.label) {
          <div class="bg-white rounded-xl border border-slate-200 p-5">
            <p class="text-2xl font-bold" [ngClass]="kpi.valueColor">{{ kpi.value }}</p>
            <p class="text-sm font-medium text-slate-600 mt-1">{{ kpi.label }}</p>
            <div class="flex items-center gap-1 mt-2">
              <span class="text-xs font-semibold"
                    [ngClass]="kpi.trend === 'up' ? 'text-emerald-600' : 'text-rose-500'">
                {{ kpi.trend === 'up' ? '↑' : '↓' }} {{ kpi.change }}
              </span>
              <span class="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        }
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
          <div class="flex items-center justify-between mb-5">
            <div>
              <h2 class="text-sm font-bold text-slate-900">Hiring Funnel</h2>
              <p class="text-xs text-slate-500 mt-0.5">Candidates per stage — current pipeline</p>
            </div>
            <a routerLink="/recruiter/pipeline"
               class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
              View board →
            </a>
          </div>

          <div class="space-y-3.5">
            @for (stage of funnelData(); track stage.key) {
              <div class="flex items-center gap-3">
                <span class="text-xs text-slate-500 font-medium w-24 text-right flex-shrink-0">
                  {{ stage.label }}
                </span>
                <div class="flex-1 h-8 bg-slate-50 rounded-lg overflow-hidden
                            border border-slate-100 relative">
                  <div class="h-full rounded-lg flex items-center px-3 transition-all duration-700"
                       [style.width.%]="stage.pct"
                       [style.backgroundColor]="stage.color">
                    @if (stage.pct > 18) {
                      <span class="text-xs font-bold text-white">{{ stage.count }}</span>
                    }
                  </div>
                  @if (stage.pct <= 18) {
                    <span class="absolute right-3 top-1/2 -translate-y-1/2
                                 text-xs font-bold text-slate-600">
                      {{ stage.count }}
                    </span>
                  }
                </div>
                <div class="flex items-center gap-2 w-20 flex-shrink-0">
                  <span class="text-xs font-semibold text-slate-500">{{ stage.pct }}%</span>
                  @if (stage.convRate !== null) {
                    <span class="text-xs text-slate-400 hidden md:inline">
                      ({{ stage.convRate }}%)
                    </span>
                  }
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 grid grid-cols-4 gap-4">
            @for (s of funnelSummary(); track s.label) {
              <div class="text-center">
                <p class="text-lg font-bold" [ngClass]="s.color">{{ s.value }}</p>
                <p class="text-xs text-slate-400 font-medium mt-0.5">{{ s.label }}</p>
              </div>
            }
          </div>
        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">By Department</h2>
          <p class="text-xs text-slate-500 mb-4">Candidates per team</p>

          <div class="space-y-3">
            @for (dept of departmentData(); track dept.name) {
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs font-semibold text-slate-700">{{ dept.name }}</span>
                  <span class="text-xs font-bold text-slate-900">{{ dept.count }}</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700"
                       [style.width.%]="dept.pct"
                       [style.backgroundColor]="dept.color">
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100">
            <p class="text-xs text-slate-500 font-medium mb-2">Stage Mix</p>
            <div class="flex flex-wrap gap-2">
              @for (s of stageLegend; track s.label) {
                <div class="flex items-center gap-1.5">
                  <div class="w-2 h-2 rounded-full" [style.backgroundColor]="s.color"></div>
                  <span class="text-xs text-slate-500">{{ s.label }}</span>
                </div>
              }
            </div>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">Score Distribution</h2>
          <p class="text-xs text-slate-500 mb-5">Composite score breakdown across candidates</p>

          <div class="space-y-4">
            @for (range of scoreRanges(); track range.label) {
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                          [ngClass]="range.badgeClass">
                      {{ range.label }}
                    </span>
                    <span class="text-xs text-slate-500">{{ range.range }}</span>
                  </div>
                  <span class="text-xs font-bold text-slate-900">
                    {{ range.count }} candidates
                  </span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700"
                       [style.width.%]="range.pct"
                       [ngClass]="range.barClass">
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs text-slate-500 font-medium">Average Score</span>
            <span class="text-lg font-bold text-indigo-600">{{ averageScore() }}</span>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">Recruiter Activity</h2>
          <p class="text-xs text-slate-500 mb-5">Interviews scheduled and feedback submitted</p>

          <div class="space-y-4">
            @for (rec of recruiterActivity(); track rec.name) {
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center
                            text-white text-xs font-bold flex-shrink-0"
                     [style.backgroundColor]="rec.color">
                  {{ rec.name.split(' ')[0][0] }}{{ rec.name.split(' ')[1][0] }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-semibold text-slate-800">{{ rec.name }}</span>
                    <span class="text-xs text-slate-500">{{ rec.interviews }} interviews</span>
                  </div>
                  <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-indigo-500 transition-all duration-700"
                         [style.width.%]="rec.pct">
                    </div>
                  </div>
                  <div class="flex items-center justify-between mt-1">
                    <span class="text-xs text-slate-400">
                      {{ rec.feedback }} feedback submitted
                    </span>
                    <span class="text-xs font-semibold"
                          [ngClass]="rec.rate >= 80 ? 'text-emerald-600' : 'text-amber-600'">
                      {{ rec.rate }}% rate
                    </span>
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs text-slate-500 font-medium">Avg. Time to Hire</p>
                <p class="text-base font-bold text-slate-900 mt-0.5">18 days</p>
              </div>
              <div class="text-right">
                <p class="text-xs text-slate-500 font-medium">Offer Acceptance Rate</p>
                <p class="text-base font-bold text-emerald-600 mt-0.5">82%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="bg-white rounded-xl border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h2 class="text-sm font-bold text-slate-900">Rejection Reasons</h2>
            <p class="text-xs text-slate-500 mt-0.5">
              Why candidates were not progressed — {{ rejectedCount() }} total rejections
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          @for (reason of rejectionReasons; track reason.label) {
            <div class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                   [style.backgroundColor]="reason.iconBg">
                <span class="text-base">{{ reason.icon }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <p class="text-xs font-bold text-slate-900">{{ reason.label }}</p>
                  <span class="text-sm font-bold text-slate-700 flex-shrink-0">
                    {{ reason.count }}
                  </span>
                </div>
                <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700"
                       [style.width.%]="(reason.count / rejectedCount()) * 100"
                       [style.backgroundColor]="reason.barColor">
                  </div>
                </div>
                <p class="text-xs text-slate-500 mt-1.5">
                  {{ Math.round((reason.count / rejectedCount()) * 100) }}% of rejections
                </p>
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/features/recruiter/analytics/analytics.component.ts", lineNumber: 294 }); })();
