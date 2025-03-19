using EmployeesTestTask.Employees.Actions.List;

namespace EmployeesTestTask.Employees.Services;

public interface IEmployeeListService
{
    Task<IEnumerable<EmployeeListDto>> GetEmployees();
}