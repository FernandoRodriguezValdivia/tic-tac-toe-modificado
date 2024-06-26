import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'

const arrayWinner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1,4,7], [2,5,8],[0,4,8],[2,4,6]]

function App() {
  const [turn, setTurn] = useState(true)
  const [board, setBoard] = useState(Array(9).fill({order: 0, mark: null}))
  const [winner, setWinner] = useState(null)

  const checkWinner = (board, mark) => {
    const indexMark = [];
    board.forEach((square, index) => {
      if(square.mark === mark){
        indexMark.push(index)
      }
    })
    return arrayWinner.some(arrayWin => 
      arrayWin.every(index => indexMark.includes(index)) && 
      indexMark.every(index => arrayWin.includes(index))
    )
  }

  const onChangeMark = (index) => () => {
    if(board[index].mark !== null || winner !== null) return;
    setBoard(prev => {
      const mark = turn ? 'x' : 'o'
      const newBoard = []

      prev.forEach((square, indexBoard) => {
        if(square.mark === mark){
          if(square.order === 3){
            newBoard.push({
              mark: null,
              order: 0
            })
          } else {
            newBoard.push({
              mark,
              order: square.order + 1
            })
          }
        } else if(index === indexBoard){
          newBoard.push({
            mark,
            order: 1
          })
        } else {
          newBoard.push({
            mark: square.mark,
            order: square.order
          })
        }

      })

      if(checkWinner(newBoard, mark)){
        setWinner(mark)
      }
      return newBoard;
    })
    setTurn(mark => !mark);
  }

  return (
    <div>
      {
        winner ?
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <h1>El ganador es:</h1> <Square square={{mark: winner}}/>
        </div>
        :
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <h1>Turno Actual:</h1> <Square square={{mark: turn ? 'x' : 'o'}}/>
        </div>
      }
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, width: 'fit-content', margin: '0 auto'}}>
        {
          board.map((square, index) => <Square key={index} turn={turn} square={square} onChange={onChangeMark(index)}/>)
        }
      </div>
      {
        winner !== null &&
        <button onClick={() => {
          setTurn(true)
          setBoard(Array(9).fill({order: 0, mark: null}))
          setWinner(null)
        }} style={{marginTop: 32}}>Reiniciar</button>
      }
    </div>
  )
}

export default App
