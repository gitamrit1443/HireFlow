import { Component, Input, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface PlagiarismResult {
  similarityPercent: number;
  isPlagiarised: boolean;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  matchedSegments: string[];
  verdict: string;
}

interface SpamResult {
  isSpam: boolean;
  spamPercent: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  flags: string[];
  verdict: string;
}

interface AnalysisResult {
  applicationId: string;
  candidateName: string;
  plagiarism: PlagiarismResult;
  spam: SpamResult;
  overallRisk: 'low' | 'medium' | 'high' | 'critical';
  recommendation: 'clear' | 'review' | 'reject';
  summary: string;
}

@Component({
  selector: 'app-plagiarism-check',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl border border-slate-200 p-5">

      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center">
            <svg class="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0
                   01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622
                   5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <span class="text-sm font-semibold text-slate-900">Plagiarism & Spam Check</span>
        </div>

        @if (!result() && !loading()) {
          <button (click)="runCheck()"
            class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white
                   px-3 py-1.5 rounded-lg transition font-medium">
            Run Check
          </button>
        } @else if (result()) {
          <button (click)="runCheck()"
            class="text-xs text-slate-500 hover:text-slate-700 transition">
            Re-run
          </button>
        }
      </div>

      <!-- Loading -->
      @if (loading()) {
        <div class="flex items-center gap-3 py-3">
          <svg class="animate-spin w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <span class="text-sm text-slate-500">Analysing application...</span>
        </div>
      }

      <!-- Error -->
      @if (error()) {
        <div class="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
          {{ error() }}
        </div>
      }

      <!-- Results -->
      @if (result()) {

        <!-- Summary banner -->
        <div [ngClass]="summaryBannerClass()" class="rounded-xl p-3 mb-4 text-xs font-medium leading-snug">
          {{ result()!.summary }}
        </div>

        <!-- Metric cards -->
        <div class="grid grid-cols-2 gap-3 mb-4">

          <!-- Plagiarism card -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs text-slate-500 font-medium">Plagiarism</span>
              <span [ngClass]="badgeClass(result()!.plagiarism.riskLevel)"
                class="text-xs px-2 py-0.5 rounded-full font-semibold">
                {{ result()!.plagiarism.riskLevel | titlecase }}
              </span>
            </div>
            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-2.5">
              <div [style.width.%]="result()!.plagiarism.similarityPercent"
                [ngClass]="barClass(result()!.plagiarism.riskLevel)"
                class="h-full rounded-full transition-all duration-700">
              </div>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-slate-900">
                {{ result()!.plagiarism.similarityPercent }}
              </span>
              <span class="text-sm text-slate-400">% similar</span>
            </div>
          </div>

          <!-- Spam card -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs text-slate-500 font-medium">Spam Score</span>
              <span [ngClass]="badgeClass(result()!.spam.riskLevel)"
                class="text-xs px-2 py-0.5 rounded-full font-semibold">
                {{ result()!.spam.riskLevel | titlecase }}
              </span>
            </div>
            <div class="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-2.5">
              <div [style.width.%]="result()!.spam.spamPercent"
                [ngClass]="barClass(result()!.spam.riskLevel)"
                class="h-full rounded-full transition-all duration-700">
              </div>
            </div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-slate-900">
                {{ result()!.spam.spamPercent }}
              </span>
              <span class="text-sm text-slate-400">% spam</span>
            </div>
          </div>
        </div>

        <!-- Spam flags -->
        @if (result()!.spam.flags.length > 0) {
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Spam Flags ({{ result()!.spam.flags.length }})
            </p>
            <div class="space-y-1.5">
              @for (flag of result()!.spam.flags; track flag) {
                <div class="flex items-start gap-2 text-xs text-amber-700 bg-amber-50
                            border border-amber-100 rounded-lg px-3 py-2">
                  <svg class="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673
                         1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485
                         2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0
                         0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"/>
                  </svg>
                  {{ flag }}
                </div>
              }
            </div>
          </div>
        }

        <!-- Matched phrases -->
        @if (result()!.plagiarism.matchedSegments.length > 0) {
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Matching Phrases Detected
            </p>
            <div class="space-y-1.5">
              @for (seg of result()!.plagiarism.matchedSegments; track seg) {
                <div class="bg-red-50 border border-red-100 rounded-lg px-3 py-2
                            text-xs text-red-700 font-mono leading-relaxed">
                  "...{{ seg }}..."
                </div>
              }
            </div>
          </div>
        }

        <!-- Verdicts -->
        <div class="pt-3 border-t border-slate-100 space-y-1.5">
          <p class="text-xs text-slate-500 leading-relaxed">{{ result()!.plagiarism.verdict }}</p>
          <p class="text-xs text-slate-500 leading-relaxed">{{ result()!.spam.verdict }}</p>
        </div>
      }

      <!-- Idle state -->
      @if (!result() && !loading() && !error()) {
        <p class="text-xs text-slate-400 text-center py-4 leading-relaxed">
          Click <strong class="text-slate-600">Run Check</strong> to scan this application
          for plagiarism and spam signals in real-time.
        </p>
      }
    </div>
  `
})
export class PlagiarismCheckComponent implements OnInit {
  @Input() applicationId!: string;
  @Input() candidateName!: string;
  @Input() candidateEmail: string = '';
  @Input() coverLetter: string = '';
  @Input() resumeText: string = '';
  @Input() applicationsCountToday: number = 0;
  @Input() autoRun: boolean = true;

  private http = inject(HttpClient);

  result  = signal<AnalysisResult | null>(null);
  loading = signal(false);
  error   = signal<string | null>(null);

  ngOnInit() {
    if (this.autoRun && this.coverLetter?.trim()) {
      this.runCheck();
    }
  }

  runCheck() {
    if (!this.coverLetter?.trim()) {
      this.result.set(null);
      this.error.set('No cover letter is available for this application.');
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    this.result.set(null);

    this.http.post<{ success: boolean; data: any }>(
      `${environment.apiUrl}/analysis/full`,
      {
        applicationId:        this.applicationId,
        candidateName:        this.candidateName,
        candidateEmail:       this.candidateEmail,
        coverLetter:          this.coverLetter ?? '',
        resumeText:           this.resumeText ?? '',
        applicationsCountToday: this.applicationsCountToday
      }
    ).pipe(
      catchError(() => {
        this.error.set('Analysis service is unavailable. Start the Python plagiarism service and try again.');
        this.loading.set(false);
        return EMPTY;
      })
    ).subscribe(res => {
      if (!res.success || !res.data) {
        this.error.set('Analysis service returned an invalid response.');
      } else {
        this.result.set(this.mapResult(res.data));
      }
      this.loading.set(false);
    });
  }

  summaryBannerClass() {
    const r = this.result()?.overallRisk;
    if (r === 'critical') return 'bg-red-50 border border-red-200 text-red-700';
    if (r === 'high')     return 'bg-red-50 border border-red-200 text-red-700';
    if (r === 'medium')   return 'bg-amber-50 border border-amber-200 text-amber-700';
    return 'bg-emerald-50 border border-emerald-200 text-emerald-700';
  }

  badgeClass(risk: string) {
    if (risk === 'critical') return 'bg-red-100 text-red-700';
    if (risk === 'high')     return 'bg-red-100 text-red-600';
    if (risk === 'medium')   return 'bg-amber-100 text-amber-700';
    return 'bg-emerald-100 text-emerald-700';
  }

  barClass(risk: string) {
    if (risk === 'critical') return 'bg-red-600';
    if (risk === 'high')     return 'bg-red-500';
    if (risk === 'medium')   return 'bg-amber-500';
    return 'bg-emerald-500';
  }

  private mapResult(data: any): AnalysisResult {
    const plagiarism = data.plagiarism ?? {};
    const spam = data.spam ?? {};
    return {
      applicationId: data.applicationId ?? data.application_id ?? this.applicationId,
      candidateName: data.candidateName ?? data.candidate_name ?? this.candidateName,
      plagiarism: {
        similarityPercent: plagiarism.similarityPercent ?? plagiarism.similarity_percent ?? 0,
        isPlagiarised: plagiarism.isPlagiarised ?? plagiarism.is_plagiarised ?? false,
        riskLevel: plagiarism.riskLevel ?? plagiarism.risk_level ?? 'low',
        matchedSegments: plagiarism.matchedSegments ?? plagiarism.matched_segments ?? [],
        verdict: plagiarism.verdict ?? ''
      },
      spam: {
        isSpam: spam.isSpam ?? spam.is_spam ?? false,
        spamPercent: spam.spamPercent ?? spam.spam_percent ?? 0,
        riskLevel: spam.riskLevel ?? spam.risk_level ?? 'low',
        flags: spam.flags ?? [],
        verdict: spam.verdict ?? ''
      },
      overallRisk: data.overallRisk ?? data.overall_risk ?? 'low',
      recommendation: data.recommendation ?? 'review',
      summary: data.summary ?? 'Analysis completed.'
    };
  }

}
