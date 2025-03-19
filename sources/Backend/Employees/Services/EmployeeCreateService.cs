using AutoMapper;

using EmployeesTestTask.Employees.Actions.Create;
using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Models;
using EmployeesTestTask.Employees.Repositories;

namespace EmployeesTestTask.Employees.Services;

public class EmployeeCreateService(IEmployeeRepository employeeRepository, IMapper mapper) : IEmployeeCreateService
{
    public async Task<EmployeeListDto> CreateEmployeeAsync(EmployeeCreateDto dto)
    {
        Employee employee = mapper.Map<Employee>(dto);
        await employeeRepository.AddEmployeeAsync(employee);
        return mapper.Map<EmployeeListDto>(employee);
    }
}
