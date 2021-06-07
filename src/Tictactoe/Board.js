import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './game.css';
import Square from './Square'
import CalculateWinner from './CalculateWinner'

const Board = ()=> {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  let status = 'Next player: ' + (xIsNext?'X':'O')
  const winner = CalculateWinner(squares)

  if(winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext?'X':'O')
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
  }

  const handleClick = (i) => {
      if(CalculateWinner(squares) || squares[i]) {
        return
      }
      const squaresTemp = squares.slice()
      squaresTemp[i] = xIsNext?'X':'O'
      setSquares(squaresTemp)
      setXIsNext(!xIsNext)
  }
  
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board