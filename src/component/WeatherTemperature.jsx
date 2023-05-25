import React from 'react';
import "./WeatherTemperature.css";
import { useState } from 'react';


function WeatherTemperature({weather}) {

  
  return (
    <div>
          <span className="temperature">{weather}</span>
          <span className="unit">°C</span>
          <span className="unit" >°F</span>


    </div>
  )
}

export default WeatherTemperature