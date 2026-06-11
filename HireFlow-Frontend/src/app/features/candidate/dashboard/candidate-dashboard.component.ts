import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ApplicationsApiService, ApplicationDto } from '../../../core/services/applications-api.service';
import { JobsApiService } from '../../../core/services/jobs-api.service';


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

interface JobRecommendation {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  posted: string;
}

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-slate-50">

      <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

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

          <nav class="hidden md:flex items-center gap-0 border-b-0 min-w-0">
            @for (tab of portalTabs; track tab.key) {
              <button (click)="activeSection.set(tab.key)"
                class="px-3 lg:px-4 py-5 text-sm font-semibold border-b-2 -mb-px transition-colors whitespace-nowrap"
                [ngClass]="activeSection() === tab.key
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'">
                {{ tab.label }}
              </button>
            }
          </nav>

          <div class="relative flex items-center gap-3">
            <button (click)="toggleAccountOpen()"
              class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center
                     text-white text-xs font-bold flex-shrink-0">
              {{ auth.userInitials() }}
            </button>
            <button (click)="toggleAccountOpen()"
              class="text-sm font-medium text-slate-700 hidden md:block">
              {{ auth.userName() }}
            </button>
            @if (accountOpen()) {
              <div class="absolute right-0 top-full mt-3 w-[min(13rem,calc(100vw-2rem))] bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-30">
                <div class="px-4 py-3 border-b border-slate-100">
                  <p class="text-sm font-bold text-slate-900">{{ auth.userName() }}</p>
                  <p class="text-xs text-slate-500 truncate">{{ auth.currentUser()?.email }}</p>
                </div>
                <button (click)="activeSection.set('profile'); accountOpen.set(false)"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">My Profile</button>
                <button (click)="openEditProfile()"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Edit Profile</button>
                <button (click)="openPasswordModal()"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Change Password</button>
                <button (click)="router.navigate(['/candidate/settings']); accountOpen.set(false)"
                  class="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Settings</button>
                <button (click)="logout()"
                  class="w-full px-4 py-2 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50">Sign out</button>
              </div>
            }
          </div>
        </div>

        <nav class="md:hidden max-w-5xl mx-auto px-4 pb-2 overflow-x-auto scrollbar-thin">
          <div class="flex items-center gap-2 min-w-max">
            @for (tab of portalTabs; track tab.key) {
              <button (click)="activeSection.set(tab.key)"
                class="px-3 py-2 rounded-lg text-xs font-bold border transition-colors whitespace-nowrap"
                [ngClass]="activeSection() === tab.key
                  ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 bg-white text-slate-500'">
                {{ tab.label }}
              </button>
            }
          </div>
        </nav>
      </header>

      <main class="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-8 pb-24 md:pb-8 space-y-5 sm:space-y-7">

        @if (activeSection() === 'dashboard') {

          <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center
                            justify-center text-white text-lg font-bold flex-shrink-0">
                  {{ auth.userInitials() }}
                </div>
                <div>
                  <h1 class="text-lg font-bold text-slate-900">Good morning, {{ firstName() }}</h1>
                  <p class="text-sm text-slate-500 mt-0.5">
                    You have
                    <span class="text-indigo-600 font-semibold">
                      {{ activeApplications().length }} active applications
                    </span>
                    and
                    <span class="text-violet-600 font-semibold">
                      {{ upcomingInterviews().length }} upcoming interview{{ upcomingInterviews().length !== 1 ? 's' : '' }}
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

          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            @for (stat of candidateStats(); track stat.label) {
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

              @for (app of applications().slice(0, 3); track app.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-5
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

                  <div class="relative mb-4 overflow-x-auto pb-2 scrollbar-thin">
                    <div class="relative min-w-[520px]">
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

              @if (upcomingInterviews().length === 0) {
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

              @for (iv of upcomingInterviews(); track iv.id) {
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
              <span class="text-sm text-slate-500">{{ applications().length }} total</span>
            </div>

            @for (app of applications(); track app.id) {
              <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-5">
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

                <div class="relative mb-5 overflow-x-auto pb-2 scrollbar-thin">
                  <div class="relative min-w-[600px]">
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

        @if (activeSection() === 'recommendations') {
          <div class="space-y-5">
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div>
                <h2 class="text-lg font-bold text-slate-900">Job Recommendations</h2>
                <p class="text-sm text-slate-500 mt-1">Based on your interests and recent searches.</p>
              </div>
              <div class="w-full lg:w-80">
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Search roles</label>
                <div class="flex gap-2">
                  <input [(ngModel)]="jobSearchInput" (keydown.enter)="trackSearch(); $event.preventDefault()"
                    placeholder="Angular, DevOps, UI..."
                    class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                  <button (click)="trackSearch()" class="btn btn-sm btn-primary normal-case">Search</button>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
              <div class="flex items-center justify-between gap-3 mb-3">
                <h3 class="text-sm font-bold text-slate-900">Interest Tags</h3>
                <span class="text-xs text-slate-500">{{ recommendedJobs().length }} matches</span>
              </div>
              <div class="flex flex-wrap gap-2 mb-3">
                @for (tag of interestTags(); track tag) {
                  <span class="inline-flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                    {{ tag }}
                    <button (click)="removeInterest(tag)" class="text-indigo-400 hover:text-rose-500">x</button>
                  </span>
                }
              </div>
              <div class="flex flex-col sm:flex-row gap-2">
                <input [(ngModel)]="newInterestInput" (keydown.enter)="addInterest(); $event.preventDefault()"
                  placeholder="Add interest tag"
                  class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                <button (click)="addInterest()" class="btn btn-sm btn-ghost border border-slate-200 normal-case">Add Tag</button>
              </div>
              @if (searchHistory().length) {
                <div class="mt-4 pt-4 border-t border-slate-100">
                  <p class="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Search History</p>
                  <div class="flex flex-wrap gap-2">
                    @for (term of searchHistory(); track term) {
                      <button (click)="addInterest(term)"
                        class="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-200">
                        {{ term }}
                      </button>
                    }
                  </div>
                </div>
              }
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              @for (job of recommendedJobs(); track job.id) {
                <div class="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-card-hover transition-shadow">
                  <div class="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">{{ job.title }}</h3>
                      <p class="text-xs text-slate-500 mt-1">{{ job.company }} · {{ job.location }} · {{ job.type }}</p>
                    </div>
                    <span class="text-xs font-bold rounded-full px-2.5 py-1"
                      [ngClass]="matchScore(job) >= 85 ? 'bg-emerald-100 text-emerald-700' : matchScore(job) >= 70 ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'">
                      {{ matchScore(job) }}% match
                    </span>
                  </div>
                  <p class="text-xs font-semibold text-slate-600 mb-3">{{ job.salary }} · Posted {{ job.posted }}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    @for (tag of job.tags; track tag) {
                      <span class="rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{{ tag }}</span>
                    }
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <button (click)="toggleBookmark(job.id)"
                      class="btn btn-sm btn-ghost border border-slate-200 normal-case w-full sm:w-auto">
                      {{ bookmarkedJobs().includes(job.id) ? 'Bookmarked' : 'Bookmark' }}
                    </button>
                    <button (click)="applyToJob(job)" class="btn btn-sm btn-primary normal-case w-full sm:w-auto">Apply Now</button>
                  </div>
                </div>
              }
            </div>
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

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 space-y-4">
              <h3 class="text-sm font-bold text-slate-900">Personal Information</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                @for (field of profileFields(); track field.label) {
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
                <button (click)="openEditProfile()" class="btn btn-primary btn-sm normal-case font-medium">
                  Edit Profile
                </button>
              </div>
            </div>

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
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
                    <p class="text-sm font-bold text-slate-900">{{ resumeFileName() }}</p>
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
                <div class="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-10
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

            <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
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
              <div class="flex flex-col sm:flex-row gap-2">
                <input [(ngModel)]="newSkillInput" type="text"
                  placeholder="Add a skill (e.g. Angular, Python…)"
                  (keydown.enter)="addSkill(); $event.preventDefault()"
                  class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                <button (click)="addSkill()"
                  class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium px-4 w-full sm:w-auto">
                  Add
                </button>
              </div>
            </div>
          </div>
        }

        @if (activeSection() === 'interviews') {
          <div class="space-y-4">
            <h2 class="text-lg font-bold text-slate-900">My Interviews</h2>

            @if (upcomingInterviews().length === 0) {
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

            @for (iv of upcomingInterviews(); track iv.id) {
              <div class="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
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

      @if (toast()) {
        <div class="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg animate-toast">
          {{ toast() }}
        </div>
      }

      @if (editOpen()) {
        <div class="fixed inset-0 z-50 bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
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
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Current Role</label>
                <input [(ngModel)]="profileDraft.title" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Location</label>
                <input [(ngModel)]="profileDraft.location" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Years of Experience</label>
                <input [(ngModel)]="profileDraft.experienceYears" type="number" min="0" max="50" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
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
        <div class="fixed inset-0 z-50 bg-slate-900/35 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div class="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-xl p-4 sm:p-5 my-6 sm:my-0">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-base font-bold text-slate-900">Change Password</h2>
              <button (click)="passwordOpen.set(false)" class="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500">x</button>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Current Password</label>
                <input [(ngModel)]="passwordDraft.current" [type]="showCurrent() ? 'text' : 'password'" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">New Password</label>
                <input [(ngModel)]="passwordDraft.next" [type]="showNew() ? 'text' : 'password'" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Confirm Password</label>
                <input [(ngModel)]="passwordDraft.confirm" [type]="showConfirm() ? 'text' : 'password'" class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
              <div class="flex gap-2">
                <button (click)="toggleShowCurrent()" class="text-xs font-semibold text-indigo-600">Toggle current</button>
                <button (click)="toggleShowNew(); toggleShowConfirm()" class="text-xs font-semibold text-indigo-600">Toggle new</button>
              </div>
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
    </div>
  `
})
export class CandidateDashboardComponent implements OnInit {

  readonly auth = inject(AuthService);
  readonly router = inject(Router);
  private route = inject(ActivatedRoute);
  private applicationsApi = inject(ApplicationsApiService);
  private jobsApi = inject(JobsApiService);

  activeSection = signal<'dashboard' | 'applications' | 'recommendations' | 'profile' | 'interviews'>(
    this.route.snapshot.queryParamMap.get('tab') === 'profile' ? 'profile' : 'dashboard'
  );
  accountOpen = signal(false);
  toast = signal('');
  editOpen = signal(false);
  passwordOpen = signal(false);
  profileError = signal('');
  passwordError = signal('');
  showCurrent = signal(false);
  showNew = signal(false);
  showConfirm = signal(false);
  profileDraft = { name: '', company: '', phone: '', title: '', location: '', experienceYears: 0 };
  passwordDraft = { current: '', next: '', confirm: '' };

  readonly portalTabs = [
    { key: 'dashboard'    as const, label: 'Dashboard' },
    { key: 'applications' as const, label: 'My Applications' },
    { key: 'recommendations' as const, label: 'Job Recommendations' },
    { key: 'interviews'   as const, label: 'Interviews' },
    { key: 'profile'      as const, label: 'My Profile' },
  ];

  resumeUploaded = signal(false);
  newSkillInput  = '';
  candidateSkills = signal(this.auth.currentUser()?.skills ?? []);
  interestTags = signal<string[]>([]);
  searchHistory = signal<string[]>([]);
  bookmarkedJobs = signal<string[]>([]);
  newInterestInput = '';
  jobSearchInput = '';

  readonly firstName = computed(() => this.auth.userName().split(' ')[0] || 'there');
  readonly resumeFileName = computed(() =>
    `${this.auth.userName().trim().replace(/\s+/g, '_') || 'Candidate'}_Resume.pdf`
  );

  readonly profileCompletion = computed(() =>
    this.resumeUploaded() ? 100 : 75
  );

  addSkill(): void {
    const skill = this.newSkillInput.trim();

    if (skill && !this.candidateSkills().includes(skill)) {
      this.candidateSkills.update(list => [...list, skill]);
      this.saveSkills();
    }

    this.newSkillInput = '';
  }

  removeSkill(skill: string): void {
    this.candidateSkills.update(list => list.filter(item => item !== skill));
    this.saveSkills();
  }

  private saveSkills(): void {
    const user = this.auth.currentUser();
    if (user) this.auth.updateProfile({ ...user, skills: this.candidateSkills() });
  }

  addInterest(value = this.newInterestInput): void {
    const tag = value.trim();
    if (tag && !this.interestTags().some(item => item.toLowerCase() === tag.toLowerCase())) {
      this.interestTags.update(list => [...list, tag]);
    }
    this.newInterestInput = '';
  }

  removeInterest(tag: string): void {
    this.interestTags.update(list => list.filter(item => item !== tag));
  }

  trackSearch(): void {
    const term = this.jobSearchInput.trim();
    if (!term) return;
    this.searchHistory.update(list => [term, ...list.filter(item => item.toLowerCase() !== term.toLowerCase())].slice(0, 6));
    this.addInterest(term);
    this.jobSearchInput = '';
  }

  matchScore(job: JobRecommendation): number {
    const interests = [...this.interestTags(), ...this.searchHistory()].map(item => item.toLowerCase());
    const haystack = [job.title, job.company, job.location, job.type, ...job.tags].join(' ').toLowerCase();
    const hits = interests.filter(tag => haystack.includes(tag)).length;
    return Math.min(98, 55 + hits * 10 + (job.tags.some(tag => this.candidateSkills().includes(tag)) ? 8 : 0));
  }

  toggleBookmark(jobId: string): void {
    this.bookmarkedJobs.update(list => list.includes(jobId) ? list.filter(id => id !== jobId) : [...list, jobId]);
    this.showToast(this.bookmarkedJobs().includes(jobId) ? 'Job bookmarked.' : 'Bookmark removed.');
  }

  async applyToJob(job: JobRecommendation): Promise<void> {
    try {
      await this.applicationsApi.apply(job.id);
      this.applications.set(this.mapApplications(this.applicationsApi.applications()));
      this.showToast(`Applied to ${job.title}.`);
    } catch (error: any) {
      this.showToast(error?.error?.errors?.[0] ?? 'Unable to apply to this job.');
    }
  }

  logout(): void {
    this.accountOpen.set(false);
    this.auth.logout();
  }

  openEditProfile(): void {
    const user = this.auth.currentUser();
    this.profileDraft = {
      name: user?.name ?? '',
      company: user?.company ?? '',
      phone: user?.phone ?? '',
      title: user?.title ?? '',
      location: user?.location ?? '',
      experienceYears: user?.experienceYears ?? 0,
    };
    this.profileError.set('');
    this.accountOpen.set(false);
    this.editOpen.set(true);
  }

  saveProfile(): void {
    if (this.profileDraft.name.trim().length < 2) {
      this.profileError.set('Name must be at least 2 characters.');
      return;
    }
    this.auth.updateProfile({ ...this.profileDraft, skills: this.candidateSkills() });
    this.editOpen.set(false);
    this.showToast('Profile updated.');
  }

  openPasswordModal(): void {
    this.passwordDraft = { current: '', next: '', confirm: '' };
    this.passwordError.set('');
    this.accountOpen.set(false);
    this.passwordOpen.set(true);
  }

  savePassword(): void {
    if (this.passwordDraft.next.length < 6) {
      this.passwordError.set('New password must be at least 6 characters.');
      return;
    }
    if (this.passwordDraft.next !== this.passwordDraft.confirm) {
      this.passwordError.set('New password and confirmation do not match.');
      return;
    }
    const result = this.auth.changePassword(this.passwordDraft.current, this.passwordDraft.next);
    if (!result.success) {
      this.passwordError.set(result.message);
      return;
    }
    this.passwordOpen.set(false);
    this.showToast(result.message);
  }

  toggleAccountOpen(): void { this.accountOpen.set(!this.accountOpen()); }
  toggleShowCurrent(): void { this.showCurrent.set(!this.showCurrent()); }
  toggleShowNew(): void { this.showNew.set(!this.showNew()); }
  toggleShowConfirm(): void { this.showConfirm.set(!this.showConfirm()); }

  showToast(message: string): void {
    this.toast.set(message);
    setTimeout(() => this.toast.set(''), 2200);
  }

  readonly candidateStats = computed(() => [
    { label:'Applied', value:String(this.applications().length), color:'#64748B' },
    { label:'In Progress', value:String(this.activeApplications().length), color:'#4F46E5' },
    { label:'Interviews', value:String(this.applications().filter(a => a.currentStage === 'Interview').length), color:'#8B5CF6' },
    { label:'Offers', value:String(this.applications().filter(a => a.status === 'offered').length), color:'#10B981' },
  ]);

  readonly timelineStages = [
    { key:'applied',     label:'Applied',     shortLabel:'Applied'    },
    { key:'shortlisted', label:'Shortlisted', shortLabel:'Shortlisted'},
    { key:'assessment',  label:'Assessment',  shortLabel:'Assessment' },
    { key:'interview',   label:'Interview',   shortLabel:'Interview'  },
    { key:'hr_round',    label:'HR Round',    shortLabel:'HR'         },
    { key:'selected',    label:'Selected',    shortLabel:'Selected'   },
  ];

  readonly demoApplications: MyApplication[] = [
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
  readonly applications = signal<MyApplication[]>([]);

  readonly activeApplications = computed(() =>
    this.applications().filter(a => a.status === 'active')
  );

  readonly demoUpcomingInterviews: UpcomingInterview[] = [
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
  readonly upcomingInterviews = signal<UpcomingInterview[]>([]);

  readonly profileFields = computed(() => {
    const user = this.auth.currentUser();
    return [
      { label:'Full Name', type:'text', value:user?.name ?? '' },
      { label:'Email', type:'email', value:user?.email ?? '' },
      { label:'Phone', type:'tel', value:user?.phone ?? '' },
      { label:'Current Role', type:'text', value:user?.title ?? '' },
      { label:'Location', type:'text', value:user?.location ?? '' },
      { label:'Years of Experience', type:'number', value:String(user?.experienceYears ?? '') },
    ];
  });

  readonly mockJobs: JobRecommendation[] = [
    { id:'j1', title:'Senior Frontend Engineer', company:'Acme Cloud', location:'Bangalore Hybrid', type:'Full-time', salary:'INR 28-38 LPA', tags:['Frontend','Angular','TypeScript','RxJS'], posted:'today' },
    { id:'j2', title:'Angular UI Developer', company:'Nexora Labs', location:'Remote', type:'Full-time', salary:'INR 18-26 LPA', tags:['Frontend','Angular','Tailwind CSS','JavaScript'], posted:'1 day ago' },
    { id:'j3', title:'React Frontend Developer', company:'FinEdge', location:'Mumbai', type:'Full-time', salary:'INR 16-24 LPA', tags:['Frontend','React','TypeScript','Design Systems'], posted:'2 days ago' },
    { id:'j4', title:'Backend Engineer - Node.js', company:'StackMint', location:'Pune Hybrid', type:'Full-time', salary:'INR 20-30 LPA', tags:['Backend','Node.js','API','PostgreSQL'], posted:'today' },
    { id:'j5', title:'Java Backend Developer', company:'CoreBank Tech', location:'Chennai', type:'Full-time', salary:'INR 18-28 LPA', tags:['Backend','Java','Spring Boot','Microservices'], posted:'3 days ago' },
    { id:'j6', title:'Python API Engineer', company:'DataNest', location:'Remote', type:'Contract', salary:'INR 1.8L/month', tags:['Backend','Python','FastAPI','PostgreSQL'], posted:'4 days ago' },
    { id:'j7', title:'DevOps Engineer', company:'CloudBase Inc.', location:'Bangalore', type:'Full-time', salary:'INR 22-34 LPA', tags:['DevOps','AWS','Docker','Kubernetes'], posted:'1 day ago' },
    { id:'j8', title:'Site Reliability Engineer', company:'OpsFlow', location:'Remote', type:'Full-time', salary:'INR 25-40 LPA', tags:['DevOps','SRE','Kubernetes','Terraform'], posted:'5 days ago' },
    { id:'j9', title:'Cloud Platform Engineer', company:'InfraWorks', location:'Hyderabad', type:'Full-time', salary:'INR 24-36 LPA', tags:['DevOps','Azure','CI/CD','Linux'], posted:'today' },
    { id:'j10', title:'Product Designer', company:'PixelCraft', location:'Bangalore Hybrid', type:'Full-time', salary:'INR 16-25 LPA', tags:['Design','Figma','UX','Prototyping'], posted:'2 days ago' },
    { id:'j11', title:'UI Designer', company:'StudioLoop', location:'Remote', type:'Full-time', salary:'INR 12-20 LPA', tags:['Design','UI','Figma','Design Systems'], posted:'3 days ago' },
    { id:'j12', title:'UX Researcher', company:'HumanScale', location:'Delhi NCR', type:'Full-time', salary:'INR 14-22 LPA', tags:['Design','Research','UX','User Interviews'], posted:'6 days ago' },
    { id:'j13', title:'Data Analyst', company:'MetricMind', location:'Remote', type:'Full-time', salary:'INR 12-18 LPA', tags:['Data','SQL','Python','Dashboards'], posted:'today' },
    { id:'j14', title:'Data Engineer', company:'Lakehouse AI', location:'Pune', type:'Full-time', salary:'INR 22-35 LPA', tags:['Data','Spark','Python','ETL'], posted:'2 days ago' },
    { id:'j15', title:'Machine Learning Engineer', company:'VisionGrid', location:'Bangalore', type:'Full-time', salary:'INR 30-48 LPA', tags:['Data','ML','Python','MLOps'], posted:'4 days ago' },
    { id:'j16', title:'Full Stack Developer', company:'LaunchDesk', location:'Remote', type:'Full-time', salary:'INR 18-30 LPA', tags:['Frontend','Backend','Angular','Node.js'], posted:'1 day ago' },
    { id:'j17', title:'Frontend Architect', company:'ScaleSuite', location:'Mumbai Hybrid', type:'Full-time', salary:'INR 35-52 LPA', tags:['Frontend','Architecture','Angular','System Design'], posted:'5 days ago' },
    { id:'j18', title:'Platform UI Engineer', company:'DevTools Co.', location:'Remote', type:'Full-time', salary:'INR 24-36 LPA', tags:['Frontend','TypeScript','Performance','Design Systems'], posted:'today' },
  ];

  readonly recommendedJobs = computed(() =>
    this.jobsApi.jobs()
      .filter(job => job.status === 'open')
      .map(job => ({
        id: job.id,
        title: job.title,
        company: job.companyName || 'Company',
        location: job.location,
        type: job.type,
        salary: `${this.jobsApi.formatSalary(job.salaryMin)} - ${this.jobsApi.formatSalary(job.salaryMax)}`,
        tags: job.skills,
        posted: job.postedDate,
      }))
      .sort((a, b) => this.matchScore(b) - this.matchScore(a))
  );

  async ngOnInit(): Promise<void> {
    const [applications] = await Promise.all([
      this.applicationsApi.loadMine(),
      this.jobsApi.loadAll(),
    ]);
    this.applications.set(this.mapApplications(applications));
  }

  private mapApplications(applications: ApplicationDto[]): MyApplication[] {
    const stages = ['applied', 'shortlisted', 'assessment', 'interview', 'hr_round', 'selected'];
    return applications.map(application => {
      const stage = application.stage === 'hrround' ? 'hr_round' : application.stage;
      return {
      id: application.id,
      companyName: application.companyName,
      jobTitle: application.jobTitle,
      department: '',
      location: '',
      appliedDate: application.appliedDate,
      currentStage: stage === 'hr_round'
        ? 'HR Round'
        : stage.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase()),
      stageIndex: Math.max(0, stages.indexOf(stage)),
      status: stage === 'rejected'
        ? 'rejected'
        : stage === 'selected' ? 'offered' : 'active',
      lastUpdate: application.lastActivityDate,
      recruiterName: '',
      };
    });
  }

  getStatusClass(status: string): string {
    return {
      active:   'bg-indigo-100 text-indigo-700',
      offered:  'bg-emerald-100 text-emerald-700',
      rejected: 'bg-rose-100 text-rose-700',
    }[status] ?? 'bg-slate-100 text-slate-600';
  }
}
