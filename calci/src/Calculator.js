import React, { useState } from 'react';
const Calculator = () => {
  // State for calculator display and theme
  const [displayValue, setDisplayValue] = useState('0');
  const [theme, setTheme] = useState('light');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (displayValue === '0' || displayValue === 'Error') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  // Function to evaluate and display the result
  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  // Function to switch between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Apply theme-specific CSS classes
  const themeClass = `calculator ${theme}-theme`;

  return (
    <div className={themeClass}>
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-buttons">
        <div className="calculator-row">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={() => setDisplayValue('0')}>AC</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
