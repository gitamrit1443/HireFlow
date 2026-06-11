import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }
    .shimmer {
      background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);
      background-size: 800px 100%;
      animation: shimmer 1.4s infinite;
      border-radius: 6px;
    }
  `],
  template: `
    @for (i of items(); track i) {
      @if (variant() === 'card') {
        <div class="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
          <div class="flex items-start justify-between">
            <div class="shimmer w-10 h-10 rounded-xl"></div>
            <div class="shimmer w-14 h-5 rounded-full"></div>
          </div>
          <div class="shimmer w-16 h-7 rounded"></div>
          <div class="shimmer w-28 h-4 rounded"></div>
        </div>
      }
      @if (variant() === 'row') {
        <tr class="border-b border-slate-100">
          <td class="px-5 py-3.5">
            <div class="flex items-center gap-3">
              <div class="shimmer w-7 h-7 rounded-full"></div>
              <div class="space-y-1.5">
                <div class="shimmer w-28 h-3.5 rounded"></div>
                <div class="shimmer w-20 h-3 rounded"></div>
              </div>
            </div>
          </td>
          <td class="px-4 py-3.5"><div class="shimmer w-36 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-20 h-5 rounded-full"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-16 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-12 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"><div class="shimmer w-14 h-3.5 rounded"></div></td>
          <td class="px-4 py-3.5"></td>
        </tr>
      }
      @if (variant() === 'text') {
        <div class="shimmer rounded" [style.width]="width()" [style.height]="height()"></div>
      }
    }
  `
})
export class SkeletonComponent {
  readonly variant = input<'card' | 'row' | 'text'>('card');
  readonly count   = input<number>(4);
  readonly width   = input<string>('100%');
  readonly height  = input<string>('16px');

  readonly items = () => Array.from({ length: this.count() }, (_, i) => i);
}
