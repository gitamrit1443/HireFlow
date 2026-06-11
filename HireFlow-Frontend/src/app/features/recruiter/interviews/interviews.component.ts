import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InterviewService } from '../../../core/services/interview.service';
import { CandidatesApiService } from '../../../core/services/candidates-api.service';
import { AvatarComponent }  from '../../../shared/components/avatar/avatar.component';
import { Interview, Interviewer, InterviewFeedback, ROUND_LABELS, ROUND_COLORS } from '../../../core/models/interview.model';


@Component({
  selector: 'app-interviews',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, AvatarComponent],
  template: `
    <div class="p-6 max-w-screen-xl mx-auto space-y-5">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-xl font-bold text-slate-900">Interviews</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ upcomingCount() }} upcoming · {{ completedCount() }} completed this week
          </p>
        </div>
        <button (click)="showScheduleModal.set(true)"
          class="btn btn-primary btn-sm normal-case font-medium self-start sm:self-auto">
          <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
          </svg>
          Schedule Interview
        </button>
      </div>

      <div class="flex gap-0 border-b border-slate-200">
        @for (tab of tabs; track tab.key) {
          <button (click)="activeTab.set(tab.key)"
            class="px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors duration-150 -mb-px"
            [ngClass]="activeTab() === tab.key
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'">
            {{ tab.label }}
            <span class="ml-1.5 text-xs px-1.5 py-0.5 rounded-full font-semibold"
                  [ngClass]="activeTab() === tab.key
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-slate-100 text-slate-500'">
              {{ tab.count() }}
            </span>
          </button>
        }
      </div>

      @if (activeTab() === 'upcoming') {
        <div class="space-y-6">
          @for (group of groupedUpcoming(); track group.date) {
            <div>
              <div class="flex items-center gap-3 mb-3">
                <span class="text-sm font-bold text-slate-900">
                  {{ interviewService.formatDateLabel(group.date) }}
                </span>
                <span class="text-xs text-slate-400 font-medium">
                  {{ formatFullDate(group.date) }}
                </span>
                <div class="flex-1 h-px bg-slate-200"></div>
                <span class="text-xs text-slate-400 font-medium">
                  {{ group.interviews.length }} {{ group.interviews.length === 1 ? 'interview' : 'interviews' }}
                </span>
              </div>

              <div class="space-y-3">
                @for (iv of group.interviews; track iv.id) {
                  <div class="bg-white rounded-xl border border-slate-200 p-5
                              hover:shadow-card-hover transition-shadow duration-200">
                    <div class="flex flex-col md:flex-row md:items-start gap-4">

                      <div class="flex-shrink-0 text-center w-16 pt-0.5">
                        <p class="text-base font-bold text-indigo-600 leading-tight">
                          {{ interviewService.formatTime(iv.startTime) }}
                        </p>
                        <p class="text-xs text-slate-400 font-medium mt-0.5">
                          {{ interviewService.formatTime(iv.endTime) }}
                        </p>
                        <div class="mt-1.5 w-px h-8 bg-slate-200 mx-auto"></div>
                        <p class="text-xs text-slate-400 mt-1">{{ iv.timezone }}</p>
                      </div>

                      <div class="flex-1 min-w-0">
                        <div class="flex items-start gap-3 mb-3">
                          <app-avatar [name]="iv.candidateName"
                                      [color]="iv.candidateColor" size="md"/>
                          <div class="flex-1 min-w-0">
                            <div class="flex flex-wrap items-center gap-2 mb-0.5">
                              <a [routerLink]="['/recruiter/candidates', iv.candidateId]"
                                 class="text-sm font-bold text-slate-900 hover:text-indigo-600
                                        transition-colors">
                                {{ iv.candidateName }}
                              </a>
                              <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                                    [ngClass]="getRoundClass(iv.round)">
                                {{ getRoundLabel(iv.round) }}
                              </span>
                              <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                                    [ngClass]="iv.mode === 'online'
                                      ? 'bg-blue-50 text-blue-600'
                                      : iv.mode === 'offline'
                                        ? 'bg-slate-100 text-slate-600'
                                        : 'bg-purple-50 text-purple-600'">
                                {{ iv.mode === 'online' ? '🔗 Online'
                                   : iv.mode === 'offline' ? '🏢 In-office'
                                   : '📞 Phone' }}
                              </span>
                            </div>
                            <p class="text-xs text-slate-500">
                              {{ iv.jobTitle }} · {{ iv.department }}
                            </p>
                          </div>
                        </div>

                        @if (iv.agenda) {
                          <div class="mb-3 flex items-start gap-2">
                            <svg class="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                            </svg>
                            <p class="text-xs text-slate-500 italic leading-relaxed">
                              {{ iv.agenda }}
                            </p>
                          </div>
                        }

                        <div class="flex items-center gap-2 mb-3">
                          <span class="text-xs text-slate-400 font-medium">Panel:</span>
                          <div class="flex -space-x-1.5">
                            @for (ir of iv.interviewers; track ir.id) {
                              <div class="w-6 h-6 rounded-full border-2 border-white
                                          flex items-center justify-center text-xs font-bold
                                          text-white flex-shrink-0"
                                   [style.backgroundColor]="ir.avatarColor"
                                   [title]="ir.name + ' — ' + ir.role">
                                {{ ir.name[0] }}
                              </div>
                            }
                          </div>
                          <span class="text-xs text-slate-500">
                            {{ getInterviewerNames(iv.interviewers) }}
                          </span>
                        </div>

                        <div class="flex flex-wrap items-center gap-2">
                          <!-- Jitsi Room Button -->
                          <button
                            (click)="joinJitsiRoom(iv.candidateName, iv.id)"
                            class="inline-flex items-center gap-1.5 text-xs font-semibold
                                   text-white bg-indigo-600 hover:bg-indigo-700
                                   px-3 py-1.5 rounded-lg transition-colors">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                            </svg>
                            🎥 Join Room
                          </button>
                          @if (iv.meetingLink) {
                            <a [href]="iv.meetingLink" target="_blank"
                               class="inline-flex items-center gap-1.5 text-xs font-semibold
                                      text-indigo-600 hover:text-indigo-700 bg-indigo-50
                                      hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors">
                              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                              </svg>
                              External Link
                            </a>
                          }
                          @if (iv.location) {
                            <span class="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg font-medium">
                              📍 {{ iv.location }}
                            </span>
                          }
                          <button (click)="openFeedbackForm(iv)"
                            class="ml-auto text-xs font-semibold text-slate-500
                                   hover:text-slate-700 border border-slate-200 bg-white
                                   hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                            + Add Feedback
                          </button>
                          <button (click)="interviewService.cancel(iv.id)"
                            class="text-xs font-semibold text-rose-500
                                   hover:text-rose-700 border border-rose-200 bg-rose-50
                                   hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors">
                            Cancel
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                }
              </div>
            </div>
          }

          @if (groupedUpcoming().length === 0) {
            <div class="bg-white rounded-xl border border-slate-200 py-16 text-center">
              <div class="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center
                          justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                </svg>
              </div>
              <h3 class="text-base font-semibold text-slate-900 mb-1">No upcoming interviews</h3>
              <p class="text-sm text-slate-500 mb-4 max-w-xs mx-auto">
                Schedule an interview with a shortlisted candidate.
              </p>
              <button (click)="showScheduleModal.set(true)"
                class="btn btn-primary btn-sm normal-case font-medium">
                Schedule Interview
              </button>
            </div>
          }
        </div>
      }

      @if (activeTab() === 'completed') {
        <div class="space-y-3">
          @for (iv of completedInterviews(); track iv.id) {
            <div class="bg-white rounded-xl border border-slate-200 p-5">
              <div class="flex items-start gap-4">
                <app-avatar [name]="iv.candidateName" [color]="iv.candidateColor" size="md"/>
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <a [routerLink]="['/recruiter/candidates', iv.candidateId]"
                       class="text-sm font-bold text-slate-900 hover:text-indigo-600">
                      {{ iv.candidateName }}
                    </a>
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                          [ngClass]="getRoundClass(iv.round)">
                      {{ getRoundLabel(iv.round) }}
                    </span>
                    @if (iv.feedback) {
                      <span class="text-xs font-semibold px-2 py-0.5 rounded-full
                                   bg-emerald-100 text-emerald-700">
                        ✓ Feedback submitted
                      </span>
                    } @else {
                      <span class="text-xs font-semibold px-2 py-0.5 rounded-full
                                   bg-amber-100 text-amber-700">
                        Pending feedback
                      </span>
                    }
                  </div>
                  <p class="text-xs text-slate-500 mb-2">
                    {{ iv.jobTitle }} · {{ formatFullDate(iv.scheduledDate) }} at
                    {{ interviewService.formatTime(iv.startTime) }}
                  </p>

                  @if (iv.feedback; as fb) {
                    <div class="bg-slate-50 rounded-lg p-3 mt-2">
                      <div class="flex items-center gap-4 mb-2">
                        @for (metric of feedbackMetrics(fb); track metric.label) {
                          <div class="text-center">
                            <p class="text-sm font-bold text-slate-900">{{ metric.value }}/10</p>
                            <p class="text-xs text-slate-500">{{ metric.label }}</p>
                          </div>
                        }
                        <div class="ml-auto">
                          <span class="text-xs font-bold px-2.5 py-1 rounded-full"
                                [ngClass]="getRecommendationClass(fb.recommendation)">
                            {{ formatRecommendation(fb.recommendation) }}
                          </span>
                        </div>
                      </div>
                      @if (fb.notes) {
                        <p class="text-xs text-slate-600 italic">"{{ fb.notes }}"</p>
                        <p class="text-xs text-slate-400 mt-1 font-medium">— {{ fb.submittedBy }}</p>
                      }
                    </div>
                  } @else {
                    <button (click)="openFeedbackForm(iv)"
                      class="btn btn-xs btn-primary normal-case font-medium mt-2">
                      Submit Feedback
                    </button>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }

      @if (showScheduleModal()) {
        <div class="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4"
             (click)="showScheduleModal.set(false)">
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh]
                      overflow-y-auto scrollbar-thin"
               (click)="$event.stopPropagation()">

            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h2 class="text-base font-bold text-slate-900">Schedule Interview</h2>
                <p class="text-xs text-slate-500 mt-0.5">Book a slot with a candidate</p>
              </div>
              <button (click)="showScheduleModal.set(false)"
                class="w-8 h-8 flex items-center justify-center rounded-lg
                       hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <form [formGroup]="scheduleForm" (ngSubmit)="submitSchedule()" class="p-6 space-y-4">

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Candidate <span class="text-rose-500">*</span>
                </label>
                <select formControlName="candidateId"
                  class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  [ngClass]="schedErr('candidateId') ? 'border-rose-300' : 'border-slate-200'">
                  <option value="">Select candidate…</option>
                  @for (c of candidatesApi.candidates(); track c.id) {
                    <option [value]="c.id">{{ c.name }} — {{ c.jobTitle }}</option>
                  }
                </select>
                @if (schedErr('candidateId')) {
                  <p class="text-xs text-rose-500 mt-1">Required.</p>
                }
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Round</label>
                  <select formControlName="round"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="screening">Screening</option>
                    <option value="technical">Technical</option>
                    <option value="system_design">System Design</option>
                    <option value="hr">HR Round</option>
                    <option value="leadership">Leadership</option>
                    <option value="final">Final</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Mode</label>
                  <select formControlName="mode"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="online">Online</option>
                    <option value="offline">In-office</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="col-span-1">
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                    Date <span class="text-rose-500">*</span>
                  </label>
                  <input formControlName="scheduledDate" type="date"
                    class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    [ngClass]="schedErr('scheduledDate') ? 'border-rose-300' : 'border-slate-200'"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">Start</label>
                  <input formControlName="startTime" type="time"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700 mb-1.5">End</label>
                  <input formControlName="endTime" type="time"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Meeting Link / Room
                </label>
                <input formControlName="meetingLink" type="text"
                  placeholder="https://meet.google.com/... or Conference Room 3B"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Interviewers
                </label>
                <div class="grid grid-cols-2 gap-2">
                  @for (ir of interviewService.interviewers; track ir.id) {
                    <label class="flex items-center gap-2.5 p-2.5 rounded-lg border
                                  border-slate-200 hover:bg-slate-50 cursor-pointer
                                  transition-colors">
                      <input type="checkbox" [value]="ir.id"
                        (change)="toggleInterviewer(ir.id)"
                        [checked]="selectedInterviewers().includes(ir.id)"
                        class="w-3.5 h-3.5 accent-indigo-600"/>
                      <div class="flex items-center gap-2 min-w-0">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center
                                    text-white text-xs font-bold flex-shrink-0"
                             [style.backgroundColor]="ir.avatarColor">
                          {{ ir.name[0] }}
                        </div>
                        <div class="min-w-0">
                          <p class="text-xs font-semibold text-slate-800 truncate">{{ ir.name }}</p>
                          <p class="text-xs text-slate-400 truncate">{{ ir.role }}</p>
                        </div>
                      </div>
                    </label>
                  }
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Agenda / Topics
                </label>
                <textarea formControlName="agenda" rows="2"
                  placeholder="e.g. System design, RxJS patterns, previous project walkthrough"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div class="flex gap-3 pt-2">
                <button type="button" (click)="showScheduleModal.set(false)"
                  class="flex-1 btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium">
                  Cancel
                </button>
                <button type="submit"
                  [disabled]="scheduleForm.invalid || isSubmittingSchedule()"
                  class="flex-1 btn btn-sm btn-primary normal-case font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed">
                  @if (isSubmittingSchedule()) {
                    <span class="loading loading-spinner loading-xs mr-1"></span>
                  }
                  Confirm Schedule
                </button>
              </div>

              @if (scheduleSuccess()) {
                <div class="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200
                            rounded-lg text-emerald-700 text-xs font-semibold">
                  ✓ Interview scheduled successfully!
                </div>
              }

            </form>
          </div>
        </div>
      }

      @if (feedbackInterview()) {
        <div class="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4"
             (click)="feedbackInterview.set(null)">
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh]
                      overflow-y-auto scrollbar-thin"
               (click)="$event.stopPropagation()">

            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h2 class="text-base font-bold text-slate-900">Submit Feedback</h2>
                <p class="text-xs text-slate-500 mt-0.5">
                  {{ feedbackInterview()!.candidateName }} · {{ getRoundLabel(feedbackInterview()!.round) }}
                </p>
              </div>
              <button (click)="feedbackInterview.set(null)"
                class="w-8 h-8 flex items-center justify-center rounded-lg
                       hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <form [formGroup]="feedbackForm" (ngSubmit)="submitFeedback()" class="p-6 space-y-5">

              <div>
                <p class="text-sm font-semibold text-slate-700 mb-3">Evaluation Scores (1–10)</p>
                <div class="space-y-4">
                  @for (metric of feedbackMetricDefs; track metric.ctrl) {
                    <div>
                      <div class="flex items-center justify-between mb-1.5">
                        <label class="text-xs font-semibold text-slate-600">{{ metric.label }}</label>
                        <span class="text-sm font-bold text-indigo-600">
                          {{ feedbackForm.get(metric.ctrl)?.value || 5 }}/10
                        </span>
                      </div>
                      <input type="range" [formControlName]="metric.ctrl"
                        min="1" max="10" step="1"
                        class="w-full h-2 bg-slate-200 rounded-lg appearance-none
                               cursor-pointer accent-indigo-600"/>
                    </div>
                  }
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Recommendation <span class="text-rose-500">*</span>
                </label>
                <div class="grid grid-cols-2 gap-2">
                  @for (rec of recommendations; track rec.value) {
                    <label class="flex items-center gap-2 p-2.5 rounded-lg border-2 cursor-pointer
                                  transition-all"
                           [ngClass]="feedbackForm.get('recommendation')?.value === rec.value
                             ? rec.activeClass
                             : 'border-slate-200 hover:border-slate-300'">
                      <input type="radio" formControlName="recommendation" [value]="rec.value"
                        class="accent-indigo-600"/>
                      <span class="text-xs font-bold">{{ rec.label }}</span>
                    </label>
                  }
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Strengths</label>
                <textarea formControlName="strengths" rows="2"
                  placeholder="What the candidate did well…"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">Concerns / Gaps</label>
                <textarea formControlName="concerns" rows="2"
                  placeholder="Areas for improvement or gaps…"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1.5">
                  Additional Notes
                </label>
                <textarea formControlName="notes" rows="2"
                  placeholder="Any other observations for the hiring team…"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white text-slate-900 placeholder:text-slate-400 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </textarea>
              </div>

              <div class="flex gap-3 pt-1">
                <button type="button" (click)="feedbackInterview.set(null)"
                  class="flex-1 btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium">
                  Cancel
                </button>
                <button type="submit"
                  [disabled]="feedbackForm.invalid || isSubmittingFeedback()"
                  class="flex-1 btn btn-sm btn-primary normal-case font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed">
                  @if (isSubmittingFeedback()) {
                    <span class="loading loading-spinner loading-xs mr-1"></span>
                  }
                  Submit Feedback
                </button>
              </div>

              @if (feedbackSuccess()) {
                <div class="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200
                            rounded-lg text-emerald-700 text-xs font-semibold">
                  ✓ Feedback submitted!
                </div>
              }

            </form>
          </div>
        </div>
      }

    </div>
  `
})
export class InterviewsComponent implements OnInit {

