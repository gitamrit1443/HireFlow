import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface MyApplication {
  id:          string;
  companyName: string;
  jobTitle:    string;
  department:  string;
  location:    string;
  appliedDate: string;
  currentStage: string;
  stageIndex:  number;   // 0–6 for progress bar
  status:      'active' | 'rejected' | 'offered';
  lastUpdate:  string;
  recruiterName: string;
  nextStep?:   string;
}

interface UpcomingInterview {
  id:          string;
  jobTitle:    string;
  round:       string;
  date:        string;
  time:        string;
  mode:        'online' | 'offline';
  panelNames:  string[];
  meetingLink?: string;
  location?:   string;
}

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-50">

      <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <span class="font-bold text-slate-900 text-sm tracking-tight">HireFlow</span>
          </div>

          <nav class="hidden md:flex items-center gap-0 border-b-0">
            @for (tab of portalTabs; track tab.key) {
              <button (click)="activeSection.set(tab.key)"
                class="px-4 py-5 text-sm font-semibold border-b-2 -mb-px transition-colors"
                [ngClass]="activeSection() === tab.key
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'">
                {{ tab.label }}
              </button>
            }
          </nav>

          <div class="flex items-center gap-3">
            <button class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                           text-white text-xs font-bold flex-shrink-0">
              PS
            </button>
            <span class="text-sm font-medium text-slate-700 hidden md:block">Priya Sharma</span>
          </div>
        </div>
      </header>

      <main class="max-w-5xl mx-auto px-6 py-8 space-y-7">

        @if (activeSection() === 'dashboard') {

          <div class="bg-white rounded-2xl border border-slate-200 p-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center
                            justify-center text-white text-lg font-bold flex-shrink-0">
                  PS
                </div>
                <div>
                  <h1 class="text-lg font-bold text-slate-900">Good morning, Priya 👋</h1>
                  <p class="text-sm text-slate-500 mt-0.5">
                    You have
                    <span class="text-indigo-600 font-semibold">
                      {{ activeApplications().length }} active applications
                    </span>
                    and
                    <span class="text-violet-600 font-semibold">
                      {{ upcomingInterviews.length }} upcoming interview{{ upcomingInterviews.length !== 1 ? 's' : '' }}
                    </span>
                  </p>
                </div>
              </div>

              <div class="flex-shrink-0 w-full md:w-48">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-semibold text-slate-600">Profile strength</span>
                  <span class="text-xs font-bold text-indigo-600">{{ profileCompletion() }}%</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-indigo-500 rounded-full transition-all duration-500"
                       [style.width.%]="profileCompletion()">
                  </div>
                </div>
                <p class="text-xs text-slate-400 mt-1">
                  @if (profileCompletion() < 100) {
                    Add resume to reach 100%
                  } @else {
                    Profile complete ✓
                  }
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @for (stat of candidateStats; track stat.label) {
              <div class="bg-white rounded-xl border border-slate-200 px-4 py-3.5">
                <p class="text-xl font-bold" [style.color]="stat.color">{{ stat.value }}</p>
                <p class="text-xs text-slate-500 font-medium mt-0.5">{{ stat.label }}</p>
              </div>
            }
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

            <div class="lg:col-span-2 space-y-3">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-slate-900">My Applications</h2>
                <button (click)="activeSection.set('applications')"
                  class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  View all →
                </button>
              </div>

              @for (app of applications.slice(0, 3); track app.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-5
                            hover:shadow-card-hover transition-shadow duration-200">
                  <div class="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">{{ app.jobTitle }}</h3>
                      <p class="text-xs text-slate-500 mt-0.5">
                        {{ app.companyName }} · {{ app.department }} · {{ app.location }}
                      </p>
                    </div>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                          [ngClass]="getStatusClass(app.status)">
                      {{ app.status === 'active' ? 'Active' : app.status === 'offered' ? '🎉 Offer Received' : 'Not Selected' }}
                    </span>
                  </div>

                  <div class="relative mb-4">
                    <div class="absolute top-3 left-0 right-0 h-0.5 bg-slate-200">
                      <div class="h-full bg-indigo-500 transition-all duration-700"
                           [style.width.%]="(app.stageIndex / 5) * 100">
                      </div>
                    </div>
                    <div class="relative flex justify-between">
                      @for (stage of timelineStages; track stage.key; let i = $index) {
                        <div class="flex flex-col items-center gap-1.5">
                          <div class="w-6 h-6 rounded-full border-2 flex items-center
                                      justify-center z-10 transition-colors"
                               [ngClass]="i <= app.stageIndex
                                 ? 'bg-indigo-600 border-indigo-600'
                                 : 'bg-white border-slate-200'">
                            @if (i < app.stageIndex) {
                              <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                              </svg>
                            } @else if (i === app.stageIndex) {
                              <div class="w-2 h-2 rounded-full bg-white"></div>
                            }
                          </div>
                          <span class="text-xs font-medium leading-tight text-center"
                                [ngClass]="i <= app.stageIndex ? 'text-indigo-600' : 'text-slate-400'">
                            {{ stage.shortLabel }}
                          </span>
                        </div>
                      }
                    </div>
                  </div>

                  <div class="flex items-center justify-between text-xs">
                    <span class="text-slate-400">
                      Applied {{ app.appliedDate }}
                    </span>
                    @if (app.nextStep) {
                      <span class="text-indigo-600 font-semibold">{{ app.nextStep }}</span>
                    }
                  </div>
                </div>
              }
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h2 class="text-sm font-bold text-slate-900">Upcoming Interviews</h2>
                <button (click)="activeSection.set('interviews')"
                  class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  See all →
                </button>
              </div>

              @if (upcomingInterviews.length === 0) {
                <div class="bg-white rounded-xl border border-slate-200 p-6 text-center">
                  <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center
                              justify-center mx-auto mb-3">
                    <svg class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75"/>
                    </svg>
                  </div>
                  <p class="text-xs text-slate-500">No upcoming interviews</p>
                </div>
              }

              @for (iv of upcomingInterviews; track iv.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-4">
                  <div class="flex items-start justify-between gap-2 mb-2.5">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-900 truncate">{{ iv.jobTitle }}</p>
                      <p class="text-xs text-indigo-600 font-semibold mt-0.5">{{ iv.round }}</p>
                    </div>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                          [ngClass]="iv.mode === 'online'
                            ? 'bg-blue-50 text-blue-600'
                            : 'bg-slate-100 text-slate-600'">
                      {{ iv.mode === 'online' ? '🔗 Online' : '🏢 In-office' }}
                    </span>
                  </div>
                  <div class="flex items-center gap-1.5 mb-2">
                    <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-xs text-slate-600 font-medium">
                      {{ iv.date }}, {{ iv.time }}
                    </span>
                  </div>
                  <p class="text-xs text-slate-500 mb-3">
                    Panel: {{ iv.panelNames.join(', ') }}
                  </p>
                  @if (iv.meetingLink) {
                    <a [href]="iv.meetingLink" target="_blank"
                       class="block w-full text-center text-xs font-bold text-white
                              bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg
                              transition-colors">
                      Join Interview
                    </a>
                  }
                </div>
              }

              <div class="bg-amber-50 rounded-xl border border-amber-100 p-4">
                <div class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                  </svg>
                  <div>
                    <p class="text-xs font-bold text-amber-800">Update from Rahul Mehta</p>
                    <p class="text-xs text-amber-700 mt-0.5 leading-relaxed">
                      Your technical interview is confirmed for Apr 22 at 2:00 PM.
                      Please be ready 5 minutes early.
                    </p>
                    <p class="text-xs text-amber-500 mt-1.5 font-medium">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }

        @if (activeSection() === 'applications') {
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-bold text-slate-900">My Applications</h2>
              <span class="text-sm text-slate-500">{{ applications.length }} total</span>
            </div>

            @for (app of applications; track app.id) {
              <div class="bg-white rounded-xl border border-slate-200 p-6">
                <div class="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 class="text-base font-bold text-slate-900">{{ app.jobTitle }}</h3>
                    <p class="text-sm text-slate-500 mt-1">
                      {{ app.companyName }} · {{ app.department }} · {{ app.location }}
                    </p>
                  </div>
                  <span class="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                        [ngClass]="getStatusClass(app.status)">
                    {{ app.status === 'active' ? 'In Progress' : app.status === 'offered' ? '🎉 Offer!' : 'Not Selected' }}
                  </span>
                </div>

                <div class="relative mb-5">
                  <div class="absolute top-3 left-0 right-0 h-0.5 bg-slate-200">
                    <div class="h-full bg-indigo-500" [style.width.%]="(app.stageIndex / 5) * 100">
                    </div>
                  </div>
                  <div class="relative flex justify-between">
                    @for (stage of timelineStages; track stage.key; let i = $index) {
                      <div class="flex flex-col items-center gap-2">
                        <div class="w-7 h-7 rounded-full border-2 flex items-center
                                    justify-center z-10 transition-all"
                             [ngClass]="i < app.stageIndex
                               ? 'bg-indigo-600 border-indigo-600'
                               : i === app.stageIndex
                                 ? 'bg-indigo-600 border-indigo-600 ring-4 ring-indigo-100'
                                 : 'bg-white border-slate-200'">
                          @if (i < app.stageIndex) {
                            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="3">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                          } @else if (i === app.stageIndex) {
                            <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
                          }
                        </div>
                        <div class="text-center">
                          <p class="text-xs font-semibold leading-tight"
                             [ngClass]="i <= app.stageIndex ? 'text-indigo-700' : 'text-slate-400'">
                            {{ stage.label }}
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span>Applied: <strong class="text-slate-700">{{ app.appliedDate }}</strong></span>
                  <span>Last update: <strong class="text-slate-700">{{ app.lastUpdate }}</strong></span>
                  <span>Recruiter: <strong class="text-slate-700">{{ app.recruiterName }}</strong></span>
                  @if (app.nextStep) {
                    <span class="ml-auto text-indigo-600 font-bold bg-indigo-50
                                 px-2.5 py-1 rounded-lg">
                      Next: {{ app.nextStep }}
                    </span>
                  }
                </div>
              </div>
            }
          </div>
        }

        @if (activeSection() === 'profile') {
          <div class="space-y-5">
            <h2 class="text-lg font-bold text-slate-900">My Profile</h2>

            @if (profileCompletion() < 100) {
              <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex
                          items-center gap-4">
                <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center
                            justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-indigo-800">Complete your profile</p>
                  <p class="text-xs text-indigo-600 mt-0.5">
                    Profiles with resumes get 3× more interview calls.
                    You're {{ profileCompletion() }}% done.
                  </p>
                </div>
              </div>
            }

            <div class="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <h3 class="text-sm font-bold text-slate-900">Personal Information</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                @for (field of profileFields; track field.label) {
                  <div>
                    <label class="block text-xs font-semibold text-slate-500 mb-1.5">
                      {{ field.label }}
                    </label>
                    <input [type]="field.type" [value]="field.value"
                      class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white
                             text-slate-900"/>
                  </div>
                }
              </div>
              <div class="flex justify-end pt-2">
                <button class="btn btn-primary btn-sm normal-case font-medium">
                  Save Profile
                </button>
              </div>
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-bold text-slate-900">Resume / CV</h3>
                <span class="text-xs text-slate-400">PDF, DOCX — max 5 MB</span>
              </div>

              @if (resumeUploaded()) {
                <div class="flex items-center gap-4 p-4 border border-slate-200 rounded-xl
                            bg-slate-50 mb-3">
                  <div class="w-11 h-14 bg-rose-50 border border-rose-100 rounded-lg flex
                              items-center justify-center flex-shrink-0">
                    <span class="text-xs font-bold text-rose-600">PDF</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold text-slate-900">Priya_Sharma_Resume_2025.pdf</p>
                    <p class="text-xs text-slate-400 mt-0.5">2.1 MB · Uploaded Mar 10, 2025</p>
                  </div>
                  <button (click)="resumeUploaded.set(false)"
                    class="text-xs font-semibold text-rose-500 hover:text-rose-700 flex-shrink-0">
                    Remove
                  </button>
                </div>
                <button class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                               hover:bg-slate-50 normal-case font-medium">
                  Replace Resume
                </button>
              } @else {
                <div class="border-2 border-dashed border-slate-200 rounded-xl p-10
                            text-center hover:border-indigo-400 hover:bg-indigo-50/30
                            transition-all duration-150 cursor-pointer group">
                  <div class="w-12 h-12 bg-slate-100 group-hover:bg-indigo-100 rounded-xl
                              flex items-center justify-center mx-auto mb-3 transition-colors">
                    <svg class="w-6 h-6 text-slate-400 group-hover:text-indigo-500 transition-colors"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-slate-700 mb-1">
                    Drag and drop your resume
                  </p>
                  <p class="text-xs text-slate-400 mb-3">or click to browse files</p>
                  <button (click)="resumeUploaded.set(true)"
                    class="btn btn-xs btn-primary normal-case font-medium">
                    Choose File
                  </button>
                </div>
              }
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-6">
              <h3 class="text-sm font-bold text-slate-900 mb-4">Skills</h3>
              <div class="flex flex-wrap gap-2 mb-3">
                @for (skill of candidateSkills(); track skill) {
                  <span class="flex items-center gap-1.5 text-xs font-semibold
                               bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg
                               border border-slate-200">
                    {{ skill }}
                    <button (click)="removeSkill(skill)" class="text-slate-400 hover:text-rose-500 transition-colors">×</button>
                  </span>
                }
              </div>
              <div class="flex gap-2">
                <input [(ngModel)]="newSkillInput" type="text"
                  placeholder="Add a skill (e.g. Angular, Python…)"
                  (keydown.enter)="addSkill(); $event.preventDefault()"
                  class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                <button (click)="addSkill()"
                  class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium px-4">
                  Add
                </button>
              </div>
            </div>
          </div>
        }

        @if (activeSection() === 'interviews') {
          <div class="space-y-4">
            <h2 class="text-lg font-bold text-slate-900">My Interviews</h2>

            @if (upcomingInterviews.length === 0) {
              <div class="bg-white rounded-xl border border-slate-200 py-16 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center
                            justify-center mx-auto mb-4">
                  <svg class="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75"/>
                  </svg>
                </div>
                <p class="text-base font-semibold text-slate-700">No interviews scheduled yet</p>
                <p class="text-sm text-slate-400 mt-1">
                  Your recruiter will notify you when an interview is arranged.
                </p>
              </div>
            }

            @for (iv of upcomingInterviews; track iv.id) {
              <div class="bg-white rounded-xl border border-slate-200 p-6">
                <div class="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 class="text-base font-bold text-slate-900">{{ iv.jobTitle }}</h3>
                    <p class="text-sm text-indigo-600 font-semibold mt-0.5">{{ iv.round }}</p>
                  </div>
                  <span class="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
                        [ngClass]="iv.mode === 'online'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-slate-100 text-slate-600'">
                    {{ iv.mode === 'online' ? '🔗 Online' : '🏢 In-office' }}
                  </span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div class="flex items-center gap-2 text-sm text-slate-600">
                    <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25"/>
                    </svg>
                    <span>{{ iv.date }}</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-slate-600">
                    <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ iv.time }}</span>
                  </div>
                </div>
                <p class="text-sm text-slate-500 mb-4">
                  Interviewers: <strong class="text-slate-700">{{ iv.panelNames.join(', ') }}</strong>
                </p>
                @if (iv.meetingLink) {
                  <a [href]="iv.meetingLink" target="_blank"
                     class="inline-flex items-center gap-2 btn btn-primary btn-sm normal-case font-semibold">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                    </svg>
                    Join Meeting
                  </a>
                }
              </div>
            }
          </div>
        }

      </main>
    </div>
  `
})
export class CandidateDashboardComponent {

  activeSection = signal<'dashboard' | 'applications' | 'profile' | 'interviews'>('dashboard');

  readonly portalTabs = [
    { key: 'dashboard'    as const, label: 'Dashboard' },
    { key: 'applications' as const, label: 'My Applications' },
    { key: 'interviews'   as const, label: 'Interviews' },
    { key: 'profile'      as const, label: 'My Profile' },
  ];

  resumeUploaded = signal(true);   // Priya already has a resume
  newSkillInput  = '';
  candidateSkills = signal(['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'System Design', 'NgRx']);

  readonly profileCompletion = computed(() =>
    this.resumeUploaded() ? 100 : 75
  );

  addSkill(): void {
    const skill = this.newSkillInput.trim();

    if (skill && !this.candidateSkills().includes(skill)) {
      this.candidateSkills.update(list => [...list, skill]);
    }

    this.newSkillInput = '';
  }

  removeSkill(skill: string): void {
    this.candidateSkills.update(list => list.filter(item => item !== skill));
  }

  readonly candidateStats = [
    { label:'Applied',    value: '3',  color: '#64748B' },
    { label:'In Progress',value: '2',  color: '#4F46E5' },
    { label:'Interviews', value: '1',  color: '#8B5CF6' },
    { label:'Offers',     value: '0',  color: '#10B981' },
  ];

  readonly timelineStages = [
    { key:'applied',     label:'Applied',     shortLabel:'Applied'    },
    { key:'shortlisted', label:'Shortlisted', shortLabel:'Shortlisted'},
    { key:'assessment',  label:'Assessment',  shortLabel:'Assessment' },
    { key:'interview',   label:'Interview',   shortLabel:'Interview'  },
    { key:'hr_round',    label:'HR Round',    shortLabel:'HR'         },
    { key:'selected',    label:'Selected',    shortLabel:'Selected'   },
  ];

  readonly applications: MyApplication[] = [
    {
      id: 'a1',
      companyName:  'Acme Technologies',
      jobTitle:     'Lead Frontend Engineer',
      department:   'Engineering',
      location:     'Bangalore (Hybrid)',
      appliedDate:  'Mar 10, 2025',
      currentStage: 'Interview',
      stageIndex:   3,
      status:       'active',
      lastUpdate:   'Apr 22, 2025',
      recruiterName:'Rahul Mehta',
      nextStep:     'Technical interview today at 2:00 PM',
    },
    {
      id: 'a2',
      companyName:  'Nexora Labs',
      jobTitle:     'Senior Angular Developer',
      department:   'Engineering',
      location:     'Remote',
      appliedDate:  'Mar 5, 2025',
      currentStage: 'Shortlisted',
      stageIndex:   1,
      status:       'active',
      lastUpdate:   'Apr 18, 2025',
      recruiterName:'Sneha Patel',
      nextStep:     'Assessment due by Apr 25',
    },
    {
      id: 'a3',
      companyName:  'CloudBase Inc.',
      jobTitle:     'Frontend Architect',
      department:   'Platform',
      location:     'Mumbai',
      appliedDate:  'Feb 20, 2025',
      currentStage: 'Not Selected',
      stageIndex:   2,
      status:       'rejected',
      lastUpdate:   'Mar 28, 2025',
      recruiterName:'Arjun Desai',
    },
  ];

  readonly activeApplications = computed(() =>
    this.applications.filter(a => a.status === 'active')
  );

  readonly upcomingInterviews: UpcomingInterview[] = [
    {
      id:          'i1',
      jobTitle:    'Lead Frontend Engineer',
      round:       'Technical Interview',
      date:        'Today, Apr 22, 2025',
      time:        '2:00 PM – 3:30 PM IST',
      mode:        'online',
      panelNames:  ['Vikash Anand', 'Divya Pillai'],
      meetingLink: 'https://meet.google.com/abc-defg-hij',
    },
  ];

  readonly profileFields = [
    { label:'Full Name',       type:'text',  value:'Priya Sharma' },
    { label:'Email',           type:'email', value:'priya.sharma@email.com' },
    { label:'Phone',           type:'tel',   value:'+91 98765 43210' },
    { label:'Current Role',    type:'text',  value:'Senior Frontend Developer' },
    { label:'Location',        type:'text',  value:'Bangalore, IN' },
    { label:'Years of Experience', type:'number', value:'5' },
  ];

  getStatusClass(status: string): string {
    return {
      active:   'bg-indigo-100 text-indigo-700',
      offered:  'bg-emerald-100 text-emerald-700',
      rejected: 'bg-rose-100 text-rose-700',
    }[status] ?? 'bg-slate-100 text-slate-600';
  }
}
