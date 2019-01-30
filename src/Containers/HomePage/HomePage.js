import React, {Component} from 'react';
import classes from './HomePage.css'
import {NavLink} from "react-router-dom";


const content = [
    {to: '/films', label: 'Films', exact: true},
    {to: '/actors', label: 'Actors', exact: false},
    {to: '/genre', label: 'Genre', exact: false},
];


class HomePage extends Component {
    renderContent(){
        return content.map((content, index) => {
            return (
                <div
                    className={classes.contentPage}
                    key={index}>
                    <NavLink
                        to={content.to}
                        exact={content.exact}
                        content={classes.active}
                        // onClick={this.clickHandler}
                    >
                        {content.label}
                    </NavLink>

                </div>
            )
        })
    }
    render() {
        return (
            <div className={classes.HomePage}>
                {this.renderContent()}
            </div>
        );
    }
}

export default HomePage;