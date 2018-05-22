import { combineReducers } from "redux";
import ArticaleReducers from "./ArticaleReducers";
import usersReducers from "./usersReducers"

export default combineReducers({
  articales: ArticaleReducers,
  users:usersReducers
});
