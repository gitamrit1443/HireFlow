import { Component, signal, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HireMeetService } from '../../../core/services/hiremeet.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function MeetRoomComponent_Conditional_0_Conditional_11_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "span", 20);
    i0.ɵɵelementStart(2, "span", 21);
    i0.ɵɵtext(3, "Live Now");
    i0.ɵɵelementEnd()();
} }
function MeetRoomComponent_Conditional_0_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "p", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, MeetRoomComponent_Conditional_0_Conditional_11_Conditional_5_Template, 4, 0, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.meeting().title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.meeting().jobTitle, " \u2022 ", ctx_r1.meeting().candidateName);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.meeting().status === "live" ? 5 : -1);
} }
function MeetRoomComponent_Conditional_0_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error(), " ");
} }
function MeetRoomComponent_Conditional_0_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 22);
    i0.ɵɵelement(1, "circle", 23)(2, "path", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Connecting... ");
} }
function MeetRoomComponent_Conditional_0_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 25);
    i0.ɵɵelement(1, "path", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Join Meeting ");
} }
function MeetRoomComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 6);
    i0.ɵɵelement(5, "path", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "p", 8);
    i0.ɵɵtext(8, "HireMeet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 9);
    i0.ɵɵtext(10, "by HireFlow");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(11, MeetRoomComponent_Conditional_0_Conditional_11_Template, 6, 4, "div", 10);
    i0.ɵɵelementStart(12, "div", 11)(13, "label", 12);
    i0.ɵɵtext(14, "Your Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function MeetRoomComponent_Conditional_0_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.participantName, $event) || (ctx_r1.participantName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(16, MeetRoomComponent_Conditional_0_Conditional_16_Template, 2, 1, "div", 14);
    i0.ɵɵelementStart(17, "button", 15);
    i0.ɵɵlistener("click", function MeetRoomComponent_Conditional_0_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.joinMeeting()); });
    i0.ɵɵconditionalCreate(18, MeetRoomComponent_Conditional_0_Conditional_18_Template, 4, 0)(19, MeetRoomComponent_Conditional_0_Conditional_19_Template, 3, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p", 16);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(ctx_r1.meeting() ? 11 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.participantName);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.joining() || !ctx_r1.participantName.trim());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.joining() ? 18 : 19);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.roomCode);
} }
function MeetRoomComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 26)(2, "div", 27)(3, "div", 28);
    i0.ɵɵelement(4, "span", 20);
    i0.ɵɵelementStart(5, "span", 29);
    i0.ɵɵtext(6, "LIVE");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 31);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 32);
    i0.ɵɵlistener("click", function MeetRoomComponent_Conditional_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.leaveMeeting()); });
    i0.ɵɵtext(12, " Leave ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 33);
    i0.ɵɵelement(14, "iframe", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r1.meeting()) == null ? null : tmp_1_0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.roomCode);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.iframeSrc(), i0.ɵɵsanitizeResourceUrl);
} }
function MeetRoomComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 35)(2, "div", 36);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 37);
    i0.ɵɵelement(4, "path", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "h2", 39);
    i0.ɵɵtext(6, "Meeting Ended");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 40);
    i0.ɵɵtext(8, "This room has been closed.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 41);
    i0.ɵɵlistener("click", function MeetRoomComponent_Conditional_2_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵtext(10, " Back to Dashboard ");
    i0.ɵɵelementEnd()()();
} }
function MeetRoomComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 35)(2, "h2", 39);
    i0.ɵɵtext(3, "Room Not Found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 40);
    i0.ɵɵtext(5, "No meeting with code ");
    i0.ɵɵelementStart(6, "code", 42);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, ".");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 43);
    i0.ɵɵlistener("click", function MeetRoomComponent_Conditional_3_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵtext(10, "Go Back");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.roomCode);
} }
export class MeetRoomComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.router = inject(Router);
        this.sanitizer = inject(DomSanitizer);
        this.meetSvc = inject(HireMeetService);
        this.authSvc = inject(AuthService);
        this.roomCode = '';
        this.participantName = '';
        this.phase = signal('prejoin', ...(ngDevMode ? [{ debugName: "phase" }] : []));
        this.joining = signal(false, ...(ngDevMode ? [{ debugName: "joining" }] : []));
        this.error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.meeting = signal(null, ...(ngDevMode ? [{ debugName: "meeting" }] : []));
        this.iframeSrc = signal('', ...(ngDevMode ? [{ debugName: "iframeSrc" }] : []));
    }
    ngOnInit() {
        this.roomCode = this.route.snapshot.paramMap.get('roomCode') ?? '';
        if (!this.roomCode) {
            this.phase.set('notfound');
            return;
        }
        // Pre-fill name from logged in user
        const user = this.authSvc.currentUser();
        if (user)
            this.participantName = user.name;
        // Load meeting info
        this.meetSvc.getByRoomCode(this.roomCode).subscribe(res => {
            if (!res.success || !res.data) {
                this.phase.set('notfound');
                return;
            }
            if (res.data.status === 'ended') {
                this.phase.set('ended');
                return;
            }
            this.meeting.set(res.data);
        });
    }
    joinMeeting() {
        if (!this.participantName.trim())
            return;
        this.joining.set(true);
        this.error.set(null);
        const user = this.authSvc.currentUser();
        const role = user?.role === 'recruiter' ? 'recruiter' : 'candidate';
        this.meetSvc.joinMeeting(this.roomCode, this.participantName.trim(), role).subscribe(res => {
            this.joining.set(false);
            if (!res.success || !res.data) {
                this.error.set(res.message || 'Could not join. Please try again.');
                return;
            }
            // Build Daily.co iframe URL: https://hireroom.daily.co/{roomCode}?t={token}
            const url = `${res.data.dailyRoomUrl}?t=${res.data.meetingToken}`;
            this.iframeSrc.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
            this.phase.set('live');
        });
    }
    leaveMeeting() {
        this.iframeSrc.set('');
        this.goBack();
    }
    goBack() {
        const role = this.authSvc.currentUser()?.role;
        this.router.navigate([role === 'recruiter' ? '/recruiter/hiremeet' : '/candidate/dashboard']);
    }
    static { this.ɵfac = function MeetRoomComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MeetRoomComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeetRoomComponent, selectors: [["app-meet-room"]], decls: 4, vars: 4, consts: [[1, "min-h-screen", "bg-gray-950", "flex", "items-center", "justify-center", "p-4"], [1, "fixed", "inset-0", "bg-gray-950", "flex", "flex-col"], [1, "min-h-screen", "bg-gray-950", "flex", "items-center", "justify-center"], [1, "bg-gray-900", "border", "border-gray-800", "rounded-2xl", "p-8", "w-full", "max-w-md", "shadow-2xl"], [1, "flex", "items-center", "gap-2.5", "mb-8"], [1, "w-9", "h-9", "bg-indigo-600", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"], [1, "text-white", "font-bold", "text-sm", "leading-none"], [1, "text-gray-500", "text-xs"], [1, "mb-6", "p-3", "bg-gray-800", "rounded-xl"], [1, "mb-5"], [1, "block", "text-xs", "font-medium", "text-gray-400", "mb-1.5"], ["placeholder", "Enter your name to join", 1, "w-full", "bg-gray-800", "border", "border-gray-700", "rounded-xl", "px-4", "py-3", "text-white", "text-sm", "placeholder-gray-600", "focus:outline-none", "focus:border-indigo-500", "transition", 3, "ngModelChange", "ngModel"], [1, "bg-red-900/30", "border", "border-red-800", "text-red-400", "rounded-xl", "p-3", "text-xs", "mb-4"], [1, "w-full", "bg-indigo-600", "hover:bg-indigo-700", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "font-semibold", "py-3", "rounded-xl", "transition", "text-sm", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], [1, "text-center", "text-gray-700", "text-xs", "mt-5", "font-mono"], [1, "text-white", "font-semibold", "text-sm"], [1, "text-gray-400", "text-xs", "mt-0.5"], [1, "flex", "items-center", "gap-1.5", "mt-2"], [1, "w-2", "h-2", "rounded-full", "bg-emerald-400", "animate-pulse"], [1, "text-xs", "text-emerald-400", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "flex", "items-center", "justify-between", "px-4", "py-2.5", "bg-gray-900/80", "backdrop-blur", "border-b", "border-gray-800", "z-10"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-1.5"], [1, "text-emerald-400", "text-xs", "font-semibold"], [1, "text-white", "font-medium", "text-sm"], [1, "hidden", "sm:block", "text-gray-600", "text-xs", "font-mono"], [1, "bg-red-600", "hover:bg-red-700", "text-white", "text-xs", "font-semibold", "px-4", "py-1.5", "rounded-lg", "transition", 3, "click"], [1, "flex-1"], ["allow", "camera; microphone; autoplay; display-capture; fullscreen; clipboard-write", "allowfullscreen", "", "title", "HireMeet Video Room", 1, "w-full", "h-full", "border-0", 3, "src"], [1, "text-center"], [1, "w-16", "h-16", "bg-gray-800", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M6 18L18 6M6 6l12 12"], [1, "text-lg", "font-bold", "text-white", "mb-2"], [1, "text-gray-500", "text-sm", "mb-6"], [1, "bg-indigo-600", "hover:bg-indigo-700", "text-white", "px-6", "py-2", "rounded-xl", "text-sm", "transition", 3, "click"], [1, "text-indigo-400"], [1, "bg-indigo-600", "text-white", "px-6", "py-2", "rounded-xl", "text-sm", 3, "click"]], template: function MeetRoomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, MeetRoomComponent_Conditional_0_Template, 22, 6, "div", 0);
            i0.ɵɵconditionalCreate(1, MeetRoomComponent_Conditional_1_Template, 15, 3, "div", 1);
            i0.ɵɵconditionalCreate(2, MeetRoomComponent_Conditional_2_Template, 11, 0, "div", 2);
            i0.ɵɵconditionalCreate(3, MeetRoomComponent_Conditional_3_Template, 11, 1, "div", 2);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.phase() === "prejoin" ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.phase() === "live" ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.phase() === "ended" ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.phase() === "notfound" ? 3 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeetRoomComponent, [{
        type: Component,
        args: [{
                selector: 'app-meet-room',
                standalone: true,
                imports: [CommonModule, FormsModule],
                template: `
  <!-- PRE-JOIN SCREEN -->
  @if (phase() === 'prejoin') {
    <div class="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">

        <!-- Logo -->
        <div class="flex items-center gap-2.5 mb-8">
          <div class="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
          </div>
          <div>
            <p class="text-white font-bold text-sm leading-none">HireMeet</p>
            <p class="text-gray-500 text-xs">by HireFlow</p>
          </div>
        </div>

        @if (meeting()) {
          <div class="mb-6 p-3 bg-gray-800 rounded-xl">
            <p class="text-white font-semibold text-sm">{{ meeting()!.title }}</p>
            <p class="text-gray-400 text-xs mt-0.5">{{ meeting()!.jobTitle }} &bull; {{ meeting()!.candidateName }}</p>
            @if (meeting()!.status === 'live') {
              <div class="flex items-center gap-1.5 mt-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs text-emerald-400 font-medium">Live Now</span>
              </div>
            }
          </div>
        }

        <div class="mb-5">
          <label class="block text-xs font-medium text-gray-400 mb-1.5">Your Name</label>
          <input [(ngModel)]="participantName" placeholder="Enter your name to join"
            class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm
                   placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition"/>
        </div>

        @if (error()) {
          <div class="bg-red-900/30 border border-red-800 text-red-400 rounded-xl p-3 text-xs mb-4">
            {{ error() }}
          </div>
        }

        <button (click)="joinMeeting()" [disabled]="joining() || !participantName.trim()"
          class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed
                 text-white font-semibold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2">
          @if (joining()) {
            <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Connecting...
          } @else {
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
            Join Meeting
          }
        </button>

        <p class="text-center text-gray-700 text-xs mt-5 font-mono">{{ roomCode }}</p>
      </div>
    </div>
  }

  <!-- LIVE MEETING — Daily.co iframe -->
  @if (phase() === 'live') {
    <div class="fixed inset-0 bg-gray-950 flex flex-col">
      <!-- Topbar -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-gray-900/80 backdrop-blur border-b border-gray-800 z-10">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-emerald-400 text-xs font-semibold">LIVE</span>
          </div>
          <span class="text-white font-medium text-sm">{{ meeting()?.title }}</span>
          <span class="hidden sm:block text-gray-600 text-xs font-mono">{{ roomCode }}</span>
        </div>
        <button (click)="leaveMeeting()"
          class="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition">
          Leave
        </button>
      </div>
      <!-- Daily.co real video iframe -->
      <div class="flex-1">
        <iframe [src]="iframeSrc()"
          allow="camera; microphone; autoplay; display-capture; fullscreen; clipboard-write"
          allowfullscreen
          class="w-full h-full border-0"
          title="HireMeet Video Room">
        </iframe>
      </div>
    </div>
  }

  <!-- ENDED -->
  @if (phase() === 'ended') {
    <div class="min-h-screen bg-gray-950 flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
        <h2 class="text-lg font-bold text-white mb-2">Meeting Ended</h2>
        <p class="text-gray-500 text-sm mb-6">This room has been closed.</p>
        <button (click)="goBack()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl text-sm transition">
          Back to Dashboard
        </button>
      </div>
    </div>
  }

  <!-- NOT FOUND -->
  @if (phase() === 'notfound') {
    <div class="min-h-screen bg-gray-950 flex items-center justify-center">
      <div class="text-center">
        <h2 class="text-lg font-bold text-white mb-2">Room Not Found</h2>
        <p class="text-gray-500 text-sm mb-6">No meeting with code <code class="text-indigo-400">{{ roomCode }}</code>.</p>
        <button (click)="goBack()" class="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm">Go Back</button>
      </div>
    </div>
  }
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MeetRoomComponent, { className: "MeetRoomComponent", filePath: "src/app/features/recruiter/hiremeet/meet-room.component.ts", lineNumber: 143 }); })();
