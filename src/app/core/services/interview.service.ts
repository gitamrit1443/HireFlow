import { Injectable, inject, signal } from '@angular/core';
import { Interview, Interviewer, InterviewFeedback } from '../models/interview.model';
import { MockDataService } from './mock-data.service';


@Injectable({ providedIn: 'root' })
export class InterviewService {

  private mockData = inject(MockDataService);

  readonly interviewers: Interviewer[] = [
    { id: 'r001', name: 'Rahul Mehta',   role: 'Senior Recruiter',        avatarColor: '#4F46E5' },
    { id: 'r002', name: 'Sneha Verma',   role: 'Talent Acquisition Lead', avatarColor: '#10B981' },
    { id: 'r003', name: 'Divya Pillai',  role: 'Engineering Manager',     avatarColor: '#EC4899' },
    { id: 'r004', name: 'Vikash Anand',  role: 'Senior Engineer',         avatarColor: '#F59E0B' },
    { id: 'r005', name: 'Neha Kapoor',   role: 'Staff Engineer',          avatarColor: '#8B5CF6' },
    { id: 'r006', name: 'Aryan Shah',    role: 'HR Business Partner',     avatarColor: '#0EA5E9' },
  ];

  private _interviews = signal<Interview[]>([
    {
      id: 'i001',
      candidateId: 'c001', candidateName: 'Priya Sharma', candidateColor: '#6366F1',
      jobTitle: 'Lead Frontend Engineer', jobId: 'j001', department: 'Engineering',
      round: 'technical', mode: 'online', status: 'scheduled',
      scheduledDate: '2025-04-22', startTime: '14:00', endTime: '15:30', timezone: 'IST',
      interviewers: [
        { id:'r004', name:'Vikash Anand',  role:'Senior Engineer',      avatarColor:'#F59E0B' },
        { id:'r003', name:'Divya Pillai',  role:'Engineering Manager',  avatarColor:'#EC4899' },
      ],
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      agenda: 'Angular architecture, RxJS deep-dive, system design: URL shortener',
    },
    {
      id: 'i002',
      candidateId: 'c004', candidateName: 'Rohan Desai', candidateColor: '#8B5CF6',
      jobTitle: 'DevOps Lead', jobId: 'j004', department: 'Infrastructure',
      round: 'system_design', mode: 'online', status: 'scheduled',
      scheduledDate: '2025-04-22', startTime: '16:30', endTime: '18:00', timezone: 'IST',
      interviewers: [
        { id:'r005', name:'Neha Kapoor', role:'Staff Engineer',    avatarColor:'#8B5CF6' },
        { id:'r002', name:'Sneha Verma', role:'TA Lead',           avatarColor:'#10B981' },
      ],
      meetingLink: 'https://zoom.us/j/98765432',
      agenda: 'Multi-region Kubernetes architecture, disaster recovery strategy',
    },
    {
      id: 'i003',
      candidateId: 'c009', candidateName: 'Meera Iyer', candidateColor: '#D946EF',
      jobTitle: 'QA Lead', jobId: 'j008', department: 'Engineering',
      round: 'technical', mode: 'online', status: 'scheduled',
      scheduledDate: '2025-04-23', startTime: '10:00', endTime: '11:00', timezone: 'IST',
      interviewers: [
        { id:'r004', name:'Vikash Anand', role:'Senior Engineer', avatarColor:'#F59E0B' },
      ],
      meetingLink: 'https://teams.microsoft.com/meet/xyz',
      agenda: 'Test strategy, automation frameworks, CI integration',
    },
    {
      id: 'i004',
      candidateId: 'c014', candidateName: 'Rahul Bose', candidateColor: '#0EA5E9',
      jobTitle: 'Senior Mobile Engineer', jobId: 'j007', department: 'Engineering',
      round: 'technical', mode: 'offline', status: 'scheduled',
      scheduledDate: '2025-04-23', startTime: '14:00', endTime: '15:30', timezone: 'IST',
      location: 'Pune Office — Conference Room 3B',
      interviewers: [
        { id:'r003', name:'Divya Pillai', role:'Engineering Manager', avatarColor:'#EC4899' },
        { id:'r001', name:'Rahul Mehta',  role:'Senior Recruiter',   avatarColor:'#4F46E5' },
      ],
      agenda: 'SwiftUI architecture, Combine framework, iOS performance tuning',
    },
    {
      id: 'i005',
      candidateId: 'c015', candidateName: 'Tanvi Shah', candidateColor: '#A78BFA',
      jobTitle: 'Senior Technical Writer', jobId: 'j012', department: 'Product',
      round: 'hr', mode: 'online', status: 'scheduled',
      scheduledDate: '2025-04-24', startTime: '11:00', endTime: '12:00', timezone: 'IST',
      interviewers: [
        { id:'r006', name:'Aryan Shah',  role:'HR Business Partner', avatarColor:'#0EA5E9' },
        { id:'r002', name:'Sneha Verma', role:'TA Lead',             avatarColor:'#10B981' },
      ],
      meetingLink: 'https://meet.google.com/xyz-uvwx-yz',
      agenda: 'Compensation discussion, benefits, start date alignment',
    },
    {
      id: 'i006',
      candidateId: 'c003', candidateName: 'Neha Joshi', candidateColor: '#F59E0B',
      jobTitle: 'Senior UX Designer', jobId: 'j003', department: 'Design',
      round: 'technical', mode: 'online', status: 'completed',
      scheduledDate: '2025-04-20', startTime: '10:00', endTime: '11:30', timezone: 'IST',
      interviewers: [
        { id:'r001', name:'Rahul Mehta',  role:'Senior Recruiter',   avatarColor:'#4F46E5' },
        { id:'r003', name:'Divya Pillai', role:'Engineering Manager', avatarColor:'#EC4899' },
      ],
      meetingLink: 'https://meet.google.com/done',
      agenda: 'Portfolio review, design process, case study',
      feedback: {
        interviewId: 'i006',
        submittedBy: 'Rahul Mehta',
        submittedAt: '2025-04-20T12:30:00',
        technicalScore: 9,
        communicationScore: 8,
        problemSolvingScore: 8,
        cultureFitScore: 9,
        overallScore: 9,
        recommendation: 'strong_hire',
        strengths: 'Exceptional Figma skills. Design system architecture is production-grade. Great communication.',
        concerns: 'Limited B2B SaaS experience — mostly consumer apps.',
        notes: 'Strong candidate. Recommend moving to HR round immediately.',
      },
    },
    {
      id: 'i007',
      candidateId: 'c002', candidateName: 'Arjun Kapoor', candidateColor: '#10B981',
      jobTitle: 'Senior Backend Engineer', jobId: 'j002', department: 'Engineering',
      round: 'technical', mode: 'online', status: 'completed',
      scheduledDate: '2025-04-19', startTime: '15:00', endTime: '16:00', timezone: 'IST',
      interviewers: [
        { id:'r005', name:'Neha Kapoor', role:'Staff Engineer', avatarColor:'#8B5CF6' },
      ],
      meetingLink: 'https://meet.google.com/done2',
      agenda: 'Node.js internals, PostgreSQL optimisation, system design',
      feedback: {
        interviewId: 'i007',
        submittedBy: 'Neha Kapoor',
        submittedAt: '2025-04-19T17:00:00',
        technicalScore: 8,
        communicationScore: 7,
        problemSolvingScore: 7,
        cultureFitScore: 8,
        overallScore: 7,
        recommendation: 'hire',
        strengths: 'Deep PostgreSQL knowledge. Wrote efficient queries on the spot.',
        concerns: 'Could strengthen distributed systems knowledge.',
        notes: 'Recommend proceeding. Send assessment on Kafka patterns.',
      },
    },
  ]);

