import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import classes from './HeaderMenu.css'
import '../../../../node_modules/pure-css3-animated-border/css/animated-border/animated-border.min.css'

const homePage = [
    {to: '/', label: 'Home', exact: true},
];

const links = [
    {to: '/films', label: 'Films', exact: false},
    {to: '/actors', label: 'Actors', exact: false},
    {to: '/genre', label: 'Genre', exact: false}
];

const login = [
    {to: '/loginform', label: 'Login', exact: false}
]

class HeaderMenu extends Component {
    renderHomePage(){
        return homePage.map((homePage, index) => {
            return (
                <div
                    className={classes.HomePageLink}
                    key={index}>
                    <NavLink
                        to={homePage.to}
                        exact={homePage.exact}
                        activeClassName={classes.active}
                        // onClick={this.clickHandler}
                    >
                        {homePage.label}
                    </NavLink>
                </div>
            )
        })
    }
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        // onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    renderLoginForm(){
        return login.map((login, index) => {
            return (
                <div
                    className={classes.LoginFormLink}
                    key={index}>
                    <NavLink
                        to={login.to}
                        exact={login.exact}
                        activeClassName={classes.active}
                        // onClick={this.clickHandler}
                    >
                        {login.label}
                    </NavLink>
                </div>
            )
        })
    }


    render() {
        return (
            <div className={classes.HeaderMenu}>
                    {this.renderHomePage()}
                <div>
                    <nav className={classes.Nav}>
                        <ul>
                            {this.renderLinks()}
                        </ul>
                    </nav>
                </div>
                {this.renderLoginForm()}
            </div>
        );
    }
}

export default HeaderMenu;