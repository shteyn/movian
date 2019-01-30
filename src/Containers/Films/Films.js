import React, {Component} from 'react';
import classes from './Films.css'
// import {Link} from "react-router-dom";

class Films extends Component {
    state =
        {
            filmName: 'Film Name',
            year: 2019
        };

    render() {
        return (
            <div className={classes.Films}>
                <div className={classes.ContainerFilms}>
                    <h1>{this.state.filmName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerFilms}>
                    <h1>{this.state.filmName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerFilms}>
                    <h1>{this.state.filmName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerFilms}>
                    <h1>{this.state.filmName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerFilms}>
                    <h1>{this.state.filmName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerFilms}>
                    <h1>{this.state.filmName}</h1>
                    <p>{this.state.year}</p>
                </div>
            </div>
        );
    }
}

export default Films;