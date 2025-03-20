import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { List, ListItem, ListItemText, Button, Typography, Box, Checkbox } from '@mui/material';

interface EmployeeListProps {
  onEdit: (id: number) => void;
  onSelect: (selectedIds: number[]) => void;
}

const EmployeeList: React.FC<EmployeeListProps> =  ({ onEdit, onSelect }) => {
  const employees = useSelector((state: RootState) => state.employees);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  const handleToggleSelect = (id: number) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id];
    setSelectedIds(newSelectedIds);
    onSelect(newSelectedIds);
  };
  
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
          <Checkbox
              checked={selectedIds.includes(employee.id!)}
              onChange={() => handleToggleSelect(employee.id!)}
            />
          <ListItemText
            primary={`${employee.firstName} ${employee.lastName}`}
            secondary={`${employee.age} years`}
          />
          <Button onClick={() => onEdit(employee.id)} color="primary">
            Edit
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default EmployeeList;