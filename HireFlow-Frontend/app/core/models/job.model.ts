

export type JobStatus = 'open' | 'closed' | 'draft' | 'paused';

export type JobType = 'full-time' | 'part-time' | 'contract' | 'remote';

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  experience: string;          // e.g. "2–5 years"
  salaryMin: number;
  salaryMax: number;
  currency: string;
  skills: string[];            // Required skills
  description: string;
  status: JobStatus;
  postedDate: string;          // ISO date string
  closingDate?: string;
  applicantsCount: number;
  shortlistedCount: number;
  hiringManager: string;
  openings: number;            // Number of open seats for this role
}
