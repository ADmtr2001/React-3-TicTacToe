import React, { Fragment } from "react";
import { Title, Board } from "../components";

function Game() {
  return (
    <Fragment>
      <Title bgColor='rgba(8, 32, 50, 0.75)' color='rgb(255, 76, 41)'>
        Tic-Tac-Toe
      </Title>
      <Board />
    </Fragment>
  );
}

export default Game;
