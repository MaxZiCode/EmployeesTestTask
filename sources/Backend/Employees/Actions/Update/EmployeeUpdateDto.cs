using EmployeesTestTask.Employees.Models;

namespace EmployeesTestTask.Employees.Actions.Update;

public class EmployeeUpdateDto : IEmployeeDto
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int? Age { get; set; }
    public Gender Gender { get; set; }
}
