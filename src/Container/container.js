import React from 'react'
import {
  addAction,
  squareAction
} from '../actions/actions';
import store from '../store/store'

const Container = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={() => { store.dispatch(addAction(1)) }}>加一</button>
      <button onClick={() => { store.dispatch(addAction(2)) }}>加二</button>
      <button onClick={() => { store.dispatch(squareAction()) }}>乘方</button>
    </div>
  )
}

export default Container