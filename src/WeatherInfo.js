import React from "react";
import FormattedDate from './FormattedDate';

export default function WeatherInfo (props) {
   return(
    <div className="currentTemperature">
    <div className="row text-center">
      <div className="col-md-4">
       <h1 id="current-city">{props.data.city}</h1>
       <div id="date-and-time"><FormattedDate date = {props.data.date} /></div>
      <div id="temperature-characterictic" className='text-capitalize'>{props.data.description}</div>
        
      </div>
      <div className="col-md-4">
        <h2 className="temperature">
          <img src={props.data.iconUrl} alt={props.data.iconDescription} className="emoji" id="icon" />
          
          <span id="current-temperature">{Math.round(props.data.temperature)}</span>
          <span className="units" id="units">°C
          </span>
        </h2>
      </div>
      <div className="col-md-4">
        <p className="details" id="humidity">
          Humidity: {props.data.humidity}%
        </p>
        <p className="details" id="wind">
          Wind: {Math.round(props.data.wind)} km/h        </p>
      </div>
    </div>
  </div>
   ) 
}