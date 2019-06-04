import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, Typography, Box, Link } from '@material-ui/core';

export default function PetPreview({ name, price, type, id }) {
  return (
    <Card>
      <Box m={2} mt={1}>
        <Typography variant="h4">
          <Link component={RouterLink} to={`/${id}`}>
            {name}
          </Link>
        </Typography>
      </Box>
      <Box m={2} mt={0}>
        <Typography>{type}</Typography>
      </Box>
      <Box m={2} mt={0}>
        <Typography align="right">€ {price}</Typography>
      </Box>
    </Card>
  );
}
