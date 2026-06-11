import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HireMeetService } from '../../../core/services/hiremeet.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = a0 => ["/meet", a0];
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
function HireMeetComponent_Conditional_11_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.createError());
} }
function HireMeetComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 12)(2, "div", 13)(3, "h2", 14);
    i0.ɵɵtext(4, "Create Meeting Room");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_11_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showCreate.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(6, "svg", 16);
    i0.ɵɵelement(7, "path", 17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "div", 18)(9, "div")(10, "label", 19);
    i0.ɵɵtext(11, "Meeting Title *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 20);
    i0.ɵɵtwoWayListener("ngModelChange", function HireMeetComponent_Conditional_11_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div")(14, "label", 19);
    i0.ɵɵtext(15, "Candidate Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function HireMeetComponent_Conditional_11_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.candidateName, $event) || (ctx_r1.form.candidateName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "label", 19);
    i0.ɵɵtext(19, "Job Title *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function HireMeetComponent_Conditional_11_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.jobTitle, $event) || (ctx_r1.form.jobTitle = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "label", 19);
    i0.ɵɵtext(23, "Scheduled For (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function HireMeetComponent_Conditional_11_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.scheduledFor, $event) || (ctx_r1.form.scheduledFor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(25, HireMeetComponent_Conditional_11_Conditional_25_Template, 2, 1, "p", 24);
    i0.ɵɵelementStart(26, "div", 25)(27, "button", 26);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_11_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showCreate.set(false)); });
    i0.ɵɵtext(28, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 27);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_11_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createMeeting()); });
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.candidateName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.jobTitle);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.scheduledFor);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.createError() ? 25 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.creating());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.creating() ? "Creating..." : "Create Room", " ");
} }
function HireMeetComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 12)(2, "div", 28)(3, "h2", 14);
    i0.ɵɵtext(4, "Room Created! \uD83C\uDF89");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_12_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.shareUrl.set(null)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(6, "svg", 16);
    i0.ɵɵelement(7, "path", 17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "p", 29);
    i0.ɵɵtext(9, "Share this link with the candidate:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 30);
    i0.ɵɵelement(11, "input", 31);
    i0.ɵɵelementStart(12, "button", 32);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_12_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.copyLink()); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "a", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(15, "svg", 5);
    i0.ɵɵelement(16, "path", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " Join Meeting as Host ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("value", ctx_r1.shareUrl());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.copied() ? "Copied!" : "Copy", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r1.shareUrl(), i0.ɵɵsanitizeUrl);
} }
function HireMeetComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "p", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 36);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r4.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r4.label);
} }
function HireMeetComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 37);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 38);
    i0.ɵɵelement(3, "path", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h3", 40);
    i0.ɵɵtext(5, "No meetings yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 41);
    i0.ɵɵtext(7, "Create your first HireMeet room to start interviewing candidates.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 42);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_16_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showCreate.set(true)); });
    i0.ɵɵtext(9, " Create Meeting ");
    i0.ɵɵelementEnd()();
} }
function HireMeetComponent_Conditional_17_For_15_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 53);
} }
function HireMeetComponent_Conditional_17_For_15_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 60);
    i0.ɵɵtext(1, " Join ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 61);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_17_For_15_Conditional_19_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r7); const m_r8 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.copyRoomLink(m_r8.roomCode)); });
    i0.ɵɵtext(3, " Share ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, m_r8.roomCode));
} }
function HireMeetComponent_Conditional_17_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 49)(1, "td", 50)(2, "p", 51);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 36);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 50)(7, "span", 52);
    i0.ɵɵconditionalCreate(8, HireMeetComponent_Conditional_17_For_15_Conditional_8_Template, 1, 0, "span", 53);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td", 54)(12, "span", 55);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td", 54)(15, "span", 55);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td", 50)(18, "div", 56);
    i0.ɵɵconditionalCreate(19, HireMeetComponent_Conditional_17_For_15_Conditional_19_Template, 4, 3);
    i0.ɵɵelementStart(20, "button", 57);
    i0.ɵɵlistener("click", function HireMeetComponent_Conditional_17_For_15_Template_button_click_20_listener() { const m_r8 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteMeeting(m_r8.id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(21, "svg", 58);
    i0.ɵɵelement(22, "path", 59);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r8.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r8.candidateName, " \u00B7 ", m_r8.jobTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r1.statusClass(m_r8.status));
    i0.ɵɵadvance();
    i0.ɵɵconditional(m_r8.status === "live" ? 8 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 10, m_r8.status), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(m_r8.scheduledFor ? ctx_r1.formatDate(m_r8.scheduledFor) : "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r8.duration ? ctx_r1.formatDuration(m_r8.duration) : "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(m_r8.status !== "ended" ? 19 : -1);
} }
function HireMeetComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "table", 43)(2, "thead")(3, "tr", 44)(4, "th", 45);
    i0.ɵɵtext(5, "Meeting");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 45);
    i0.ɵɵtext(7, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 46);
    i0.ɵɵtext(9, "Scheduled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 46);
    i0.ɵɵtext(11, "Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "th", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "tbody", 48);
    i0.ɵɵrepeaterCreate(14, HireMeetComponent_Conditional_17_For_15_Template, 23, 12, "tr", 49, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r1.service.meetings());
} }
export class HireMeetComponent {
    constructor() {
        this.service = inject(HireMeetService);
        this.showCreate = signal(false, ...(ngDevMode ? [{ debugName: "showCreate" }] : []));
        this.creating = signal(false, ...(ngDevMode ? [{ debugName: "creating" }] : []));
        this.createError = signal(null, ...(ngDevMode ? [{ debugName: "createError" }] : []));
        this.shareUrl = signal(null, ...(ngDevMode ? [{ debugName: "shareUrl" }] : []));
        this.copied = signal(false, ...(ngDevMode ? [{ debugName: "copied" }] : []));
        this.form = { title: '', candidateName: '', jobTitle: '', scheduledFor: undefined };
    }
    ngOnInit() { this.service.loadMeetings(); }
    stats() {
        const all = this.service.meetings();
        return [
            { label: 'Total Meetings', value: all.length },
            { label: 'Live Now', value: all.filter(m => m.status === 'live').length },
            { label: 'Completed', value: all.filter(m => m.status === 'ended').length },
        ];
    }
    createMeeting() {
        if (!this.form.title || !this.form.candidateName || !this.form.jobTitle) {
            this.createError.set('Please fill in all required fields.');
            return;
        }
        this.creating.set(true);
        this.createError.set(null);
        this.service.createMeeting(this.form).subscribe(res => {
            this.creating.set(false);
            if (!res.success || !res.data) {
                this.createError.set(res.message || 'Failed to create meeting.');
                return;
            }
            this.service.addToList(res.data);
            this.showCreate.set(false);
            const link = `${window.location.origin}/meet/${res.data.roomCode}`;
            this.shareUrl.set(link);
            this.form = { title: '', candidateName: '', jobTitle: '', scheduledFor: undefined };
        });
    }
    copyRoomLink(roomCode) {
        const link = `${window.location.origin}/meet/${roomCode}`;
        navigator.clipboard.writeText(link);
    }
    copyLink() {
        if (this.shareUrl()) {
            navigator.clipboard.writeText(this.shareUrl());
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 2000);
        }
    }
    deleteMeeting(id) {
        if (!confirm('Delete this meeting?'))
            return;
        this.service.deleteMeeting(id).subscribe(res => {
            if (res.success)
                this.service.removeFromList(id);
        });
    }
    statusClass(status) {
        return {
            'waiting': 'bg-amber-100 text-amber-700',
            'live': 'bg-emerald-100 text-emerald-700',
            'ended': 'bg-slate-100 text-slate-600',
        }[status] ?? 'bg-slate-100 text-slate-600';
    }
    formatDate(iso) {
        return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
    formatDuration(secs) {
        const m = Math.floor(secs / 60);
        return m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`;
    }
    static { this.ɵfac = function HireMeetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HireMeetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HireMeetComponent, selectors: [["app-hiremeet"]], decls: 18, vars: 3, consts: [[1, "p-6", "max-w-5xl", "mx-auto"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "inline-flex", "items-center", "gap-2", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "text-sm", "font-medium", "px-4", "py-2", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "fixed", "inset-0", "bg-black/50", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "grid", "grid-cols-3", "gap-4", "mb-6"], [1, "bg-white", "border", "border-slate-200", "rounded-xl", "p-4"], [1, "bg-white", "border", "border-slate-200", "rounded-xl", "p-12", "text-center"], [1, "bg-white", "border", "border-slate-200", "rounded-xl", "overflow-hidden"], [1, "bg-white", "rounded-2xl", "shadow-2xl", "w-full", "max-w-md", "p-6"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "text-base", "font-semibold", "text-slate-900"], [1, "text-slate-400", "hover:text-slate-600", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "space-y-4"], [1, "block", "text-xs", "font-medium", "text-slate-700", "mb-1"], ["placeholder", "e.g. Technical Interview Round 2", 1, "w-full", "border", "border-slate-200", "rounded-lg", "px-3", "py-2.5", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Priya Sharma", 1, "w-full", "border", "border-slate-200", "rounded-lg", "px-3", "py-2.5", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Lead Frontend Engineer", 1, "w-full", "border", "border-slate-200", "rounded-lg", "px-3", "py-2.5", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "w-full", "border", "border-slate-200", "rounded-lg", "px-3", "py-2.5", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-red-500", "mt-3"], [1, "flex", "gap-3", "mt-6"], [1, "flex-1", "border", "border-slate-200", "text-slate-600", "text-sm", "font-medium", "py-2.5", "rounded-lg", "hover:bg-slate-50", "transition", 3, "click"], [1, "flex-1", "bg-indigo-600", "hover:bg-indigo-700", "disabled:opacity-50", "text-white", "text-sm", "font-semibold", "py-2.5", "rounded-lg", "transition", 3, "click", "disabled"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "text-slate-600", "mb-3"], [1, "flex", "gap-2"], ["readonly", "", 1, "flex-1", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "px-3", "py-2.5", "text-sm", "text-slate-700", 3, "value"], [1, "bg-indigo-600", "hover:bg-indigo-700", "text-white", "text-sm", "px-4", "rounded-lg", "transition", "whitespace-nowrap", 3, "click"], ["target", "_blank", 1, "mt-4", "flex", "items-center", "justify-center", "gap-2", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "text-sm", "font-semibold", "py-2.5", "rounded-lg", "transition", 3, "href"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "w-14", "h-14", "bg-indigo-50", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"], [1, "text-sm", "font-semibold", "text-slate-800", "mb-1"], [1, "text-xs", "text-slate-500", "mb-4"], [1, "bg-indigo-600", "hover:bg-indigo-700", "text-white", "text-sm", "font-medium", "px-4", "py-2", "rounded-lg", "transition", 3, "click"], [1, "w-full", "text-sm"], [1, "border-b", "border-slate-100"], [1, "text-left", "text-xs", "font-semibold", "text-slate-500", "px-4", "py-3", "uppercase", "tracking-wide"], [1, "text-left", "text-xs", "font-semibold", "text-slate-500", "px-4", "py-3", "uppercase", "tracking-wide", "hidden", "md:table-cell"], [1, "px-4", "py-3"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50", "transition-colors"], [1, "px-4", "py-3.5"], [1, "font-medium", "text-slate-900"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-emerald-500", "animate-pulse"], [1, "px-4", "py-3.5", "hidden", "md:table-cell"], [1, "text-sm", "text-slate-600"], [1, "flex", "items-center", "gap-2", "justify-end"], [1, "text-xs", "text-rose-400", "hover:text-rose-600", "hover:bg-rose-50", "p-1.5", "rounded-lg", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-xs", "font-medium", "text-indigo-600", "hover:text-indigo-700", "bg-indigo-50", "hover:bg-indigo-100", "px-3", "py-1.5", "rounded-lg", "transition", 3, "routerLink"], [1, "text-xs", "font-medium", "text-slate-600", "hover:text-slate-800", "bg-slate-100", "hover:bg-slate-200", "px-3", "py-1.5", "rounded-lg", "transition", 3, "click"]], template: function HireMeetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "HireMeet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Video interview rooms \u2014 powered by Daily.co");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function HireMeetComponent_Template_button_click_7_listener() { return ctx.showCreate.set(true); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 5);
            i0.ɵɵelement(9, "path", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " New Meeting ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(11, HireMeetComponent_Conditional_11_Template, 31, 7, "div", 7);
            i0.ɵɵconditionalCreate(12, HireMeetComponent_Conditional_12_Template, 18, 3, "div", 7);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵrepeaterCreate(14, HireMeetComponent_For_15_Template, 5, 2, "div", 9, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, HireMeetComponent_Conditional_16_Template, 10, 0, "div", 10)(17, HireMeetComponent_Conditional_17_Template, 16, 0, "div", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.showCreate() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.shareUrl() ? 12 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.stats());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.service.meetings().length === 0 ? 16 : 17);
        } }, dependencies: [CommonModule, RouterLink, FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TitleCasePipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HireMeetComponent, [{
        type: Component,
        args: [{
                selector: 'app-hiremeet',
                standalone: true,
                imports: [CommonModule, RouterLink, FormsModule],
                template: `
  <div class="p-6 max-w-5xl mx-auto">

    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-xl font-bold text-slate-900">HireMeet</h1>
        <p class="text-sm text-slate-500 mt-0.5">Video interview rooms — powered by Daily.co</p>
      </div>
      <button (click)="showCreate.set(true)"
        class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700
               text-white text-sm font-medium px-4 py-2 rounded-lg transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        New Meeting
      </button>
    </div>

    <!-- Create Modal -->
    @if (showCreate()) {
      <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-base font-semibold text-slate-900">Create Meeting Room</h2>
            <button (click)="showCreate.set(false)" class="text-slate-400 hover:text-slate-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Meeting Title *</label>
              <input [(ngModel)]="form.title" placeholder="e.g. Technical Interview Round 2"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Candidate Name *</label>
              <input [(ngModel)]="form.candidateName" placeholder="e.g. Priya Sharma"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Job Title *</label>
              <input [(ngModel)]="form.jobTitle" placeholder="e.g. Lead Frontend Engineer"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Scheduled For (optional)</label>
              <input [(ngModel)]="form.scheduledFor" type="datetime-local"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
          </div>

          @if (createError()) {
            <p class="text-xs text-red-500 mt-3">{{ createError() }}</p>
          }

          <div class="flex gap-3 mt-6">
            <button (click)="showCreate.set(false)"
              class="flex-1 border border-slate-200 text-slate-600 text-sm font-medium py-2.5 rounded-lg hover:bg-slate-50 transition">
              Cancel
            </button>
            <button (click)="createMeeting()" [disabled]="creating()"
              class="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50
                     text-white text-sm font-semibold py-2.5 rounded-lg transition">
              {{ creating() ? 'Creating...' : 'Create Room' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Share Modal -->
    @if (shareUrl()) {
      <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-semibold text-slate-900">Room Created! 🎉</h2>
            <button (click)="shareUrl.set(null)" class="text-slate-400 hover:text-slate-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-600 mb-3">Share this link with the candidate:</p>
          <div class="flex gap-2">
            <input [value]="shareUrl()!" readonly
              class="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700"/>
            <button (click)="copyLink()"
              class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 rounded-lg transition whitespace-nowrap">
              {{ copied() ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <a [href]="shareUrl()!" target="_blank"
            class="mt-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700
                   text-white text-sm font-semibold py-2.5 rounded-lg transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
            Join Meeting as Host
          </a>
        </div>
      </div>
    }

    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      @for (stat of stats(); track stat.label) {
        <div class="bg-white border border-slate-200 rounded-xl p-4">
          <p class="text-2xl font-bold text-slate-900">{{ stat.value }}</p>
          <p class="text-xs text-slate-500 mt-0.5">{{ stat.label }}</p>
        </div>
      }
    </div>

    <!-- Meetings list -->
    @if (service.meetings().length === 0) {
      <div class="bg-white border border-slate-200 rounded-xl p-12 text-center">
        <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
          </svg>
        </div>
        <h3 class="text-sm font-semibold text-slate-800 mb-1">No meetings yet</h3>
        <p class="text-xs text-slate-500 mb-4">Create your first HireMeet room to start interviewing candidates.</p>
        <button (click)="showCreate.set(true)"
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          Create Meeting
        </button>
      </div>
    } @else {
      <div class="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-100">
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide">Meeting</th>
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide">Status</th>
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide hidden md:table-cell">Scheduled</th>
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide hidden md:table-cell">Duration</th>
              <th class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            @for (m of service.meetings(); track m.id) {
              <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-4 py-3.5">
                  <p class="font-medium text-slate-900">{{ m.title }}</p>
                  <p class="text-xs text-slate-500 mt-0.5">{{ m.candidateName }} · {{ m.jobTitle }}</p>
                </td>
                <td class="px-4 py-3.5">
                  <span [class]="statusClass(m.status)"
                    class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full">
                    @if (m.status === 'live') {
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    }
                    {{ m.status | titlecase }}
                  </span>
                </td>
                <td class="px-4 py-3.5 hidden md:table-cell">
                  <span class="text-sm text-slate-600">{{ m.scheduledFor ? formatDate(m.scheduledFor) : '—' }}</span>
                </td>
                <td class="px-4 py-3.5 hidden md:table-cell">
                  <span class="text-sm text-slate-600">{{ m.duration ? formatDuration(m.duration) : '—' }}</span>
                </td>
                <td class="px-4 py-3.5">
                  <div class="flex items-center gap-2 justify-end">
                    @if (m.status !== 'ended') {
                      <a [routerLink]="['/meet', m.roomCode]"
                        class="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50
                               hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition">
                        Join
                      </a>
                      <button (click)="copyRoomLink(m.roomCode)"
                        class="text-xs font-medium text-slate-600 hover:text-slate-800 bg-slate-100
                               hover:bg-slate-200 px-3 py-1.5 rounded-lg transition">
                        Share
                      </button>
                    }
                    <button (click)="deleteMeeting(m.id)"
                      class="text-xs text-rose-400 hover:text-rose-600 hover:bg-rose-50 p-1.5 rounded-lg transition">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

  </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HireMeetComponent, { className: "HireMeetComponent", filePath: "src/app/features/recruiter/hiremeet/hiremeet.component.ts", lineNumber: 212 }); })();
