import React, { useState } from "react";
import "./Weather.css";
import WeatherDate from "./WeatherDate";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track form submission

  //API Credentials
  const apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  

  // Handles the city event on the form input 
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  // Functio that handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Update form submission status

    // Fetch Data From Api
    axios
      .get(apiUrl)
      .then((response) => {
        const weatherData = response.data;

        // Set state of current Weather Data
        setWeather({
          city: weatherData.name,
          description: weatherData.weather[0].description,
          date: new Date(weatherData.dt * 1000),
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
    // Ternary Operator set to show form and weather details if
    <div className="weather">
      {submitted ? (
        <div>
          {form}
          <h1>{weather.city}</h1>
          <ul>
            <li>

              <WeatherDate currentDate={weather.date} />
            </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>

          <WeatherDetails weather={weather} />
        </div>
      ) :     // Ternary Operator set to show only form when form is not submited
      (
        <div>{form}</div>
      )}
    </div>
  );
};

export default Weather;
