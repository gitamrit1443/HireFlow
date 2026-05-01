import { Component, inject, signal, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Candidate, HiringStage } from '../../../core/models/candidate.model';
import { CandidateScore } from '../../../core/models/candidate.model';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import { TagChipComponent } from '../../../shared/components/tag-chip/tag-chip.component';
import { ScoreRingComponent } from '../../../shared/components/score-ring/score-ring.component';


@Component({
  selector: 'app-candidate-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, AvatarComponent, StageBadgeComponent, TagChipComponent, ScoreRingComponent],
  template: `
    <div class="p-6 max-w-5xl mx-auto">

      @if (candidate()) {

        <a routerLink="/recruiter/candidates"
           class="inline-flex items-center gap-1.5 text-sm text-slate-500
                  hover:text-slate-700 mb-5 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          Back to Candidates
        </a>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <div class="flex flex-col sm:flex-row sm:items-start gap-5">

            <app-avatar
              [name]="candidate()!.name"
              [color]="candidate()!.avatarColor"
              size="lg"
            />

            <div class="flex-1 min-w-0">
              <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 class="text-xl font-bold text-slate-900 leading-tight">
                  {{ candidate()!.name }}
                </h1>
                <app-stage-badge [stage]="candidate()!.stage" />
              </div>

              <p class="text-sm text-slate-600 mb-1">{{ candidate()!.currentRole }}</p>

              <div class="flex flex-wrap gap-4 text-xs text-slate-500 mb-3">
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                  {{ candidate()!.email }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  {{ candidate()!.phone }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                  {{ candidate()!.location }}
                </span>
                <span>{{ candidate()!.experience }} years exp.</span>
              </div>

              <div class="flex flex-wrap gap-1.5">
                @for (tag of candidate()!.tags; track tag) {
                  <app-tag-chip [label]="tag" />
                }
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 flex-shrink-0">
              @if (candidate()!.score > 0) {
                <div class="text-center">
                  <app-score-ring [score]="candidate()!.score" [size]="80" />
                  <p class="text-xs text-slate-400 mt-1">Composite Score</p>
                </div>
              }

              <div class="flex flex-col gap-2 w-full min-w-36">
                @if (canAdvance()) {
                  <button (click)="advanceStage()"
                    class="w-full px-4 py-2 text-xs font-semibold text-white bg-indigo-600
                           rounded-lg hover:bg-indigo-700 transition-colors text-center">
                    Move to {{ nextStageLabel() }} →
                  </button>
                }
                <a routerLink="/recruiter/interviews"
                   class="w-full px-4 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50
                          rounded-lg hover:bg-indigo-100 transition-colors text-center">
                  Schedule Interview
                </a>
                @if (candidate()!.stage !== 'rejected' && candidate()!.stage !== 'selected') {
                  <button
                    class="w-full px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50
                           rounded-lg hover:bg-rose-100 transition-colors text-center">
                    Reject Candidate
                  </button>
                }
              </div>
            </div>

          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-5 mb-4">
          <h2 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Pipeline Progress
          </h2>
          <div class="flex items-center">
            @for (step of pipelineSteps; track step.stage; let last = $last) {
              <div class="flex flex-col items-center flex-shrink-0"
                   [ngClass]="getStepState(step.stage) === 'current' ? 'w-32' : 'w-24'">
                <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-1.5 transition-all"
                     [ngClass]="{
                       'border-indigo-600 bg-indigo-600': getStepState(step.stage) === 'current',
                       'border-emerald-500 bg-emerald-500': getStepState(step.stage) === 'done',
                       'border-slate-200 bg-white': getStepState(step.stage) === 'upcoming'
                     }">
                  @if (getStepState(step.stage) === 'done') {
                    <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  } @else if (getStepState(step.stage) === 'current') {
                    <span class="w-2.5 h-2.5 bg-white rounded-full"></span>
                  } @else {
                    <span class="w-2 h-2 bg-slate-300 rounded-full"></span>
                  }
                </div>
                <span class="text-xs font-medium text-center leading-tight"
                      [ngClass]="{
                        'text-indigo-600': getStepState(step.stage) === 'current',
                        'text-emerald-600': getStepState(step.stage) === 'done',
                        'text-slate-400': getStepState(step.stage) === 'upcoming'
                      }">
                  {{ step.label }}
                </span>
              </div>

              @if (!last) {
                <div class="flex-1 h-0.5 mb-5 mx-1 transition-colors"
                     [ngClass]="isStageComplete(step.stage) ? 'bg-emerald-400' : 'bg-slate-200'">
                </div>
              }
            }
          </div>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

          <div class="lg:col-span-2 space-y-4">

            <div class="bg-white rounded-xl border border-slate-200 p-5">
              <h2 class="text-sm font-semibold text-slate-900 mb-3">Skills</h2>
              <div class="flex flex-wrap gap-2">
                @for (skill of candidate()!.skills; track skill) {
                  <span class="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm
                               font-medium rounded-full">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>

            @if (score()) {
              <div class="bg-white rounded-xl border border-slate-200 p-5">
                <div class="flex items-center justify-between mb-4">
                  <h2 class="text-sm font-semibold text-slate-900">Evaluation</h2>
                  <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5
                               rounded-full"
                        [ngClass]="getRecommendationStyle(score()!.recommendation)">
                    {{ getRecommendationLabel(score()!.recommendation) }}
                  </span>
                </div>

                <div class="space-y-3">
                  @for (dim of scoreDimensions; track dim.key) {
                    <div class="flex items-center gap-3">
                      <span class="text-xs text-slate-500 w-32 flex-shrink-0">{{ dim.label }}</span>
                      <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full bg-indigo-500 rounded-full transition-all duration-500"
                             [style.width.%]="(getScore(dim.key) / 10) * 100">
                        </div>
                      </div>
                      <span class="text-xs font-semibold text-slate-700 w-8 text-right">
                        {{ getScore(dim.key) }}/10
                      </span>
                    </div>
                  }
                </div>

                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-xs text-slate-400">
                    Evaluated by <strong class="text-slate-600">{{ score()!.evaluatedBy }}</strong>
                    on {{ formatDate(score()!.evaluatedAt) }}
                  </span>
                </div>
              </div>
            }

          </div>

          <div class="space-y-4">

            <div class="bg-white rounded-xl border border-slate-200 p-5">
              <h2 class="text-sm font-semibold text-slate-900 mb-3">Application</h2>
              <dl class="space-y-2.5">
                <div>
                  <dt class="text-xs text-slate-400">Applied For</dt>
                  <dd class="text-sm font-medium text-slate-800">{{ candidate()!.jobTitle }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-slate-400">Department</dt>
                  <dd class="text-sm text-slate-700">{{ candidate()!.department }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-slate-400">Applied On</dt>
                  <dd class="text-sm text-slate-700">{{ formatDate(candidate()!.appliedDate) }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-slate-400">Assigned To</dt>
                  <dd class="text-sm text-slate-700">{{ candidate()!.assignedTo }}</dd>
                </div>
              </dl>
            </div>

            @if (candidate()!.notes) {
              <div class="bg-amber-50 rounded-xl border border-amber-200 p-5">
                <h2 class="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/>
                  </svg>
                  Recruiter Notes
                </h2>
                <p class="text-xs text-amber-800 leading-relaxed">
                  {{ candidate()!.notes }}
                </p>
              </div>
            }

            @if (score()?.notes) {
              <div class="bg-white rounded-xl border border-slate-200 p-5">
                <h2 class="text-sm font-semibold text-slate-900 mb-2">Interview Notes</h2>
                <p class="text-xs text-slate-600 leading-relaxed">{{ score()!.notes }}</p>
              </div>
            }

          </div>
        </div>

      } @else {
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-slate-800 mb-1">Candidate not found</h3>
          <a routerLink="/recruiter/candidates" class="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← Back to candidates
          </a>
        </div>
      }

    </div>
  `
})
export class CandidateDetailComponent implements OnInit {
  readonly id = input<string>('');

