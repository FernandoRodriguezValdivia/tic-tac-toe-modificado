import { Circle } from "./Circle";
import { Cross } from "./Cross";

export const Square = ({ square, onChange, turn }) => {
  const mark = turn ? "x" : "o";
  return (
    <div className="square" onClick={onChange}>
      <Cross
        className={`svg${square.mark === "x" ? " show" : ""}${
          square.order === 3 && mark === square.mark ? " to-remove" : ""
        }`}
        width={40}
        height={40}
      />
      <Circle
        className={`svg${square.mark === "o" ? " show" : ""}${
          square.order === 3 && mark === square.mark ? " to-remove" : ""
        }`}
        width={30}
        height={30}
      />
    </div>
  );
};
