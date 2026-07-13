import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { StatCard, PipelineStageCount, ActivityItem, UpcomingInterview } from '../models/dashboard.model';
import { environment } from '../../../environments/environment';

export interface RecruiterDashboardData {
  statCards: StatCard[];
  pipelineStages: PipelineStageCount[];
  recentActivity: ActivityItem[];
  upcomingInterviews: UpcomingInterview[];
}

export interface AnalyticsData {
  totalApplicationsThisMonth: number;
  totalHiresThisMonth: number;
  averageDaysToHire: number;
  offerAcceptanceRate: number;
  applicationTrend: { month: string; value: number }[];
  hireTrend: { month: string; value: number }[];
  stageConversionRates: Record<string, number>;
  topPerformingJobs: { jobTitle: string; applications: number; hires: number }[];
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly http = inject(HttpClient);

  async getRecruiterDashboard(): Promise<RecruiterDashboardData> {
    const response = await firstValueFrom(
      this.http.get<ApiResponse<RecruiterDashboardData>>(`${environment.apiUrl}/dashboard/recruiter`)
    );
    return response.data;
  }

  async getAnalytics(): Promise<AnalyticsData> {
    const response = await firstValueFrom(
      this.http.get<ApiResponse<AnalyticsData>>(`${environment.apiUrl}/dashboard/analytics`)
    );
    return response.data;
  }
}
