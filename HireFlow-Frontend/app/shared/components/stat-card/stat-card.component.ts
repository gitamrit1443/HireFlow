import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard } from '../../../core/models/dashboard.model';


@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl border border-slate-200 p-5
                hover:shadow-card-hover transition-shadow duration-200 cursor-default">

      <div class="flex items-start justify-between mb-3">

        <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
             [ngClass]="stat().accentClass">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
                  [attr.d]="stat().iconPath" />
          </svg>
        </div>

        <span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
              [ngClass]="{
                'bg-emerald-50 text-emerald-600': stat().trend === 'up',
                'bg-rose-50 text-rose-600': stat().trend === 'down',
                'bg-slate-100 text-slate-500': stat().trend === 'neutral'
              }">
          @if (stat().trend === 'up') {
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          }
          @if (stat().trend === 'down') {
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          }
          {{ stat().change > 0 ? '+' : '' }}{{ stat().change }}
        </span>

      </div>

      <div>
        <p class="text-2xl font-bold text-slate-900 leading-none mb-1">
          {{ stat().value }}
        </p>
        <p class="text-sm text-slate-500 font-medium">
          {{ stat().label }}
        </p>
      </div>

    </div>
  `
})
export class StatCardComponent {
  readonly stat = input.required<StatCard>();
}
