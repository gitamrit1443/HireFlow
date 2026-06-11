

export type InterviewMode   = 'online' | 'offline' | 'phone';
export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
export type InterviewRound  = 'screening' | 'technical' | 'system_design' | 'hr' | 'leadership' | 'final';

export interface Interviewer {
  id:         string;
  name:       string;
  role:       string;
  avatarColor: string;
}

export interface Interview {
  id:            string;
  candidateId:   string;
  candidateName: string;
  candidateColor: string;
  jobTitle:      string;
  jobId:         string;
  department:    string;

  round:         InterviewRound;
  mode:          InterviewMode;
  status:        InterviewStatus;

  scheduledDate: string;           // ISO date "2025-04-22"
  startTime:     string;           // "14:00"
  endTime:       string;           // "15:00"
  timezone:      string;           // "IST"

  interviewers:  Interviewer[];
  meetingLink?:  string;
  location?:     string;           // For offline: room or address

  agenda?:       string;           // Brief description of what to cover
  feedback?:     InterviewFeedback; // Filled after the interview completes
}

export interface InterviewFeedback {
  interviewId:     string;
  submittedBy:     string;
  submittedAt:     string;
  technicalScore:  number;   // 1–10
  communicationScore: number;
  problemSolvingScore: number;
  cultureFitScore: number;
  overallScore:    number;
  recommendation: 'strong_hire' | 'hire' | 'maybe' | 'no_hire';
  strengths:       string;
  concerns:        string;
  notes:           string;
}


export const ROUND_LABELS: Record<InterviewRound, string> = {
  screening:     'Screening',
  technical:     'Technical',
  system_design: 'System Design',
  hr:            'HR Round',
  leadership:    'Leadership',
  final:         'Final',
};


export const ROUND_COLORS: Record<InterviewRound, string> = {
  screening:     'bg-blue-100 text-blue-700',
  technical:     'bg-violet-100 text-violet-700',
  system_design: 'bg-indigo-100 text-indigo-700',
  hr:            'bg-amber-100 text-amber-700',
  leadership:    'bg-orange-100 text-orange-700',
  final:         'bg-emerald-100 text-emerald-700',
};
