using AutoMapper;

using EmployeesTestTask.Employees.Actions.Create;
using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Actions.Update;
using EmployeesTestTask.Employees.Models;

namespace EmployeesTestTask.Employees.Mappings;

public class EmployeeMappingProfile : Profile
{
    public EmployeeMappingProfile()
    {
        CreateMap<Employee, EmployeeListDto>();
        CreateMap<EmployeeCreateDto, Employee>();
        CreateMap<EmployeeUpdateDto, Employee>();
    }
}
