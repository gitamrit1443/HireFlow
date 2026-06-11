import { Component, Input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PlagiarismCheckComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function PlagiarismCheckComponent_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.runCheck()); });
    i0.ɵɵtext(1, " Run Check ");
    i0.ɵɵelementEnd();
} }
function PlagiarismCheckComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function PlagiarismCheckComponent_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.runCheck()); });
    i0.ɵɵtext(1, " Re-run ");
    i0.ɵɵelementEnd();
} }
function PlagiarismCheckComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 14);
    i0.ɵɵelement(2, "circle", 15)(3, "path", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span", 17);
    i0.ɵɵtext(5, "Analysing application...");
    i0.ɵɵelementEnd()();
} }
function PlagiarismCheckComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error(), " ");
} }
function PlagiarismCheckComponent_Conditional_12_Conditional_31_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 35);
    i0.ɵɵelement(2, "path", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const flag_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", flag_r4, " ");
} }
function PlagiarismCheckComponent_Conditional_12_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "p", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 33);
    i0.ɵɵrepeaterCreate(4, PlagiarismCheckComponent_Conditional_12_Conditional_31_For_5_Template, 4, 1, "div", 34, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Spam Flags (", ctx_r1.result().spam.flags.length, ") ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.result().spam.flags);
} }
function PlagiarismCheckComponent_Conditional_12_Conditional_32_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seg_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \"...", seg_r5, "...\" ");
} }
function PlagiarismCheckComponent_Conditional_12_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "p", 32);
    i0.ɵɵtext(2, " Matching Phrases Detected ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 33);
    i0.ɵɵrepeaterCreate(4, PlagiarismCheckComponent_Conditional_12_Conditional_32_For_5_Template, 2, 1, "div", 37, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.result().plagiarism.matchedSegments);
} }
function PlagiarismCheckComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "span", 22);
    i0.ɵɵtext(6, "Plagiarism");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 23);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 24);
    i0.ɵɵelement(11, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 26)(13, "span", 27);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 28);
    i0.ɵɵtext(16, "% similar");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 20)(18, "div", 21)(19, "span", 22);
    i0.ɵɵtext(20, "Spam Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 23);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 24);
    i0.ɵɵelement(25, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 26)(27, "span", 27);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span", 28);
    i0.ɵɵtext(30, "% spam");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(31, PlagiarismCheckComponent_Conditional_12_Conditional_31_Template, 6, 1, "div", 29);
    i0.ɵɵconditionalCreate(32, PlagiarismCheckComponent_Conditional_12_Conditional_32_Template, 6, 0, "div", 29);
    i0.ɵɵelementStart(33, "div", 30)(34, "p", 31);
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p", 31);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.summaryBannerClass());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.result().summary, " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r1.badgeClass(ctx_r1.result().plagiarism.riskLevel));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 18, ctx_r1.result().plagiarism.riskLevel), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r1.result().plagiarism.similarityPercent, "%");
    i0.ɵɵproperty("ngClass", ctx_r1.barClass(ctx_r1.result().plagiarism.riskLevel));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.result().plagiarism.similarityPercent, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", ctx_r1.badgeClass(ctx_r1.result().spam.riskLevel));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 20, ctx_r1.result().spam.riskLevel), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r1.result().spam.spamPercent, "%");
    i0.ɵɵproperty("ngClass", ctx_r1.barClass(ctx_r1.result().spam.riskLevel));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.result().spam.spamPercent, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.result().spam.flags.length > 0 ? 31 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.result().plagiarism.matchedSegments.length > 0 ? 32 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.result().plagiarism.verdict);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.result().spam.verdict);
} }
function PlagiarismCheckComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1, " Click ");
    i0.ɵɵelementStart(2, "strong", 38);
    i0.ɵɵtext(3, "Run Check");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " to scan this application for plagiarism and spam signals in real-time. ");
    i0.ɵɵelementEnd();
} }
export class PlagiarismCheckComponent {
    constructor() {
        this.candidateEmail = '';
        this.coverLetter = '';
        this.resumeText = '';
        this.applicationsCountToday = 0;
        this.autoRun = true;
        this.http = inject(HttpClient);
        this.result = signal(null, ...(ngDevMode ? [{ debugName: "result" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
    }
    ngOnInit() {
        if (this.autoRun && this.coverLetter?.trim()) {
            this.runCheck();
        }
    }
    runCheck() {
        if (!this.coverLetter?.trim()) {
            this.result.set(null);
            this.error.set('No cover letter is available for this application.');
            return;
        }
        this.loading.set(true);
        this.error.set(null);
        this.result.set(null);
        this.http.post(`${environment.apiUrl}/analysis/full`, {
            applicationId: this.applicationId,
            candidateName: this.candidateName,
            candidateEmail: this.candidateEmail,
            coverLetter: this.coverLetter ?? '',
            resumeText: this.resumeText ?? '',
            applicationsCountToday: this.applicationsCountToday
        }).pipe(catchError(() => {
            this.error.set('Analysis service is unavailable. Start the Python plagiarism service and try again.');
            this.loading.set(false);
            return EMPTY;
        })).subscribe(res => {
            if (!res.success || !res.data) {
                this.error.set('Analysis service returned an invalid response.');
            }
            else {
                this.result.set(this.mapResult(res.data));
            }
            this.loading.set(false);
        });
    }
    summaryBannerClass() {
        const r = this.result()?.overallRisk;
        if (r === 'critical')
            return 'bg-red-50 border border-red-200 text-red-700';
        if (r === 'high')
            return 'bg-red-50 border border-red-200 text-red-700';
        if (r === 'medium')
            return 'bg-amber-50 border border-amber-200 text-amber-700';
        return 'bg-emerald-50 border border-emerald-200 text-emerald-700';
    }
    badgeClass(risk) {
        if (risk === 'critical')
            return 'bg-red-100 text-red-700';
        if (risk === 'high')
            return 'bg-red-100 text-red-600';
        if (risk === 'medium')
            return 'bg-amber-100 text-amber-700';
        return 'bg-emerald-100 text-emerald-700';
    }
    barClass(risk) {
        if (risk === 'critical')
            return 'bg-red-600';
        if (risk === 'high')
            return 'bg-red-500';
        if (risk === 'medium')
            return 'bg-amber-500';
        return 'bg-emerald-500';
    }
    mapResult(data) {
        const plagiarism = data.plagiarism ?? {};
        const spam = data.spam ?? {};
        return {
            applicationId: data.applicationId ?? data.application_id ?? this.applicationId,
            candidateName: data.candidateName ?? data.candidate_name ?? this.candidateName,
            plagiarism: {
                similarityPercent: plagiarism.similarityPercent ?? plagiarism.similarity_percent ?? 0,
                isPlagiarised: plagiarism.isPlagiarised ?? plagiarism.is_plagiarised ?? false,
                riskLevel: plagiarism.riskLevel ?? plagiarism.risk_level ?? 'low',
                matchedSegments: plagiarism.matchedSegments ?? plagiarism.matched_segments ?? [],
                verdict: plagiarism.verdict ?? ''
            },
            spam: {
                isSpam: spam.isSpam ?? spam.is_spam ?? false,
                spamPercent: spam.spamPercent ?? spam.spam_percent ?? 0,
                riskLevel: spam.riskLevel ?? spam.risk_level ?? 'low',
                flags: spam.flags ?? [],
                verdict: spam.verdict ?? ''
            },
            overallRisk: data.overallRisk ?? data.overall_risk ?? 'low',
            recommendation: data.recommendation ?? 'review',
            summary: data.summary ?? 'Analysis completed.'
        };
    }
    static { this.ɵfac = function PlagiarismCheckComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlagiarismCheckComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlagiarismCheckComponent, selectors: [["app-plagiarism-check"]], inputs: { applicationId: "applicationId", candidateName: "candidateName", candidateEmail: "candidateEmail", coverLetter: "coverLetter", resumeText: "resumeText", applicationsCountToday: "applicationsCountToday", autoRun: "autoRun" }, decls: 14, vars: 5, consts: [[1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-2"], [1, "w-7", "h-7", "bg-indigo-50", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0\n                   01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622\n                   5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "text-xs", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "px-3", "py-1.5", "rounded-lg", "transition", "font-medium"], [1, "text-xs", "text-slate-500", "hover:text-slate-700", "transition"], [1, "flex", "items-center", "gap-3", "py-3"], [1, "text-xs", "text-red-600", "bg-red-50", "border", "border-red-200", "rounded-lg", "p-3"], [1, "text-xs", "text-slate-400", "text-center", "py-4", "leading-relaxed"], [1, "text-xs", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "px-3", "py-1.5", "rounded-lg", "transition", "font-medium", 3, "click"], [1, "text-xs", "text-slate-500", "hover:text-slate-700", "transition", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4", "text-indigo-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "text-sm", "text-slate-500"], [1, "rounded-xl", "p-3", "mb-4", "text-xs", "font-medium", "leading-snug", 3, "ngClass"], [1, "grid", "grid-cols-2", "gap-3", "mb-4"], [1, "bg-slate-50", "rounded-xl", "p-3.5", "border", "border-slate-100"], [1, "flex", "items-center", "justify-between", "mb-2.5"], [1, "text-xs", "text-slate-500", "font-medium"], [1, "text-xs", "px-2", "py-0.5", "rounded-full", "font-semibold", 3, "ngClass"], [1, "h-1.5", "bg-slate-200", "rounded-full", "overflow-hidden", "mb-2.5"], [1, "h-full", "rounded-full", "transition-all", "duration-700", 3, "ngClass"], [1, "flex", "items-baseline", "gap-1"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-400"], [1, "mb-4"], [1, "pt-3", "border-t", "border-slate-100", "space-y-1.5"], [1, "text-xs", "text-slate-500", "leading-relaxed"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wide", "mb-2"], [1, "space-y-1.5"], [1, "flex", "items-start", "gap-2", "text-xs", "text-amber-700", "bg-amber-50", "border", "border-amber-100", "rounded-lg", "px-3", "py-2"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5", "mt-0.5", "shrink-0", "text-amber-500"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673\n                         1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485\n                         2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0\n                         0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"], [1, "bg-red-50", "border", "border-red-100", "rounded-lg", "px-3", "py-2", "text-xs", "text-red-700", "font-mono", "leading-relaxed"], [1, "text-slate-600"]], template: function PlagiarismCheckComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7, "Plagiarism & Spam Check");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, PlagiarismCheckComponent_Conditional_8_Template, 2, 0, "button", 7)(9, PlagiarismCheckComponent_Conditional_9_Template, 2, 0, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, PlagiarismCheckComponent_Conditional_10_Template, 6, 0, "div", 9);
            i0.ɵɵconditionalCreate(11, PlagiarismCheckComponent_Conditional_11_Template, 2, 1, "div", 10);
            i0.ɵɵconditionalCreate(12, PlagiarismCheckComponent_Conditional_12_Template, 38, 22);
            i0.ɵɵconditionalCreate(13, PlagiarismCheckComponent_Conditional_13_Template, 5, 0, "p", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(!ctx.result() && !ctx.loading() ? 8 : ctx.result() ? 9 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.result() ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.result() && !ctx.loading() && !ctx.error() ? 13 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.TitleCasePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlagiarismCheckComponent, [{
        type: Component,
        args: [{
                selector: 'app-plagiarism-check',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="bg-white rounded-xl border border-slate-200 p-5">

      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center">
            <svg class="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0
                   01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622
                   5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <span class="text-sm font-semibold text-slate-900">Plagiarism & Spam Check</span>
        </div>

        @if (!result() && !loading()) {
          <button (click)="runCheck()"
            class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white
                   px-3 py-1.5 rounded-lg transition font-medium">
            Run Check
          </button>
        } @else if (result()) {
          <button (click)="runCheck()"
            class="text-xs text-slate-500 hover:text-slate-700 transition">
            Re-run
          </button>
        }
      </div>

      <!-- Loading -->
      @if (loading()) {
        <div class="flex items-center gap-3 py-3">
          <svg class="animate-spin w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span class="text-sm text-slate-500">Analysing application...</span>
        </div>
      }

      <!-- Error -->
      @if (error()) {
        <div class="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          {{ error() }}
        </div>
      }

      <!-- Results -->
      @if (result()) {

        <!-- Summary banner -->
        <div [ngClass]="summaryBannerClass()" class="rounded-xl p-3 mb-4 text-xs font-medium leading-snug">
          {{ result()!.summary }}
        </div>

        <!-- Metric cards -->
        <div class="grid grid-cols-2 gap-3 mb-4">

          <!-- Plagiarism card -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs text-slate-500 font-medium">Plagiarism</span>
              <span [ngClass]="badgeClass(result()!.plagiarism.riskLevel)"
                class="text-xs px-2 py-0.5 rounded-full font-semibold">
                {{ result()!.plagiarism.riskLevel | titlecase }}
              </span>
            </div>
            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-2.5">
              <div [style.width.%]="result()!.plagiarism.similarityPercent"
                [ngClass]="barClass(result()!.plagiarism.riskLevel)"
                class="h-full rounded-full transition-all duration-700">
              </div>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-slate-900">
                {{ result()!.plagiarism.similarityPercent }}
              </span>
              <span class="text-sm text-slate-400">% similar</span>
            </div>
          </div>

          <!-- Spam card -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs text-slate-500 font-medium">Spam Score</span>
              <span [ngClass]="badgeClass(result()!.spam.riskLevel)"
                class="text-xs px-2 py-0.5 rounded-full font-semibold">
                {{ result()!.spam.riskLevel | titlecase }}
              </span>
            </div>
            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-2.5">
              <div [style.width.%]="result()!.spam.spamPercent"
                [ngClass]="barClass(result()!.spam.riskLevel)"
                class="h-full rounded-full transition-all duration-700">
              </div>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-slate-900">
                {{ result()!.spam.spamPercent }}
              </span>
              <span class="text-sm text-slate-400">% spam</span>
            </div>
          </div>
        </div>

        <!-- Spam flags -->
        @if (result()!.spam.flags.length > 0) {
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Spam Flags ({{ result()!.spam.flags.length }})
            </p>
            <div class="space-y-1.5">
              @for (flag of result()!.spam.flags; track flag) {
                <div class="flex items-start gap-2 text-xs text-amber-700 bg-amber-50
                            border border-amber-100 rounded-lg px-3 py-2">
                  <svg class="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673
                         1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485
                         2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0
                         0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"/>
                  </svg>
                  {{ flag }}
                </div>
              }
            </div>
          </div>
        }

        <!-- Matched phrases -->
        @if (result()!.plagiarism.matchedSegments.length > 0) {
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Matching Phrases Detected
            </p>
            <div class="space-y-1.5">
              @for (seg of result()!.plagiarism.matchedSegments; track seg) {
                <div class="bg-red-50 border border-red-100 rounded-lg px-3 py-2
                            text-xs text-red-700 font-mono leading-relaxed">
                  "...{{ seg }}..."
                </div>
              }
            </div>
          </div>
        }

        <!-- Verdicts -->
        <div class="pt-3 border-t border-slate-100 space-y-1.5">
          <p class="text-xs text-slate-500 leading-relaxed">{{ result()!.plagiarism.verdict }}</p>
          <p class="text-xs text-slate-500 leading-relaxed">{{ result()!.spam.verdict }}</p>
        </div>
      }

      <!-- Idle state -->
      @if (!result() && !loading() && !error()) {
        <p class="text-xs text-slate-400 text-center py-4 leading-relaxed">
          Click <strong class="text-slate-600">Run Check</strong> to scan this application
          for plagiarism and spam signals in real-time.
        </p>
      }
    </div>
  `
            }]
    }], null, { applicationId: [{
            type: Input
        }], candidateName: [{
            type: Input
        }], candidateEmail: [{
            type: Input
        }], coverLetter: [{
            type: Input
        }], resumeText: [{
            type: Input
        }], applicationsCountToday: [{
            type: Input
        }], autoRun: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlagiarismCheckComponent, { className: "PlagiarismCheckComponent", filePath: "src/app/shared/components/plagiarism-check/plagiarism-check.component.ts", lineNumber: 202 }); })();
