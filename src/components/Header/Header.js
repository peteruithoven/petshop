import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Space from "styled-space";
import { Box } from "@rebass/grid";
import * as actions from "../../actions/index.js";
import * as reducers from "../../reducers/index.js";

function Header({ isAuthenticated, logout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flex="1 1 auto">
          <Typography variant="h6" component={Link} to="/">
            Pets Shop
          </Typography>
        </Box>
        {isAuthenticated && (
          <>
            <Space ml={2}>
              <Button component={Link} to="/add">
                Add pet
              </Button>
              <Button onClick={logout}>Logout</Button>
            </Space>
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
