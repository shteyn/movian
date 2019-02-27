import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmListTest from './components/FilmListTest'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    };

    searchChanged = (query) => {
        this.setState({query: query})

    };


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar
          searchChanged={this.searchChanged}
          />
          <FilmListTest query={this.state.query}/>
        </div>
      </Provider>
    )
  }
}

export default App;
