import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterLink }     from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { JobsApiService } from '../../../core/services/jobs-api.service';
import { Candidate, HiringStage } from '../../../core/models/candidate.model';
import { StageBadgeComponent } from '../../../shared/components/stage-badge/stage-badge.component';
import { AvatarComponent }     from '../../../shared/components/avatar/avatar.component';
import { ScoreRingComponent }  from '../../../shared/components/score-ring/score-ring.component';


@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, StageBadgeComponent, AvatarComponent, ScoreRingComponent],
  template: `
    <div class="flex flex-col h-full overflow-hidden">

      <div class="px-6 pt-5 pb-4 border-b border-slate-200 bg-white flex-shrink-0">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h1 class="text-xl font-bold text-slate-900">Pipeline Board</h1>
            <p class="text-sm text-slate-500 mt-0.5">
              {{ activeCount() }} active · {{ rejectedCount() }} rejected
              <span class="text-slate-300 mx-1.5">·</span>
              <span class="text-indigo-600 font-medium">Drag cards to move stages</span>
            </p>
          </div>
          <div class="flex items-center gap-2">
            <select [(ngModel)]="jobFilter"
              class="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                     text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
              <option value="">All Jobs</option>
              @for (job of jobsApi.jobs(); track job.id) {
                <option [value]="job.id">{{ job.title }}</option>
              }
            </select>
            <button (click)="refreshBoard()"
              class="w-9 h-9 flex items-center justify-center rounded-lg border
                     border-slate-200 bg-white text-slate-400 hover:bg-slate-50
                     hover:text-slate-600 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-6 gap-2">
          @for (col of columns; track col.stage) {
            <div class="text-center py-1.5 px-2 rounded-lg border border-slate-100 bg-slate-50">
              <div class="text-base font-bold" [ngClass]="col.countColor">
                {{ countByStage(col.stage) }}
              </div>
              <div class="text-xs text-slate-500 font-medium mt-0.5 leading-tight">{{ col.label }}</div>
            </div>
          }
        </div>
      </div>

      <div class="flex-1 overflow-auto">
        <div class="flex gap-3 p-4 h-full min-w-max">

          @for (col of columns; track col.stage) {
            <div class="flex flex-col w-60 rounded-xl border bg-slate-50 border-slate-200
                        transition-all duration-150 flex-shrink-0"
                 [style.border-color]="dragOverStage() === col.stage ? '#6366F1' : null"
                 [style.background-color]="dragOverStage() === col.stage ? '#EEF2FF' : null"
                 (dragover)="onDragOver($event, col.stage)"
                 (dragleave)="onDragLeave()"
                 (drop)="onDrop($event, col.stage)">

              <div class="flex items-center justify-between px-3 py-2.5
                          border-b border-slate-200 flex-shrink-0">
                <div class="flex items-center gap-2">
                  <div class="w-2.5 h-2.5 rounded-full flex-shrink-0"
                       [style.backgroundColor]="col.dotColor"></div>
                  <span class="text-xs font-bold text-slate-700">{{ col.label }}</span>
                </div>
                <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                      [ngClass]="col.countBadge">
                  {{ countByStage(col.stage) }}
                </span>
              </div>

              <div class="flex-1 p-2 space-y-2 overflow-y-auto min-h-48 scrollbar-thin">

                @if (candidatesForStage(col.stage).length === 0) {
                  <div class="flex flex-col items-center justify-center py-10 text-center">
                    <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center
                                justify-center mb-2 mx-auto">
                      <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z"/>
                      </svg>
                    </div>
                    <p class="text-xs text-slate-400 font-medium">No candidates</p>
                    <p class="text-xs text-slate-400 mt-0.5">Drop a card here</p>
                  </div>
                }

                @for (c of candidatesForStage(col.stage); track c.id) {
                  <div draggable="true"
                       (dragstart)="onDragStart($event, c.id)"
                       (dragend)="onDragEnd()"
                       (click)="selectCandidate(c)"
                       class="bg-white rounded-lg border border-slate-200 p-3
                              hover:shadow-card-hover transition-all duration-150
                              cursor-grab active:cursor-grabbing group select-none"
                       [style.opacity]="draggingId() === c.id ? '0.4' : '1'"
                       [style.transform]="draggingId() === c.id ? 'rotate(1.5deg)' : null">

                    <div class="flex items-start gap-2 mb-2">
                      <app-avatar [name]="c.name" [color]="c.avatarColor" size="sm"/>
                      <div class="flex-1 min-w-0">
                        <p class="text-xs font-bold text-slate-900 truncate">{{ c.name }}</p>
                        <p class="text-xs text-slate-500 truncate mt-0.5">{{ c.currentRole }}</p>
                      </div>
                      @if (c.score > 0) {
                        <span class="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0 leading-none"
                              [ngClass]="getScoreClass(c.score)">{{ c.score }}</span>
                      }
                    </div>

                    <p class="text-xs text-indigo-600 font-medium truncate mb-1.5">{{ c.jobTitle }}</p>

                    @if (c.tags.length > 0) {
                      <div class="flex flex-wrap gap-1 mb-2">
                        @for (tag of c.tags.slice(0, 2); track tag) {
                          <span class="text-xs bg-indigo-50 text-indigo-600 px-1.5 py-0.5
                                       rounded font-semibold leading-none">{{ tag }}</span>
                        }
                      </div>
                    }

                    <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span class="text-xs text-slate-400">{{ formatDate(c.appliedDate) }}</span>
                      <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a [routerLink]="['/recruiter/candidates', c.id]"
                           (click)="$event.stopPropagation()"
                           class="w-5 h-5 flex items-center justify-center rounded
                                  text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                  </div>
                }

              </div>

              <div class="px-3 py-2 border-t border-slate-200 flex-shrink-0 flex
                          items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">
                  {{ countByStage(col.stage) }}
                  {{ countByStage(col.stage) === 1 ? 'candidate' : 'candidates' }}
                </span>
                <a routerLink="/recruiter/candidates"
                   class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  View →
                </a>
              </div>
            </div>
          }

          <div class="flex flex-col w-48 rounded-xl border border-rose-100 bg-rose-50 flex-shrink-0">
            <div class="flex items-center justify-between px-3 py-2.5 border-b border-rose-100 flex-shrink-0">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <span class="text-xs font-bold text-rose-700">Rejected</span>
              </div>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                {{ rejectedCount() }}
              </span>
            </div>
            <div class="flex-1 p-2 space-y-1.5 overflow-y-auto scrollbar-thin">
              @for (c of candidatesForStage('rejected'); track c.id) {
                <div class="flex items-center gap-2 p-2 bg-white rounded-lg border
                            border-rose-100 opacity-60 hover:opacity-100 transition-opacity
                            cursor-pointer group"
                     [routerLink]="['/recruiter/candidates', c.id]">
                  <app-avatar [name]="c.name" [color]="c.avatarColor" size="sm"/>
                  <div class="min-w-0 flex-1">
                    <p class="text-xs font-semibold text-slate-700 truncate">{{ c.name }}</p>
                    <p class="text-xs text-slate-400 truncate">{{ formatDate(c.appliedDate) }}</p>
                  </div>
                </div>
              }
            </div>
            <div class="px-3 py-2 border-t border-rose-100 flex-shrink-0">
              <span class="text-xs text-rose-400 font-medium">{{ rejectedCount() }} rejected</span>
            </div>
          </div>

        </div>
      </div>

      @if (selectedCandidate()) {
        <div class="fixed inset-y-0 right-0 w-76 bg-white border-l border-slate-200
                    shadow-2xl z-40 flex flex-col"
             style="width:300px">

          <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0">
            <h3 class="text-sm font-bold text-slate-900">Quick View</h3>
            <button (click)="selectedCandidate.set(null)"
              class="w-7 h-7 flex items-center justify-center rounded-lg
                     hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin">
            <div class="flex items-start gap-3">
              <app-avatar [name]="selectedCandidate()!.name"
                          [color]="selectedCandidate()!.avatarColor" size="lg"/>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-900 text-sm">{{ selectedCandidate()!.name }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ selectedCandidate()!.currentRole }}</p>
                <div class="mt-1.5"><app-stage-badge [stage]="selectedCandidate()!.stage"/></div>
              </div>
            </div>

            <div class="text-center">
              <app-score-ring [score]="selectedCandidate()!.score" [size]="76" [showLabel]="true"/>
              <p class="text-xs text-slate-400 mt-1.5 font-medium">Composite Score</p>
            </div>

            <div class="space-y-2">
              @for (info of quickInfo(); track info.label) {
                <div class="flex items-center gap-2 text-sm">
                  <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="info.iconPath"/>
                  </svg>
                  <span class="text-slate-600 truncate text-xs">{{ info.value }}</span>
                </div>
              }
            </div>

            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Skills</p>
              <div class="flex flex-wrap gap-1.5">
                @for (skill of selectedCandidate()!.skills.slice(0, 6); track skill) {
                  <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>

            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Move to Stage</p>
              <div class="grid grid-cols-2 gap-1.5">
                @for (col of columns; track col.stage) {
                  @if (col.stage !== selectedCandidate()!.stage) {
                    <button (click)="moveFromPanel(col.stage)"
                      class="text-xs font-semibold py-1.5 px-2 rounded-lg border
                             transition-colors text-left leading-tight"
                      [ngClass]="col.moveBtnClass">
                      → {{ col.label }}
                    </button>
                  }
                }
                <button (click)="moveFromPanel('rejected')"
                  class="text-xs font-semibold py-1.5 px-2 rounded-lg border
                         border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100
                         transition-colors text-left">
                  ✕ Reject
                </button>
              </div>
            </div>

            @if (selectedCandidate()!.notes) {
              <div>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Notes</p>
                <p class="text-xs text-slate-600 italic bg-amber-50 border border-amber-100
                           rounded-lg p-3 leading-relaxed">
                  "{{ selectedCandidate()!.notes }}"
                </p>
              </div>
            }
          </div>

          <div class="px-5 py-4 border-t border-slate-100 flex gap-2 flex-shrink-0">
            <a [routerLink]="['/recruiter/candidates', selectedCandidate()!.id]"
               class="flex-1 btn btn-primary btn-sm normal-case font-medium text-center">
              Full Profile
            </a>
            <a routerLink="/recruiter/interviews"
               class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                      hover:bg-slate-50 normal-case font-medium">
              Schedule
            </a>
          </div>

        </div>
      }

      @if (toastMessage()) {
        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white
                    text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xl z-50
                    flex items-center gap-2.5">
          <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ toastMessage() }}
        </div>
      }

    </div>
  `
})
export class PipelineComponent implements OnInit {

