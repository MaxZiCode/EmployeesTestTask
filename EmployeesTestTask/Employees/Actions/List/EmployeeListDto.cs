using EmployeesTestTask.Employees.Models;

namespace EmployeesTestTask.Employees.Actions.List;

// TODO: sync namespaces
public class EmployeeListDto
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public Gender Sex { get; set; }
}
