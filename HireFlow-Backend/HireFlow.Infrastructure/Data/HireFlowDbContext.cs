using HireFlow.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HireFlow.Infrastructure.Data;

public class HireFlowDbContext : DbContext
{
    public HireFlowDbContext(DbContextOptions<HireFlowDbContext> options) : base(options) { }

    // Auth
    public DbSet<User> Users => Set<User>();
    public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();
    public DbSet<AuditLog> AuditLogs => Set<AuditLog>();

    // Profiles
    public DbSet<CandidateProfile> CandidateProfiles => Set<CandidateProfile>();
    public DbSet<RecruiterProfile> RecruiterProfiles => Set<RecruiterProfile>();
    public DbSet<Company> Companies => Set<Company>();

    // Candidate portfolio
    public DbSet<Resume> Resumes => Set<Resume>();
    public DbSet<CoverLetter> CoverLetters => Set<CoverLetter>();
    public DbSet<Portfolio> Portfolios => Set<Portfolio>();
    public DbSet<WorkExperience> WorkExperiences => Set<WorkExperience>();
    public DbSet<Education> Educations => Set<Education>();
    public DbSet<Certification> Certifications => Set<Certification>();

    // Jobs & Applications
    public DbSet<Job> Jobs => Set<Job>();
    public DbSet<JobApplication> JobApplications => Set<JobApplication>();
    public DbSet<CandidateScore> CandidateScores => Set<CandidateScore>();
    public DbSet<StageHistory> StageHistories => Set<StageHistory>();

    // Interviews
    public DbSet<Interview> Interviews => Set<Interview>();
    public DbSet<InterviewFeedback> InterviewFeedbacks => Set<InterviewFeedback>();
    public DbSet<InterviewBooking> InterviewBookings => Set<InterviewBooking>();

    // HireMeet
    public DbSet<HireMeeting> HireMeetings => Set<HireMeeting>();
    public DbSet<MeetParticipant> MeetParticipants => Set<MeetParticipant>();

    // Notifications
    public DbSet<Notification> Notifications => Set<Notification>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // ===================== GLOBAL QUERY FILTERS (soft delete) =====================
        modelBuilder.Entity<User>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<Job>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<JobApplication>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<Interview>().HasQueryFilter(e => !e.IsDeleted);
        modelBuilder.Entity<HireMeeting>().HasQueryFilter(e => !e.IsDeleted);

        // ===================== USER =====================
        modelBuilder.Entity<User>(e =>
        {
            e.HasIndex(u => u.Email).IsUnique();
            e.Property(u => u.Email).HasMaxLength(256).IsRequired();
            e.Property(u => u.FirstName).HasMaxLength(100).IsRequired();
            e.Property(u => u.LastName).HasMaxLength(100).IsRequired();
            e.Property(u => u.PasswordHash).HasMaxLength(500).IsRequired();
            e.Property(u => u.Company).HasMaxLength(200);
        });

        // ===================== REFRESH TOKEN =====================
        modelBuilder.Entity<RefreshToken>(e =>
        {
            e.HasIndex(rt => rt.TokenHash);
            e.HasOne(rt => rt.User)
             .WithMany(u => u.RefreshTokens)
             .HasForeignKey(rt => rt.UserId)
             .OnDelete(DeleteBehavior.Cascade);
        });

        // ===================== AUDIT LOG =====================
        modelBuilder.Entity<AuditLog>(e =>
        {
            e.HasIndex(a => new { a.UserId, a.CreatedAt });
            e.HasOne(a => a.User)
             .WithMany(u => u.AuditLogs)
             .HasForeignKey(a => a.UserId)
             .OnDelete(DeleteBehavior.Restrict);
        });

        // ===================== CANDIDATE PROFILE =====================
        modelBuilder.Entity<CandidateProfile>(e =>
        {
            e.HasIndex(cp => cp.UserId).IsUnique();
            e.HasOne(cp => cp.User)
             .WithOne(u => u.CandidateProfile)
             .HasForeignKey<CandidateProfile>(cp => cp.UserId)
             .OnDelete(DeleteBehavior.Cascade);
        });

