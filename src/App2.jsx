import React, {useState, useReducer} from 'react'

// The 'reducer' function is responsible for handling actions and
// returning the new state based on the action type.
// It takes two arguments: the current state and the action to be executed.
function reducer (currentState, actionToTake){

  // If the action type is 'increment', increase the count by 1
  if (actionToTake.type === 'increment' ){
    return {count: currentState.count +1};

  // If the action type is 'decrement', decrease the count by 1
  } else if (actionToTake.type === 'decrement') {
    return {count: currentState.count - 1};
  
  // If the action type is 'add-by-2', increase the count by 2
  } else if (actionToTake.type === 'add-by-2') {
    return {count: currentState.count + 2};
  
  // If the action type is 'sub-by-2', decrease the count by 2
  } else if (actionToTake.type === 'sub-by-2') {
    return {count: currentState.count - 2};
  }

}

const App = () => {

  
    // Define our state and dispatch function using useReducer. 
  // Pass in our reducer function and the initial state, {count:0}
  let [state, dispatch] = useReducer(reducer, {count:0})


   // This function will be called when the 'increment' button is clicked
  function increment(e){
    // setCount(previousCount => previousCount + 1)
    // Dispatch an 'increment' action
    dispatch({type:'increment'});

  }

  // This function will be called when the 'decrement' button is clicked
  function decrement(e){
    // setCount(previousCount => previousCount - 1)
    // Dispatch a 'decrement' action
    dispatch({type:'decrement'});

  }

  // This function will be called when the 'increment by 2' button is clicked
  function increment2(e){
    // Dispatch an 'add-by-2' action
    dispatch({type:'add-by-2'});

  }


  return (
    <>
      <button onClick={decrement}> - </button>
      
      <button onClick={() => dispatch({type:'sub-by-2'})}> -2 </button>

      <span> {state.count} </span>
      <button onClick={increment}> + </button>
      <button onClick={increment2}> +2 </button>
    </>
  )
}

export default App