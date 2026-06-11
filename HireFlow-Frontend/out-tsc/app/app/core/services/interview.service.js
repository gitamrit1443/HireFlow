import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class InterviewService {
    constructor() {
        this.http = inject(HttpClient);
        this.auth = inject(AuthService);
        this._interviews = signal([], ...(ngDevMode ? [{ debugName: "_interviews" }] : []));
        this.interviews = this._interviews.asReadonly();
    }
    get interviewers() {
        const user = this.auth.currentUser();
        if (!user)
            return [];
        return [{
                id: user.id,
                name: user.name,
                role: user.title || 'Recruiter',
                avatarColor: '#4F46E5',
            }];
    }
    async load() {
        const response = await firstValueFrom(this.http.get(`${environment.apiUrl}/interviews`));
        this._interviews.set(response.data ?? []);
        return this._interviews();
    }
    getUpcoming() {
        const today = new Date().toISOString().split('T')[0];
        return this._interviews()
            .filter(i => i.scheduledDate >= today && i.status === 'scheduled')
            .sort((a, b) => `${a.scheduledDate}${a.startTime}`.localeCompare(`${b.scheduledDate}${b.startTime}`));
    }
    getByDate(date) {
        return this._interviews().filter(i => i.scheduledDate === date);
    }
    getForCandidate(candidateId) {
        return this._interviews().filter(i => i.candidateId === candidateId);
    }
    getCompleted() {
        return this._interviews().filter(i => i.status === 'completed');
    }
    async add(interview) {
        const response = await firstValueFrom(this.http.post(`${environment.apiUrl}/interviews`, {
            applicationId: interview.candidateId,
            jobId: interview.jobId,
            round: this.roundValue(interview.round),
            mode: this.modeValue(interview.mode),
            scheduledDate: interview.scheduledDate,
            startTime: interview.startTime,
            endTime: interview.endTime,
            timezone: interview.timezone,
            interviewers: interview.interviewers,
            meetingLink: interview.meetingLink,
            location: interview.location,
            agenda: interview.agenda,
        }));
        this._interviews.update(items => [response.data, ...items]);
    }
    async submitFeedback(interviewId, feedback) {
        await firstValueFrom(this.http.post(`${environment.apiUrl}/interviews/feedback`, {
            interviewId,
            technicalScore: feedback.technicalScore,
            communicationScore: feedback.communicationScore,
            problemSolvingScore: feedback.problemSolvingScore,
            cultureFitScore: feedback.cultureFitScore,
            overallScore: feedback.overallScore,
            recommendation: this.recommendationValue(feedback.recommendation),
            strengths: feedback.strengths,
            concerns: feedback.concerns,
            notes: feedback.notes,
        }));
        this._interviews.update(items => items.map(interview => interview.id === interviewId ? { ...interview, status: 'completed', feedback } : interview));
    }
    async cancel(interviewId) {
        await firstValueFrom(this.http.patch(`${environment.apiUrl}/interviews/${interviewId}/cancel`, {}));
        this._interviews.update(items => items.map(interview => interview.id === interviewId ? { ...interview, status: 'cancelled' } : interview));
    }
    formatDateLabel(isoDate) {
        const date = new Date(isoDate);
        const today = new Date();
        const diff = Math.floor((date.getTime() - today.setHours(0, 0, 0, 0)) / 86_400_000);
        if (diff === 0)
            return 'Today';
        if (diff === 1)
            return 'Tomorrow';
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    formatTime(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
    }
    generateId() {
        return crypto.randomUUID();
    }
    roundValue(round) {
        return ({ screening: 1, technical: 2, system_design: 3, hr: 4, leadership: 5, final: 6 })[round];
    }
    modeValue(mode) {
        return ({ online: 1, offline: 2, phone: 3 })[mode];
    }
    recommendationValue(value) {
        return ({ strong_hire: 1, hire: 2, maybe: 3, no_hire: 4 })[value];
    }
    static { this.ɵfac = function InterviewService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterviewService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InterviewService, factory: InterviewService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterviewService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
