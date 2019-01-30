import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from "react-router-dom";
import HomePage from './Containers/HomePage/HomePage'
import Films from './Containers/Films/Films'
import Actors from './Containers/Actors/Actors'
import Genre from './Containers/Genre/Genre'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/films" component={Films} />
          <Route path="/actors" component={Actors} />
          <Route path="/genre" component={Genre} />
        </Switch>
      </Layout>
    )
  }
}

export default App
