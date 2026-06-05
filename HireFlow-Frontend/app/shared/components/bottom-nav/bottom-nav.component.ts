import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="lg:hidden fixed bottom-0 inset-x-0 z-30
                bg-white border-t border-slate-200 flex items-stretch
                safe-area-inset-bottom shadow-[0_-1px_8px_rgba(0,0,0,0.06)]">

      @for (item of navItems; track item.route) {
        <a
          [routerLink]="item.route"
          routerLinkActive
          #rla="routerLinkActive"
          class="flex-1 flex flex-col items-center justify-center gap-0.5
                 py-2.5 px-1 min-w-0 transition-colors duration-150 relative"
          [ngClass]="rla.isActive
            ? 'text-indigo-600'
            : 'text-slate-400 hover:text-slate-600'"
        >
          @if (rla.isActive) {
            <div class="absolute top-0 inset-x-0 h-0.5 bg-indigo-600 rounded-b-full"></div>
          }

          <svg class="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24"
               stroke="currentColor"
               [attr.stroke-width]="rla.isActive ? '2' : '1.6'">
            <path stroke-linecap="round" stroke-linejoin="round"
                  [attr.d]="item.iconPath"/>
          </svg>

          <span class="text-[10px] font-semibold truncate leading-tight">
            {{ item.label }}
          </span>

          @if (item.badge) {
            <span class="absolute top-1.5 right-[calc(50%-10px)] w-4 h-4
                         bg-indigo-600 text-white text-[9px] font-bold
                         rounded-full flex items-center justify-center leading-none">
              {{ item.badge }}
            </span>
          }
        </a>
      }

    </nav>

    <div class="lg:hidden h-16 flex-shrink-0"></div>
  `
})
export class BottomNavComponent {

  readonly navItems = [
    {
      label: 'Dashboard',
      route: '/recruiter/dashboard',
      badge: null,
      iconPath: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
    },
    {
      label: 'Jobs',
      route: '/recruiter/jobs',
      badge: null,
      iconPath: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    },
    {
      label: 'Candidates',
      route: '/recruiter/candidates',
      badge: null,
      iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    },
    {
      label: 'Pipeline',
      route: '/recruiter/pipeline',
      badge: 3,
      iconPath: 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z',
    },
    {
      label: 'Interviews',
      route: '/recruiter/interviews',
      badge: 6,
      iconPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    },
    {
      label: 'HireMeet',
      route: '/recruiter/hiremeet',
      badge: null,
      iconPath: 'M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
    },
  ];
}
