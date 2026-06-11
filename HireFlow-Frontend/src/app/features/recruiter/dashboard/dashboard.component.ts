import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { DashboardService } from '../../../core/services/dashboard.service';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';

import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { ActivityFeedComponent } from '../../../shared/components/activity-feed/activity-feed.component';

import { StatCard, PipelineStageCount, ActivityItem, UpcomingInterview } from '../../../core/models/dashboard.model';
import { Candidate } from '../../../core/models/candidate.model';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-recruiter-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StatCardComponent,
    StageBadgeComponent,
    AvatarComponent,
    ActivityFeedComponent,
  ],
  template: `
    <div class="p-6 space-y-6 max-w-screen-2xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-xl font-bold text-slate-900">Good morning, {{ firstName() }}</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            Here's your hiring pipeline for
            <span class="font-medium text-slate-700">{{ today }}</span>
          </p>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 hover:border-slate-300 normal-case font-medium">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Import CSV
          </button>
          <a routerLink="/recruiter/jobs/new"
             class="btn btn-sm btn-primary normal-case font-medium px-4">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Post a Job
          </a>
        </div>
      </div>


      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        @for (stat of stats(); track stat.label) {
          <app-stat-card [stat]="stat" />
        }
      </div>


      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">

          <div class="flex items-center justify-between mb-5">
            <div>
              <h2 class="text-sm font-semibold text-slate-900">Hiring Pipeline</h2>
              <p class="text-xs text-slate-500 mt-0.5">Active candidates across all stages</p>
            </div>
            <a routerLink="/recruiter/pipeline"
               class="text-xs text-indigo-600 hover:text-indigo-700 font-medium
                      flex items-center gap-1">
              View board
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div class="space-y-3">
            @for (stage of pipelineStages(); track stage.stage) {
              <div class="flex items-center gap-3">

                <span class="text-xs text-slate-500 w-24 text-right flex-shrink-0">
                  {{ stage.label }}
                </span>

                <div class="flex-1 h-6 bg-slate-50 rounded-md overflow-hidden
                            border border-slate-100 relative">
                  <div
                    class="h-full rounded-md transition-all duration-700 ease-out flex items-center pl-2"
                    [ngClass]="stage.barColorClass"
                    [style.width.%]="stage.percentage"
                  >
                    @if (stage.percentage > 20) {
                      <span class="text-xs font-semibold text-white">
                        {{ stage.count }}
                      </span>
                    }
                  </div>
                  @if (stage.percentage <= 20) {
                    <span class="absolute right-2 top-1/2 -translate-y-1/2
                                 text-xs font-semibold text-slate-600">
                      {{ stage.count }}
                    </span>
                  }
                </div>

                <span class="text-xs font-medium text-slate-400 w-10 flex-shrink-0">
                  {{ stage.percentage }}%
                </span>

              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 flex items-center gap-6">
            <div class="text-center">
              <p class="text-lg font-bold text-slate-900">{{ totalCandidates() }}</p>
              <p class="text-xs text-slate-500">Total Active</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-emerald-600">{{ selectedCount() }}</p>
              <p class="text-xs text-slate-500">Selected</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-rose-500">{{ rejectedCount() }}</p>
              <p class="text-xs text-slate-500">Rejected</p>
            </div>
            <div class="text-center">
              <p class="text-lg font-bold text-indigo-600">{{ conversionRate() }}%</p>
              <p class="text-xs text-slate-500">Conversion Rate</p>
            </div>
          </div>

        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-sm font-semibold text-slate-900">Recent Activity</h2>
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                  title="Live"></span>
          </div>
          <app-activity-feed [activities]="recentActivity()" />
        </div>

      </div>


      <div>
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm font-semibold text-slate-900">
            Upcoming Interviews
            <span class="ml-2 text-xs font-normal text-slate-500">— Today</span>
          </h2>
          <a routerLink="/recruiter/interviews"
             class="text-xs text-indigo-600 hover:text-indigo-700 font-medium">
            View schedule →
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          @for (interview of upcomingInterviews(); track interview.id) {
            <div class="bg-white rounded-xl border border-slate-200 p-4
                        hover:shadow-card-hover transition-shadow duration-200">

              <div class="flex items-start gap-3 mb-3">
                <app-avatar
                  [name]="interview.candidateName"
                  [color]="interview.avatarColor"
                  size="md"
                />
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-slate-900 truncate">
                    {{ interview.candidateName }}
                  </p>
                  <p class="text-xs text-slate-500 truncate">{{ interview.jobTitle }}</p>
                </div>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                      [ngClass]="interview.mode === 'online'
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-slate-100 text-slate-600'">
                  {{ interview.mode === 'online' ? '🔗 Online' : '🏢 In-office' }}
                </span>
              </div>

              <div class="flex items-center gap-1.5 mb-3">
                <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0"
                     fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs text-slate-600 font-medium">
                  {{ interview.scheduledDate }}, {{ interview.scheduledTime }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-xs text-slate-400">Panel:</span>
                <div class="flex -space-x-1.5">
                  @for (interviewer of interview.interviewers; track interviewer) {
                    <div class="w-6 h-6 rounded-full bg-slate-200 border-2 border-white
                                flex items-center justify-center text-xs font-semibold
                                text-slate-600"
                         [title]="interviewer">
                      {{ interviewer[0] }}
                    </div>
                  }
                </div>
                <span class="text-xs text-slate-500">{{ interview.interviewers.join(', ') }}</span>
              </div>

              @if (interview.meetingLink) {
                <a [href]="interview.meetingLink"
                   target="_blank"
                   class="mt-3 flex items-center gap-1.5 text-xs text-indigo-600
                          hover:text-indigo-700 font-medium">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  Join Meeting
                </a>
              }

            </div>
          }
        </div>
      </div>


      <div class="bg-white rounded-xl border border-slate-200">

        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 class="text-sm font-semibold text-slate-900">Recent Candidates</h2>
            <p class="text-xs text-slate-500 mt-0.5">Latest activity across all open roles</p>
          </div>
          <a routerLink="/recruiter/candidates"
             class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                    hover:bg-slate-50 normal-case font-medium">
            View all
            <svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-100 bg-slate-50/50">
                <th class="text-left px-6 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider w-56">Candidate</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Applied For</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Stage</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Score</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Assigned To</th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500
                           uppercase tracking-wider">Applied</th>
                <th class="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              @for (candidate of recentCandidates(); track candidate.id) {
                <tr class="hover:bg-slate-50/50 transition-colors duration-100 group">

                  <td class="px-6 py-3.5">
                    <div class="flex items-center gap-3">
                      <app-avatar
                        [name]="candidate.name"
                        [color]="candidate.avatarColor"
                        size="sm"
                      />
                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-slate-900 truncate">
                          {{ candidate.name }}
                        </p>
                        <p class="text-xs text-slate-500 truncate">
                          {{ candidate.currentRole }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td class="px-4 py-3.5">
                    <p class="text-sm text-slate-700 truncate max-w-40">
                      {{ candidate.jobTitle }}
                    </p>
                    <p class="text-xs text-slate-400">{{ candidate.department }}</p>
                  </td>

                  <td class="px-4 py-3.5">
                    <app-stage-badge [stage]="candidate.stage" />
                  </td>

                  <td class="px-4 py-3.5">
                    @if (candidate.score > 0) {
                      <div class="flex items-center gap-2">
                        <div class="w-14 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            class="h-full rounded-full"
                            [ngClass]="getScoreColor(candidate.score)"
                            [style.width.%]="candidate.score"
                          ></div>
                        </div>
                        <span class="text-sm font-medium text-slate-700">
                          {{ candidate.score }}
                        </span>
                      </div>
                    } @else {
                      <span class="text-xs text-slate-400">Not scored</span>
                    }
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-600">{{ candidate.assignedTo }}</span>
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-500">
                      {{ formatDate(candidate.appliedDate) }}
                    </span>
                  </td>

                  <td class="px-4 py-3.5">
                    <a
                      [routerLink]="['/recruiter/candidates', candidate.id]"
                      class="opacity-0 group-hover:opacity-100 transition-opacity duration-150
                             text-xs text-indigo-600 hover:text-indigo-700 font-medium
                             whitespace-nowrap"
                    >
                      View →
                    </a>
                  </td>

                </tr>
              }
            </tbody>
          </table>
        </div>

        <div class="px-6 py-3 border-t border-slate-100 bg-slate-50/30">
          <p class="text-xs text-slate-400">
            Showing {{ recentCandidates().length }} of {{ totalCandidates() }} candidates
          </p>
        </div>

      </div>

    </div>
  `
})
export class RecruiterDashboardComponent implements OnInit {

