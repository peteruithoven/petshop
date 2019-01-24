import { combineReducers } from "redux";
import { createSelector } from "reselect";
import * as actions from "../actions";

export default combineReducers({
  token,
  entities: combineReducers({
    pets
  })
});

function token(state = null, action = {}) {
  // if actions contains token store it
  if (action.payload && action.payload.token) {
    return action.payload.token;
  // remove token on logout
  } else if (action.type === actions.LOGOUT) {
    return null;
  // remove token when expired
  } else if (action.payload && action.payload.status === 401) {
    return null;
  } else {
    return state;
  }
}

function pets(state = {}, action = {}) {
  if (action.payload && action.payload.pets) {
    // merge new / updates pets into state
    const newState = {
      ...state,
      ...action.payload.pets
    };
    // filter out deleted items (items set to null)
    return Object.keys(newState).reduce((obj, key) => {
      const value = newState[key];
      if (value != null) obj[key] = value;
      return obj;
    }, {});
  }
  return state;
}

// selectors
export const isAuthenticated = state => !!state.token;
export const isNotAuthenticated = state => !state.token;
// only recreate pets array when pets object changed
export const getPets = createSelector(
  [state => state.entities.pets],
  pets => Object.values(pets)
);
