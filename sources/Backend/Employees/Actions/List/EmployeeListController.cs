using EmployeesTestTask.Employees.Services;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.List;

[Route(Routes.V1.EMPLOYEES)]
[ApiController]
public class EmployeeListController(IEmployeeListService employeeListService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetEmployeeListAsync()
    {
        var employees = await employeeListService.GetEmployees();
        return Ok(employees);
    }
}
