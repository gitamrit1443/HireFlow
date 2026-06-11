import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tag-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                 bg-slate-100 text-slate-600 whitespace-nowrap">
      {{ label() }}
    </span>
  `
})
export class TagChipComponent {
  readonly label = input.required<string>();
}
