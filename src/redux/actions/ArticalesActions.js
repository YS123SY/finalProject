import { ADD_ARTICALE, REMOVE_ARTICALE, UPDATE_ARTICALE,ADD_USER,LOGIN,GET_USER } from "./types";

export function addArticale(articale) {
  return {
    type: ADD_ARTICALE,
    articale
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

export function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}
export function loginUser(user){
return {
  type: LOGIN,
  user
};
}
export function getUsers(){
  return {
    type: GET_USER
  };
  }