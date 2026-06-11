import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class ApplicationsApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.applications = signal([], ...(ngDevMode ? [{ debugName: "applications" }] : []));
    }
    async loadMine() {
        const params = new HttpParams().set('pageSize', 200);
        const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/applications/mine`, { params }));
        this.applications.set(response.data?.items ?? []);
        return this.applications();
    }
    async apply(jobId) {
        const response = await firstValueFrom(this.http.post(`${environment.apiUrl}/applications`, { jobId }));
        this.applications.update(items => [response.data, ...items]);
        return response.data;
    }
    static { this.ɵfac = function ApplicationsApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationsApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApplicationsApiService, factory: ApplicationsApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationsApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
