import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    // Input,
    Label,
    // Form,
    FormGroup, /*Input*/
} from "reactstrap";
import ReactPlayer from 'react-player'
import {connect} from "react-redux";
import {getFilms} from "../actions/filmAction";
// import ReactPlayerComponent from './ReactPlayerComponent'
//import { getOneFilmData } from "../actions/filmAction";
// import PropTypes from "prop-types";

//Create  getOneId fnc in film action to get and id
// click btn will give an id like in films and then I will send with updateFilm fnc data back
// updateFilm fnc will target film with id passing updated object

class FilmDivModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlayer: false
        }
    }

    //set modal to what ever this not
    toggle = () => {
        this.props.hide()
    };

    // show = () => {
    //     this.props.show()
    // };
    showPlayerHandler = (video) => {
        this.props.hide()
        this.setState({
            // video: video,
            showPlayer: true
        })
    };
    //
    hidePlayerHandler = () => {
        this.setState({
            showPlayer: false,

        })

    };


    render() {
        let film = this.props.film;
        let reactPlayer = null;
        if (film === undefined) {
            film = {
                name: '',
                image: '',
                actor: '',
                description: '',
                year: '',
                video: '',
                url: ''
            }
        }

        if (this.state.showPlayer === true) {
            reactPlayer =
                <div className="reactPlayerCont" onClick={this.hidePlayerHandler}>
                    <ReactPlayer url={film.video} className='react-player' width='100%' height='100%' />
                </div>
        }

        return (
            <div>
                <Modal isOpen={this.props.show} toggle={this.toggle}>
                    <ModalBody>
                        <div className="parentContentContainer">
                            <div className="secondDivModal">
                                <div className="imgDiv">
                                    <FormGroup>
                                        <img src={film.image} alt=""/>
                                    </FormGroup>
                                </div>
                                <div className="contentDiv">
                                    <ModalHeader toggle={this.toggle}>{film.name}</ModalHeader>
                                    <FormGroup>
                                        <Label for="Year">Year: {film.year}</Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="description">Description: {film.description}</Label>

                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="actor">Actor: {film.actor}</Label>
                                    </FormGroup>
                                    <Button onClick={this.showPlayerHandler}>Watch Trailer</Button>
                                </div>
                            </div>

                        </div>


                    </ModalBody>
                </Modal>

                {reactPlayer}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    filmListItems: state.film
});


export default connect(
    mapStateToProps,
    {getFilms}
)(FilmDivModel);

// export default connect(mapStateToProps)(UpdateMovieModal);

//<div>
//    <Modal isOpen={this.props.show} toggle={this.toggle}>
//       <ModalBody>
//           <div className="parentContentContainer">
//                <div className="secondDivModal">
//                   <div className="imgDiv">
//                       <FormGroup>
//                            <img src={film.image} alt=""/>
//                      </FormGroup>
//                 </div>
//                  <div className="contentDiv">
//                      <ModalHeader toggle={this.toggle}>{film.name}</ModalHeader>
//                      <FormGroup>
//                          <Label for="Year">Year: {film.year}</Label>
//                      </FormGroup>
//                       <FormGroup>
//                          <Label for="description">Description: {film.description}</Label>
//
//                      </FormGroup>
//                      <FormGroup>
//                           <Label for="actor">Actor: {film.actor}</Label>
//                       </FormGroup>
//                      <Button onClick={this.showPlayerHandler}>Watch Trailer</Button>
//                   </div>
//               </div>
//            </div>
//       </ModalBody>
//  </Modal>
//   {reactPlayer}
//</div>
