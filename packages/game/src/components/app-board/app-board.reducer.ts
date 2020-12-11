// import cloneDeep from 'lodash/cloneDeep';

// import { generateDefaultBoard } from '../../global/generateDefaultBoard';

// export const pourColorType = 'board/pour-color';
// export const setSelectedIndex = 'board/set-selected-index';
// export const setWarningIndex = 'board/set-warning-index';
// export const undo = 'board/undo';
// export const reset = 'board/reset';
// export const newGame = 'board/new';
// export const changeDifficulty = 'board/change-difficulty';
// export const changeUndos = 'board/change-undos';

// export const reducer = function (state, action) {
//   switch (action.type) {
//     case pourColorType:
//       const { selectedIndex, board } = state;
//       const nextBoard = cloneDeep(board);

//       const to = action.payload;
//       const fromBoard = nextBoard[selectedIndex];
//       const toBoard = nextBoard[to];

//       if (fromBoard === toBoard) {
//         return {
//           ...state,
//           selectedIndex: null,
//         };
//       }

//       if (fromBoard[0] === toBoard[0] || toBoard.length === 0) {
//         const color = fromBoard[0];
//         let endReached = false;
//         let lastIndex;
//         fromBoard.forEach((nextColor, index) => {
//           if (!endReached && nextColor === color) {
//             lastIndex = index;
//           } else {
//             endReached = true;
//           }
//         });

//         const removingList = fromBoard.splice(0, lastIndex + 1);

//         if (removingList.length + toBoard.length > 4) {
//           return {
//             ...state,
//             warningIndex: to,
//           };
//         }

//         nextBoard[to] = [...removingList, ...toBoard];

//         const nextState = {
//           ...state,
//           selectedIndex: null,
//           board: nextBoard,
//           previousStates: [...state.previousStates, nextBoard],
//         };

//         return nextState;
//       }

//       return {
//         ...state,
//         warningIndex: to,
//       };
//     case setSelectedIndex:
//       return {
//         ...state,
//         selectedIndex: action.payload,
//         warningIndex: null,
//       };
//     case setWarningIndex:
//       return {
//         ...state,
//         warningIndex: action.payload,
//       };
//     case undo:
//       return {
//         ...state,
//         board: state.previousStates[state.previousStates.length - 2],
//         previousStates: state.previousStates.slice(0, state.previousStates.length - 1),
//         undos: state.undos - 1,
//       };
//     case reset:
//       return {
//         ...state,
//         board: state.previousStates[0],
//         previousStates: [state.previousStates[0]],
//         undos: action.payload.startUndos,
//       };
//     case newGame:
//       const newBoard = generateDefaultBoard(action.payload.nextDifficulty);

//       return {
//         ...state,
//         selectedIndex: null,
//         warningIndex: null,
//         board: newBoard,
//         previousStates: [newBoard],
//         undos: action.payload.nextUndos,
//       };
//     case changeDifficulty:
//       return {
//         ...state,
//         difficulty: action.payload,
//       };
//     case changeUndos:
//       return {
//         ...state,
//         undos: action.payload,
//       };
//     default:
//       return state;
//   }
// };
