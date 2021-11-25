import React, { Fragment } from "react";
import { Header, Board } from "../components";

function Game() {
  return (
    <Fragment>
      <Header bgColor='rgba(8, 32, 50, 0.75)'>Tic-Tac-Toe</Header>
      <Board />
    </Fragment>
  );
}

export default Game;
