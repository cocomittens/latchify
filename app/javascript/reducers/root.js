import { combineReducers } from "redux";
import patternReducer from "./pattern";
import sessionReducer from "./session";

export default combineReducers({
  session: sessionReducer,
  pattern: patternReducer,
});
