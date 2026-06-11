import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ["/recruiter/candidates", a0];
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function CandidatesComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1, "\u00B7 filtered");
    i0.ɵɵelementEnd();
} }
function CandidatesComponent_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", stage_r1.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(stage_r1.label);
} }
function CandidatesComponent_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", dept_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(dept_r2);
} }
function CandidatesComponent_Conditional_35_For_21_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 46);
    i0.ɵɵelement(2, "div", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 48);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", c_r3.score, "%");
    i0.ɵɵproperty("ngClass", ctx_r3.scoreBarColor(c_r3.score));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r3.scoreTextColor(c_r3.score));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r3.score, " ");
} }
function CandidatesComponent_Conditional_35_For_21_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1, "Not scored");
    i0.ɵɵelementEnd();
} }
function CandidatesComponent_Conditional_35_For_21_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tag_r5, " ");
} }
function CandidatesComponent_Conditional_35_For_21_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" +", c_r3.tags.length - 2, " ");
} }
function CandidatesComponent_Conditional_35_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 27)(1, "td", 30)(2, "div", 31);
    i0.ɵɵelement(3, "app-avatar", 32);
    i0.ɵɵelementStart(4, "div", 33)(5, "p", 34);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 35);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "td", 36)(10, "p", 37);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 29);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td", 36);
    i0.ɵɵelement(15, "app-stage-badge", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 36);
    i0.ɵɵconditionalCreate(17, CandidatesComponent_Conditional_35_For_21_Conditional_17_Template, 5, 5, "div", 5)(18, CandidatesComponent_Conditional_35_For_21_Conditional_18_Template, 2, 0, "span", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 36)(20, "span", 40);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 36)(23, "div", 41);
    i0.ɵɵrepeaterCreate(24, CandidatesComponent_Conditional_35_For_21_For_25_Template, 2, 1, "span", 42, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵconditionalCreate(26, CandidatesComponent_Conditional_35_For_21_Conditional_26_Template, 2, 1, "span", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td", 36)(28, "span", 44);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "td", 36)(31, "a", 45);
    i0.ɵɵtext(32, " View \u2192 ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", c_r3.name)("color", c_r3.avatarColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", c_r3.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r3.currentRole);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r3.jobTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r3.department);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("stage", c_r3.stage);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(c_r3.score > 0 ? 17 : 18);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", c_r3.experience, " yr", c_r3.experience !== 1 ? "s" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(c_r3.tags.slice(0, 2));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(c_r3.tags.length > 2 ? 26 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.formatDate(c_r3.appliedDate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, c_r3.id));
} }
function CandidatesComponent_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "table", 21)(2, "thead")(3, "tr", 22)(4, "th", 23);
    i0.ɵɵtext(5, " Candidate ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 24);
    i0.ɵɵtext(7, " Applied For ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 24);
    i0.ɵɵtext(9, " Stage ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 24);
    i0.ɵɵtext(11, " Score ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th", 24);
    i0.ɵɵtext(13, " Experience ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th", 24);
    i0.ɵɵtext(15, " Tags ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th", 24);
    i0.ɵɵtext(17, " Applied ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "th", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "tbody", 26);
    i0.ɵɵrepeaterCreate(20, CandidatesComponent_Conditional_35_For_21_Template, 33, 15, "tr", 27, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 28)(23, "span", 29);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r3.filteredAndSorted());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" Showing ", ctx_r3.filteredAndSorted().length, " of ", ctx_r3.allCandidates().length, " candidates ");
} }
function CandidatesComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 49)(2, "div", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 51);
    i0.ɵɵelement(4, "path", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "h3", 53);
    i0.ɵɵtext(6, "No candidates match your filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 54);
    i0.ɵɵtext(8, "Try adjusting your search or clearing filters.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 55);
    i0.ɵɵlistener("click", function CandidatesComponent_Conditional_36_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clearFilters()); });
    i0.ɵɵtext(10, " Clear all filters ");
    i0.ɵɵelementEnd()()();
} }
export class CandidatesComponent {
    constructor() {
        this.candidatesApi = inject(CandidatesApiService);
        this.allCandidates = this.candidatesApi.candidates;
        this.searchQuery = '';
        this.stageFilter = '';
        this.deptFilter = '';
        this.sortBy = 'recent';
        this.stageOptions = [
            { value: 'applied', label: 'Applied' },
            { value: 'shortlisted', label: 'Shortlisted' },
            { value: 'assessment', label: 'Assessment' },
            { value: 'interview', label: 'Interview' },
            { value: 'hr_round', label: 'HR Round' },
            { value: 'selected', label: 'Selected' },
            { value: 'rejected', label: 'Rejected' },
        ];
    }
    ngOnInit() {
        void this.candidatesApi.loadAll();
    }
    hasActiveFilters() {
        return !!this.searchQuery || !!this.stageFilter || !!this.deptFilter;
    }
    filteredAndSorted() {
        const q = this.searchQuery.toLowerCase();
        const result = this.allCandidates().filter(c => {
            const matchesSearch = !q
                || c.name.toLowerCase().includes(q)
                || c.currentRole.toLowerCase().includes(q)
                || c.jobTitle.toLowerCase().includes(q)
                || c.skills.some(s => s.toLowerCase().includes(q));
            const matchesStage = !this.stageFilter || c.stage === this.stageFilter;
            const matchesDept = !this.deptFilter || c.department === this.deptFilter;
            return matchesSearch && matchesStage && matchesDept;
        });
        switch (this.sortBy) {
            case 'score_desc': return [...result].sort((a, b) => b.score - a.score);
            case 'score_asc': return [...result].sort((a, b) => a.score - b.score);
            case 'name': return [...result].sort((a, b) => a.name.localeCompare(b.name));
            default: return [...result].sort((a, b) => new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime());
        }
    }
    departments() {
        return [...new Set(this.allCandidates().map(c => c.department))];
    }
    clearFilters() {
        this.searchQuery = '';
        this.stageFilter = '';
        this.deptFilter = '';
        this.sortBy = 'recent';
    }
    scoreBarColor(score) {
        if (score >= 80)
            return 'bg-emerald-500';
        if (score >= 60)
            return 'bg-amber-400';
        return 'bg-rose-400';
    }
    scoreTextColor(score) {
        if (score >= 80)
            return 'text-emerald-600';
        if (score >= 60)
            return 'text-amber-600';
        return 'text-rose-500';
    }
    formatDate(iso) {
        return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    static { this.ɵfac = function CandidatesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CandidatesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CandidatesComponent, selectors: [["app-candidates"]], decls: 37, vars: 11, consts: [[1, "p-6", "max-w-screen-2xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "text-indigo-600", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-slate-500", "hover:text-slate-700", "px-3", "py-1.5", "rounded-lg", "border", "border-slate-200", "hover:bg-slate-50", "transition-colors", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "mb-5", "flex", "flex-wrap", "gap-3"], [1, "relative", "flex-1", "min-w-48"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-slate-400", "pointer-events-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"], ["type", "text", "placeholder", "Search by name, role, or skills\u2026", 1, "w-full", "pl-9", "pr-3", "py-2", "text-sm", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:bg-white", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "text-sm", "bg-white", "border", "border-slate-200", "rounded-lg", "px-3", "py-2", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "recent"], ["value", "score_desc"], ["value", "score_asc"], ["value", "name"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "overflow-hidden"], [1, "bg-white", "rounded-xl", "border", "border-slate-200"], [1, "w-full"], [1, "border-b", "border-slate-100", "bg-slate-50/70"], [1, "text-left", "px-5", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider", "w-64"], [1, "text-left", "px-4", "py-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "px-4", "py-3", "w-8"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/60", "transition-colors", "duration-100", "group"], [1, "px-5", "py-3", "border-t", "border-slate-100", "bg-slate-50/30", "flex", "items-center", "justify-between"], [1, "text-xs", "text-slate-400"], [1, "px-5", "py-3.5"], [1, "flex", "items-center", "gap-3"], ["size", "sm", 3, "name", "color"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-900", "truncate", "leading-snug"], [1, "text-xs", "text-slate-500", "truncate"], [1, "px-4", "py-3.5"], [1, "text-sm", "text-slate-700", "truncate", "max-w-44"], [3, "stage"], [1, "text-xs", "text-slate-400", "italic"], [1, "text-sm", "text-slate-600"], [1, "flex", "flex-wrap", "gap-1"], [1, "text-xs", "px-2", "py-0.5", "bg-slate-100", "text-slate-600", "rounded", "font-medium"], [1, "text-xs", "px-1.5", "py-0.5", "bg-slate-100", "text-slate-500", "rounded"], [1, "text-sm", "text-slate-500"], [1, "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-150", "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-semibold", "whitespace-nowrap", 3, "routerLink"], [1, "w-16", "h-1.5", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-300", 3, "ngClass"], [1, "text-sm", "font-semibold", 3, "ngClass"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "w-14", "h-14", "rounded-2xl", "bg-slate-100", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"], [1, "text-sm", "font-semibold", "text-slate-800", "mb-1"], [1, "text-sm", "text-slate-500", "mb-4"], [1, "text-sm", "font-medium", "text-indigo-600", "hover:text-indigo-700", "px-4", "py-2", "border", "border-indigo-200", "rounded-lg", "hover:bg-indigo-50", "transition-colors", 3, "click"]], template: function CandidatesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Candidates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵconditionalCreate(7, CandidatesComponent_Conditional_7_Template, 2, 0, "span", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 5)(9, "button", 6);
            i0.ɵɵlistener("click", function CandidatesComponent_Template_button_click_9_listener() { return ctx.clearFilters(); });
            i0.ɵɵtext(10, " Clear filters ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 7)(12, "div", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(13, "svg", 9);
            i0.ɵɵelement(14, "path", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function CandidatesComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function CandidatesComponent_Template_select_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.stageFilter, $event) || (ctx.stageFilter = $event); return $event; });
            i0.ɵɵelementStart(17, "option", 13);
            i0.ɵɵtext(18, "All Stages");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(19, CandidatesComponent_For_20_Template, 2, 2, "option", 14, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function CandidatesComponent_Template_select_ngModelChange_21_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.deptFilter, $event) || (ctx.deptFilter = $event); return $event; });
            i0.ɵɵelementStart(22, "option", 13);
            i0.ɵɵtext(23, "All Departments");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(24, CandidatesComponent_For_25_Template, 2, 2, "option", 14, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function CandidatesComponent_Template_select_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event); return $event; });
            i0.ɵɵelementStart(27, "option", 15);
            i0.ɵɵtext(28, "Sort: Most Recent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "option", 16);
            i0.ɵɵtext(30, "Sort: Highest Score");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "option", 17);
            i0.ɵɵtext(32, "Sort: Lowest Score");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "option", 18);
            i0.ɵɵtext(34, "Sort: Name A\u2013Z");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(35, CandidatesComponent_Conditional_35_Template, 25, 2, "div", 19)(36, CandidatesComponent_Conditional_36_Template, 11, 0, "div", 20);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.filteredAndSorted().length, " candidates ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hasActiveFilters() ? 7 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("opacity-0", !ctx.hasActiveFilters())("pointer-events-none", !ctx.hasActiveFilters());
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQuery);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.stageFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.stageOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.deptFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.departments());
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.sortBy);
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.filteredAndSorted().length > 0 ? 35 : 36);
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, AvatarComponent, StageBadgeComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CandidatesComponent, [{
        type: Component,
        args: [{
                selector: 'app-candidates',
                standalone: true,
                imports: [CommonModule, RouterLink, FormsModule, AvatarComponent, StageBadgeComponent],
                template: `
    <div class="p-6 max-w-screen-2xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-lg font-bold text-slate-900">Candidates</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ filteredAndSorted().length }} candidates
            @if (hasActiveFilters()) { <span class="text-indigo-600 font-medium">· filtered</span> }
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button (click)="clearFilters()"
            class="text-xs text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg
                   border border-slate-200 hover:bg-slate-50 transition-colors"
            [class.opacity-0]="!hasActiveFilters()"
            [class.pointer-events-none]="!hasActiveFilters()">
            Clear filters
          </button>
        </div>
      </div>


      <div class="bg-white rounded-xl border border-slate-200 p-4 mb-5 flex flex-wrap gap-3">

        <div class="relative flex-1 min-w-48">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
          <input type="text" placeholder="Search by name, role, or skills…"
            [(ngModel)]="searchQuery"
            class="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg
                   text-slate-900 placeholder:text-slate-400
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors" />
        </div>

        <select [(ngModel)]="stageFilter"
          class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">All Stages</option>
          @for (stage of stageOptions; track stage.value) {
            <option [value]="stage.value">{{ stage.label }}</option>
          }
        </select>

        <select [(ngModel)]="deptFilter"
          class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">All Departments</option>
          @for (dept of departments(); track dept) {
            <option [value]="dept">{{ dept }}</option>
          }
        </select>

        <select [(ngModel)]="sortBy"
          class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="recent">Sort: Most Recent</option>
          <option value="score_desc">Sort: Highest Score</option>
          <option value="score_asc">Sort: Lowest Score</option>
          <option value="name">Sort: Name A–Z</option>
        </select>

      </div>


      @if (filteredAndSorted().length > 0) {
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">

          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-100 bg-slate-50/70">
                <th class="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-64">
                  Candidate
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Applied For
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Stage
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Score
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Experience
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tags
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Applied
                </th>
                <th class="px-4 py-3 w-8"></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-100">
              @for (c of filteredAndSorted(); track c.id) {
                <tr class="hover:bg-slate-50/60 transition-colors duration-100 group">

                  <td class="px-5 py-3.5">
                    <div class="flex items-center gap-3">
                      <app-avatar [name]="c.name" [color]="c.avatarColor" size="sm" />
                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-slate-900 truncate leading-snug">
                          {{ c.name }}
                        </p>
                        <p class="text-xs text-slate-500 truncate">{{ c.currentRole }}</p>
                      </div>
                    </div>
                  </td>

                  <td class="px-4 py-3.5">
                    <p class="text-sm text-slate-700 truncate max-w-44">{{ c.jobTitle }}</p>
                    <p class="text-xs text-slate-400">{{ c.department }}</p>
                  </td>

                  <td class="px-4 py-3.5">
                    <app-stage-badge [stage]="c.stage" />
                  </td>

                  <td class="px-4 py-3.5">
                    @if (c.score > 0) {
                      <div class="flex items-center gap-2">
                        <div class="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div class="h-full rounded-full transition-all duration-300"
                               [ngClass]="scoreBarColor(c.score)"
                               [style.width.%]="c.score">
                          </div>
                        </div>
                        <span class="text-sm font-semibold"
                              [ngClass]="scoreTextColor(c.score)">
                          {{ c.score }}
                        </span>
                      </div>
                    } @else {
                      <span class="text-xs text-slate-400 italic">Not scored</span>
                    }
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-600">{{ c.experience }} yr{{ c.experience !== 1 ? 's' : '' }}</span>
                  </td>

                  <td class="px-4 py-3.5">
                    <div class="flex flex-wrap gap-1">
                      @for (tag of c.tags.slice(0, 2); track tag) {
                        <span class="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">
                          {{ tag }}
                        </span>
                      }
                      @if (c.tags.length > 2) {
                        <span class="text-xs px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">
                          +{{ c.tags.length - 2 }}
                        </span>
                      }
                    </div>
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-500">{{ formatDate(c.appliedDate) }}</span>
                  </td>

                  <td class="px-4 py-3.5">
                    <a [routerLink]="['/recruiter/candidates', c.id]"
                       class="opacity-0 group-hover:opacity-100 transition-opacity duration-150
                              text-xs text-indigo-600 hover:text-indigo-700 font-semibold whitespace-nowrap">
                      View →
                    </a>
                  </td>

                </tr>
              }
            </tbody>
          </table>

          <div class="px-5 py-3 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
            <span class="text-xs text-slate-400">
              Showing {{ filteredAndSorted().length }} of {{ allCandidates().length }} candidates
            </span>
          </div>

        </div>

      } @else {
        <div class="bg-white rounded-xl border border-slate-200">
          <div class="flex flex-col items-center justify-center py-20 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-slate-800 mb-1">No candidates match your filters</h3>
            <p class="text-sm text-slate-500 mb-4">Try adjusting your search or clearing filters.</p>
            <button (click)="clearFilters()"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-700 px-4 py-2
                     border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
              Clear all filters
            </button>
          </div>
        </div>
      }

    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CandidatesComponent, { className: "CandidatesComponent", filePath: "src/app/features/recruiter/candidates/candidates.component.ts", lineNumber: 225 }); })();
