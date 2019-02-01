import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
      <Container className="mb-5">
        <Navbar color="light" light expand="md" className="mb-5">
          <NavbarBrand href="/">Movian</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="api/films/">Films</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="api/actors/">Actors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="api/genre/">Genre</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="api/login/">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}