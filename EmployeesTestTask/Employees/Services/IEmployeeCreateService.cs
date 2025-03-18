using EmployeesTestTask.Employees.Actions.Create;
using EmployeesTestTask.Employees.Actions.List;

namespace EmployeesTestTask.Employees.Services;
public interface IEmployeeCreateService
{
    Task<EmployeeListDto> CreateEmployeeAsync(EmployeeCreateDto dto);
}