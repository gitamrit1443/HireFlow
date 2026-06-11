import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiringStage } from '../../../core/models/candidate.model';


@Component({
  selector: 'app-stage-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full
                 text-xs font-semibold whitespace-nowrap"
          [ngClass]="badgeClass()">
      <span class="w-1.5 h-1.5 rounded-full flex-shrink-0"
            [ngClass]="dotClass()">
      </span>
      {{ stageConfig().label }}
    </span>
  `
})
export class StageBadgeComponent {

  readonly stage = input.required<HiringStage>();

  private readonly STAGE_CONFIG: Record<HiringStage, {
    label: string;
    badgeClass: string;
    dotClass: string;
  }> = {
    applied:     { label: 'Applied',     badgeClass: 'bg-blue-100 text-blue-700',    dotClass: 'bg-blue-500' },
    shortlisted: { label: 'Shortlisted', badgeClass: 'bg-indigo-100 text-indigo-700', dotClass: 'bg-indigo-500' },
    assessment:  { label: 'Assessment',  badgeClass: 'bg-amber-100 text-amber-700',  dotClass: 'bg-amber-500' },
    interview:   { label: 'Interview',   badgeClass: 'bg-violet-100 text-violet-700', dotClass: 'bg-violet-500' },
    hr_round:    { label: 'HR Round',    badgeClass: 'bg-orange-100 text-orange-700', dotClass: 'bg-orange-500' },
    selected:    { label: 'Selected',    badgeClass: 'bg-emerald-100 text-emerald-700', dotClass: 'bg-emerald-500' },
    rejected:    { label: 'Rejected',    badgeClass: 'bg-rose-100 text-rose-700',    dotClass: 'bg-rose-500' },
  };

  readonly stageConfig = computed(() => this.STAGE_CONFIG[this.stage()]);
  readonly badgeClass  = computed(() => this.stageConfig().badgeClass);
  readonly dotClass    = computed(() => this.stageConfig().dotClass);
}
