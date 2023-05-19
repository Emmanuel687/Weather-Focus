import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track form submission

  //API Credentials
  const apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Update form submission status

    axios
      .get(apiUrl)
      .then((response) => {
        const weatherData = response.data;
        // Handle the weather data as per your requirements
        setWeather({
          city: weatherData.name,
          description: weatherData.weather[0].description,
          precipitation: null,
          humidity: weatherData.main.humidity,
          wind: weatherData.wind.speed,
          icon: weatherData.weather[0].icon,
          temperature: Math.round(weatherData.main.temp),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            type="text"
            placeholder="Input City"
            autoFocus="on"
            onChange={handleCity}
          />
        </div>
        <div className="col-3">
          <input className="btn btn-primary w-100" type="submit" />
        </div>
      </div>
    </form>
  );

  return (
    <div className="weather">
      {submitted ? (
        <div>
          {form}
          <h1>{weather.city}</h1>
          <ul>
            <li>Wednesday 07:00</li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>

          <div className="row mt-3">
            <div className="col-6">
              <img
                src={`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`}
                alt={weather.description}
              />
              <span className="temperature">{weather.temperature}</span>
              <span className="unit">°C</span>
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
      ) : (
        <div>
          {form}
        </div>
      )}
    </div>
  );
};

export default Weather;
