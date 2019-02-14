import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {getFilms, deleteFilm, getOneFilmData} from "../actions/filmAction";
import PropTypes from "prop-types";
import UpdateMovieModal from './UpdateMovieModal'

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
        const {films} = this.props.film;
        return (
            <Container className="divContainer">
                    <TransitionGroup className="films-list">
                        {films.map((oneFilm) => (
                            <CSSTransition key={oneFilm._id} timeout={500} classNames="fade">
                                <ListGroupItem className="mt-4">
                                    <div className="imgDiv">
                                        <img src={oneFilm.image} alt=""/>
                                    </div>
                                    <div><span>Name: </span>{oneFilm.name}</div>
                                    <div>{oneFilm.year}</div>
                                    <div>{oneFilm.description}</div>
                                    <div>{oneFilm.actor}</div>

                                    <div className="ButtonContainer">
                                        <Button
                                            className="remove-btn mr-3 btn-danger"
                                            onClick={this.deleteFilmBtn.bind(this, oneFilm._id)}
                                        >
                                            remove
                                        </Button>
                                        <Button>
                                            <UpdateMovieModal listFilm={oneFilm}/>
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

FilmsList.PropTypes = {
    getFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired
};

//1. allows us to take the initialState from "filmReducer.js" and map it to component property, so we can use it in our component as "this.props.film"
const mapStateToProps = state => ({
    //we are calling film, because we called it like that in our index.js in "/reducers/index.js"
    film: state.film
});

export default connect(
    mapStateToProps,
    {getFilms, deleteFilm, getOneFilmData}
)(FilmsList);
//instead of exporting the actual class of the component,
