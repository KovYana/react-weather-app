import React from "react";

import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="currentTemperature">
      <div className="row text-center">
        <div className="col-md-4">
          <h1 id="current-city">Wrocław</h1>
          <div id="date-and-time">
            Friday, <span role="img">⌚</span> 12:14
            <div id="temperature-characterictic">cloudy</div>
          </div>
        </div>
        <div className="col-md-4">
          <h2 className="temperature">
            <img src="" alt="" className="emoji" id="icon" />
            🌤️
            <span id="current-temperature">5</span>
            <span className="units" id="units">
              °C | °F
            </span>
          </h2>
        </div>
        <div className="col-md-4">
          <p className="details" id="humidity">
            Humidity: 95%
          </p>

          <p className="details" id="wind">
            Wind: 3 km/h
          </p>
        </div>
      </div>
    </div>
  );
}
