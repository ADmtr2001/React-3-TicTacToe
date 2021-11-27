import React from "react";
import styled from "styled-components";
import { useGameContext } from "../contexts/game_context";

const Message = () => {
  const { setPlayer } = useGameContext();

  return (
    <MessageWrapper>
      <h2>Choose Player</h2>
      <div className='select'>
        <button
          className='btn'
          type='button'
          name='X'
          onClick={(e) => setPlayer(e.target.name)}
        >
          X
        </button>
        <span>:</span>
        <button
          className='btn'
          type='button'
          name='O'
          onClick={(e) => setPlayer(e.target.name)}
        >
          O
        </button>
      </div>
      <div className='blur'></div>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  width: 500px;
  height: 350px;
  color: white;
  background: rgba(8, 32, 50, 0.75);
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  & .select {
    width: 80%;
    display: flex;
    justify-content: space-around;

    * {
      font-size: 8rem;
    }
  }

  button {
    background: transparent;
    border: none;
    transition: all 0.35s;
    padding: 0 1rem;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default Message;
