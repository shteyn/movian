import React, {Component} from "react";
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
            <Container className="AppNavbarContainer">
                <Navbar color="dark" dark expand="md" className="md-5">
                    <NavbarBrand href="/" style={{color: "whitesmoke"}}>Movian</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <FilmModal style={{color: "white"}}/>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="api/actors/" style={{color: "whitesmoke"}}>Movie</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="api/genre/" style={{color: "whitesmoke"}}>Genre</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <LogIn/>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink>
                                    <SignUp/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
            </Container>
        );
    }
}