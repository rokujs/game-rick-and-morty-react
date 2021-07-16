import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Game from "../pages/Game";
import Home from "../pages/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </Switch>
  </BrowserRouter>
);

export default App;
