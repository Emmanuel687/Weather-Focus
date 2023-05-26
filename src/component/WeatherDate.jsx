import React from 'react'

// Received Props from Weather Component
function WeatherDate({currentDate}) {
    // Change Date to UTC format
    let date = new Date(currentDate*1000);

    // Set Days of Week
    let daysWeek = [
        "Sunday", "Monday", "Tuesday" , "Wednesday", "Thursday", "Friday","Saturday"
    ]
    
    
    let day = date.getDay();
    let hour = date.getHours()
    let minutes = date.getMinutes();
    let dayWeek = daysWeek.at(day)
     
    if(minutes<10){
        minutes= `0${minutes}`
    }
    if(hour<10){
        hour=`0${hour}`

    }
    

  
  return (
    <div>{dayWeek}  {hour}:{minutes}</div>
  )
}

export default WeatherDate