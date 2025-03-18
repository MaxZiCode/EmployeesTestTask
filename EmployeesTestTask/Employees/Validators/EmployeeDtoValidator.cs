using EmployeesTestTask.Employees.Models;

using FluentValidation;

namespace EmployeesTestTask.Employees.Validators;

public class EmployeeDtoValidator : AbstractValidator<IEmployeeDto>
{
    public EmployeeDtoValidator()
    {
        RuleFor(e => e.FirstName).NotEmpty();
        RuleFor(e => e.LastName).NotEmpty();
        RuleFor(e => e.Gender).IsInEnum();
        RuleFor(e => e.Age).InclusiveBetween(18, 100);
    }
}
