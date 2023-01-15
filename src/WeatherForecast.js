import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }

    let apiKey="5taea11c8398fd054f57oa8d334b853e";
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

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