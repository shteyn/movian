// Actual State

import {
  GET_FILMS,
  ADD_FILM,
  DELETE_FILM,
  UPDATE_FILM,
  FILMS_LOADING
} from "../actions/types";

const initialState = {
  films: [],
  loading: false
};

//action has a type attached which is coming from the filmActions.js (e.g. GET_FILMS)
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false
      };
    case UPDATE_FILM:
      let films = state.films;
      let updatedFilms = films.map(item => {
        if(item._id === action.payload._id){
          return { ...item, ...action.payload }
        }
        return item;

      });
      return {
        ...state,
        films: updatedFilms,
        loading: false
      };

      // return {
      //   ...state,
      //   films: [...state.films, action.payload],
      //   loading: false
      // };
    /*****DELETE FILM****
     **** THIRD STEP
     //1. filter() creates and returns a new array, without given id (!==id)
     ********************/
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter(film => film._id !== action.payload)
      };

    case ADD_FILM:
      return {
        ...state,
        //action.payload - new film
        // ...state.films - copy of the state that will be updated with new film from action.payload
        films: [...state.films, action.payload]
      };
    case FILMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