  private dashboardService = inject(DashboardService);
  private candidatesApi    = inject(CandidatesApiService);
  readonly auth            = inject(AuthService);
  readonly firstName       = signal(this.auth.userName().split(' ')[0] || 'Recruiter');
  readonly stats              = signal<StatCard[]>([]);
  readonly pipelineStages     = signal<PipelineStageCount[]>([]);
  readonly recentActivity     = signal<ActivityItem[]>([]);
  readonly upcomingInterviews = signal<UpcomingInterview[]>([]);
  readonly recentCandidates   = signal<Candidate[]>([]);
  readonly totalCandidates = signal(0);
  readonly selectedCount   = signal(0);
  readonly rejectedCount   = signal(0);
  readonly conversionRate  = signal(0);

  async ngOnInit(): Promise<void> {
    const [dashboard, candidates] = await Promise.all([
      this.dashboardService.getRecruiterDashboard(),
      this.candidatesApi.loadAll(),
    ]);
    this.stats.set(dashboard.statCards ?? []);
    this.pipelineStages.set(dashboard.pipelineStages ?? []);
    this.recentActivity.set(dashboard.recentActivity ?? []);
    this.upcomingInterviews.set(dashboard.upcomingInterviews ?? []);
    this.recentCandidates.set(candidates.slice(0, 7));
    this.totalCandidates.set(candidates.filter(c => c.stage !== 'rejected').length);
    this.selectedCount.set(candidates.filter(c => c.stage === 'selected').length);
    this.rejectedCount.set(candidates.filter(c => c.stage === 'rejected').length);
    this.conversionRate.set(candidates.length
      ? Math.round((this.selectedCount() / candidates.length) * 100)
      : 0);
  }


  
  formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }

  
  getScoreColor(score: number): string {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-amber-400';
    return 'bg-rose-400';
  }

  
  readonly today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}
