import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';

interface EmployeeListProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> =  ({ onEdit, onDelete }) => {
  const employees = useSelector((state: RootState) => state.employees);
  
  if (employees.length === 0) {
    return (
      <Box display="flex" justifyContent="center" padding={5}>
        <Typography variant="h6">No employees in the list</Typography>
      </Box>
    );
  }

  return (
    <List style={{ flexShrink: 1, overflow: "auto" }}>
      {employees.map((employee, index) => (
        <ListItem
          key={employee.id}
          style={{
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f0f0f0',
          }}
        >
          <ListItemText
            primary={`${employee.firstName} ${employee.lastName}`}
            secondary={`${employee.age} years`}
          />
          <Button onClick={() => onEdit(employee.id)} color="primary">
            Edit
          </Button>
          <Button onClick={() => onDelete(employee.id)} color="secondary">
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default EmployeeList;