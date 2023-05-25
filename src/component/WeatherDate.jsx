import React from 'react'

function WeatherDate({currentDate}) {
    let date = new Date(currentDate*1000);
    
    let daysWeek = [
        "Sunday", "Monday", "Tuesday" , "Wenesday", "Thursday", "Friday","Saturday"
    ]

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours()
    let minutes = date.getMinutes();
    let dayWeek = daysWeek.at(day)

    if(minutes<10){
        minutes= "0"+ minutes
    }
    

    console.log(`Day is ${date}`)
    console.log(`Hour is ${hour}`)
    console.log(`Minutes is ${minutes}`)
    console.log(`Day is ${day}`)
    console.log(`Month is ${month}`)
    console.log(`Year is ${year}`)
  return (
    <div>{dayWeek}  {hour}:{minutes}</div>
  )
}

export default WeatherDate