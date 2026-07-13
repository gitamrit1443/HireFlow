import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { Candidate, HiringStage } from '../../../core/models/candidate.model';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';


@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AvatarComponent, StageBadgeComponent],
  template: `
    <div class="p-6 max-w-screen-2xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 class="text-lg font-bold text-slate-900">Candidates</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ filteredAndSorted().length }} candidates
            @if (hasActiveFilters()) { <span class="text-indigo-600 font-medium">· filtered</span> }
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button (click)="clearFilters()"
            class="text-xs text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg
                   border border-slate-200 hover:bg-slate-50 transition-colors"
            [class.opacity-0]="!hasActiveFilters()"
            [class.pointer-events-none]="!hasActiveFilters()">
            Clear filters
          </button>
        </div>
      </div>


      <div class="bg-white rounded-xl border border-slate-200 p-4 mb-5 flex flex-wrap gap-3">

        <div class="relative flex-1 min-w-48">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
          <input type="text" placeholder="Search by name, role, or skills…"
            [(ngModel)]="searchQuery"
            class="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg
                   text-slate-900 placeholder:text-slate-400
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors" />
        </div>

        <select [(ngModel)]="stageFilter"
          class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">All Stages</option>
          @for (stage of stageOptions; track stage.value) {
            <option [value]="stage.value">{{ stage.label }}</option>
          }
        </select>

        <select [(ngModel)]="deptFilter"
          class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">All Departments</option>
          @for (dept of departments(); track dept) {
            <option [value]="dept">{{ dept }}</option>
          }
        </select>

        <select [(ngModel)]="sortBy"
          class="text-sm bg-white border border-slate-200 rounded-lg px-3 py-2
                 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="recent">Sort: Most Recent</option>
          <option value="score_desc">Sort: Highest Score</option>
          <option value="score_asc">Sort: Lowest Score</option>
          <option value="name">Sort: Name A–Z</option>
        </select>

      </div>


      @if (filteredAndSorted().length > 0) {
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">

          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-100 bg-slate-50/70">
                <th class="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-64">
                  Candidate
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Applied For
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Stage
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Score
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Experience
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tags
                </th>
                <th class="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Applied
                </th>
                <th class="px-4 py-3 w-8"></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-100">
              @for (c of filteredAndSorted(); track c.id) {
                <tr class="hover:bg-slate-50/60 transition-colors duration-100 group">

                  <td class="px-5 py-3.5">
                    <div class="flex items-center gap-3">
                      <app-avatar [name]="c.name" [color]="c.avatarColor" size="sm" />
                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-slate-900 truncate leading-snug">
                          {{ c.name }}
                        </p>
                        <p class="text-xs text-slate-500 truncate">{{ c.currentRole }}</p>
                      </div>
                    </div>
                  </td>

                  <td class="px-4 py-3.5">
                    <p class="text-sm text-slate-700 truncate max-w-44">{{ c.jobTitle }}</p>
                    <p class="text-xs text-slate-400">{{ c.department }}</p>
                  </td>

                  <td class="px-4 py-3.5">
                    <app-stage-badge [stage]="c.stage" />
                  </td>

                  <td class="px-4 py-3.5">
                    @if (c.score > 0) {
                      <div class="flex items-center gap-2">
                        <div class="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div class="h-full rounded-full transition-all duration-300"
                               [ngClass]="scoreBarColor(c.score)"
                               [style.width.%]="c.score">
                          </div>
                        </div>
                        <span class="text-sm font-semibold"
                              [ngClass]="scoreTextColor(c.score)">
                          {{ c.score }}
                        </span>
                      </div>
                    } @else {
                      <span class="text-xs text-slate-400 italic">Not scored</span>
                    }
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-600">{{ c.experience }} yr{{ c.experience !== 1 ? 's' : '' }}</span>
                  </td>

                  <td class="px-4 py-3.5">
                    <div class="flex flex-wrap gap-1">
                      @for (tag of c.tags.slice(0, 2); track tag) {
                        <span class="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">
                          {{ tag }}
                        </span>
                      }
                      @if (c.tags.length > 2) {
                        <span class="text-xs px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">
                          +{{ c.tags.length - 2 }}
                        </span>
                      }
                    </div>
                  </td>

                  <td class="px-4 py-3.5">
                    <span class="text-sm text-slate-500">{{ formatDate(c.appliedDate) }}</span>
                  </td>

                  <td class="px-4 py-3.5">
                    <a [routerLink]="['/recruiter/candidates', c.id]"
                       class="opacity-0 group-hover:opacity-100 transition-opacity duration-150
                              text-xs text-indigo-600 hover:text-indigo-700 font-semibold whitespace-nowrap">
                      View →
                    </a>
                  </td>

                </tr>
              }
            </tbody>
          </table>

          <div class="px-5 py-3 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between">
            <span class="text-xs text-slate-400">
              Showing {{ filteredAndSorted().length }} of {{ allCandidates().length }} candidates
            </span>
          </div>

        </div>

      } @else {
        <div class="bg-white rounded-xl border border-slate-200">
          <div class="flex flex-col items-center justify-center py-20 text-center">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
              </svg>
            </div>
            <h3 class="text-sm font-semibold text-slate-800 mb-1">No candidates match your filters</h3>
            <p class="text-sm text-slate-500 mb-4">Try adjusting your search or clearing filters.</p>
            <button (click)="clearFilters()"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-700 px-4 py-2
                     border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
              Clear all filters
            </button>
          </div>
        </div>
      }

    </div>
  `
})
export class CandidatesComponent implements OnInit {
  private candidatesApi = inject(CandidatesApiService);
  readonly allCandidates = this.candidatesApi.candidates;

