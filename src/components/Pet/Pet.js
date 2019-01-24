import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import styled from "styled-components";
import * as actions from "../../actions/index.js";
import { units } from "../../theme.js";

const Page = styled.div`
  padding: ${units(3)};
`;

class Pet extends Component {
  componentDidMount() {
    const { loadPets, id } = this.props;
    loadPets(id);
  }
  deletePet = () => {
    const { deletePet, id, history } = this.props;
    deletePet(id);
    history.push("/");
  };
  render() {
    const { pet } = this.props;
    if (!pet) return null;
    const { type, name, price } = pet;
    return (
      <Page>
        <Typography variant="h2">{name}</Typography>
        <p>
          Type: <em>{type}</em>
        </p>
        <p>
          Price: <em>€ {price}</em>
        </p>
        <Button color="secondary" variant="contained" onClick={this.deletePet}>
          Delete
        </Button>
      </Page>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    pet: state.entities.pets[ownProps.id]
  }),
  {
    loadPets: actions.loadPets,
    deletePet: actions.deletePet
  }
)(withRouter(Pet));
