import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-lg font-bold text-slate-900">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="text-sm text-slate-500 mt-0.5">{{ subtitle() }}</p>
        }
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <ng-content />
      </div>
    </div>
  `
})
export class PageHeaderComponent {
  readonly title    = input.required<string>();
  readonly subtitle = input<string>('');
}
