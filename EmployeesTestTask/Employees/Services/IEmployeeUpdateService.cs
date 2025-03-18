using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Actions.Update;

namespace EmployeesTestTask.Employees.Services;
public interface IEmployeeUpdateService
{
    Task<EmployeeListDto?> UpdateEmployeeAsync(int id, EmployeeUpdateDto dto);
}