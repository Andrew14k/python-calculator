import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to calculate the result of the expression
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to clear the input (one character at a time)
  const handleClear = () => {
    setInput('');
  };

  // Function to clear all input (AC)
  const handleClearAll = () => {
    setInput('');
  };

  // Function to handle square root
  const handleSquareRoot = () => {
    try {
      setInput(Math.sqrt(eval(input)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle percentage
  const handlePercentage = () => {
    try {
      setInput((eval(input) / 100).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle exponentiation (e.g., x^y)
  const handleExponentiation = () => {
    setInput(input + '**');
  };

  // Function to handle parentheses
  const handleParentheses = (type) => {
    if (type === 'open') {
      setInput(input + '(');
    } else if (type === 'close') {
      setInput(input + ')');
    }
  };

  useEffect(() => {
    const particleContainer = document.querySelector('body');

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.floor(Math.random() * 3) + 1;

      particle.classList.add('particle', `particle-${['small', 'medium', 'large'][size - 1]}`);

      // Set a random horizontal position
      particle.style.left = `${Math.random() * window.innerWidth}px`;

      // Add the particle to the body
      particleContainer.appendChild(particle);

      // Remove particle after it leaves the screen
      setTimeout(() => particle.remove(), 8000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {/* Clear All (AC) */}
        <button id="clear-all" onClick={handleClearAll}>AC</button>

        {/* Parentheses */}
        <button onClick={() => handleParentheses('open')}> ( </button>
        <button onClick={() => handleParentheses('close')}> ) </button>

        {/* Operators */}
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('+')}>+</button>

        {/* Numbers */}
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>

        {/* Extra Features */}
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={handleExponentiation}>^</button>

        {/* Equals */}
        <button id="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
