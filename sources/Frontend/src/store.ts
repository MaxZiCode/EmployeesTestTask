import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type Employee from './types/Employee';
import * as employeeApi from './api/employeeApi';

const NAME = "employees";
const initialState: Employee[] = [];

export const loadEmployees = createAsyncThunk(`${NAME}/loadEmployees`, async () => {
    const response = await employeeApi.getEmployeeList();
    return response.data;
});

export const createEmployee = createAsyncThunk(`${NAME}/createEmployee`, async (employee: Omit<Employee, 'id'>) => {
    const response = await employeeApi.createEmployee(employee);
    return response.data;
});

export const updateEmployee = createAsyncThunk(`${NAME}/updateEmployee`, async ({ id, ...employee }: Employee) => {
    const response = await employeeApi.updateEmployee(id, employee);
    return response.data;
});

export const batchDeleteEmployees = createAsyncThunk(`${NAME}/batchDeleteEmployees`, async (ids: number[]) => {
    await employeeApi.deleteEmployees(ids);
    return ids;
});

const employeeSlice = createSlice({
    name: NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadEmployees.fulfilled, (_, action) => {
            return action.payload;
        });

        builder.addCase(createEmployee.fulfilled, (state, action) => {
            state.push(action.payload);
        });

        builder.addCase(updateEmployee.fulfilled, (state, action) => {
            const index = state.findIndex((emp) => emp.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        });

        builder.addCase(batchDeleteEmployees.fulfilled, (state, action) => {
            return state.filter((emp) => !action.payload.includes(emp.id));
        });
    },
});


const store = configureStore({
    reducer: {
        employees: employeeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;