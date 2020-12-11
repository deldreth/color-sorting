const colors = [
  '#2f78c6',
  '#ed4a4d',
  '#40c02f',
  '#f4ce43',
  '#59d4ca',
  '#cf59ad',
  '#f78f27',
  '#ff9ea8',
  '#9c755f',
  '#bab0ac',
];

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const sortBoard = function (board) {
  let counter = 100;

  while (counter > 0) {
    const lessThan4 = board.reduce((acc, cur, index) => {
      if (cur.length < 4) {
        acc.push(index);
      }

      return acc;
    }, []);

    const givingIndex = getRandomInt(board.length - 1);
    const receivingIndex = lessThan4[getRandomInt(lessThan4.length)];

    if (board[givingIndex][0]) {
      const color = board[givingIndex].pop();
      board[receivingIndex].unshift(color);
    }

    counter--;
  }

  const lastIndex = board.length - 1;
  const last = board[lastIndex];

  while (last.length > 0) {
    const next = getRandomInt(lastIndex);

    if (board[next].length < 4) {
      const color = last.pop();
      board[next].unshift(color);
    }
  }
};

export const generateDefaultBoard = function (difficulty) {
  const board = new Array(difficulty).fill(null).map((_slot, index) => {
    return new Array(4).fill(colors[index], 0, 4);
  });

  board.push([]);

  sortBoard(board);

  if (difficulty > 2) {
    board.push([]);
  }

  return board;
};
