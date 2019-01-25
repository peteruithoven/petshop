import { RSAA, getJSON } from "redux-api-middleware";
import qs from "qs";
import { normalize, schema } from "normalizr";

const API_BASE = "/api/v1/";

// actions
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const PETS_REQUEST = "PETS_REQUEST";
export const PETS_SUCCESS = "PETS_SUCCESS";
export const PETS_FAILURE = "PETS_FAILURE";

export const DELETE_PET_REQUEST = "DELETE_PET_REQUEST";
export const DELETE_PET_SUCCESS = "DELETE_PET_SUCCESS";
export const DELETE_PET_FAILURE = "DELETE_PET_FAILURE";

export const ADD_PET_REQUEST = "ADD_PET_REQUEST";
export const ADD_PET_SUCCESS = "ADD_PET_SUCCESS";
export const ADD_PET_FAILURE = "ADD_PET_FAILURE";

// action creators
export function login(email, password) {
  const queryString = qs.stringify({
    email,
    password
  });
  // generate API request action for redux-api-middleware
  return {
    [RSAA]: {
      endpoint: `${API_BASE}login?${queryString}`,
      method: "POST",
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]
    }
  };
}

export function logout() {
  return { type: LOGOUT };
}

export function loadPets(id) {
  let endpoint = `${API_BASE}pets/`;
  if (id) endpoint += id;
  return {
    [RSAA]: {
      endpoint,
      method: "GET",
      types: [
        PETS_REQUEST,
        {
          type: PETS_SUCCESS,
          payload: processPetsPayload
        },
        PETS_FAILURE
      ]
    }
  };
}

export function deletePet(id) {
  return {
    [RSAA]: {
      endpoint: `${API_BASE}pets/${id}`,
      method: "DELETE",
      types: [
        DELETE_PET_REQUEST,
        {
          type: DELETE_PET_SUCCESS,
          payload: {
            pets: {
              [id]: null
            }
          }
        },
        DELETE_PET_FAILURE
      ]
    }
  };
}

export function addPet(input) {
  return {
    [RSAA]: {
      endpoint: `${API_BASE}pets`,
      method: "POST",
      body: toFormData(input),
      types: [
        ADD_PET_REQUEST,
        {
          type: ADD_PET_SUCCESS,
          payload: processPetsPayload
        },
        ADD_PET_FAILURE
      ]
    }
  };
}

// utils
function toFormData(data) {
  var formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }
  return formData;
}

const petSchema = new schema.Entity("pets");
const petsSchema = [petSchema];

async function processPetsPayload(action, state, res) {
  const json = await getJSON(res);
  const pets = Array.isArray(json) ? json : [json];
  // transform array into normalized  object
  return normalize(pets, petsSchema).entities;
}
