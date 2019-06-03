import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';

export default function FormContainer({ title, children }) {
  return (
    <Box display="flex" justifyContent={['flex-start', 'center']} p={3}>
      <Paper>
        <Box m={3} mb={2}>
          <Typography variant="h2">{title}</Typography>
        </Box>
        {children}
      </Paper>
    </Box>
  );
}
