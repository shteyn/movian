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
import {connect} from "react-redux";
import {addFilm} from "../actions/filmAction";

class FilmModel extends Component {
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

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newFilm = {
      name: this.state.name,
      year: this.state.year,
      description: this.state.description,
      actor: this.state.actor,
      image: this.state.image
    };
    //add film via addFilm action
    this.props.addFilm(newFilm);
    console.log("New film", newFilm);

    //Close the modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <div onClick={this.toggle} className="addMovieBtn">
          Add Movie
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a New Movie</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="film">Movie Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="film"
                  placeholder="Add new movie"
                  onChange={this.handleInputChange}
                />
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
              <Button>Submit</Button>
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
    {addFilm}
)(FilmModel);