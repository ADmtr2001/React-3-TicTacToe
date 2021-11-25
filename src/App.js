import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Error, Game, Home, Loading } from "./pages/";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/game'>
          <Game />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
