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
import {updateFilm} from "../actions/filmAction";
//import { getOneFilmData } from "../actions/filmAction";
// import PropTypes from "prop-types";

//Create  getoneid fnc in film action to get and id
// click btn will give an id like in films and then I will send with updateFilm fnc data back
// updateFilm fnc will target film with id passing updated object

class UpdateMovieModal extends Component {

  state = {
    modal: false,
    name: this.props.listFilm.name,
    year: this.props.listFilm.year,
    description: this.props.listFilm.description,
    actor: this.props.listFilm.actor,
    image: this.props.listFilm.image,
    video: this.props.listFilm.video
  };

  //set modal to what ever this not
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const updatedFilmObject = {
      id: this.props.listFilm._id,
      name: this.state.name,
      year: this.state.year,
      description: this.state.description,
      actor: this.state.actor,
      image: this.state.image,
      video: this.state.video
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
            Update
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>

            <ModalHeader toggle={this.toggle}>Update this Movie</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="film">Movie Name</Label>
                  <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="Year">Year</Label>
                  <Input
                      type="text"
                      name="year"
                      value={this.state.year} onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                      type="text"
                      name="description"
                      value={this.state.description} onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="actor">Actor</Label>
                  <Input
                      type="text"
                      name="actor"
                      value={this.state.actor} onChange={this.handleChange}

                  />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Insert image URL</Label>
                  <Input
                      type="url"
                      name="image"
                      value={this.state.image} onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="video">Insert video URL</Label>
                  <Input
                      type="url"
                      name="video"
                      value={this.state.video} onChange={this.handleChange}
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
  film: state.film
});
export default connect(
    mapStateToProps,
    { updateFilm }
)(UpdateMovieModal);

// export default connect(mapStateToProps)(UpdateMovieModal);


