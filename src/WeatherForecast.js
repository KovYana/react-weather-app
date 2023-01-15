import React from "react";

export default function WeatherForecast(props) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                       <h3> Sun </h3>
                    </div>
                   <img src="/" alt=""/>
                   <div className="WeatherForecast-temperatures"> 
                     <span className="WeatherForecast-temperature-max">
                     <strong>10°</strong>
                     </span>
                     <span className="WeatherForecast-temperature-min"> 0° </span>             
                  </div>
                </div>
           </div>
        </div>                   
    )
}