import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import FilmsList from "./components/FilmsList";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <FilmsList />

        </div>
      </Provider>
    )
  }
}

export default App;
