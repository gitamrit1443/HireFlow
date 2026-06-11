import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InterviewService } from '../../../core/services/interview.service';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { ROUND_LABELS, ROUND_COLORS } from '../../../core/models/interview.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ["/recruiter/candidates", a0];
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.date;
const _forTrack2 = ($index, $item) => $item.id;
const _forTrack3 = ($index, $item) => $item.label;
const _forTrack4 = ($index, $item) => $item.ctrl;
const _forTrack5 = ($index, $item) => $item.value;
function InterviewsComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function InterviewsComponent_For_13_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeTab.set(tab_r2.key)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activeTab() === tab_r2.key ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.activeTab() === tab_r2.key ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2.count(), " ");
} }
function InterviewsComponent_Conditional_14_For_2_For_11_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 45);
    i0.ɵɵelement(2, "path", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "p", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const iv_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", iv_r5.agenda, " ");
} }
function InterviewsComponent_Conditional_14_For_2_For_11_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ir_r6 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", ir_r6.avatarColor);
    i0.ɵɵproperty("title", ir_r6.name + " \u2014 " + ir_r6.role);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ir_r6.name[0], " ");
} }
function InterviewsComponent_Conditional_14_For_2_For_11_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 41);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 39);
    i0.ɵɵelement(2, "path", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " External Link ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const iv_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", iv_r5.meetingLink, i0.ɵɵsanitizeUrl);
} }
function InterviewsComponent_Conditional_14_For_2_For_11_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const iv_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \uD83D\uDCCD ", iv_r5.location, " ");
} }
function InterviewsComponent_Conditional_14_For_2_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "p", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 23);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div", 24);
    i0.ɵɵelementStart(8, "p", 25);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 26)(11, "div", 27);
    i0.ɵɵelement(12, "app-avatar", 28);
    i0.ɵɵelementStart(13, "div", 26)(14, "div", 29)(15, "a", 30);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 31);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 31);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "p", 32);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(23, InterviewsComponent_Conditional_14_For_2_For_11_Conditional_23_Template, 5, 1, "div", 33);
    i0.ɵɵelementStart(24, "div", 34)(25, "span", 17);
    i0.ɵɵtext(26, "Panel:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 35);
    i0.ɵɵrepeaterCreate(28, InterviewsComponent_Conditional_14_For_2_For_11_For_29_Template, 2, 4, "div", 36, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 32);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 37)(33, "button", 38);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_14_For_2_For_11_Template_button_click_33_listener() { const iv_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.joinJitsiRoom(iv_r5.candidateName, iv_r5.id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(34, "svg", 39);
    i0.ɵɵelement(35, "path", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36, " \uD83C\uDFA5 Join Room ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(37, InterviewsComponent_Conditional_14_For_2_For_11_Conditional_37_Template, 4, 1, "a", 41);
    i0.ɵɵconditionalCreate(38, InterviewsComponent_Conditional_14_For_2_For_11_Conditional_38_Template, 2, 1, "span", 42);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(39, "button", 43);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_14_For_2_For_11_Template_button_click_39_listener() { const iv_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openFeedbackForm(iv_r5)); });
    i0.ɵɵtext(40, " + Add Feedback ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 44);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_14_For_2_For_11_Template_button_click_41_listener() { const iv_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.interviewService.cancel(iv_r5.id)); });
    i0.ɵɵtext(42, " Cancel ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const iv_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.interviewService.formatTime(iv_r5.startTime), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.interviewService.formatTime(iv_r5.endTime), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(iv_r5.timezone);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", iv_r5.candidateName)("color", iv_r5.candidateColor);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(17, _c0, iv_r5.candidateId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", iv_r5.candidateName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.getRoundClass(iv_r5.round));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getRoundLabel(iv_r5.round), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", iv_r5.mode === "online" ? "bg-blue-50 text-blue-600" : iv_r5.mode === "offline" ? "bg-slate-100 text-slate-600" : "bg-purple-50 text-purple-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", iv_r5.mode === "online" ? "\uD83D\uDD17 Online" : iv_r5.mode === "offline" ? "\uD83C\uDFE2 In-office" : "\uD83D\uDCDE Phone", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", iv_r5.jobTitle, " \u00B7 ", iv_r5.department, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(iv_r5.agenda ? 23 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(iv_r5.interviewers);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getInterviewerNames(iv_r5.interviewers), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(iv_r5.meetingLink ? 37 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(iv_r5.location ? 38 : -1);
} }
function InterviewsComponent_Conditional_14_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 15)(2, "span", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 18);
    i0.ɵɵelementStart(7, "span", 17);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵrepeaterCreate(10, InterviewsComponent_Conditional_14_For_2_For_11_Template, 43, 19, "div", 19, _forTrack2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.interviewService.formatDateLabel(group_r7.date), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.formatFullDate(group_r7.date), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", group_r7.interviews.length, " ", group_r7.interviews.length === 1 ? "interview" : "interviews", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(group_r7.interviews);
} }
function InterviewsComponent_Conditional_14_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 51);
    i0.ɵɵelement(3, "path", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h3", 53);
    i0.ɵɵtext(5, "No upcoming interviews");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 54);
    i0.ɵɵtext(7, " Schedule an interview with a shortlisted candidate. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 55);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_14_Conditional_3_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.showScheduleModal.set(true)); });
    i0.ɵɵtext(9, " Schedule Interview ");
    i0.ɵɵelementEnd()();
} }
function InterviewsComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵrepeaterCreate(1, InterviewsComponent_Conditional_14_For_2_Template, 12, 4, "div", null, _forTrack1);
    i0.ɵɵconditionalCreate(3, InterviewsComponent_Conditional_14_Conditional_3_Template, 10, 0, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.groupedUpcoming());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.groupedUpcoming().length === 0 ? 3 : -1);
} }
function InterviewsComponent_Conditional_15_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 60);
    i0.ɵɵtext(1, " \u2713 Feedback submitted ");
    i0.ɵɵelementEnd();
} }
function InterviewsComponent_Conditional_15_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1, " Pending feedback ");
    i0.ɵɵelementEnd();
} }
function InterviewsComponent_Conditional_15_For_2_Conditional_13_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "p", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const metric_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", metric_r9.value, "/10");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(metric_r9.label);
} }
function InterviewsComponent_Conditional_15_For_2_Conditional_13_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 70);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fb_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\"", fb_r10.notes, "\"");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u2014 ", fb_r10.submittedBy);
} }
function InterviewsComponent_Conditional_15_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 65);
    i0.ɵɵrepeaterCreate(2, InterviewsComponent_Conditional_15_For_2_Conditional_13_For_3_Template, 5, 2, "div", 66, _forTrack3);
    i0.ɵɵelementStart(4, "div", 67)(5, "span", 68);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(7, InterviewsComponent_Conditional_15_For_2_Conditional_13_Conditional_7_Template, 4, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fb_r10 = ctx;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.feedbackMetrics(fb_r10));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r2.getRecommendationClass(fb_r10.recommendation));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.formatRecommendation(fb_r10.recommendation), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(fb_r10.notes ? 7 : -1);
} }
function InterviewsComponent_Conditional_15_For_2_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_15_For_2_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const iv_r12 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openFeedbackForm(iv_r12)); });
    i0.ɵɵtext(1, " Submit Feedback ");
    i0.ɵɵelementEnd();
} }
function InterviewsComponent_Conditional_15_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56)(1, "div", 57);
    i0.ɵɵelement(2, "app-avatar", 28);
    i0.ɵɵelementStart(3, "div", 26)(4, "div", 58)(5, "a", 59);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, InterviewsComponent_Conditional_15_For_2_Conditional_9_Template, 2, 0, "span", 60)(10, InterviewsComponent_Conditional_15_For_2_Conditional_10_Template, 2, 0, "span", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 62);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, InterviewsComponent_Conditional_15_For_2_Conditional_13_Template, 8, 3, "div", 63)(14, InterviewsComponent_Conditional_15_For_2_Conditional_14_Template, 2, 0, "button", 64);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_19_0;
    const iv_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", iv_r12.candidateName)("color", iv_r12.candidateColor);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, iv_r12.candidateId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", iv_r12.candidateName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.getRoundClass(iv_r12.round));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getRoundLabel(iv_r12.round), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(iv_r12.feedback ? 9 : 10);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" ", iv_r12.jobTitle, " \u00B7 ", ctx_r2.formatFullDate(iv_r12.scheduledDate), " at ", ctx_r2.interviewService.formatTime(iv_r12.startTime), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_19_0 = iv_r12.feedback) ? 13 : 14, tmp_19_0);
} }
function InterviewsComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵrepeaterCreate(1, InterviewsComponent_Conditional_15_For_2_Template, 15, 13, "div", 56, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.completedInterviews());
} }
function InterviewsComponent_Conditional_16_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r14.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", c_r14.name, " \u2014 ", c_r14.jobTitle);
} }
function InterviewsComponent_Conditional_16_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 86);
    i0.ɵɵtext(1, "Required.");
    i0.ɵɵelementEnd();
} }
function InterviewsComponent_Conditional_16_For_74_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 106)(1, "input", 113);
    i0.ɵɵlistener("change", function InterviewsComponent_Conditional_16_For_74_Template_input_change_1_listener() { const ir_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleInterviewer(ir_r16.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 114)(3, "div", 115);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 116)(6, "p", 117);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 118);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ir_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ir_r16.id)("checked", ctx_r2.selectedInterviewers().includes(ir_r16.id));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("background-color", ir_r16.avatarColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ir_r16.name[0], " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ir_r16.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ir_r16.role);
} }
function InterviewsComponent_Conditional_16_Conditional_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 111);
} }
function InterviewsComponent_Conditional_16_Conditional_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112);
    i0.ɵɵtext(1, " \u2713 Interview scheduled successfully! ");
    i0.ɵɵelementEnd();
} }
function InterviewsComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_16_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showScheduleModal.set(false)); });
    i0.ɵɵelementStart(1, "div", 73);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_16_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r13); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 74)(3, "div")(4, "h2", 75);
    i0.ɵɵtext(5, "Schedule Interview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 76);
    i0.ɵɵtext(7, "Book a slot with a candidate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 77);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_16_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showScheduleModal.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 78);
    i0.ɵɵelement(10, "path", 79);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "form", 80);
    i0.ɵɵlistener("ngSubmit", function InterviewsComponent_Conditional_16_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitSchedule()); });
    i0.ɵɵelementStart(12, "div")(13, "label", 81);
    i0.ɵɵtext(14, " Candidate ");
    i0.ɵɵelementStart(15, "span", 82);
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "select", 83)(18, "option", 84);
    i0.ɵɵtext(19, "Select candidate\u2026");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(20, InterviewsComponent_Conditional_16_For_21_Template, 2, 3, "option", 85, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(22, InterviewsComponent_Conditional_16_Conditional_22_Template, 2, 0, "p", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 87)(24, "div")(25, "label", 81);
    i0.ɵɵtext(26, "Round");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 88)(28, "option", 89);
    i0.ɵɵtext(29, "Screening");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 90);
    i0.ɵɵtext(31, "Technical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 91);
    i0.ɵɵtext(33, "System Design");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 92);
    i0.ɵɵtext(35, "HR Round");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 93);
    i0.ɵɵtext(37, "Leadership");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 94);
    i0.ɵɵtext(39, "Final");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div")(41, "label", 81);
    i0.ɵɵtext(42, "Mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "select", 95)(44, "option", 96);
    i0.ɵɵtext(45, "Online");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "option", 97);
    i0.ɵɵtext(47, "In-office");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "option", 98);
    i0.ɵɵtext(49, "Phone");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(50, "div", 99)(51, "div", 100)(52, "label", 81);
    i0.ɵɵtext(53, " Date ");
    i0.ɵɵelementStart(54, "span", 82);
    i0.ɵɵtext(55, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(56, "input", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div")(58, "label", 81);
    i0.ɵɵtext(59, "Start");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(60, "input", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "div")(62, "label", 81);
    i0.ɵɵtext(63, "End");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(64, "input", 103);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "div")(66, "label", 81);
    i0.ɵɵtext(67, " Meeting Link / Room ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(68, "input", 104);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "div")(70, "label", 81);
    i0.ɵɵtext(71, " Interviewers ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "div", 105);
    i0.ɵɵrepeaterCreate(73, InterviewsComponent_Conditional_16_For_74_Template, 10, 7, "label", 106, _forTrack2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "div")(76, "label", 81);
    i0.ɵɵtext(77, " Agenda / Topics ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "textarea", 107);
    i0.ɵɵtext(79, "                ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(80, "div", 108)(81, "button", 109);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_16_Template_button_click_81_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showScheduleModal.set(false)); });
    i0.ɵɵtext(82, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "button", 110);
    i0.ɵɵconditionalCreate(84, InterviewsComponent_Conditional_16_Conditional_84_Template, 1, 0, "span", 111);
    i0.ɵɵtext(85, " Confirm Schedule ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(86, InterviewsComponent_Conditional_16_Conditional_86_Template, 2, 0, "div", 112);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("formGroup", ctx_r2.scheduleForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r2.schedErr("candidateId") ? "border-rose-300" : "border-slate-200");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.candidatesApi.candidates());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.schedErr("candidateId") ? 22 : -1);
    i0.ɵɵadvance(34);
    i0.ɵɵproperty("ngClass", ctx_r2.schedErr("scheduledDate") ? "border-rose-300" : "border-slate-200");
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r2.interviewService.interviewers);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r2.scheduleForm.invalid || ctx_r2.isSubmittingSchedule());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isSubmittingSchedule() ? 84 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.scheduleSuccess() ? 86 : -1);
} }
function InterviewsComponent_Conditional_17_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 128)(2, "label", 129);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 130);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "input", 131);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_12_0;
    const metric_r18 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(metric_r18.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ((tmp_12_0 = ctx_r2.feedbackForm.get(metric_r18.ctrl)) == null ? null : tmp_12_0.value) || 5, "/10 ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", metric_r18.ctrl);
} }
function InterviewsComponent_Conditional_17_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 123);
    i0.ɵɵelement(1, "input", 132);
    i0.ɵɵelementStart(2, "span", 133);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_11_0;
    const rec_r19 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ((tmp_11_0 = ctx_r2.feedbackForm.get("recommendation")) == null ? null : tmp_11_0.value) === rec_r19.value ? rec_r19.activeClass : "border-slate-200 hover:border-slate-300");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", rec_r19.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(rec_r19.label);
} }
function InterviewsComponent_Conditional_17_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 111);
} }
function InterviewsComponent_Conditional_17_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112);
    i0.ɵɵtext(1, " \u2713 Feedback submitted! ");
    i0.ɵɵelementEnd();
} }
function InterviewsComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_17_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.feedbackInterview.set(null)); });
    i0.ɵɵelementStart(1, "div", 73);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_17_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r17); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 74)(3, "div")(4, "h2", 75);
    i0.ɵɵtext(5, "Submit Feedback");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 76);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 77);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_17_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.feedbackInterview.set(null)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 78);
    i0.ɵɵelement(10, "path", 79);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "form", 119);
    i0.ɵɵlistener("ngSubmit", function InterviewsComponent_Conditional_17_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitFeedback()); });
    i0.ɵɵelementStart(12, "div")(13, "p", 120);
    i0.ɵɵtext(14, "Evaluation Scores (1\u201310)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 121);
    i0.ɵɵrepeaterCreate(16, InterviewsComponent_Conditional_17_For_17_Template, 7, 3, "div", null, _forTrack4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div")(19, "label", 122);
    i0.ɵɵtext(20, " Recommendation ");
    i0.ɵɵelementStart(21, "span", 82);
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 105);
    i0.ɵɵrepeaterCreate(24, InterviewsComponent_Conditional_17_For_25_Template, 4, 3, "label", 123, _forTrack5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div")(27, "label", 81);
    i0.ɵɵtext(28, "Strengths");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "textarea", 124);
    i0.ɵɵtext(30, "                ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div")(32, "label", 81);
    i0.ɵɵtext(33, "Concerns / Gaps");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "textarea", 125);
    i0.ɵɵtext(35, "                ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div")(37, "label", 81);
    i0.ɵɵtext(38, " Additional Notes ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "textarea", 126);
    i0.ɵɵtext(40, "                ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 127)(42, "button", 109);
    i0.ɵɵlistener("click", function InterviewsComponent_Conditional_17_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.feedbackInterview.set(null)); });
    i0.ɵɵtext(43, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 110);
    i0.ɵɵconditionalCreate(45, InterviewsComponent_Conditional_17_Conditional_45_Template, 1, 0, "span", 111);
    i0.ɵɵtext(46, " Submit Feedback ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(47, InterviewsComponent_Conditional_17_Conditional_47_Template, 2, 0, "div", 112);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.feedbackInterview().candidateName, " \u00B7 ", ctx_r2.getRoundLabel(ctx_r2.feedbackInterview().round), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r2.feedbackForm);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r2.feedbackMetricDefs);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r2.recommendations);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("disabled", ctx_r2.feedbackForm.invalid || ctx_r2.isSubmittingFeedback());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isSubmittingFeedback() ? 45 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.feedbackSuccess() ? 47 : -1);
} }
export class InterviewsComponent {
    constructor() {
        this.interviewService = inject(InterviewService);
        this.router = inject(Router);
        this.candidatesApi = inject(CandidatesApiService);
        this.fb = inject(FormBuilder);
        this.activeTab = signal('upcoming', ...(ngDevMode ? [{ debugName: "activeTab" }] : []));
        this.upcomingCount = computed(() => this.interviewService.getUpcoming().length, ...(ngDevMode ? [{ debugName: "upcomingCount" }] : []));
        this.completedCount = computed(() => this.interviewService.getCompleted().length, ...(ngDevMode ? [{ debugName: "completedCount" }] : []));
        this.tabs = [
            { key: 'upcoming', label: 'Upcoming', count: this.upcomingCount },
            { key: 'completed', label: 'Completed', count: this.completedCount },
        ];
        this.groupedUpcoming = computed(() => {
            const upcoming = this.interviewService.getUpcoming();
            const map = new Map();
            for (const iv of upcoming) {
                const arr = map.get(iv.scheduledDate) ?? [];
                arr.push(iv);
                map.set(iv.scheduledDate, arr);
            }
            return Array.from(map.entries())
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([date, interviews]) => ({ date, interviews }));
        }, ...(ngDevMode ? [{ debugName: "groupedUpcoming" }] : []));
        this.completedInterviews = computed(() => this.interviewService.getCompleted(), ...(ngDevMode ? [{ debugName: "completedInterviews" }] : []));
        this.showScheduleModal = signal(false, ...(ngDevMode ? [{ debugName: "showScheduleModal" }] : []));
        this.isSubmittingSchedule = signal(false, ...(ngDevMode ? [{ debugName: "isSubmittingSchedule" }] : []));
        this.scheduleSuccess = signal(false, ...(ngDevMode ? [{ debugName: "scheduleSuccess" }] : []));
        this.selectedInterviewers = signal([], ...(ngDevMode ? [{ debugName: "selectedInterviewers" }] : []));
        this.scheduleForm = this.fb.group({
            candidateId: ['', Validators.required],
            round: ['technical'],
            mode: ['online'],
            scheduledDate: ['', Validators.required],
            startTime: ['10:00'],
            endTime: ['11:00'],
            meetingLink: [''],
            agenda: [''],
        });
        this.feedbackInterview = signal(null, ...(ngDevMode ? [{ debugName: "feedbackInterview" }] : []));
        this.isSubmittingFeedback = signal(false, ...(ngDevMode ? [{ debugName: "isSubmittingFeedback" }] : []));
        this.feedbackSuccess = signal(false, ...(ngDevMode ? [{ debugName: "feedbackSuccess" }] : []));
        this.feedbackMetricDefs = [
            { label: 'Technical Skill', ctrl: 'technicalScore' },
            { label: 'Communication', ctrl: 'communicationScore' },
            { label: 'Problem Solving', ctrl: 'problemSolvingScore' },
            { label: 'Culture Fit', ctrl: 'cultureFitScore' },
        ];
        this.recommendations = [
            { value: 'strong_hire', label: 'Strong Hire', activeClass: 'border-emerald-400 bg-emerald-50 text-emerald-700' },
            { value: 'hire', label: 'Hire', activeClass: 'border-blue-400 bg-blue-50 text-blue-700' },
            { value: 'maybe', label: 'Maybe', activeClass: 'border-amber-400 bg-amber-50 text-amber-700' },
            { value: 'no_hire', label: 'No Hire', activeClass: 'border-rose-400 bg-rose-50 text-rose-700' },
        ];
        this.feedbackForm = this.fb.group({
            technicalScore: [7],
            communicationScore: [7],
            problemSolvingScore: [7],
            cultureFitScore: [7],
            recommendation: ['', Validators.required],
            strengths: [''],
            concerns: [''],
            notes: [''],
        });
    }
    async ngOnInit() {
        await Promise.all([
            this.interviewService.load(),
            this.candidatesApi.loadAll(),
        ]);
    }
    schedErr(field) {
        const ctrl = this.scheduleForm.get(field);
        return !!(ctrl?.invalid && ctrl?.touched);
    }
    toggleInterviewer(id) {
        this.selectedInterviewers.update(list => list.includes(id) ? list.filter(x => x !== id) : [...list, id]);
    }
    async submitSchedule() {
        this.scheduleForm.markAllAsTouched();
        if (this.scheduleForm.invalid)
            return;
        this.isSubmittingSchedule.set(true);
        const v = this.scheduleForm.value;
        const candidate = this.candidatesApi.candidates().find(item => item.id === v.candidateId);
        const panelists = this.interviewService.interviewers
            .filter(ir => this.selectedInterviewers().includes(ir.id));
        const newInterview = {
            id: this.interviewService.generateId(),
            candidateId: candidate.id,
            candidateName: candidate.name,
            candidateColor: candidate.avatarColor,
            jobTitle: candidate.jobTitle,
            jobId: candidate.jobId,
            department: candidate.department,
            round: v.round,
            mode: v.mode,
            status: 'scheduled',
            scheduledDate: v.scheduledDate,
            startTime: v.startTime,
            endTime: v.endTime,
            timezone: 'IST',
            interviewers: panelists,
            meetingLink: v.meetingLink || ('https://meet.jit.si/hireflow-' + candidate.id + '-' + v.scheduledDate),
            agenda: v.agenda || undefined,
        };
        try {
            await this.interviewService.add(newInterview);
            this.isSubmittingSchedule.set(false);
            this.scheduleSuccess.set(true);
            this.scheduleForm.reset({ round: 'technical', mode: 'online', startTime: '10:00', endTime: '11:00' });
            this.selectedInterviewers.set([]);
            setTimeout(() => {
                this.showScheduleModal.set(false);
                this.scheduleSuccess.set(false);
            }, 1200);
        }
        catch {
            this.isSubmittingSchedule.set(false);
        }
    }
    openFeedbackForm(iv) {
        this.feedbackInterview.set(iv);
        this.feedbackForm.reset({
            technicalScore: 7, communicationScore: 7, problemSolvingScore: 7, cultureFitScore: 7,
        });
    }
    async submitFeedback() {
        this.feedbackForm.markAllAsTouched();
        if (this.feedbackForm.invalid || !this.feedbackInterview())
            return;
        this.isSubmittingFeedback.set(true);
        const v = this.feedbackForm.value;
        const iv = this.feedbackInterview();
        const feedback = {
            interviewId: iv.id,
            submittedBy: 'Rahul Mehta',
            submittedAt: new Date().toISOString(),
            technicalScore: v.technicalScore,
            communicationScore: v.communicationScore,
            problemSolvingScore: v.problemSolvingScore,
            cultureFitScore: v.cultureFitScore,
            overallScore: Math.round((v.technicalScore + v.communicationScore + v.problemSolvingScore + v.cultureFitScore) / 4),
            recommendation: v.recommendation,
            strengths: v.strengths,
            concerns: v.concerns,
            notes: v.notes,
        };
        try {
            await this.interviewService.submitFeedback(iv.id, feedback);
            this.isSubmittingFeedback.set(false);
            this.feedbackSuccess.set(true);
            setTimeout(() => {
                this.feedbackInterview.set(null);
                this.feedbackSuccess.set(false);
            }, 1200);
        }
        catch {
            this.isSubmittingFeedback.set(false);
        }
    }
    getInterviewerNames(interviewers = []) {
        return interviewers.map(interviewer => interviewer.name).join(', ');
    }
    getRoundLabel(round) {
        return ROUND_LABELS[round] ?? round;
    }
    getRoundClass(round) {
        return ROUND_COLORS[round] ?? 'bg-slate-100 text-slate-600';
    }
    getRecommendationClass(rec) {
        return {
            strong_hire: 'bg-emerald-100 text-emerald-700',
            hire: 'bg-blue-100 text-blue-700',
            maybe: 'bg-amber-100 text-amber-700',
            no_hire: 'bg-rose-100 text-rose-700',
        }[rec] ?? 'bg-slate-100 text-slate-600';
    }
    formatRecommendation(rec) {
        return { strong_hire: 'Strong Hire', hire: 'Hire', maybe: 'Maybe', no_hire: 'No Hire' }[rec] ?? rec;
    }
    feedbackMetrics(fb) {
        return [
            { label: 'Technical', value: fb.technicalScore },
            { label: 'Comms', value: fb.communicationScore },
            { label: 'Problem Solv.', value: fb.problemSolvingScore },
            { label: 'Culture', value: fb.cultureFitScore },
        ];
    }
    formatFullDate(iso) {
        return new Date(iso).toLocaleDateString('en-US', {
            weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
        });
    }
    joinJitsiRoom(candidateName, interviewId) {
        const slug = candidateName.toLowerCase().split(' ').join('-');
        const roomId = 'hireflow-' + interviewId + '-' + slug;
        this.router.navigate(['/recruiter/interviews/room', roomId], {
            queryParams: { candidate: candidateName }
        });
    }
    static { this.ɵfac = function InterviewsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InterviewsComponent, selectors: [["app-interviews"]], decls: 18, vars: 6, consts: [[1, "p-6", "max-w-screen-xl", "mx-auto", "space-y-5"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "btn", "btn-primary", "btn-sm", "normal-case", "font-medium", "self-start", "sm:self-auto", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "mr-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 4.5v15m7.5-7.5h-15"], [1, "flex", "gap-0", "border-b", "border-slate-200"], [1, "px-4", "py-2.5", "text-sm", "font-semibold", "border-b-2", "transition-colors", "duration-150", "-mb-px", 3, "ngClass"], [1, "space-y-6"], [1, "space-y-3"], [1, "fixed", "inset-0", "bg-black/40", "z-40", "flex", "items-center", "justify-center", "p-4"], [1, "px-4", "py-2.5", "text-sm", "font-semibold", "border-b-2", "transition-colors", "duration-150", "-mb-px", 3, "click", "ngClass"], [1, "ml-1.5", "text-xs", "px-1.5", "py-0.5", "rounded-full", "font-semibold", 3, "ngClass"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "py-16", "text-center"], [1, "flex", "items-center", "gap-3", "mb-3"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-400", "font-medium"], [1, "flex-1", "h-px", "bg-slate-200"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5", "hover:shadow-card-hover", "transition-shadow", "duration-200"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "gap-4"], [1, "flex-shrink-0", "text-center", "w-16", "pt-0.5"], [1, "text-base", "font-bold", "text-indigo-600", "leading-tight"], [1, "text-xs", "text-slate-400", "font-medium", "mt-0.5"], [1, "mt-1.5", "w-px", "h-8", "bg-slate-200", "mx-auto"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "flex-1", "min-w-0"], [1, "flex", "items-start", "gap-3", "mb-3"], ["size", "md", 3, "name", "color"], [1, "flex", "flex-wrap", "items-center", "gap-2", "mb-0.5"], [1, "text-sm", "font-bold", "text-slate-900", "hover:text-indigo-600", "transition-colors", 3, "routerLink"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", 3, "ngClass"], [1, "text-xs", "text-slate-500"], [1, "mb-3", "flex", "items-start", "gap-2"], [1, "flex", "items-center", "gap-2", "mb-3"], [1, "flex", "-space-x-1.5"], [1, "w-6", "h-6", "rounded-full", "border-2", "border-white", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-white", "flex-shrink-0", 3, "backgroundColor", "title"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "text-white", "bg-indigo-600", "hover:bg-indigo-700", "px-3", "py-1.5", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "text-indigo-600", "hover:text-indigo-700", "bg-indigo-50", "hover:bg-indigo-100", "px-3", "py-1.5", "rounded-lg", "transition-colors", 3, "href"], [1, "text-xs", "text-slate-500", "bg-slate-50", "px-3", "py-1.5", "rounded-lg", "font-medium"], [1, "ml-auto", "text-xs", "font-semibold", "text-slate-500", "hover:text-slate-700", "border", "border-slate-200", "bg-white", "hover:bg-slate-50", "px-3", "py-1.5", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xs", "font-semibold", "text-rose-500", "hover:text-rose-700", "border", "border-rose-200", "bg-rose-50", "hover:bg-rose-100", "px-3", "py-1.5", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5", "text-slate-400", "mt-0.5", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"], [1, "text-xs", "text-slate-500", "italic", "leading-relaxed"], [1, "w-6", "h-6", "rounded-full", "border-2", "border-white", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-white", "flex-shrink-0", 3, "title"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"], [1, "w-14", "h-14", "bg-indigo-50", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7", "text-indigo-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"], [1, "text-base", "font-semibold", "text-slate-900", "mb-1"], [1, "text-sm", "text-slate-500", "mb-4", "max-w-xs", "mx-auto"], [1, "btn", "btn-primary", "btn-sm", "normal-case", "font-medium", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5"], [1, "flex", "items-start", "gap-4"], [1, "flex", "flex-wrap", "items-center", "gap-2", "mb-1"], [1, "text-sm", "font-bold", "text-slate-900", "hover:text-indigo-600", 3, "routerLink"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-emerald-100", "text-emerald-700"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-amber-100", "text-amber-700"], [1, "text-xs", "text-slate-500", "mb-2"], [1, "bg-slate-50", "rounded-lg", "p-3", "mt-2"], [1, "btn", "btn-xs", "btn-primary", "normal-case", "font-medium", "mt-2"], [1, "flex", "items-center", "gap-4", "mb-2"], [1, "text-center"], [1, "ml-auto"], [1, "text-xs", "font-bold", "px-2.5", "py-1", "rounded-full", 3, "ngClass"], [1, "text-xs", "text-slate-600", "italic"], [1, "text-xs", "text-slate-400", "mt-1", "font-medium"], [1, "btn", "btn-xs", "btn-primary", "normal-case", "font-medium", "mt-2", 3, "click"], [1, "fixed", "inset-0", "bg-black/40", "z-40", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "shadow-2xl", "w-full", "max-w-lg", "max-h-[90vh]", "overflow-y-auto", "scrollbar-thin", 3, "click"], [1, "flex", "items-center", "justify-between", "px-6", "py-5", "border-b", "border-slate-100"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "hover:bg-slate-100", "text-slate-400", "hover:text-slate-600", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-4", 3, "ngSubmit", "formGroup"], [1, "block", "text-sm", "font-semibold", "text-slate-700", "mb-1.5"], [1, "text-rose-500"], ["formControlName", "candidateId", 1, "w-full", "px-3", "py-2", "text-sm", "border", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngClass"], ["value", ""], [3, "value"], [1, "text-xs", "text-rose-500", "mt-1"], [1, "grid", "grid-cols-2", "gap-3"], ["formControlName", "round", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["value", "screening"], ["value", "technical"], ["value", "system_design"], ["value", "hr"], ["value", "leadership"], ["value", "final"], ["formControlName", "mode", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["value", "online"], ["value", "offline"], ["value", "phone"], [1, "grid", "grid-cols-3", "gap-3"], [1, "col-span-1"], ["formControlName", "scheduledDate", "type", "date", 1, "w-full", "px-3", "py-2", "text-sm", "border", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngClass"], ["formControlName", "startTime", "type", "time", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "endTime", "type", "time", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "meetingLink", "type", "text", "placeholder", "https://meet.google.com/... or Conference Room 3B", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "grid", "grid-cols-2", "gap-2"], [1, "flex", "items-center", "gap-2.5", "p-2.5", "rounded-lg", "border", "border-slate-200", "hover:bg-slate-50", "cursor-pointer", "transition-colors"], ["formControlName", "agenda", "rows", "2", "placeholder", "e.g. System design, RxJS patterns, previous project walkthrough", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "gap-3", "pt-2"], ["type", "button", 1, "flex-1", "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium", 3, "click"], ["type", "submit", 1, "flex-1", "btn", "btn-sm", "btn-primary", "normal-case", "font-medium", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [1, "loading", "loading-spinner", "loading-xs", "mr-1"], [1, "flex", "items-center", "gap-2", "p-3", "bg-emerald-50", "border", "border-emerald-200", "rounded-lg", "text-emerald-700", "text-xs", "font-semibold"], ["type", "checkbox", 1, "w-3.5", "h-3.5", "accent-indigo-600", 3, "change", "value", "checked"], [1, "flex", "items-center", "gap-2", "min-w-0"], [1, "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "flex-shrink-0"], [1, "min-w-0"], [1, "text-xs", "font-semibold", "text-slate-800", "truncate"], [1, "text-xs", "text-slate-400", "truncate"], [1, "p-6", "space-y-5", 3, "ngSubmit", "formGroup"], [1, "text-sm", "font-semibold", "text-slate-700", "mb-3"], [1, "space-y-4"], [1, "block", "text-sm", "font-semibold", "text-slate-700", "mb-2"], [1, "flex", "items-center", "gap-2", "p-2.5", "rounded-lg", "border-2", "cursor-pointer", "transition-all", 3, "ngClass"], ["formControlName", "strengths", "rows", "2", "placeholder", "What the candidate did well\u2026", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "concerns", "rows", "2", "placeholder", "Areas for improvement or gaps\u2026", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "notes", "rows", "2", "placeholder", "Any other observations for the hiring team\u2026", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "resize-none", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "gap-3", "pt-1"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-xs", "font-semibold", "text-slate-600"], [1, "text-sm", "font-bold", "text-indigo-600"], ["type", "range", "min", "1", "max", "10", "step", "1", 1, "w-full", "h-2", "bg-slate-200", "rounded-lg", "appearance-none", "cursor-pointer", "accent-indigo-600", 3, "formControlName"], ["type", "radio", "formControlName", "recommendation", 1, "accent-indigo-600", 3, "value"], [1, "text-xs", "font-bold"]], template: function InterviewsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Interviews");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function InterviewsComponent_Template_button_click_7_listener() { return ctx.showScheduleModal.set(true); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 5);
            i0.ɵɵelement(9, "path", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Schedule Interview ");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵrepeaterCreate(12, InterviewsComponent_For_13_Template, 4, 4, "button", 8, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(14, InterviewsComponent_Conditional_14_Template, 4, 1, "div", 9);
            i0.ɵɵconditionalCreate(15, InterviewsComponent_Conditional_15_Template, 3, 0, "div", 10);
            i0.ɵɵconditionalCreate(16, InterviewsComponent_Conditional_16_Template, 87, 7, "div", 11);
            i0.ɵɵconditionalCreate(17, InterviewsComponent_Conditional_17_Template, 48, 6, "div", 11);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2(" ", ctx.upcomingCount(), " upcoming \u00B7 ", ctx.completedCount(), " completed this week ");
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.tabs);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activeTab() === "upcoming" ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "completed" ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showScheduleModal() ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.feedbackInterview() ? 17 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, RouterLink, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.RangeValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, FormsModule, AvatarComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewsComponent, [{
        type: Component,
        args: [{
                selector: 'app-interviews',
                standalone: true,
                imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, AvatarComponent],
                template: `
    <div class="p-6 max-w-screen-xl mx-auto space-y-5">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-xl font-bold text-slate-900">Interviews</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ upcomingCount() }} upcoming · {{ completedCount() }} completed this week
          </p>
        </div>
        <button (click)="showScheduleModal.set(true)"
          class="btn btn-primary btn-sm normal-case font-medium self-start sm:self-auto">
          <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
          </svg>
          Schedule Interview
        </button>
      </div>

      <div class="flex gap-0 border-b border-slate-200">
        @for (tab of tabs; track tab.key) {
          <button (click)="activeTab.set(tab.key)"
            class="px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors duration-150 -mb-px"
            [ngClass]="activeTab() === tab.key
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'">
            {{ tab.label }}
            <span class="ml-1.5 text-xs px-1.5 py-0.5 rounded-full font-semibold"
                  [ngClass]="activeTab() === tab.key
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-slate-100 text-slate-500'">
              {{ tab.count() }}
            </span>
          </button>
        }
      </div>

      @if (activeTab() === 'upcoming') {
        <div class="space-y-6">
          @for (group of groupedUpcoming(); track group.date) {
            <div>
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sm font-bold text-slate-900">
                  {{ interviewService.formatDateLabel(group.date) }}
                </span>
                <span class="text-xs text-slate-400 font-medium">
                  {{ formatFullDate(group.date) }}
                </span>
                <div class="flex-1 h-px bg-slate-200"></div>
                <span class="text-xs text-slate-400 font-medium">
                  {{ group.interviews.length }} {{ group.interviews.length === 1 ? 'interview' : 'interviews' }}
                </span>
              </div>

              <div class="space-y-3">
                @for (iv of group.interviews; track iv.id) {
                  <div class="bg-white rounded-xl border border-slate-200 p-5
                              hover:shadow-card-hover transition-shadow duration-200">
                    <div class="flex flex-col md:flex-row md:items-start gap-4">

                      <div class="flex-shrink-0 text-center w-16 pt-0.5">
                        <p class="text-base font-bold text-indigo-600 leading-tight">
                          {{ interviewService.formatTime(iv.startTime) }}
                        </p>
                        <p class="text-xs text-slate-400 font-medium mt-0.5">
                          {{ interviewService.formatTime(iv.endTime) }}
                        </p>
                        <div class="mt-1.5 w-px h-8 bg-slate-200 mx-auto"></div>
                        <p class="text-xs text-slate-400 mt-1">{{ iv.timezone }}</p>
                      </div>

                      <div class="flex-1 min-w-0">
                        <div class="flex items-start gap-3 mb-3">
                          <app-avatar [name]="iv.candidateName"
                                      [color]="iv.candidateColor" size="md"/>
                          <div class="flex-1 min-w-0">
                            <div class="flex flex-wrap items-center gap-2 mb-0.5">
                              <a [routerLink]="['/recruiter/candidates', iv.candidateId]"
                                 class="text-sm font-bold text-slate-900 hover:text-indigo-600
                                        transition-colors">
                                {{ iv.candidateName }}
                              </a>
                              <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                                    [ngClass]="getRoundClass(iv.round)">
                                {{ getRoundLabel(iv.round) }}
                              </span>
                              <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                                    [ngClass]="iv.mode === 'online'
                                      ? 'bg-blue-50 text-blue-600'
                                      : iv.mode === 'offline'
                                        ? 'bg-slate-100 text-slate-600'
                                        : 'bg-purple-50 text-purple-600'">
                                {{ iv.mode === 'online' ? '🔗 Online'
                                   : iv.mode === 'offline' ? '🏢 In-office'
                                   : '📞 Phone' }}
                              </span>
                            </div>
                            <p class="text-xs text-slate-500">
                              {{ iv.jobTitle }} · {{ iv.department }}
                            </p>
                          </div>
                        </div>

                        @if (iv.agenda) {
                          <div class="mb-3 flex items-start gap-2">
                            <svg class="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                            </svg>
                            <p class="text-xs text-slate-500 italic leading-relaxed">
                              {{ iv.agenda }}
                            </p>
                          </div>
                        }

                        <div class="flex items-center gap-2 mb-3">
                          <span class="text-xs text-slate-400 font-medium">Panel:</span>
                          <div class="flex -space-x-1.5">
                            @for (ir of iv.interviewers; track ir.id) {
                              <div class="w-6 h-6 rounded-full border-2 border-white
                                          flex items-center justify-center text-xs font-bold
                                          text-white flex-shrink-0"
                                   [style.backgroundColor]="ir.avatarColor"
                                   [title]="ir.name + ' — ' + ir.role">
                                {{ ir.name[0] }}
                              </div>
                            }
                          </div>
                          <span class="text-xs text-slate-500">
                            {{ getInterviewerNames(iv.interviewers) }}
                          </span>
                        </div>

                        <div class="flex flex-wrap items-center gap-2">
                          <!-- Jitsi Room Button -->
                          <button
                            (click)="joinJitsiRoom(iv.candidateName, iv.id)"
                            class="inline-flex items-center gap-1.5 text-xs font-semibold
                                   text-white bg-indigo-600 hover:bg-indigo-700
                                   px-3 py-1.5 rounded-lg transition-colors">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                            </svg>
                            🎥 Join Room
                          </button>
                          @if (iv.meetingLink) {
                            <a [href]="iv.meetingLink" target="_blank"
                               class="inline-flex items-center gap-1.5 text-xs font-semibold
                                      text-indigo-600 hover:text-indigo-700 bg-indigo-50
                                      hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors">
                              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                              </svg>
                              External Link
                            </a>
                          }
                          @if (iv.location) {
                            <span class="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg font-medium">
                              📍 {{ iv.location }}
                            </span>
                          }
                          <button (click)="openFeedbackForm(iv)"
                            class="ml-auto text-xs font-semibold text-slate-500
                                   hover:text-slate-700 border border-slate-200 bg-white
                                   hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                            + Add Feedback
                          </button>
                          <button (click)="interviewService.cancel(iv.id)"
                            class="text-xs font-semibold text-rose-500
                                   hover:text-rose-700 border border-rose-200 bg-rose-50
                                   hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors">
                            Cancel
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                }
              </div>
            </div>
          }

          @if (groupedUpcoming().length === 0) {
            <div class="bg-white rounded-xl border border-slate-200 py-16 text-center">
              <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center
                          justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                </svg>
              </div>
              <h3 class="text-base font-semibold text-slate-900 mb-1">No upcoming interviews</h3>
              <p class="text-sm text-slate-500 mb-4 max-w-xs mx-auto">
                Schedule an interview with a shortlisted candidate.
              </p>
              <button (click)="showScheduleModal.set(true)"
                class="btn btn-primary btn-sm normal-case font-medium">
                Schedule Interview
              </button>
            </div>
          }
        </div>
      }

      @if (activeTab() === 'completed') {
        <div class="space-y-3">
          @for (iv of completedInterviews(); track iv.id) {
            <div class="bg-white rounded-xl border border-slate-200 p-5">
              <div class="flex items-start gap-4">
                <app-avatar [name]="iv.candidateName" [color]="iv.candidateColor" size="md"/>
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <a [routerLink]="['/recruiter/candidates', iv.candidateId]"
                       class="text-sm font-bold text-slate-900 hover:text-indigo-600">
                      {{ iv.candidateName }}
                    </a>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                          [ngClass]="getRoundClass(iv.round)">
                      {{ getRoundLabel(iv.round) }}
                    </span>
                    @if (iv.feedback) {
                      <span class="text-xs font-semibold px-2 py-0.5 rounded-full
                                   bg-emerald-100 text-emerald-700">
                        ✓ Feedback submitted
                      </span>
                    } @else {
                      <span class="text-xs font-semibold px-2 py-0.5 rounded-full
                                   bg-amber-100 text-amber-700">
                        Pending feedback
                      </span>
                    }
                  </div>
                  <p class="text-xs text-slate-500 mb-2">
                    {{ iv.jobTitle }} · {{ formatFullDate(iv.scheduledDate) }} at
                    {{ interviewService.formatTime(iv.startTime) }}
                  </p>

                  @if (iv.feedback; as fb) {
                    <div class="bg-slate-50 rounded-lg p-3 mt-2">
                      <div class="flex items-center gap-4 mb-2">
                        @for (metric of feedbackMetrics(fb); track metric.label) {
                          <div class="text-center">
                            <p class="text-sm font-bold text-slate-900">{{ metric.value }}/10</p>
                            <p class="text-xs text-slate-500">{{ metric.label }}</p>
                          </div>
                        }
                        <div class="ml-auto">
                          <span class="text-xs font-bold px-2.5 py-1 rounded-full"
                                [ngClass]="getRecommendationClass(fb.recommendation)">
                            {{ formatRecommendation(fb.recommendation) }}
                          </span>
                        </div>
                      </div>
                      @if (fb.notes) {
                        <p class="text-xs text-slate-600 italic">"{{ fb.notes }}"</p>
                        <p class="text-xs text-slate-400 mt-1 font-medium">— {{ fb.submittedBy }}</p>
                      }
                    </div>
                  } @else {
                    <button (click)="openFeedbackForm(iv)"
                      class="btn btn-xs btn-primary normal-case font-medium mt-2">
                      Submit Feedback
                    </button>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }

      @if (showScheduleModal()) {
        <div class="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4"
             (click)="showScheduleModal.set(false)">
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh]
                      overflow-y-auto scrollbar-thin"
               (click)="$event.stopPropagation()">

            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h2 class="text-base font-bold text-slate-900">Schedule Interview</h2>
                <p class="text-xs text-slate-500 mt-0.5">Book a slot with a candidate</p>
              </div>
              <button (click)="showScheduleModal.set(false)"
                class="w-8 h-8 flex items-center justify-center rounded-lg
                       hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <form [formGroup]="scheduleForm" (ngSubmit)="submitSchedule()" class="p-6 space-y-4">

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Candidate <span class="text-rose-500">*</span>
                </label>
                <select formControlName="candidateId"
                  class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  [ngClass]="schedErr('candidateId') ? 'border-rose-300' : 'border-slate-200'">
                  <option value="">Select candidate…</option>
                  @for (c of candidatesApi.candidates(); track c.id) {
                    <option [value]="c.id">{{ c.name }} — {{ c.jobTitle }}</option>
                  }
                </select>
                @if (schedErr('candidateId')) {
                  <p class="text-xs text-rose-500 mt-1">Required.</p>
                }
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Round</label>
                  <select formControlName="round"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="screening">Screening</option>
                    <option value="technical">Technical</option>
                    <option value="system_design">System Design</option>
                    <option value="hr">HR Round</option>
                    <option value="leadership">Leadership</option>
                    <option value="final">Final</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Mode</label>
                  <select formControlName="mode"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="online">Online</option>
                    <option value="offline">In-office</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="col-span-1">
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                    Date <span class="text-rose-500">*</span>
                  </label>
                  <input formControlName="scheduledDate" type="date"
                    class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    [ngClass]="schedErr('scheduledDate') ? 'border-rose-300' : 'border-slate-200'"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Start</label>
                  <input formControlName="startTime" type="time"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">End</label>
                  <input formControlName="endTime" type="time"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Meeting Link / Room
                </label>
                <input formControlName="meetingLink" type="text"
                  placeholder="https://meet.google.com/... or Conference Room 3B"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Interviewers
                </label>
                <div class="grid grid-cols-2 gap-2">
                  @for (ir of interviewService.interviewers; track ir.id) {
                    <label class="flex items-center gap-2.5 p-2.5 rounded-lg border
                                  border-slate-200 hover:bg-slate-50 cursor-pointer
                                  transition-colors">
                      <input type="checkbox" [value]="ir.id"
                        (change)="toggleInterviewer(ir.id)"
                        [checked]="selectedInterviewers().includes(ir.id)"
                        class="w-3.5 h-3.5 accent-indigo-600"/>
                      <div class="flex items-center gap-2 min-w-0">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center
                                    text-white text-xs font-bold flex-shrink-0"
                             [style.backgroundColor]="ir.avatarColor">
                          {{ ir.name[0] }}
                        </div>
                        <div class="min-w-0">
                          <p class="text-xs font-semibold text-slate-800 truncate">{{ ir.name }}</p>
                          <p class="text-xs text-slate-400 truncate">{{ ir.role }}</p>
                        </div>
                      </div>
                    </label>
                  }
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Agenda / Topics
                </label>
                <textarea formControlName="agenda" rows="2"
                  placeholder="e.g. System design, RxJS patterns, previous project walkthrough"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div class="flex gap-3 pt-2">
                <button type="button" (click)="showScheduleModal.set(false)"
                  class="flex-1 btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium">
                  Cancel
                </button>
                <button type="submit"
                  [disabled]="scheduleForm.invalid || isSubmittingSchedule()"
                  class="flex-1 btn btn-sm btn-primary normal-case font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed">
                  @if (isSubmittingSchedule()) {
                    <span class="loading loading-spinner loading-xs mr-1"></span>
                  }
                  Confirm Schedule
                </button>
              </div>

              @if (scheduleSuccess()) {
                <div class="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200
                            rounded-lg text-emerald-700 text-xs font-semibold">
                  ✓ Interview scheduled successfully!
                </div>
              }

            </form>
          </div>
        </div>
      }

      @if (feedbackInterview()) {
        <div class="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4"
             (click)="feedbackInterview.set(null)">
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh]
                      overflow-y-auto scrollbar-thin"
               (click)="$event.stopPropagation()">

            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h2 class="text-base font-bold text-slate-900">Submit Feedback</h2>
                <p class="text-xs text-slate-500 mt-0.5">
                  {{ feedbackInterview()!.candidateName }} · {{ getRoundLabel(feedbackInterview()!.round) }}
                </p>
              </div>
              <button (click)="feedbackInterview.set(null)"
                class="w-8 h-8 flex items-center justify-center rounded-lg
                       hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <form [formGroup]="feedbackForm" (ngSubmit)="submitFeedback()" class="p-6 space-y-5">

              <div>
                <p class="text-sm font-semibold text-slate-700 mb-3">Evaluation Scores (1–10)</p>
                <div class="space-y-4">
                  @for (metric of feedbackMetricDefs; track metric.ctrl) {
                    <div>
                      <div class="flex items-center justify-between mb-1.5">
                        <label class="text-xs font-semibold text-slate-600">{{ metric.label }}</label>
                        <span class="text-sm font-bold text-indigo-600">
                          {{ feedbackForm.get(metric.ctrl)?.value || 5 }}/10
                        </span>
                      </div>
                      <input type="range" [formControlName]="metric.ctrl"
                        min="1" max="10" step="1"
                        class="w-full h-2 bg-slate-200 rounded-lg appearance-none
                               cursor-pointer accent-indigo-600"/>
                    </div>
                  }
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Recommendation <span class="text-rose-500">*</span>
                </label>
                <div class="grid grid-cols-2 gap-2">
                  @for (rec of recommendations; track rec.value) {
                    <label class="flex items-center gap-2 p-2.5 rounded-lg border-2 cursor-pointer
                                  transition-all"
                           [ngClass]="feedbackForm.get('recommendation')?.value === rec.value
                             ? rec.activeClass
                             : 'border-slate-200 hover:border-slate-300'">
                      <input type="radio" formControlName="recommendation" [value]="rec.value"
                        class="accent-indigo-600"/>
                      <span class="text-xs font-bold">{{ rec.label }}</span>
                    </label>
                  }
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Strengths</label>
                <textarea formControlName="strengths" rows="2"
                  placeholder="What the candidate did well…"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Concerns / Gaps</label>
                <textarea formControlName="concerns" rows="2"
                  placeholder="Areas for improvement or gaps…"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Additional Notes
                </label>
                <textarea formControlName="notes" rows="2"
                  placeholder="Any other observations for the hiring team…"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div class="flex gap-3 pt-1">
                <button type="button" (click)="feedbackInterview.set(null)"
                  class="flex-1 btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium">
                  Cancel
                </button>
                <button type="submit"
                  [disabled]="feedbackForm.invalid || isSubmittingFeedback()"
                  class="flex-1 btn btn-sm btn-primary normal-case font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed">
                  @if (isSubmittingFeedback()) {
                    <span class="loading loading-spinner loading-xs mr-1"></span>
                  }
                  Submit Feedback
                </button>
              </div>

              @if (feedbackSuccess()) {
                <div class="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200
                            rounded-lg text-emerald-700 text-xs font-semibold">
                  ✓ Feedback submitted!
                </div>
              }

            </form>
          </div>
        </div>
      }

    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InterviewsComponent, { className: "InterviewsComponent", filePath: "src/app/features/recruiter/interviews/interviews.component.ts", lineNumber: 595 }); })();
