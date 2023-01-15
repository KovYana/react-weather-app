import React from "react";

export default function WeatherForecastDay(props){
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDate();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
        
    return(
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day">
                <h3> {day()} </h3>
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