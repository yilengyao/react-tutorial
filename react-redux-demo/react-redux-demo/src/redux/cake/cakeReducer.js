import { BUY_CAKE } from './cakeTypes'

const initialCakeState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }
    default: return state
  }
}

export default cakeReducer;
