const WINNER = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board, mark) => {
  const indexMark = [];
  board.forEach((square, index) => {
    if (square.mark === mark) {
      indexMark.push(index);
    }
  });
  return WINNER.some(
    (arrayWin) =>
      arrayWin.every((index) => indexMark.includes(index)) &&
      indexMark.every((index) => arrayWin.includes(index))
  );
};