  readonly interviewService = inject(InterviewService);
  private router = inject(Router);
  readonly candidatesApi    = inject(CandidatesApiService);
  private  fb               = inject(FormBuilder);

  activeTab = signal<'upcoming' | 'completed'>('upcoming');

  async ngOnInit(): Promise<void> {
    await Promise.all([
      this.interviewService.load(),
      this.candidatesApi.loadAll(),
    ]);
  }

  readonly upcomingCount   = computed(() => this.interviewService.getUpcoming().length);
  readonly completedCount  = computed(() => this.interviewService.getCompleted().length);

  readonly tabs = [
    { key: 'upcoming'  as const, label: 'Upcoming',  count: this.upcomingCount },
    { key: 'completed' as const, label: 'Completed', count: this.completedCount },
  ];

  readonly groupedUpcoming = computed(() => {
    const upcoming = this.interviewService.getUpcoming();
    const map = new Map<string, Interview[]>();
    for (const iv of upcoming) {
      const arr = map.get(iv.scheduledDate) ?? [];
      arr.push(iv);
      map.set(iv.scheduledDate, arr);
    }
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, interviews]) => ({ date, interviews }));
  });

  readonly completedInterviews = computed(() => this.interviewService.getCompleted());

  showScheduleModal    = signal(false);
  isSubmittingSchedule = signal(false);
  scheduleSuccess      = signal(false);
  selectedInterviewers = signal<string[]>([]);

  scheduleForm: FormGroup = this.fb.group({
    candidateId:   ['', Validators.required],
    round:         ['technical'],
    mode:          ['online'],
    scheduledDate: ['', Validators.required],
    startTime:     ['10:00'],
    endTime:       ['11:00'],
    meetingLink:   [''],
    agenda:        [''],
  });

  schedErr(field: string): boolean {
    const ctrl = this.scheduleForm.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  toggleInterviewer(id: string): void {
    this.selectedInterviewers.update(list =>
      list.includes(id) ? list.filter(x => x !== id) : [...list, id]
    );
  }

  async submitSchedule(): Promise<void> {
    this.scheduleForm.markAllAsTouched();
    if (this.scheduleForm.invalid) return;

    this.isSubmittingSchedule.set(true);
    const v = this.scheduleForm.value;
    const candidate = this.candidatesApi.candidates().find(item => item.id === v.candidateId)!;
    const panelists = this.interviewService.interviewers
      .filter(ir => this.selectedInterviewers().includes(ir.id));

    const newInterview: Interview = {
      id: this.interviewService.generateId(),
      candidateId:    candidate.id,
      candidateName:  candidate.name,
      candidateColor: candidate.avatarColor,
      jobTitle:       candidate.jobTitle,
      jobId:          candidate.jobId,
      department:     candidate.department,
      round:          v.round,
      mode:           v.mode,
      status:         'scheduled',
      scheduledDate:  v.scheduledDate,
      startTime:      v.startTime,
      endTime:        v.endTime,
      timezone:       'IST',
      interviewers:   panelists,
      meetingLink:    v.meetingLink || ('https://meet.jit.si/hireflow-' + candidate.id + '-' + v.scheduledDate),
      agenda:         v.agenda || undefined,
    };

    try {
      await this.interviewService.add(newInterview);
      this.isSubmittingSchedule.set(false);
      this.scheduleSuccess.set(true);
      this.scheduleForm.reset({ round:'technical', mode:'online', startTime:'10:00', endTime:'11:00' });
      this.selectedInterviewers.set([]);
      setTimeout(() => {
        this.showScheduleModal.set(false);
        this.scheduleSuccess.set(false);
      }, 1200);
    } catch {
      this.isSubmittingSchedule.set(false);
    }
  }

  feedbackInterview    = signal<Interview | null>(null);
  isSubmittingFeedback = signal(false);
  feedbackSuccess      = signal(false);

  readonly feedbackMetricDefs = [
    { label:'Technical Skill',    ctrl:'technicalScore' },
    { label:'Communication',      ctrl:'communicationScore' },
    { label:'Problem Solving',    ctrl:'problemSolvingScore' },
    { label:'Culture Fit',        ctrl:'cultureFitScore' },
  ];

  readonly recommendations = [
    { value:'strong_hire', label:'Strong Hire', activeClass:'border-emerald-400 bg-emerald-50 text-emerald-700' },
    { value:'hire',        label:'Hire',        activeClass:'border-blue-400 bg-blue-50 text-blue-700' },
    { value:'maybe',       label:'Maybe',       activeClass:'border-amber-400 bg-amber-50 text-amber-700' },
    { value:'no_hire',     label:'No Hire',     activeClass:'border-rose-400 bg-rose-50 text-rose-700' },
  ];

  feedbackForm: FormGroup = this.fb.group({
    technicalScore:     [7],
    communicationScore: [7],
    problemSolvingScore:[7],
    cultureFitScore:    [7],
    recommendation:     ['', Validators.required],
    strengths:          [''],
    concerns:           [''],
    notes:              [''],
  });

  openFeedbackForm(iv: Interview): void {
    this.feedbackInterview.set(iv);
    this.feedbackForm.reset({
      technicalScore:7, communicationScore:7, problemSolvingScore:7, cultureFitScore:7,
    });
  }

  async submitFeedback(): Promise<void> {
    this.feedbackForm.markAllAsTouched();
    if (this.feedbackForm.invalid || !this.feedbackInterview()) return;

    this.isSubmittingFeedback.set(true);
    const v  = this.feedbackForm.value;
    const iv = this.feedbackInterview()!;

    const feedback: InterviewFeedback = {
      interviewId:         iv.id,
      submittedBy:         'Rahul Mehta',
      submittedAt:         new Date().toISOString(),
      technicalScore:      v.technicalScore,
      communicationScore:  v.communicationScore,
      problemSolvingScore: v.problemSolvingScore,
      cultureFitScore:     v.cultureFitScore,
      overallScore:        Math.round((v.technicalScore + v.communicationScore + v.problemSolvingScore + v.cultureFitScore) / 4),
      recommendation:      v.recommendation,
      strengths:           v.strengths,
      concerns:            v.concerns,
      notes:               v.notes,
    };

    try {
      await this.interviewService.submitFeedback(iv.id, feedback);
      this.isSubmittingFeedback.set(false);
      this.feedbackSuccess.set(true);
      setTimeout(() => {
        this.feedbackInterview.set(null);
        this.feedbackSuccess.set(false);
      }, 1200);
    } catch {
      this.isSubmittingFeedback.set(false);
    }
  }
  getInterviewerNames(interviewers: Interviewer[] = []): string {
    return interviewers.map(interviewer => interviewer.name).join(', ');
  }

  getRoundLabel(round: string): string {
    return ROUND_LABELS[round as keyof typeof ROUND_LABELS] ?? round;
  }

  getRoundClass(round: string): string {
    return ROUND_COLORS[round as keyof typeof ROUND_COLORS] ?? 'bg-slate-100 text-slate-600';
  }

  getRecommendationClass(rec: string): string {
    return {
      strong_hire:'bg-emerald-100 text-emerald-700',
      hire:       'bg-blue-100 text-blue-700',
      maybe:      'bg-amber-100 text-amber-700',
      no_hire:    'bg-rose-100 text-rose-700',
    }[rec] ?? 'bg-slate-100 text-slate-600';
  }

  formatRecommendation(rec: string): string {
    return { strong_hire:'Strong Hire', hire:'Hire', maybe:'Maybe', no_hire:'No Hire' }[rec] ?? rec;
  }

  feedbackMetrics(fb: InterviewFeedback) {
    return [
      { label:'Technical',    value: fb.technicalScore },
      { label:'Comms',        value: fb.communicationScore },
      { label:'Problem Solv.',value: fb.problemSolvingScore },
      { label:'Culture',      value: fb.cultureFitScore },
    ];
  }

  formatFullDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', {
      weekday:'short', month:'short', day:'numeric', year:'numeric'
    });
  }
  joinJitsiRoom(candidateName: string, interviewId: string): void {
    const slug = candidateName.toLowerCase().split(' ').join('-');
    const roomId = 'hireflow-' + interviewId + '-' + slug;
    this.router.navigate(['/recruiter/interviews/room', roomId], {
      queryParams: { candidate: candidateName }
    });
  }

}
