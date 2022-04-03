const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

const initialState = {
  numOfCakes: 100
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      // to make a copy of the state first, then updates
      ...state, 
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}