  private mockData = inject(MockDataService);

  candidate = signal<Candidate | undefined>(undefined);
  score     = signal<CandidateScore | undefined>(undefined);

  ngOnInit(): void {
    this.candidate.set(this.mockData.getCandidateById(this.id()));
    this.score.set(this.mockData.getScoreForCandidate(this.id()));
  }

  readonly pipelineSteps: { stage: HiringStage; label: string }[] = [
    { stage: 'applied',     label: 'Applied'     },
    { stage: 'shortlisted', label: 'Shortlisted' },
    { stage: 'assessment',  label: 'Assessment'  },
    { stage: 'interview',   label: 'Interview'   },
    { stage: 'hr_round',    label: 'HR Round'    },
    { stage: 'selected',    label: 'Selected'    },
  ];

  private readonly stageOrder: HiringStage[] = [
    'applied', 'shortlisted', 'assessment', 'interview', 'hr_round', 'selected'
  ];

  getStepState(step: HiringStage): 'done' | 'current' | 'upcoming' {
    const current = this.candidate()?.stage;
    if (!current || current === 'rejected') return 'upcoming';
    const currentIdx = this.stageOrder.indexOf(current);
    const stepIdx    = this.stageOrder.indexOf(step);
    if (stepIdx < currentIdx)  return 'done';
    if (stepIdx === currentIdx) return 'current';
    return 'upcoming';
  }

  isStageComplete(step: HiringStage): boolean {
    return this.getStepState(step) === 'done';
  }

  canAdvance(): boolean {
    const s = this.candidate()?.stage;
    return !!s && s !== 'selected' && s !== 'rejected';
  }

  nextStageLabel(): string {
    const current = this.candidate()?.stage;
    if (!current) return '';
    const idx = this.stageOrder.indexOf(current);
    return idx < this.stageOrder.length - 1
      ? this.pipelineSteps[idx + 1]?.label ?? ''
      : '';
  }

  advanceStage(): void {
    console.log('Advancing stage for', this.candidate()?.name);
  }

  readonly scoreDimensions = [
    { key: 'technical',      label: 'Technical Skills' },
    { key: 'communication',  label: 'Communication'    },
    { key: 'problemSolving', label: 'Problem Solving'  },
    { key: 'cultureFit',     label: 'Culture Fit'      },
  ];

  getScore(key: string): number {
    return (this.score() as any)?.[key] ?? 0;
  }

  getRecommendationLabel(rec: string): string {
    const labels: Record<string, string> = {
      strong_hire: '⭐ Strong Hire',
      hire:        '✓ Hire',
      maybe:       '~ Maybe',
      no_hire:     '✗ No Hire',
    };
    return labels[rec] ?? rec;
  }

  getRecommendationStyle(rec: string): string {
    const styles: Record<string, string> = {
      strong_hire: 'bg-emerald-100 text-emerald-700',
      hire:        'bg-blue-100 text-blue-700',
      maybe:       'bg-amber-100 text-amber-700',
      no_hire:     'bg-rose-100 text-rose-700',
    };
    return styles[rec] ?? 'bg-slate-100 text-slate-600';
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
