namespace HireFlow.Domain.Enums;

public enum UserRole { Candidate = 1, Recruiter = 2, Admin = 3 }

// Matches frontend HiringStage
public enum HiringStage
{
    Applied = 1,
    Shortlisted = 2,
    Assessment = 3,
    Interview = 4,
    HrRound = 5,
    Selected = 6,
    Rejected = 7
}

// Matches frontend JobStatus
public enum JobStatus { Open = 1, Closed = 2, Draft = 3, Paused = 4 }

// Matches frontend JobType
public enum JobType { FullTime = 1, PartTime = 2, Contract = 3, Remote = 4 }

public enum JobSource { HireFlow = 1, LinkedIn = 2, Indeed = 3, Wellfound = 4, Jooble = 5, Founder = 6, Other = 7 }

// Matches frontend InterviewRound
public enum InterviewRound
{
    Screening = 1,
    Technical = 2,
    SystemDesign = 3,
    Hr = 4,
    Leadership = 5,
    Final = 6
}

// Matches frontend InterviewMode
public enum InterviewMode { Online = 1, Offline = 2, Phone = 3 }

// Matches frontend InterviewStatus
public enum InterviewStatus { Scheduled = 1, Completed = 2, Cancelled = 3, Rescheduled = 4 }

// Matches frontend MeetingStatus
public enum MeetingStatus { Waiting = 1, Live = 2, Ended = 3 }

public enum NotificationType
{
    JobAlert = 1,
    ApplicationUpdate = 2,
    InterviewReminder = 3,
    NewApplication = 4,
    MessageReceived = 5,
    SystemAlert = 6
}

// Matches frontend recommendation
public enum HireRecommendation { StrongHire = 1, Hire = 2, Maybe = 3, NoHire = 4 }

public enum ParticipantRole { Recruiter = 1, Candidate = 2 }