        // ===================== RECRUITER PROFILE =====================
        modelBuilder.Entity<RecruiterProfile>(e =>
        {
            e.HasIndex(rp => rp.UserId).IsUnique();
            e.HasOne(rp => rp.User)
             .WithOne(u => u.RecruiterProfile)
             .HasForeignKey<RecruiterProfile>(rp => rp.UserId)
             .OnDelete(DeleteBehavior.Cascade);
            e.HasOne(rp => rp.Company)
             .WithMany(c => c.Recruiters)
             .HasForeignKey(rp => rp.CompanyId)
             .OnDelete(DeleteBehavior.SetNull);
        });

        // ===================== JOB =====================
        modelBuilder.Entity<Job>(e =>
        {
            e.Property(j => j.Title).HasMaxLength(200).IsRequired();
            e.Property(j => j.SalaryMin).HasColumnType("decimal(18,2)");
            e.Property(j => j.SalaryMax).HasColumnType("decimal(18,2)");
            e.HasIndex(j => new { j.Status, j.PostedDate });
            e.HasIndex(j => j.Source);
            e.HasOne(j => j.RecruiterProfile)
             .WithMany(rp => rp.PostedJobs)
             .HasForeignKey(j => j.RecruiterProfileId)
             .OnDelete(DeleteBehavior.SetNull);
            e.HasOne(j => j.Company)
             .WithMany(c => c.Jobs)
             .HasForeignKey(j => j.CompanyId)
             .OnDelete(DeleteBehavior.SetNull);
        });

        // ===================== JOB APPLICATION =====================
        modelBuilder.Entity<JobApplication>(e =>
        {
            // Prevent duplicate applications
            e.HasIndex(a => new { a.JobId, a.CandidateProfileId }).IsUnique();
            e.HasOne(a => a.Job)
             .WithMany(j => j.Applications)
             .HasForeignKey(a => a.JobId)
             .OnDelete(DeleteBehavior.Restrict);
            e.HasOne(a => a.CandidateProfile)
             .WithMany(cp => cp.Applications)
             .HasForeignKey(a => a.CandidateProfileId)
             .OnDelete(DeleteBehavior.Restrict);
        });

        // ===================== INTERVIEW =====================
        modelBuilder.Entity<Interview>(e =>
        {
            e.HasOne(i => i.Application)
             .WithMany()
             .HasForeignKey(i => i.ApplicationId)
             .OnDelete(DeleteBehavior.Restrict);
            e.HasOne(i => i.Job)
             .WithMany(j => j.Interviews)
             .HasForeignKey(i => i.JobId)
             .OnDelete(DeleteBehavior.Restrict);
            e.HasOne(i => i.RecruiterProfile)
             .WithMany(rp => rp.ScheduledInterviews)
             .HasForeignKey(i => i.RecruiterProfileId)
             .OnDelete(DeleteBehavior.SetNull);
        });

        // ===================== INTERVIEW FEEDBACK =====================
        modelBuilder.Entity<InterviewFeedback>(e =>
        {
            e.HasIndex(f => f.InterviewId).IsUnique();
            e.HasOne(f => f.Interview)
             .WithOne(i => i.Feedback)
             .HasForeignKey<InterviewFeedback>(f => f.InterviewId)
             .OnDelete(DeleteBehavior.Cascade);
        });

        // ===================== HIREMEET =====================
        modelBuilder.Entity<HireMeeting>(e =>
        {
            e.HasIndex(m => m.RoomCode).IsUnique();
            e.Property(m => m.RoomCode).HasMaxLength(20).IsRequired();
            e.HasOne(m => m.RecruiterProfile)
             .WithMany(rp => rp.CreatedMeetings)
             .HasForeignKey(m => m.RecruiterProfileId)
             .OnDelete(DeleteBehavior.SetNull);
        });

        // ===================== NOTIFICATION =====================
        modelBuilder.Entity<Notification>(e =>
        {
            e.HasIndex(n => new { n.UserId, n.IsRead, n.CreatedAt });
            e.HasOne(n => n.User)
             .WithMany(u => u.Notifications)
             .HasForeignKey(n => n.UserId)
             .OnDelete(DeleteBehavior.Cascade);
        });

       
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var entries = ChangeTracker.Entries()
            .Where(e => e.State == EntityState.Modified);

        foreach (var entry in entries)
        {
            if (entry.Entity is HireFlow.Domain.Common.BaseEntity entity)
                entity.UpdatedAt = DateTime.UtcNow;
        }

        return base.SaveChangesAsync(cancellationToken);
    }
}
