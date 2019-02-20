import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,

  Container
} from "reactstrap";


//Create  getoneid fnc in film action to get and id
// click btn will give an id like in films and then I will send with updateFilm fnc data back
// updateFilm fnc will target film with id passing updated object

class SeeMovie extends Component {

  state = {
    modal: false,
    name: this.props.listFilm.name,
    year: this.props.listFilm.year,
    description: this.props.listFilm.description,
    actor: this.props.listFilm.actor,
    image: this.props.listFilm.image
  };

  //set modal to what ever this not
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };


  render() {
    return (
      <Container>
        <div onClick={this.toggle} className="addMovieBtn">
          Details
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
          <ModalBody>
            <div id="movie">
              <img src={this.state.image} alt="" />
              <div id="year"> Year: {this.state.year}</div>
              <div id="actor"> Actor: {this.state.actor}</div>
              <div id="content"> Description: {this.state.description}</div>
            </div>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}


export default SeeMovie;


