import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index.js';
import PetPreview from './PetPreview/PetPreview.js';
import { getPets } from '../../reducers/index.js';
import Grid from '../Grid/Grid.js';

const Pets = ({ loadPets, pets }) => {
  useEffect(() => {
    loadPets();
  }, [loadPets]);
  return (
    <Grid
      gridGap={[2, 3]}
      gridTemplateColumns="repeat(auto-fill, minmax(13rem, 1fr))"
    >
      {pets.map(pet => (
        <PetPreview key={pet.id} {...pet} />
      ))}
    </Grid>
  );
};

export default connect(
  state => ({
    pets: getPets(state),
  }),
  {
    loadPets: actions.loadPets,
  }
)(Pets);
