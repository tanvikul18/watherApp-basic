import React from 'react'
import './Weather.css'
export default function Weather(props) {
  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d');
  const getTime = (time)=>{
    return `${new Date(time * 1000).getHours()} : ${ new Date(time*1000).getMinutes()}`
  }
  const WeatherInfoIcons ={
    sunset: "/sunset.png",
    sunrise: "/sunrise.png",
    humidity: "/humidity.png",
    wind: "/wind.png",
    pressure: "/pressure.png",
  }
   const WeatherIcons ={
    "01d": "/icon/sunny.svg",
    "01n": "/icon/night.svg",
    "02d": "/icon/day.svg",
    "02n": "/icon/cloudy-night.svg",
    "03d": "/icon/cloudy.svg",
    "03n": "/icon/cloudy.svg",
    "04d": "/icon/perfect-day.svg",
    "04n": "/icon/cloudy-night.svg",
    "09d": "/icon/rain.svg",
    "09n": "/icon/rain-night.svg",
    "10d": "/icon/rain.svg",
    "10n": "/icon/rain-night.svg",
    "11d": "/icon/storm.svg",
    "11n": "/icon/storm.svg",
    
  }
  const WeatherInfoComponent=(props)=>{
    const{name,value}=props;
    return(
      <div className='info-contianer'>
        <div className='info-icon'>
           <img src={WeatherInfoIcons[name]}/>
        </div>
        <div className='info-label'>
          {value}
          <span>{name}</span>
        </div>
      </div>
    )

  }
  return (
    <>
    <div className='weathercondition'>
       <span className='condition'>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> { `| ${weather?.weather[0].description}`}
       <img className='cloudimg' src={WeatherIcons[weather?.weather[0].icon]}/>
       
    </div>
    <span className='location'>{weather?.name}, {weather?.sys?.country}</span>
    <span className='weatherinfo'>Weather Info</span>
    <div className='weatherinfo-container'>
        <WeatherInfoComponent name={isDay ? "sunset" : "sunrises"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}/>
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure}/>
    </div>
    </>
  )
}
