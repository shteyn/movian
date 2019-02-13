//Makes request to the back-end

import axios from "axios";
import {
  GET_FILMS,
  ADD_FILM,
  DELETE_FILM,
  UPDATE_FILM,
  FILMS_LOADING
} from "./types";

/*****GET ALL FILMS****/
//using "dispatch" allows us to send a "type" and a payload(data that comes from our request in api/films.js) to reducer
export const getFilms = () => dispatch => {
  dispatch(filmsLoading());
  axios.get("api/films").then(res => {
    //console.log("ActionsFile: req.data comes as json from films.api", res.data);
    dispatch({
      //dispatch to filmReducer.js
      type: GET_FILMS,
      payload: res.data
    });
  });
};

/*****ADD NEW FILM*
 * @takes state with new object from FilmModels and stores in res.data
 * @dispatching res.data to filmReducer.js?
 * ***/
export const addFilm = film => dispatch => {
  axios.post("/api/films/", film).then(res =>
    dispatch({
      type: ADD_FILM,
      payload: res.data
    })
  );
};

/*****DELETE FILM****
 **** SECOND STEP
 ********************/
//1. id comes from "deleteFilmBtn" func in FilmsList.js
//2. Sends the object (type and payload) to the filmReducer.js
export const deleteFilm = id => dispatch => {
  axios.delete(`/api/films/${id}`).then(res => {
    console.log("from deleteFilm in actions", res);
    dispatch({
      type: DELETE_FILM,
      payload: id
    });
  });
};

/*****UPDATE FILM****
 * **** SECOND STEP
 //1. id comes from "updateFilmBtn" func in FilmsList.js
//2. Sends the object (type and payload) to the filmReducer.js
 ********************/

export const updateFilm = film => dispatch => {
  axios.put(`/api/films/${film.id}`, film).then(res => {
    dispatch({
      type: UPDATE_FILM,
      payload: res.data
    })
  }
  );
};

export const getOneFilmData = id => dispatch => {
  axios.get(`/api/films/${id}`).then(res => {
    dispatch({
      type: UPDATE_FILM,
      payload: res.data
    });

    console.log("from getOneFilmData in actions", res.data);
  });
};

/*****FILMS LOADING****/
export const filmsLoading = () => {
  return {
    type: FILMS_LOADING
  };
};
