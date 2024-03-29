import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import GoalList from './GoalList'
import Header from './Header'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'
import CreateGoal from './CreateGoal';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path="/my-goals" component={GoalList} />
            <Route exact path="/create-goal" component={CreateGoal} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default App;
