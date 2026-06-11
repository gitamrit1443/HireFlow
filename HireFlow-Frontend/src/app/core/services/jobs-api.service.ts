import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Job, JobStatus, JobType } from '../models/job.model';
import { environment } from '../../../environments/environment';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

interface PagedResult<T> {
  items: T[];
  totalCount: number;
}

export interface JobPayload {
  title: string;
  department: string;
  location: string;
  type: JobType;
  experience: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  skills: string[];
  description: string;
  status: JobStatus;
  closingDate?: string | null;
  hiringManager: string;
  openings: number;
}

@Injectable({ providedIn: 'root' })
export class JobsApiService {
  private readonly http = inject(HttpClient);
  readonly jobs = signal<Job[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  async loadAll(): Promise<Job[]> {
    this.loading.set(true);
    this.error.set(null);
    try {
      const params = new HttpParams().set('pageSize', 200);
      const response = await firstValueFrom(
        this.http.get<ApiResponse<PagedResult<Job>>>(`${environment.apiUrl}/jobs`, { params })
      );
      const jobs = response.data?.items ?? [];
      this.jobs.set(jobs);
      return jobs;
    } catch (error: any) {
      this.error.set(error?.error?.errors?.[0] ?? 'Unable to load jobs.');
      return [];
    } finally {
      this.loading.set(false);
    }
  }

  async getById(id: string): Promise<Job | null> {
    try {
      const response = await firstValueFrom(
        this.http.get<ApiResponse<Job>>(`${environment.apiUrl}/jobs/${id}`)
      );
      return response.data ?? null;
    } catch {
      return null;
    }
  }

  async create(payload: JobPayload): Promise<Job> {
    const response = await firstValueFrom(
      this.http.post<ApiResponse<Job>>(`${environment.apiUrl}/jobs`, this.toApiPayload(payload))
    );
    this.jobs.update(items => [response.data, ...items]);
    return response.data;
  }

  async update(id: string, payload: JobPayload): Promise<Job> {
    const response = await firstValueFrom(
      this.http.put<ApiResponse<Job>>(`${environment.apiUrl}/jobs/${id}`, this.toApiPayload(payload))
    );
    this.jobs.update(items => items.map(job => job.id === id ? response.data : job));
    return response.data;
  }

  formatSalary(value: number): string {
    if (value >= 10_000_000) return `₹${(value / 10_000_000).toFixed(1)}Cr`;
    if (value >= 100_000) return `₹${(value / 100_000).toFixed(1)}L`;
    return `₹${value.toLocaleString('en-IN')}`;
  }

  private toApiPayload(payload: JobPayload) {
    const typeMap: Record<JobType, number> = {
      'full-time': 1,
      'part-time': 2,
      contract: 3,
      remote: 4,
    };
    const statusMap: Record<JobStatus, number> = {
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
}
