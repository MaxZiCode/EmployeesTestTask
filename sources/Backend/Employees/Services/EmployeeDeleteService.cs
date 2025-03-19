using EmployeesTestTask.Employees.Repositories;

namespace EmployeesTestTask.Employees.Services;

public class EmployeeDeleteService(IEmployeeRepository employeeRepository) : IEmployeeDeleteService
{
    public async Task DeleteEmployee(int id)
    {
        await employeeRepository.RemoveEmployeeAsync(id);
    }
}
