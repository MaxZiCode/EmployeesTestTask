using EmployeesTestTask.Employees.Models;

namespace EmployeesTestTask.Employees.Repositories;

public interface IEmployeeRepository
{
    Task AddEmployeeAsync(Employee employee);

    Task<Employee?> GetEmployeeOrNullAsync(int id);

    Task<IEnumerable<Employee>> GetEmployeesAsync();

    Task RemoveManyEmployeesAsync(IEnumerable<int> ids);

    Task UpdateEmployeeAsync(Employee employee);
}