import { createSlice } from '@reduxjs/toolkit';

import { generateDefaultBoard } from '../../global/generateDefaultBoard';

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    board: [],
    selectedIndex: null,
    warningIndex: null,
    previousStates: [],
    undos: Number.POSITIVE_INFINITY,
  },
  reducers: {
    moveColor(state, action) {
      const to = action.payload;
      const fromBoard = state.board[state.selectedIndex];
      const toBoard = state.board[to];

      if (fromBoard === toBoard) {
        state.selectedIndex = null;
        return;
      }

      if (fromBoard[0] === toBoard[0] || toBoard.length === 0) {
        const color = fromBoard[0];
        let endReached = false;
        let lastIndex;
        fromBoard.forEach((nextColor, index) => {
          if (!endReached && nextColor === color) {
            lastIndex = index;
          } else {
            endReached = true;
          }
        });

        console.log(lastIndex);

        if (lastIndex + toBoard.length >= 4) {
          state.warningIndex = to;
        } else {
          state.selectedIndex = null;
          state.board[to] = [...fromBoard.splice(0, lastIndex + 1), ...toBoard];
          state.previousStates = [...state.previousStates, state.board];
        }
      } else {
        state.warningIndex = to;
      }
    },
    setSelectedIndex(state, action) {
      state.selectedIndex = action.payload;
      state.warningIndex = null;
    },
    setWarningIndex(state, action) {
      state.warningIndex = action.payload;
    },
    undo(state) {
      state.board = state.previousStates[state.previousStates.length - 2];
      state.previousStates = state.previousStates.slice(0, state.previousStates.length - 1);
      state.undos = state.undos - 1;
    },
    newGame(state, action) {
      const newBoard = generateDefaultBoard(action.payload.difficulty);

      state.selectedIndex = null;
      state.warningIndex = null;
      state.board = newBoard;
      state.previousStates = [newBoard];
      state.undos = action.payload.undos;
    },
    reset(state, action) {
      state.board = state.previousStates[0];
      state.previousStates = [state.previousStates[0]];
      state.undos = action.payload.undos;
    },
  },
});

export const { reducer } = boardSlice;
export const { moveColor, setSelectedIndex, setWarningIndex, undo, newGame, reset } = boardSlice.actions;
