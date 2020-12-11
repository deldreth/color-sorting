import { createSlice } from '@reduxjs/toolkit';

import { newGame } from '../app-board/board.slice';

const controlSlice = createSlice({
  name: 'controls',
  initialState: {
    difficulty: {
      start: 4,
      next: 4,
    },
    undos: {
      start: Number.POSITIVE_INFINITY,
      next: Number.POSITIVE_INFINITY,
    },
  },
  reducers: {
    setDifficulty(state, action) {
      state.difficulty.next = action.payload;
    },
    setUndos(state, action) {
      state.undos.next = action.payload;
    },
  },
  extraReducers: {
    [newGame.type]: state => {
      state.difficulty.start = state.difficulty.next;
      state.undos.start = state.undos.next;
    },
  },
});

export const { reducer } = controlSlice;
export const { setDifficulty, setUndos } = controlSlice.actions;
