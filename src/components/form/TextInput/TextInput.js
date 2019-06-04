import React from 'react';
import { TextField, Box } from '@material-ui/core';

export default function TextInput({ type = 'text', form, field, ...props }) {
  const { name } = field;
  const error = form.errors[name];
  const touched = form.touched[name];
  return (
    <Box mb={2}>
      <TextField
        id={name}
        type={type}
        error={touched && !!error}
        helperText={touched && error}
        {...field}
        {...props}
      />
    </Box>
  );
}
