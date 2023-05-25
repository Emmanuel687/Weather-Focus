import React from 'react'

function WeatherDate({currentDate}) {
    let date = new Date(currentDate*1000);

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours()
    let minutes = date.getMinutes();

    console.log(`Day is ${date}`)
    console.log(`Hour is ${hour}`)
    console.log(`Minutes is ${minutes}`)
    console.log(`Day is ${day}`)
    console.log(`Month is ${month}`)
    console.log(`Year is ${year}`)
  return (
    <div>{hour}:{minutes}</div>
  )
}

export default WeatherDate