import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';

export default ({ title, children }) => (
  <Box display="flex" justifyContent="center">
    <Paper>
      <Box mx={3} mt={3}>
        <Typography variant="h2" paragraph>
          {title}
        </Typography>
        {children}
      </Box>
    </Paper>
  </Box>
);
