import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/game_reducer";
import {
  RESET_GAME,
  CHANGE_PLAYER,
  HANDLE_CLICK,
  CHECK_FOR_WIN,
  SET_PLAYER,
} from "../actions";

const GameContext = React.createContext();

const initialState = {
  field: Array.from({ length: 9 }, (elem) => ""),
  playerToStart: "X",
  player: "X",
  freeSquares: 9,
  winner: "",
  isDone: false,
  isEnd: false,
  winSequence: [],
  modalOpen: true,
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: CHANGE_PLAYER });
    if (state.freeSquares < 9) dispatch({ type: CHECK_FOR_WIN });
  }, [state.field]);

  useEffect(() => {}, [state.winner]);

  useEffect(() => {
    if (state.isEnd) {
      setTimeout(
        () => dispatch({ type: RESET_GAME, payload: initialState }),
        2000
      );
    }
  }, [state.isEnd]);

  const handleClick = (id) => {
    dispatch({ type: HANDLE_CLICK, payload: id });
  };

  const resetGame = () => {
    dispatch({ type: RESET_GAME, payload: initialState });
  };

  const setPlayer = (player) => {
    dispatch({ type: SET_PLAYER, payload: player });
  };

  return (
    <GameContext.Provider
      value={{ ...state, handleClick, resetGame, setPlayer }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
