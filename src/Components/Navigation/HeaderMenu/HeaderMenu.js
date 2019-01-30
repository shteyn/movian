import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import classes from './HeaderMenu.css'
class HeaderMenu extends Component {

    render() {
        return (
            <div className={classes.HeaderMenu}>
                <NavLink to="/" className={classes.firstNavLink}>Home</NavLink>
                <NavLink to="/films">Films</NavLink>
                <NavLink to="/actors">Actors</NavLink>
                <NavLink to="/genre">Genre</NavLink>
            </div>
        );
    }
}

export default HeaderMenu;