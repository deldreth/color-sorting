import { combineReducers } from '@reduxjs/toolkit';

import { reducer as controls } from '../app-controls/controls.slice';
import { reducer as board } from '../app-board/board.slice';

export const rootReducer = combineReducers({
  board,
  controls,
});
