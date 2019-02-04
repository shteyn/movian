import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getFilms, deleteFilm } from "../actions/filmAction";
import propTypes from "prop-types";

class FilmsList extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  /*****DELETE FILM****
   **** FIRST STEP
   ********************/
  //sends id to filmAction.js
  deleteFilmBtn = id => {
    this.props.deleteFilm(id);
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
const mapStateToProps = state => ({
  film: state.film
});
export default connect(
  mapStateToProps,
  { getFilms, deleteFilm }
)(FilmsList);
