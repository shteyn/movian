import React, {Component} from 'react';
import classes from './Films.css'
// import {Link} from "react-router-dom";

class Films extends Component {
    render() {
        return (
            <div className={classes.Films}>
                {/*<Link>*/}
                    {/*<button></button>*/}
                {/*</Link>*/}
                <h1>Films</h1>
            </div>
        );
    }
}

export default Films;