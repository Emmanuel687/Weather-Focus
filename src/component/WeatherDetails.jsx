import React from "react";
import "./WeatherDetails.css";
import WeatherTemperature from "./WeatherTemperature";

// Received Weather Props from Weather.jsx component
function WeatherDetails({ weather }) {
  return (
    <div className="weather">
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
          />
        {/* Passed weather Temperature props to Weather Component */}
          <WeatherTemperature weather={weather.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:- {weather.precipitation}%</li>
            <li>Humidity:- {weather.humidity}%</li>
            <li>Wind:-{weather.wind}Km/hr </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
