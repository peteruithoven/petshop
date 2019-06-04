import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default props => (
  <Box mx={3}>
    <Typography color="error" paragraph {...props} />
  </Box>
);
