import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import GoalList from './GoalList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={GoalList} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;
