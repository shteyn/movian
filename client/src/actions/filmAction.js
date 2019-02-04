import axios from "axios";
import { GET_FILMS, ADD_FILM, DELETE_FILM, FILMS_LOADING } from "./types";

/*****GET ALL FILMS****/
export const getFilms = () => dispatch => {
  dispatch(filmsLoading());
  axios.get("api/films").then(res =>
    dispatch({
      type: GET_FILMS,
      payload: res.data
    })
  );
};

/*****ADD NEW FILM*
 * @goes to POST REQUEST in /routes/api/films.js
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
  axios.delete(`/api/films/${id}`).then(res =>
    dispatch({
      type: DELETE_FILM,
      payload: id
    })
  );
};

/*****FILMS LOADING****/
export const filmsLoading = () => {
  return {
    type: FILMS_LOADING
  };
};
