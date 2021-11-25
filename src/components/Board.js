import React from "react";
import styled from "styled-components";
import { Square } from "./";

const squares = Array.from({ length: 9 });

function Board(props) {
  return (
    <BoardWrapper {...props}>
      <div className='field'>
        {squares.map((square, index) => {
          return <Square key={index} className={`square${index + 1}`} />;
        })}
      </div>
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: url("https://img.icons8.com/material-sharp/24/ffffff/pencil--v2.png") */
  /* 12 12,
    auto; */
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
