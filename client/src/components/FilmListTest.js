import React, {Component} from "react";
import {
    // Container,
    // ListGroup,
    // ListGroupItem,
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    // CarouselCaption
} from "reactstrap";
import {connect} from "react-redux";
import {getFilms, deleteFilm} from "../actions/filmAction";
import PropTypes from "prop-types";
// import Transition from "react-transition-group";
// import {CSSTransition, TransitionGroup} from "react-transition-group";
// import Container from "reactstrap/es/Container";
// import CardComponent from './UI/CardComponent'



class FilmsListTest extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        // this.onExiting = this.onExiting.bind(this);
        // this.onExited = this.onExited.bind(this);
    }
    // onExiting() {
    //     this.animating = true;
    // }
    //
    // onExited() {
    //     this.animating = false;
    // }

    next() {
        // if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.film.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    previous() {
        // if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.film.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex(newIndex) {
        // if (this.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    componentDidMount() {
        this.props.getFilms();
    }

    /*****DELETE FILM****
     **** FIRST STEP
     ********************/
        //sends id to filmAction.js
    deleteFilmBtn = id => {
        this.props.deleteFilm(id);
    };

    render() {
        const {films} = this.props.film;

        const slides = films.map((item) =>  {
            return (
                    <CarouselItem
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={item._id}
                        className="CarouselItemContainer"
                    >
                        <div className="imgDiv">
                            <img src={item.image} alt=""/>
                        </div>
                        <div><span>Name:</span> {item.name}</div>
                        <div><span>Year:</span> {item.year}</div>
                        <div><span>Actor:</span> {item.actor}</div>
                        <div><span>Description:</span> {item.description}</div>
                        <div className="ButtonContainer">
                            <Button
                                className="remove-btn mr-3 btn-danger"
                                style={{margin: "0"}}
                                onClick={this.deleteFilmBtn.bind(this, item._id)}
                            >
                                <span>remove</span>
                            </Button>
                            <Button
                                className="remove-btn mr-3 btn-danger"
                                style={{margin: "0"}}
                            >
                                <span>settings</span>
                            </Button>
                        </div>
                    </CarouselItem>
            );
        });

        const activeIndex = this.state.activeIndex;

        return (
            <Carousel
                className="carouselContainer"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators
                    items={films}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                    className="CarouselControlPrevious"
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next}
                    className="CarouselControlNext"
                />

            </Carousel>
        );
    }
}

FilmsListTest.propTypes = {
    getFilms: PropTypes.func.isRequired,
    film: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    film: state.film
});
export default connect(
    mapStateToProps,
    {getFilms, deleteFilm}
)(FilmsListTest);





























// from old version
//
// <Container className="FilmsListContainer">
//     <ListGroup>
//         <TransitionGroup className="films-list">
//             {films.map(({_id, name, year, description, actor, image}) => (
//                 <CSSTransition key={_id} timeout={500} classNames="fade">
//                     <ListGroupItem className="ListGroupItem">
//                         <div className="imgDiv">
//                             <img src={image} alt=""/>
//                         </div>
//                         <div><span>Name:</span> {name}</div>
//                         <div><span>Year:</span> {year}</div>
//                         <div><span>Actor:</span> {actor}</div>
//                         <div><span>Description:</span> {description}</div>
//                         <Button
//                             className="remove-btn mr-3 btn-danger"
//                             style={{margin: "0"}}
//                             onClick={this.deleteFilmBtn.bind(this, _id)}
//                         >
//                             <span>remove</span>
//                         </Button>
//                         <Button
//                             className="remove-btn mr-3 btn-danger"
//                             style={{margin: "0"}}
//                         >
//                             <span>settings</span>
//                         </Button>
//
//                     </ListGroupItem>
//                 </CSSTransition>
//             ))}
//         </TransitionGroup>
//     </ListGroup>
// </Container>
//
// FilmsList.propTypes = {
//     getFilms: propTypes.func.isRequired,
//     film: propTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//     film: state.film
// });
// export default connect(
//     mapStateToProps,
//     {getFilms, deleteFilm}
// )(FilmsList);
