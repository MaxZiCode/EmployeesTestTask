using EmployeesTestTask.Employees.Actions.List;
using EmployeesTestTask.Employees.Models;
using EmployeesTestTask.Employees.Services;

using FluentValidation;
using FluentValidation.AspNetCore;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.Create;

[Route("api/v1.0/employees")]
[ApiController]
public class EmployeeCreateController(IEmployeeCreateService service, IValidator<IEmployeeDto> validator) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CreateEmployeeAsync(EmployeeCreateDto dto)
    {
        var validationResult = validator.Validate(dto);
        if (!validationResult.IsValid)
        {
            validationResult.AddToModelState(ModelState);
            return ValidationProblem();
        }

        EmployeeListDto newEmployeeDto = await service.CreateEmployeeAsync(dto);
        return StatusCode(201, newEmployeeDto);
    }
}
