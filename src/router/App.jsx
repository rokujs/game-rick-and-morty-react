import React from 'react'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

import Game from '../pages/Game'
import Home from '../pages/Home'
import NoMatch from '../pages/NoMatch'

const App = () => (
  <Router>
    <Switch>
      <UserContext>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route path='/newGame'>
          <Redirect to='/game' />
        </Route>
      </UserContext>
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default App
