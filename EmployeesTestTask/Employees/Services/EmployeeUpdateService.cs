using AutoMapper;

using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Actions.Update;
using EmployeesTestTask.Employees.Models;
using EmployeesTestTask.Employees.Repositories;

namespace EmployeesTestTask.Employees.Services;

public class EmployeeUpdateService(IEmployeeRepository repository, IMapper mapper) : IEmployeeUpdateService
{
    public async Task<EmployeeListDto?> UpdateEmployeeAsync(int id, EmployeeUpdateDto dto)
    {
        Employee? existingEmployee = await repository.GetEmployeeOrNullAsync(id);
        if (existingEmployee is null)
            return null;

        Employee updatedEmployee = mapper.Map(dto, existingEmployee);
        await repository.UpdateEmployeeAsync(updatedEmployee);
        return mapper.Map<EmployeeListDto>(updatedEmployee);
    }
}
