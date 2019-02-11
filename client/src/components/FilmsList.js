import React, {Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {getFilms, deleteFilm} from "../actions/filmAction";
import PropTypes from "prop-types";

// import CardComponent from './UI/CardComponent'




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
        const {films} = this.props.film;
        return (
            <Container className="FilmsListContainer">
                <ListGroup>
                    <TransitionGroup className="films-list">
                        {films.map(({_id, name, year, description, actor, image}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="ListGroupItem">
                                    <div className="imgDiv">
                                        <img src={image} alt=""/>
                                    </div>
                                    <div><span>Name:</span> {name}</div>
                                    <div><span>Year:</span> {year}</div>
                                    <div><span>Actor:</span> {actor}</div>
                                    <div><span>Description:</span> {description}</div>
                                    <Button
                                        className="remove-btn mr-3 btn-danger"
                                        style={{margin: "0"}}
                                        onClick={this.deleteFilmBtn.bind(this, _id)}
                                    >
                                        <span>remove</span>
                                    </Button>
                                    <Button
                                        className="remove-btn mr-3 btn-danger"
                                        style={{margin: "0"}}
                                    >
                                        <span>settings</span>
                                    </Button>

                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

FilmsList.PropTypes = {
    getFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    film: state.film
});
export default connect(
    mapStateToProps,
    {getFilms, deleteFilm}
)(FilmsList);
