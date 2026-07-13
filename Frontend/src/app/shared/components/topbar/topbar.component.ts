import { Component, input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../../../core/services/layout.service';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormsModule, ClickOutsideDirective],
  template: `
    <header class="h-14 md:h-16 bg-white border-b border-slate-200
                   flex items-center px-3 sm:px-4 md:px-6 gap-2 sm:gap-3 flex-shrink-0 min-w-0">

      <!-- Hamburger (mobile) -->
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

      <!-- Page title -->
      <div class="flex-1 min-w-0">
        <h1 class="text-sm md:text-base font-semibold text-slate-900 truncate">
          {{ pageTitle() }}
        </h1>
      </div>

      <!-- Search (desktop) -->
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

        <!-- Search icon (mobile) -->
        <button class="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                        text-slate-500 hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </button>

        <!-- Notifications -->
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

        <!-- User Avatar + Dropdown -->
        <div class="relative">
          <button
            (click)="dropdownOpen.set(!dropdownOpen())"
            class="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg
                   hover:bg-slate-100 transition-colors duration-150">
            <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                        text-white text-xs font-semibold flex-shrink-0">
              {{ auth.userInitials() }}
            </div>
            <div class="hidden md:block text-left">
              <p class="text-sm font-medium text-slate-800 leading-tight">{{ auth.userName() }}</p>
              <p class="text-xs text-slate-500 leading-tight capitalize">{{ auth.userTitle() }}</p>
            </div>
            <svg class="w-4 h-4 text-slate-400 hidden md:block transition-transform duration-150"
                 [class.rotate-180]="dropdownOpen()"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
          </button>

          <!-- Dropdown Menu -->
          @if (dropdownOpen()) {
            <div class="absolute right-0 top-full mt-2 w-[min(13rem,calc(100vw-2rem))] bg-white rounded-xl
                        border border-slate-200 shadow-lg z-50 py-1 overflow-hidden"
                 (clickOutside)="dropdownOpen.set(false)">

              <!-- User Info -->
              <div class="px-4 py-3 border-b border-slate-100">
                <p class="text-sm font-semibold text-slate-900">{{ auth.userName() }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ auth.currentUser()?.email }}</p>
                <span class="inline-block mt-1.5 text-xs font-semibold px-2 py-0.5 rounded-full
                             bg-indigo-100 text-indigo-700 capitalize">
                  {{ auth.currentUser()?.role }}
                </span>
              </div>

              <!-- Menu Items -->
              <div class="py-1">
                <button (click)="goToProfile()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                  </svg>
                  My Profile
                </button>
                <button (click)="openEditProfile()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"/>
                  </svg>
                  Edit Profile
                </button>
                <button (click)="openPasswordModal()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5A2.25 2.25 0 0019.5 19.5v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                  </svg>
                  Change Password
                </button>
                <button (click)="goToSettings()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700
                               hover:bg-slate-50 transition-colors text-left">
                  <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Settings
                </button>
              </div>

              <!-- Logout -->
              <div class="border-t border-slate-100 py-1">
                <button
                  (click)="logout()"
                  class="w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold
                         text-rose-600 hover:bg-rose-50 transition-colors text-left">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                  </svg>
                  Sign out
                </button>
              </div>

            </div>
          }
        </div>

      </div>
    </header>

    @if (editOpen()) {
      <div class="fixed inset-0 z-[80] bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
        <div class="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-4 sm:p-5 my-6 sm:my-0">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-bold text-slate-900">Edit Profile</h2>
            <button (click)="editOpen.set(false)" class="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500">x</button>
          </div>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
              <input [(ngModel)]="profileDraft.name" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Company</label>
              <input [(ngModel)]="profileDraft.company" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1.5">Phone</label>
              <input [(ngModel)]="profileDraft.phone" type="tel" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            @if (profileError()) {
              <p class="text-xs font-semibold text-rose-600">{{ profileError() }}</p>
            }
          </div>
          <div class="flex justify-end gap-2 mt-5">
            <button (click)="editOpen.set(false)" class="btn btn-sm btn-ghost border border-slate-200 normal-case">Cancel</button>
            <button (click)="saveProfile()" class="btn btn-sm btn-primary normal-case">Save</button>
          </div>
        </div>
      </div>
    }

    @if (passwordOpen()) {
      <div class="fixed inset-0 z-[80] bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
        <div class="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-4 sm:p-5 my-6 sm:my-0">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-bold text-slate-900">Change Password</h2>
            <button (click)="passwordOpen.set(false)" class="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500">x</button>
          </div>
          <div class="space-y-3">
            @for (field of passwordFields; track field.key) {
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">{{ field.label }}</label>
                <div class="relative">
                  <input [(ngModel)]="passwordDraft[field.key]"
                    [type]="field.visible() ? 'text' : 'password'"
                    class="w-full px-3 py-2 pr-12 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  <button type="button" (click)="field.toggle()"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-indigo-600">
                    {{ field.visible() ? 'Hide' : 'Show' }}
                  </button>
                </div>
              </div>
            }
            @if (passwordError()) {
              <p class="text-xs font-semibold text-rose-600">{{ passwordError() }}</p>
            }
          </div>
          <div class="flex justify-end gap-2 mt-5">
            <button (click)="passwordOpen.set(false)" class="btn btn-sm btn-ghost border border-slate-200 normal-case">Cancel</button>
            <button (click)="savePassword()" class="btn btn-sm btn-primary normal-case">Update Password</button>
          </div>
        </div>
      </div>
    }

    @if (toast()) {
      <div class="fixed bottom-5 left-1/2 z-[90] -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg animate-toast">
        {{ toast() }}
      </div>
    }
  `
})
export class TopbarComponent {
  readonly layout    = inject(LayoutService);
  readonly auth      = inject(AuthService);
  private router     = inject(Router);
  readonly pageTitle = input<string>('Dashboard');
  searchQuery        = '';
  dropdownOpen       = signal(false);
  editOpen           = signal(false);
  passwordOpen       = signal(false);
  toast              = signal('');
  profileError       = signal('');
  passwordError      = signal('');
  showCurrent        = signal(false);
  showNew            = signal(false);
  showConfirm        = signal(false);

