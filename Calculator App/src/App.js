import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      setInput("");
      setResult(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h1 style={{ textAlign: "center" }}>Calculator App</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "+", "="].map(
          (btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          )
        )}
        <button className="clear" onClick={() => handleButtonClick("C")}>
          C
        </button>
      </div>
    </div>
  );
}

export default App;
