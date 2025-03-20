using EmployeesTestTask.Employees.Repositories;

namespace EmployeesTestTask.Employees.Services;

public class EmployeeBatchDeleteService(IEmployeeRepository employeeRepository) : IEmployeeBatchDeleteService
{
    public async Task DeleteEmployeesAsync(IEnumerable<int> ids)
    {
        await employeeRepository.RemoveManyEmployeesAsync(ids);
    }
}
