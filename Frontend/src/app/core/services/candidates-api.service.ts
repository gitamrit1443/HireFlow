import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Candidate, CandidateScore, HiringStage } from '../models/candidate.model';
import { environment } from '../../../environments/environment';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  errors?: string[];
}

interface CandidateDto extends Candidate {
  applicationId: string;
}

interface PagedResult<T> {
  items: T[];
  totalCount: number;
}

@Injectable({ providedIn: 'root' })
export class CandidatesApiService {
  private readonly http = inject(HttpClient);
  readonly candidates = signal<Candidate[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  async loadAll(): Promise<Candidate[]> {
    this.loading.set(true);
    this.error.set(null);
    try {
      const params = new HttpParams().set('pageSize', 200);
      const response = await firstValueFrom(
        this.http.get<ApiResponse<PagedResult<CandidateDto>>>(`${environment.apiUrl}/candidates`, { params })
      );
      const candidates = (response.data?.items ?? []).map(item => this.normalize(item));
      this.candidates.set(candidates);
      return candidates;
    } catch (error: any) {
      this.error.set(error?.error?.errors?.[0] ?? 'Unable to load candidates.');
      return [];
    } finally {
      this.loading.set(false);
    }
  }

  async getById(applicationId: string): Promise<Candidate | null> {
    try {
      const response = await firstValueFrom(
        this.http.get<ApiResponse<CandidateDto>>(`${environment.apiUrl}/candidates/${applicationId}`)
      );
      return this.normalize(response.data);
    } catch {
      return null;
    }
  }

  async getScore(applicationId: string): Promise<CandidateScore | null> {
    try {
      const response = await firstValueFrom(
        this.http.get<ApiResponse<CandidateScore>>(`${environment.apiUrl}/candidates/${applicationId}/score`)
      );
      return response.data ?? null;
    } catch {
      return null;
    }
  }

  async updateStage(applicationId: string, stage: HiringStage): Promise<void> {
    const stageMap: Record<HiringStage, number> = {
      applied: 1,
      shortlisted: 2,
      assessment: 3,
      interview: 4,
      hr_round: 5,
      selected: 6,
      rejected: 7,
    };
    await firstValueFrom(
      this.http.patch(`${environment.apiUrl}/candidates/stage`, {
        applicationId,
        stage: stageMap[stage],
      })
    );
    this.candidates.update(items =>
      items.map(candidate => candidate.id === applicationId ? { ...candidate, stage } : candidate)
    );
  }

  private normalize(candidate: CandidateDto): Candidate {
    return { ...candidate, id: candidate.applicationId || candidate.id };
  }
}
