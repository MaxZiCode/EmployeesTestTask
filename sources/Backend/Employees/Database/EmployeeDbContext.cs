using EmployeesTestTask.Employees.Models;

using Microsoft.EntityFrameworkCore;

namespace EmployeesTestTask.Employees.Database;

public class EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : DbContext(options)
{
    public DbSet<Employee> Employees { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var employeeBuilder = modelBuilder.Entity<Employee>();

        employeeBuilder.ToTable("Employee", "dbo");
        employeeBuilder.HasKey(e => e.Id);
        employeeBuilder.Property(e => e.Id).ValueGeneratedOnAdd();
        employeeBuilder.Property(e => e.FirstName).IsRequired();
        employeeBuilder.Property(e => e.LastName).IsRequired();
        employeeBuilder.Property(e => e.Gender).HasConversion<string>();
    }
}
