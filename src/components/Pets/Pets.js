import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index.js';
import PetPreview from './PetPreview/PetPreview.js';
import { getPets } from '../../reducers/index.js';
import { styled } from '@material-ui/styles';

const Grid = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridGap: theme.spacing(3),
    gridTemplateColumns: 'repeat(auto-fill, minmax(13rem, 1fr))',
    padding: theme.spacing(3, 0),
  };
});

const Pets = ({ loadPets, pets }) => {
  useEffect(() => {
    loadPets();
  }, [loadPets]);
  return (
    <Grid>
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