  profileDraft = { name: '', company: '', phone: '' };
  passwordDraft: Record<'current' | 'next' | 'confirm', string> = { current: '', next: '', confirm: '' };
  passwordFields = [
    { key: 'current' as const, label: 'Current Password', visible: this.showCurrent, toggle: () => this.showCurrent.update(v => !v) },
    { key: 'next' as const, label: 'New Password', visible: this.showNew, toggle: () => this.showNew.update(v => !v) },
    { key: 'confirm' as const, label: 'Confirm Password', visible: this.showConfirm, toggle: () => this.showConfirm.update(v => !v) },
  ];

  goToProfile(): void {
    this.dropdownOpen.set(false);
    this.router.navigate([this.auth.isRecruiter() ? '/recruiter/settings' : '/candidate/dashboard'], {
      queryParams: this.auth.isCandidate() ? { tab: 'profile' } : undefined
    });
  }

  goToSettings(): void {
    this.dropdownOpen.set(false);
    this.router.navigate([this.auth.isRecruiter() ? '/recruiter/settings' : '/candidate/settings']);
  }

  openEditProfile(): void {
    const user = this.auth.currentUser();
    this.profileDraft = { name: user?.name ?? '', company: user?.company ?? '', phone: user?.phone ?? '' };
    this.profileError.set('');
    this.dropdownOpen.set(false);
    this.editOpen.set(true);
  }

  saveProfile(): void {
    if (this.profileDraft.name.trim().length < 2) {
      this.profileError.set('Name must be at least 2 characters.');
      return;
    }
    this.auth.updateProfile(this.profileDraft);
    this.editOpen.set(false);
    this.showToast('Profile updated.');
  }

  openPasswordModal(): void {
    this.passwordDraft = { current: '', next: '', confirm: '' };
    this.passwordError.set('');
    this.dropdownOpen.set(false);
    this.passwordOpen.set(true);
  }

  async savePassword(): Promise<void> {
    if (this.passwordDraft.next.length < 8) {
      this.passwordError.set('New password must be at least 8 characters.');
      return;
    }
    if (this.passwordDraft.next !== this.passwordDraft.confirm) {
      this.passwordError.set('New password and confirmation do not match.');
      return;
    }
    const result = await this.auth.changePassword(
      this.passwordDraft.current,
      this.passwordDraft.next
    );
    if (!result.success) {
      this.passwordError.set(result.message);
      return;
    }
    this.passwordOpen.set(false);
    this.showToast(result.message);
  }

  showToast(message: string): void {
    this.toast.set(message);
    setTimeout(() => this.toast.set(''), 2200);
  }

  logout(): void {
    this.dropdownOpen.set(false);
    this.auth.logout();
  }
}
