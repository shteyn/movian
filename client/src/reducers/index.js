//Reducers store
//if there are additional reducer we should import it here
import { combineReducers } from "redux";
import filmReducer from "./filmReducer";

export default combineReducers({
  film: filmReducer
  //and add additional property
});
