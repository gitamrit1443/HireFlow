import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApplicationDto {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  stage: string;
  score: number;
  appliedDate: string;
  lastActivityDate: string;
  resumeUrl?: string;
}

interface ApiResponse<T> { success: boolean; data: T; }
interface PagedResult<T> { items: T[]; totalCount: number; }

@Injectable({ providedIn: 'root' })
export class ApplicationsApiService {
  private readonly http = inject(HttpClient);
  readonly applications = signal<ApplicationDto[]>([]);

  async loadMine(): Promise<ApplicationDto[]> {
    const params = new HttpParams().set('pageSize', 200);
    const response = await firstValueFrom(
      this.http.get<ApiResponse<PagedResult<ApplicationDto>>>(
        `${environment.apiUrl}/applications/mine`, { params }
      )
    );
    this.applications.set(response.data?.items ?? []);
    return this.applications();
  }

  async apply(jobId: string): Promise<ApplicationDto> {
    const response = await firstValueFrom(
      this.http.post<ApiResponse<ApplicationDto>>(`${environment.apiUrl}/applications`, { jobId })
    );
    this.applications.update(items => [response.data, ...items]);
    return response.data;
  }
}
