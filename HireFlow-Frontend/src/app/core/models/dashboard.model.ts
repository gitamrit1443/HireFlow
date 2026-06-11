

export interface StatCard {
  label: string;
  value: number | string;
  change: number;            // Absolute change e.g. +18, -3
  trend: 'up' | 'down' | 'neutral';
  iconPath: string;          // SVG path string for the icon
  accentClass: string;       // Tailwind color class e.g. 'bg-indigo-100 text-indigo-600'
}

export interface PipelineStageCount {
  stage: string;             // Stage key
  label: string;             // Display label
  count: number;             // Candidate count at this stage
  barColorClass: string;     // Tailwind bg class for the progress bar
  badgeClass: string;        // Tailwind class for the stage chip
  percentage: number;        // Width % relative to "Applied" (always 100%)
}

export interface ActivityItem {
  id: string;
  type: 'application' | 'stage_change' | 'interview_scheduled' | 'feedback' | 'offer';
  candidateName: string;
  message: string;            // Human-readable description e.g. "moved to Interview"
  timeAgo: string;            // Relative time e.g. "2h ago", "Yesterday"
  avatarColor: string;
}

export interface UpcomingInterview {
  id: string;
  candidateName: string;
  avatarColor: string;
  jobTitle: string;
  scheduledTime: string;      // e.g. "2:00 PM – 3:00 PM"
  scheduledDate: string;      // e.g. "Today" or "Tomorrow"
  mode: 'online' | 'offline';
  interviewers: string[];
  meetingLink?: string;
}
