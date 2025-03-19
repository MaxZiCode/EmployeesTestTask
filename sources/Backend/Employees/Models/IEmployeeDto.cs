namespace EmployeesTestTask.Employees.Models;

public interface IEmployeeDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }
    public Gender Gender { get; set; }
}
