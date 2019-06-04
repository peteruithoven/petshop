import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, Typography, Box, Link } from '@material-ui/core';

export default function PetPreview({ name, price, type, id }) {
  return (
    <Box px={2} py={1.5} clone>
      <Card>
        <Typography variant="h4">
          <Link component={RouterLink} to={`/${id}`}>
            {name}
          </Link>
        </Typography>
        <Typography>{type}</Typography>
        <Typography align="right">€ {price}</Typography>
      </Card>
    </Box>
  );
}
