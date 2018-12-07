import { combineReducers } from "redux";
import user from "./user";
import main from "./main";
import chat from "./chat";

export default combineReducers({
  user,
  main,
  chat
});
