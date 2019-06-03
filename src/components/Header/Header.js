import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box
 } from "@material-ui/core";
import * as actions from "../../actions/index.js";
import * as reducers from "../../reducers/index.js";

function Header({ isAuthenticated, logout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography  variant="h6" component={Link} to="/">
            Pets Shop
          </Typography>
        </Box>
        {isAuthenticated && (
          <>
            <Button ml={1} component={Link} to="/add">
              Add pet
            </Button>
            <Button ml={1} onClick={logout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  state => ({
    isAuthenticated: reducers.isAuthenticated(state)
  }),
  {
    logout: actions.logout
  }
)(Header);
