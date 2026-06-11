import { Component, input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../../../core/services/layout.service';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ({ standalone: true });
const _forTrack0 = ($index, $item) => $item.key;
function TopbarComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵlistener("clickOutside", function TopbarComponent_Conditional_31_Template_div_clickOutside_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dropdownOpen.set(false)); });
    i0.ɵɵelementStart(1, "div", 28)(2, "p", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 31);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 32)(9, "button", 33);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_31_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToProfile()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(10, "svg", 34);
    i0.ɵɵelement(11, "path", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " My Profile ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "button", 33);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_31_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openEditProfile()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(14, "svg", 34);
    i0.ɵɵelement(15, "path", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16, " Edit Profile ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "button", 33);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_31_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openPasswordModal()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(18, "svg", 34);
    i0.ɵɵelement(19, "path", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " Change Password ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "button", 33);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_31_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToSettings()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(22, "svg", 34);
    i0.ɵɵelement(23, "path", 38)(24, "path", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Settings ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(26, "div", 40)(27, "button", 41);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_31_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(28, "svg", 42);
    i0.ɵɵelement(29, "path", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " Sign out ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.auth.userName());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_2_0.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (tmp_3_0 = ctx_r1.auth.currentUser()) == null ? null : tmp_3_0.role, " ");
} }
function TopbarComponent_Conditional_32_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.profileError());
} }
function TopbarComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 44)(2, "div", 45)(3, "h2", 46);
    i0.ɵɵtext(4, "Edit Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 47);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_32_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editOpen.set(false)); });
    i0.ɵɵtext(6, "x");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 48)(8, "div")(9, "label", 49);
    i0.ɵɵtext(10, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function TopbarComponent_Conditional_32_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.profileDraft.name, $event) || (ctx_r1.profileDraft.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "label", 49);
    i0.ɵɵtext(14, "Company");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function TopbarComponent_Conditional_32_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.profileDraft.company, $event) || (ctx_r1.profileDraft.company = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "label", 49);
    i0.ɵɵtext(18, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function TopbarComponent_Conditional_32_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.profileDraft.phone, $event) || (ctx_r1.profileDraft.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(20, TopbarComponent_Conditional_32_Conditional_20_Template, 2, 1, "p", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 53)(22, "button", 54);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_32_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editOpen.set(false)); });
    i0.ɵɵtext(23, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 55);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_32_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveProfile()); });
    i0.ɵɵtext(25, "Save");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.profileDraft.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.profileDraft.company);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.profileDraft.phone);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.profileError() ? 20 : -1);
} }
function TopbarComponent_Conditional_33_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "label", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function TopbarComponent_Conditional_33_For_9_Template_input_ngModelChange_4_listener($event) { const field_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.passwordDraft[field_r6.key], $event) || (ctx_r1.passwordDraft[field_r6.key] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 57);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_33_For_9_Template_button_click_5_listener() { const field_r6 = i0.ɵɵrestoreView(_r5).$implicit; return i0.ɵɵresetView(field_r6.toggle()); });
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r6.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.passwordDraft[field_r6.key]);
    i0.ɵɵproperty("type", field_r6.visible() ? "text" : "password");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", field_r6.visible() ? "Hide" : "Show", " ");
} }
function TopbarComponent_Conditional_33_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.passwordError());
} }
function TopbarComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 44)(2, "div", 45)(3, "h2", 46);
    i0.ɵɵtext(4, "Change Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 47);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_33_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.passwordOpen.set(false)); });
    i0.ɵɵtext(6, "x");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 48);
    i0.ɵɵrepeaterCreate(8, TopbarComponent_Conditional_33_For_9_Template, 7, 4, "div", null, _forTrack0);
    i0.ɵɵconditionalCreate(10, TopbarComponent_Conditional_33_Conditional_10_Template, 2, 1, "p", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 53)(12, "button", 54);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_33_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.passwordOpen.set(false)); });
    i0.ɵɵtext(13, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 55);
    i0.ɵɵlistener("click", function TopbarComponent_Conditional_33_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savePassword()); });
    i0.ɵɵtext(15, "Update Password");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.passwordFields);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.passwordError() ? 10 : -1);
} }
function TopbarComponent_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.toast(), " ");
} }
export class TopbarComponent {
    constructor() {
        this.layout = inject(LayoutService);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.pageTitle = input('Dashboard', ...(ngDevMode ? [{ debugName: "pageTitle" }] : []));
        this.searchQuery = '';
        this.dropdownOpen = signal(false, ...(ngDevMode ? [{ debugName: "dropdownOpen" }] : []));
        this.editOpen = signal(false, ...(ngDevMode ? [{ debugName: "editOpen" }] : []));
        this.passwordOpen = signal(false, ...(ngDevMode ? [{ debugName: "passwordOpen" }] : []));
        this.toast = signal('', ...(ngDevMode ? [{ debugName: "toast" }] : []));
        this.profileError = signal('', ...(ngDevMode ? [{ debugName: "profileError" }] : []));
        this.passwordError = signal('', ...(ngDevMode ? [{ debugName: "passwordError" }] : []));
        this.showCurrent = signal(false, ...(ngDevMode ? [{ debugName: "showCurrent" }] : []));
        this.showNew = signal(false, ...(ngDevMode ? [{ debugName: "showNew" }] : []));
        this.showConfirm = signal(false, ...(ngDevMode ? [{ debugName: "showConfirm" }] : []));
        this.profileDraft = { name: '', company: '', phone: '' };
        this.passwordDraft = { current: '', next: '', confirm: '' };
        this.passwordFields = [
            { key: 'current', label: 'Current Password', visible: this.showCurrent, toggle: () => this.showCurrent.update(v => !v) },
            { key: 'next', label: 'New Password', visible: this.showNew, toggle: () => this.showNew.update(v => !v) },
            { key: 'confirm', label: 'Confirm Password', visible: this.showConfirm, toggle: () => this.showConfirm.update(v => !v) },
        ];
    }
    goToProfile() {
        this.dropdownOpen.set(false);
        this.router.navigate([this.auth.isRecruiter() ? '/recruiter/settings' : '/candidate/dashboard'], {
            queryParams: this.auth.isCandidate() ? { tab: 'profile' } : undefined
        });
    }
    goToSettings() {
        this.dropdownOpen.set(false);
        this.router.navigate([this.auth.isRecruiter() ? '/recruiter/settings' : '/candidate/settings']);
    }
    openEditProfile() {
        const user = this.auth.currentUser();
        this.profileDraft = { name: user?.name ?? '', company: user?.company ?? '', phone: user?.phone ?? '' };
        this.profileError.set('');
        this.dropdownOpen.set(false);
        this.editOpen.set(true);
    }
    saveProfile() {
        if (this.profileDraft.name.trim().length < 2) {
            this.profileError.set('Name must be at least 2 characters.');
            return;
        }
        this.auth.updateProfile(this.profileDraft);
        this.editOpen.set(false);
        this.showToast('Profile updated.');
    }
    openPasswordModal() {
        this.passwordDraft = { current: '', next: '', confirm: '' };
        this.passwordError.set('');
        this.dropdownOpen.set(false);
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
    showToast(message) {
        this.toast.set(message);
        setTimeout(() => this.toast.set(''), 2200);
    }
    logout() {
        this.dropdownOpen.set(false);
        this.auth.logout();
    }
    static { this.ɵfac = function TopbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TopbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TopbarComponent, selectors: [["app-topbar"]], inputs: { pageTitle: [1, "pageTitle"] }, decls: 35, vars: 13, consts: [[1, "h-14", "md:h-16", "bg-white", "border-b", "border-slate-200", "flex", "items-center", "px-3", "sm:px-4", "md:px-6", "gap-2", "sm:gap-3", "flex-shrink-0", "min-w-0"], ["aria-label", "Open menu", 1, "lg:hidden", "w-9", "h-9", "flex", "items-center", "justify-center", "rounded-lg", "text-slate-500", "hover:bg-slate-100", "hover:text-slate-700", "transition-colors", "flex-shrink-0", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"], [1, "flex-1", "min-w-0"], [1, "text-sm", "md:text-base", "font-semibold", "text-slate-900", "truncate"], [1, "relative", "hidden", "md:flex", "items-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "absolute", "left-3", "w-4", "h-4", "text-slate-400", "pointer-events-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"], ["type", "text", "placeholder", "Search candidates, jobs\u2026", 1, "pl-9", "pr-4", "py-2", "text-sm", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "text-slate-900", "placeholder:text-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "w-52", "lg:w-64", "transition-all", "duration-150", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "items-center", "gap-1.5", "md:gap-2", "flex-shrink-0"], [1, "md:hidden", "w-9", "h-9", "flex", "items-center", "justify-center", "rounded-lg", "text-slate-500", "hover:bg-slate-100", "transition-colors"], [1, "relative", "w-9", "h-9", "flex", "items-center", "justify-center", "rounded-lg", "text-slate-500", "hover:bg-slate-100", "hover:text-slate-700", "transition-colors", "duration-150"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"], [1, "absolute", "top-1.5", "right-1.5", "w-2", "h-2", "bg-rose-500", "rounded-full"], [1, "w-px", "h-5", "bg-slate-200", "hidden", "sm:block"], [1, "relative"], [1, "flex", "items-center", "gap-2", "pl-1", "pr-2", "py-1", "rounded-lg", "hover:bg-slate-100", "transition-colors", "duration-150", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-semibold", "flex-shrink-0"], [1, "hidden", "md:block", "text-left"], [1, "text-sm", "font-medium", "text-slate-800", "leading-tight"], [1, "text-xs", "text-slate-500", "leading-tight", "capitalize"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-slate-400", "hidden", "md:block", "transition-transform", "duration-150"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.5 8.25l-7.5 7.5-7.5-7.5"], [1, "absolute", "right-0", "top-full", "mt-2", "w-[min(13rem,calc(100vw-2rem))]", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-lg", "z-50", "py-1", "overflow-hidden"], [1, "fixed", "inset-0", "z-[80]", "bg-slate-900/35", "flex", "items-start", "sm:items-center", "justify-center", "p-4", "overflow-y-auto"], [1, "fixed", "bottom-5", "left-1/2", "z-[90]", "-translate-x-1/2", "rounded-lg", "bg-slate-900", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "shadow-lg", "animate-toast"], [1, "absolute", "right-0", "top-full", "mt-2", "w-[min(13rem,calc(100vw-2rem))]", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-lg", "z-50", "py-1", "overflow-hidden", 3, "clickOutside"], [1, "px-4", "py-3", "border-b", "border-slate-100"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "inline-block", "mt-1.5", "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-indigo-100", "text-indigo-700", "capitalize"], [1, "py-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "text-slate-700", "hover:bg-slate-50", "transition-colors", "text-left", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5A2.25 2.25 0 0019.5 19.5v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "border-t", "border-slate-100", "py-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2", "text-sm", "font-semibold", "text-rose-600", "hover:bg-rose-50", "transition-colors", "text-left", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"], [1, "w-full", "max-w-md", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-xl", "p-4", "sm:p-5", "my-6", "sm:my-0"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-base", "font-bold", "text-slate-900"], [1, "w-8", "h-8", "rounded-lg", "hover:bg-slate-100", "text-slate-500", 3, "click"], [1, "space-y-3"], [1, "block", "text-xs", "font-semibold", "text-slate-600", "mb-1.5"], [1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "w-full", "px-3", "py-2", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], [1, "text-xs", "font-semibold", "text-rose-600"], [1, "flex", "justify-end", "gap-2", "mt-5"], [1, "btn", "btn-sm", "btn-ghost", "border", "border-slate-200", "normal-case", 3, "click"], [1, "btn", "btn-sm", "btn-primary", "normal-case", 3, "click"], [1, "w-full", "px-3", "py-2", "pr-12", "text-sm", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel", "type"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-semibold", "text-indigo-600", 3, "click"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function TopbarComponent_Template_button_click_1_listener() { return ctx.layout.toggleSidebar(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 2);
            i0.ɵɵelement(3, "path", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", 4)(5, "h1", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 7);
            i0.ɵɵelement(9, "path", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(10, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function TopbarComponent_Template_input_ngModelChange_10_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 10)(12, "button", 11);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(13, "svg", 2);
            i0.ɵɵelement(14, "path", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "button", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(16, "svg", 2);
            i0.ɵɵelement(17, "path", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(18, "span", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "div", 15);
            i0.ɵɵelementStart(20, "div", 16)(21, "button", 17);
            i0.ɵɵlistener("click", function TopbarComponent_Template_button_click_21_listener() { return ctx.dropdownOpen.set(!ctx.dropdownOpen()); });
            i0.ɵɵelementStart(22, "div", 18);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 19)(25, "p", 20);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p", 21);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(29, "svg", 22);
            i0.ɵɵelement(30, "path", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(31, TopbarComponent_Conditional_31_Template, 31, 3, "div", 24);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(32, TopbarComponent_Conditional_32_Template, 26, 4, "div", 25);
            i0.ɵɵconditionalCreate(33, TopbarComponent_Conditional_33_Template, 16, 1, "div", 25);
            i0.ɵɵconditionalCreate(34, TopbarComponent_Conditional_34_Template, 2, 1, "div", 26);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.pageTitle(), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQuery);
            i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(12, _c0));
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate1(" ", ctx.auth.userInitials(), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.auth.userName());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.auth.userTitle());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("rotate-180", ctx.dropdownOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.dropdownOpen() ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editOpen() ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.passwordOpen() ? 33 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.toast() ? 34 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, ClickOutsideDirective], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TopbarComponent, [{
        type: Component,
        args: [{
                selector: 'app-topbar',
                standalone: true,
                imports: [CommonModule, FormsModule, ClickOutsideDirective],
                template: `
    <header class="h-14 md:h-16 bg-white border-b border-slate-200
                   flex items-center px-3 sm:px-4 md:px-6 gap-2 sm:gap-3 flex-shrink-0 min-w-0">

      <!-- Hamburger (mobile) -->
      <button
        (click)="layout.toggleSidebar()"
        class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
               text-slate-500 hover:bg-slate-100 hover:text-slate-700
               transition-colors flex-shrink-0"
        aria-label="Open menu">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </button>

      <!-- Page title -->
      <div class="flex-1 min-w-0">
        <h1 class="text-sm md:text-base font-semibold text-slate-900 truncate">
          {{ pageTitle() }}
        </h1>
      </div>

      <!-- Search (desktop) -->
      <div class="relative hidden md:flex items-center">
        <svg class="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
        <input
          type="text"
          placeholder="Search candidates, jobs…"
          [(ngModel)]="searchQuery"
          [ngModelOptions]="{ standalone: true }"
          class="pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200
                 rounded-lg text-slate-900 placeholder:text-slate-400
                 focus:outline-none focus:ring-2 focus:ring-indigo-500
                 focus:border-transparent w-52 lg:w-64 transition-all duration-150"
        />
      </div>

      <div class="flex items-center gap-1.5 md:gap-2 flex-shrink-0">

        <!-- Search icon (mobile) -->
        <button class="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                        text-slate-500 hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </button>

        <!-- Notifications -->
        <button class="relative w-9 h-9 flex items-center justify-center rounded-lg
                        text-slate-500 hover:bg-slate-100 hover:text-slate-700
                        transition-colors duration-150">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div class="w-px h-5 bg-slate-200 hidden sm:block"></div>

        <!-- User Avatar + Dropdown -->
        <div class="relative">
          <button
            (click)="dropdownOpen.set(!dropdownOpen())"
            class="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg
                   hover:bg-slate-100 transition-colors duration-150">
            <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                        text-white text-xs font-semibold flex-shrink-0">
              {{ auth.userInitials() }}
            </div>
            <div class="hidden md:block text-left">
              <p class="text-sm font-medium text-slate-800 leading-tight">{{ auth.userName() }}</p>
              <p class="text-xs text-slate-500 leading-tight capitalize">{{ auth.userTitle() }}</p>
            </div>
            <svg class="w-4 h-4 text-slate-400 hidden md:block transition-transform duration-150"
                 [class.rotate-180]="dropdownOpen()"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </button>

          <!-- Dropdown Menu -->
          @if (dropdownOpen()) {
            <div class="absolute right-0 top-full mt-2 w-[min(13rem,calc(100vw-2rem))] bg-white rounded-xl
                        border border-slate-200 shadow-lg z-50 py-1 overflow-hidden"
                 (clickOutside)="dropdownOpen.set(false)">

              <!-- User Info -->
              <div class="px-4 py-3 border-b border-slate-100">
                <p class="text-sm font-semibold text-slate-900">{{ auth.userName() }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ auth.currentUser()?.email }}</p>
                <span class="inline-block mt-1.5 text-xs font-semibold px-2 py-0.5 rounded-full
                             bg-indigo-100 text-indigo-700 capitalize">
                  {{ auth.currentUser()?.role }}
                </span>
              </div>

              <!-- Menu Items -->
              <div class="py-1">
                <button (click)="goToProfile()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                  </svg>
                  My Profile
                </button>
                <button (click)="openEditProfile()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"/>
                  </svg>
                  Edit Profile
                </button>
                <button (click)="openPasswordModal()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5A2.25 2.25 0 0019.5 19.5v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                  </svg>
                  Change Password
                </button>
                <button (click)="goToSettings()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Settings
                </button>
              </div>

              <!-- Logout -->
              <div class="border-t border-slate-100 py-1">
                <button
                  (click)="logout()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold
                         text-rose-600 hover:bg-rose-50 transition-colors text-left">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                  </svg>
                  Sign out
                </button>
              </div>

            </div>
          }
        </div>

      </div>
    </header>

    @if (editOpen()) {
      <div class="fixed inset-0 z-[80] bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
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
      <div class="fixed inset-0 z-[80] bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
        <div class="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-4 sm:p-5 my-6 sm:my-0">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-bold text-slate-900">Change Password</h2>
            <button (click)="passwordOpen.set(false)" class="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500">x</button>
          </div>
          <div class="space-y-3">
            @for (field of passwordFields; track field.key) {
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">{{ field.label }}</label>
                <div class="relative">
                  <input [(ngModel)]="passwordDraft[field.key]"
                    [type]="field.visible() ? 'text' : 'password'"
                    class="w-full px-3 py-2 pr-12 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  <button type="button" (click)="field.toggle()"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-indigo-600">
                    {{ field.visible() ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </div>
            }
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

    @if (toast()) {
      <div class="fixed bottom-5 left-1/2 z-[90] -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg animate-toast">
        {{ toast() }}
      </div>
    }
  `
            }]
    }], null, { pageTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "pageTitle", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src/app/shared/components/topbar/topbar.component.ts", lineNumber: 255 }); })();
