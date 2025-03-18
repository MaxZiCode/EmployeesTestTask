using EmployeesTestTask.Employees.Services;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.Delete;

[Route(Routes.V1.EMPLOYEES)]
[ApiController]
public class EmployeeDeleteController(IEmployeeDeleteService employeeDeleteService) : ControllerBase
{
    [HttpDelete("{id}")]
    public async Task<IActionResult> GetEmployeeListAsync(int id)
    {
        await employeeDeleteService.DeleteEmployee(id);
        return NoContent();
    }
}
