import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';

export default function FormContainer({ title, children }) {
  return (
    <Box display="flex" justifyContent={['flex-start', 'center']}>
      <Paper>
        <Box mx={3} mt={3}>
          <Typography variant="h2" paragraph>
            {title}
          </Typography>
        </Box>
        {children}
      </Paper>
    </Box>
  );
}
