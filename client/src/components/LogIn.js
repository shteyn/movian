import React, { Component } from "react";
//import { Link, NavLink, Router, Route } from 'react-router-dom';

import {
  Button,
  Modal,
  // ModalHeader,
  ModalBody,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap";

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

  };
  logout(e) {
    e.preventDefault();
    this.props.logout();
}

  //set modal to what ever this not
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    
  };

  handleChange = event => {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);

    this.toggle();
    this.setState({
      isLoggedIn: true, 
    });

    //Close the modal
  };
  render() {

    
    const check = this.state.email.match(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && this.state.password.length > 2
    return (
      <div>

        <div onClick={this.toggle} className="addMovieBtn">
          Log in
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>


            <br />
        <br/>
            <Form onSubmit={this.handleSubmit}>

              <div>
                <FormGroup>
                  <Label className="FormField__Label" htmlFor="email">E-Mail Address</Label> <br />
                  <Input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"
                    value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Label className="FormField__Label" htmlFor="password">Password</Label> <br />
                  <Input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"
                    value={this.state.password} onChange={this.handleChange} />
                </FormGroup>
              </div>

              <div className="FormField"> 
                  <Button /*onClick={()=> this.operation()}*/ className="FormField__Button mr-20" disabled={!check}>Log In</Button>
              </div> 

            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   film: state.film
// });
// export default connect(
//   mapStateToProps,
//   { addFilm }
// )(LogIn);



export default LogIn








        /* <div onClick={this.toggle} className="addMovieBtn">
         { this.state.isLoggedIn ? 'Logout' : 'Login' }
        </div>  79*/
        
        /* {
          this.state.showMe?
        <div onClick={this.toggle} className="addMovieBtn">
          Update Movie
        </div>
        :null
        } 69 */

        /* <div><b>MOVIAN</b></div> */

        /* <div className="PageSwitcher">
          <Button className="PageSwitcher__Item">Log In</Button>&nbsp;or&nbsp;
          <Button className="PageSwitcher__Item">Sign Up</Button>
        </div> 74*/

          // operation()
          // {
          //   this.setState({
          //     showMe: !this.state.showMe
          //   })
         // 35}