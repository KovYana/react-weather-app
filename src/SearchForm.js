import React, {useState} from 'react';
import axios from 'axios';
import "./SearchForm.css";

import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function SearchFrom(props) {
  const[city, setCity] = useState(props.defaultCity);
  const[weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date (response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      temperature: response.data.temperature.current,   
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed});
  }
function search() {
  const apiKey ="5taea11c8398fd054f57oa8d334b853e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
  function handleSubmit (event){
    event.preventDefault();
    search ();
  }

  function handleCityChange (event) {
    setCity(event.target.value);
  }

if (weatherData.ready){
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit} className="text-center" id="search-form" >
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Type your city.."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              onChange={handleCityChange}
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
      <WeatherInfo data={weatherData}/>
      <WeatherForecast data={weatherData}/>
    </div>
  );
  } else {
 search()

  return "Loading ..";
}
}



