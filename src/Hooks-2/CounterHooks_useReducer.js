import React, { useState, useEffect, useReducer } from 'react';
console.log('counter hooks useReducer');

function reducer(state, action) {
  // if (action.action === 'increment') {
  //   return state + action.payload;
  // }
  // if (action.action === 'decrement') {
  //   return state - action.payload;
  // }

  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function CounterHooks_useReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    document.title = `Total numbers: ${count}`;
  }, [count]);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Increment number
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Decrement number
      </button>
    </>
  );
}
