import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <form action="">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="text"
              placeholder="Input City"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input className="btn btn-primary w-100" type="submit" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Most Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
         <span className="temperature">5</span>
         <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:- 15%</li>
            <li>Humidity:- 72%</li>
            <li>Wind:-13Km/hr </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
