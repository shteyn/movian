import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux"; // allows to get state from redux into react component
import { getFilms, deleteFilm, getOneFilmData } from "../actions/filmAction";
import UpdateMovieModal from "./UpdateMovieModal";
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
  getFilmDataBtn = id => {
    this.props.getOneFilmData(id);
    console.log("ID from update BTN", id);
  };

  render() {
    const { films } = this.props.film;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="films-list">
            {films.map(({ _id, name, year, description, actor, image }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem className="mt-4">
                  <Button
                    className="remove-btn mr-3 btn-danger"
                    onClick={this.deleteFilmBtn.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  <Button onClick={this.getFilmDataBtn.bind(this, _id)}>
                    <UpdateMovieModal />
                  </Button>
                  <div>{name}</div>
                  <div>{year}</div>
                  <div>{description}</div>
                  <div>{actor}</div>
                  <div>
                    <img src={image} alt="" />
                  </div>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

FilmsList.propTypes = {
  getFilms: propTypes.func.isRequired,
  film: propTypes.object.isRequired
};

//1. allows us to take the initialState from "filmReducer.js" and map it to component property, so we can use it in our component as "this.props.film"
const mapStateToProps = state => ({
  //we are calling film, because we called it like that in our index.js in "/reducers/index.js"
  film: state.film
});

export default connect(
  mapStateToProps,
  { getFilms, deleteFilm, getOneFilmData }
)(FilmsList);
//instead of exporting the actual class of the component,
