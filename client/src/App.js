import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import FilmsList from "./components/FilmsList";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
        query: ''
    };

};

  searchChanged = (query) => {
    this.setState({query: query})
    
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar searchChanged = {this.searchChanged}/>
          <FilmsList query={this.state.query}/>
        </div>
      </Provider>
    )
  }
}

export default App;
