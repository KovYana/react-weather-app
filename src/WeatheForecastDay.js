import React from "react";

export default function WeatherForecastDay(props){
    return(
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day">
                <h3> {props.data.time} </h3>
            </div>
            <img src={props.data.condition.icon_url} alt={props.data.condition.description}/>
            <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temperature-max">
                <strong>{Math.round(props.data.temperature.maximum)}°</strong>
                </span>
                <span className="WeatherForecast-temperature-min"> {Math.round(props.data.temperature.minimum)}° </span>             
                </div>
        </div>

    )
}