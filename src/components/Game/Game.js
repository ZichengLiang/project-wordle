import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessArr, setGuessArr] = React.useState([])
  return <>
  Put a game here!
  <GuessList guessArr={guessArr} setGuessArr={setGuessArr}/>
  <GuessInput guessArr={guessArr} setGuessArr={setGuessArr}/>
  </>;
}

export default Game;
