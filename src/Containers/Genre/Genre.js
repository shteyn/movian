import React, {Component} from 'react';
import classes from './Genre.css'

class Genre extends Component {
    state =
        {
            genreName: 'Genre Name',
            year: 2019
        };


    render() {
        return (
            <div className={classes.Genre}>
                <div className={classes.ContainerGenre}>
                    <h1>{this.state.genreName}</h1>
                </div>
                <div className={classes.ContainerGenre}>
                    <h1>{this.state.genreName}</h1>
                </div>
                <div className={classes.ContainerGenre}>
                    <h1>{this.state.genreName}</h1>
                </div>
                <div className={classes.ContainerGenre}>
                    <h1>{this.state.genreName}</h1>
                </div>
                <div className={classes.ContainerGenre}>
                    <h1>{this.state.genreName}</h1>
                </div>
                <div className={classes.ContainerGenre}>
                    <h1>{this.state.genreName}</h1>
                </div>
            </div>
        );
    }
}

export default Genre;