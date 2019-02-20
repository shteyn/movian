import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmModal from "./FilmModel";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class Example extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Container className="AppNavbarContainer">
        <Navbar color="dark" dark expand="md" className="mb-5">
          <NavbarBrand href="/">Movian</NavbarBrand>
          <FormGroup>
            <Label for="search" />
            <Input type="text" name="text" id="search" placeholder="Search..." />
          </FormGroup>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <FilmModal />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <LogIn />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
