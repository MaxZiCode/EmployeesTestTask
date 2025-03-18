using EmployeesTestTask.Employees.Models;

namespace EmployeesTestTask.Employees.Actions.Create;

public class EmployeeCreateDto
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public Gender Gender { get; set; }
}
