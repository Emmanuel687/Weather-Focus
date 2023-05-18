import React from 'react';
import "./Weather.css"

const Weather = () => {
  return (
    <div className='weather'>
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Most Cloudy</li>
        </ul>

        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Weather