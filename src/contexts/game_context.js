import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/game_reducer";
import {
  CLEAR_FIELD,
  CHANGE_PLAYER,
  HANDLE_CLICK,
  CHECK_FOR_WIN,
} from "../actions";

const GameContext = React.createContext();

const initialState = {
  field: Array.from({ length: 9 }, (elem) => ""),
  player: "X",
  freeSquares: 9,
  winner: "",
  isDone: false,
  isEnd: false,
  winSequence: [],
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: CHANGE_PLAYER });
    dispatch({ type: CHECK_FOR_WIN });
  }, [state.field]);

  useEffect(() => {
    console.log(`Player ${state.winner} won`);
  }, [state.winner]);

  const handleClick = (id) => {
    dispatch({ type: HANDLE_CLICK, payload: id });
  };

  const clearField = () => {
    dispatch({ type: CLEAR_FIELD });
  };

  return (
    <GameContext.Provider value={{ ...state, handleClick, clearField }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
