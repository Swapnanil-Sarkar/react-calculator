/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEquals = () => {
    try {
      const calculatedResult = eval(input);
      setInput(calculatedResult.toString());
    } catch (error) {
      setInput('Invalid Data');
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleDecimal = () => {
    setInput((prevInput) => prevInput + '.');
  };

  const handlePercentage = () => {
    setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
  };

  const handleSquareRoot = () => {
    setInput((prevInput) => Math.sqrt(parseFloat(prevInput)).toString());
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {/* Digit buttons */}
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>

        {/* Operator buttons */}
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>

        {/* Additional buttons */}
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleBackspace}>←</Button> {/* Backspace */}
        <Button onClick={handleDecimal}>.</Button> {/* Decimal point */}
        <Button onClick={handlePercentage}>%</Button> {/* Percentage */}
        <Button onClick={handleSquareRoot}>√</Button> {/* Square root */}
        <Button onClick={handleEquals}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
