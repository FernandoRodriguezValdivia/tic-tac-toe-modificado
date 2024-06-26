import { useState } from "react";
import { Square } from "./Square";
import confetti from "canvas-confetti";
import { ModalWinner } from "./ModalWinner";
import { checkWinner } from "../helpers/helper";

export const Game = () => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill({ order: 0, mark: null }));
  const [winner, setWinner] = useState(null);

  const onChangeMark = (index) => () => {
    if (board[index].mark !== null || winner !== null) return;
    setBoard((prev) => {
      const mark = turn ? "x" : "o";
      const newBoard = [];

      prev.forEach((square, indexBoard) => {
        if (square.mark === mark) {
          if (square.order === 3) {
            newBoard.push({
              mark: null,
              order: 0,
            });
          } else {
            newBoard.push({
              mark,
              order: square.order + 1,
            });
          }
        } else if (index === indexBoard) {
          newBoard.push({
            mark,
            order: 1,
          });
        } else {
          newBoard.push({
            mark: square.mark,
            order: square.order,
          });
        }
      });

      if (checkWinner(newBoard, mark)) {
        confetti();
        setWinner(mark);
      }
      return newBoard;
    });
    setTurn((mark) => !mark);
  };

  const resetGame = () => {
    setTurn(true);
    setBoard(Array(9).fill({ order: 0, mark: null }));
    setWinner(null);
  };

  return (
    <>
      <div className="title">
        <h1>Turno Actual:</h1> <Square square={{ mark: turn ? "x" : "o" }} />
      </div>
      <div className="board">
        {board.map((square, index) => (
          <Square
            key={index}
            turn={turn}
            square={square}
            onChange={onChangeMark(index)}
          />
        ))}
      </div>
      {winner && <ModalWinner resetGame={resetGame} winner={winner} />}
    </>
  );
};
