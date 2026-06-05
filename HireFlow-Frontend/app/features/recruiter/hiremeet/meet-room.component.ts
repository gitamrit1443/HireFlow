import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HireMeetService } from '../../../core/services/hiremeet.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-meet-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <!-- PRE-JOIN SCREEN -->
  @if (phase() === 'prejoin') {
    <div class="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">

        <!-- Logo -->
        <div class="flex items-center gap-2.5 mb-8">
          <div class="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
          </div>
          <div>
            <p class="text-white font-bold text-sm leading-none">HireMeet</p>
            <p class="text-gray-500 text-xs">by HireFlow</p>
          </div>
        </div>

        @if (meeting()) {
          <div class="mb-6 p-3 bg-gray-800 rounded-xl">
            <p class="text-white font-semibold text-sm">{{ meeting()!.title }}</p>
            <p class="text-gray-400 text-xs mt-0.5">{{ meeting()!.jobTitle }} &bull; {{ meeting()!.candidateName }}</p>
            @if (meeting()!.status === 'live') {
              <div class="flex items-center gap-1.5 mt-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs text-emerald-400 font-medium">Live Now</span>
              </div>
            }
          </div>
        }

        <div class="mb-5">
          <label class="block text-xs font-medium text-gray-400 mb-1.5">Your Name</label>
          <input [(ngModel)]="participantName" placeholder="Enter your name to join"
            class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm
                   placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition"/>
        </div>

        @if (error()) {
          <div class="bg-red-900/30 border border-red-800 text-red-400 rounded-xl p-3 text-xs mb-4">
            {{ error() }}
          </div>
        }

        <button (click)="joinMeeting()" [disabled]="joining() || !participantName.trim()"
          class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed
                 text-white font-semibold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2">
          @if (joining()) {
            <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Connecting...
          } @else {
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
            </svg>
            Join Meeting
          }
        </button>

        <p class="text-center text-gray-700 text-xs mt-5 font-mono">{{ roomCode }}</p>
      </div>
    </div>
  }

  <!-- LIVE MEETING — Daily.co iframe -->
  @if (phase() === 'live') {
    <div class="fixed inset-0 bg-gray-950 flex flex-col">
      <!-- Topbar -->
      <div class="flex items-center justify-between px-4 py-2.5 bg-gray-900/80 backdrop-blur border-b border-gray-800 z-10">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-emerald-400 text-xs font-semibold">LIVE</span>
          </div>
          <span class="text-white font-medium text-sm">{{ meeting()?.title }}</span>
          <span class="hidden sm:block text-gray-600 text-xs font-mono">{{ roomCode }}</span>
        </div>
        <button (click)="leaveMeeting()"
          class="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition">
          Leave
        </button>
      </div>
      <!-- Daily.co real video iframe -->
      <div class="flex-1">
        <iframe [src]="iframeSrc()"
          allow="camera; microphone; autoplay; display-capture; fullscreen; clipboard-write"
          allowfullscreen
          class="w-full h-full border-0"
          title="HireMeet Video Room">
        </iframe>
      </div>
    </div>
  }

  <!-- ENDED -->
  @if (phase() === 'ended') {
    <div class="min-h-screen bg-gray-950 flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
        <h2 class="text-lg font-bold text-white mb-2">Meeting Ended</h2>
        <p class="text-gray-500 text-sm mb-6">This room has been closed.</p>
        <button (click)="goBack()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl text-sm transition">
          Back to Dashboard
        </button>
      </div>
    </div>
  }

  <!-- NOT FOUND -->
  @if (phase() === 'notfound') {
    <div class="min-h-screen bg-gray-950 flex items-center justify-center">
      <div class="text-center">
        <h2 class="text-lg font-bold text-white mb-2">Room Not Found</h2>
        <p class="text-gray-500 text-sm mb-6">No meeting with code <code class="text-indigo-400">{{ roomCode }}</code>.</p>
        <button (click)="goBack()" class="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm">Go Back</button>
      </div>
    </div>
  }
  `
})
export class MeetRoomComponent implements OnInit {
  private route     = inject(ActivatedRoute);
  private router    = inject(Router);
  private sanitizer = inject(DomSanitizer);
  private meetSvc   = inject(HireMeetService);
  private authSvc   = inject(AuthService);

  roomCode       = '';
  participantName = '';

  phase    = signal<'prejoin' | 'live' | 'ended' | 'notfound'>('prejoin');
  joining  = signal(false);
  error    = signal<string | null>(null);
  meeting  = signal<any>(null);
  iframeSrc = signal<SafeResourceUrl>('');

  ngOnInit() {
    this.roomCode = this.route.snapshot.paramMap.get('roomCode') ?? '';
    if (!this.roomCode) { this.phase.set('notfound'); return; }

    // Pre-fill name from logged in user
    const user = this.authSvc.currentUser();
    if (user) this.participantName = user.name;

    // Load meeting info
    this.meetSvc.getByRoomCode(this.roomCode).subscribe(res => {
      if (!res.success || !res.data) { this.phase.set('notfound'); return; }
      if (res.data.status === 'ended') { this.phase.set('ended'); return; }
      this.meeting.set(res.data);
    });
  }

  joinMeeting() {
    if (!this.participantName.trim()) return;
    this.joining.set(true);
    this.error.set(null);

    const user   = this.authSvc.currentUser();
    const role   = user?.role === 'recruiter' ? 'recruiter' : 'candidate';

    this.meetSvc.joinMeeting(this.roomCode, this.participantName.trim(), role).subscribe(res => {
      this.joining.set(false);
      if (!res.success || !res.data) {
        this.error.set(res.message || 'Could not join. Please try again.');
        return;
      }

      // Build Daily.co iframe URL: https://hireroom.daily.co/{roomCode}?t={token}
      const url = `${res.data.dailyRoomUrl}?t=${res.data.meetingToken}`;
      this.iframeSrc.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
      this.phase.set('live');
    });
  }

  leaveMeeting() {
    this.iframeSrc.set('');
    this.goBack();
  }

  goBack() {
    const role = this.authSvc.currentUser()?.role;
    this.router.navigate([role === 'recruiter' ? '/recruiter/hiremeet' : '/candidate/dashboard']);
  }
}
