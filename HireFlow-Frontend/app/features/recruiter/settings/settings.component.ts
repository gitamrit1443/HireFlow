import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AvatarComponent],
  template: `
    <div class="p-6 max-w-4xl mx-auto space-y-5">

      <div>
        <h1 class="text-xl font-bold text-slate-900">Settings</h1>
        <p class="text-sm text-slate-500 mt-0.5">Manage your account and workspace preferences</p>
      </div>

      <div class="flex gap-0 border-b border-slate-200">
        @for (tab of tabs; track tab.key) {
          <button (click)="activeTab.set(tab.key)"
            class="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border-b-2
                   transition-colors duration-150 -mb-px"
            [ngClass]="activeTab() === tab.key
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="tab.icon"/>
            </svg>
            {{ tab.label }}
          </button>
        }
      </div>

      @if (activeTab() === 'profile') {
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div class="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <div class="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center
                        mx-auto mb-3 text-white text-2xl font-bold shadow-md">
              RM
            </div>
            <p class="text-sm font-bold text-slate-900 mb-0.5">Rahul Mehta</p>
            <p class="text-xs text-slate-500 mb-4">Senior Recruiter</p>
            <button class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                           hover:bg-slate-50 normal-case font-medium w-full">
              Change Photo
            </button>
          </div>

          <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4">Personal Information</h2>
            <form [formGroup]="profileForm" (ngSubmit)="saveProfile()" class="space-y-4">

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
                  <input formControlName="firstName" type="text"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
                  <input formControlName="lastName" type="text"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">Work Email</label>
                <input formControlName="email" type="email"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"/>
                <p class="text-xs text-slate-400 mt-1">
                  Contact admin to change your email address.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Role / Title</label>
                  <input formControlName="role" type="text" placeholder="e.g. Senior Recruiter"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">Timezone</label>
                  <select formControlName="timezone"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    @for (tz of timezones; track tz.value) {
                      <option [value]="tz.value">{{ tz.label }}</option>
                    }
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                  Department
                </label>
                <select formControlName="department"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Talent Acquisition</option>
                  <option>Human Resources</option>
                  <option>Engineering</option>
                  <option>Product</option>
                </select>
              </div>

              <div class="flex items-center justify-between pt-2">
                @if (profileSaved()) {
                  <span class="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Changes saved successfully
                  </span>
                } @else {
                  <span></span>
                }
                <button type="submit"
                  class="btn btn-primary btn-sm normal-case font-medium">
                  Save Changes
                </button>
              </div>

            </form>
          </div>

        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-4">Change Password</h2>
          <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @for (field of passwordFields; track field.label) {
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                  {{ field.label }}
                </label>
                <input [type]="field.type" [placeholder]="field.placeholder"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
            }
            <div class="md:col-span-3 flex justify-end">
              <button type="button"
                class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                       hover:bg-slate-50 normal-case font-medium">
                Update Password
              </button>
            </div>
          </form>
        </div>
      }

      @if (activeTab() === 'team') {
        <div class="space-y-5">

          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4">Invite Team Member</h2>
            <div class="flex gap-3">
              <input [(ngModel)]="inviteEmail" type="email"
                placeholder="colleague&#64;company.com"
                class="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              <select [(ngModel)]="inviteRole"
                class="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white
                       text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="recruiter">Recruiter</option>
                <option value="hiring_manager">Hiring Manager</option>
                <option value="interviewer">Interviewer</option>
                <option value="admin">Admin</option>
              </select>
              <button (click)="sendInvite()"
                class="btn btn-primary btn-sm normal-case font-medium px-5">
                Send Invite
              </button>
            </div>
            @if (inviteSent()) {
              <p class="text-xs text-emerald-600 font-semibold mt-2 flex items-center gap-1.5">
                ✓ Invite sent to {{ lastInvitedEmail() }}
              </p>
            }
          </div>

          <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-slate-100">
              <h2 class="text-sm font-bold text-slate-900">Team Members</h2>
              <p class="text-xs text-slate-500 mt-0.5">{{ teamMembers.length }} members</p>
            </div>
            <table class="w-full">
              <thead>
                <tr class="border-b border-slate-100 bg-slate-50/60">
                  <th class="text-left px-6 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider">Member</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider">Role</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider">Status</th>
                  <th class="text-left px-4 py-3 text-xs font-bold text-slate-500
                             uppercase tracking-wider hidden md:table-cell">Joined</th>
                  <th class="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                @for (member of teamMembers; track member.email) {
                  <tr class="hover:bg-slate-50/50 transition-colors group">
                    <td class="px-6 py-3.5">
                      <div class="flex items-center gap-3">
                        <app-avatar [name]="member.name" [color]="member.color" size="sm"/>
                        <div>
                          <p class="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            {{ member.name }}
                            @if (member.isYou) {
                              <span class="text-xs bg-indigo-100 text-indigo-600
                                           px-1.5 py-0.5 rounded font-semibold">You</span>
                            }
                          </p>
                          <p class="text-xs text-slate-500">{{ member.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3.5">
                      <span class="text-xs font-semibold px-2 py-1 rounded-full"
                            [ngClass]="getRoleBadge(member.role)">
                        {{ member.role }}
                      </span>
                    </td>
                    <td class="px-4 py-3.5">
                      <div class="flex items-center gap-1.5">
                        <div class="w-1.5 h-1.5 rounded-full"
                             [ngClass]="member.status === 'active' ? 'bg-emerald-500' : 'bg-slate-300'">
                        </div>
                        <span class="text-xs text-slate-600 capitalize">{{ member.status }}</span>
                      </div>
                    </td>
                    <td class="px-4 py-3.5 hidden md:table-cell">
                      <span class="text-xs text-slate-500">{{ member.joinedDate }}</span>
                    </td>
                    <td class="px-4 py-3.5">
                      @if (!member.isYou) {
                        <button class="text-xs text-rose-500 hover:text-rose-700 font-semibold
                                       opacity-0 group-hover:opacity-100 transition-opacity">
                          Remove
                        </button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      }

      @if (activeTab() === 'notifications') {
        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">Notification Preferences</h2>
          <p class="text-xs text-slate-500 mb-6">
            Control when and how HireFlow notifies you.
          </p>

          <div class="space-y-0 divide-y divide-slate-100">
            @for (group of notificationGroups; track group.title) {
              <div class="pt-5 pb-3 first:pt-0">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {{ group.title }}
                </p>
              </div>
              @for (item of group.items; track item.key) {
                <div class="py-3.5 flex items-center justify-between">
                  <div class="flex-1 min-w-0 pr-8">
                    <p class="text-sm font-semibold text-slate-800">{{ item.label }}</p>
                    <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">{{ item.desc }}</p>
                  </div>
                  <label class="flex items-center gap-2 cursor-pointer flex-shrink-0">
                    <input type="checkbox"
                      [(ngModel)]="notifState[item.key]"
                      class="toggle toggle-sm toggle-primary"/>
                  </label>
                </div>
              }
            }
          </div>

          <div class="flex justify-end mt-5 pt-4 border-t border-slate-100">
            <button class="btn btn-primary btn-sm normal-case font-medium">
              Save Preferences
            </button>
          </div>
        </div>
      }

      @if (activeTab() === 'workspace') {
        <div class="space-y-5">

          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <h2 class="text-sm font-bold text-slate-900 mb-4">Company Settings</h2>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                    Company Name
                  </label>
                  <input type="text" value="Acme Technologies Pvt Ltd"
                    class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                    Industry
                  </label>
                  <select class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                                 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Software / SaaS</option>
                    <option>Fintech</option>
                    <option>E-commerce</option>
                    <option>Healthcare</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-600 mb-1.5">
                  Company Website
                </label>
                <input type="url" value="https://acmetek.in"
                  class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-sm font-bold text-slate-900">Hiring Pipeline Stages</h2>
                <p class="text-xs text-slate-500 mt-0.5">
                  Customize the stages candidates move through
                </p>
              </div>
              <button class="btn btn-xs btn-ghost border border-slate-200 text-slate-600
                             hover:bg-slate-50 normal-case font-medium">
                + Add Stage
              </button>
            </div>
            <div class="space-y-2">
              @for (stage of pipelineStages; track stage.key) {
                <div class="flex items-center gap-3 p-3 rounded-lg border border-slate-100
                            bg-slate-50 hover:bg-white hover:border-slate-200 transition-all group">
                  <svg class="w-4 h-4 text-slate-300 flex-shrink-0 cursor-grab"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                  </svg>
                  <div class="w-3 h-3 rounded-full flex-shrink-0"
                       [style.backgroundColor]="stage.color"></div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800">{{ stage.label }}</p>
                    <p class="text-xs text-slate-400">{{ stage.desc }}</p>
                  </div>
                  <label class="cursor-pointer flex-shrink-0">
                    <input type="checkbox" [checked]="stage.active"
                      class="toggle toggle-xs toggle-primary"/>
                  </label>
                </div>
              }
            </div>
          </div>

          <div class="bg-white rounded-xl border border-rose-200 p-6">
            <h2 class="text-sm font-bold text-rose-700 mb-1">Danger Zone</h2>
            <p class="text-xs text-slate-500 mb-4">
              These actions are irreversible. Proceed with caution.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <button class="btn btn-xs btn-ghost border border-rose-200 text-rose-600
                             hover:bg-rose-50 normal-case font-medium">
                Archive All Jobs
              </button>
              <button class="btn btn-xs btn-ghost border border-rose-200 text-rose-600
                             hover:bg-rose-50 normal-case font-medium">
                Export All Data
              </button>
              <button class="btn btn-xs btn-ghost border border-rose-200 text-rose-600
                             hover:bg-rose-50 normal-case font-medium">
                Delete Workspace
              </button>
            </div>
          </div>
        </div>
      }

    </div>
  `
})
export class SettingsComponent {

