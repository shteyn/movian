import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


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
import { addFilm } from "../actions/filmAction";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false
    };
  }

  toggle = e => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = e => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.toggle();


    console.log('The form was submitted with the following data:');
    console.log(this.state);

    // axios.post() um auf server zu speichern
  }

  render() {
    return (
      <div className="FormCenter">
        <div onClick={this.toggle} className="addMovieBtn">
          Sign Up
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} className="FormFields">

              <FormGroup className="FormField">
                <Label className="FormField__Label" htmlFor="email">E-Mail Address</Label>
                <Input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"
                  value={this.state.email} onChange={this.handleChange} />
              </FormGroup>

              <FormGroup className="FormField">
                <Label className="FormField__Label" htmlFor="password">Password</Label>
                <Input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"
                  value={this.state.password} onChange={this.handleChange} />
              </FormGroup>

              <FormGroup className="FormField">
                <Label className="FormField__Label" htmlFor="name">Username</Label>
                <Input type="text" id="name" className="FormField__Input" placeholder="Enter your Username" name="name"
                  value={this.state.name} onChange={this.handleChange} />
              </FormGroup>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"
                    value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="route">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                <Button className="FormField__Button mr-20" disabled={!this.state.hasAgreed}>Sign Up</Button> <p className="FormField__Link">Already have an account?</p>
              </div>

            </Form>
          </ModalBody>
        </Modal>
      </div>

    );
  }
}

// const mapStateToProps = state => ({
//     film: state.film
//   });
// export default connect(
//   mapStateToProps,
//   { addFilm }
// )(SignUp);

export default SignUp;