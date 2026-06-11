import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class DashboardService {
    constructor() {
        this.http = inject(HttpClient);
    }
    async getRecruiterDashboard() {
        const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/dashboard/recruiter`));
        return response.data;
    }
    async getAnalytics() {
        const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/dashboard/analytics`));
        return response.data;
    }
    static { this.ɵfac = function DashboardService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
