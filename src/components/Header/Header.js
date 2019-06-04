import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Link,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';
import * as actions from '../../actions/index.js';
import * as reducers from '../../reducers/index.js';

function Header({ isAuthenticated, logout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">
            <Link component={RouterLink} color="inherit" to="/">
              Pets Shop
            </Link>
          </Typography>
        </Box>
        {isAuthenticated && (
          <>
            <Button component={RouterLink} to="/add">
              Add pet
            </Button>
            <Button onClick={logout}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  state => ({
    isAuthenticated: reducers.isAuthenticated(state),
  }),
  {
    logout: actions.logout,
  }
)(Header);
