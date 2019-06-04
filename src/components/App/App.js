import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Box } from '@material-ui/core';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Pets from '../Pets/Pets.js';
import Pet from '../Pet/Pet.js';
import AddPet from '../AddPet/AddPet.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import * as reducers from '../../reducers/index.js';

const App = ({ isAuthenticated }) => (
  <Router>
    <>
      <Header />
      <Box pt={[2, 3]} clone>
        <Container maxWidth="md">
          <Switch>
            <ProtectedRoute
              path="/login"
              component={Login}
              predicate={!isAuthenticated}
              redirectTo="/"
              useFrom
            />
            <ProtectedRoute
              path="/"
              predicate={isAuthenticated}
              redirectTo="/login"
            >
              <Switch>
                <Route path="/" exact component={Pets} />
                <Route path="/add" component={AddPet} />
                <Route path="/:id" component={PetRoute} />
              </Switch>
            </ProtectedRoute>
          </Switch>
        </Container>
      </Box>
    </>
  </Router>
);

const PetRoute = ({ match }) => <Pet id={match.params.id} />;

export default connect(state => ({
  isAuthenticated: reducers.isAuthenticated(state),
}))(App);
