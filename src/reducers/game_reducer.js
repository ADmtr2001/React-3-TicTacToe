import React from "react";
import {
  RESET_GAME,
  CHANGE_PLAYER,
  HANDLE_CLICK,
  CHECK_FOR_WIN,
  SET_PLAYER,
} from "../actions";

const possibleWinSequences = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const game_reducer = (state, action) => {
  if (action.type === HANDLE_CLICK) {
    const newField = [...state.field];
    if (newField[action.payload] === "") {
      console.log("reducer");
      newField[action.payload] = state.player;
      return {
        ...state,
        field: newField,
        isDone: true,
        freeSquares: state.freeSquares - 1,
      };
    }
    return { ...state };
  }

  if (action.type === CHANGE_PLAYER) {
    if (state.isDone) {
      const nextPlayer = state.player === "X" ? "O" : "X";
      return { ...state, player: nextPlayer, isDone: false };
    }
    return { ...state };
  }

  if (action.type === CHECK_FOR_WIN) {
    for (let i = 0; i < possibleWinSequences.length; i++) {
      const [a, b, c] = possibleWinSequences[i];
      if (
        state.field[a] &&
        state.field[a] === state.field[b] &&
        state.field[a] === state.field[c]
      ) {
        return {
          ...state,
          winner: state.field[a],
          isEnd: true,
          winSequence: possibleWinSequences[i],
        };
      }
    }
    if (state.freeSquares === 0) {
      return { ...state, winner: "DRAW", isEnd: true };
    }
    return { ...state };
  }

  if (action.type === RESET_GAME) {
    const nextPlayer = state.playerToStart === "X" ? "O" : "X";
    return { ...action.payload, playerToStart: nextPlayer, player: nextPlayer };
  }

  if (action.type === SET_PLAYER) {
    return {
      ...state,
      playerToStart: action.payload,
      player: action.payload,
      modalOpen: false,
    };
  }

  return state;
};

export default game_reducer;
