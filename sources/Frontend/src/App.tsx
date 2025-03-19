import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEmployees, createEmployee, updateEmployee, deleteEmployee, RootState, AppDispatch } from './store';
import RecordsList from './components/EmployeeList';
import AddEditPopup from './components/AddEditPopup';
import DeleteConfirmationPopup from './components/DeleteConfirmationPopup';
import { Button, Container, Typography } from '@mui/material';
import Employee from './types/Employee';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees);

  const [isAddEditPopupOpen, setIsAddEditPopupOpen] = useState<boolean>(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);
  const [editEmployeeData, setEditEmployeeData] = useState<Employee | null>(null);
  
  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch])
  
  const handleAddEmployee = () => {
    setEditEmployeeData(null);
    setIsAddEditPopupOpen(true);
  };
  
  const handleEmployeeAction = (id: number, setPopupFunc: (isOpened: boolean) => void) => {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      setEditEmployeeData(employee);
      setPopupFunc(true);
    }
  }

  const handleSubmitEmployee = (data: Omit<Employee, "id">) => {
    if (editEmployeeData) {
      dispatch(updateEmployee({id: editEmployeeData.id, ...data}));
    } else {
      dispatch(createEmployee(data));
    }
    setIsAddEditPopupOpen(false);
  };

  const handleConfirmDelete = () => {
    if (editEmployeeData !== null) {
      dispatch(deleteEmployee(editEmployeeData.id));
      setEditEmployeeData(null);
    }
    setIsDeletePopupOpen(false);
  };

  return (
    <Container style={{ display: "flex", flexDirection: "column", maxWidth: 600, padding: 20, maxHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Employees List
      </Typography>
      <RecordsList onEdit={(id) => handleEmployeeAction(id, setIsAddEditPopupOpen)} onDelete={(id) => handleEmployeeAction(id, setIsDeletePopupOpen)} />
      <Button onClick={handleAddEmployee} variant="contained" color="primary" style={{ marginTop: "16px" }}>
        Add Employee
      </Button>
      <AddEditPopup
        open={isAddEditPopupOpen}
        onClose={() => setIsAddEditPopupOpen(false)}
        onSubmit={handleSubmitEmployee}
        initialData={editEmployeeData ?? undefined}
      />
      <DeleteConfirmationPopup
        open={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
};

export default App;