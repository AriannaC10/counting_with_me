import React, { useState, useEffect } from 'react';
import './App.css';

const getChuckNorrisJokes = async () => {
  console.log('here1')
  const data = await fetch('https://api.chucknorris.io/jokes/random').then((res)=>res.json())
  return data.value;
}

function App() {
  const [count, setCount] = useState(0); //saving numbers in a state
  const [joke, setJoke] = useState(null)

  const increment = () => { //function to increment the counter
    setCount(count + 1);
    getJoke();
  };

  const reset = () => { //function to reset the counter
    setCount(0);
  };

  const getJoke = async () => {
      const apiData = await getChuckNorrisJokes();
      console.log('hereee', apiData)
      setJoke(apiData)
  }

  useEffect(()=>{
  
    getJoke();

  }, [])


  return (
    <div className="App">
      <h2 className='title'>We are serving number...</h2>
      <div className="counter">
        <label className={count === 0 ? 'zero' : ''}>Counter: {count}</label>
      </div>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
      <button className="increment-button" onClick={increment}>
        Increment
      </button>
      <h3>Bonus joke: </h3>
      <body>
        {joke}
      </body>
    </div>
  );
}

export default App;
