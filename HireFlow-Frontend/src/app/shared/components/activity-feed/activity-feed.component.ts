import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityItem } from '../../../core/models/dashboard.model';
import { AvatarComponent } from '../avatar/avatar.component';


@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  template: `
    <div class="space-y-4">
      @for (item of activities(); track item.id; let last = $last) {
        <div class="flex items-start gap-3">

          <app-avatar
            [name]="item.candidateName"
            [color]="item.avatarColor"
            size="sm"
          />

          <div class="flex-1 min-w-0" [class.pb-4]="!last"
               [class.border-b]="!last"
               [class.border-slate-100]="!last">
            <p class="text-sm text-slate-800 leading-snug">
              <span class="font-medium">{{ item.candidateName }}</span>
              <span class="text-slate-500"> {{ item.message }}</span>
            </p>
            <p class="text-xs text-slate-400 mt-0.5">{{ item.timeAgo }}</p>
          </div>

          <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
               [ngClass]="getTypeStyle(item.type).bg">
            <svg class="w-3 h-3" [ngClass]="getTypeStyle(item.type).color"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    [attr.d]="getTypeStyle(item.type).icon" />
            </svg>
          </div>

        </div>
      }
    </div>
  `
})
export class ActivityFeedComponent {
  readonly activities = input.required<ActivityItem[]>();

  getTypeStyle(type: ActivityItem['type']): { bg: string; color: string; icon: string } {
    const styles = {
      application:          { bg: 'bg-blue-50',    color: 'text-blue-500',    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
      stage_change:         { bg: 'bg-indigo-50',  color: 'text-indigo-500',  icon: 'M13 7l5 5m0 0l-5 5m5-5H6' },
      interview_scheduled:  { bg: 'bg-violet-50',  color: 'text-violet-500',  icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      feedback:             { bg: 'bg-amber-50',   color: 'text-amber-500',   icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
      offer:                { bg: 'bg-emerald-50', color: 'text-emerald-500', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    };
    return styles[type];
  }
}
