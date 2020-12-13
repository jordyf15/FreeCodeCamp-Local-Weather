import React,{useEffect, useState} from 'react';
import './App.css';
import WeatherIcon from './WeatherIcon';

const App=()=>{
  const [weather,setWeather]=useState(null);
  const [isCelcius,setIsCelcius]=useState(true);

  const changeTemp=()=>{
    setIsCelcius(!isCelcius);
  }

  const convertToFahrenheit=(celcius)=>{
    const fahrenheit= (celcius*9/5)+32;
    return fahrenheit.toFixed(1);
  }
  
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then((res)=>res.json())
        .then((weatherResult)=>{
          setWeather(weatherResult);
        });
      });
    }else{
      console.log('navigator not supported');
    }
  },[]);

  return(
    <div>
      <div id='screenButtonContainer'>
        <div id='screen'>
          {weather
          ? <>
          <span id='title'>Jordy's Freecodecamp <br/> Local Weather App</span>
          <span>{`${weather.name}, ${weather.sys.country}`}</span>
          {isCelcius
          ?<span>{weather.main.temp.toFixed(1)}&#176;C</span>
          :<span>{convertToFahrenheit(weather.main.temp)}&#176;F</span>}
          <WeatherIcon weather={weather.weather[0].main}/>
          </>
          :<><span id='title'>can't get user location <br/>:[</span>
            <span>Please allow this site <br/>to access your location</span>
            <span>or</span>
            <span>Check your connection</span>
          </>}

        </div>

        <div id='buttonTagContainer'>
          <div id='buttonContainer'>
            <div className='button' id='buttonCF' onClick={changeTemp}>
              <span id='CFtext'>F/C</span>
            </div>
            <div className='button' id='buttonCreator' onClick={()=>window.open('https://github.com/jordyf15', '_blank')}>
              <img alt='pixel github icon' height='40px' width='40px' src='https://i.pinimg.com/originals/0c/15/34/0c153492a71e823618033bcc2414c34a.png'></img>
            </div>
          </div>
          <div id='tag'>
            <span>Created by Jordy Ferdian for FreeCodeCamp's Take Home Projects<br/> 
            <a href='https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/show-the-local-weather' 
            rel="noreferrer" target='_blank'>(Show the Local Weather)</a></span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default App;