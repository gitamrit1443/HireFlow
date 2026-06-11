import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.value;
const _forTrack2 = ($index, $item) => $item.label;
const _forTrack3 = ($index, $item) => $item.email;
const _forTrack4 = ($index, $item) => $item.title;
function SettingsComponent_For_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function SettingsComponent_For_8_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeTab.set(tab_r2.key)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.activeTab() === tab_r2.key ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("d", tab_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2.label, " ");
} }
function SettingsComponent_Conditional_9_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tz_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", tz_r5.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tz_r5.label);
} }
function SettingsComponent_Conditional_9_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 35);
    i0.ɵɵelement(2, "path", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Changes saved successfully ");
    i0.ɵɵelementEnd();
} }
function SettingsComponent_Conditional_9_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} }
function SettingsComponent_Conditional_9_For_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "label", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", field_r6.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", field_r6.type)("placeholder", field_r6.placeholder);
} }
function SettingsComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 14);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 15);
    i0.ɵɵtext(9, " Change Photo ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 16)(11, "h2", 17);
    i0.ɵɵtext(12, "Personal Information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "form", 18);
    i0.ɵɵlistener("ngSubmit", function SettingsComponent_Conditional_9_Template_form_ngSubmit_13_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.saveProfile()); });
    i0.ɵɵelementStart(14, "div", 19)(15, "div")(16, "label", 20);
    i0.ɵɵtext(17, "First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div")(20, "label", 20);
    i0.ɵɵtext(21, "Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "input", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div")(24, "label", 20);
    i0.ɵɵtext(25, "Work Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 23);
    i0.ɵɵelementStart(27, "p", 24);
    i0.ɵɵtext(28, " Contact admin to change your email address. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 19)(30, "div")(31, "label", 20);
    i0.ɵɵtext(32, "Role / Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "input", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div")(35, "label", 20);
    i0.ɵɵtext(36, "Timezone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "select", 26);
    i0.ɵɵrepeaterCreate(38, SettingsComponent_Conditional_9_For_39_Template, 2, 2, "option", 27, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div")(41, "label", 20);
    i0.ɵɵtext(42, " Department ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "select", 28)(44, "option");
    i0.ɵɵtext(45, "Talent Acquisition");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "option");
    i0.ɵɵtext(47, "Human Resources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "option");
    i0.ɵɵtext(49, "Engineering");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "option");
    i0.ɵɵtext(51, "Product");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 29);
    i0.ɵɵconditionalCreate(53, SettingsComponent_Conditional_9_Conditional_53_Template, 4, 0, "span", 30)(54, SettingsComponent_Conditional_9_Conditional_54_Template, 1, 0, "span");
    i0.ɵɵelementStart(55, "button", 31);
    i0.ɵɵtext(56, " Save Changes ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(57, "div", 6)(58, "h2", 17);
    i0.ɵɵtext(59, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "form", 32);
    i0.ɵɵrepeaterCreate(61, SettingsComponent_Conditional_9_For_62_Template, 4, 3, "div", null, _forTrack2);
    i0.ɵɵelementStart(63, "div", 33)(64, "button", 34);
    i0.ɵɵtext(65, " Update Password ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.auth.userInitials(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.auth.userName());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.auth.userTitle());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r2.profileForm);
    i0.ɵɵadvance(25);
    i0.ɵɵrepeater(ctx_r2.timezones);
    i0.ɵɵadvance(15);
    i0.ɵɵconditional(ctx_r2.profileSaved() ? 53 : 54);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r2.passwordFields);
} }
function SettingsComponent_Conditional_10_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2713 Invite sent to ", ctx_r2.lastInvitedEmail(), " ");
} }
function SettingsComponent_Conditional_10_For_39_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1, "You");
    i0.ɵɵelementEnd();
} }
function SettingsComponent_Conditional_10_For_39_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵtext(1, " Remove ");
    i0.ɵɵelementEnd();
} }
function SettingsComponent_Conditional_10_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 59)(1, "td", 60)(2, "div", 61);
    i0.ɵɵelement(3, "app-avatar", 62);
    i0.ɵɵelementStart(4, "div")(5, "p", 63);
    i0.ɵɵtext(6);
    i0.ɵɵconditionalCreate(7, SettingsComponent_Conditional_10_For_39_Conditional_7_Template, 2, 0, "span", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 65);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "td", 66)(11, "span", 67);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 66)(14, "div", 68);
    i0.ɵɵelement(15, "div", 69);
    i0.ɵɵelementStart(16, "span", 70);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "td", 71)(19, "span", 65);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td", 66);
    i0.ɵɵconditionalCreate(22, SettingsComponent_Conditional_10_For_39_Conditional_22_Template, 2, 0, "button", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const member_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("name", member_r8.name)("color", member_r8.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", member_r8.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(member_r8.isYou ? 7 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(member_r8.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.getRoleBadge(member_r8.role));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", member_r8.role, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", member_r8.status === "active" ? "bg-emerald-500" : "bg-slate-300");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(member_r8.status);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(member_r8.joinedDate);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!member_r8.isYou ? 22 : -1);
} }
function SettingsComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "h2", 17);
    i0.ɵɵtext(3, "Invite Team Member");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 38)(5, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function SettingsComponent_Conditional_10_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.inviteEmail, $event) || (ctx_r2.inviteEmail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function SettingsComponent_Conditional_10_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.inviteRole, $event) || (ctx_r2.inviteRole = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(7, "option", 41);
    i0.ɵɵtext(8, "Recruiter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 42);
    i0.ɵɵtext(10, "Hiring Manager");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 43);
    i0.ɵɵtext(12, "Interviewer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 44);
    i0.ɵɵtext(14, "Admin");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 45);
    i0.ɵɵlistener("click", function SettingsComponent_Conditional_10_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sendInvite()); });
    i0.ɵɵtext(16, " Send Invite ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(17, SettingsComponent_Conditional_10_Conditional_17_Template, 2, 1, "p", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 47)(19, "div", 48)(20, "h2", 49);
    i0.ɵɵtext(21, "Team Members");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p", 50);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 51)(25, "table", 52)(26, "thead")(27, "tr", 53)(28, "th", 54);
    i0.ɵɵtext(29, "Member");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th", 55);
    i0.ɵɵtext(31, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th", 55);
    i0.ɵɵtext(33, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th", 56);
    i0.ɵɵtext(35, "Joined");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(36, "th", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "tbody", 58);
    i0.ɵɵrepeaterCreate(38, SettingsComponent_Conditional_10_For_39_Template, 23, 11, "tr", 59, _forTrack3);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.inviteEmail);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.inviteRole);
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(ctx_r2.inviteSent() ? 17 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r2.teamMembers.length, " members");
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r2.teamMembers);
} }
function SettingsComponent_Conditional_11_For_7_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "div", 81)(2, "p", 82);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 83);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "label", 84)(7, "input", 85);
    i0.ɵɵtwoWayListener("ngModelChange", function SettingsComponent_Conditional_11_For_7_For_4_Template_input_ngModelChange_7_listener($event) { const item_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.notifState[item_r10.key], $event) || (ctx_r2.notifState[item_r10.key] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.desc);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.notifState[item_r10.key]);
} }
function SettingsComponent_Conditional_11_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78)(1, "p", 79);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(3, SettingsComponent_Conditional_11_For_7_For_4_Template, 8, 3, "div", 80, _forTrack0);
} if (rf & 2) {
    const group_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", group_r11.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r11.items);
} }
function SettingsComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "h2", 73);
    i0.ɵɵtext(2, "Notification Preferences");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 74);
    i0.ɵɵtext(4, " Control when and how HireFlow notifies you. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵrepeaterCreate(6, SettingsComponent_Conditional_11_For_7_Template, 5, 1, null, null, _forTrack4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 76)(9, "button", 77);
    i0.ɵɵtext(10, " Save Preferences ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r2.notificationGroups);
} }
function SettingsComponent_Conditional_12_For_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 93);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 98);
    i0.ɵɵelement(2, "path", 99);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(3, "div", 100);
    i0.ɵɵelementStart(4, "div", 101)(5, "p", 102);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 103);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label", 104);
    i0.ɵɵelement(10, "input", 105);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stage_r12 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("background-color", stage_r12.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(stage_r12.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stage_r12.desc);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", stage_r12.active);
} }
function SettingsComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "h2", 17);
    i0.ɵɵtext(3, "Company Settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 86)(5, "div", 19)(6, "div")(7, "label", 20);
    i0.ɵɵtext(8, " Company Name ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div")(11, "label", 20);
    i0.ɵɵtext(12, " Industry ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 88)(14, "option");
    i0.ɵɵtext(15, "Software / SaaS");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option");
    i0.ɵɵtext(17, "Fintech");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option");
    i0.ɵɵtext(19, "E-commerce");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option");
    i0.ɵɵtext(21, "Healthcare");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(22, "div")(23, "label", 20);
    i0.ɵɵtext(24, " Company Website ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "input", 89);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 6)(27, "div", 90)(28, "div")(29, "h2", 49);
    i0.ɵɵtext(30, "Hiring Pipeline Stages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 50);
    i0.ɵɵtext(32, " Customize the stages candidates move through ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "button", 91);
    i0.ɵɵtext(34, " + Add Stage ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 92);
    i0.ɵɵrepeaterCreate(36, SettingsComponent_Conditional_12_For_37_Template, 11, 5, "div", 93, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 94)(39, "h2", 95);
    i0.ɵɵtext(40, "Danger Zone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "p", 14);
    i0.ɵɵtext(42, " These actions are irreversible. Proceed with caution. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 96)(44, "button", 97);
    i0.ɵɵtext(45, " Archive All Jobs ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 97);
    i0.ɵɵtext(47, " Export All Data ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "button", 97);
    i0.ɵɵtext(49, " Delete Workspace ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("value", (tmp_1_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_1_0.company);
    i0.ɵɵadvance(27);
    i0.ɵɵrepeater(ctx_r2.pipelineStages);
} }
export class SettingsComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.activeTab = signal('profile', ...(ngDevMode ? [{ debugName: "activeTab" }] : []));
        this.profileSaved = signal(false, ...(ngDevMode ? [{ debugName: "profileSaved" }] : []));
        this.inviteEmail = '';
        this.inviteRole = 'recruiter';
        this.inviteSent = signal(false, ...(ngDevMode ? [{ debugName: "inviteSent" }] : []));
        this.lastInvitedEmail = signal('', ...(ngDevMode ? [{ debugName: "lastInvitedEmail" }] : []));
        this.tabs = [
            { key: 'profile', label: 'Profile', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
            { key: 'team', label: 'Team', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
            { key: 'notifications', label: 'Notifications', icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' },
            { key: 'workspace', label: 'Workspace', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
        ];
        this.profileForm = this.fb.group({
            firstName: [this.auth.userName().split(' ')[0] ?? '', Validators.required],
            lastName: [this.auth.userName().split(' ').slice(1).join(' '), Validators.required],
            email: [{ value: this.auth.currentUser()?.email ?? '', disabled: true }],
            role: [this.auth.userTitle()],
            timezone: ['Asia/Kolkata'],
            department: [this.auth.currentUser()?.department ?? ''],
        });
        this.timezones = [
            { value: 'Asia/Kolkata', label: 'IST — India Standard Time (UTC+5:30)' },
            { value: 'Asia/Singapore', label: 'SGT — Singapore Time (UTC+8)' },
            { value: 'Europe/London', label: 'GMT — Greenwich Mean Time (UTC+0)' },
            { value: 'America/New_York', label: 'EST — Eastern Standard Time (UTC-5)' },
            { value: 'America/Los_Angeles', label: 'PST — Pacific Standard Time (UTC-8)' },
        ];
        this.passwordFields = [
            { label: 'Current Password', type: 'password', placeholder: 'Enter current password' },
            { label: 'New Password', type: 'password', placeholder: 'Min 8 characters' },
            { label: 'Confirm Password', type: 'password', placeholder: 'Repeat new password' },
        ];
        this.teamMembers = [
            { name: this.auth.userName(), email: this.auth.currentUser()?.email ?? '', color: '#4F46E5', role: 'Admin', status: 'active', joinedDate: 'Current', isYou: true },
            { name: 'Sneha Verma', email: 'sneha.verma@acmetek.in', color: '#10B981', role: 'Recruiter', status: 'active', joinedDate: 'Feb 2024', isYou: false },
            { name: 'Divya Pillai', email: 'divya.pillai@acmetek.in', color: '#EC4899', role: 'Hiring Manager', status: 'active', joinedDate: 'Jan 2024', isYou: false },
            { name: 'Vikash Anand', email: 'vikash.anand@acmetek.in', color: '#F59E0B', role: 'Interviewer', status: 'active', joinedDate: 'Mar 2024', isYou: false },
            { name: 'Neha Kapoor', email: 'neha.kapoor@acmetek.in', color: '#8B5CF6', role: 'Interviewer', status: 'active', joinedDate: 'Mar 2024', isYou: false },
            { name: 'Aryan Shah', email: 'aryan.shah@acmetek.in', color: '#0EA5E9', role: 'HR BP', status: 'active', joinedDate: 'Apr 2024', isYou: false },
            { name: 'Priya Iyer', email: 'priya.iyer@acmetek.in', color: '#84CC16', role: 'Recruiter', status: 'invited', joinedDate: 'Invited', isYou: false },
        ];
        this.notifState = {
            new_application: true,
            stage_moved: true,
            interview_today: true,
            feedback_due: true,
            offer_accepted: true,
            offer_declined: false,
            weekly_digest: true,
            product_updates: false,
            app_new_app: true,
            app_feedback: true,
            app_mentions: true,
            app_interviews: true,
        };
        this.notificationGroups = [
            {
                title: 'Email Notifications',
                items: [
                    { key: 'new_application', label: 'New Applications', desc: 'When a candidate applies to one of your open roles.' },
                    { key: 'stage_moved', label: 'Stage Changes', desc: 'When a candidate is moved to a new pipeline stage.' },
                    { key: 'interview_today', label: 'Interview Reminders', desc: '1 hour before a scheduled interview starts.' },
                    { key: 'feedback_due', label: 'Feedback Reminders', desc: 'When an interview is completed and feedback is pending.' },
                    { key: 'offer_accepted', label: 'Offer Accepted', desc: 'When a candidate accepts an offer letter.' },
                    { key: 'weekly_digest', label: 'Weekly Digest', desc: 'Summary of hiring activity every Monday morning.' },
                    { key: 'product_updates', label: 'Product Updates', desc: 'New features and platform announcements.' },
                ]
            },
            {
                title: 'In-App Notifications',
                items: [
                    { key: 'app_new_app', label: 'New Applications', desc: 'Real-time badge when candidates apply.' },
                    { key: 'app_feedback', label: 'Feedback Submitted', desc: 'When a panelist submits interview feedback.' },
                    { key: 'app_mentions', label: '@Mentions', desc: 'When someone tags you in a note or comment.' },
                    { key: 'app_interviews', label: 'Interview Alerts', desc: 'Alerts for your scheduled interviews.' },
                ]
            }
        ];
        this.pipelineStages = [
            { key: 'applied', label: 'Applied', color: '#3B82F6', desc: 'Initial application received', active: true },
            { key: 'shortlisted', label: 'Shortlisted', color: '#6366F1', desc: 'Reviewed and approved for next step', active: true },
            { key: 'assessment', label: 'Assessment', color: '#F59E0B', desc: 'Technical or skill assessment sent', active: true },
            { key: 'interview', label: 'Interview', color: '#8B5CF6', desc: 'Technical panel interview round', active: true },
            { key: 'hr_round', label: 'HR Round', color: '#F97316', desc: 'Cultural fit and compensation talk', active: true },
            { key: 'selected', label: 'Selected', color: '#10B981', desc: 'Offer extended to candidate', active: true },
            { key: 'rejected', label: 'Rejected', color: '#EF4444', desc: 'Application not moved forward', active: true },
        ];
    }
    saveProfile() {
        if (this.profileForm.invalid) {
            this.profileForm.markAllAsTouched();
            return;
        }
        const value = this.profileForm.getRawValue();
        this.auth.updateProfile({
            name: `${value.firstName} ${value.lastName}`.trim(),
            company: this.auth.currentUser()?.company,
            phone: this.auth.currentUser()?.phone,
            title: value.role,
            department: value.department,
        });
        this.profileSaved.set(true);
        setTimeout(() => this.profileSaved.set(false), 2500);
    }
    getRoleBadge(role) {
        const map = {
            'Admin': 'bg-rose-100 text-rose-700',
            'Recruiter': 'bg-indigo-100 text-indigo-700',
            'Hiring Manager': 'bg-violet-100 text-violet-700',
            'Interviewer': 'bg-amber-100 text-amber-700',
            'HR BP': 'bg-emerald-100 text-emerald-700',
        };
        return map[role] ?? 'bg-slate-100 text-slate-600';
    }
    sendInvite() {
        if (!this.inviteEmail.trim())
            return;
        this.lastInvitedEmail.set(this.inviteEmail);
        this.inviteEmail = '';
        this.inviteSent.set(true);
        setTimeout(() => this.inviteSent.set(false), 2500);
    }
    static { this.ɵfac = function SettingsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SettingsComponent, selectors: [["app-settings"]], decls: 13, vars: 4, consts: [[1, "p-4", "sm:p-6", "max-w-4xl", "mx-auto", "space-y-5"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-0.5"], [1, "flex", "gap-0", "border-b", "border-slate-200", "overflow-x-auto", "scrollbar-thin"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-semibold", "border-b-2", "transition-colors", "duration-150", "-mb-px", 3, "ngClass"], [1, "space-y-5"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-6"], [1, "flex", "items-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-semibold", "border-b-2", "transition-colors", "duration-150", "-mb-px", 3, "click", "ngClass"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-5"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-6", "text-center"], [1, "w-20", "h-20", "rounded-2xl", "bg-indigo-600", "flex", "items-center", "justify-center", "mx-auto", "mb-3", "text-white", "text-2xl", "font-bold", "shadow-md"], [1, "text-sm", "font-bold", "text-slate-900", "mb-0.5"], [1, "text-xs", "text-slate-500", "mb-4"], [1, "btn", "btn-xs", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium", "w-full"], [1, "lg:col-span-2", "bg-white", "rounded-xl", "border", "border-slate-200", "p-4", "sm:p-6"], [1, "text-sm", "font-bold", "text-slate-900", "mb-4"], [1, "space-y-4", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1.5"], ["formControlName", "firstName", "type", "text", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "lastName", "type", "text", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "email", "type", "email", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "bg-slate-50"], [1, "text-xs", "text-slate-400", "mt-1"], ["formControlName", "role", "type", "text", "placeholder", "e.g. Senior Recruiter", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["formControlName", "timezone", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [3, "value"], ["formControlName", "department", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "items-center", "justify-between", "pt-2"], [1, "text-xs", "text-emerald-600", "font-semibold", "flex", "items-center", "gap-1.5"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "normal-case", "font-medium"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "md:col-span-3", "flex", "justify-end"], ["type", "button", 1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "type", "placeholder"], [1, "flex", "flex-col", "md:flex-row", "gap-3"], ["type", "email", "placeholder", "colleague@company.com", 1, "flex-1", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], [1, "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "text-slate-700", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["value", "recruiter"], ["value", "hiring_manager"], ["value", "interviewer"], ["value", "admin"], [1, "btn", "btn-primary", "btn-sm", "normal-case", "font-medium", "px-5", 3, "click"], [1, "text-xs", "text-emerald-600", "font-semibold", "mt-2", "flex", "items-center", "gap-1.5"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-slate-100"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "overflow-x-auto", "scrollbar-thin"], [1, "w-full", "min-w-[680px]"], [1, "border-b", "border-slate-100", "bg-slate-50/60"], [1, "text-left", "px-6", "py-3", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "text-left", "px-4", "py-3", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "text-left", "px-4", "py-3", "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider", "hidden", "md:table-cell"], [1, "px-4", "py-3"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/50", "transition-colors", "group"], [1, "px-6", "py-3.5"], [1, "flex", "items-center", "gap-3"], ["size", "sm", 3, "name", "color"], [1, "text-sm", "font-semibold", "text-slate-900", "flex", "items-center", "gap-2"], [1, "text-xs", "bg-indigo-100", "text-indigo-600", "px-1.5", "py-0.5", "rounded", "font-semibold"], [1, "text-xs", "text-slate-500"], [1, "px-4", "py-3.5"], [1, "text-xs", "font-semibold", "px-2", "py-1", "rounded-full", 3, "ngClass"], [1, "flex", "items-center", "gap-1.5"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "text-xs", "text-slate-600", "capitalize"], [1, "px-4", "py-3.5", "hidden", "md:table-cell"], [1, "text-xs", "text-rose-500", "hover:text-rose-700", "font-semibold", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "text-sm", "font-bold", "text-slate-900", "mb-1"], [1, "text-xs", "text-slate-500", "mb-6"], [1, "space-y-0", "divide-y", "divide-slate-100"], [1, "flex", "justify-end", "mt-5", "pt-4", "border-t", "border-slate-100"], [1, "btn", "btn-primary", "btn-sm", "normal-case", "font-medium"], [1, "pt-5", "pb-3", "first:pt-0"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "py-3.5", "flex", "items-center", "justify-between"], [1, "flex-1", "min-w-0", "pr-8"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "text-xs", "text-slate-500", "mt-0.5", "leading-relaxed"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "flex-shrink-0"], ["type", "checkbox", 1, "toggle", "toggle-sm", "toggle-primary", 3, "ngModelChange", "ngModel"], [1, "space-y-4"], ["type", "text", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "value"], [1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "bg-white", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], ["type", "url", "value", "https://acmetek.in", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "btn", "btn-xs", "btn-ghost", "border", "border-slate-200", "text-slate-600", "hover:bg-slate-50", "normal-case", "font-medium"], [1, "space-y-2"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-lg", "border", "border-slate-100", "bg-slate-50", "hover:bg-white", "hover:border-slate-200", "transition-all", "group"], [1, "bg-white", "rounded-xl", "border", "border-rose-200", "p-4", "sm:p-6"], [1, "text-sm", "font-bold", "text-rose-700", "mb-1"], [1, "flex", "flex-col", "sm:flex-row", "gap-3"], [1, "btn", "btn-xs", "btn-ghost", "border", "border-rose-200", "text-rose-600", "hover:bg-rose-50", "normal-case", "font-medium"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.5", 1, "w-4", "h-4", "text-slate-300", "flex-shrink-0", "cursor-grab"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 9h16.5m-16.5 6.75h16.5"], [1, "w-3", "h-3", "rounded-full", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "text-xs", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-400"], [1, "cursor-pointer", "flex-shrink-0"], ["type", "checkbox", 1, "toggle", "toggle-xs", "toggle-primary", 3, "checked"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "h1", 1);
            i0.ɵɵtext(3, "Settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5, "Manage your account and workspace preferences");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵrepeaterCreate(7, SettingsComponent_For_8_Template, 4, 3, "button", 4, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(9, SettingsComponent_Conditional_9_Template, 66, 5);
            i0.ɵɵconditionalCreate(10, SettingsComponent_Conditional_10_Template, 40, 4, "div", 5);
            i0.ɵɵconditionalCreate(11, SettingsComponent_Conditional_11_Template, 11, 0, "div", 6);
            i0.ɵɵconditionalCreate(12, SettingsComponent_Conditional_12_Template, 50, 1, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.tabs);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.activeTab() === "profile" ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "team" ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "notifications" ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab() === "workspace" ? 12 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, FormsModule, i2.NgModel, i2.NgForm, AvatarComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsComponent, [{
        type: Component,
        args: [{
                selector: 'app-settings',
                standalone: true,
                imports: [CommonModule, ReactiveFormsModule, FormsModule, AvatarComponent],
                template: `
    <div class="p-4 sm:p-6 max-w-4xl mx-auto space-y-5">

      <div>
        <h1 class="text-xl font-bold text-slate-900">Settings</h1>
        <p class="text-sm text-slate-500 mt-0.5">Manage your account and workspace preferences</p>
      </div>

      <div class="flex gap-0 border-b border-slate-200 overflow-x-auto scrollbar-thin">
        @for (tab of tabs; track tab.key) {
          <button (click)="activeTab.set(tab.key)"
            class="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border-b-2
                   transition-colors duration-150 -mb-px"
            [ngClass]="activeTab() === tab.key
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="tab.icon"/>
            </svg>
            {{ tab.label }}
          </button>
        }
      </div>

      @if (activeTab() === 'profile') {
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 text-center">
            <div class="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center
                        mx-auto mb-3 text-white text-2xl font-bold shadow-md">
              {{ auth.userInitials() }}
            </div>
            <p class="text-sm font-bold text-slate-900 mb-0.5">{{ auth.userName() }}</p>
            <p class="text-xs text-slate-500 mb-4">{{ auth.userTitle() }}</p>
            <button class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                           hover:bg-slate-50 normal-case font-medium w-full">
              Change Photo
            </button>
          </div>

          <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4">Personal Information</h2>
            <form [formGroup]="profileForm" (ngSubmit)="saveProfile()" class="space-y-4">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
                  <input formControlName="firstName" type="text"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
                  <input formControlName="lastName" type="text"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Work Email</label>
                <input formControlName="email" type="email"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"/>
                <p class="text-xs text-slate-400 mt-1">
                  Contact admin to change your email address.
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Role / Title</label>
                  <input formControlName="role" type="text" placeholder="e.g. Senior Recruiter"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Timezone</label>
                  <select formControlName="timezone"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    @for (tz of timezones; track tz.value) {
                      <option [value]="tz.value">{{ tz.label }}</option>
                    }
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                  Department
                </label>
                <select formControlName="department"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Talent Acquisition</option>
                  <option>Human Resources</option>
                  <option>Engineering</option>
                  <option>Product</option>
                </select>
              </div>

              <div class="flex items-center justify-between pt-2">
                @if (profileSaved()) {
                  <span class="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Changes saved successfully
                  </span>
                } @else {
                  <span></span>
                }
                <button type="submit"
                  class="btn btn-primary btn-sm normal-case font-medium">
                  Save Changes
                </button>
              </div>

            </form>
          </div>

        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-4">Change Password</h2>
          <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @for (field of passwordFields; track field.label) {
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                  {{ field.label }}
                </label>
                <input [type]="field.type" [placeholder]="field.placeholder"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
            }
            <div class="md:col-span-3 flex justify-end">
              <button type="button"
                class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                       hover:bg-slate-50 normal-case font-medium">
                Update Password
              </button>
            </div>
          </form>
        </div>
      }

      @if (activeTab() === 'team') {
        <div class="space-y-5">

          <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4">Invite Team Member</h2>
            <div class="flex flex-col md:flex-row gap-3">
              <input [(ngModel)]="inviteEmail" type="email"
                placeholder="colleague&#64;company.com"
                class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              <select [(ngModel)]="inviteRole"
                class="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="recruiter">Recruiter</option>
                <option value="hiring_manager">Hiring Manager</option>
                <option value="interviewer">Interviewer</option>
                <option value="admin">Admin</option>
              </select>
              <button (click)="sendInvite()"
                class="btn btn-primary btn-sm normal-case font-medium px-5">
                Send Invite
              </button>
            </div>
            @if (inviteSent()) {
              <p class="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1.5">
                ✓ Invite sent to {{ lastInvitedEmail() }}
              </p>
            }
          </div>

          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-slate-100">
              <h2 class="text-sm font-bold text-slate-900">Team Members</h2>
              <p class="text-xs text-slate-500 mt-0.5">{{ teamMembers.length }} members</p>
            </div>
            <div class="overflow-x-auto scrollbar-thin">
            <table class="w-full min-w-[680px]">
              <thead>
                <tr class="border-b border-slate-100 bg-slate-50/60">
                  <th class="text-left px-6 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider">Member</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider">Role</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider">Status</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider hidden md:table-cell">Joined</th>
                  <th class="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                @for (member of teamMembers; track member.email) {
                  <tr class="hover:bg-slate-50/50 transition-colors group">
                    <td class="px-6 py-3.5">
                      <div class="flex items-center gap-3">
                        <app-avatar [name]="member.name" [color]="member.color" size="sm"/>
                        <div>
                          <p class="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            {{ member.name }}
                            @if (member.isYou) {
                              <span class="text-xs bg-indigo-100 text-indigo-600
                                           px-1.5 py-0.5 rounded font-semibold">You</span>
                            }
                          </p>
                          <p class="text-xs text-slate-500">{{ member.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3.5">
                      <span class="text-xs font-semibold px-2 py-1 rounded-full"
                            [ngClass]="getRoleBadge(member.role)">
                        {{ member.role }}
                      </span>
                    </td>
                    <td class="px-4 py-3.5">
                      <div class="flex items-center gap-1.5">
                        <div class="w-1.5 h-1.5 rounded-full"
                             [ngClass]="member.status === 'active' ? 'bg-emerald-500' : 'bg-slate-300'">
                        </div>
                        <span class="text-xs text-slate-600 capitalize">{{ member.status }}</span>
                      </div>
                    </td>
                    <td class="px-4 py-3.5 hidden md:table-cell">
                      <span class="text-xs text-slate-500">{{ member.joinedDate }}</span>
                    </td>
                    <td class="px-4 py-3.5">
                      @if (!member.isYou) {
                        <button class="text-xs text-rose-500 hover:text-rose-700 font-semibold
                                       opacity-0 group-hover:opacity-100 transition-opacity">
                          Remove
                        </button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
            </div>
          </div>
        </div>
      }

      @if (activeTab() === 'notifications') {
        <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">Notification Preferences</h2>
          <p class="text-xs text-slate-500 mb-6">
            Control when and how HireFlow notifies you.
          </p>

          <div class="space-y-0 divide-y divide-slate-100">
            @for (group of notificationGroups; track group.title) {
              <div class="pt-5 pb-3 first:pt-0">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {{ group.title }}
                </p>
              </div>
              @for (item of group.items; track item.key) {
                <div class="py-3.5 flex items-center justify-between">
                  <div class="flex-1 min-w-0 pr-8">
                    <p class="text-sm font-semibold text-slate-800">{{ item.label }}</p>
                    <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">{{ item.desc }}</p>
                  </div>
                  <label class="flex items-center gap-2 cursor-pointer flex-shrink-0">
                    <input type="checkbox"
                      [(ngModel)]="notifState[item.key]"
                      class="toggle toggle-sm toggle-primary"/>
                  </label>
                </div>
              }
            }
          </div>

          <div class="flex justify-end mt-5 pt-4 border-t border-slate-100">
            <button class="btn btn-primary btn-sm normal-case font-medium">
              Save Preferences
            </button>
          </div>
        </div>
      }

      @if (activeTab() === 'workspace') {
        <div class="space-y-5">

          <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4">Company Settings</h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                    Company Name
                  </label>
                  <input type="text" [value]="auth.currentUser()?.company"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                    Industry
                  </label>
                  <select class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                                 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Software / SaaS</option>
                    <option>Fintech</option>
                    <option>E-commerce</option>
                    <option>Healthcare</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                  Company Website
                </label>
                <input type="url" value="https://acmetek.in"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-sm font-bold text-slate-900">Hiring Pipeline Stages</h2>
                <p class="text-xs text-slate-500 mt-0.5">
                  Customize the stages candidates move through
                </p>
              </div>
              <button class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                             hover:bg-slate-50 normal-case font-medium">
                + Add Stage
              </button>
            </div>
            <div class="space-y-2">
              @for (stage of pipelineStages; track stage.key) {
                <div class="flex items-center gap-3 p-3 rounded-lg border border-slate-100
                            bg-slate-50 hover:bg-white hover:border-slate-200 transition-all group">
                  <svg class="w-4 h-4 text-slate-300 flex-shrink-0 cursor-grab"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                  </svg>
                  <div class="w-3 h-3 rounded-full flex-shrink-0"
                       [style.backgroundColor]="stage.color"></div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800">{{ stage.label }}</p>
                    <p class="text-xs text-slate-400">{{ stage.desc }}</p>
                  </div>
                  <label class="cursor-pointer flex-shrink-0">
                    <input type="checkbox" [checked]="stage.active"
                      class="toggle toggle-xs toggle-primary"/>
                  </label>
                </div>
              }
            </div>
          </div>

          <div class="bg-white rounded-xl border border-rose-200 p-4 sm:p-6">
            <h2 class="text-sm font-bold text-rose-700 mb-1">Danger Zone</h2>
            <p class="text-xs text-slate-500 mb-4">
              These actions are irreversible. Proceed with caution.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <button class="btn btn-xs btn-ghost border border-rose-200 text-rose-600
                             hover:bg-rose-50 normal-case font-medium">
                Archive All Jobs
              </button>
              <button class="btn btn-xs btn-ghost border border-rose-200 text-rose-600
                             hover:bg-rose-50 normal-case font-medium">
                Export All Data
              </button>
              <button class="btn btn-xs btn-ghost border border-rose-200 text-rose-600
                             hover:bg-rose-50 normal-case font-medium">
                Delete Workspace
              </button>
            </div>
          </div>
        </div>
      }

    </div>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/recruiter/settings/settings.component.ts", lineNumber: 407 }); })();