  private fb = inject(FormBuilder);

  activeTab  = signal<'profile' | 'team' | 'notifications' | 'workspace'>('profile');
  profileSaved = signal(false);
  inviteEmail  = '';
  inviteRole   = 'recruiter';
  inviteSent   = signal(false);
  lastInvitedEmail = signal('');

  readonly tabs = [
    { key: 'profile'       as const, label: 'Profile',       icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
    { key: 'team'          as const, label: 'Team',           icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
    { key: 'notifications' as const, label: 'Notifications',  icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' },
    { key: 'workspace'     as const, label: 'Workspace',      icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
  ];

  profileForm: FormGroup = this.fb.group({
    firstName:  ['Rahul', Validators.required],
    lastName:   ['Mehta', Validators.required],
    email:      [{ value: 'rahul.mehta@acmetek.in', disabled: true }],
    role:       ['Senior Recruiter'],
    timezone:   ['Asia/Kolkata'],
    department: ['Talent Acquisition'],
  });

  readonly timezones = [
    { value:'Asia/Kolkata',      label:'IST — India Standard Time (UTC+5:30)' },
    { value:'Asia/Singapore',    label:'SGT — Singapore Time (UTC+8)' },
    { value:'Europe/London',     label:'GMT — Greenwich Mean Time (UTC+0)' },
    { value:'America/New_York',  label:'EST — Eastern Standard Time (UTC-5)' },
    { value:'America/Los_Angeles',label:'PST — Pacific Standard Time (UTC-8)' },
  ];

  readonly passwordFields = [
    { label:'Current Password', type:'password', placeholder:'Enter current password' },
    { label:'New Password',     type:'password', placeholder:'Min 8 characters' },
    { label:'Confirm Password', type:'password', placeholder:'Repeat new password' },
  ];

  saveProfile(): void {
    this.profileSaved.set(true);
    setTimeout(() => this.profileSaved.set(false), 2500);
  }

  readonly teamMembers = [
    { name:'Rahul Mehta',   email:'rahul.mehta@acmetek.in',  color:'#4F46E5', role:'Admin',           status:'active',  joinedDate:'Jan 2024', isYou:true },
    { name:'Sneha Verma',   email:'sneha.verma@acmetek.in',  color:'#10B981', role:'Recruiter',       status:'active',  joinedDate:'Feb 2024', isYou:false },
    { name:'Divya Pillai',  email:'divya.pillai@acmetek.in', color:'#EC4899', role:'Hiring Manager',  status:'active',  joinedDate:'Jan 2024', isYou:false },
    { name:'Vikash Anand',  email:'vikash.anand@acmetek.in', color:'#F59E0B', role:'Interviewer',     status:'active',  joinedDate:'Mar 2024', isYou:false },
    { name:'Neha Kapoor',   email:'neha.kapoor@acmetek.in',  color:'#8B5CF6', role:'Interviewer',     status:'active',  joinedDate:'Mar 2024', isYou:false },
    { name:'Aryan Shah',    email:'aryan.shah@acmetek.in',   color:'#0EA5E9', role:'HR BP',           status:'active',  joinedDate:'Apr 2024', isYou:false },
    { name:'Priya Iyer',    email:'priya.iyer@acmetek.in',   color:'#84CC16', role:'Recruiter',       status:'invited', joinedDate:'Invited',  isYou:false },
  ];

  getRoleBadge(role: string): string {
    const map: Record<string, string> = {
      'Admin':           'bg-rose-100 text-rose-700',
      'Recruiter':       'bg-indigo-100 text-indigo-700',
      'Hiring Manager':  'bg-violet-100 text-violet-700',
      'Interviewer':     'bg-amber-100 text-amber-700',
      'HR BP':           'bg-emerald-100 text-emerald-700',
    };
    return map[role] ?? 'bg-slate-100 text-slate-600';
  }

  sendInvite(): void {
    if (!this.inviteEmail.trim()) return;
    this.lastInvitedEmail.set(this.inviteEmail);
    this.inviteEmail = '';
    this.inviteSent.set(true);
    setTimeout(() => this.inviteSent.set(false), 2500);
  }

  notifState: Record<string, boolean> = {
    new_application: true,
    stage_moved:     true,
    interview_today: true,
    feedback_due:    true,
    offer_accepted:  true,
    offer_declined:  false,
    weekly_digest:   true,
    product_updates: false,
    app_new_app:     true,
    app_feedback:    true,
    app_mentions:    true,
    app_interviews:  true,
  };

  readonly notificationGroups = [
    {
      title: 'Email Notifications',
      items: [
        { key:'new_application', label:'New Applications',   desc:'When a candidate applies to one of your open roles.' },
        { key:'stage_moved',     label:'Stage Changes',      desc:'When a candidate is moved to a new pipeline stage.' },
        { key:'interview_today', label:'Interview Reminders',desc:'1 hour before a scheduled interview starts.' },
        { key:'feedback_due',    label:'Feedback Reminders', desc:'When an interview is completed and feedback is pending.' },
        { key:'offer_accepted',  label:'Offer Accepted',     desc:'When a candidate accepts an offer letter.' },
        { key:'weekly_digest',   label:'Weekly Digest',      desc:'Summary of hiring activity every Monday morning.' },
        { key:'product_updates', label:'Product Updates',    desc:'New features and platform announcements.' },
      ]
    },
    {
      title: 'In-App Notifications',
      items: [
        { key:'app_new_app',    label:'New Applications',    desc:'Real-time badge when candidates apply.' },
        { key:'app_feedback',   label:'Feedback Submitted',  desc:'When a panelist submits interview feedback.' },
        { key:'app_mentions',   label:'@Mentions',           desc:'When someone tags you in a note or comment.' },
        { key:'app_interviews', label:'Interview Alerts',    desc:'Alerts for your scheduled interviews.' },
      ]
    }
  ];

  readonly pipelineStages = [
    { key:'applied',     label:'Applied',     color:'#3B82F6', desc:'Initial application received',        active:true },
    { key:'shortlisted', label:'Shortlisted', color:'#6366F1', desc:'Reviewed and approved for next step', active:true },
    { key:'assessment',  label:'Assessment',  color:'#F59E0B', desc:'Technical or skill assessment sent',  active:true },
    { key:'interview',   label:'Interview',   color:'#8B5CF6', desc:'Technical panel interview round',     active:true },
    { key:'hr_round',    label:'HR Round',    color:'#F97316', desc:'Cultural fit and compensation talk',  active:true },
    { key:'selected',    label:'Selected',    color:'#10B981', desc:'Offer extended to candidate',         active:true },
    { key:'rejected',    label:'Rejected',    color:'#EF4444', desc:'Application not moved forward',       active:true },
  ];
}
