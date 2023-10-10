import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import chuck from '../images/chuck-norris.png';

const getChuckNorrisJokes = async () => {
  console.log('here1');
  const data = await fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json());
  return data.value;
};

function Counter() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState(null);

  const increment = () => {
    setCount(count + 1);
    getJoke();
  };

  const reset = () => {
    setCount(0);
  };

  const getJoke = async () => {
    const apiData = await getChuckNorrisJokes();
    setJoke(apiData);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant='h2' fontSize={'36px'} color={'#2196f3'} marginBottom={'20px'}>We are serving number...</Typography>
      <Typography variant='h2' fontSize={'24px'} color={count === 0 ? '#9e9e9e' : 'black'} marginBottom={'20px'}>Counter: {count}</Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Button variant='contained' color='primary' onClick={reset}>
          Reset
        </Button>
        <Button variant='contained' color='secondary' onClick={increment} sx={{ml: 2}}>
          Increment
        </Button>
      </Box>
      <Card sx={{ display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center', mt: 5}}>
        <CardMedia
          component="img"
          sx={{ width: '151px', height: '130px',
          padding: '10px 0px 10px 0px', }}
          image={chuck}
          alt=""
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent >
            <Typography  variant="h5" color={'#546e7a'}>
              Bonus Joke
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Increment to see the joke chosen for you!
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography variant='body' color={'#607d8b'}>
              {joke}
            </Typography>
          </Box>
        </Box>
        
    </Card>
    </Box>
  );
}

export default Counter;
