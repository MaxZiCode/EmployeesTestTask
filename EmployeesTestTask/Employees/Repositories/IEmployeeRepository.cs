using EmployeesTestTask.Employees.Models;

namespace EmployeesTestTask.Employees.Repositories;
public interface IEmployeeRepository
{
    Task AddEmployeeAsync(Employee employee);
    Task<Employee?> GetEmployeeOrNullAsync(int id);
    Task<IEnumerable<Employee>> GetEmployeesAsync();
    Task RemoveEmployeeAsync(int employeeId);
    Task UpdateEmployeeAsync(Employee employee);
}