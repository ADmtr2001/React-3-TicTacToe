import React, { Fragment } from "react";
import { Board } from "../components";
import Blur from "../components/Blur";
import Message from "../components/Message";
import { useGameContext } from "../contexts/game_context";

function Game() {
  const { modalOpen } = useGameContext();

  return (
    <Fragment>
      <Board />
      {modalOpen && <Message />}
      {modalOpen && <Blur />}
    </Fragment>
  );
}

export default Game;
