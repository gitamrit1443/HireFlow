import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../core/services/layout.service';
import * as i0 from "@angular/core";
const _c0 = a0 => ({ exact: a0 });
const _forTrack0 = ($index, $item) => $item.route;
function SidebarComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function SidebarComponent_Conditional_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.layout.closeSidebar()); });
    i0.ɵɵelementEnd();
} }
function SidebarComponent_For_19_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r4.badge, " ");
} }
function SidebarComponent_For_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 27);
    i0.ɵɵlistener("click", function SidebarComponent_For_19_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.layout.closeSidebar()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 28);
    i0.ɵɵelement(2, "path", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, SidebarComponent_For_19_Conditional_5_Template, 2, 1, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r4.route)("routerLinkActiveOptions", i0.ɵɵpureFunction1(5, _c0, item_r4.exact ?? false));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("d", item_r4.iconPath);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r4.badge ? 5 : -1);
} }
function SidebarComponent_For_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵlistener("click", function SidebarComponent_For_24_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.layout.closeSidebar()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 28);
    i0.ɵɵelement(2, "path", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r6.route);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("d", item_r6.iconPath);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.label);
} }
export class SidebarComponent {
    constructor() {
        this.layout = inject(LayoutService);
        this.navItems = [
            {
                label: 'Dashboard', route: '/recruiter/dashboard', exact: true, badge: null,
                iconPath: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
            },
            {
                label: 'Jobs', route: '/recruiter/jobs', badge: null,
                iconPath: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
            },
            {
                label: 'Candidates', route: '/recruiter/candidates', badge: null,
                iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
            },
            {
                label: 'Pipeline', route: '/recruiter/pipeline', badge: 3,
                iconPath: 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z',
            },
            {
                label: 'Interviews', route: '/recruiter/interviews', badge: 6,
                iconPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
            },
            {
                label: 'HireMeet', route: '/recruiter/hiremeet', badge: null,
                iconPath: 'M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
            },
            {
                label: 'Analytics', route: '/recruiter/analytics', badge: null,
                iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
            },
        ];
        this.bottomNavItems = [
            {
                label: 'Settings', route: '/recruiter/settings',
                iconPath: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
            },
        ];
    }
    static { this.ɵfac = function SidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 36, vars: 5, consts: [["aria-hidden", "true", 1, "fixed", "inset-0", "z-40", "bg-black/50", "backdrop-blur-sm", "lg:hidden"], [1, "fixed", "inset-y-0", "left-0", "z-50", "w-64", "bg-slate-900", "flex", "flex-col", "transition-transform", "duration-300", "ease-in-out", "lg:static", "lg:z-auto", "lg:translate-x-0", "lg:w-60", "lg:flex-shrink-0"], [1, "px-5", "py-5", "border-b", "border-slate-800", "flex", "items-center", "justify-between"], ["routerLink", "/recruiter/dashboard", 1, "flex", "items-center", "gap-2.5", "min-w-0", 3, "click"], [1, "w-8", "h-8", "bg-indigo-600", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2.5", 1, "w-4", "h-4", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], [1, "min-w-0"], [1, "text-white", "font-semibold", "text-sm", "tracking-tight"], [1, "block", "text-slate-500", "text-xs"], ["aria-label", "Close menu", 1, "lg:hidden", "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "text-slate-400", "hover:text-white", "hover:bg-slate-800", "transition-colors", 3, "click"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "px-3", "py-4", "space-y-0.5", "overflow-y-auto", "scrollbar-thin"], [1, "px-3", "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-widest", "mb-2"], ["routerLinkActive", "bg-slate-800 text-white", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "text-slate-400", "hover:bg-slate-800", "hover:text-white", "transition-colors", "duration-150", "text-sm", "font-medium", "group", 3, "routerLink", "routerLinkActiveOptions"], [1, "my-3", "border-t", "border-slate-800"], ["routerLinkActive", "bg-slate-800 text-white", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "text-slate-400", "hover:bg-slate-800", "hover:text-white", "transition-colors", "duration-150", "text-sm", "font-medium", 3, "routerLink"], [1, "px-3", "py-4", "border-t", "border-slate-800"], [1, "flex", "items-center", "gap-3", "px-2", "py-2", "rounded-lg", "hover:bg-slate-800", "transition-colors", "duration-150", "cursor-pointer"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-600", "flex", "items-center", "justify-center", "flex-shrink-0", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-white", "truncate"], [1, "text-xs", "text-slate-500", "truncate"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-4", "h-4", "text-slate-500", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 12h.01M12 12h.01M19 12h.01"], ["aria-hidden", "true", 1, "fixed", "inset-0", "z-40", "bg-black/50", "backdrop-blur-sm", "lg:hidden", 3, "click"], ["routerLinkActive", "bg-slate-800 text-white", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "text-slate-400", "hover:bg-slate-800", "hover:text-white", "transition-colors", "duration-150", "text-sm", "font-medium", "group", 3, "click", "routerLink", "routerLinkActiveOptions"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "1.75", 1, "w-[18px]", "h-[18px]", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round"], [1, "ml-auto", "bg-indigo-600", "text-white", "text-xs", "font-semibold", "px-1.5", "py-0.5", "rounded-full", "min-w-[20px]", "text-center"], ["routerLinkActive", "bg-slate-800 text-white", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-lg", "text-slate-400", "hover:bg-slate-800", "hover:text-white", "transition-colors", "duration-150", "text-sm", "font-medium", 3, "click", "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, SidebarComponent_Conditional_0_Template, 1, 0, "div", 0);
            i0.ɵɵelementStart(1, "aside", 1)(2, "div", 2)(3, "a", 3);
            i0.ɵɵlistener("click", function SidebarComponent_Template_a_click_3_listener() { return ctx.layout.closeSidebar(); });
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 5);
            i0.ɵɵelement(6, "path", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "div", 7)(8, "span", 8);
            i0.ɵɵtext(9, "HireFlow");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span", 9);
            i0.ɵɵtext(11, "Hiring Platform");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "button", 10);
            i0.ɵɵlistener("click", function SidebarComponent_Template_button_click_12_listener() { return ctx.layout.closeSidebar(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(13, "svg", 11);
            i0.ɵɵelement(14, "path", 12);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "nav", 13)(16, "p", 14);
            i0.ɵɵtext(17, " Recruiter ");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(18, SidebarComponent_For_19_Template, 6, 7, "a", 15, _forTrack0);
            i0.ɵɵelement(20, "div", 16);
            i0.ɵɵelementStart(21, "p", 14);
            i0.ɵɵtext(22, " System ");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(23, SidebarComponent_For_24_Template, 5, 3, "a", 17, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 18)(26, "div", 19)(27, "div", 20);
            i0.ɵɵtext(28, " RM ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 21)(30, "p", 22);
            i0.ɵɵtext(31, "Rahul Mehta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "p", 23);
            i0.ɵɵtext(33, "Senior Recruiter");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(34, "svg", 24);
            i0.ɵɵelement(35, "path", 25);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.layout.sidebarOpen() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("-translate-x-full", !ctx.layout.sidebarOpen())("translate-x-0", ctx.layout.sidebarOpen());
            i0.ɵɵadvance(17);
            i0.ɵɵrepeater(ctx.navItems);
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.bottomNavItems);
        } }, dependencies: [RouterLink, RouterLinkActive, CommonModule], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{
                selector: 'app-sidebar',
                standalone: true,
                imports: [RouterLink, RouterLinkActive, CommonModule],
                template: `

    @if (layout.sidebarOpen()) {
      <div
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        (click)="layout.closeSidebar()"
        aria-hidden="true">
      </div>
    }


    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 flex flex-col
             transition-transform duration-300 ease-in-out
             lg:static lg:z-auto lg:translate-x-0 lg:w-60 lg:flex-shrink-0"
      [class.-translate-x-full]="!layout.sidebarOpen()"
      [class.translate-x-0]="layout.sidebarOpen()"
    >

      <div class="px-5 py-5 border-b border-slate-800 flex items-center justify-between">
        <a routerLink="/recruiter/dashboard"
           (click)="layout.closeSidebar()"
           class="flex items-center gap-2.5 min-w-0">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <div class="min-w-0">
            <span class="text-white font-semibold text-sm tracking-tight">HireFlow</span>
            <span class="block text-slate-500 text-xs">Hiring Platform</span>
          </div>
        </a>

        <button
          (click)="layout.closeSidebar()"
          class="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg
                 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close menu">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <nav class="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto scrollbar-thin">

        <p class="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
          Recruiter
        </p>

        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="bg-slate-800 text-white"
            [routerLinkActiveOptions]="{ exact: item.exact ?? false }"
            (click)="layout.closeSidebar()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400
                   hover:bg-slate-800 hover:text-white transition-colors duration-150
                   text-sm font-medium group"
          >
            <svg class="w-[18px] h-[18px] flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.iconPath"/>
            </svg>
            <span>{{ item.label }}</span>
            @if (item.badge) {
              <span class="ml-auto bg-indigo-600 text-white text-xs font-semibold
                           px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {{ item.badge }}
              </span>
            }
          </a>
        }

        <div class="my-3 border-t border-slate-800"></div>

        <p class="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
          System
        </p>

        @for (item of bottomNavItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="bg-slate-800 text-white"
            (click)="layout.closeSidebar()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400
                   hover:bg-slate-800 hover:text-white transition-colors duration-150
                   text-sm font-medium"
          >
            <svg class="w-[18px] h-[18px] flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.iconPath"/>
            </svg>
            <span>{{ item.label }}</span>
          </a>
        }
      </nav>

      <div class="px-3 py-4 border-t border-slate-800">
        <div class="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-800
                    transition-colors duration-150 cursor-pointer">
          <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                      flex-shrink-0 text-white text-xs font-semibold">
            RM
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate">Rahul Mehta</p>
            <p class="text-xs text-slate-500 truncate">Senior Recruiter</p>
          </div>
          <svg class="w-4 h-4 text-slate-500 flex-shrink-0"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01"/>
          </svg>
        </div>
      </div>

    </aside>
  `
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 136 }); })();
