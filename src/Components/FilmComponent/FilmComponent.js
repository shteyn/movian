import React from 'react'
import classes from './FilmComponent.css'

export default props => {
    return(
        <div className={classes.FilmComponent}>
            {props.Filmcomponents}
        </div>
    )
}