import React, {Component} from "react";
import ReactPlayer from 'react-player'
import {connect} from "react-redux";
import {getFilms} from "../actions/filmAction";

class ReactPlayerComponent extends Component {
    render() {
        let film = this.props.film;

        // if(film === undefined) {
        //     film = {
        //         name: '',
        //         image: '',
        //         actor: '',
        //         description: '',
        //         year: '',
        //         video: '',
        //         url: ''
        //     }
        // }
        return (
            <ReactPlayer url={film.video} className='react-player' width='100%' height='520px'/>
        );
    }
}


const mapStateToProps = state => ({
    filmListItems: state.film
});


export default connect(
    mapStateToProps,
    { getFilms }
)(ReactPlayerComponent);

// export default connect(mapStateToProps)(UpdateMovieModal);