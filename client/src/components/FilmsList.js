import React, { Component } from "react";
import { Container, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux"; // allows to get state from redux into react component
import { getFilms, deleteFilm, getOneFilmData } from "../actions/filmAction";
import UpdateMovieModal from "./UpdateMovieModal";
import SeeMovie from './SeeMovie';
import propTypes from "prop-types";

class FilmsList extends Component {

  componentDidMount() {
    this.props.getFilms();
    //runs getFilms() in filmActions.js
  }

  /*****DELETE FILM****
   **** FIRST STEP
   ********************/
  //sends id to filmAction.js
  deleteFilmBtn = id => {
    this.props.deleteFilm(id);
    console.log("ID from delete BTN fom FilmsList.js", id);
  };

  /*****UPDATE FILM****
   **** FIRST STEP
   ********************/
  //sends id to filmAction.js


  render() {
    const { films } = this.props.film;
    return (
      <Container className="divContainer">
        <TransitionGroup className="films-list">
          {films.map((oneFilm) => (
            <CSSTransition key={oneFilm._id} timeout={500} classNames="fade">
              <ListGroupItem className="mt-4">
                <div className="imgDiv">
                  <img src={oneFilm.image} alt="" />
                </div>
                <div>{oneFilm.name}</div>
                <div>{oneFilm.year}</div>
                <div>{oneFilm.description}</div>
                <div>{oneFilm.actor}</div>
                <div className="ButtonContainer">
                  <Button
                    className="remove-btn mr-3 btn-danger"
                    onClick={this.deleteFilmBtn.bind(this, oneFilm._id)}
                  >
                    Remove
                  </Button>
                  <Button>
                    <UpdateMovieModal listFilm={oneFilm} />
                  </Button>
                  <Button>
                    <SeeMovie listFilm={oneFilm} />
                  </Button>
                </div>

              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    );
  }

}


FilmsListTest.PropTypes = {
    getFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired
};


//1. allows us to take the initialState from "filmReducer.js" and map it to component property, so we can use it in our component as "this.props.film"
const mapStateToProps = state => ({
    //we are calling film, because we called it like that in our index.js in "/reducers/index.js"
    film: state.film,
    // page: Number(state.routing.locationBeforeTransition.query.page) || 1,
});

export default connect(
    mapStateToProps,
    {getFilms, deleteFilm, getOneFilmData}
)(FilmsListTest);
//instead of exporting the actual class of the component,








