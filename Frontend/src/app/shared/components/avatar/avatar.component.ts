import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="rounded-full flex items-center justify-center font-semibold
             text-white select-none flex-shrink-0"
      [ngClass]="sizeClass()"
      [style.background-color]="color()"
      [attr.title]="name()"
    >
      {{ initials() }}
    </div>
  `
})
export class AvatarComponent {
  readonly name  = input.required<string>();
  readonly color = input<string>('#6366F1');  // Default: indigo
  readonly size  = input<'sm' | 'md' | 'lg'>('md');

  readonly initials = computed(() =>
    this.name()
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  );

  readonly sizeClass = computed(() => ({
    sm:  'w-7 h-7 text-xs',
    md:  'w-9 h-9 text-sm',
    lg:  'w-11 h-11 text-base',
  }[this.size()]));
}
