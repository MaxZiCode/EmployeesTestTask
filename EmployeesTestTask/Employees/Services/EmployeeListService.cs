using AutoMapper;

using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Models;
using EmployeesTestTask.Employees.Repositories;

namespace EmployeesTestTask.Employees.Services;

public class EmployeeListService(IEmployeeRepository employeeRepository, IMapper mapper) : IEmployeeListService
{
    public async Task<IEnumerable<EmployeeListDto>> GetEmployees()
    {
        IEnumerable<Employee> employees = await employeeRepository.GetEmployeesAsync();
        return mapper.Map<IEnumerable<EmployeeListDto>>(employees);
    }
}
