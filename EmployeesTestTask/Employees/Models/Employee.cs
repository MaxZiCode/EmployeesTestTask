namespace EmployeesTestTask.Employees.Models;

public class Employee
{
    public int Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public Gender Gender { get; set; }
}
