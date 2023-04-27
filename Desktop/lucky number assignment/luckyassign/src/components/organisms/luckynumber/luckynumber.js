
import React, { useState } from 'react';
import  './luckynumber.css';
export default function Luckynumber() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 5) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 5) {
      setMessage('Please enter a valid number between 1 and 5');
    } else if (num < luckyNumber) {
      setMessage(`You guessed a smaller number`);
      setCount(count + 1);
    } else if (num > luckyNumber) {
      setMessage(`You guessed a bigger number.`);
      setCount(count + 1);
    } else {
      setMessage(`Congratulations! You guessed the right number in ${count + 1} attempts!`);
    }
    setGuess('');
  };

  return (
    <div className="App">
      <h1>Guess Lucky Number Game</h1>
      <p>Guess a number between 1 and 5:</p>
      <input type="text" placeholder="Guess lucky number..." value={guess} onChange={(e) => setGuess(e.target.value)} />
      <br />
      <button className="submitBtn"onClick={handleGuess}>Match Number</button>
      <br />
      <p>{message}</p>
    </div>
  );
}





//luckynum