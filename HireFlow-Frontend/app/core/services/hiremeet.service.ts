import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface HireMeeting {
  id: string;
  roomCode: string;
  title: string;
  candidateName: string;
  candidateId?: string;
  jobTitle: string;
  createdBy: string;
  createdAt: string;
  scheduledFor?: string;
  status: 'waiting' | 'live' | 'ended';
  duration?: number;
  meetUrl: string;
}

export interface CreateMeetingPayload {
  title: string;
  candidateName: string;
  candidateId?: string;
  jobTitle: string;
  scheduledFor?: string;
}

export interface JoinResponse {
  meeting: HireMeeting;
  dailyRoomUrl: string;
  meetingToken: string;
  isHost: boolean;
}

@Injectable({ providedIn: 'root' })
export class HireMeetService {
  private http = inject(HttpClient);

  private _meetings = signal<HireMeeting[]>([]);
  readonly meetings = this._meetings.asReadonly();

  // ── Load all meetings for recruiter ──────────────────────────────────────
  loadMeetings(): void {
    this.http.get<{ success: boolean; data: HireMeeting[] }>
      (`${environment.apiUrl}/hiremeet`)
      .pipe(catchError(() => of({ success: true, data: this._demoMeetings() })))
      .subscribe(res => {
        if (res.success) this._meetings.set(res.data);
      });
  }

  // ── Get meeting by room code (for candidates joining) ────────────────────
  getByRoomCode(roomCode: string) {
    return this.http.get<{ success: boolean; data: HireMeeting }>
      (`${environment.apiUrl}/hiremeet/room/${roomCode}`)
      .pipe(catchError(() => of({ success: false, data: null as any })));
  }

  // ── Create new meeting ────────────────────────────────────────────────────
  createMeeting(payload: CreateMeetingPayload) {
    return this.http.post<{ success: boolean; data: HireMeeting; message: string }>
      (`${environment.apiUrl}/hiremeet`, payload)
      .pipe(catchError(err => of({ success: false, data: null as any, message: err?.error?.errors?.[0] ?? 'Failed to create meeting.' })));
  }

  // ── Join a meeting (returns Daily.co URL + token) ─────────────────────────
  joinMeeting(roomCode: string, participantName: string, role?: string) {
    return this.http.post<{ success: boolean; data: JoinResponse; message: string }>
      (`${environment.apiUrl}/hiremeet/join`, { roomCode, participantName, role })
      .pipe(catchError(err => of({ success: false, data: null as any, message: err?.error?.errors?.[0] ?? 'Failed to join meeting.' })));
  }

  // ── Update meeting status ──────────────────────────────────────────────────
  updateStatus(id: string, status: 'waiting' | 'live' | 'ended', duration?: number) {
    return this.http.patch<{ success: boolean }>(
      `${environment.apiUrl}/hiremeet/status`, { id, status, duration })
      .pipe(catchError(() => of({ success: false })));
  }

  // ── Delete meeting ─────────────────────────────────────────────────────────
  deleteMeeting(id: string) {
    return this.http.delete<{ success: boolean }>(`${environment.apiUrl}/hiremeet/${id}`)
      .pipe(catchError(() => of({ success: false })));
  }

  addToList(meeting: HireMeeting): void {
    this._meetings.update(list => [meeting, ...list]);
  }

  removeFromList(id: string): void {
    this._meetings.update(list => list.filter(m => m.id !== id));
  }

  // ── Demo data (when backend is unavailable) ──────────────────────────────
  private _demoMeetings(): HireMeeting[] {
    return [
      { id: 'm1', roomCode: 'abc-def-ghi', title: 'Technical Interview', candidateName: 'Priya Sharma',
        jobTitle: 'Lead Frontend Engineer', createdBy: 'Rahul Mehta',
        createdAt: new Date().toISOString(), status: 'waiting',
        meetUrl: '/meet/abc-def-ghi' },
      { id: 'm2', roomCode: 'xyz-uvw-rst', title: 'HR Round', candidateName: 'Rohan Desai',
        jobTitle: 'DevOps Lead', createdBy: 'Rahul Mehta',
        createdAt: new Date(Date.now() - 3600000).toISOString(), status: 'ended',
        duration: 2340, meetUrl: '/meet/xyz-uvw-rst' },
    ];
  }
}
