import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
function InterviewRoomComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "span", 16);
    i0.ɵɵtext(2, " LIVE ");
    i0.ɵɵelementEnd();
} }
function InterviewRoomComponent_Conditional_19_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 46);
    i0.ɵɵtext(1, " Loading room\u2026 ");
} }
function InterviewRoomComponent_Conditional_19_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 47);
    i0.ɵɵelement(1, "path", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Join Interview Room ");
} }
function InterviewRoomComponent_Conditional_19_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 48);
    i0.ɵɵelement(1, "path", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Copied! ");
} }
function InterviewRoomComponent_Conditional_19_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 4);
    i0.ɵɵelement(1, "path", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Copy ");
} }
function InterviewRoomComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 21);
    i0.ɵɵelement(6, "path", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "h2", 23);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 24);
    i0.ɵɵtext(10, "Video Interview Room");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 25)(12, "div", 26)(13, "div", 27)(14, "p", 28);
    i0.ɵɵtext(15, "Room ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 29);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 27)(19, "p", 28);
    i0.ɵɵtext(20, "Your Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p", 30);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 27)(24, "p", 28);
    i0.ɵɵtext(25, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p", 31);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 27)(29, "p", 28);
    i0.ɵɵtext(30, "Platform");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 32);
    i0.ɵɵtext(32, "Jitsi Meet");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(34, "svg", 34);
    i0.ɵɵelement(35, "path", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(36, "span", 36);
    i0.ɵɵtext(37, " Allow camera & microphone access when prompted by your browser. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "button", 37);
    i0.ɵɵlistener("click", function InterviewRoomComponent_Conditional_19_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startMeeting()); });
    i0.ɵɵconditionalCreate(39, InterviewRoomComponent_Conditional_19_Conditional_39_Template, 2, 0)(40, InterviewRoomComponent_Conditional_19_Conditional_40_Template, 3, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 38);
    i0.ɵɵlistener("click", function InterviewRoomComponent_Conditional_19_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openInNewTab()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(42, "svg", 39);
    i0.ɵɵelement(43, "path", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(44, " Open in new tab instead ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(45, "div", 41)(46, "p", 42);
    i0.ɵɵtext(47, "\uD83D\uDCCB Share this room link with candidate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 43)(49, "p", 44);
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "button", 45);
    i0.ɵɵlistener("click", function InterviewRoomComponent_Conditional_19_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.copyLink()); });
    i0.ɵɵconditionalCreate(52, InterviewRoomComponent_Conditional_19_Conditional_52_Template, 3, 0)(53, InterviewRoomComponent_Conditional_19_Conditional_53_Template, 3, 0);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.interviewTitle());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.roomId());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.auth.userName());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_4_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_4_0.role);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r1.isLoading());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLoading() ? 39 : 40);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.joinUrl(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.copied() ? 52 : 53);
} }
function InterviewRoomComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "div", 51);
    i0.ɵɵelementEnd();
} }
export class InterviewRoomComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.auth = inject(AuthService);
        this.roomId = signal('', ...(ngDevMode ? [{ debugName: "roomId" }] : []));
        this.interviewTitle = signal('Interview Session', ...(ngDevMode ? [{ debugName: "interviewTitle" }] : []));
        this.meetingStarted = signal(false, ...(ngDevMode ? [{ debugName: "meetingStarted" }] : []));
        this.isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
        this.copied = signal(false, ...(ngDevMode ? [{ debugName: "copied" }] : []));
        this.joinUrl = signal('', ...(ngDevMode ? [{ debugName: "joinUrl" }] : []));
        this.jitsiAPI = null;
    }
    ngOnInit() {
        const paramRoom = this.route.snapshot.paramMap.get('roomId');
        const candidateName = this.route.snapshot.queryParamMap.get('candidate') ?? 'Candidate';
        const roomId = paramRoom ?? `hireflow-${Date.now()}`;
        this.roomId.set(roomId);
        this.interviewTitle.set(`Interview with ${candidateName}`);
        this.joinUrl.set(`${window.location.origin}/recruiter/interviews/room/${roomId}?candidate=${encodeURIComponent(candidateName)}`);
    }
    startMeeting() {
        this.isLoading.set(true);
        if (typeof JitsiMeetExternalAPI !== 'undefined') {
            this.meetingStarted.set(true);
            this.isLoading.set(false);
            setTimeout(() => this.initJitsi(), 100);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.onload = () => {
            this.meetingStarted.set(true);
            this.isLoading.set(false);
            setTimeout(() => this.initJitsi(), 100);
        };
        script.onerror = () => {
            this.isLoading.set(false);
            alert('Could not load Jitsi Meet. Please try "Open in new tab".');
        };
        document.head.appendChild(script);
    }
    initJitsi() {
        const container = document.getElementById('jitsi-container');
        if (!container)
            return;
        const user = this.auth.currentUser();
        this.jitsiAPI = new JitsiMeetExternalAPI('meet.jit.si', {
            roomName: this.roomId(),
            parentNode: container,
            width: '100%',
            height: '100%',
            userInfo: {
                displayName: user?.name ?? 'HireFlow User',
                email: user?.email ?? '',
            },
            configOverwrite: {
                prejoinPageEnabled: false,
                startWithAudioMuted: false,
                startWithVideoMuted: false,
                disableModeratorIndicator: false,
                toolbarButtons: [
                    'microphone', 'camera', 'desktop', 'fullscreen',
                    'fodeviceselection', 'hangup', 'chat', 'tileview',
                    'select-background', 'stats', 'shortcuts', 'closedcaptions',
                ],
            },
            interfaceConfigOverwrite: {
                APP_NAME: 'HireFlow Interview',
                SHOW_JITSI_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                DEFAULT_BACKGROUND: '#1e293b',
                TOOLBAR_ALWAYS_VISIBLE: false,
            },
        });
        this.jitsiAPI.addEventListeners({
            readyToClose: () => {
                this.meetingStarted.set(false);
                this.jitsiAPI = null;
            },
        });
    }
    openInNewTab() {
        window.open(`https://meet.jit.si/${this.roomId()}`, '_blank');
    }
    copyLink() {
        navigator.clipboard.writeText(this.joinUrl()).then(() => {
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 2000);
        });
    }
    ngOnDestroy() {
        if (this.jitsiAPI) {
            try {
                this.jitsiAPI.dispose();
            }
            catch { }
        }
    }
    static { this.ɵfac = function InterviewRoomComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewRoomComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InterviewRoomComponent, selectors: [["app-interview-room"]], decls: 21, vars: 6, consts: [[1, "min-h-screen", "bg-slate-50", "flex", "flex-col"], [1, "h-14", "bg-white", "border-b", "border-slate-200", "flex", "items-center", "justify-between", "px-4", "md:px-6", "flex-shrink-0", "gap-4"], [1, "flex", "items-center", "gap-3", "min-w-0"], ["routerLink", "/recruiter/interviews", 1, "flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-slate-500", "hover:text-slate-800", "transition-colors", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-slate-300"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-900", "truncate"], [1, "text-xs", "text-slate-400", "font-mono", "truncate"], [1, "flex", "items-center", "gap-2", "flex-shrink-0"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-bold", "px-2.5", "py-1", "rounded-full", "bg-rose-100", "text-rose-600"], [1, "hidden", "sm:inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full", "bg-slate-100", "text-slate-600"], [1, "flex-1", "p-4", "md:p-6", "flex", "flex-col"], [1, "flex-1", "flex", "items-center", "justify-center"], [1, "flex-1", "rounded-2xl", "overflow-hidden", "border", "border-slate-200", "shadow-lg", 2, "min-height", "500px"], [1, "w-1.5", "h-1.5", "bg-rose-500", "rounded-full", "animate-pulse"], [1, "w-full", "max-w-md"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-sm", "overflow-hidden"], [1, "bg-gradient-to-r", "from-indigo-600", "to-indigo-500", "px-6", "py-8", "text-center"], [1, "w-16", "h-16", "bg-white/20", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-3"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-8", "h-8", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"], [1, "text-xl", "font-bold", "text-white"], [1, "text-indigo-200", "text-sm", "mt-1"], [1, "p-6"], [1, "grid", "grid-cols-2", "gap-3", "mb-5"], [1, "bg-slate-50", "rounded-xl", "p-3"], [1, "text-xs", "font-semibold", "text-slate-400", "uppercase", "tracking-wide", "mb-1"], [1, "text-xs", "font-mono", "text-slate-700", "truncate"], [1, "text-sm", "font-semibold", "text-slate-800", "truncate"], [1, "text-sm", "font-semibold", "text-slate-800", "capitalize"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "flex", "items-start", "gap-2.5", "p-3", "bg-amber-50", "border", "border-amber-200", "rounded-xl", "mb-5", "text-sm", "text-amber-800"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"], [1, "text-xs", "font-medium"], [1, "w-full", "btn", "btn-primary", "normal-case", "font-semibold", "rounded-xl", "disabled:opacity-60", "disabled:cursor-not-allowed", "mb-2", 3, "click", "disabled"], [1, "w-full", "btn", "btn-ghost", "btn-sm", "normal-case", "text-slate-500", "hover:text-slate-700", "rounded-xl", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"], [1, "mt-4", "bg-white", "border", "border-slate-200", "rounded-xl", "p-4"], [1, "text-xs", "font-semibold", "text-slate-500", "mb-2"], [1, "flex", "items-center", "gap-2"], [1, "flex-1", "text-xs", "font-mono", "text-slate-600", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "px-3", "py-2", "truncate"], [1, "btn", "btn-sm", "btn-outline", "normal-case", "flex-shrink-0", 3, "click"], [1, "loading", "loading-spinner", "loading-sm", "mr-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "mr-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-emerald-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"], ["id", "jitsi-container", 1, "w-full", "h-full", 2, "min-height", "500px"]], template: function InterviewRoomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, " Back ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "span", 6);
            i0.ɵɵtext(8, "|");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7)(10, "p", 8);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p", 9);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 10);
            i0.ɵɵconditionalCreate(15, InterviewRoomComponent_Conditional_15_Template, 3, 0, "span", 11);
            i0.ɵɵelementStart(16, "span", 12);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "div", 13);
            i0.ɵɵconditionalCreate(19, InterviewRoomComponent_Conditional_19_Template, 54, 8, "div", 14);
            i0.ɵɵconditionalCreate(20, InterviewRoomComponent_Conditional_20_Template, 2, 0, "div", 15);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.interviewTitle());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Room: ", ctx.roomId());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.meetingStarted() ? 15 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.auth.userName(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.meetingStarted() ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.meetingStarted() ? 20 : -1);
        } }, dependencies: [CommonModule, RouterLink], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewRoomComponent, [{
        type: Component,
        args: [{
                selector: 'app-interview-room',
                standalone: true,
                imports: [CommonModule, RouterLink],
                template: `
    <div class="min-h-screen bg-slate-50 flex flex-col">

      <!-- Top Bar -->
      <div class="h-14 bg-white border-b border-slate-200 flex items-center
                  justify-between px-4 md:px-6 flex-shrink-0 gap-4">

        <div class="flex items-center gap-3 min-w-0">
          <a routerLink="/recruiter/interviews"
             class="flex items-center gap-1.5 text-sm font-medium text-slate-500
                    hover:text-slate-800 transition-colors flex-shrink-0">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back
          </a>
          <span class="text-slate-300">|</span>
          <div class="min-w-0">
            <p class="text-sm font-semibold text-slate-900 truncate">{{ interviewTitle() }}</p>
            <p class="text-xs text-slate-400 font-mono truncate">Room: {{ roomId() }}</p>
          </div>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          @if (meetingStarted()) {
            <span class="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1
                         rounded-full bg-rose-100 text-rose-600">
              <span class="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
              LIVE
            </span>
          }
          <span class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold
                       px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {{ auth.userName() }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 p-4 md:p-6 flex flex-col">

        <!-- Pre-join Screen -->
        @if (!meetingStarted()) {
          <div class="flex-1 flex items-center justify-center">
            <div class="w-full max-w-md">
              <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                <!-- Header -->
                <div class="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-8 text-center">
                  <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center
                              justify-center mx-auto mb-3">
                    <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                  </div>
                  <h2 class="text-xl font-bold text-white">{{ interviewTitle() }}</h2>
                  <p class="text-indigo-200 text-sm mt-1">Video Interview Room</p>
                </div>

                <!-- Room Info -->
                <div class="p-6">
                  <div class="grid grid-cols-2 gap-3 mb-5">
                    <div class="bg-slate-50 rounded-xl p-3">
                      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Room ID</p>
                      <p class="text-xs font-mono text-slate-700 truncate">{{ roomId() }}</p>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-3">
                      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Your Name</p>
                      <p class="text-sm font-semibold text-slate-800 truncate">{{ auth.userName() }}</p>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-3">
                      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Role</p>
                      <p class="text-sm font-semibold text-slate-800 capitalize">{{ auth.currentUser()?.role }}</p>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-3">
                      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Platform</p>
                      <p class="text-sm font-semibold text-slate-800">Jitsi Meet</p>
                    </div>
                  </div>

                  <!-- Permission tip -->
                  <div class="flex items-start gap-2.5 p-3 bg-amber-50 border border-amber-200
                              rounded-xl mb-5 text-sm text-amber-800">
                    <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                    </svg>
                    <span class="text-xs font-medium">
                      Allow camera &amp; microphone access when prompted by your browser.
                    </span>
                  </div>

                  <!-- Actions -->
                  <button
                    (click)="startMeeting()"
                    [disabled]="isLoading()"
                    class="w-full btn btn-primary normal-case font-semibold rounded-xl
                           disabled:opacity-60 disabled:cursor-not-allowed mb-2">
                    @if (isLoading()) {
                      <span class="loading loading-spinner loading-sm mr-2"></span>
                      Loading room…
                    } @else {
                      <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                      </svg>
                      Join Interview Room
                    }
                  </button>

                  <button
                    (click)="openInNewTab()"
                    class="w-full btn btn-ghost btn-sm normal-case text-slate-500
                           hover:text-slate-700 rounded-xl">
                    <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                    </svg>
                    Open in new tab instead
                  </button>

                </div>
              </div>

              <!-- Share link box -->
              <div class="mt-4 bg-white border border-slate-200 rounded-xl p-4">
                <p class="text-xs font-semibold text-slate-500 mb-2">📋 Share this room link with candidate</p>
                <div class="flex items-center gap-2">
                  <p class="flex-1 text-xs font-mono text-slate-600 bg-slate-50
                             border border-slate-200 rounded-lg px-3 py-2 truncate">
                    {{ joinUrl() }}
                  </p>
                  <button
                    (click)="copyLink()"
                    class="btn btn-sm btn-outline normal-case flex-shrink-0">
                    @if (copied()) {
                      <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Copied!
                    } @else {
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
                      </svg>
                      Copy
                    }
                  </button>
                </div>
              </div>

            </div>
          </div>
        }

        <!-- Jitsi Embed -->
        @if (meetingStarted()) {
          <div class="flex-1 rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
               style="min-height: 500px;">
            <div id="jitsi-container" class="w-full h-full" style="min-height: 500px;"></div>
          </div>
        }

      </div>
    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InterviewRoomComponent, { className: "InterviewRoomComponent", filePath: "src/app/features/recruiter/interviews/interview-room.component.ts", lineNumber: 185 }); })();
