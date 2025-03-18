using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Services;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.Create;

[Route("api/v1.0/employees")]
[ApiController]
public class EmployeeCreateController(IEmployeeCreateService service) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CreateEmployeeAsync(EmployeeCreateDto dto)
    {
        EmployeeListDto newEmployeeDto = await service.CreateEmployeeAsync(dto);
        return StatusCode(201, newEmployeeDto);
    }
}
