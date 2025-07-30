import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import { API_KEY } from '../../API/constants';
import Weather from '../../weather/weather';

export default function Home() {
    const[searchTxt,setserachTxt]=useState('');
    const[weather,setweather]=useState();
    const handleSearchTxt=(e)=>{
         setserachTxt(e.target.value)
    }
   const handleSubmit=(e)=>{
       e.preventDefault();
       fetchWeather();
   }
   const fetchWeather= async()=>{
    try{
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTxt}&appid=${API_KEY}`) ;
        const result = await weatherData.data;
        console.log(weatherData)
        setweather(result)
    }
    catch(err){
        console.log("Error in retreiving")
    }
    
   }

  return (
    <div className='weather-container'>
       <h2>React Weather App</h2>
      {

        weather ?  <Weather weather={weather}/> : (  
          <> 
         <div className='weather-image'>
          <img src="/eather.jfif" alt="aetherapp"/>
            <p>Find the weather of your city</p>
         </div>
         <div className='serachcity-container'>
          
            <input type="text" value={searchTxt} placeholder='Enter city name...' onChange={handleSearchTxt}/>
            <button onClick={handleSubmit}>Submit</button>
         </div></>)
      }
     
        
    </div>
  )
}
