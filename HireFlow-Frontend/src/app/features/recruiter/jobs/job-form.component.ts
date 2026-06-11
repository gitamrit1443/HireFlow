import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { JobsApiService, JobPayload } from '../../../core/services/jobs-api.service';
import { AuthService } from '../../../core/services/auth.service';
import { JobStatus, JobType } from '../../../core/models/job.model';


@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  template: `
    <div class="p-6 max-w-3xl mx-auto">

      <div class="mb-6">
        <a routerLink="/recruiter/jobs"
           class="inline-flex items-center gap-1.5 text-sm text-slate-500
                  hover:text-slate-700 mb-3 transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          Back to Jobs
        </a>
        <h1 class="text-lg font-bold text-slate-900">
          {{ isEditMode() ? 'Edit Job Posting' : 'Post a New Job' }}
        </h1>
        <p class="text-sm text-slate-500 mt-0.5">
          {{ isEditMode() ? 'Update the details for this role.' : 'Fill in the details to publish a new role.' }}
        </p>
      </div>

      <form [formGroup]="jobForm" (ngSubmit)="onSubmit()">

        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Role Details
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Job Title <span class="text-rose-500">*</span>
              </label>
              <input type="text" formControlName="title"
                placeholder="e.g. Senior Frontend Engineer"
                class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                       placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                [class.border-rose-400]="isInvalid('title')"
                [class.border-slate-200]="!isInvalid('title')" />
              @if (isInvalid('title')) {
                <p class="text-xs text-rose-500 mt-1">Job title is required.</p>
              }
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Department <span class="text-rose-500">*</span>
              </label>
              <select formControlName="department"
                class="w-full px-3 py-2 text-sm border rounded-lg bg-white text-slate-900
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
                [class.border-rose-400]="isInvalid('department')"
                [class.border-slate-200]="!isInvalid('department')">
                <option value="">Select department…</option>
                @for (dept of departments; track dept) {
                  <option [value]="dept">{{ dept }}</option>
                }
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Location <span class="text-rose-500">*</span>
              </label>
              <input type="text" formControlName="location"
                placeholder="e.g. Bangalore, IN (Hybrid)"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Employment Type
              </label>
              <div class="grid grid-cols-2 gap-2">
                @for (type of jobTypes; track type.value) {
                  <label class="flex items-center gap-2 p-2.5 border rounded-lg cursor-pointer
                                transition-colors duration-150"
                         [class.border-indigo-500]="jobForm.get('type')?.value === type.value"
                         [class.bg-indigo-50]="jobForm.get('type')?.value === type.value"
                         [class.border-slate-200]="jobForm.get('type')?.value !== type.value">
                    <input type="radio" formControlName="type" [value]="type.value"
                           class="accent-indigo-600" />
                    <span class="text-xs font-medium text-slate-700">{{ type.label }}</span>
                  </label>
                }
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Number of Openings
              </label>
              <input type="number" formControlName="openings" min="1"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Experience &amp; Compensation
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Experience Required
              </label>
              <input type="text" formControlName="experience"
                placeholder="e.g. 3–6 years"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Min Salary (₹)
              </label>
              <input type="number" formControlName="salaryMin" min="0"
                placeholder="1500000"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Max Salary (₹)
              </label>
              <input type="number" formControlName="salaryMax" min="0"
                placeholder="2500000"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Required Skills
          </h2>

          <div class="flex flex-wrap gap-2 mb-3 min-h-[32px]">
            @for (skill of skillsArray.controls; track $index) {
              <span class="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1
                           bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                {{ skill.value }}
                <button type="button" (click)="removeSkill($index)"
                  class="w-4 h-4 flex items-center justify-center rounded-full
                         hover:bg-indigo-200 transition-colors duration-150 text-indigo-500">
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </span>
            }
            @if (skillsArray.length === 0) {
              <span class="text-xs text-slate-400 py-1">No skills added yet.</span>
            }
          </div>

          <div class="flex gap-2">
            <input type="text" [(ngModel)]="newSkillInput" [ngModelOptions]="{ standalone: true }"
              placeholder="Type a skill and press Enter or Add"
              (keydown.enter)="$event.preventDefault(); addSkill()"
              class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                     text-slate-900 placeholder:text-slate-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="button" (click)="addSkill()"
              class="px-4 py-2 text-sm font-medium border border-slate-200 text-slate-700
                     bg-white rounded-lg hover:bg-slate-50 transition-colors duration-150">
              Add
            </button>
          </div>
          <p class="text-xs text-slate-400 mt-1.5">
            Add 3–8 skills. These appear as searchable tags on the job card.
          </p>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Job Description
          </h2>
          <textarea formControlName="description" rows="6"
            placeholder="Describe the role, responsibilities, and requirements…"
            class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                   text-slate-900 placeholder:text-slate-400 resize-none
                   focus:outline-none focus:ring-2 focus:ring-indigo-500">
          </textarea>
          <div class="flex items-center justify-between mt-1">
            @if (isInvalid('description')) {
              <p class="text-xs text-rose-500">Description is required.</p>
            } @else {
              <span></span>
            }
            <span class="text-xs text-slate-400">
              {{ jobForm.get('description')?.value?.length || 0 }} chars
            </span>
          </div>
        </div>


        <div class="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h2 class="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Publishing Settings
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">Status</label>
              <div class="flex gap-2">
                @for (s of statusOptions; track s.value) {
                  <label class="flex-1 flex items-center justify-center gap-1.5 py-2
                                border rounded-lg cursor-pointer text-xs font-medium transition-colors"
                         [class.border-indigo-500]="jobForm.get('status')?.value === s.value"
                         [class.bg-indigo-50]="jobForm.get('status')?.value === s.value"
                         [class.text-indigo-700]="jobForm.get('status')?.value === s.value"
                         [class.border-slate-200]="jobForm.get('status')?.value !== s.value"
                         [class.text-slate-600]="jobForm.get('status')?.value !== s.value">
                    <input type="radio" formControlName="status" [value]="s.value" class="sr-only" />
                    {{ s.label }}
                  </label>
                }
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1.5">
                Application Deadline <span class="text-slate-400 font-normal">(optional)</span>
              </label>
              <input type="date" formControlName="closingDate"
                class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

          </div>
        </div>


        <div class="flex items-center justify-between bg-white rounded-xl border border-slate-200
                    px-6 py-4 sticky bottom-4 shadow-lg">
          <div>
            @if (formSubmitted() && jobForm.invalid) {
              <p class="text-xs text-rose-500 font-medium">
                Please fix the errors above before submitting.
              </p>
            } @else {
              <p class="text-xs text-slate-400">
                All fields marked <span class="text-rose-500">*</span> are required.
              </p>
            }
          </div>
          <div class="flex items-center gap-2">
            <a routerLink="/recruiter/jobs"
               class="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200
                      rounded-lg hover:bg-slate-50 transition-colors duration-150">
              Cancel
            </a>
            <button type="submit"
              class="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg
                     hover:bg-indigo-700 transition-colors duration-150 disabled:opacity-50"
              [disabled]="formSubmitting()">
              @if (formSubmitting()) {
                <span class="flex items-center gap-2">
                  <span class="w-3.5 h-3.5 border-2 border-white/30 border-t-white
                               rounded-full animate-spin"></span>
                  Saving…
                </span>
              } @else {
                {{ isEditMode() ? 'Save Changes' : 'Post Job' }}
              }
            </button>
          </div>
        </div>

      </form>
    </div>
  `
})
export class JobFormComponent implements OnInit {
  private fb       = inject(FormBuilder);
  private router   = inject(Router);
  private route    = inject(ActivatedRoute);
  private jobsApi  = inject(JobsApiService);
  private auth     = inject(AuthService);
  private jobId: string | null = null;

