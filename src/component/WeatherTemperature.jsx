import React from "react";
import "./WeatherTemperature.css";
import { useState } from "react";


// Received Temperature props from Weather Details Component
function WeatherTemperature({ weather }) {
 
 // Created State to track Units 
  const [units, setUnits] = useState("celsius");

  const handleConvertFahreniet = (e) => {
    e.preventDefault();
    setUnits("fahreneit");
  };
  const handleConvertCelcius = (e) => {
    e.preventDefault();
    setUnits("celsius");
  };

//  Convert to Fahreneit 
 let fahreneit = (weather * 9/5)+32;

  if (units === "celsius") {
    return (
      <div>
        <span className="temperature">{fahreneit}</span>
        <span className="unit">
          °C |{" "}
          <a className="temperature-link" href="/" onClick={handleConvertFahreniet}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{weather}</span>
        <span className="unit">
            <a className="temperature-link" href="/" onClick={handleConvertCelcius}>°C</a>
           |{" "}
            F
        </span>
      </div>
    );
  }
}

export default WeatherTemperature;
