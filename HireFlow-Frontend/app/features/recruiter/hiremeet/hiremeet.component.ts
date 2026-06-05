import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HireMeetService, HireMeeting, CreateMeetingPayload } from '../../../core/services/hiremeet.service';

@Component({
  selector: 'app-hiremeet',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
  <div class="p-6 max-w-5xl mx-auto">

    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-xl font-bold text-slate-900">HireMeet</h1>
        <p class="text-sm text-slate-500 mt-0.5">Video interview rooms — powered by Daily.co</p>
      </div>
      <button (click)="showCreate.set(true)"
        class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700
               text-white text-sm font-medium px-4 py-2 rounded-lg transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        New Meeting
      </button>
    </div>

    <!-- Create Modal -->
    @if (showCreate()) {
      <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-base font-semibold text-slate-900">Create Meeting Room</h2>
            <button (click)="showCreate.set(false)" class="text-slate-400 hover:text-slate-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Meeting Title *</label>
              <input [(ngModel)]="form.title" placeholder="e.g. Technical Interview Round 2"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Candidate Name *</label>
              <input [(ngModel)]="form.candidateName" placeholder="e.g. Priya Sharma"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Job Title *</label>
              <input [(ngModel)]="form.jobTitle" placeholder="e.g. Lead Frontend Engineer"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-700 mb-1">Scheduled For (optional)</label>
              <input [(ngModel)]="form.scheduledFor" type="datetime-local"
                class="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
          </div>

          @if (createError()) {
            <p class="text-xs text-red-500 mt-3">{{ createError() }}</p>
          }

          <div class="flex gap-3 mt-6">
            <button (click)="showCreate.set(false)"
              class="flex-1 border border-slate-200 text-slate-600 text-sm font-medium py-2.5 rounded-lg hover:bg-slate-50 transition">
              Cancel
            </button>
            <button (click)="createMeeting()" [disabled]="creating()"
              class="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50
                     text-white text-sm font-semibold py-2.5 rounded-lg transition">
              {{ creating() ? 'Creating...' : 'Create Room' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Share Modal -->
    @if (shareUrl()) {
      <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-base font-semibold text-slate-900">Room Created! 🎉</h2>
            <button (click)="shareUrl.set(null)" class="text-slate-400 hover:text-slate-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-600 mb-3">Share this link with the candidate:</p>
          <div class="flex gap-2">
            <input [value]="shareUrl()!" readonly
              class="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700"/>
            <button (click)="copyLink()"
              class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 rounded-lg transition whitespace-nowrap">
              {{ copied() ? 'Copied!' : 'Copy' }}
            </button>
          </div>
          <a [href]="shareUrl()!" target="_blank"
            class="mt-4 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700
                   text-white text-sm font-semibold py-2.5 rounded-lg transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
            Join Meeting as Host
          </a>
        </div>
      </div>
    }

    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      @for (stat of stats(); track stat.label) {
        <div class="bg-white border border-slate-200 rounded-xl p-4">
          <p class="text-2xl font-bold text-slate-900">{{ stat.value }}</p>
          <p class="text-xs text-slate-500 mt-0.5">{{ stat.label }}</p>
        </div>
      }
    </div>

    <!-- Meetings list -->
    @if (service.meetings().length === 0) {
      <div class="bg-white border border-slate-200 rounded-xl p-12 text-center">
        <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
          </svg>
        </div>
        <h3 class="text-sm font-semibold text-slate-800 mb-1">No meetings yet</h3>
        <p class="text-xs text-slate-500 mb-4">Create your first HireMeet room to start interviewing candidates.</p>
        <button (click)="showCreate.set(true)"
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          Create Meeting
        </button>
      </div>
    } @else {
      <div class="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-100">
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide">Meeting</th>
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide">Status</th>
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide hidden md:table-cell">Scheduled</th>
              <th class="text-left text-xs font-semibold text-slate-500 px-4 py-3 uppercase tracking-wide hidden md:table-cell">Duration</th>
              <th class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            @for (m of service.meetings(); track m.id) {
              <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-4 py-3.5">
                  <p class="font-medium text-slate-900">{{ m.title }}</p>
                  <p class="text-xs text-slate-500 mt-0.5">{{ m.candidateName }} · {{ m.jobTitle }}</p>
                </td>
                <td class="px-4 py-3.5">
                  <span [class]="statusClass(m.status)"
                    class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full">
                    @if (m.status === 'live') {
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    }
                    {{ m.status | titlecase }}
                  </span>
                </td>
                <td class="px-4 py-3.5 hidden md:table-cell">
                  <span class="text-sm text-slate-600">{{ m.scheduledFor ? formatDate(m.scheduledFor) : '—' }}</span>
                </td>
                <td class="px-4 py-3.5 hidden md:table-cell">
                  <span class="text-sm text-slate-600">{{ m.duration ? formatDuration(m.duration) : '—' }}</span>
                </td>
                <td class="px-4 py-3.5">
                  <div class="flex items-center gap-2 justify-end">
                    @if (m.status !== 'ended') {
                      <a [routerLink]="['/meet', m.roomCode]"
                        class="text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50
                               hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition">
                        Join
                      </a>
                      <button (click)="copyRoomLink(m.roomCode)"
                        class="text-xs font-medium text-slate-600 hover:text-slate-800 bg-slate-100
                               hover:bg-slate-200 px-3 py-1.5 rounded-lg transition">
                        Share
                      </button>
                    }
                    <button (click)="deleteMeeting(m.id)"
                      class="text-xs text-rose-400 hover:text-rose-600 hover:bg-rose-50 p-1.5 rounded-lg transition">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

  </div>
  `
})
export class HireMeetComponent implements OnInit {
  service    = inject(HireMeetService);
  showCreate = signal(false);
  creating   = signal(false);
  createError = signal<string | null>(null);
  shareUrl   = signal<string | null>(null);
  copied     = signal(false);

  form: CreateMeetingPayload = { title: '', candidateName: '', jobTitle: '', scheduledFor: undefined };

  ngOnInit() { this.service.loadMeetings(); }

  stats() {
    const all = this.service.meetings();
    return [
      { label: 'Total Meetings', value: all.length },
      { label: 'Live Now',       value: all.filter(m => m.status === 'live').length },
      { label: 'Completed',      value: all.filter(m => m.status === 'ended').length },
    ];
  }

  createMeeting() {
    if (!this.form.title || !this.form.candidateName || !this.form.jobTitle) {
      this.createError.set('Please fill in all required fields.');
      return;
    }
    this.creating.set(true);
    this.createError.set(null);

    this.service.createMeeting(this.form).subscribe(res => {
      this.creating.set(false);
      if (!res.success || !res.data) {
        this.createError.set(res.message || 'Failed to create meeting.');
        return;
      }
      this.service.addToList(res.data);
      this.showCreate.set(false);
      const link = `${window.location.origin}/meet/${res.data.roomCode}`;
      this.shareUrl.set(link);
      this.form = { title: '', candidateName: '', jobTitle: '', scheduledFor: undefined };
    });
  }

  copyRoomLink(roomCode: string) {
    const link = `${window.location.origin}/meet/${roomCode}`;
    navigator.clipboard.writeText(link);
  }

  copyLink() {
    if (this.shareUrl()) {
      navigator.clipboard.writeText(this.shareUrl()!);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }

  deleteMeeting(id: string) {
    if (!confirm('Delete this meeting?')) return;
    this.service.deleteMeeting(id).subscribe(res => {
      if (res.success) this.service.removeFromList(id);
    });
  }

  statusClass(status: string) {
    return {
      'waiting': 'bg-amber-100 text-amber-700',
      'live':    'bg-emerald-100 text-emerald-700',
      'ended':   'bg-slate-100 text-slate-600',
    }[status] ?? 'bg-slate-100 text-slate-600';
  }

  formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  formatDuration(secs: number) {
    const m = Math.floor(secs / 60);
    return m >= 60 ? `${Math.floor(m/60)}h ${m%60}m` : `${m}m`;
  }
}
