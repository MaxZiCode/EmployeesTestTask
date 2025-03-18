﻿using EmployeesTestTask.Employees.Database;
using EmployeesTestTask.Employees.Repositories;
using EmployeesTestTask.Employees.Services;

using Microsoft.EntityFrameworkCore;

namespace EmployeesTestTask.Employees.Configuration.Extensions;

public static class EmployeeServiceCollectionExtensions
{
    public static IServiceCollection AddEmployeeServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IEmployeeRepository, EmployeeRepository>();
        services.AddScoped<IEmployeeCreateService, EmployeeCreateService>();
        services.AddScoped<IEmployeeUpdateService, EmployeeUpdateService>();
        services.AddScoped<IEmployeeDeleteService, EmployeeDeleteService>();
        services.AddScoped<IEmployeeListService, EmployeeListService>();

        services.AddDbContext<EmployeeDbContext>((opt) => opt.UseSqlServer(configuration.GetConnectionString("employees")));

        return services;
    }
}
