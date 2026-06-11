import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Interview, InterviewFeedback, Interviewer, InterviewMode, InterviewRound } from '../models/interview.model';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class InterviewService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private readonly _interviews = signal<Interview[]>([]);
  readonly interviews = this._interviews.asReadonly();

  get interviewers(): Interviewer[] {
    const user = this.auth.currentUser();
    if (!user) return [];
    return [{
      id: user.id,
      name: user.name,
      role: user.title || 'Recruiter',
      avatarColor: '#4F46E5',
    }];
  }

  async load(): Promise<Interview[]> {
    const response = await firstValueFrom(
      this.http.get<ApiResponse<Interview[]>>(`${environment.apiUrl}/interviews`)
    );
    this._interviews.set(response.data ?? []);
    return this._interviews();
  }

  getUpcoming(): Interview[] {
    const today = new Date().toISOString().split('T')[0];
    return this._interviews()
      .filter(i => i.scheduledDate >= today && i.status === 'scheduled')
      .sort((a, b) => `${a.scheduledDate}${a.startTime}`.localeCompare(`${b.scheduledDate}${b.startTime}`));
  }

  getByDate(date: string): Interview[] {
    return this._interviews().filter(i => i.scheduledDate === date);
  }

  getForCandidate(candidateId: string): Interview[] {
    return this._interviews().filter(i => i.candidateId === candidateId);
  }

  getCompleted(): Interview[] {
    return this._interviews().filter(i => i.status === 'completed');
  }

  async add(interview: Interview): Promise<void> {
    const response = await firstValueFrom(
      this.http.post<ApiResponse<Interview>>(`${environment.apiUrl}/interviews`, {
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
      })
    );
    this._interviews.update(items => [response.data, ...items]);
  }

  async submitFeedback(interviewId: string, feedback: InterviewFeedback): Promise<void> {
    await firstValueFrom(
      this.http.post(`${environment.apiUrl}/interviews/feedback`, {
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
      })
    );
    this._interviews.update(items => items.map(interview =>
      interview.id === interviewId ? { ...interview, status: 'completed', feedback } : interview
    ));
  }

  async cancel(interviewId: string): Promise<void> {
    await firstValueFrom(
      this.http.patch(`${environment.apiUrl}/interviews/${interviewId}/cancel`, {})
    );
    this._interviews.update(items => items.map(interview =>
      interview.id === interviewId ? { ...interview, status: 'cancelled' } : interview
    ));
  }

  formatDateLabel(isoDate: string): string {
    const date = new Date(isoDate);
    const today = new Date();
    const diff = Math.floor((date.getTime() - today.setHours(0, 0, 0, 0)) / 86_400_000);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  formatTime(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
  }

  generateId(): string {
    return crypto.randomUUID();
  }

  private roundValue(round: InterviewRound): number {
    return ({ screening: 1, technical: 2, system_design: 3, hr: 4, leadership: 5, final: 6 })[round];
  }

  private modeValue(mode: InterviewMode): number {
    return ({ online: 1, offline: 2, phone: 3 })[mode];
  }

  private recommendationValue(value: InterviewFeedback['recommendation']): number {
    return ({ strong_hire: 1, hire: 2, maybe: 3, no_hire: 4 })[value];
  }
}
