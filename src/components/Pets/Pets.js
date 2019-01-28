import React, { Component } from "react";
import { connect } from "react-redux";
import "styled-components/macro";
import { space, gridGap } from 'styled-system';
import * as actions from "../../actions/index.js";
import PetPreview from "./PetPreview/PetPreview.js";
import { getPets } from "../../reducers/index.js";

const Grid = props => (
  <div
    gridGap={3}
    p={3}
    {...props}
    css={`
      ${space}
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
      ${gridGap}
    `}
  />
)

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
    pets: getPets(state)
  }),
  {
    loadPets: actions.loadPets
  }
)(Pets);
