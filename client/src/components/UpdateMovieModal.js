import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap";
import { connect } from "react-redux";
//import { getOneFilmData } from "../actions/filmAction";
// import PropTypes from "prop-types";

//Create  getoneid fnc in film action to get and id
// click btn will give an id like in films and then I will send with updateFilm fnc data back
// updateFilm fnc will target film with id passing updated object

class UpdateMovieModal extends Component {
  state = {
    modal: false,
    name: "",
    year: "",
    description: "",
    actor: "",
    image: ""
  };

  //set modal to what ever this not
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const updatedFilmObject = {
      name: this.state.name,
      year: this.state.year,
      description: this.state.description,
      actor: this.state.actor,
      image: this.state.image
    };
    //update film via updateFilm action
    this.props.updateFilm(updatedFilmObject);

    //Close the modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <div onClick={this.toggle} className="addMovieBtn">
          Update Movie
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update this Movie</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="film">Movie Name</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label for="Year">Year</Label>
                <Input
                  type="text"
                  name="year"
                  id="Year"
                  placeholder="Add a year..."
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add a description..."
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="actor">Actor</Label>
                <Input
                  type="text"
                  name="actor"
                  id="actor"
                  placeholder="Add an actor..."
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Insert image URL</Label>
                <Input
                  type="url"
                  name="image"
                  id="image"
                  placeholder="Insert an image URL..."
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button>Update</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //we are calling film, because we called it like that in our index.js in "/reducers/index.js"
  film: state.film.films
});

export default connect(mapStateToProps)(UpdateMovieModal);
