import React, { PureComponent } from 'react';
import './Counter.css';
import chuck from '../images/chuck-norris.png';

const getChuckNorrisJokes = async () => {
  const data = await fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json());
  return data.value;
};

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      joke: null,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, this.getJoke);
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  getJoke = async () => {
    const apiData = await getChuckNorrisJokes();
    this.setState({ joke: apiData });
  };

  componentDidMount() {
    this.getJoke();
  }

  render() {
    const { count, joke } = this.state;

    return (
      <div>
        <h2 className='title'>We are serving number...</h2>
        <div className='counter'>
          <label className={count === 0 ? 'zero' : ''}>Counter: {count}</label>
        </div>
        <button className='reset-button' onClick={this.reset}>
          Reset
        </button>
        <button className='increment-button' onClick={this.increment}>
          Increment
        </button>

        <div className='joke'>
          <div className='joke_title'>
            <img
              src={chuck}
              alt=''
              style={{
                height: '80px',
                padding: '10px 0px 10px 0px',
              }}
            />
            <subtitle>Bonus joke: </subtitle>
          </div>

          <br />

          {joke}
        </div>
      </div>
    );
  }
}

export default Counter;