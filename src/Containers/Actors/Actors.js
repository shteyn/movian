import React, {Component} from 'react';
import classes from './Actors.css'


class Actors extends Component {
    state =
        {
            actorName: 'Actor Name',
            year: 2019
        };

    render() {
        return (
            <div className={classes.Actors}>
                <div className={classes.ContainerActor}>
                    <h1>{this.state.actorName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerActor}>
                    <h1>{this.state.actorName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerActor}>
                    <h1>{this.state.actorName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerActor}>
                    <h1>{this.state.actorName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerActor}>
                    <h1>{this.state.actorName}</h1>
                    <p>{this.state.year}</p>
                </div>
                <div className={classes.ContainerActor}>
                    <h1>{this.state.actorName}</h1>
                    <p>{this.state.year}</p>
                </div>
            </div>
        );
    }
}

export default Actors;