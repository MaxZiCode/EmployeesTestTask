import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type Employee from './types/Employee';

const initialState: Employee[] = [];

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.push(action.payload);
        },
        deleteEmployee: (state, action: PayloadAction<number>) => {
            return state.filter((_, index) => index !== action.payload);
        },
    },
});


const store = configureStore({
    reducer: {
        employees: employeeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const { addEmployee, deleteEmployee } = employeeSlice.actions;

export default store;