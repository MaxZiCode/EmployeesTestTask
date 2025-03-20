using EmployeesTestTask.Employees.Database;
using EmployeesTestTask.Employees.Models;
using EmployeesTestTask.Employees.Repositories;
using EmployeesTestTask.Employees.Services;
using EmployeesTestTask.Employees.Validators;

using FluentValidation;

using Microsoft.EntityFrameworkCore;

namespace EmployeesTestTask.Employees.Configuration.Extensions;

public static class EmployeeServiceCollectionExtensions
{
    public static IServiceCollection AddEmployeeServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IEmployeeRepository, EmployeeRepository>();
        services.AddScoped<IEmployeeCreateService, EmployeeCreateService>();
        services.AddScoped<IEmployeeUpdateService, EmployeeUpdateService>();
        services.AddScoped<IEmployeeListService, EmployeeListService>();
        services.AddScoped<IEmployeeBatchDeleteService, EmployeeBatchDeleteService>();

        services.AddDbContext<EmployeeDbContext>((opt) => opt.UseSqlServer(configuration.GetConnectionString("employees")));

        services.AddScoped<IValidator<IEmployeeDto>, EmployeeDtoValidator>();

        return services;
    }
}
