
namespace EmployeesTestTask.Employees.Services;

public interface IEmployeeBatchDeleteService
{
    Task DeleteEmployeesAsync(IEnumerable<int> ids);
}