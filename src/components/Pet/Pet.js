import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
import * as actions from '../../actions/index.js';

const Pet = ({ pet, deletePet, loadPets, id, history }) => {
  useEffect(() => {
    loadPets(id);
  }, [loadPets, id]);
  if (!pet) return null;
  const { type, name, price } = pet;
  return (
    <>
      <Typography variant="h2">{name}</Typography>
      <Typography>
        Type: <em>{type}</em>
      </Typography>
      <Typography paragraph>
        Price: <em>€ {price}</em>
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          deletePet(id);
          history.push('/');
        }}
      >
        Delete
      </Button>
    </>
  );
};

export default connect(
  (state, ownProps) => ({
    pet: state.entities.pets[ownProps.id],
  }),
  {
    loadPets: actions.loadPets,
    deletePet: actions.deletePet,
  }
)(withRouter(Pet));
