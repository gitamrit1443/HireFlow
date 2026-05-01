import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';
import { InterviewService } from '../../../core/services/interview.service';


@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="p-6 space-y-6 max-w-screen-xl mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-xl font-bold text-slate-900">Hiring Analytics</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            March 2025 · All Departments
          </p>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            @for (p of periods; track p) {
              <button (click)="activePeriod.set(p)"
                class="px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
                [ngClass]="activePeriod() === p
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'">
                {{ p }}
              </button>
            }
          </div>
          <button class="btn btn-sm btn-ghost border border-slate-200 text-slate-600
                         hover:bg-slate-50 normal-case font-medium">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        @for (kpi of kpiCards(); track kpi.label) {
          <div class="bg-white rounded-xl border border-slate-200 p-5">
            <p class="text-2xl font-bold" [ngClass]="kpi.valueColor">{{ kpi.value }}</p>
            <p class="text-sm font-medium text-slate-600 mt-1">{{ kpi.label }}</p>
            <div class="flex items-center gap-1 mt-2">
              <span class="text-xs font-semibold"
                    [ngClass]="kpi.trend === 'up' ? 'text-emerald-600' : 'text-rose-500'">
                {{ kpi.trend === 'up' ? '↑' : '↓' }} {{ kpi.change }}
              </span>
              <span class="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        }
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div class="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
          <div class="flex items-center justify-between mb-5">
            <div>
              <h2 class="text-sm font-bold text-slate-900">Hiring Funnel</h2>
              <p class="text-xs text-slate-500 mt-0.5">Candidates per stage — March 2025</p>
            </div>
            <a routerLink="/recruiter/pipeline"
               class="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
              View board →
            </a>
          </div>

          <div class="space-y-3.5">
            @for (stage of funnelData(); track stage.key) {
              <div class="flex items-center gap-3">
                <span class="text-xs text-slate-500 font-medium w-24 text-right flex-shrink-0">
                  {{ stage.label }}
                </span>
                <div class="flex-1 h-8 bg-slate-50 rounded-lg overflow-hidden
                            border border-slate-100 relative">
                  <div class="h-full rounded-lg flex items-center px-3 transition-all duration-700"
                       [style.width.%]="stage.pct"
                       [style.backgroundColor]="stage.color">
                    @if (stage.pct > 18) {
                      <span class="text-xs font-bold text-white">{{ stage.count }}</span>
                    }
                  </div>
                  @if (stage.pct <= 18) {
                    <span class="absolute right-3 top-1/2 -translate-y-1/2
                                 text-xs font-bold text-slate-600">
                      {{ stage.count }}
                    </span>
                  }
                </div>
                <div class="flex items-center gap-2 w-20 flex-shrink-0">
                  <span class="text-xs font-semibold text-slate-500">{{ stage.pct }}%</span>
                  @if (stage.convRate !== null) {
                    <span class="text-xs text-slate-400 hidden md:inline">
                      ({{ stage.convRate }}%)
                    </span>
                  }
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 grid grid-cols-4 gap-4">
            @for (s of funnelSummary(); track s.label) {
              <div class="text-center">
                <p class="text-lg font-bold" [ngClass]="s.color">{{ s.value }}</p>
                <p class="text-xs text-slate-400 font-medium mt-0.5">{{ s.label }}</p>
              </div>
            }
          </div>
        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">By Department</h2>
          <p class="text-xs text-slate-500 mb-4">Candidates per team</p>

          <div class="space-y-3">
            @for (dept of departmentData(); track dept.name) {
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xs font-semibold text-slate-700">{{ dept.name }}</span>
                  <span class="text-xs font-bold text-slate-900">{{ dept.count }}</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700"
                       [style.width.%]="dept.pct"
                       [style.backgroundColor]="dept.color">
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100">
            <p class="text-xs text-slate-500 font-medium mb-2">Stage Mix</p>
            <div class="flex flex-wrap gap-2">
              @for (s of stageLegend; track s.label) {
                <div class="flex items-center gap-1.5">
                  <div class="w-2 h-2 rounded-full" [style.backgroundColor]="s.color"></div>
                  <span class="text-xs text-slate-500">{{ s.label }}</span>
                </div>
              }
            </div>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">Score Distribution</h2>
          <p class="text-xs text-slate-500 mb-5">Composite score breakdown across candidates</p>

          <div class="space-y-4">
            @for (range of scoreRanges(); track range.label) {
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                          [ngClass]="range.badgeClass">
                      {{ range.label }}
                    </span>
                    <span class="text-xs text-slate-500">{{ range.range }}</span>
                  </div>
                  <span class="text-xs font-bold text-slate-900">
                    {{ range.count }} candidates
                  </span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700"
                       [style.width.%]="range.pct"
                       [ngClass]="range.barClass">
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs text-slate-500 font-medium">Average Score</span>
            <span class="text-lg font-bold text-indigo-600">{{ averageScore() }}</span>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-slate-200 p-6">
          <h2 class="text-sm font-bold text-slate-900 mb-1">Recruiter Activity</h2>
          <p class="text-xs text-slate-500 mb-5">Interviews scheduled and feedback submitted</p>

          <div class="space-y-4">
            @for (rec of recruiterActivity(); track rec.name) {
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center
                            text-white text-xs font-bold flex-shrink-0"
                     [style.backgroundColor]="rec.color">
                  {{ rec.name.split(' ')[0][0] }}{{ rec.name.split(' ')[1][0] }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-semibold text-slate-800">{{ rec.name }}</span>
                    <span class="text-xs text-slate-500">{{ rec.interviews }} interviews</span>
                  </div>
                  <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-indigo-500 transition-all duration-700"
                         [style.width.%]="rec.pct">
                    </div>
                  </div>
                  <div class="flex items-center justify-between mt-1">
                    <span class="text-xs text-slate-400">
                      {{ rec.feedback }} feedback submitted
                    </span>
                    <span class="text-xs font-semibold"
                          [ngClass]="rec.rate >= 80 ? 'text-emerald-600' : 'text-amber-600'">
                      {{ rec.rate }}% rate
                    </span>
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs text-slate-500 font-medium">Avg. Time to Hire</p>
                <p class="text-base font-bold text-slate-900 mt-0.5">18 days</p>
              </div>
              <div class="text-right">
                <p class="text-xs text-slate-500 font-medium">Offer Acceptance Rate</p>
                <p class="text-base font-bold text-emerald-600 mt-0.5">82%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="bg-white rounded-xl border border-slate-200 p-6">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h2 class="text-sm font-bold text-slate-900">Rejection Reasons</h2>
            <p class="text-xs text-slate-500 mt-0.5">
              Why candidates were not progressed — {{ rejectedCount() }} total rejections
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          @for (reason of rejectionReasons; track reason.label) {
            <div class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                   [style.backgroundColor]="reason.iconBg">
                <span class="text-base">{{ reason.icon }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <p class="text-xs font-bold text-slate-900">{{ reason.label }}</p>
                  <span class="text-sm font-bold text-slate-700 flex-shrink-0">
                    {{ reason.count }}
                  </span>
                </div>
                <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-700"
                       [style.width.%]="(reason.count / rejectedCount()) * 100"
                       [style.backgroundColor]="reason.barColor">
                  </div>
                </div>
                <p class="text-xs text-slate-500 mt-1.5">
                  {{ Math.round((reason.count / rejectedCount()) * 100) }}% of rejections
                </p>
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  `
})
export class AnalyticsComponent {

  readonly mockData         = inject(MockDataService);
  readonly interviewService = inject(InterviewService);
  readonly Math = Math;

  activePeriod = signal('Mar 2025');
  readonly periods = ['Mar 2025', 'Q1 2025', 'Last 6 mo'];

  readonly kpiCards = computed(() => [
    { label:'Avg. Time to Hire',    value:'18 days',  valueColor:'text-slate-900',  trend:'down', change:'3 days faster' },
    { label:'Pipeline Conversion',  value:'4.4%',     valueColor:'text-indigo-600', trend:'up',   change:'+0.8%' },
    { label:'Offer Acceptance',     value:'82%',      valueColor:'text-emerald-600',trend:'up',   change:'+5%' },
    { label:'Pending Feedback',     value:'9',        valueColor:'text-amber-600',  trend:'down', change:'4 cleared' },
  ]);

  readonly funnelData = computed(() => {
    const candidates = this.mockData.candidates;
    const total = candidates.length;

    const stageData = [
      { key:'applied',     label:'Applied',     color:'#60A5FA', order:0 },
      { key:'shortlisted', label:'Shortlisted', color:'#818CF8', order:1 },
      { key:'assessment',  label:'Assessment',  color:'#FCD34D', order:2 },
      { key:'interview',   label:'Interview',   color:'#A78BFA', order:3 },
      { key:'hr_round',    label:'HR Round',    color:'#FB923C', order:4 },
      { key:'selected',    label:'Selected',    color:'#34D399', order:5 },
    ];

    const stageOrder = ['applied','shortlisted','assessment','interview','hr_round','selected'];
    return stageData.map(s => {
      const idx = stageOrder.indexOf(s.key);
      const count = candidates.filter(c =>
        stageOrder.indexOf(c.stage) >= idx && c.stage !== 'rejected'
      ).length;
      const prevCount = idx === 0 ? total : (() => {
        const prevIdx = idx - 1;
        return candidates.filter(c =>
          stageOrder.indexOf(c.stage) >= prevIdx && c.stage !== 'rejected'
        ).length;
      })();
      return {
        ...s,
        count,
        pct: Math.round((count / (total || 1)) * 100),
        convRate: prevCount > 0 ? Math.round((count / prevCount) * 100) : null,
      };
    });
  });

  readonly funnelSummary = computed(() => {
    const cs = this.mockData.candidates;
    const total = cs.length;
    const selected = cs.filter(c => c.stage === 'selected').length;
    const rejected = cs.filter(c => c.stage === 'rejected').length;
    return [
      { label:'Total',    value: total,    color:'text-slate-900' },
      { label:'Active',   value: total - rejected, color:'text-indigo-600' },
      { label:'Selected', value: selected, color:'text-emerald-600' },
      { label:'Rejected', value: rejected, color:'text-rose-500' },
    ];
  });

  readonly departmentData = computed(() => {
    const cs = this.mockData.candidates;
    const depts = ['Engineering','Design','Product','Data','Infrastructure'];
    const colors = ['#6366F1','#F59E0B','#10B981','#0EA5E9','#8B5CF6'];
    const maxCount = Math.max(...depts.map(d => cs.filter(c => c.department === d).length), 1);
    return depts.map((dept, i) => ({
      name:  dept,
      count: cs.filter(c => c.department === dept).length,
      pct:   Math.round((cs.filter(c => c.department === dept).length / maxCount) * 100),
      color: colors[i],
    })).sort((a, b) => b.count - a.count);
  });

  readonly stageLegend = [
    { label:'Active',    color:'#6366F1' },
    { label:'Selected',  color:'#10B981' },
    { label:'Rejected',  color:'#EF4444' },
  ];

  readonly scoreRanges = computed(() => {
    const scored = this.mockData.candidates.filter(c => c.score > 0);
    const total  = scored.length || 1;
    return [
      { label:'Excellent', range:'80–100', count: scored.filter(c => c.score >= 80).length, barClass:'bg-emerald-500', badgeClass:'bg-emerald-100 text-emerald-700', pct:0 },
      { label:'Good',      range:'60–79',  count: scored.filter(c => c.score >= 60 && c.score < 80).length, barClass:'bg-amber-400', badgeClass:'bg-amber-100 text-amber-700', pct:0 },
      { label:'Average',   range:'40–59',  count: scored.filter(c => c.score >= 40 && c.score < 60).length, barClass:'bg-orange-400', badgeClass:'bg-orange-100 text-orange-700', pct:0 },
      { label:'Below avg', range:'0–39',   count: scored.filter(c => c.score > 0 && c.score < 40).length, barClass:'bg-rose-400', badgeClass:'bg-rose-100 text-rose-700', pct:0 },
    ].map(r => ({ ...r, pct: Math.round((r.count / total) * 100) }));
  });

  readonly averageScore = computed(() => {
    const scored = this.mockData.candidates.filter(c => c.score > 0);
    if (!scored.length) return 0;
    return Math.round(scored.reduce((s, c) => s + c.score, 0) / scored.length);
  });

  readonly recruiterActivity = computed(() => {
    return [
      { name:'Rahul Mehta',  color:'#4F46E5', interviews:14, feedback:12, rate:86, pct:100 },
      { name:'Sneha Verma',  color:'#10B981', interviews:11, feedback:9,  rate:82, pct:79  },
      { name:'Divya Pillai', color:'#EC4899', interviews:8,  feedback:7,  rate:88, pct:57  },
    ];
  });

  readonly rejectedCount = computed(() =>
    this.mockData.candidates.filter(c => c.stage === 'rejected').length
  );

  readonly rejectionReasons = [
    { label:'Technical Skills Gap',  count:8,  icon:'💻', iconBg:'#EFF6FF', barColor:'#3B82F6' },
    { label:'Experience Mismatch',   count:6,  icon:'📊', iconBg:'#FFF7ED', barColor:'#F97316' },
    { label:'Culture Fit',           count:4,  icon:'🤝', iconBg:'#F0FDF4', barColor:'#22C55E' },
    { label:'Salary Expectation',    count:3,  icon:'💰', iconBg:'#FEFCE8', barColor:'#EAB308' },
    { label:'Communication Skills',  count:2,  icon:'🗣️', iconBg:'#FDF4FF', barColor:'#A855F7' },
    { label:'Role Discontinued',     count:2,  icon:'🚫', iconBg:'#FFF1F2', barColor:'#F43F5E' },
  ];
}
