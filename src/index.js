import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';

// reducer function (holds previous state, the action being dispatched
// & returns the next state)
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
// Counter component & its props
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
// holds the current state and reducer and the next state
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  );
};
// subscribe to changes and re-renders UI, updating to change in state.
store.subscribe(render);
render();
