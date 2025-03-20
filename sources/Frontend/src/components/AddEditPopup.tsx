import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Employee from '../types/Employee';

interface AddEditPopupProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (employee: Omit<Employee, "id">) => void;
  initialData?: Employee;
}

const defaultValues = {
      firstName: "",
      lastName: "",
      age: "",
      gender: ""
    };

const AddEditPopup: React.FC<AddEditPopupProps> = ({ open, onClose, onSubmit, initialData }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    if (!open)
      return;
    
    if (initialData) {
      reset({
        ...initialData,
        age: initialData.age.toString(),
      });
    } else {
      reset(defaultValues);
    }
  }, [initialData, reset, open]);

  const onSubmitHandler = (employee: {
      firstName: string,
      lastName: string,
      age: string,
      gender: string
    }) => {
    const ageNumber = parseInt(employee.age);
    if (ageNumber >= 18 && ageNumber <= 100) {
      onSubmit({...employee, age: ageNumber, gender: employee.gender as "Male" | "Female"});
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                fullWidth
                margin="normal"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                fullWidth
                margin="normal"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />

          <Controller
            name="age"
            control={control}
            rules={{
              required: 'Age is required',
              validate: (value) => {
                const ageNumber = parseInt(value, 10);
                if (isNaN(ageNumber)) return 'Age must be a number';
                if (ageNumber < 18 || ageNumber > 100) return 'Age must be between 18 and 100';
                return true;
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                fullWidth
                margin="normal"
                type="number"
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            rules={{ required: 'Gender is required' }}
            render={({ field }) => (
              <FormControl fullWidth margin="normal" error={!!errors.gender}>
                <InputLabel>Gender</InputLabel>
                <Select {...field} label="Gender">
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
              </FormControl>
            )}
          />

          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              {initialData ? 'Save' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPopup;