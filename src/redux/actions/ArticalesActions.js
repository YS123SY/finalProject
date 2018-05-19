import { ADD_ARTICALE, REMOVE_ARTICALE, UPDATE_ARTICALE } from "./types";

export function addArticale(articale) {
  return {
    type: ADD_ARTICALE,
    article
  };
}

export function removeArticale(id) {
  return {
    type: REMOVE_ARTICALE,
    id
  };
}
export function updateArticale(articale) {
  return {
    type: UPDATE_ARTICALE,
    articale
  };
}
