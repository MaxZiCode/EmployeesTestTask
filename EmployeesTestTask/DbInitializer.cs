using EmployeesTestTask.Employees.Database;
using EmployeesTestTask.Employees.Models;

using Microsoft.EntityFrameworkCore;

namespace EmployeesTestTask;

public static class DbInitializer
{
    public static async Task InitializeAsync(EmployeeDbContext context)
    {
        await context.Database.EnsureCreatedAsync();

        if (await context.Employees.AnyAsync())
            return;

        var employees = new Employee[]
        {
            new() { FirstName = "John", LastName = "Doe", Age = 30, Gender = Gender.Male },
            new() { FirstName = "Jane", LastName = "Smith", Age = 25, Gender = Gender.Female },
            new() { FirstName = "Sam", LastName = "Brown", Age = 35, Gender = Gender.Male }
        };

        context.Employees.AddRange(employees);
        await context.SaveChangesAsync();
    }
}
