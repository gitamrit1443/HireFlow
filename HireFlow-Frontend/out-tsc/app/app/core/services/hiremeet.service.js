import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class HireMeetService {
    constructor() {
        this.http = inject(HttpClient);
        this._meetings = signal([], ...(ngDevMode ? [{ debugName: "_meetings" }] : []));
        this.meetings = this._meetings.asReadonly();
    }
    // ── Load all meetings for recruiter ──────────────────────────────────────
    loadMeetings() {
        this.http.get(`${environment.apiUrl}/hiremeet`)
            .pipe(catchError(() => of({ success: false, data: [] })))
            .subscribe(res => {
            if (res.success)
                this._meetings.set(res.data);
        });
    }
    // ── Get meeting by room code (for candidates joining) ────────────────────
    getByRoomCode(roomCode) {
        return this.http.get(`${environment.apiUrl}/hiremeet/room/${roomCode}`)
            .pipe(catchError(() => of({ success: false, data: null })));
    }
    // ── Create new meeting ────────────────────────────────────────────────────
    createMeeting(payload) {
        return this.http.post(`${environment.apiUrl}/hiremeet`, payload)
            .pipe(catchError(err => of({ success: false, data: null, message: err?.error?.errors?.[0] ?? 'Failed to create meeting.' })));
    }
    // ── Join a meeting (returns Daily.co URL + token) ─────────────────────────
    joinMeeting(roomCode, participantName, role) {
        return this.http.post(`${environment.apiUrl}/hiremeet/join`, { roomCode, participantName, role })
            .pipe(catchError(err => of({ success: false, data: null, message: err?.error?.errors?.[0] ?? 'Failed to join meeting.' })));
    }
    // ── Update meeting status ──────────────────────────────────────────────────
    updateStatus(id, status, duration) {
        return this.http.patch(`${environment.apiUrl}/hiremeet/status`, { id, status, duration })
            .pipe(catchError(() => of({ success: false })));
    }
    // ── Delete meeting ─────────────────────────────────────────────────────────
    deleteMeeting(id) {
        return this.http.delete(`${environment.apiUrl}/hiremeet/${id}`)
            .pipe(catchError(() => of({ success: false })));
    }
    addToList(meeting) {
        this._meetings.update(list => [meeting, ...list]);
    }
    removeFromList(id) {
        this._meetings.update(list => list.filter(m => m.id !== id));
    }
    static { this.ɵfac = function HireMeetService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HireMeetService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HireMeetService, factory: HireMeetService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HireMeetService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
