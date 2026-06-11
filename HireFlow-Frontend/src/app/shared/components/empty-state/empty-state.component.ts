import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
           [class]="iconBgClass()">
        <svg class="w-7 h-7" [class]="iconColorClass()"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="iconPath()" />
        </svg>
      </div>
      <h3 class="text-sm font-semibold text-slate-800 mb-1">{{ heading() }}</h3>
      <p class="text-sm text-slate-500 max-w-xs">{{ body() }}</p>
      <div class="mt-5"><ng-content /></div>
    </div>
  `
})
export class EmptyStateComponent {
  readonly heading        = input<string>('Nothing here yet');
  readonly body           = input<string>('Get started by creating your first entry.');
  readonly iconPath       = input<string>('M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z');
  readonly iconBgClass    = input<string>('bg-slate-100');
  readonly iconColorClass = input<string>('text-slate-400');
}
