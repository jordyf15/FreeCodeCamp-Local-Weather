import React from 'react';
import './WeatherIcon.css';

const WeatherIcon=({weather})=>{
    const setWeatherIcon=(param)=>{
        const weather=param.toLowerCase();
        switch(weather){
          case 'drizzle':
            return 'wi-sleet';
          case 'clouds':
            return 'wi-cloudy';
          case 'rain':
            return 'wi-hail';
          case 'snow':
            return 'wi-snow-wind';
          case 'clear':
            return 'wi-day-sunny'; 
          case 'thunderstorm':
            return 'wi-storm-showers';
          default:
            return 'wi-cloud';
        }
      };
      
    return(
        <>
        <div id='iconContainer'>
          <i className={`wi ${setWeatherIcon(weather)}`}></i>
          </div>
        </>
    )
};

export default WeatherIcon