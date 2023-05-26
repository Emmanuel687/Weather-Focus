import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherDetails.css";

// Received Weather Props from Weather.jsx component
function WeatherDetails({ weather }) {
  return (
    <>
      <div className="row mt-3">
      <div className="col-4">
        <img className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather.icon}.png
            `}
            alt={weather.description}
          />

        </div>
        <div className="col-4">
          <WeatherTemperature weather={weather.temperature} />
        </div>
       
        <div className="col-4">
          <ul>
            <li>Precipitation:- {weather.precipitation}%</li>
            <li>Humidity:- {weather.humidity}%</li>
            <li>Wind:-{weather.wind}Km/hr </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WeatherDetails;
