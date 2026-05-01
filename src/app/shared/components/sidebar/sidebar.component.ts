import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../core/services/layout.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `

    @if (layout.sidebarOpen()) {
      <div
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        (click)="layout.closeSidebar()"
        aria-hidden="true">
      </div>
    }


    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 flex flex-col
             transition-transform duration-300 ease-in-out
             lg:static lg:z-auto lg:translate-x-0 lg:w-60 lg:flex-shrink-0"
      [class.-translate-x-full]="!layout.sidebarOpen()"
      [class.translate-x-0]="layout.sidebarOpen()"
    >

      <div class="px-5 py-5 border-b border-slate-800 flex items-center justify-between">
        <a routerLink="/recruiter/dashboard"
           (click)="layout.closeSidebar()"
           class="flex items-center gap-2.5 min-w-0">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <div class="min-w-0">
            <span class="text-white font-semibold text-sm tracking-tight">HireFlow</span>
            <span class="block text-slate-500 text-xs">Hiring Platform</span>
          </div>
        </a>

        <button
          (click)="layout.closeSidebar()"
          class="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg
                 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close menu">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <nav class="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto scrollbar-thin">

        <p class="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
          Recruiter
        </p>

        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="bg-slate-800 text-white"
            [routerLinkActiveOptions]="{ exact: item.exact ?? false }"
            (click)="layout.closeSidebar()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400
                   hover:bg-slate-800 hover:text-white transition-colors duration-150
                   text-sm font-medium group"
          >
            <svg class="w-[18px] h-[18px] flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.iconPath"/>
            </svg>
            <span>{{ item.label }}</span>
            @if (item.badge) {
              <span class="ml-auto bg-indigo-600 text-white text-xs font-semibold
                           px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {{ item.badge }}
              </span>
            }
          </a>
        }

        <div class="my-3 border-t border-slate-800"></div>

        <p class="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
          System
        </p>

        @for (item of bottomNavItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="bg-slate-800 text-white"
            (click)="layout.closeSidebar()"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400
                   hover:bg-slate-800 hover:text-white transition-colors duration-150
                   text-sm font-medium"
          >
            <svg class="w-[18px] h-[18px] flex-shrink-0"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.iconPath"/>
            </svg>
            <span>{{ item.label }}</span>
          </a>
        }
      </nav>

      <div class="px-3 py-4 border-t border-slate-800">
        <div class="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-800
                    transition-colors duration-150 cursor-pointer">
          <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                      flex-shrink-0 text-white text-xs font-semibold">
            RM
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate">Rahul Mehta</p>
            <p class="text-xs text-slate-500 truncate">Senior Recruiter</p>
          </div>
          <svg class="w-4 h-4 text-slate-500 flex-shrink-0"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01"/>
          </svg>
        </div>
      </div>

    </aside>
  `
})
export class SidebarComponent {

  readonly layout = inject(LayoutService);

  readonly navItems = [
    {
      label: 'Dashboard', route: '/recruiter/dashboard', exact: true, badge: null,
      iconPath: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
    },
    {
      label: 'Jobs', route: '/recruiter/jobs', badge: null,
      iconPath: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    },
    {
      label: 'Candidates', route: '/recruiter/candidates', badge: null,
      iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    },
    {
      label: 'Pipeline', route: '/recruiter/pipeline', badge: 3,
      iconPath: 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z',
    },
    {
      label: 'Interviews', route: '/recruiter/interviews', badge: 6,
      iconPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    },
    {
      label: 'Analytics', route: '/recruiter/analytics', badge: null,
      iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
  ];

  readonly bottomNavItems = [
    {
      label: 'Settings', route: '/recruiter/settings',
      iconPath: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    },
  ];
}
