import React, {useState} from 'react';
import axios from 'axios';
import CurrentTemperature from './CurrentTemperature';

import "./SearchForm.css";

export default function SearchFrom() {
  const [city, setCity] = useState ('');
  const [weather, setWeather]=useState('');
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36c58b321eebc67821aa228dc67d4641&units=metric`;
    axios.get(url).then(showTemperature);
    }

   function showTemperature (response){
    let iconUrl = response.data.weather[0].icon;
    let imgIcon = (
      <img
        src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`}
        alt="loading"
      />
    );
    setWeather(
      <CurrentTemperature temperature={response.data.main.temp}
      description={response.data.weather[0].description}
      humidity={response.data.main.humidity}
      wind={response.data.wind.speed}
      icon={imgIcon} />);
    
   }
   function updateCity (event){
   setCity(event.target.value);
   }

  return (
    <div className="SearchForm">
      <form className="text-center" id="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <input
              type="search"
              placeholder="Type your city.."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm"
              onChange={updateCity}
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
      <h1 className="text-center mt-5" id="current-city">{city}</h1>
      {weather}
    </div>
  );
}