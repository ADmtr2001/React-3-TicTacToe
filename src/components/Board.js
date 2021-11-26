import React from "react";
import styled from "styled-components";
import { Square } from "./";
import { useGameContext } from "../contexts/game_context";

function Board(props) {
  const { field, isEnd, winSequence } = useGameContext();
  return (
    <BoardWrapper {...props}>
      <div className='field'>
        {field.map((square, index) => {
          const classes =
            `square${index + 1}` +
            ` ${square || isEnd ? "" : "hoverable"}` +
            ` ${winSequence.includes(index) ? "marked" : ""}`;
          return (
            <Square key={index} id={index} className={classes}>
              {square}
            </Square>
          );
        })}
      </div>
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  .field {
    display: grid;
    width: 600px;
    height: 600px;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .square1,
  .square2,
  .square3 {
    border-top: none;
  }

  .square1,
  .square4,
  .square7 {
    border-left: none;
  }

  .square3,
  .square6,
  .square9 {
    border-right: none;
  }

  .square7,
  .square8,
  .square9 {
    border-bottom: none;
  }
`;

export default Board;
