import { configureStore } from '@reduxjs/toolkit';

import { generateDefaultBoard } from '../../global/generateDefaultBoard';

import { rootReducer } from './app.reducer';

const defaultBoard = generateDefaultBoard(4);

const preloadedState = {
  board: {
    selectedIndex: null,
    warningIndex: null,
    board: defaultBoard,
    previousStates: [defaultBoard],
    undos: Number.POSITIVE_INFINITY,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
