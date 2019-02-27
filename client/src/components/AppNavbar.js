import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmModal from "./FilmModel";
import LogIn from "./LogIn";
import Search from "./Search"
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    // Input,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    searchChanged = (query) => {
        this.props.searchChanged(query)
        // console.log(query);
    };

    render() {
        return (
            <Container className="AppNavbarContainer">
                <Navbar color="dark" dark expand="md" className="md-5">
                    <NavbarBrand href="/" style={{color: "whitesmoke"}}>Movian</NavbarBrand>
                    <NavbarBrand className="divSearchCont"><Search searchChanged={this.searchChanged}/></NavbarBrand>
                    {/*<NavbarBrand href="/film-list-test" style={{color: "whitesmoke"}}>FilmsListTest</NavbarBrand>*/}
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <FilmModal style={{color: "white", cursor: "pointer"}}/>
                                </NavLink>
                            </NavItem>
                            {/*<NavItem>*/}
                                {/*<NavLink href="api/actors/" style={{color: "whitesmoke"}}>Movie</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem>*/}
                                {/*<NavLink href="api/genre/" style={{color: "whitesmoke"}}>Genre</NavLink>*/}
                            {/*</NavItem>*/}
                            <NavItem>
                                <NavLink>
                                    <LogIn/>
                                </NavLink>
                            </NavItem>

                            {/*<NavItem>*/}
                                {/*<NavLink>*/}
                                    {/*<SignUp/>*/}
                                {/*</NavLink>*/}
                            {/*</NavItem>*/}
                        </Nav>
                </Collapse>
            </Navbar>
            </Container>
        );
    }
}