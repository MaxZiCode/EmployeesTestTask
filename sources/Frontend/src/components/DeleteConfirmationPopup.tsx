import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';
import Employee from '../types/Employee';

interface DeleteConfirmationPopupProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedEmployees: Employee[]
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({ open, onClose, onConfirm, selectedEmployees }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        Are you sure you want to delete the following employees?
        <List>
          {selectedEmployees.map((employee) => (
            <ListItem key={employee.id}>
              <ListItemText
                primary={`${employee.firstName} ${employee.lastName}`}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationPopup;