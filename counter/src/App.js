import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); //saving numbers in a state

  const increment = () => { //function to increment the counter
    setCount(count + 1);
  };

  const reset = () => { //function to reset the counter
    setCount(0);
  };

  return (
    <div className="App">
      <h2 className='title'>We are serving number...</h2>
      <div className="counter">
        <label className={count === 0 ? 'zero' : ''}>Counter: {count}</label>
      </div>
      <button className="increment-button" onClick={increment}>
        Increment
      </button>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
