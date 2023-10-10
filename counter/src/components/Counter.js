import React, { useState, useEffect } from 'react';
import "./Counter.css"
import chuck from '../images/chuck-norris.png'

const getChuckNorrisJokes = async () => {
  console.log('here1')
  const data = await fetch('https://api.chucknorris.io/jokes/random').then((res)=>res.json())
  return data.value;
}

function Counter() {
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
      setJoke(apiData)
  }

  useEffect(()=>{ //initialize the joke to display at first render
  
    getJoke();

  }, [])


  return (
    <div >
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
      
      <div className="joke">
        <div className="joke_title">
          <img src={chuck} alt="" style={{
            height: "80px",
            padding: "10px 0px 10px 0px",
          }}
          />
          <subtitle>Bonus joke: </subtitle>
        </div>

        <br/>

        {joke}
      </div>
    </div>
  );
}

export default Counter;
