import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null); // Store the result of the previous calculation

  function toggleTheme() {
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'light');
      setCurrentTheme('dark');
    } else if (currentTheme === 'dark') {
      setCurrentTheme('blue');
    } else {
      setCurrentTheme('light');
    }
  }

  function handleNumberClick(num) {
    if (isCalculating) {
      // If an operation is ongoing or after pressing "=", start a new calculation
      setDisplay(num);
      setCurrentNumber(num);
      setIsCalculating(false);
      setResult(null); // Reset the previous result
    } else {
      if (currentNumber === '0' && num === '0') {
        // Do nothing
      } else if (currentNumber === '' && (num === '-' || num === '+')) {
        setCurrentNumber(num + '0');
        setDisplay(num + '0');
      } else if (currentNumber === '0' || currentNumber === '') {
        setCurrentNumber(num);
        setDisplay(num);
      } else {
        setCurrentNumber(currentNumber + num);
        setDisplay(display + num);
      }
    }
  }

  function handleOperatorClick(newOperator) {
    if (isCalculating) {
      // If an operation is ongoing or after pressing "=", start a new calculation
      setIsCalculating(false);
      setResult(null); // Reset the previous result
    }

    if (operator === '') {
      if (newOperator === '+' || newOperator === '-') {
        if (currentNumber === '') {
          setCurrentNumber(newOperator);
          setDisplay(newOperator);
        } else {
          setOperator(newOperator);
          setPreviousNumber(currentNumber);
          setCurrentNumber('');
          setHistory(history + ' ' + currentNumber + ' ' + newOperator);
          setDisplay(newOperator);
        }
      } else {
        setOperator(newOperator);
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setHistory(history + ' ' + currentNumber + ' ' + newOperator);
        setDisplay(newOperator);
      }
    } else {
      calculateResult();
      setOperator(newOperator);
      setHistory(history + ' ' + currentNumber + ' ' + newOperator);
      setDisplay(newOperator);
    }
  }

  function calculateResult() {
    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = math.add(parseFloat(previousNumber), parseFloat(currentNumber));
        break;
      case '-':
        calculatedResult = math.subtract(parseFloat(previousNumber), parseFloat(currentNumber));
        break;
      case '*':
        calculatedResult = math.multiply(parseFloat(previousNumber), parseFloat(currentNumber));
        break;
      case '/':
        if (parseFloat(currentNumber) === 0) {
          calculatedResult = 'Error: Division by zero';
        } else {
          calculatedResult = math.divide(parseFloat(previousNumber), parseFloat(currentNumber));
        }
        break;
      default:
        return;
    }
    setHistory(history + ' ' + currentNumber);
    setDisplay(calculatedResult.toString());
    setPreviousNumber(calculatedResult.toString());
    setCurrentNumber('');
    setIsCalculating(true); // Continue calculating after pressing "="
    setResult(calculatedResult); // Store the result for future calculations
  }

  function handleClear() {
    setDisplay('0');
    setCurrentNumber('');
    setPreviousNumber('');
    setOperator('');
    setHistory('');
    setIsCalculating(false);
    setResult(null);
  }

  function handleEquals() {
    if (operator !== '') {
      calculateResult();
      setIsCalculating(true);
    }
  }

  function handleDelete() {
    if (history) {
      const newHistory = history.slice(0, -1);

      if (currentNumber !== '') {
        // If there is a current number, remove the last digit from it
        const newCurrentNumber = currentNumber.slice(0, -1);
        setCurrentNumber(newCurrentNumber);
        setDisplay(newCurrentNumber === '' ? previousNumber : newCurrentNumber);
      } else if (newHistory === '') {
        // If history becomes empty, reset everything
        setDisplay('0');
        setCurrentNumber('');
        setPreviousNumber('');
        setOperator('');
      } else {
        // Otherwise, update display with the previous number
        setDisplay(previousNumber);
      }
      setHistory(newHistory);
      setIsCalculating(false);
      setResult(null);
    }
  }

  return (
    <div className={`calculator ${currentTheme}`}>
      <button onClick={toggleTheme} className="theme-button">
        Theme
      </button>
      <br />
      <div className="display1">{history}</div>
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={handleClear} className="clear-button">
            Clear
          </button>
          <button onClick={handleDelete} className="delete-button">
            Del
          </button>
          <button onClick={() => handleOperatorClick('/')} className="operator-button">
            /
          </button>
        </div>
        <div className="row">
          {[1, 4, 7].map(num => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('*')} className="operator-button">
            *
          </button>
        </div>
        <div className="row">
          {[2, 5, 8].map(num => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('-')} className="operator-button">
            -
          </button>
        </div>
        <div className="row">
          {[3, 6, 9].map(num => (
            <button key={num} onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('+')} className="operator-button">
            +
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('0')} className="zero-button">
            0
          </button>
          <button onClick={() => handleNumberClick('.')} className="decimal-button">
            .
          </button>
          <button onClick={handleEquals} className="equals-button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;