  isEditMode    = signal(false);
  formSubmitted = signal(false);
  formSubmitting = signal(false);
  newSkillInput  = '';

  jobForm = this.fb.group({
    title:       ['', [Validators.required, Validators.minLength(3)]],
    department:  ['', Validators.required],
    location:    ['', Validators.required],
    type:        ['full-time'],
    openings:    [1, [Validators.required, Validators.min(1)]],
    experience:  [''],
    salaryMin:   [0],
    salaryMax:   [0],
    skills:      this.fb.array([]),   // Dynamic FormArray
    description: ['', Validators.required],
    status:      ['open'],
    closingDate: [''],
  });

  readonly departments  = ['Engineering', 'Design', 'Infrastructure', 'Data', 'Product', 'Quality'];
  readonly jobTypes     = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'remote',    label: 'Remote'    },
    { value: 'contract',  label: 'Contract'  },
  ];
  readonly statusOptions = [
    { value: 'open',  label: 'Publish' },
    { value: 'draft', label: 'Draft'   },
  ];

  get skillsArray() {
    return this.jobForm.get('skills') as FormArray;
  }

  async ngOnInit(): Promise<void> {
    this.jobId = this.route.snapshot.paramMap.get('id');
    if (this.jobId) {
      this.isEditMode.set(true);
      const job = await this.jobsApi.getById(this.jobId);
      if (job) {
        this.jobForm.patchValue(job);
        job.skills.forEach(skill => this.skillsArray.push(this.fb.control(skill)));
      }
    }
  }

  addSkill(): void {
    const val = this.newSkillInput.trim();
    if (!val) return;
    const exists = this.skillsArray.controls.some(c => c.value.toLowerCase() === val.toLowerCase());
    if (!exists) {
      this.skillsArray.push(this.fb.control(val));
    }
    this.newSkillInput = '';
  }

  removeSkill(index: number): void {
    this.skillsArray.removeAt(index);
  }

  isInvalid(field: string): boolean {
    const c = this.jobForm.get(field);
    return !!(this.formSubmitted() && c?.invalid);
  }

  async onSubmit(): Promise<void> {
    this.formSubmitted.set(true);
    if (this.jobForm.invalid) return;

    this.formSubmitting.set(true);
    try {
      const value = this.jobForm.getRawValue();
      const payload: JobPayload = {
        title: value.title ?? '',
        department: value.department ?? '',
        location: value.location ?? '',
        type: (value.type ?? 'full-time') as JobType,
        openings: value.openings ?? 1,
        experience: value.experience ?? '',
        salaryMin: value.salaryMin ?? 0,
        salaryMax: value.salaryMax ?? 0,
        currency: 'INR',
        skills: this.skillsArray.getRawValue(),
        description: value.description ?? '',
        status: (value.status ?? 'draft') as JobStatus,
        closingDate: value.closingDate || null,
        hiringManager: this.auth.userName() || 'Recruiter',
      };
      if (this.jobId) await this.jobsApi.update(this.jobId, payload);
      else await this.jobsApi.create(payload);
      this.formSubmitting.set(false);
      await this.router.navigate(['/recruiter/jobs']);
    } catch {
      this.formSubmitting.set(false);
    }
  }
}
