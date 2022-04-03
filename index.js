const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream(){
  return {
    type: BUY_ICECREAM,
    info: 'Second redux action'
  }
}

const initialState = {
  numOfCakes: 100,
  numOfIceCream: 30
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      // to make a copy of the state first, then updates
      ...state, 
      numOfCakes: state.numOfCakes - 1
    }

    case BUY_ICECREAM: return {
      // to make a copy of the state first, then updates
      ...state, 
      numOfIceCream: state.numOfIceCream - 1
    }

    default: return state
  }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
// run "node index" to run in the terminal.