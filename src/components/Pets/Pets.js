import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../actions/index.js';
import PetPreview from './PetPreview/PetPreview.js';
import { getPets } from '../../reducers/index.js';
import { units } from '../../theme.js';

const Grid = styled.div`
  display: grid;
  grid-gap: ${units(3)};
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  padding: ${units(3)};
`;

class Pets extends Component {
  componentDidMount() {
    this.props.loadPets();
  }
  render() {
    const { pets } = this.props;
    return (
      <Grid>
        {pets.map(pet => (
          <PetPreview key={pet.id} {...pet} />
        ))}
      </Grid>
    );
  }
}

export default connect(
  state => ({
    pets: getPets(state),
  }),
  {
    loadPets: actions.loadPets,
  }
)(Pets);
