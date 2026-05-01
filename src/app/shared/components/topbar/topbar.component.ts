import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '../../../core/services/layout.service';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <header class="h-14 md:h-16 bg-white border-b border-slate-200
                   flex items-center px-4 md:px-6 gap-3 flex-shrink-0">

      <button
        (click)="layout.toggleSidebar()"
        class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
               text-slate-500 hover:bg-slate-100 hover:text-slate-700
               transition-colors flex-shrink-0"
        aria-label="Open menu">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </button>

      <div class="flex-1 min-w-0">
        <h1 class="text-sm md:text-base font-semibold text-slate-900 truncate">
          {{ pageTitle() }}
        </h1>
      </div>

      <div class="relative hidden md:flex items-center">
        <svg class="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none"
             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
        <input
          type="text"
          placeholder="Search candidates, jobs…"
          [(ngModel)]="searchQuery"
          [ngModelOptions]="{ standalone: true }"
          class="pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200
                 rounded-lg text-slate-900 placeholder:text-slate-400
                 focus:outline-none focus:ring-2 focus:ring-indigo-500
                 focus:border-transparent w-52 lg:w-64 transition-all duration-150"
        />
      </div>

      <div class="flex items-center gap-1.5 md:gap-2 flex-shrink-0">

        <button class="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                        text-slate-500 hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </button>

        <button class="relative w-9 h-9 flex items-center justify-center rounded-lg
                        text-slate-500 hover:bg-slate-100 hover:text-slate-700
                        transition-colors duration-150">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div class="w-px h-5 bg-slate-200 hidden sm:block"></div>

        <button class="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg
                        hover:bg-slate-100 transition-colors duration-150">
          <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                      text-white text-xs font-semibold flex-shrink-0">
            RM
          </div>
          <div class="hidden md:block text-left">
            <p class="text-sm font-medium text-slate-800 leading-tight">Rahul Mehta</p>
            <p class="text-xs text-slate-500 leading-tight">Recruiter</p>
          </div>
          <svg class="w-4 h-4 text-slate-400 hidden md:block"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </button>

      </div>
    </header>
  `
})
export class TopbarComponent {
  readonly layout    = inject(LayoutService);
  readonly pageTitle = input<string>('Dashboard');
  searchQuery        = '';
}
