import { Injectable } from '@angular/core';
import { Candidate, CandidateScore, HiringStage } from '../models/candidate.model';
import { Job } from '../models/job.model';

@Injectable({ providedIn: 'root' })
export class MockDataService {

  readonly candidates: Candidate[] = [
    {
      id: 'c001', name: 'Priya Sharma',
      email: 'priya.sharma@email.com', phone: '+91 98765 43210',
      avatarColor: '#6366F1', currentRole: 'Senior Frontend Developer',
      jobTitle: 'Lead Frontend Engineer', jobId: 'j001',
      department: 'Engineering', location: 'Bangalore, IN',
      experience: 5, skills: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'NgRx'],
      stage: 'interview', score: 88, appliedDate: '2025-03-10',
      lastActivityDate: '2025-03-22', tags: ['Top Prospect', 'Referral'],
      assignedTo: 'Rahul Mehta',
      notes: 'Strong Angular expertise. Led migration from AngularJS at previous company.',
    },
    {
      id: 'c002', name: 'Arjun Kapoor',
      email: 'arjun.kapoor@email.com', phone: '+91 87654 32109',
      avatarColor: '#10B981', currentRole: 'Backend Engineer',
      jobTitle: 'Senior Backend Engineer', jobId: 'j002',
      department: 'Engineering', location: 'Mumbai, IN',
      experience: 4, skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kafka'],
      stage: 'shortlisted', score: 74, appliedDate: '2025-03-12',
      lastActivityDate: '2025-03-20', tags: ['Strong Technical'],
      assignedTo: 'Sneha Verma',
      notes: 'Solid Node.js background. PostgreSQL experience is excellent.',
    },
    {
      id: 'c003', name: 'Neha Joshi',
      email: 'neha.joshi@email.com', phone: '+91 76543 21098',
      avatarColor: '#F59E0B', currentRole: 'Product Designer',
      jobTitle: 'Senior UX Designer', jobId: 'j003',
      department: 'Design', location: 'Pune, IN',
      experience: 6, skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      stage: 'assessment', score: 82, appliedDate: '2025-03-08',
      lastActivityDate: '2025-03-21', tags: ['Portfolio Standout'],
      assignedTo: 'Rahul Mehta',
      notes: 'Exceptional portfolio. Strong qualitative research skills.',
    },
    {
      id: 'c004', name: 'Rohan Desai',
      email: 'rohan.desai@email.com', phone: '+91 65432 10987',
      avatarColor: '#8B5CF6', currentRole: 'DevOps Engineer',
      jobTitle: 'DevOps Lead', jobId: 'j004',
      department: 'Infrastructure', location: 'Hyderabad, IN',
      experience: 7, skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Prometheus'],
      stage: 'hr_round', score: 91, appliedDate: '2025-03-05',
      lastActivityDate: '2025-03-23', tags: ['Top Prospect', 'Senior'],
      assignedTo: 'Sneha Verma',
      notes: 'Reduced deploy times by 70% at last company. Strong systems thinking.',
    },
    {
      id: 'c005', name: 'Kavita Nair',
      email: 'kavita.nair@email.com', phone: '+91 54321 09876',
      avatarColor: '#EF4444', currentRole: 'Data Analyst',
      jobTitle: 'Data Engineer', jobId: 'j005',
      department: 'Data', location: 'Chennai, IN',
      experience: 3, skills: ['Python', 'SQL', 'Apache Spark', 'dbt'],
      stage: 'rejected', score: 52, appliedDate: '2025-03-01',
      lastActivityDate: '2025-03-18', tags: [],
      assignedTo: 'Rahul Mehta',
      notes: 'Spark knowledge is too basic for the role.',
    },
    {
      id: 'c006', name: 'Amit Trivedi',
      email: 'amit.trivedi@email.com', phone: '+91 43210 98765',
      avatarColor: '#14B8A6', currentRole: 'Full Stack Developer',
      jobTitle: 'Lead Frontend Engineer', jobId: 'j001',
      department: 'Engineering', location: 'Delhi, IN',
      experience: 4, skills: ['React', 'Next.js', 'Node.js', 'GraphQL'],
      stage: 'applied', score: 0, appliedDate: '2025-03-23',
      lastActivityDate: '2025-03-23', tags: ['New'],
      assignedTo: 'Rahul Mehta', notes: '',
    },
    {
      id: 'c007', name: 'Divya Pillai',
      email: 'divya.pillai@email.com', phone: '+91 32109 87654',
      avatarColor: '#EC4899', currentRole: 'Engineering Manager',
      jobTitle: 'Engineering Manager', jobId: 'j006',
      department: 'Engineering', location: 'Bangalore, IN',
      experience: 9, skills: ['Technical Leadership', 'Agile', 'System Design', 'Mentoring'],
      stage: 'selected', score: 95, appliedDate: '2025-02-20',
      lastActivityDate: '2025-03-22', tags: ['Top Prospect', 'Senior', 'Offer Extended'],
      assignedTo: 'Sneha Verma',
      notes: 'Exceptional leader. Culture fit is exceptional.',
    },
    {
      id: 'c008', name: 'Siddharth Rao',
      email: 'sid.rao@email.com', phone: '+91 91234 56789',
      avatarColor: '#0EA5E9', currentRole: 'Mobile Developer',
      jobTitle: 'Senior Mobile Engineer', jobId: 'j007',
      department: 'Engineering', location: 'Bangalore, IN',
      experience: 5, skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      stage: 'shortlisted', score: 79, appliedDate: '2025-03-15',
      lastActivityDate: '2025-03-21', tags: ['Strong Technical'],
      assignedTo: 'Rahul Mehta', notes: '',
    },
    {
      id: 'c009', name: 'Anjali Gupta',
      email: 'anjali.gupta@email.com', phone: '+91 90123 45678',
      avatarColor: '#D946EF', currentRole: 'QA Engineer',
      jobTitle: 'Senior QA Engineer', jobId: 'j008',
      department: 'Quality', location: 'Noida, IN',
      experience: 5, skills: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'Performance Testing'],
      stage: 'interview', score: 83, appliedDate: '2025-03-11',
      lastActivityDate: '2025-03-22', tags: ['Automation Expert'],
      assignedTo: 'Sneha Verma', notes: '',
    },
    {
      id: 'c010', name: 'Vikram Singhania',
      email: 'vikram.s@email.com', phone: '+91 89012 34567',
      avatarColor: '#F97316', currentRole: 'Product Manager',
      jobTitle: 'Senior Product Manager', jobId: 'j009',
      department: 'Product', location: 'Mumbai, IN',
      experience: 6, skills: ['Product Strategy', 'Data Analysis', 'A/B Testing', 'Roadmapping', 'SQL'],
      stage: 'assessment', score: 76, appliedDate: '2025-03-09',
      lastActivityDate: '2025-03-19', tags: ['Strategic Thinker'],
      assignedTo: 'Rahul Mehta', notes: '',
    },
    {
      id: 'c011', name: 'Meera Krishnan',
      email: 'meera.k@email.com', phone: '+91 78901 23456',
      avatarColor: '#84CC16', currentRole: 'Cloud Architect',
      jobTitle: 'Solutions Architect', jobId: 'j010',
      department: 'Infrastructure', location: 'Chennai, IN',
      experience: 10, skills: ['AWS', 'Azure', 'GCP', 'Microservices', 'Cost Optimization'],
      stage: 'applied', score: 0, appliedDate: '2025-03-24',
      lastActivityDate: '2025-03-24', tags: ['New', 'Senior'],
      assignedTo: 'Sneha Verma', notes: '',
    },
    {
      id: 'c012', name: 'Rahul Bose',
      email: 'rahul.bose@email.com', phone: '+91 67890 12345',
      avatarColor: '#64748B', currentRole: 'Data Scientist',
      jobTitle: 'ML Engineer', jobId: 'j005',
      department: 'Data', location: 'Bangalore, IN',
      experience: 4, skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'SQL'],
      stage: 'shortlisted', score: 81, appliedDate: '2025-03-13',
      lastActivityDate: '2025-03-20', tags: ['Research Background'],
      assignedTo: 'Rahul Mehta', notes: '',
    },
  ];

  readonly jobs: Job[] = [
    {
      id: 'j001', title: 'Lead Frontend Engineer',
      department: 'Engineering', location: 'Bangalore, IN (Hybrid)',
      type: 'full-time', experience: '4–7 years',
      salaryMin: 2000000, salaryMax: 3200000, currency: 'INR',
      skills: ['Angular', 'React', 'TypeScript', 'CSS', 'Testing'],
      description: 'We are looking for a lead frontend engineer to own our UI platform and mentor junior engineers. You will work closely with product and design to ship high-quality features.',
      status: 'open', postedDate: '2025-03-01', closingDate: '2025-04-15',
      applicantsCount: 48, shortlistedCount: 12,
      hiringManager: 'Divya Pillai', openings: 2,
    },
    {
      id: 'j002', title: 'Senior Backend Engineer',
      department: 'Engineering', location: 'Remote',
      type: 'remote', experience: '3–6 years',
      salaryMin: 1800000, salaryMax: 2800000, currency: 'INR',
      skills: ['Node.js', 'PostgreSQL', 'Redis', 'Microservices', 'Docker'],
      description: 'Join our backend team and build scalable services powering millions of users. Own backend features end-to-end from architecture to deployment.',
      status: 'open', postedDate: '2025-03-05',
      applicantsCount: 62, shortlistedCount: 18,
      hiringManager: 'Rahul Mehta', openings: 3,
    },
    {
      id: 'j003', title: 'Senior UX Designer',
      department: 'Design', location: 'Pune, IN',
      type: 'full-time', experience: '4–8 years',
      salaryMin: 1600000, salaryMax: 2500000, currency: 'INR',
      skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping'],
      description: 'Shape user experiences for our B2B SaaS products. Own the end-to-end design process from discovery through delivery.',
      status: 'open', postedDate: '2025-03-08',
      applicantsCount: 34, shortlistedCount: 8,
      hiringManager: 'Priya Sharma', openings: 1,
    },
    {
      id: 'j004', title: 'DevOps Lead',
      department: 'Infrastructure', location: 'Hyderabad, IN (Hybrid)',
      type: 'full-time', experience: '5–9 years',
      salaryMin: 2200000, salaryMax: 3500000, currency: 'INR',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
      description: 'Lead our cloud infrastructure practice. Own our CI/CD pipelines, security posture, and reliability targets.',
      status: 'open', postedDate: '2025-03-10',
      applicantsCount: 27, shortlistedCount: 6,
      hiringManager: 'Rahul Mehta', openings: 1,
    },
    {
      id: 'j005', title: 'ML Engineer',
      department: 'Data', location: 'Bangalore, IN',
      type: 'full-time', experience: '3–5 years',
      salaryMin: 2000000, salaryMax: 3000000, currency: 'INR',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'SQL'],
      description: 'Build and deploy ML models that power our recommendation engine and intelligent features.',
      status: 'open', postedDate: '2025-03-12',
      applicantsCount: 39, shortlistedCount: 10,
      hiringManager: 'Sneha Verma', openings: 2,
    },
    {
      id: 'j006', title: 'Engineering Manager',
      department: 'Engineering', location: 'Bangalore, IN',
      type: 'full-time', experience: '7–12 years',
      salaryMin: 3000000, salaryMax: 5000000, currency: 'INR',
      skills: ['Technical Leadership', 'Agile', 'System Design', 'Hiring', 'Mentoring'],
      description: 'Lead a cross-functional engineering team. Own delivery, quality, and career growth for 10–15 engineers.',
      status: 'closed', postedDate: '2025-02-01', closingDate: '2025-03-15',
      applicantsCount: 22, shortlistedCount: 5,
      hiringManager: 'Sneha Verma', openings: 1,
    },
    {
      id: 'j007', title: 'Senior Mobile Engineer',
      department: 'Engineering', location: 'Bangalore, IN (Hybrid)',
      type: 'full-time', experience: '3–6 years',
      salaryMin: 1800000, salaryMax: 2800000, currency: 'INR',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'App Store'],
      description: 'Own and scale our mobile apps across iOS and Android. Ship features that delight 500K+ users.',
      status: 'open', postedDate: '2025-03-14',
      applicantsCount: 31, shortlistedCount: 7,
      hiringManager: 'Rahul Mehta', openings: 2,
    },
    {
      id: 'j008', title: 'Senior QA Engineer',
      department: 'Quality', location: 'Noida, IN (Hybrid)',
      type: 'full-time', experience: '3–6 years',
      salaryMin: 1400000, salaryMax: 2200000, currency: 'INR',
      skills: ['Selenium', 'Cypress', 'Playwright', 'API Testing', 'Performance Testing'],
      description: 'Build robust automation frameworks and own quality across all product releases.',
      status: 'open', postedDate: '2025-03-16',
      applicantsCount: 19, shortlistedCount: 5,
      hiringManager: 'Sneha Verma', openings: 1,
    },
    {
      id: 'j009', title: 'Senior Product Manager',
      department: 'Product', location: 'Mumbai, IN',
      type: 'full-time', experience: '4–8 years',
      salaryMin: 2500000, salaryMax: 4000000, currency: 'INR',
      skills: ['Product Strategy', 'Data Analysis', 'Roadmapping', 'SQL', 'Stakeholder Management'],
      description: 'Drive product strategy for our core B2B SaaS platform.',
      status: 'draft', postedDate: '2025-03-20',
      applicantsCount: 0, shortlistedCount: 0,
      hiringManager: 'Sneha Verma', openings: 1,
    },
    {
      id: 'j010', title: 'Solutions Architect',
      department: 'Infrastructure', location: 'Chennai, IN',
      type: 'full-time', experience: '8–14 years',
      salaryMin: 3500000, salaryMax: 5500000, currency: 'INR',
      skills: ['AWS', 'Azure', 'GCP', 'Microservices', 'Cost Optimization', 'Security'],
      description: 'Design enterprise-grade cloud architectures for key enterprise clients.',
      status: 'paused', postedDate: '2025-03-18',
      applicantsCount: 14, shortlistedCount: 3,
      hiringManager: 'Rahul Mehta', openings: 1,
    },
  ];

  readonly scores: CandidateScore[] = [
    {
      candidateId: 'c001', technical: 9, communication: 8, problemSolving: 9,
      cultureFit: 8, overall: 8.8, recommendation: 'strong_hire',
      notes: 'Excellent Angular knowledge. Walked us through a complex state management decision clearly.',
      evaluatedBy: 'Rahul Mehta', evaluatedAt: '2025-03-21',
    },
    {
      candidateId: 'c004', technical: 9, communication: 9, problemSolving: 9,
      cultureFit: 9, overall: 9.1, recommendation: 'strong_hire',
      notes: 'Top-tier infrastructure knowledge. Kubernetes answers were textbook-perfect.',
      evaluatedBy: 'Sneha Verma', evaluatedAt: '2025-03-22',
    },
    {
      candidateId: 'c007', technical: 8, communication: 10, problemSolving: 9,
      cultureFit: 10, overall: 9.5, recommendation: 'strong_hire',
      notes: 'Exceptional leadership mindset. Culture fit is exceptional.',
      evaluatedBy: 'Sneha Verma', evaluatedAt: '2025-03-21',
    },
    {
      candidateId: 'c003', technical: 8, communication: 8, problemSolving: 8,
      cultureFit: 8, overall: 8.2, recommendation: 'hire',
      notes: 'Design system work is impressive. User research methodology is solid.',
      evaluatedBy: 'Rahul Mehta', evaluatedAt: '2025-03-20',
    },
    {
      candidateId: 'c009', technical: 8, communication: 8, problemSolving: 8,
      cultureFit: 9, overall: 8.3, recommendation: 'hire',
      notes: 'Strong Playwright knowledge. Team enjoyed the conversation.',
      evaluatedBy: 'Sneha Verma', evaluatedAt: '2025-03-22',
    },
  ];

  getCandidatesByStage(stage: HiringStage): Candidate[] {
    return this.candidates.filter(c => c.stage === stage);
  }

  getCandidateById(id: string): Candidate | undefined {
    return this.candidates.find(c => c.id === id);
  }

  getJobById(id: string): Job | undefined {
    return this.jobs.find(j => j.id === id);
  }

  getScoreForCandidate(candidateId: string): CandidateScore | undefined {
    return this.scores.find(s => s.candidateId === candidateId);
  }

  getCandidatesForJob(jobId: string): Candidate[] {
    return this.candidates.filter(c => c.jobId === jobId);
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  formatSalary(amount: number): string {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000)   return `₹${(amount / 100000).toFixed(0)}L`;
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}
