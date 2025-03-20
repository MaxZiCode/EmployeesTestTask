using EmployeesTestTask.Employees.Services;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.Delete;

[Route(Routes.V1.EMPLOYEES)]
[ApiController]
public class EmployeeBatchDeleteController(IEmployeeBatchDeleteService service) : ControllerBase
{
    [HttpDelete]
    public async Task<IActionResult> DeleteEmployeesAsync([FromBody] List<int> ids)
    {
        await service.DeleteEmployeesAsync(ids);
        return NoContent();
    }
}
