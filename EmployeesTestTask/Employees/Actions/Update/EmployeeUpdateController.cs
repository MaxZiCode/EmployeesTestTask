using EmployeesTestTask.Employees.Models;
using EmployeesTestTask.Employees.Services;

using FluentValidation;
using FluentValidation.AspNetCore;

using Microsoft.AspNetCore.Mvc;

namespace EmployeesTestTask.Employees.Actions.Update;

[Route("api/v1.0/employees")]
[ApiController]
public class EmployeeUpdateController(IEmployeeUpdateService service, IValidator<IEmployeeDto> validator) : ControllerBase
{
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateEmployeeAsync(int id, EmployeeUpdateDto dto)
    {
        var validationResult = validator.Validate(dto);
        if (!validationResult.IsValid)
        {
            validationResult.AddToModelState(ModelState);
            return ValidationProblem();
        }

        var updatedEmployeeDto = await service.UpdateEmployeeAsync(id, dto);
        if (updatedEmployeeDto == null)
            return NotFound();

        return Ok(updatedEmployeeDto);
    }
}
