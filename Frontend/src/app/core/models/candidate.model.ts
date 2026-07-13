

export type HiringStage =
  | 'applied'
  | 'shortlisted'
  | 'assessment'
  | 'interview'
  | 'hr_round'
  | 'selected'
  | 'rejected';

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarColor: string;       // Hex color for avatar background (generated from name)
  currentRole: string;       // Their current/most recent role
  jobTitle: string;          // Position they applied for
  jobId: string;
  department: string;
  location: string;
  experience: number;        // Years of experience
  skills: string[];
  stage: HiringStage;
  score: number;             // 0–100 composite score from recruiter ratings
  appliedDate: string;       // ISO date string
  lastActivityDate: string;
  resumeUrl?: string;
  tags: string[];            // Internal labels e.g. 'Senior', 'Referral', 'Top Prospect'
  assignedTo: string;        // Recruiter name managing this candidate
  coverLetter?: string;
  notes?: string;
}

export interface CandidateScore {
  candidateId: string;
  technical: number;         // 0–10
  communication: number;     // 0–10
  problemSolving: number;    // 0–10
  cultureFit: number;        // 0–10
  overall: number;           // Composite, 0–10
  recommendation: 'strong_hire' | 'hire' | 'maybe' | 'no_hire';
  notes: string;
  evaluatedBy: string;
  evaluatedAt: string;
}
