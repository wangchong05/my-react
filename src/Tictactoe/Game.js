import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './game.css';
import Board from './Board'

const Game = ()=> {
  // const [history, setHistorys] = useState([{squares: Array(9).fill(null)}])
  // const [xIsNext, setXIsNext] = useState(true)

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game

