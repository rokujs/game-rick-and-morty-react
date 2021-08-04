import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

import Game from '../pages/Game'
import Home from '../pages/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <UserContext>
        <Route exact path="/game" component={Game} />
        <Route exact path="/" component={Home} />
      </UserContext>
    </Switch>
  </BrowserRouter>
)

export default App