  readonly candidatesApi = inject(CandidatesApiService);
  readonly jobsApi = inject(JobsApiService);
  private _candidates = signal<Candidate[]>([]);

  jobFilter         = '';
  draggingId        = signal<string | null>(null);
  dragOverStage     = signal<HiringStage | null>(null);
  selectedCandidate = signal<Candidate | null>(null);
  toastMessage      = signal<string | null>(null);

  readonly columns = [
    { stage:'applied'     as HiringStage, label:'Applied',     dotColor:'#3B82F6', countColor:'text-blue-600',    countBadge:'bg-blue-100 text-blue-700',    moveBtnClass:'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100' },
    { stage:'shortlisted' as HiringStage, label:'Shortlisted', dotColor:'#6366F1', countColor:'text-indigo-600',  countBadge:'bg-indigo-100 text-indigo-700',moveBtnClass:'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100' },
    { stage:'assessment'  as HiringStage, label:'Assessment',  dotColor:'#F59E0B', countColor:'text-amber-600',   countBadge:'bg-amber-100 text-amber-700',  moveBtnClass:'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100' },
    { stage:'interview'   as HiringStage, label:'Interview',   dotColor:'#8B5CF6', countColor:'text-violet-600',  countBadge:'bg-violet-100 text-violet-700',moveBtnClass:'border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100' },
    { stage:'hr_round'    as HiringStage, label:'HR Round',    dotColor:'#F97316', countColor:'text-orange-600',  countBadge:'bg-orange-100 text-orange-700',moveBtnClass:'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100' },
    { stage:'selected'    as HiringStage, label:'Selected',    dotColor:'#10B981', countColor:'text-emerald-600', countBadge:'bg-emerald-100 text-emerald-700',moveBtnClass:'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100' },
  ];

