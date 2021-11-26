import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Error, Game, Home, Loading } from "./pages/";
import { Header } from "./components";

const App = () => {
  return (
    <Router>
      <Header bgColor='rgba(8, 32, 50, 0.75)'>Tic-Tac-Toe</Header>
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
