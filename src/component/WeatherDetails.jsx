import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherDetails.css";


// Received Weather Props from Weather.jsx component
function WeatherDetails({ weather }) {
  return (
    <>

    <div className="row mt-3">
            <div className="col-6">
              <img
                src={`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`}
                alt={weather.description}
              />
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
    </>
  );
}

export default WeatherDetails;
