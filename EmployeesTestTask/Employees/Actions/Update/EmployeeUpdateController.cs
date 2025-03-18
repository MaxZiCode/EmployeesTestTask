using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Services;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.Update;

[Route("api/v1.0/employees")]
[ApiController]
public class EmployeeUpdateController(IEmployeeUpdateService service) : ControllerBase
{
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateEmployeeAsync(int employeeId, EmployeeUpdateDto dto)
    {
        var updatedEmployeeDto = await service.UpdateEmployeeAsync(employeeId, dto);
        if (updatedEmployeeDto != null)
            return NotFound();

        return StatusCode(201, updatedEmployeeDto);
    }
}
