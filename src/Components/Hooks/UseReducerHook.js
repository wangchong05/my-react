import React, { useReducer } from 'react'

// const initialState = {count: 0};
function init(initialState) {
    return {count: initialState};
  }

const reducer = (state, action) => {
    switch (action.type) {
        case 'plus':
        return {count: state.count + action.num};
        case 'minus':
        return {count: state.count - action.num};
        case 'reset':
        return init(action.payload);
        default:
        throw new Error();
    }
}

const UseReducerHook = ({initialState}) => {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'reset', payload: initialState})}>Reset</button>
        <button onClick={() => dispatch({type: 'minus', num: 3})}>减三</button>
        <button onClick={() => dispatch({type: 'plus', num: 2})}>加二</button>
        </>
    );
}

export default UseReducerHook