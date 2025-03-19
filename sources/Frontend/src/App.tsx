import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, deleteEmployee, RootState } from './store';
import RecordsList from './components/EmployeeList';
import AddEditPopup from './components/AddEditPopup';
import DeleteConfirmationPopup from './components/DeleteConfirmationPopup';
import { Button, Container, Typography } from '@mui/material';
import Employee from './types/Employee';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees);

  const [isAddEditPopupOpen, setIsAddEditPopupOpen] = useState<boolean>(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState<number | null>(null);
  const [editEmployeeData, setEditEmployeeData] = useState<Employee | null>(null);
  
  const handleAddEmployee = () => {
    setEditEmployeeData(null);
    setIsAddEditPopupOpen(true);
  };

  const handleEditEmployee = (index: number) => {
    setEditEmployeeData(employees[index]);
    setSelectedEmployeeIndex(index);
    setIsAddEditPopupOpen(true);
  };

  const handleDeleteEmployee = (index: number) => {
    setSelectedEmployeeIndex(index);
    setIsDeletePopupOpen(true);
  };

  const handleSubmitEmployee = (data: Employee) => {
    if (selectedEmployeeIndex !== null) {
      dispatch(deleteEmployee(selectedEmployeeIndex));
      dispatch(addEmployee(data));
    } else {
      dispatch(addEmployee(data));
    }
    setSelectedEmployeeIndex(null);
  };

  const handleConfirmDelete = () => {
    if (selectedEmployeeIndex !== null) {
      dispatch(deleteEmployee(selectedEmployeeIndex));
      setSelectedEmployeeIndex(null);
    }
    setIsDeletePopupOpen(false);
  };

  return (
    <Container style={{ display: "flex", flexDirection: "column", maxWidth: 600, padding: 20, maxHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Employees List
      </Typography>
      <RecordsList onEdit={handleEditEmployee} onDelete={handleDeleteEmployee} />
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