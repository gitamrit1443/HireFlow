import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-ring',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative inline-flex items-center justify-center">
      <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 80 80" class="-rotate-90">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="7" />
        <circle cx="40" cy="40" r="32" fill="none"
                [attr.stroke]="ringColor()" stroke-width="7" stroke-linecap="round"
                [attr.stroke-dasharray]="circumference"
                [attr.stroke-dashoffset]="dashOffset()"
                style="transition: stroke-dashoffset 0.6s ease" />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        @if (showLabel()) {
          <span class="text-lg font-bold leading-none" [ngClass]="textColor()">{{ score() }}</span>
          <span class="text-xs text-slate-400 leading-none mt-0.5">/ 100</span>
        }
      </div>
    </div>
  `
})
export class ScoreRingComponent {
  readonly score = input<number>(0);
  readonly size  = input<number>(80);
  readonly showLabel = input<boolean>(true);
  readonly circumference = 2 * Math.PI * 32;
  readonly dashOffset = computed(() => this.circumference - (this.score() / 100) * this.circumference);
  readonly ringColor  = computed(() => this.score() >= 80 ? '#10B981' : this.score() >= 60 ? '#F59E0B' : '#EF4444');
  readonly textColor  = computed(() => this.score() >= 80 ? 'text-emerald-600' : this.score() >= 60 ? 'text-amber-600' : 'text-rose-500');
}
