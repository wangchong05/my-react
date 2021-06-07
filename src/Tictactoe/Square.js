import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './game.css';

const Square = (props)=> {
  const { value, onClick } = props

  return (
    <button className="square" onClick={() => onClick()}>
      {/* TODO */}
      {value}
      {/* {val} */}
    </button>
  );
}

export default Square