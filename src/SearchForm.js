import React, {useState} from 'react';
import axios from 'axios';
import "./SearchForm.css";


export default function SearchFrom(props) {
 
  const[weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Friday, 12:14",
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      temperature: response.data.temperature.current,   
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed});
    
  }

if (weatherData.ready){
  return (
    <div className="SearchForm">
      <form className="text-center" id="search-form" >
        <div className="row">
          <div className="col-sm-6">
            <input
              type="search"
              placeholder="Type your city.."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
              id="search-button"
            />
          </div>
                    
        </div>
      </form>
      <div className="currentTemperature">
      <div className="row text-center">
        <div className="col-md-4">
         <h1 id="current-city">{weatherData.city}</h1>
         <div id="date-and-time">{weatherData.date}</div>
        <div id="temperature-characterictic" className='text-capitalize'>{weatherData.description}</div>
          
        </div>
        <div className="col-md-4">
          <h2 className="temperature">
            <img src={weatherData.iconUrl} alt={weatherData.iconDescription} className="emoji" id="icon" />
            
            <span id="current-temperature">{Math.round(weatherData.temperature)}</span>
            <span className="units" id="units">°C
            </span>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="details" id="humidity">
            Humidity: {weatherData.humidity}%
          </p>
          <p className="details" id="wind">
            Wind: {Math.round(weatherData.wind)}km/h        </p>
        </div>
      </div>
    </div>
  
    </div>
  );
  } else {
  const apiKey ="5taea11c8398fd054f57oa8d334b853e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading ..";
}
}



