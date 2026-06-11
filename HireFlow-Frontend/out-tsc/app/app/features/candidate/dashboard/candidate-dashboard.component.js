import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ApplicationsApiService } from '../../../core/services/applications-api.service';
import { JobsApiService } from '../../../core/services/jobs-api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.label;
const _forTrack2 = ($index, $item) => $item.id;
function CandidateDashboardComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_For_11_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeSection.set(tab_r2.key)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activeSection() === tab_r2.key ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2.label, " ");
} }
function CandidateDashboardComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 23)(2, "p", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 26);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_17_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.activeSection.set("profile"); return i0.ɵɵresetView(ctx_r2.accountOpen.set(false)); });
    i0.ɵɵtext(7, "My Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 26);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_17_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEditProfile()); });
    i0.ɵɵtext(9, "Edit Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 26);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_17_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openPasswordModal()); });
    i0.ɵɵtext(11, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 26);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_17_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.router.navigate(["/candidate/settings"]); return i0.ɵɵresetView(ctx_r2.accountOpen.set(false)); });
    i0.ɵɵtext(13, "Settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 27);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_17_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.logout()); });
    i0.ɵɵtext(15, "Sign out");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.auth.userName());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_2_0.email);
} }
function CandidateDashboardComponent_For_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_For_21_Template_button_click_0_listener() { const tab_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeSection.set(tab_r6.key)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activeSection() === tab_r6.key ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 bg-white text-slate-500");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r6.label, " ");
} }
function CandidateDashboardComponent_Conditional_23_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Add resume to reach 100% ");
} }
function CandidateDashboardComponent_Conditional_23_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Profile complete \u2713 ");
} }
function CandidateDashboardComponent_Conditional_23_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "p", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stat_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", stat_r8.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(stat_r8.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r8.label);
} }
function CandidateDashboardComponent_Conditional_23_For_37_For_15_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 75);
    i0.ɵɵelement(1, "path", 78);
    i0.ɵɵelementEnd();
} }
function CandidateDashboardComponent_Conditional_23_For_37_For_15_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 76);
} }
function CandidateDashboardComponent_Conditional_23_For_37_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 74);
    i0.ɵɵconditionalCreate(2, CandidateDashboardComponent_Conditional_23_For_37_For_15_Conditional_2_Template, 2, 0, ":svg:svg", 75)(3, CandidateDashboardComponent_Conditional_23_For_37_For_15_Conditional_3_Template, 1, 0, "div", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 77);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stage_r9 = ctx.$implicit;
    const ɵ$index_162_r10 = ctx.$index;
    const app_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ɵ$index_162_r10 <= app_r11.stageIndex ? "bg-indigo-600 border-indigo-600" : "bg-white border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_162_r10 < app_r11.stageIndex ? 2 : ɵ$index_162_r10 === app_r11.stageIndex ? 3 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ɵ$index_162_r10 <= app_r11.stageIndex ? "text-indigo-600" : "text-slate-400");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", stage_r9.shortLabel, " ");
} }
function CandidateDashboardComponent_Conditional_23_For_37_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(app_r11.nextStep);
} }
function CandidateDashboardComponent_Conditional_23_For_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 63)(2, "div")(3, "h3", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 64);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 65);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 66)(10, "div", 67)(11, "div", 68);
    i0.ɵɵelement(12, "div", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 70);
    i0.ɵɵrepeaterCreate(14, CandidateDashboardComponent_Conditional_23_For_37_For_15_Template, 6, 4, "div", 71, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 72)(17, "span", 73);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, CandidateDashboardComponent_Conditional_23_For_37_Conditional_19_Template, 2, 1, "span", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r11 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r11.jobTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", app_r11.companyName, " \u00B7 ", app_r11.department, " \u00B7 ", app_r11.location, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.getStatusClass(app_r11.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", app_r11.status === "active" ? "Active" : app_r11.status === "offered" ? "\uD83C\uDF89 Offer Received" : "Not Selected", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("width", app_r11.stageIndex / 5 * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.timelineStages);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Applied ", app_r11.appliedDate, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(app_r11.nextStep ? 19 : -1);
} }
function CandidateDashboardComponent_Conditional_23_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 79);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 80);
    i0.ɵɵelement(3, "path", 81);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 82);
    i0.ɵɵtext(5, "No upcoming interviews");
    i0.ɵɵelementEnd()();
} }
function CandidateDashboardComponent_Conditional_23_For_46_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 93);
    i0.ɵɵtext(1, " Join Interview ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const iv_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", iv_r12.meetingLink, i0.ɵɵsanitizeUrl);
} }
function CandidateDashboardComponent_Conditional_23_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 83)(2, "div", 84)(3, "p", 85);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 86);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 87);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 88);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 89);
    i0.ɵɵelement(11, "path", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span", 91);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p", 92);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(16, CandidateDashboardComponent_Conditional_23_For_46_Conditional_16_Template, 2, 1, "a", 93);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const iv_r12 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(iv_r12.jobTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(iv_r12.round);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", iv_r12.mode === "online" ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", iv_r12.mode === "online" ? "\uD83D\uDD17 Online" : "\uD83C\uDFE2 In-office", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", iv_r12.date, ", ", iv_r12.time, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Panel: ", iv_r12.panelNames.join(", "), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(iv_r12.meetingLink ? 16 : -1);
} }
function CandidateDashboardComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "h1", 33);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 34);
    i0.ɵɵtext(9, " You have ");
    i0.ɵɵelementStart(10, "span", 35);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " and ");
    i0.ɵɵelementStart(13, "span", 36);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 37)(16, "div", 38)(17, "span", 39);
    i0.ɵɵtext(18, "Profile strength");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 40);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 41);
    i0.ɵɵelement(22, "div", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 43);
    i0.ɵɵconditionalCreate(24, CandidateDashboardComponent_Conditional_23_Conditional_24_Template, 1, 0)(25, CandidateDashboardComponent_Conditional_23_Conditional_25_Template, 1, 0);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 44);
    i0.ɵɵrepeaterCreate(27, CandidateDashboardComponent_Conditional_23_For_28_Template, 5, 4, "div", 45, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 46)(30, "div", 47)(31, "div", 48)(32, "h2", 24);
    i0.ɵɵtext(33, "My Applications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 49);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_23_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeSection.set("applications")); });
    i0.ɵɵtext(35, " View all \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(36, CandidateDashboardComponent_Conditional_23_For_37_Template, 20, 10, "div", 50, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 51)(39, "div", 48)(40, "h2", 24);
    i0.ɵɵtext(41, "Upcoming Interviews");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 49);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_23_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeSection.set("interviews")); });
    i0.ɵɵtext(43, " See all \u2192 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(44, CandidateDashboardComponent_Conditional_23_Conditional_44_Template, 6, 0, "div", 52);
    i0.ɵɵrepeaterCreate(45, CandidateDashboardComponent_Conditional_23_For_46_Template, 17, 8, "div", 53, _forTrack2);
    i0.ɵɵelementStart(47, "div", 54)(48, "div", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(49, "svg", 56);
    i0.ɵɵelement(50, "path", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(51, "div")(52, "p", 58);
    i0.ɵɵtext(53, "Update from Rahul Mehta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "p", 59);
    i0.ɵɵtext(55, " Your technical interview is confirmed for Apr 22 at 2:00 PM. Please be ready 5 minutes early. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "p", 60);
    i0.ɵɵtext(57, "2 hours ago");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.auth.userInitials(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Good morning, ", ctx_r2.firstName());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.activeApplications().length, " active applications ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r2.upcomingInterviews().length, " upcoming interview", ctx_r2.upcomingInterviews().length !== 1 ? "s" : "", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r2.profileCompletion(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r2.profileCompletion(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r2.profileCompletion() < 100 ? 24 : 25);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.candidateStats());
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r2.applications().slice(0, 3));
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r2.upcomingInterviews().length === 0 ? 44 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.upcomingInterviews());
} }
function CandidateDashboardComponent_Conditional_24_For_7_For_15_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 108);
    i0.ɵɵelement(1, "path", 78);
    i0.ɵɵelementEnd();
} }
function CandidateDashboardComponent_Conditional_24_For_7_For_15_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 109);
} }
function CandidateDashboardComponent_Conditional_24_For_7_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 103)(1, "div", 107);
    i0.ɵɵconditionalCreate(2, CandidateDashboardComponent_Conditional_24_For_7_For_15_Conditional_2_Template, 2, 0, ":svg:svg", 108)(3, CandidateDashboardComponent_Conditional_24_For_7_For_15_Conditional_3_Template, 1, 0, "div", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 110)(5, "p", 111);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const stage_r13 = ctx.$implicit;
    const ɵ$index_297_r14 = ctx.$index;
    const app_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ɵ$index_297_r14 < app_r15.stageIndex ? "bg-indigo-600 border-indigo-600" : ɵ$index_297_r14 === app_r15.stageIndex ? "bg-indigo-600 border-indigo-600 ring-4 ring-indigo-100" : "bg-white border-slate-200");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_297_r14 < app_r15.stageIndex ? 2 : ɵ$index_297_r14 === app_r15.stageIndex ? 3 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ɵ$index_297_r14 <= app_r15.stageIndex ? "text-indigo-700" : "text-slate-400");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", stage_r13.label, " ");
} }
function CandidateDashboardComponent_Conditional_24_For_7_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 106);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Next: ", app_r15.nextStep, " ");
} }
function CandidateDashboardComponent_Conditional_24_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "div", 96)(2, "div")(3, "h3", 97);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 98);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 99);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 100)(10, "div", 101)(11, "div", 68);
    i0.ɵɵelement(12, "div", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 70);
    i0.ɵɵrepeaterCreate(14, CandidateDashboardComponent_Conditional_24_For_7_For_15_Template, 7, 4, "div", 103, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 104)(17, "span");
    i0.ɵɵtext(18, "Applied: ");
    i0.ɵɵelementStart(19, "strong", 105);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22, "Last update: ");
    i0.ɵɵelementStart(23, "strong", 105);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26, "Recruiter: ");
    i0.ɵɵelementStart(27, "strong", 105);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(29, CandidateDashboardComponent_Conditional_24_For_7_Conditional_29_Template, 2, 1, "span", 106);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r15.jobTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", app_r15.companyName, " \u00B7 ", app_r15.department, " \u00B7 ", app_r15.location, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.getStatusClass(app_r15.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", app_r15.status === "active" ? "In Progress" : app_r15.status === "offered" ? "\uD83C\uDF89 Offer!" : "Not Selected", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("width", app_r15.stageIndex / 5 * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.timelineStages);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(app_r15.appliedDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r15.lastUpdate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r15.recruiterName);
    i0.ɵɵadvance();
    i0.ɵɵconditional(app_r15.nextStep ? 29 : -1);
} }
function CandidateDashboardComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 48)(2, "h2", 33);
    i0.ɵɵtext(3, "My Applications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 94);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(6, CandidateDashboardComponent_Conditional_24_For_7_Template, 30, 12, "div", 95, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r2.applications().length, " total");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.applications());
} }
function CandidateDashboardComponent_Conditional_25_For_22_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 121);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 128);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_25_For_22_Template_button_click_2_listener() { const tag_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.removeInterest(tag_r18)); });
    i0.ɵɵtext(3, "x");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tag_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tag_r18, " ");
} }
function CandidateDashboardComponent_Conditional_25_Conditional_27_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 132);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_25_Conditional_27_For_5_Template_button_click_0_listener() { const term_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.addInterest(term_r20)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const term_r20 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", term_r20, " ");
} }
function CandidateDashboardComponent_Conditional_25_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125)(1, "p", 129);
    i0.ɵɵtext(2, "Search History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 130);
    i0.ɵɵrepeaterCreate(4, CandidateDashboardComponent_Conditional_25_Conditional_27_For_5_Template, 2, 1, "button", 131, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r2.searchHistory());
} }
function CandidateDashboardComponent_Conditional_25_For_30_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 138);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r22 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tag_r22);
} }
function CandidateDashboardComponent_Conditional_25_For_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 127)(1, "div", 133)(2, "div")(3, "h3", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 134);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 135);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 136);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 137);
    i0.ɵɵrepeaterCreate(12, CandidateDashboardComponent_Conditional_25_For_30_For_13_Template, 2, 1, "span", 138, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 139)(15, "button", 140);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_25_For_30_Template_button_click_15_listener() { const job_r23 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleBookmark(job_r23.id)); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 141);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_25_For_30_Template_button_click_17_listener() { const job_r23 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.applyToJob(job_r23)); });
    i0.ɵɵtext(18, "Apply Now");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const job_r23 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(job_r23.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", job_r23.company, " \u00B7 ", job_r23.location, " \u00B7 ", job_r23.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.matchScore(job_r23) >= 85 ? "bg-emerald-100 text-emerald-700" : ctx_r2.matchScore(job_r23) >= 70 ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.matchScore(job_r23), "% match ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", job_r23.salary, " \u00B7 Posted ", job_r23.posted);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(job_r23.tags);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.bookmarkedJobs().includes(job_r23.id) ? "Bookmarked" : "Bookmark", " ");
} }
function CandidateDashboardComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 112)(2, "div")(3, "h2", 33);
    i0.ɵɵtext(4, "Job Recommendations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 98);
    i0.ɵɵtext(6, "Based on your interests and recent searches.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 113)(8, "label", 114);
    i0.ɵɵtext(9, "Search roles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 115)(11, "input", 116);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_25_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.jobSearchInput, $event) || (ctx_r2.jobSearchInput = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown.enter", function CandidateDashboardComponent_Conditional_25_Template_input_keydown_enter_11_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.trackSearch(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 117);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_25_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.trackSearch()); });
    i0.ɵɵtext(13, "Search");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 118)(15, "div", 119)(16, "h3", 24);
    i0.ɵɵtext(17, "Interest Tags");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 82);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 120);
    i0.ɵɵrepeaterCreate(21, CandidateDashboardComponent_Conditional_25_For_22_Template, 4, 1, "span", 121, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 122)(24, "input", 123);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_25_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.newInterestInput, $event) || (ctx_r2.newInterestInput = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown.enter", function CandidateDashboardComponent_Conditional_25_Template_input_keydown_enter_24_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.addInterest(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 124);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_25_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addInterest()); });
    i0.ɵɵtext(26, "Add Tag");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(27, CandidateDashboardComponent_Conditional_25_Conditional_27_Template, 6, 0, "div", 125);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 126);
    i0.ɵɵrepeaterCreate(29, CandidateDashboardComponent_Conditional_25_For_30_Template, 19, 9, "div", 127, _forTrack2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.jobSearchInput);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r2.recommendedJobs().length, " matches");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.interestTags());
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.newInterestInput);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.searchHistory().length ? 27 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.recommendedJobs());
} }
function CandidateDashboardComponent_Conditional_26_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 142)(1, "div", 154);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 155);
    i0.ɵɵelement(3, "path", 156);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 157)(5, "p", 158);
    i0.ɵɵtext(6, "Complete your profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 159);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1(" Profiles with resumes get 3\u00D7 more interview calls. You're ", ctx_r2.profileCompletion(), "% done. ");
} }
function CandidateDashboardComponent_Conditional_26_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 160);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 161);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r25 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", field_r25.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", field_r25.type)("value", field_r25.value);
} }
function CandidateDashboardComponent_Conditional_26_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 162)(1, "div", 163)(2, "span", 164);
    i0.ɵɵtext(3, "PDF");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 165)(5, "p", 24);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 166);
    i0.ɵɵtext(8, "2.1 MB \u00B7 Uploaded Mar 10, 2025");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 167);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_26_Conditional_19_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r26); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.resumeUploaded.set(false)); });
    i0.ɵɵtext(10, " Remove ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 168);
    i0.ɵɵtext(12, " Replace Resume ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.resumeFileName());
} }
function CandidateDashboardComponent_Conditional_26_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 149)(1, "div", 169);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 170);
    i0.ɵɵelement(3, "path", 171);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 172);
    i0.ɵɵtext(5, " Drag and drop your resume ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 173);
    i0.ɵɵtext(7, "or click to browse files");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 174);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_26_Conditional_20_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r27); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.resumeUploaded.set(true)); });
    i0.ɵɵtext(9, " Choose File ");
    i0.ɵɵelementEnd()();
} }
function CandidateDashboardComponent_Conditional_26_For_26_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 151);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 175);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_26_For_26_Template_button_click_2_listener() { const skill_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.removeSkill(skill_r29)); });
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const skill_r29 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", skill_r29, " ");
} }
function CandidateDashboardComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "h2", 33);
    i0.ɵɵtext(2, "My Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, CandidateDashboardComponent_Conditional_26_Conditional_3_Template, 9, 1, "div", 142);
    i0.ɵɵelementStart(4, "div", 143)(5, "h3", 24);
    i0.ɵɵtext(6, "Personal Information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 144);
    i0.ɵɵrepeaterCreate(8, CandidateDashboardComponent_Conditional_26_For_9_Template, 4, 3, "div", null, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 145)(11, "button", 146);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_26_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEditProfile()); });
    i0.ɵɵtext(12, " Edit Profile ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 95)(14, "div", 147)(15, "h3", 24);
    i0.ɵɵtext(16, "Resume / CV");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 148);
    i0.ɵɵtext(18, "PDF, DOCX \u2014 max 5 MB");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(19, CandidateDashboardComponent_Conditional_26_Conditional_19_Template, 13, 1)(20, CandidateDashboardComponent_Conditional_26_Conditional_20_Template, 10, 0, "div", 149);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 95)(22, "h3", 150);
    i0.ɵɵtext(23, "Skills");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 120);
    i0.ɵɵrepeaterCreate(25, CandidateDashboardComponent_Conditional_26_For_26_Template, 4, 1, "span", 151, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 122)(28, "input", 152);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_26_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.newSkillInput, $event) || (ctx_r2.newSkillInput = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown.enter", function CandidateDashboardComponent_Conditional_26_Template_input_keydown_enter_28_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.addSkill(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 153);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_26_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addSkill()); });
    i0.ɵɵtext(30, " Add ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.profileCompletion() < 100 ? 3 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r2.profileFields());
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(ctx_r2.resumeUploaded() ? 19 : 20);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.candidateSkills());
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.newSkillInput);
} }
function CandidateDashboardComponent_Conditional_27_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 176)(1, "div", 177);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 178);
    i0.ɵɵelement(3, "path", 81);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p", 179);
    i0.ɵɵtext(5, "No interviews scheduled yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 180);
    i0.ɵɵtext(7, " Your recruiter will notify you when an interview is arranged. ");
    i0.ɵɵelementEnd()();
} }
function CandidateDashboardComponent_Conditional_27_For_5_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 188);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 189);
    i0.ɵɵelement(2, "path", 190);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Join Meeting ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const iv_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", iv_r30.meetingLink, i0.ɵɵsanitizeUrl);
} }
function CandidateDashboardComponent_Conditional_27_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95)(1, "div", 181)(2, "div")(3, "h3", 97);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 182);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 99);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 183)(10, "div", 184);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(11, "svg", 185);
    i0.ɵɵelement(12, "path", 186);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 184);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(16, "svg", 185);
    i0.ɵɵelement(17, "path", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "p", 187);
    i0.ɵɵtext(21, " Interviewers: ");
    i0.ɵɵelementStart(22, "strong", 105);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(24, CandidateDashboardComponent_Conditional_27_For_5_Conditional_24_Template, 4, 1, "a", 188);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const iv_r30 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(iv_r30.jobTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(iv_r30.round);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", iv_r30.mode === "online" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", iv_r30.mode === "online" ? "\uD83D\uDD17 Online" : "\uD83C\uDFE2 In-office", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(iv_r30.date);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(iv_r30.time);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(iv_r30.panelNames.join(", "));
    i0.ɵɵadvance();
    i0.ɵɵconditional(iv_r30.meetingLink ? 24 : -1);
} }
function CandidateDashboardComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "h2", 33);
    i0.ɵɵtext(2, "My Interviews");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, CandidateDashboardComponent_Conditional_27_Conditional_3_Template, 8, 0, "div", 176);
    i0.ɵɵrepeaterCreate(4, CandidateDashboardComponent_Conditional_27_For_5_Template, 25, 8, "div", 95, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r2.upcomingInterviews().length === 0 ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.upcomingInterviews());
} }
function CandidateDashboardComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.toast(), " ");
} }
function CandidateDashboardComponent_Conditional_29_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 196);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.profileError());
} }
function CandidateDashboardComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 191)(2, "div", 147)(3, "h2", 97);
    i0.ɵɵtext(4, "Edit Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 192);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_29_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editOpen.set(false)); });
    i0.ɵɵtext(6, "x");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 51)(8, "div")(9, "label", 114);
    i0.ɵɵtext(10, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 193);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_29_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.profileDraft.name, $event) || (ctx_r2.profileDraft.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "label", 114);
    i0.ɵɵtext(14, "Company");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 193);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_29_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.profileDraft.company, $event) || (ctx_r2.profileDraft.company = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "label", 114);
    i0.ɵɵtext(18, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 194);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_29_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.profileDraft.phone, $event) || (ctx_r2.profileDraft.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "label", 114);
    i0.ɵɵtext(22, "Current Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "input", 193);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_29_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.profileDraft.title, $event) || (ctx_r2.profileDraft.title = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "label", 114);
    i0.ɵɵtext(26, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "input", 193);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_29_Template_input_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.profileDraft.location, $event) || (ctx_r2.profileDraft.location = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div")(29, "label", 114);
    i0.ɵɵtext(30, "Years of Experience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "input", 195);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_29_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.profileDraft.experienceYears, $event) || (ctx_r2.profileDraft.experienceYears = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(32, CandidateDashboardComponent_Conditional_29_Conditional_32_Template, 2, 1, "p", 196);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 197)(34, "button", 124);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_29_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editOpen.set(false)); });
    i0.ɵɵtext(35, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 117);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_29_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r31); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.saveProfile()); });
    i0.ɵɵtext(37, "Save");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.profileDraft.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.profileDraft.company);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.profileDraft.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.profileDraft.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.profileDraft.location);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.profileDraft.experienceYears);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.profileError() ? 32 : -1);
} }
function CandidateDashboardComponent_Conditional_30_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 196);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.passwordError());
} }
function CandidateDashboardComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 191)(2, "div", 147)(3, "h2", 97);
    i0.ɵɵtext(4, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 192);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_30_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.passwordOpen.set(false)); });
    i0.ɵɵtext(6, "x");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 51)(8, "div")(9, "label", 114);
    i0.ɵɵtext(10, "Current Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 198);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_30_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.passwordDraft.current, $event) || (ctx_r2.passwordDraft.current = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "label", 114);
    i0.ɵɵtext(14, "New Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 198);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_30_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.passwordDraft.next, $event) || (ctx_r2.passwordDraft.next = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "label", 114);
    i0.ɵɵtext(18, "Confirm Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 198);
    i0.ɵɵtwoWayListener("ngModelChange", function CandidateDashboardComponent_Conditional_30_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.passwordDraft.confirm, $event) || (ctx_r2.passwordDraft.confirm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 115)(21, "button", 199);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_30_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleShowCurrent()); });
    i0.ɵɵtext(22, "Toggle current");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 199);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_30_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.toggleShowNew(); return i0.ɵɵresetView(ctx_r2.toggleShowConfirm()); });
    i0.ɵɵtext(24, "Toggle new");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(25, CandidateDashboardComponent_Conditional_30_Conditional_25_Template, 2, 1, "p", 196);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 197)(27, "button", 124);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_30_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.passwordOpen.set(false)); });
    i0.ɵɵtext(28, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 117);
    i0.ɵɵlistener("click", function CandidateDashboardComponent_Conditional_30_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r32); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.savePassword()); });
    i0.ɵɵtext(30, "Update Password");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.passwordDraft.current);
    i0.ɵɵproperty("type", ctx_r2.showCurrent() ? "text" : "password");
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.passwordDraft.next);
    i0.ɵɵproperty("type", ctx_r2.showNew() ? "text" : "password");
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.passwordDraft.confirm);
    i0.ɵɵproperty("type", ctx_r2.showConfirm() ? "text" : "password");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r2.passwordError() ? 25 : -1);
} }
export class CandidateDashboardComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.applicationsApi = inject(ApplicationsApiService);
        this.jobsApi = inject(JobsApiService);
        this.activeSection = signal(this.route.snapshot.queryParamMap.get('tab') === 'profile' ? 'profile' : 'dashboard', ...(ngDevMode ? [{ debugName: "activeSection" }] : []));
        this.accountOpen = signal(false, ...(ngDevMode ? [{ debugName: "accountOpen" }] : []));
        this.toast = signal('', ...(ngDevMode ? [{ debugName: "toast" }] : []));
        this.editOpen = signal(false, ...(ngDevMode ? [{ debugName: "editOpen" }] : []));
        this.passwordOpen = signal(false, ...(ngDevMode ? [{ debugName: "passwordOpen" }] : []));
        this.profileError = signal('', ...(ngDevMode ? [{ debugName: "profileError" }] : []));
        this.passwordError = signal('', ...(ngDevMode ? [{ debugName: "passwordError" }] : []));
        this.showCurrent = signal(false, ...(ngDevMode ? [{ debugName: "showCurrent" }] : []));
        this.showNew = signal(false, ...(ngDevMode ? [{ debugName: "showNew" }] : []));
        this.showConfirm = signal(false, ...(ngDevMode ? [{ debugName: "showConfirm" }] : []));
        this.profileDraft = { name: '', company: '', phone: '', title: '', location: '', experienceYears: 0 };
        this.passwordDraft = { current: '', next: '', confirm: '' };
        this.portalTabs = [
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'applications', label: 'My Applications' },
            { key: 'recommendations', label: 'Job Recommendations' },
            { key: 'interviews', label: 'Interviews' },
            { key: 'profile', label: 'My Profile' },
        ];
        this.resumeUploaded = signal(false, ...(ngDevMode ? [{ debugName: "resumeUploaded" }] : []));
        this.newSkillInput = '';
        this.candidateSkills = signal(this.auth.currentUser()?.skills ?? [], ...(ngDevMode ? [{ debugName: "candidateSkills" }] : []));
        this.interestTags = signal([], ...(ngDevMode ? [{ debugName: "interestTags" }] : []));
        this.searchHistory = signal([], ...(ngDevMode ? [{ debugName: "searchHistory" }] : []));
        this.bookmarkedJobs = signal([], ...(ngDevMode ? [{ debugName: "bookmarkedJobs" }] : []));
        this.newInterestInput = '';
        this.jobSearchInput = '';
        this.firstName = computed(() => this.auth.userName().split(' ')[0] || 'there', ...(ngDevMode ? [{ debugName: "firstName" }] : []));
        this.resumeFileName = computed(() => `${this.auth.userName().trim().replace(/\s+/g, '_') || 'Candidate'}_Resume.pdf`, ...(ngDevMode ? [{ debugName: "resumeFileName" }] : []));
        this.profileCompletion = computed(() => this.resumeUploaded() ? 100 : 75, ...(ngDevMode ? [{ debugName: "profileCompletion" }] : []));
        this.candidateStats = computed(() => [
            { label: 'Applied', value: String(this.applications().length), color: '#64748B' },
            { label: 'In Progress', value: String(this.activeApplications().length), color: '#4F46E5' },
            { label: 'Interviews', value: String(this.applications().filter(a => a.currentStage === 'Interview').length), color: '#8B5CF6' },
            { label: 'Offers', value: String(this.applications().filter(a => a.status === 'offered').length), color: '#10B981' },
        ], ...(ngDevMode ? [{ debugName: "candidateStats" }] : []));
        this.timelineStages = [
            { key: 'applied', label: 'Applied', shortLabel: 'Applied' },
            { key: 'shortlisted', label: 'Shortlisted', shortLabel: 'Shortlisted' },
            { key: 'assessment', label: 'Assessment', shortLabel: 'Assessment' },
            { key: 'interview', label: 'Interview', shortLabel: 'Interview' },
            { key: 'hr_round', label: 'HR Round', shortLabel: 'HR' },
            { key: 'selected', label: 'Selected', shortLabel: 'Selected' },
        ];
        this.demoApplications = [
            {
                id: 'a1',
                companyName: 'Acme Technologies',
                jobTitle: 'Lead Frontend Engineer',
                department: 'Engineering',
                location: 'Bangalore (Hybrid)',
                appliedDate: 'Mar 10, 2025',
                currentStage: 'Interview',
                stageIndex: 3,
                status: 'active',
                lastUpdate: 'Apr 22, 2025',
                recruiterName: 'Rahul Mehta',
                nextStep: 'Technical interview today at 2:00 PM',
            },
            {
                id: 'a2',
                companyName: 'Nexora Labs',
                jobTitle: 'Senior Angular Developer',
                department: 'Engineering',
                location: 'Remote',
                appliedDate: 'Mar 5, 2025',
                currentStage: 'Shortlisted',
                stageIndex: 1,
                status: 'active',
                lastUpdate: 'Apr 18, 2025',
                recruiterName: 'Sneha Patel',
                nextStep: 'Assessment due by Apr 25',
            },
            {
                id: 'a3',
                companyName: 'CloudBase Inc.',
                jobTitle: 'Frontend Architect',
                department: 'Platform',
                location: 'Mumbai',
                appliedDate: 'Feb 20, 2025',
                currentStage: 'Not Selected',
                stageIndex: 2,
                status: 'rejected',
                lastUpdate: 'Mar 28, 2025',
                recruiterName: 'Arjun Desai',
            },
        ];
        this.applications = signal([], ...(ngDevMode ? [{ debugName: "applications" }] : []));
        this.activeApplications = computed(() => this.applications().filter(a => a.status === 'active'), ...(ngDevMode ? [{ debugName: "activeApplications" }] : []));
        this.demoUpcomingInterviews = [
            {
                id: 'i1',
                jobTitle: 'Lead Frontend Engineer',
                round: 'Technical Interview',
                date: 'Today, Apr 22, 2025',
                time: '2:00 PM – 3:30 PM IST',
                mode: 'online',
                panelNames: ['Vikash Anand', 'Divya Pillai'],
                meetingLink: 'https://meet.google.com/abc-defg-hij',
            },
        ];
        this.upcomingInterviews = signal([], ...(ngDevMode ? [{ debugName: "upcomingInterviews" }] : []));
        this.profileFields = computed(() => {
            const user = this.auth.currentUser();
            return [
                { label: 'Full Name', type: 'text', value: user?.name ?? '' },
                { label: 'Email', type: 'email', value: user?.email ?? '' },
                { label: 'Phone', type: 'tel', value: user?.phone ?? '' },
                { label: 'Current Role', type: 'text', value: user?.title ?? '' },
                { label: 'Location', type: 'text', value: user?.location ?? '' },
                { label: 'Years of Experience', type: 'number', value: String(user?.experienceYears ?? '') },
            ];
        }, ...(ngDevMode ? [{ debugName: "profileFields" }] : []));
        this.mockJobs = [
            { id: 'j1', title: 'Senior Frontend Engineer', company: 'Acme Cloud', location: 'Bangalore Hybrid', type: 'Full-time', salary: 'INR 28-38 LPA', tags: ['Frontend', 'Angular', 'TypeScript', 'RxJS'], posted: 'today' },
            { id: 'j2', title: 'Angular UI Developer', company: 'Nexora Labs', location: 'Remote', type: 'Full-time', salary: 'INR 18-26 LPA', tags: ['Frontend', 'Angular', 'Tailwind CSS', 'JavaScript'], posted: '1 day ago' },
            { id: 'j3', title: 'React Frontend Developer', company: 'FinEdge', location: 'Mumbai', type: 'Full-time', salary: 'INR 16-24 LPA', tags: ['Frontend', 'React', 'TypeScript', 'Design Systems'], posted: '2 days ago' },
            { id: 'j4', title: 'Backend Engineer - Node.js', company: 'StackMint', location: 'Pune Hybrid', type: 'Full-time', salary: 'INR 20-30 LPA', tags: ['Backend', 'Node.js', 'API', 'PostgreSQL'], posted: 'today' },
            { id: 'j5', title: 'Java Backend Developer', company: 'CoreBank Tech', location: 'Chennai', type: 'Full-time', salary: 'INR 18-28 LPA', tags: ['Backend', 'Java', 'Spring Boot', 'Microservices'], posted: '3 days ago' },
            { id: 'j6', title: 'Python API Engineer', company: 'DataNest', location: 'Remote', type: 'Contract', salary: 'INR 1.8L/month', tags: ['Backend', 'Python', 'FastAPI', 'PostgreSQL'], posted: '4 days ago' },
            { id: 'j7', title: 'DevOps Engineer', company: 'CloudBase Inc.', location: 'Bangalore', type: 'Full-time', salary: 'INR 22-34 LPA', tags: ['DevOps', 'AWS', 'Docker', 'Kubernetes'], posted: '1 day ago' },
            { id: 'j8', title: 'Site Reliability Engineer', company: 'OpsFlow', location: 'Remote', type: 'Full-time', salary: 'INR 25-40 LPA', tags: ['DevOps', 'SRE', 'Kubernetes', 'Terraform'], posted: '5 days ago' },
            { id: 'j9', title: 'Cloud Platform Engineer', company: 'InfraWorks', location: 'Hyderabad', type: 'Full-time', salary: 'INR 24-36 LPA', tags: ['DevOps', 'Azure', 'CI/CD', 'Linux'], posted: 'today' },
            { id: 'j10', title: 'Product Designer', company: 'PixelCraft', location: 'Bangalore Hybrid', type: 'Full-time', salary: 'INR 16-25 LPA', tags: ['Design', 'Figma', 'UX', 'Prototyping'], posted: '2 days ago' },
            { id: 'j11', title: 'UI Designer', company: 'StudioLoop', location: 'Remote', type: 'Full-time', salary: 'INR 12-20 LPA', tags: ['Design', 'UI', 'Figma', 'Design Systems'], posted: '3 days ago' },
            { id: 'j12', title: 'UX Researcher', company: 'HumanScale', location: 'Delhi NCR', type: 'Full-time', salary: 'INR 14-22 LPA', tags: ['Design', 'Research', 'UX', 'User Interviews'], posted: '6 days ago' },
            { id: 'j13', title: 'Data Analyst', company: 'MetricMind', location: 'Remote', type: 'Full-time', salary: 'INR 12-18 LPA', tags: ['Data', 'SQL', 'Python', 'Dashboards'], posted: 'today' },
            { id: 'j14', title: 'Data Engineer', company: 'Lakehouse AI', location: 'Pune', type: 'Full-time', salary: 'INR 22-35 LPA', tags: ['Data', 'Spark', 'Python', 'ETL'], posted: '2 days ago' },
            { id: 'j15', title: 'Machine Learning Engineer', company: 'VisionGrid', location: 'Bangalore', type: 'Full-time', salary: 'INR 30-48 LPA', tags: ['Data', 'ML', 'Python', 'MLOps'], posted: '4 days ago' },
            { id: 'j16', title: 'Full Stack Developer', company: 'LaunchDesk', location: 'Remote', type: 'Full-time', salary: 'INR 18-30 LPA', tags: ['Frontend', 'Backend', 'Angular', 'Node.js'], posted: '1 day ago' },
            { id: 'j17', title: 'Frontend Architect', company: 'ScaleSuite', location: 'Mumbai Hybrid', type: 'Full-time', salary: 'INR 35-52 LPA', tags: ['Frontend', 'Architecture', 'Angular', 'System Design'], posted: '5 days ago' },
            { id: 'j18', title: 'Platform UI Engineer', company: 'DevTools Co.', location: 'Remote', type: 'Full-time', salary: 'INR 24-36 LPA', tags: ['Frontend', 'TypeScript', 'Performance', 'Design Systems'], posted: 'today' },
        ];
        this.recommendedJobs = computed(() => this.jobsApi.jobs()
            .filter(job => job.status === 'open')
            .map(job => ({
            id: job.id,
            title: job.title,
            company: job.companyName || 'Company',
            location: job.location,
            type: job.type,
            salary: `${this.jobsApi.formatSalary(job.salaryMin)} - ${this.jobsApi.formatSalary(job.salaryMax)}`,
            tags: job.skills,
            posted: job.postedDate,
        }))
            .sort((a, b) => this.matchScore(b) - this.matchScore(a)), ...(ngDevMode ? [{ debugName: "recommendedJobs" }] : []));
    }
    addSkill() {
        const skill = this.newSkillInput.trim();
        if (skill && !this.candidateSkills().includes(skill)) {
            this.candidateSkills.update(list => [...list, skill]);
            this.saveSkills();
        }
        this.newSkillInput = '';
    }
    removeSkill(skill) {
        this.candidateSkills.update(list => list.filter(item => item !== skill));
        this.saveSkills();
    }
    saveSkills() {
        const user = this.auth.currentUser();
        if (user)
            this.auth.updateProfile({ ...user, skills: this.candidateSkills() });
    }
    addInterest(value = this.newInterestInput) {
        const tag = value.trim();
        if (tag && !this.interestTags().some(item => item.toLowerCase() === tag.toLowerCase())) {
            this.interestTags.update(list => [...list, tag]);
        }
        this.newInterestInput = '';
    }
    removeInterest(tag) {
        this.interestTags.update(list => list.filter(item => item !== tag));
    }
    trackSearch() {
        const term = this.jobSearchInput.trim();
        if (!term)
            return;
        this.searchHistory.update(list => [term, ...list.filter(item => item.toLowerCase() !== term.toLowerCase())].slice(0, 6));
        this.addInterest(term);
        this.jobSearchInput = '';
    }
    matchScore(job) {
        const interests = [...this.interestTags(), ...this.searchHistory()].map(item => item.toLowerCase());
        const haystack = [job.title, job.company, job.location, job.type, ...job.tags].join(' ').toLowerCase();
        const hits = interests.filter(tag => haystack.includes(tag)).length;
        return Math.min(98, 55 + hits * 10 + (job.tags.some(tag => this.candidateSkills().includes(tag)) ? 8 : 0));
    }
    toggleBookmark(jobId) {
        this.bookmarkedJobs.update(list => list.includes(jobId) ? list.filter(id => id !== jobId) : [...list, jobId]);
        this.showToast(this.bookmarkedJobs().includes(jobId) ? 'Job bookmarked.' : 'Bookmark removed.');
    }
    async applyToJob(job) {
        try {
            await this.applicationsApi.apply(job.id);
            this.applications.set(this.mapApplications(this.applicationsApi.applications()));
            this.showToast(`Applied to ${job.title}.`);
        }
        catch (error) {
            this.showToast(error?.error?.errors?.[0] ?? 'Unable to apply to this job.');
        }
    }
    logout() {
        this.accountOpen.set(false);
        this.auth.logout();
    }
    openEditProfile() {
        const user = this.auth.currentUser();
        this.profileDraft = {
            name: user?.name ?? '',
            company: user?.company ?? '',
            phone: user?.phone ?? '',
            title: user?.title ?? '',
            location: user?.location ?? '',
            experienceYears: user?.experienceYears ?? 0,
        };
        this.profileError.set('');
        this.accountOpen.set(false);
        this.editOpen.set(true);
    }
    saveProfile() {
        if (this.profileDraft.name.trim().length < 2) {
            this.profileError.set('Name must be at least 2 characters.');
            return;
        }
        this.auth.updateProfile({ ...this.profileDraft, skills: this.candidateSkills() });
        this.editOpen.set(false);
        this.showToast('Profile updated.');
    }
    openPasswordModal() {
        this.passwordDraft = { current: '', next: '', confirm: '' };
        this.passwordError.set('');
        this.accountOpen.set(false);
        this.passwordOpen.set(true);
    }
    savePassword() {
        if (this.passwordDraft.next.length < 6) {
            this.passwordError.set('New password must be at least 6 characters.');
            return;
        }
        if (this.passwordDraft.next !== this.passwordDraft.confirm) {
            this.passwordError.set('New password and confirmation do not match.');
            return;
        }
        const result = this.auth.changePassword(this.passwordDraft.current, this.passwordDraft.next);
        if (!result.success) {
            this.passwordError.set(result.message);
            return;
        }
        this.passwordOpen.set(false);
        this.showToast(result.message);
    }
    toggleAccountOpen() { this.accountOpen.set(!this.accountOpen()); }
    toggleShowCurrent() { this.showCurrent.set(!this.showCurrent()); }
    toggleShowNew() { this.showNew.set(!this.showNew()); }
    toggleShowConfirm() { this.showConfirm.set(!this.showConfirm()); }
    showToast(message) {
        this.toast.set(message);
        setTimeout(() => this.toast.set(''), 2200);
    }
    async ngOnInit() {
        const [applications] = await Promise.all([
            this.applicationsApi.loadMine(),
            this.jobsApi.loadAll(),
        ]);
        this.applications.set(this.mapApplications(applications));
    }
    mapApplications(applications) {
        const stages = ['applied', 'shortlisted', 'assessment', 'interview', 'hr_round', 'selected'];
        return applications.map(application => {
            const stage = application.stage === 'hrround' ? 'hr_round' : application.stage;
            return {
                id: application.id,
                companyName: application.companyName,
                jobTitle: application.jobTitle,
                department: '',
                location: '',
                appliedDate: application.appliedDate,
                currentStage: stage === 'hr_round'
                    ? 'HR Round'
                    : stage.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase()),
                stageIndex: Math.max(0, stages.indexOf(stage)),
                status: stage === 'rejected'
                    ? 'rejected'
                    : stage === 'selected' ? 'offered' : 'active',
                lastUpdate: application.lastActivityDate,
                recruiterName: '',
            };
        });
    }
    getStatusClass(status) {
        return {
            active: 'bg-indigo-100 text-indigo-700',
            offered: 'bg-emerald-100 text-emerald-700',
            rejected: 'bg-rose-100 text-rose-700',
        }[status] ?? 'bg-slate-100 text-slate-600';
    }
    static { this.ɵfac = function CandidateDashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CandidateDashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CandidateDashboardComponent, selectors: [["app-candidate-dashboard"]], decls: 31, vars: 11, consts: [[1, "min-h-screen", "bg-slate-50"], [1, "bg-white", "border-b", "border-slate-200", "sticky", "top-0", "z-10"], [1, "max-w-5xl", "mx-auto", "px-4", "sm:px-6", "h-16", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2.5"], [1, "w-7", "h-7", "bg-indigo-600", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-3.5", "h-3.5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "font-bold", "text-slate-900", "text-sm", "tracking-tight"], [1, "hidden", "md:flex", "items-center", "gap-0", "border-b-0", "min-w-0"], [1, "px-3", "lg:px-4", "py-5", "text-sm", "font-semibold", "border-b-2", "-mb-px", "transition-colors", "whitespace-nowrap", 3, "ngClass"], [1, "relative", "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "flex-shrink-0", 3, "click"], [1, "text-sm", "font-medium", "text-slate-700", "hidden", "md:block", 3, "click"], [1, "absolute", "right-0", "top-full", "mt-3", "w-[min(13rem,calc(100vw-2rem))]", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-lg", "py-1", "z-30"], [1, "md:hidden", "max-w-5xl", "mx-auto", "px-4", "pb-2", "overflow-x-auto", "scrollbar-thin"], [1, "flex", "items-center", "gap-2", "min-w-max"], [1, "px-3", "py-2", "rounded-lg", "text-xs", "font-bold", "border", "transition-colors", "whitespace-nowrap", 3, "ngClass"], [1, "max-w-5xl", "mx-auto", "px-4", "sm:px-6", "py-5", "sm:py-8", "pb-24", "md:pb-8", "space-y-5", "sm:space-y-7"], [1, "space-y-4"], [1, "space-y-5"], [1, "fixed", "bottom-5", "left-1/2", "z-50", "-translate-x-1/2", "rounded-lg", "bg-slate-900", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "shadow-lg", "animate-toast"], [1, "fixed", "inset-0", "z-50", "bg-slate-900/35", "flex", "items-start", "sm:items-center", "justify-center", "p-4", "overflow-y-auto"], [1, "px-3", "lg:px-4", "py-5", "text-sm", "font-semibold", "border-b-2", "-mb-px", "transition-colors", "whitespace-nowrap", 3, "click", "ngClass"], [1, "px-4", "py-3", "border-b", "border-slate-100"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "truncate"], [1, "w-full", "px-4", "py-2", "text-left", "text-sm", "text-slate-700", "hover:bg-slate-50", 3, "click"], [1, "w-full", "px-4", "py-2", "text-left", "text-sm", "font-semibold", "text-rose-600", "hover:bg-rose-50", 3, "click"], [1, "px-3", "py-2", "rounded-lg", "text-xs", "font-bold", "border", "transition-colors", "whitespace-nowrap", 3, "click", "ngClass"], [1, "bg-white", "rounded-2xl", "border", "border-slate-200", "p-4", "sm:p-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-5"], [1, "flex", "items-center", "gap-4"], [1, "w-14", "h-14", "rounded-2xl", "bg-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-lg", "font-bold", "flex-shrink-0"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "text-indigo-600", "font-semibold"], [1, "text-violet-600", "font-semibold"], [1, "flex-shrink-0", "w-full", "md:w-48"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "text-xs", "font-semibold", "text-slate-600"], [1, "text-xs", "font-bold", "text-indigo-600"], [1, "h-2", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-indigo-500", "rounded-full", "transition-all", "duration-500"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-3", "sm:gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "px-4", "py-3.5"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5"], [1, "lg:col-span-2", "space-y-3"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "text-indigo-600", "hover:text-indigo-700", "font-semibold", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-5", "hover:shadow-card-hover", "transition-shadow", "duration-200"], [1, "space-y-3"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-6", "text-center"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4"], [1, "bg-amber-50", "rounded-xl", "border", "border-amber-100", "p-4"], [1, "flex", "items-start", "gap-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-amber-500", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"], [1, "text-xs", "font-bold", "text-amber-800"], [1, "text-xs", "text-amber-700", "mt-0.5", "leading-relaxed"], [1, "text-xs", "text-amber-500", "mt-1.5", "font-medium"], [1, "text-xl", "font-bold"], [1, "text-xs", "text-slate-500", "font-medium", "mt-0.5"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-4"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "text-xs", "font-bold", "px-2.5", "py-1", "rounded-full", "flex-shrink-0", 3, "ngClass"], [1, "relative", "mb-4", "overflow-x-auto", "pb-2", "scrollbar-thin"], [1, "relative", "min-w-[520px]"], [1, "absolute", "top-3", "left-0", "right-0", "h-0.5", "bg-slate-200"], [1, "h-full", "bg-indigo-500", "transition-all", "duration-700"], [1, "relative", "flex", "justify-between"], [1, "flex", "flex-col", "items-center", "gap-1.5"], [1, "flex", "items-center", "justify-between", "text-xs"], [1, "text-slate-400"], [1, "w-6", "h-6", "rounded-full", "border-2", "flex", "items-center", "justify-center", "z-10", "transition-colors", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 1, "w-3", "h-3", "text-white"], [1, "w-2", "h-2", "rounded-full", "bg-white"], [1, "text-xs", "font-medium", "leading-tight", "text-center", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], [1, "w-10", "h-10", "bg-slate-100", "rounded-xl", "flex", "items-center", "justify-center", "mx-auto", "mb-3"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75"], [1, "text-xs", "text-slate-500"], [1, "flex", "items-start", "justify-between", "gap-2", "mb-2.5"], [1, "min-w-0"], [1, "text-xs", "font-bold", "text-slate-900", "truncate"], [1, "text-xs", "text-indigo-600", "font-semibold", "mt-0.5"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "flex-shrink-0", 3, "ngClass"], [1, "flex", "items-center", "gap-1.5", "mb-2"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-3.5", "h-3.5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-slate-600", "font-medium"], [1, "text-xs", "text-slate-500", "mb-3"], ["target", "_blank", 1, "block", "w-full", "text-center", "text-xs", "font-bold", "text-white", "bg-indigo-600", "hover:bg-indigo-700", "py-2", "rounded-lg", "transition-colors", 3, "href"], [1, "text-sm", "text-slate-500"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "justify-between", "gap-3", "sm:gap-4", "mb-5"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-1"], [1, "text-xs", "font-bold", "px-3", "py-1.5", "rounded-full", "flex-shrink-0", 3, "ngClass"], [1, "relative", "mb-5", "overflow-x-auto", "pb-2", "scrollbar-thin"], [1, "relative", "min-w-[600px]"], [1, "h-full", "bg-indigo-500"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-xs", "text-slate-500"], [1, "text-slate-700"], [1, "ml-auto", "text-indigo-600", "font-bold", "bg-indigo-50", "px-2.5", "py-1", "rounded-lg"], [1, "w-7", "h-7", "rounded-full", "border-2", "flex", "items-center", "justify-center", "z-10", "transition-all", 3, "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "3", 1, "w-3.5", "h-3.5", "text-white"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-white"], [1, "text-center"], [1, "text-xs", "font-semibold", "leading-tight", 3, "ngClass"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-end", "justify-between", "gap-4"], [1, "w-full", "lg:w-80"], [1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1.5"], [1, "flex", "gap-2"], ["placeholder", "Angular, DevOps, UI...", 1, "flex-1", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn", "btn-sm", "btn-primary", "normal-case", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-5"], [1, "flex", "items-center", "justify-between", "gap-3", "mb-3"], [1, "flex", "flex-wrap", "gap-2", "mb-3"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-indigo-100", "bg-indigo-50", "px-3", "py-1.5", "text-xs", "font-semibold", "text-indigo-700"], [1, "flex", "flex-col", "sm:flex-row", "gap-2"], ["placeholder", "Add interest tag", 1, "flex-1", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "normal-case", 3, "click"], [1, "mt-4", "pt-4", "border-t", "border-slate-100"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-5", "hover:shadow-card-hover", "transition-shadow"], [1, "text-indigo-400", "hover:text-rose-500", 3, "click"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wide", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], [1, "rounded-lg", "bg-slate-100", "px-2.5", "py-1", "text-xs", "font-semibold", "text-slate-600", "hover:bg-slate-200"], [1, "rounded-lg", "bg-slate-100", "px-2.5", "py-1", "text-xs", "font-semibold", "text-slate-600", "hover:bg-slate-200", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-3"], [1, "text-xs", "text-slate-500", "mt-1"], [1, "text-xs", "font-bold", "rounded-full", "px-2.5", "py-1", 3, "ngClass"], [1, "text-xs", "font-semibold", "text-slate-600", "mb-3"], [1, "flex", "flex-wrap", "gap-2", "mb-4"], [1, "rounded-lg", "bg-slate-100", "px-2", "py-1", "text-xs", "font-semibold", "text-slate-600"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-2", "sm:gap-3"], [1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "normal-case", "w-full", "sm:w-auto", 3, "click"], [1, "btn", "btn-sm", "btn-primary", "normal-case", "w-full", "sm:w-auto", 3, "click"], [1, "bg-indigo-50", "border", "border-indigo-100", "rounded-xl", "p-4", "flex", "items-center", "gap-4"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-6", "space-y-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "flex", "justify-end", "pt-2"], [1, "btn", "btn-primary", "btn-sm", "normal-case", "font-medium", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-xs", "text-slate-400"], [1, "border-2", "border-dashed", "border-slate-200", "rounded-xl", "p-6", "sm:p-10", "text-center", "hover:border-indigo-400", "hover:bg-indigo-50/30", "transition-all", "duration-150", "cursor-pointer", "group"], [1, "text-sm", "font-bold", "text-slate-900", "mb-4"], [1, "flex", "items-center", "gap-1.5", "text-xs", "font-semibold", "bg-slate-100", "text-slate-700", "px-3", "py-1.5", "rounded-lg", "border", "border-slate-200"], ["type", "text", "placeholder", "Add a skill (e.g. Angular, Python\u2026)", 1, "flex-1", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn", "btn-xs", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium", "px-4", "w-full", "sm:w-auto", 3, "click"], [1, "w-10", "h-10", "bg-indigo-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"], [1, "flex-1"], [1, "text-sm", "font-bold", "text-indigo-800"], [1, "text-xs", "text-indigo-600", "mt-0.5"], [1, "block", "text-xs", "font-semibold", "text-slate-500", "mb-1.5"], [1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "bg-white", "text-slate-900", 3, "type", "value"], [1, "flex", "items-center", "gap-4", "p-4", "border", "border-slate-200", "rounded-xl", "bg-slate-50", "mb-3"], [1, "w-11", "h-14", "bg-rose-50", "border", "border-rose-100", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-xs", "font-bold", "text-rose-600"], [1, "flex-1", "min-w-0"], [1, "text-xs", "text-slate-400", "mt-0.5"], [1, "text-xs", "font-semibold", "text-rose-500", "hover:text-rose-700", "flex-shrink-0", 3, "click"], [1, "btn", "btn-xs", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium"], [1, "w-12", "h-12", "bg-slate-100", "group-hover:bg-indigo-100", "rounded-xl", "flex", "items-center", "justify-center", "mx-auto", "mb-3", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-6", "h-6", "text-slate-400", "group-hover:text-indigo-500", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"], [1, "text-sm", "font-semibold", "text-slate-700", "mb-1"], [1, "text-xs", "text-slate-400", "mb-3"], [1, "btn", "btn-xs", "btn-primary", "normal-case", "font-medium", 3, "click"], [1, "text-slate-400", "hover:text-rose-500", "transition-colors", 3, "click"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "py-16", "text-center"], [1, "w-14", "h-14", "bg-slate-100", "rounded-2xl", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-7", "h-7", "text-slate-400"], [1, "text-base", "font-semibold", "text-slate-700"], [1, "text-sm", "text-slate-400", "mt-1"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-start", "sm:justify-between", "gap-3", "sm:gap-4", "mb-4"], [1, "text-sm", "text-indigo-600", "font-semibold", "mt-0.5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "mb-4"], [1, "flex", "items-center", "gap-2", "text-sm", "text-slate-600"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25"], [1, "text-sm", "text-slate-500", "mb-4"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-2", "btn", "btn-primary", "btn-sm", "normal-case", "font-semibold", 3, "href"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"], [1, "w-full", "max-w-md", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-xl", "p-4", "sm:p-5", "my-6", "sm:my-0"], [1, "w-8", "h-8", "rounded-lg", "hover:bg-slate-100", "text-slate-500", 3, "click"], [1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "50", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], [1, "text-xs", "font-semibold", "text-rose-600"], [1, "flex", "justify-end", "gap-2", "mt-5"], [1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel", "type"], [1, "text-xs", "font-semibold", "text-indigo-600", 3, "click"]], template: function CandidateDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "path", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "span", 7);
            i0.ɵɵtext(8, "HireFlow");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "nav", 8);
            i0.ɵɵrepeaterCreate(10, CandidateDashboardComponent_For_11_Template, 2, 2, "button", 9, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 10)(13, "button", 11);
            i0.ɵɵlistener("click", function CandidateDashboardComponent_Template_button_click_13_listener() { return ctx.toggleAccountOpen(); });
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 12);
            i0.ɵɵlistener("click", function CandidateDashboardComponent_Template_button_click_15_listener() { return ctx.toggleAccountOpen(); });
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(17, CandidateDashboardComponent_Conditional_17_Template, 16, 2, "div", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "nav", 14)(19, "div", 15);
            i0.ɵɵrepeaterCreate(20, CandidateDashboardComponent_For_21_Template, 2, 2, "button", 16, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "main", 17);
            i0.ɵɵconditionalCreate(23, CandidateDashboardComponent_Conditional_23_Template, 58, 10);
            i0.ɵɵconditionalCreate(24, CandidateDashboardComponent_Conditional_24_Template, 8, 1, "div", 18);
            i0.ɵɵconditionalCreate(25, CandidateDashboardComponent_Conditional_25_Template, 31, 4, "div", 19);
            i0.ɵɵconditionalCreate(26, CandidateDashboardComponent_Conditional_26_Template, 31, 3, "div", 19);
            i0.ɵɵconditionalCreate(27, CandidateDashboardComponent_Conditional_27_Template, 6, 1, "div", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(28, CandidateDashboardComponent_Conditional_28_Template, 2, 1, "div", 20);
            i0.ɵɵconditionalCreate(29, CandidateDashboardComponent_Conditional_29_Template, 38, 7, "div", 21);
            i0.ɵɵconditionalCreate(30, CandidateDashboardComponent_Conditional_30_Template, 31, 7, "div", 21);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.portalTabs);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.auth.userInitials(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.auth.userName(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.accountOpen() ? 17 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.portalTabs);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.activeSection() === "dashboard" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSection() === "applications" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSection() === "recommendations" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSection() === "profile" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeSection() === "interviews" ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.toast() ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editOpen() ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.passwordOpen() ? 30 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.MinValidator, i2.MaxValidator, i2.NgModel], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CandidateDashboardComponent, [{
        type: Component,
        args: [{
                selector: 'app-candidate-dashboard',
                standalone: true,
                imports: [CommonModule, FormsModule],
                template: `
    <div class="min-h-screen bg-slate-50">

      <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <span class="font-bold text-slate-900 text-sm tracking-tight">HireFlow</span>
          </div>

          <nav class="hidden md:flex items-center gap-0 border-b-0 min-w-0">
            @for (tab of portalTabs; track tab.key) {
              <button (click)="activeSection.set(tab.key)"
                class="px-3 lg:px-4 py-5 text-sm font-semibold border-b-2 -mb-px transition-colors whitespace-nowrap"
                [ngClass]="activeSection() === tab.key
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'">
                {{ tab.label }}
              </button>
            }
          </nav>

          <div class="relative flex items-center gap-3">
            <button (click)="toggleAccountOpen()"
              class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                     text-white text-xs font-bold flex-shrink-0">
              {{ auth.userInitials() }}
            </button>
            <button (click)="toggleAccountOpen()"
              class="text-sm font-medium text-slate-700 hidden md:block">
              {{ auth.userName() }}
            </button>
            @if (accountOpen()) {
              <div class="absolute right-0 top-full mt-3 w-[min(13rem,calc(100vw-2rem))] bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-30">
                <div class="px-4 py-3 border-b border-slate-100">
                  <p class="text-sm font-bold text-slate-900">{{ auth.userName() }}</p>
                  <p class="text-xs text-slate-500 truncate">{{ auth.currentUser()?.email }}</p>
                </div>
                <button (click)="activeSection.set('profile'); accountOpen.set(false)"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">My Profile</button>
                <button (click)="openEditProfile()"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Edit Profile</button>
                <button (click)="openPasswordModal()"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Change Password</button>
                <button (click)="router.navigate(['/candidate/settings']); accountOpen.set(false)"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Settings</button>
                <button (click)="logout()"
                  class="w-full px-4 py-2 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50">Sign out</button>
              </div>
            }
          </div>
        </div>

        <nav class="md:hidden max-w-5xl mx-auto px-4 pb-2 overflow-x-auto scrollbar-thin">
          <div class="flex items-center gap-2 min-w-max">
            @for (tab of portalTabs; track tab.key) {
              <button (click)="activeSection.set(tab.key)"
                class="px-3 py-2 rounded-lg text-xs font-bold border transition-colors whitespace-nowrap"
                [ngClass]="activeSection() === tab.key
                  ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 bg-white text-slate-500'">
                {{ tab.label }}
              </button>
            }
          </div>
        </nav>
      </header>

      <main class="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-8 pb-24 md:pb-8 space-y-5 sm:space-y-7">

        @if (activeSection() === 'dashboard') {

          <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center
                            justify-center text-white text-lg font-bold flex-shrink-0">
                  {{ auth.userInitials() }}
                </div>
                <div>
                  <h1 class="text-lg font-bold text-slate-900">Good morning, {{ firstName() }}</h1>
                  <p class="text-sm text-slate-500 mt-0.5">
                    You have
                    <span class="text-indigo-600 font-semibold">
                      {{ activeApplications().length }} active applications
                    </span>
                    and
                    <span class="text-violet-600 font-semibold">
                      {{ upcomingInterviews().length }} upcoming interview{{ upcomingInterviews().length !== 1 ? 's' : '' }}
                    </span>
                  </p>
                </div>
              </div>

              <div class="flex-shrink-0 w-full md:w-48">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-semibold text-slate-600">Profile strength</span>
                  <span class="text-xs font-bold text-indigo-600">{{ profileCompletion() }}%</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-indigo-500 rounded-full transition-all duration-500"
                       [style.width.%]="profileCompletion()">
                  </div>
                </div>
                <p class="text-xs text-slate-400 mt-1">
                  @if (profileCompletion() < 100) {
                    Add resume to reach 100%
                  } @else {
                    Profile complete ✓
                  }
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            @for (stat of candidateStats(); track stat.label) {
              <div class="bg-white rounded-xl border border-slate-200 px-4 py-3.5">
                <p class="text-xl font-bold" [style.color]="stat.color">{{ stat.value }}</p>
                <p class="text-xs text-slate-500 font-medium mt-0.5">{{ stat.label }}</p>
              </div>
            }
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

            <div class="lg:col-span-2 space-y-3">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-slate-900">My Applications</h2>
                <button (click)="activeSection.set('applications')"
                  class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  View all →
                </button>
              </div>

              @for (app of applications().slice(0, 3); track app.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-5
                            hover:shadow-card-hover transition-shadow duration-200">
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">{{ app.jobTitle }}</h3>
                      <p class="text-xs text-slate-500 mt-0.5">
                        {{ app.companyName }} · {{ app.department }} · {{ app.location }}
                      </p>
                    </div>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                          [ngClass]="getStatusClass(app.status)">
                      {{ app.status === 'active' ? 'Active' : app.status === 'offered' ? '🎉 Offer Received' : 'Not Selected' }}
                    </span>
                  </div>

                  <div class="relative mb-4 overflow-x-auto pb-2 scrollbar-thin">
                    <div class="relative min-w-[520px]">
                    <div class="absolute top-3 left-0 right-0 h-0.5 bg-slate-200">
                      <div class="h-full bg-indigo-500 transition-all duration-700"
                           [style.width.%]="(app.stageIndex / 5) * 100">
                      </div>
                    </div>
                    <div class="relative flex justify-between">
                      @for (stage of timelineStages; track stage.key; let i = $index) {
                        <div class="flex flex-col items-center gap-1.5">
                          <div class="w-6 h-6 rounded-full border-2 flex items-center
                                      justify-center z-10 transition-colors"
                               [ngClass]="i <= app.stageIndex
                                 ? 'bg-indigo-600 border-indigo-600'
                                 : 'bg-white border-slate-200'">
                            @if (i < app.stageIndex) {
                              <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                              </svg>
                            } @else if (i === app.stageIndex) {
                              <div class="w-2 h-2 rounded-full bg-white"></div>
                            }
                          </div>
                          <span class="text-xs font-medium leading-tight text-center"
                                [ngClass]="i <= app.stageIndex ? 'text-indigo-600' : 'text-slate-400'">
                            {{ stage.shortLabel }}
                          </span>
                        </div>
                      }
                    </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-xs">
                    <span class="text-slate-400">
                      Applied {{ app.appliedDate }}
                    </span>
                    @if (app.nextStep) {
                      <span class="text-indigo-600 font-semibold">{{ app.nextStep }}</span>
                    }
                  </div>
                </div>
              }
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-slate-900">Upcoming Interviews</h2>
                <button (click)="activeSection.set('interviews')"
                  class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  See all →
                </button>
              </div>

              @if (upcomingInterviews().length === 0) {
                <div class="bg-white rounded-xl border border-slate-200 p-6 text-center">
                  <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center
                              justify-center mx-auto mb-3">
                    <svg class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75"/>
                    </svg>
                  </div>
                  <p class="text-xs text-slate-500">No upcoming interviews</p>
                </div>
              }

              @for (iv of upcomingInterviews(); track iv.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-4">
                  <div class="flex items-start justify-between gap-2 mb-2.5">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-900 truncate">{{ iv.jobTitle }}</p>
                      <p class="text-xs text-indigo-600 font-semibold mt-0.5">{{ iv.round }}</p>
                    </div>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                          [ngClass]="iv.mode === 'online'
                            ? 'bg-blue-50 text-blue-600'
                            : 'bg-slate-100 text-slate-600'">
                      {{ iv.mode === 'online' ? '🔗 Online' : '🏢 In-office' }}
                    </span>
                  </div>
                  <div class="flex items-center gap-1.5 mb-2">
                    <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-xs text-slate-600 font-medium">
                      {{ iv.date }}, {{ iv.time }}
                    </span>
                  </div>
                  <p class="text-xs text-slate-500 mb-3">
                    Panel: {{ iv.panelNames.join(', ') }}
                  </p>
                  @if (iv.meetingLink) {
                    <a [href]="iv.meetingLink" target="_blank"
                       class="block w-full text-center text-xs font-bold text-white
                              bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg
                              transition-colors">
                      Join Interview
                    </a>
                  }
                </div>
              }

              <div class="bg-amber-50 rounded-xl border border-amber-100 p-4">
                <div class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                  </svg>
                  <div>
                    <p class="text-xs font-bold text-amber-800">Update from Rahul Mehta</p>
                    <p class="text-xs text-amber-700 mt-0.5 leading-relaxed">
                      Your technical interview is confirmed for Apr 22 at 2:00 PM.
                      Please be ready 5 minutes early.
                    </p>
                    <p class="text-xs text-amber-500 mt-1.5 font-medium">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }

        @if (activeSection() === 'applications') {
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-bold text-slate-900">My Applications</h2>
              <span class="text-sm text-slate-500">{{ applications().length }} total</span>
            </div>

            @for (app of applications(); track app.id) {
              <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-5">
                  <div>
                    <h3 class="text-base font-bold text-slate-900">{{ app.jobTitle }}</h3>
                    <p class="text-sm text-slate-500 mt-1">
                      {{ app.companyName }} · {{ app.department }} · {{ app.location }}
                    </p>
                  </div>
                  <span class="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                        [ngClass]="getStatusClass(app.status)">
                    {{ app.status === 'active' ? 'In Progress' : app.status === 'offered' ? '🎉 Offer!' : 'Not Selected' }}
                  </span>
                </div>

                <div class="relative mb-5 overflow-x-auto pb-2 scrollbar-thin">
                  <div class="relative min-w-[600px]">
                  <div class="absolute top-3 left-0 right-0 h-0.5 bg-slate-200">
                    <div class="h-full bg-indigo-500" [style.width.%]="(app.stageIndex / 5) * 100">
                    </div>
                  </div>
                  <div class="relative flex justify-between">
                    @for (stage of timelineStages; track stage.key; let i = $index) {
                      <div class="flex flex-col items-center gap-2">
                        <div class="w-7 h-7 rounded-full border-2 flex items-center
                                    justify-center z-10 transition-all"
                             [ngClass]="i < app.stageIndex
                               ? 'bg-indigo-600 border-indigo-600'
                               : i === app.stageIndex
                                 ? 'bg-indigo-600 border-indigo-600 ring-4 ring-indigo-100'
                                 : 'bg-white border-slate-200'">
                          @if (i < app.stageIndex) {
                            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                          } @else if (i === app.stageIndex) {
                            <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                          }
                        </div>
                        <div class="text-center">
                          <p class="text-xs font-semibold leading-tight"
                             [ngClass]="i <= app.stageIndex ? 'text-indigo-700' : 'text-slate-400'">
                            {{ stage.label }}
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span>Applied: <strong class="text-slate-700">{{ app.appliedDate }}</strong></span>
                  <span>Last update: <strong class="text-slate-700">{{ app.lastUpdate }}</strong></span>
                  <span>Recruiter: <strong class="text-slate-700">{{ app.recruiterName }}</strong></span>
                  @if (app.nextStep) {
                    <span class="ml-auto text-indigo-600 font-bold bg-indigo-50
                                 px-2.5 py-1 rounded-lg">
                      Next: {{ app.nextStep }}
                    </span>
                  }
                </div>
              </div>
            }
          </div>
        }

        @if (activeSection() === 'recommendations') {
          <div class="space-y-5">
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div>
                <h2 class="text-lg font-bold text-slate-900">Job Recommendations</h2>
                <p class="text-sm text-slate-500 mt-1">Based on your interests and recent searches.</p>
              </div>
              <div class="w-full lg:w-80">
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Search roles</label>
                <div class="flex gap-2">
                  <input [(ngModel)]="jobSearchInput" (keydown.enter)="trackSearch(); $event.preventDefault()"
                    placeholder="Angular, DevOps, UI..."
                    class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  <button (click)="trackSearch()" class="btn btn-sm btn-primary normal-case">Search</button>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
              <div class="flex items-center justify-between gap-3 mb-3">
                <h3 class="text-sm font-bold text-slate-900">Interest Tags</h3>
                <span class="text-xs text-slate-500">{{ recommendedJobs().length }} matches</span>
              </div>
              <div class="flex flex-wrap gap-2 mb-3">
                @for (tag of interestTags(); track tag) {
                  <span class="inline-flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                    {{ tag }}
                    <button (click)="removeInterest(tag)" class="text-indigo-400 hover:text-rose-500">x</button>
                  </span>
                }
              </div>
              <div class="flex flex-col sm:flex-row gap-2">
                <input [(ngModel)]="newInterestInput" (keydown.enter)="addInterest(); $event.preventDefault()"
                  placeholder="Add interest tag"
                  class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                <button (click)="addInterest()" class="btn btn-sm btn-ghost border border-slate-200 normal-case">Add Tag</button>
              </div>
              @if (searchHistory().length) {
                <div class="mt-4 pt-4 border-t border-slate-100">
                  <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Search History</p>
                  <div class="flex flex-wrap gap-2">
                    @for (term of searchHistory(); track term) {
                      <button (click)="addInterest(term)"
                        class="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-200">
                        {{ term }}
                      </button>
                    }
                  </div>
                </div>
              }
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              @for (job of recommendedJobs(); track job.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-card-hover transition-shadow">
                  <div class="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">{{ job.title }}</h3>
                      <p class="text-xs text-slate-500 mt-1">{{ job.company }} · {{ job.location }} · {{ job.type }}</p>
                    </div>
                    <span class="text-xs font-bold rounded-full px-2.5 py-1"
                      [ngClass]="matchScore(job) >= 85 ? 'bg-emerald-100 text-emerald-700' : matchScore(job) >= 70 ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'">
                      {{ matchScore(job) }}% match
                    </span>
                  </div>
                  <p class="text-xs font-semibold text-slate-600 mb-3">{{ job.salary }} · Posted {{ job.posted }}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (tag of job.tags; track tag) {
                      <span class="rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{{ tag }}</span>
                    }
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <button (click)="toggleBookmark(job.id)"
                      class="btn btn-sm btn-ghost border border-slate-200 normal-case w-full sm:w-auto">
                      {{ bookmarkedJobs().includes(job.id) ? 'Bookmarked' : 'Bookmark' }}
                    </button>
                    <button (click)="applyToJob(job)" class="btn btn-sm btn-primary normal-case w-full sm:w-auto">Apply Now</button>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        @if (activeSection() === 'profile') {
          <div class="space-y-5">
            <h2 class="text-lg font-bold text-slate-900">My Profile</h2>

            @if (profileCompletion() < 100) {
              <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex
                          items-center gap-4">
                <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center
                            justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-indigo-800">Complete your profile</p>
                  <p class="text-xs text-indigo-600 mt-0.5">
                    Profiles with resumes get 3× more interview calls.
                    You're {{ profileCompletion() }}% done.
                  </p>
                </div>
              </div>
            }

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4">
              <h3 class="text-sm font-bold text-slate-900">Personal Information</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                @for (field of profileFields(); track field.label) {
                  <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1.5">
                      {{ field.label }}
                    </label>
                    <input [type]="field.type" [value]="field.value"
                      class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white
                             text-slate-900"/>
                  </div>
                }
              </div>
              <div class="flex justify-end pt-2">
                <button (click)="openEditProfile()" class="btn btn-primary btn-sm normal-case font-medium">
                  Edit Profile
                </button>
              </div>
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-bold text-slate-900">Resume / CV</h3>
                <span class="text-xs text-slate-400">PDF, DOCX — max 5 MB</span>
              </div>

              @if (resumeUploaded()) {
                <div class="flex items-center gap-4 p-4 border border-slate-200 rounded-xl
                            bg-slate-50 mb-3">
                  <div class="w-11 h-14 bg-rose-50 border border-rose-100 rounded-lg flex
                              items-center justify-center flex-shrink-0">
                    <span class="text-xs font-bold text-rose-600">PDF</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold text-slate-900">{{ resumeFileName() }}</p>
                    <p class="text-xs text-slate-400 mt-0.5">2.1 MB · Uploaded Mar 10, 2025</p>
                  </div>
                  <button (click)="resumeUploaded.set(false)"
                    class="text-xs font-semibold text-rose-500 hover:text-rose-700 flex-shrink-0">
                    Remove
                  </button>
                </div>
                <button class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                               hover:bg-slate-50 normal-case font-medium">
                  Replace Resume
                </button>
              } @else {
                <div class="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-10
                            text-center hover:border-indigo-400 hover:bg-indigo-50/30
                            transition-all duration-150 cursor-pointer group">
                  <div class="w-12 h-12 bg-slate-100 group-hover:bg-indigo-100 rounded-xl
                              flex items-center justify-center mx-auto mb-3 transition-colors">
                    <svg class="w-6 h-6 text-slate-400 group-hover:text-indigo-500 transition-colors"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-700 mb-1">
                    Drag and drop your resume
                  </p>
                  <p class="text-xs text-slate-400 mb-3">or click to browse files</p>
                  <button (click)="resumeUploaded.set(true)"
                    class="btn btn-xs btn-primary normal-case font-medium">
                    Choose File
                  </button>
                </div>
              }
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
              <h3 class="text-sm font-bold text-slate-900 mb-4">Skills</h3>
              <div class="flex flex-wrap gap-2 mb-3">
                @for (skill of candidateSkills(); track skill) {
                  <span class="flex items-center gap-1.5 text-xs font-semibold
                               bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg
                               border border-slate-200">
                    {{ skill }}
                    <button (click)="removeSkill(skill)" class="text-slate-400 hover:text-rose-500 transition-colors">×</button>
                  </span>
                }
              </div>
              <div class="flex flex-col sm:flex-row gap-2">
                <input [(ngModel)]="newSkillInput" type="text"
                  placeholder="Add a skill (e.g. Angular, Python…)"
                  (keydown.enter)="addSkill(); $event.preventDefault()"
                  class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                <button (click)="addSkill()"
                  class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium px-4 w-full sm:w-auto">
                  Add
                </button>
              </div>
            </div>
          </div>
        }

        @if (activeSection() === 'interviews') {
          <div class="space-y-4">
            <h2 class="text-lg font-bold text-slate-900">My Interviews</h2>

            @if (upcomingInterviews().length === 0) {
              <div class="bg-white rounded-xl border border-slate-200 py-16 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center
                            justify-center mx-auto mb-4">
                  <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75"/>
                  </svg>
                </div>
                <p class="text-base font-semibold text-slate-700">No interviews scheduled yet</p>
                <p class="text-sm text-slate-400 mt-1">
                  Your recruiter will notify you when an interview is arranged.
                </p>
              </div>
            }

            @for (iv of upcomingInterviews(); track iv.id) {
              <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div>
                    <h3 class="text-base font-bold text-slate-900">{{ iv.jobTitle }}</h3>
                    <p class="text-sm text-indigo-600 font-semibold mt-0.5">{{ iv.round }}</p>
                  </div>
                  <span class="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                        [ngClass]="iv.mode === 'online'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-slate-100 text-slate-600'">
                    {{ iv.mode === 'online' ? '🔗 Online' : '🏢 In-office' }}
                  </span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div class="flex items-center gap-2 text-sm text-slate-600">
                    <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25"/>
                    </svg>
                    <span>{{ iv.date }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-slate-600">
                    <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ iv.time }}</span>
                  </div>
                </div>
                <p class="text-sm text-slate-500 mb-4">
                  Interviewers: <strong class="text-slate-700">{{ iv.panelNames.join(', ') }}</strong>
                </p>
                @if (iv.meetingLink) {
                  <a [href]="iv.meetingLink" target="_blank"
                     class="inline-flex items-center gap-2 btn btn-primary btn-sm normal-case font-semibold">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                    </svg>
                    Join Meeting
                  </a>
                }
              </div>
            }
          </div>
        }

      </main>

      @if (toast()) {
        <div class="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg animate-toast">
          {{ toast() }}
        </div>
      }

      @if (editOpen()) {
        <div class="fixed inset-0 z-50 bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div class="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-4 sm:p-5 my-6 sm:my-0">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-base font-bold text-slate-900">Edit Profile</h2>
              <button (click)="editOpen.set(false)" class="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500">x</button>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
                <input [(ngModel)]="profileDraft.name" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Company</label>
                <input [(ngModel)]="profileDraft.company" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Phone</label>
                <input [(ngModel)]="profileDraft.phone" type="tel" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Current Role</label>
                <input [(ngModel)]="profileDraft.title" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Location</label>
                <input [(ngModel)]="profileDraft.location" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Years of Experience</label>
                <input [(ngModel)]="profileDraft.experienceYears" type="number" min="0" max="50" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              @if (profileError()) {
                <p class="text-xs font-semibold text-rose-600">{{ profileError() }}</p>
              }
            </div>
            <div class="flex justify-end gap-2 mt-5">
              <button (click)="editOpen.set(false)" class="btn btn-sm btn-ghost border border-slate-200 normal-case">Cancel</button>
              <button (click)="saveProfile()" class="btn btn-sm btn-primary normal-case">Save</button>
            </div>
          </div>
        </div>
      }

      @if (passwordOpen()) {
        <div class="fixed inset-0 z-50 bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div class="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-4 sm:p-5 my-6 sm:my-0">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-base font-bold text-slate-900">Change Password</h2>
              <button (click)="passwordOpen.set(false)" class="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500">x</button>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Current Password</label>
                <input [(ngModel)]="passwordDraft.current" [type]="showCurrent() ? 'text' : 'password'" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">New Password</label>
                <input [(ngModel)]="passwordDraft.next" [type]="showNew() ? 'text' : 'password'" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Confirm Password</label>
                <input [(ngModel)]="passwordDraft.confirm" [type]="showConfirm() ? 'text' : 'password'" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div class="flex gap-2">
                <button (click)="toggleShowCurrent()" class="text-xs font-semibold text-indigo-600">Toggle current</button>
                <button (click)="toggleShowNew(); toggleShowConfirm()" class="text-xs font-semibold text-indigo-600">Toggle new</button>
              </div>
              @if (passwordError()) {
                <p class="text-xs font-semibold text-rose-600">{{ passwordError() }}</p>
              }
            </div>
            <div class="flex justify-end gap-2 mt-5">
              <button (click)="passwordOpen.set(false)" class="btn btn-sm btn-ghost border border-slate-200 normal-case">Cancel</button>
              <button (click)="savePassword()" class="btn btn-sm btn-primary normal-case">Update Password</button>
            </div>
          </div>
        </div>
      }
    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CandidateDashboardComponent, { className: "CandidateDashboardComponent", filePath: "src/app/features/candidate/dashboard/candidate-dashboard.component.ts", lineNumber: 785 }); })();
