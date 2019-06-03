import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default props => (
  <Box mx={3} mb={2}>
    <Typography color="error" {...props} />
  </Box>
);
