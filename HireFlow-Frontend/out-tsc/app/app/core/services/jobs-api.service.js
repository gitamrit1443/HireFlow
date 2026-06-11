import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class JobsApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.jobs = signal([], ...(ngDevMode ? [{ debugName: "jobs" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
    }
    async loadAll() {
        this.loading.set(true);
        this.error.set(null);
        try {
            const params = new HttpParams().set('pageSize', 200);
            const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/jobs`, { params }));
            const jobs = response.data?.items ?? [];
            this.jobs.set(jobs);
            return jobs;
        }
        catch (error) {
            this.error.set(error?.error?.errors?.[0] ?? 'Unable to load jobs.');
            return [];
        }
        finally {
            this.loading.set(false);
        }
    }
    async getById(id) {
        try {
            const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/jobs/${id}`));
            return response.data ?? null;
        }
        catch {
            return null;
        }
    }
    async create(payload) {
        const response = await firstValueFrom(this.http.post(`${environment.apiUrl}/jobs`, this.toApiPayload(payload)));
        this.jobs.update(items => [response.data, ...items]);
        return response.data;
    }
    async update(id, payload) {
        const response = await firstValueFrom(this.http.put(`${environment.apiUrl}/jobs/${id}`, this.toApiPayload(payload)));
        this.jobs.update(items => items.map(job => job.id === id ? response.data : job));
        return response.data;
    }
    formatSalary(value) {
        if (value >= 10_000_000)
            return `₹${(value / 10_000_000).toFixed(1)}Cr`;
        if (value >= 100_000)
            return `₹${(value / 100_000).toFixed(1)}L`;
        return `₹${value.toLocaleString('en-IN')}`;
    }
    toApiPayload(payload) {
        const typeMap = {
            'full-time': 1,
            'part-time': 2,
            contract: 3,
            remote: 4,
        };
        const statusMap = {
            open: 1,
            closed: 2,
            draft: 3,
            paused: 4,
        };
        return {
            ...payload,
            type: typeMap[payload.type],
            status: statusMap[payload.status],
        };
    }
    static { this.ɵfac = function JobsApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || JobsApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JobsApiService, factory: JobsApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobsApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
