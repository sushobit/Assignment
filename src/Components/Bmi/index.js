import React, { useState } from "react";
import "./index.css";

function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = () => {
    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(1);
    setBmi(bmiValue);
  };

  const getStatus = (bmi) => {
    switch(true) {
      case (bmi < 18.5):
        return "Underweight";
      case (bmi >= 18.5 && bmi < 24.9):
        return "Normal";
      case (bmi >= 25 && bmi < 29.9):
        return "Overweight";
      default:
        return "Obese";
    }
  }
  

  return (
    <div className="container">
       <div className="bmicont">
                    <h1>BMI Calculator</h1>
                    <p>BMI, or Body Mass Index, is a measurement that indicates whether a person has <br/>
                    a healthy weight-to-height ratio, providing insight into potential health risks associated with weight.</p>
                    <div className="input-wrapper">
                        <label htmlFor="height">Height:</label>
                        <input
                        type="number"
                        id="height"
                        placeholder="Height in cm"
                        className="inputclass"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="weight">Weight:</label>
                        <input
                        type="number"
                        id="weight"
                        placeholder="Weight in kg"
                        className="inputclass"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <button className="calculate-btn" onClick={calculateBmi}>
                        Calculate BMI
                    </button>
                    {bmi && <div className="result">Your BMI is: {bmi}</div>}
                    {bmi && <div className="result">You are currently: {getStatus(bmi)}</div>}
        </div>  
    </div>
  );
}

export default Bmi;
