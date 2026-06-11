import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class LayoutService {
    constructor() {
        this.sidebarOpen = signal(false, ...(ngDevMode ? [{ debugName: "sidebarOpen" }] : []));
    }
    openSidebar() { this.sidebarOpen.set(true); }
    closeSidebar() { this.sidebarOpen.set(false); }
    toggleSidebar() { this.sidebarOpen.update(v => !v); }
    static { this.ɵfac = function LayoutService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LayoutService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
