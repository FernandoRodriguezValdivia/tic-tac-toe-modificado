import { Circle } from "./Circle"
import { Cross } from "./Cross"

export const Square = ({ square, onChange, turn }) => {
  const mark = turn ? 'x' : 'o'
  return(
    <div
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, border: "1px solid white", color: 'red'}}
      onClick={onChange}
    >
      <Cross className={`svg${square.mark === 'x' ? ' show' : ''}`} width={40} height={40} fill='red' style={{opacity: (square.order === 3 && mark === square.mark) ? 0.3 : 1}}/>

      <Circle className={`svg${square.mark === 'o' ? ' show' : ''}`} width={30} height={30} fill='blue' style={{opacity: (square.order === 3 && mark === square.mark) ? 0.3 : 1}}/>

      {/* {
        square.mark === 'x' && <Cross width={40} height={40} fill='red' style={{opacity: (square.order === 3 && mark === square.mark) ? 0.5 : 1}}/>
      }
      {
        square.mark === 'o' && <Circle  width={30} height={30} fill='blue' style={{opacity: (square.order === 3 && mark === square.mark) ? 0.5 : 1}}/>
      } */}
    </div>
  )
}