  readonly interviews = this._interviews.asReadonly();


  getUpcoming(): Interview[] {
    const today = new Date().toISOString().split('T')[0];
    return this._interviews()
      .filter(i => i.scheduledDate >= today && i.status === 'scheduled')
      .sort((a, b) => `${a.scheduledDate}${a.startTime}`.localeCompare(`${b.scheduledDate}${b.startTime}`));
  }

  getByDate(date: string): Interview[] {
    return this._interviews().filter(i => i.scheduledDate === date);
  }

  getForCandidate(candidateId: string): Interview[] {
    return this._interviews().filter(i => i.candidateId === candidateId);
  }

  getCompleted(): Interview[] {
    return this._interviews().filter(i => i.status === 'completed');
  }


  
  add(interview: Interview): void {
    this._interviews.update(list => [interview, ...list]);
  }

  
  submitFeedback(interviewId: string, feedback: InterviewFeedback): void {
    this._interviews.update(list =>
      list.map(i => i.id === interviewId
        ? { ...i, status: 'completed', feedback }
        : i
      )
    );
  }

  
  cancel(interviewId: string): void {
    this._interviews.update(list =>
      list.map(i => i.id === interviewId ? { ...i, status: 'cancelled' } : i)
    );
  }


  
  formatDateLabel(isoDate: string): string {
    const d    = new Date(isoDate);
    const today = new Date();
    const diff  = Math.floor((d.getTime() - today.setHours(0,0,0,0)) / 86_400_000);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  
  formatTime(t: string): string {
    const [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour  = h % 12 || 12;
    return `${hour}:${m.toString().padStart(2, '0')} ${ampm}`;
  }

  generateId(): string {
    return 'i' + Date.now().toString().slice(-6);
  }
}
