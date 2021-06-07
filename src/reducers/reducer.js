import { ADD, SQUARE } from '../constans/ActionTypes'

const reducer = (state = 5, action) => {
  switch(action.type) {
    case ADD:
      return state + action.num
    case SQUARE:
      return state * state
    default:
      return state
  }
}

export default reducer;