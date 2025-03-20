import { AxiosResponse } from "axios";
import defaultAxiosInstance from "./axios/defaultAxiosInstance";
import Employee from "../types/Employee";

const EMPLOYEE_ROUTE = "employees";

export function getEmployeeList(): Promise<AxiosResponse<Employee[]>> {
    return defaultAxiosInstance.get(EMPLOYEE_ROUTE);
}

export function createEmployee(employee: Omit<Employee, "id">): Promise<AxiosResponse<Employee>> {
    return defaultAxiosInstance.post(EMPLOYEE_ROUTE, employee);
}

export function updateEmployee(id: number, employee: Omit<Employee, "id">): Promise<AxiosResponse<Employee>> {
    return defaultAxiosInstance.put(`${EMPLOYEE_ROUTE}/${id}`, employee);
}

export function deleteEmployees(ids: number[]): Promise<AxiosResponse> {
    return defaultAxiosInstance.delete(EMPLOYEE_ROUTE, { data: ids });
}