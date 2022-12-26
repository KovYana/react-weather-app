import React from "react";

import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="currentTemperature">
      <div className="row text-center">
        <div className="col-md-4">
         <h1 id="current-city">{props.city}</h1>
        <div id="temperature-characterictic">{props.description}</div>
          
        </div>
        <div className="col-md-4">
          <h2 className="temperature">
            <img src="" alt="" className="emoji" id="icon" />
            {props.icon}
            <span id="current-temperature">{Math.round (props.temperature)}</span>
            <span className="units" id="units">°C
            </span>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="details" id="humidity">
            Humidity: {props.humidity}%
          </p>

          <p className="details" id="wind">
            Wind: {props.wind} km/h
          </p>
        </div>
      </div>
    </div>
  );
}
