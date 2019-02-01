import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

export default class FilmsList extends Component {
  state = {
    film: []
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      film: [
        ...this.state.film,
        {
          [event.target.name]: event.target.value
        }
      ]
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { film } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="filmName">Film Name</Label>
            <Input
              type="text"
              name="filmName"
              placeholder="Enter film name..."
              id="filmName"
              value={film.filmName}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="filmDescription">Film Description</Label>
            <Input
              type="textarea"
              name="filmDescription"
              id="filmDescription"
              placeholder="Enter film description..."
              value={film.filmDescription}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="filmYear">Film's Year</Label>
            <Input
              type="text"
              name="filmYear"
              id="filmYear"
              placeholder="Enter a year..."
              value={film.filmYear}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="filmGenre"> Genre</Label>
            <Input
              type="text"
              name="filmGenre"
              id="filmGenre"
              placeholder="Enter a genre..."
              value={film.filmGenre}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="filmActor">Actors</Label>
            <Input
              type="text"
              name="filmActor"
              id="filmActor"
              placeholder="Add an actor..."
              value={film.filmActor}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="filmImage">Upload Image</Label>
            <Input type="file" name="filmImage" id="filmImage" />
            <FormText color="muted" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
