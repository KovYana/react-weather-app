import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data.city]);
    
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                              <div className="col" key={index}>
                              <WeatherForecastDay data={dailyForecast} />  
                              </div>
                              );
                         } else{
                            return null;
                         }
                     })}  
               </div>
            </div>  
        );                 
    } else {
        let apiKey="5taea11c8398fd054f57oa8d334b853e";
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return null;
    }



    
}