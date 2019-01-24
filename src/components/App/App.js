import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import Pets from "../Pets/Pets.js";
import Pet from "../Pet/Pet.js";
import AddPet from "../AddPet/AddPet.js";
import PredicatedRoute from "../PredicatedRoute/PredicatedRoute.js";
import { isAuthenticated, isNotAuthenticated } from "../../reducers/index.js";

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <PredicatedRoute
            path="/login"
            component={Login}
            predicate={isNotAuthenticated}
            redirect="/"
          />
          <PredicatedRoute
            path="/"
            predicate={isAuthenticated}
            redirect="/login"
          >
            <Switch>
              <Route path="/" exact component={Pets} />
              <Route path="/add" component={AddPet} />
              <Route path="/:id" component={PetRoute} />
            </Switch>
          </PredicatedRoute>
        </Switch>
      </>
    </Router>
  );
}

const PetRoute = ({ match }) => <Pet id={match.params.id} />;
