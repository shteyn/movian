import React, {Component} from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    // Input,
    Label,
    // Form,
    FormGroup, /*Input*/
} from "reactstrap";
import {connect} from "react-redux";
import {getFilms} from "../actions/filmAction";
//import { getOneFilmData } from "../actions/filmAction";
// import PropTypes from "prop-types";

//Create  getoneid fnc in film action to get and id
// click btn will give an id like in films and then I will send with updateFilm fnc data back
// updateFilm fnc will target film with id passing updated object

class FilmDivModel extends Component {

    //set modal to what ever this not
    toggle = () => {
        this.props.hide()
    };



    render() {
        let film = this.props.film;

        if(film === undefined) {
            film = {name: ''}
        }

        return (
            <Modal isOpen={this.props.show} toggle={this.toggle}>

                <ModalHeader toggle={this.toggle}>{film.name}</ModalHeader>
                <ModalBody>

                        <FormGroup>
                            <Label for="Year">Year:</Label>
                            <p>{film.year}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description: </Label>
                            <p>{film.description}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="actor">Actor:</Label>
                            <p>{film.actor}</p>
                        </FormGroup>
                        <FormGroup>
                            <img src={film.image} alt=""/>
                        </FormGroup>
                </ModalBody>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    filmListItems: state.film
});


export default connect(
    mapStateToProps,
    { getFilms }
)(FilmDivModel);

// export default connect(mapStateToProps)(UpdateMovieModal);


