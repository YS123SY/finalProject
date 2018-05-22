import { ADD_USER,GET_USER } from "../actions/types";
import axios from "axios";


const INITIAL_STATE = {
    users:[]
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
    let listUsers=state.users
    axios.get("/login").then(res =>
     listUsers.push(res)
    );
    return{
        ...state,
        listUsers
    }
    break;

      case ADD_USER: 
      const users=state.users;
      users.push({
        name:action.user.name,
        email:action.user.email,
        image:action.user.image,
        password:action.user.password,
        confirme:action.user.confirme
      })
      console.log(users,'hhhhhhhhhhhhhhhhhh')
      break;
    default:
      return state;
  }
};