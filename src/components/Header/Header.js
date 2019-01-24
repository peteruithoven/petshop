import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import * as actions from "../../actions/index.js";
import * as reducers from "../../reducers/index.js";
import { units } from "../../theme.js";

const Title = styled(Typography).attrs({
  variant: "h6"
})`
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  margin-left: ${units(1)};
`;

function Header({ isAuthenticated, logout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Title component={Link} to="/">
          Pets Shop
        </Title>
        {isAuthenticated && (
          <>
            <StyledButton component={Link} to="/add">
              Add pet
            </StyledButton>
            <StyledButton onClick={logout}>
              Logout
            </StyledButton>
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
