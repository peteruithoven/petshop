import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Typography, Box } from "@material-ui/core";
import { withRouter } from "react-router";
import * as actions from "../../actions/index.js";

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
      <Box p={3}>
        <Typography variant="h2" paragraph>{name}</Typography>
        <Typography paragraph>
          Type: <em>{type}</em>
        </Typography>
        <Typography paragraph>
          Price: <em>€ {price}</em>
        </Typography>
        <Button color="secondary" variant="contained" onClick={this.deletePet}>
          Delete
        </Button>
      </Box>
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
