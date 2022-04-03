const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

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

// Initial state of the redux store
const initialCakeState = {
  numOfCakes: 100
}

// Initial state of the redux store
const initialIceCreamState = {
  numOfIceCream: 30
}

// Reducer for cake
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      // to make a copy of the state first, then updates
      ...state, 
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

// Reducer for ice cream
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type){
    case BUY_ICECREAM: return {
      // to make a copy of the state first, then updates
      ...state, 
      numOfIceCream: state.numOfIceCream - 1
    }
    default: return state
  }
}

// Combining both reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
// run "node index" to run in the terminal.