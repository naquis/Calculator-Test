import './App.css';
import React, { useState } from "react";


function Calculator() {
  const [currentVal, setCurrentVal] = useState("0");
  const [prevVal, setPrevVal] = useState(null);
  const [operation, setOperation] = useState(null);


  const handleNumberClick = (e) => {
    const val = e.target.innerText;
    setCurrentVal(
      currentVal === "0" ? val : currentVal + val
    );
  };

  const handleDecimalClick = (e) => {
    if (!currentVal.includes(".")) {
      setCurrentVal(currentVal + ".");
    }
  };

  const handleOperatorClick = (e) => {
    const val = e.target.innerText;
    setPrevVal(currentVal);
    setCurrentVal("0");
    setOperation(val);
  };

  const handlePercentageClick = (e) => {
    const val = parseFloat(currentVal);
    setCurrentVal((val / 100).toString());
    };

  const handleClearClick = (e) => {
    setCurrentVal("0");
    setPrevVal(null);
    setOperation(null);
  };

  const handleEqualClick = (e) => {
    let result;
    switch (operation) {
      case "+":
        result = parseFloat(prevVal) + parseFloat(currentVal);
        break;
      case "-":
        result = parseFloat(prevVal) - parseFloat(currentVal);
        break;
      case "*":
        result = parseFloat(prevVal) * parseFloat(currentVal);
        break;
      case "/":
        result = parseFloat(prevVal) / parseFloat(currentVal);
        break;
      default:
        return;
    }
    setCurrentVal(result.toString());
    setPrevVal(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{currentVal}</div>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button onClick={handleClearClick} className="calculator-key key-clear">AC</button>
            <button onClick={handleOperatorClick} className="calculator-key key-sign">±</button>
            <button onClick={handlePercentageClick} className="calculator-key key-percent">%</button>
          </div>
          <div className="digit-keys">
            <button onClick={handleNumberClick} className="calculator-key">7</button>
            <button onClick={handleNumberClick} className="calculator-key">8</button>
            <button onClick={handleNumberClick} className="calculator-key">9</button>
            <button onClick={handleNumberClick} className="calculator-key">4</button>
            <button onClick={handleNumberClick} className="calculator-key">5</button>
            <button onClick={handleNumberClick} className="calculator-key">6</button>
            <button onClick={handleNumberClick} className="calculator-key">1</button>
            <button onClick={handleNumberClick} className="calculator-key">2</button>
            <button onClick={handleNumberClick} className="calculator-key">3</button>
            <button onClick={handleNumberClick} className="calculator-key">0</button>
            <button onClick={handleDecimalClick} className="calculator-key">.</button>
            </div>
            </div>
          <div className="operator-keys">
            <button onClick={handleOperatorClick} className="calculator-key">/</button>
            <button onClick={handleOperatorClick} className="calculator-key">*</button>
            <button onClick={handleOperatorClick} className="calculator-key">-</button>
            <button onClick={handleOperatorClick} className="calculator-key">+</button>
            <button onClick={handleEqualClick} className="calculator-key key-equal">=</button>
        </div>
      </div>
    </div>
      );
 }

export default Calculator;

