//Reducers store
//if there are additional reducer we should import it here
import { combineReducers } from "redux";
//import { routerReducer } from "react-router-redux";
//import { reducer as formReducer } from 'redux-form';
import filmReducer from "./filmReducer";

export default combineReducers({
  film: filmReducer,
  //routing: routerReducer,
  //form: formReducer,
  //and add additional property
});
