using EmployeesTestTask.Employees.Database;
using EmployeesTestTask.Employees.Models;

using Microsoft.EntityFrameworkCore;

namespace EmployeesTestTask.Employees.Repositories;

public class EmployeeRepository(EmployeeDbContext dbContext) : IEmployeeRepository
{
    public async Task<IEnumerable<Employee>> GetEmployeesAsync()
    {
        return await dbContext.Employees.ToListAsync();
    }

    public async Task<Employee?> GetEmployeeOrNullAsync(int id)
    {
        return await dbContext.Employees.FirstOrDefaultAsync(e => e.Id == id);
    }

    public virtual async Task AddEmployeeAsync(Employee employee)
    {
        dbContext.Employees.Add(employee);
        await dbContext.SaveChangesAsync();
    }

    public virtual async Task UpdateEmployeeAsync(Employee employee)
    {
        dbContext.Employees.Update(employee);
        await dbContext.SaveChangesAsync();
    }

    public virtual async Task RemoveManyEmployeesAsync(IEnumerable<int> ids)
    {
        await dbContext.Employees.Where(e => ids.Contains(e.Id)).ExecuteDeleteAsync();
    }
}