  async ngOnInit(): Promise<void> {
    const [candidates] = await Promise.all([
      this.candidatesApi.loadAll(),
      this.jobsApi.loadAll(),
    ]);
    this._candidates.set(candidates);
  }


  readonly filteredCandidates = computed(() =>
    this._candidates().filter(c => !this.jobFilter || c.jobId === this.jobFilter)
  );

  candidatesForStage(stage: HiringStage | 'rejected'): Candidate[] {
    return this.filteredCandidates().filter(c => c.stage === stage);
  }

  countByStage(stage: HiringStage): number {
    return this.filteredCandidates().filter(c => c.stage === stage).length;
  }

  readonly activeCount   = computed(() => this.filteredCandidates().filter(c => c.stage !== 'rejected').length);
  readonly rejectedCount = computed(() => this.filteredCandidates().filter(c => c.stage === 'rejected').length);

  readonly quickInfo = computed(() => {
    const c = this.selectedCandidate();
    if (!c) return [];
    return [
      { label:'Job',        value: c.jobTitle,           iconPath:'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22A1.97 1.97 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0' },
      { label:'Location',   value: c.location,           iconPath:'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
      { label:'Experience', value: `${c.experience} yrs`,iconPath:'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label:'Assigned',   value: c.assignedTo,         iconPath:'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
    ];
  });


  onDragStart(e: DragEvent, id: string): void {
    e.dataTransfer?.setData('candidateId', id);
    this.draggingId.set(id);
  }

  onDragOver(e: DragEvent, stage: HiringStage): void {
    e.preventDefault();
    this.dragOverStage.set(stage);
  }

  onDragLeave(): void { this.dragOverStage.set(null); }

  onDragEnd(): void { this.draggingId.set(null); this.dragOverStage.set(null); }

  onDrop(e: DragEvent, targetStage: HiringStage): void {
    e.preventDefault();
    const id = e.dataTransfer?.getData('candidateId');
    if (id) this.moveCandidate(id, targetStage);
    this.draggingId.set(null);
    this.dragOverStage.set(null);
  }


  async moveCandidate(id: string, newStage: HiringStage | 'rejected'): Promise<void> {
    const c = this._candidates().find(x => x.id === id);
    if (!c || c.stage === newStage) return;
    await this.candidatesApi.updateStage(id, newStage);
    this._candidates.update(list => list.map(x => x.id === id ? { ...x, stage: newStage } : x));
    if (this.selectedCandidate()?.id === id) {
      this.selectedCandidate.set(this._candidates().find(x => x.id === id) ?? null);
    }
    const stageName = this.columns.find(col => col.stage === newStage)?.label ?? newStage;
    this.showToast(`${c.name} moved to ${stageName}`);
  }

  moveFromPanel(stage: HiringStage | 'rejected'): void {
    const c = this.selectedCandidate();
    if (c) void this.moveCandidate(c.id, stage);
  }

  selectCandidate(c: Candidate): void {
    this.selectedCandidate.set(this.selectedCandidate()?.id === c.id ? null : c);
  }

  async refreshBoard(): Promise<void> {
    this._candidates.set(await this.candidatesApi.loadAll());
    this.showToast('Board refreshed');
  }

  showToast(msg: string): void {
    this.toastMessage.set(msg);
    setTimeout(() => this.toastMessage.set(null), 2500);
  }

  getScoreClass(s: number): string {
    if (s >= 80) return 'bg-emerald-100 text-emerald-700';
    if (s >= 60) return 'bg-amber-100 text-amber-700';
    return 'bg-rose-100 text-rose-600';
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}
