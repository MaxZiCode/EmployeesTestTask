import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEmployees, createEmployee, updateEmployee, RootState, AppDispatch, batchDeleteEmployees } from './store';
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
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch])
  
  const handleAddEmployee = () => {
    setEditEmployeeData(null);
    setIsAddEditPopupOpen(true);
  };
  
  const handleEmployeeAction = (id: number, popupFunc: (open: boolean) => void) => {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      setEditEmployeeData(employee);
      popupFunc(true);
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
  
  const handleDelete = () => {
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedIds.length)
      dispatch(batchDeleteEmployees(selectedIds));
    
    setIsDeletePopupOpen(false);
    setSelectedIds([]);
  };

  return (
    <Container style={{ display: "flex", flexDirection: "column", maxWidth: 600, padding: 20, maxHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Employees List
      </Typography>
      <RecordsList 
        onEdit={(id) => handleEmployeeAction(id, setIsAddEditPopupOpen)} 
        onSelect={setSelectedIds} />
      <Button onClick={handleAddEmployee} variant="contained" color="primary" style={{ marginTop: "16px" }}>
        Add Employee
      </Button>
      <Button
          onClick={handleDelete}
          variant="contained"
          color="secondary"
          disabled={selectedIds.length === 0}
          style={{ marginTop: 12 }}
        >
          Delete Selected
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
        selectedEmployees={employees.filter((emp) => selectedIds.includes(emp.id))}
      />
    </Container>
  );
};

export default App;