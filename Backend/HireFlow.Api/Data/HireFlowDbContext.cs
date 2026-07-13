using HireFlowBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace HireFlowBackend.Data;

public class HireFlowDbContext : DbContext
{
    public HireFlowDbContext(DbContextOptions<HireFlowDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Company> Companies => Set<Company>();
    public DbSet<CandidateProfile> CandidateProfiles => Set<CandidateProfile>();
    public DbSet<RecruiterProfile> RecruiterProfiles => Set<RecruiterProfile>();
    public DbSet<Job> Jobs => Set<Job>();
    public DbSet<JobApplication> JobApplications => Set<JobApplication>();
    public DbSet<CandidateScore> CandidateScores => Set<CandidateScore>();
    public DbSet<Interview> Interviews => Set<Interview>();
    public DbSet<HireMeeting> HireMeetings => Set<HireMeeting>();
    public DbSet<Notification> Notifications => Set<Notification>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasIndex(x => x.Email)
            .IsUnique();

        modelBuilder.Entity<User>()
            .HasOne(x => x.CandidateProfile)
            .WithOne(x => x.User)
            .HasForeignKey<CandidateProfile>(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<User>()
            .HasOne(x => x.RecruiterProfile)
            .WithOne(x => x.User)
            .HasForeignKey<RecruiterProfile>(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Job>()
            .Property(x => x.Salary)
            .HasColumnType("decimal(18,2)");

        modelBuilder.Entity<Job>()
            .HasOne(x => x.CreatedByUser)
            .WithMany()
            .HasForeignKey(x => x.CreatedByUserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Job>()
            .HasOne(x => x.Company)
            .WithMany(x => x.Jobs)
            .HasForeignKey(x => x.CompanyId)
            .OnDelete(DeleteBehavior.SetNull);

        modelBuilder.Entity<JobApplication>()
            .HasIndex(x => new { x.JobId, x.CandidateUserId })
            .IsUnique();

        modelBuilder.Entity<JobApplication>()
            .HasOne(x => x.CandidateUser)
            .WithMany()
            .HasForeignKey(x => x.CandidateUserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<JobApplication>()
            .HasOne(x => x.AssignedRecruiter)
            .WithMany()
            .HasForeignKey(x => x.AssignedRecruiterId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<CandidateScore>()
            .HasIndex(x => x.JobApplicationId)
            .IsUnique();

        modelBuilder.Entity<CandidateScore>()
            .HasOne(x => x.ScoredByUser)
            .WithMany()
            .HasForeignKey(x => x.ScoredByUserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Interview>()
            .HasOne(x => x.CreatedByUser)
            .WithMany()
            .HasForeignKey(x => x.CreatedByUserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<HireMeeting>()
            .HasOne(x => x.CreatedByUser)
            .WithMany()
            .HasForeignKey(x => x.CreatedByUserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<HireMeeting>()
            .HasOne(x => x.JobApplication)
            .WithMany()
            .HasForeignKey(x => x.JobApplicationId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