  searchQuery  = '';
  stageFilter  = '';
  deptFilter   = '';
  sortBy       = 'recent';

  ngOnInit(): void {
    void this.candidatesApi.loadAll();
  }

  hasActiveFilters(): boolean {
    return !!this.searchQuery || !!this.stageFilter || !!this.deptFilter;
  }

  filteredAndSorted(): Candidate[] {
    const q = this.searchQuery.toLowerCase();

    const result = this.allCandidates().filter(c => {
      const matchesSearch = !q
        || c.name.toLowerCase().includes(q)
        || c.currentRole.toLowerCase().includes(q)
        || c.jobTitle.toLowerCase().includes(q)
        || c.skills.some(s => s.toLowerCase().includes(q));
      const matchesStage = !this.stageFilter || c.stage === this.stageFilter;
      const matchesDept  = !this.deptFilter  || c.department === this.deptFilter;
      return matchesSearch && matchesStage && matchesDept;
    });

    switch (this.sortBy) {
      case 'score_desc': return [...result].sort((a, b) => b.score - a.score);
      case 'score_asc':  return [...result].sort((a, b) => a.score - b.score);
      case 'name':       return [...result].sort((a, b) => a.name.localeCompare(b.name));
      default:           return [...result].sort((a, b) =>
        new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
      );
    }
  }

  departments(): string[] {
    return [...new Set(this.allCandidates().map(c => c.department))];
  }

  readonly stageOptions: { value: HiringStage; label: string }[] = [
    { value: 'applied',     label: 'Applied'     },
    { value: 'shortlisted', label: 'Shortlisted' },
    { value: 'assessment',  label: 'Assessment'  },
    { value: 'interview',   label: 'Interview'   },
    { value: 'hr_round',    label: 'HR Round'    },
    { value: 'selected',    label: 'Selected'    },
    { value: 'rejected',    label: 'Rejected'    },
  ];

  clearFilters(): void {
    this.searchQuery = '';
    this.stageFilter = '';
    this.deptFilter  = '';
    this.sortBy      = 'recent';
  }

  scoreBarColor(score: number): string {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-amber-400';
    return 'bg-rose-400';
  }

  scoreTextColor(score: number): string {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-500';
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}
