import React, {Component} from "react";
import {Container, /*ListGroup,*/ ListGroupItem, Button} from "reactstrap";
// import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {getFilms, deleteFilm, getOneFilmData, updateFilm} from "../actions/filmAction";
import propTypes from "prop-types";
import UpdateMovieModal from './UpdateMovieModal';
import FilmDivModel from './FilmDivModel';
import Pagination from './Pagination';


class FilmsListTest extends Component {
    constructor(props) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);

        this.state = {
            filmItems: [],
            pageOfFilms: [],
            showDisplay: false
        }
    }

    onChangePage(pageOfFilms) {
        // update local state with new page of items
        this.setState({pageOfFilms});
    }

    componentDidMount() {
        this.props.getFilms();
        //runs getFilms() in filmActions.js
    }

    showDisplayHandler = (oneFilm) => {
        this.setState({
            oneFilm: oneFilm,
            showDisplay: true
        })
    };

    hideDisplayHandler = () => {
        this.setState({
            showDisplay: false
        })
    };


    /*****DELETE FILM****
     **** FIRST STEP
     ********************/
        //sends id to filmAction.js
    deleteFilmBtn = id => {
        this.props.deleteFilm(id);
        console.log("ID from delete BTN fom FilmsList.js", id);
    };

    /*****UPDATE FILM****
     **** FIRST STEP
     ********************/
    //sends id to filmAction.js

    render() {
        let {films} = this.props.film;

        return (
            <div>
                <FilmDivModel
                    show={this.state.showDisplay}
                    film={this.state.oneFilm}
                    hide={this.hideDisplayHandler}
                />
                <Container className="divContainer">
                    <div
                        className="films-list">
                        {this.state.pageOfFilms.map((oneFilm) => {
                            return (
                                <div
                                    key={oneFilm._id}>
                                    <ListGroupItem className="mt-4">
                                        <div className="imgDiv" onClick={() => {
                                            this.showDisplayHandler(oneFilm)
                                        }}>
                                            <img src={oneFilm.image} alt=""/>
                                        </div>
                                        {/*<div><span>Name: </span>{oneFilm.name}</div>*/}
                                        {/*<div>{oneFilm.year}</div>*/}
                                        {/*<div>{oneFilm.description}</div>*/}
                                        {/*<div>{oneFilm.actor}</div>*/}

                                        <div className="ButtonContainer">
                                            <Button
                                                className="remove-btn mr-3 btn-danger"
                                                onClick={this.deleteFilmBtn.bind(this, oneFilm._id)}
                                            >
                                                remove
                                            </Button>
                                            <Button>
                                                <UpdateMovieModal listFilm={oneFilm}/>
                                            </Button>
                                        </div>
                                    </ListGroupItem>
                                </div>
                            )
                        })}


                    </div>
                </Container>
                <Pagination onChangePage={this.onChangePage} films={films}/>
            </div>
        );
    }
}


FilmsListTest.propTypes = {
    getFilms: propTypes.func.isRequired,
    film: propTypes.object.isRequired
};


//1. allows us to take the initialState from "filmReducer.js" and map it to component property, so we can use it in our component as "this.props.film"
const mapStateToProps = state => ({
    //we are calling film, because we called it like that in our index.js in "/reducers/index.js"
    film: state.film
});

export default connect(
    mapStateToProps,
    {getFilms, deleteFilm, getOneFilmData, updateFilm}
)(FilmsListTest);
//instead of exporting the actual class of the component,








