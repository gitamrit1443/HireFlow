import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class CandidatesApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.candidates = signal([], ...(ngDevMode ? [{ debugName: "candidates" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
    }
    async loadAll() {
        this.loading.set(true);
        this.error.set(null);
        try {
            const params = new HttpParams().set('pageSize', 200);
            const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/candidates`, { params }));
            const candidates = (response.data?.items ?? []).map(item => this.normalize(item));
            this.candidates.set(candidates);
            return candidates;
        }
        catch (error) {
            this.error.set(error?.error?.errors?.[0] ?? 'Unable to load candidates.');
            return [];
        }
        finally {
            this.loading.set(false);
        }
    }
    async getById(applicationId) {
        try {
            const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/candidates/${applicationId}`));
            return this.normalize(response.data);
        }
        catch {
            return null;
        }
    }
    async getScore(applicationId) {
        try {
            const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/candidates/${applicationId}/score`));
            return response.data ?? null;
        }
        catch {
            return null;
        }
    }
    async updateStage(applicationId, stage) {
        const stageMap = {
            applied: 1,
            shortlisted: 2,
            assessment: 3,
            interview: 4,
            hr_round: 5,
            selected: 6,
            rejected: 7,
        };
        await firstValueFrom(this.http.patch(`${environment.apiUrl}/candidates/stage`, {
            applicationId,
            stage: stageMap[stage],
        }));
        this.candidates.update(items => items.map(candidate => candidate.id === applicationId ? { ...candidate, stage } : candidate));
    }
    normalize(candidate) {
        return { ...candidate, id: candidate.applicationId || candidate.id };
    }
    static { this.ɵfac = function CandidatesApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CandidatesApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CandidatesApiService, factory: CandidatesApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CandidatesApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
