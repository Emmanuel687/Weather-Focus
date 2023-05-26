import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherDetails.css";

function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">
      <div className="row mt-3">
        <div className="col-4">
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
            alt={weather.description}
          />
        </div>
        <div className="col-4">
          <WeatherTemperature weather={weather.temperature} />
        </div>
        <div className="col-4">
          <ul className="weather-info-list">
            <li>
              <strong>Precipitation:</strong> {weather.precipitation}%
            </li>
            <li>
              <strong>Humidity:</strong> {weather.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {weather.wind} Km/hr
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
