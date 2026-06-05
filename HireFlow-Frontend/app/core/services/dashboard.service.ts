import { Injectable, inject } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { StatCard, PipelineStageCount, ActivityItem, UpcomingInterview } from '../models/dashboard.model';


@Injectable({ providedIn: 'root' })
export class DashboardService {

  private mockData = inject(MockDataService);


  getStatCards(): StatCard[] {
    const candidates = this.mockData.candidates;
    const jobs = this.mockData.jobs;

    return [
      {
        label: 'Active Jobs',
        value: jobs.filter(j => j.status === 'open').length,
        change: 2,
        trend: 'up',
        iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        accentClass: 'bg-indigo-50 text-indigo-600',
      },
      {
        label: 'Total Candidates',
        value: candidates.length,
        change: 18,
        trend: 'up',
        iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        accentClass: 'bg-blue-50 text-blue-600',
      },
      {
        label: 'Interviews Today',
        value: 6,
        change: -1,
        trend: 'down',
        iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        accentClass: 'bg-violet-50 text-violet-600',
      },
      {
        label: 'Pending Feedback',
        value: 9,
        change: 3,
        trend: 'up',
        iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        accentClass: 'bg-amber-50 text-amber-600',
      },
    ];
  }


  getPipelineStages(): PipelineStageCount[] {
    const candidates = this.mockData.candidates;
    const total = candidates.filter(c => c.stage !== 'rejected').length;

    const countFor = (stage: string) =>
      candidates.filter(c => c.stage === stage).length;

    const applied = countFor('applied') + countFor('shortlisted') +
                    countFor('assessment') + countFor('interview') +
                    countFor('hr_round') + countFor('selected');

    return [
      {
        stage: 'applied',
        label: 'Applied',
        count: applied,
        barColorClass: 'bg-blue-400',
        badgeClass: 'bg-blue-100 text-blue-700',
        percentage: 100,
      },
      {
        stage: 'shortlisted',
        label: 'Shortlisted',
        count: countFor('shortlisted') + countFor('assessment') + countFor('interview') + countFor('hr_round') + countFor('selected'),
        barColorClass: 'bg-indigo-400',
        badgeClass: 'bg-indigo-100 text-indigo-700',
        percentage: Math.round(((countFor('shortlisted') + countFor('assessment') + countFor('interview') + countFor('hr_round') + countFor('selected')) / applied) * 100),
      },
      {
        stage: 'assessment',
        label: 'Assessment',
        count: countFor('assessment') + countFor('interview') + countFor('hr_round') + countFor('selected'),
        barColorClass: 'bg-amber-400',
        badgeClass: 'bg-amber-100 text-amber-700',
        percentage: Math.round(((countFor('assessment') + countFor('interview') + countFor('hr_round') + countFor('selected')) / applied) * 100),
      },
      {
        stage: 'interview',
        label: 'Interview',
        count: countFor('interview') + countFor('hr_round') + countFor('selected'),
        barColorClass: 'bg-violet-400',
        badgeClass: 'bg-violet-100 text-violet-700',
        percentage: Math.round(((countFor('interview') + countFor('hr_round') + countFor('selected')) / applied) * 100),
      },
      {
        stage: 'hr_round',
        label: 'HR Round',
        count: countFor('hr_round') + countFor('selected'),
        barColorClass: 'bg-orange-400',
        badgeClass: 'bg-orange-100 text-orange-700',
        percentage: Math.round(((countFor('hr_round') + countFor('selected')) / applied) * 100),
      },
      {
        stage: 'selected',
        label: 'Selected',
        count: countFor('selected'),
        barColorClass: 'bg-emerald-400',
        badgeClass: 'bg-emerald-100 text-emerald-700',
        percentage: Math.round((countFor('selected') / applied) * 100),
      },
    ];
  }


  getRecentActivity(): ActivityItem[] {
    return [
      {
        id: 'a1',
        type: 'stage_change',
        candidateName: 'Rohan Desai',
        message: 'moved to HR Round',
        timeAgo: '1h ago',
        avatarColor: '#8B5CF6',
      },
      {
        id: 'a2',
        type: 'application',
        candidateName: 'Amit Trivedi',
        message: 'applied for Lead Frontend Engineer',
        timeAgo: '3h ago',
        avatarColor: '#14B8A6',
      },
      {
        id: 'a3',
        type: 'interview_scheduled',
        candidateName: 'Priya Sharma',
        message: 'interview scheduled for 2:00 PM',
        timeAgo: '5h ago',
        avatarColor: '#6366F1',
      },
      {
        id: 'a4',
        type: 'feedback',
        candidateName: 'Neha Joshi',
        message: 'received feedback from Rahul Mehta',
        timeAgo: 'Yesterday',
        avatarColor: '#F59E0B',
      },
      {
        id: 'a5',
        type: 'offer',
        candidateName: 'Divya Pillai',
        message: 'offer letter sent',
        timeAgo: 'Yesterday',
        avatarColor: '#EC4899',
      },
      {
        id: 'a6',
        type: 'stage_change',
        candidateName: 'Arjun Kapoor',
        message: 'shortlisted by Sneha Verma',
        timeAgo: '2 days ago',
        avatarColor: '#10B981',
      },
    ];
  }


  getUpcomingInterviews(): UpcomingInterview[] {
    return [
      {
        id: 'i1',
        candidateName: 'Priya Sharma',
        avatarColor: '#6366F1',
        jobTitle: 'Lead Frontend Engineer',
        scheduledTime: '2:00 PM – 3:00 PM',
        scheduledDate: 'Today',
        mode: 'online',
        interviewers: ['Rahul Mehta', 'Divya Pillai'],
        meetingLink: 'https://meet.google.com/xyz-abc-123',
      },
      {
        id: 'i2',
        candidateName: 'Rohan Desai',
        avatarColor: '#8B5CF6',
        jobTitle: 'DevOps Lead',
        scheduledTime: '4:30 PM – 5:30 PM',
        scheduledDate: 'Today',
        mode: 'online',
        interviewers: ['Sneha Verma'],
        meetingLink: 'https://zoom.us/j/123456',
      },
      {
        id: 'i3',
        candidateName: 'Neha Joshi',
        avatarColor: '#F59E0B',
        jobTitle: 'Senior UX Designer',
        scheduledTime: '10:00 AM – 11:00 AM',
        scheduledDate: 'Tomorrow',
        mode: 'offline',
        interviewers: ['Rahul Mehta', 'Priya Sharma'],
      },
    ];
  }
}
