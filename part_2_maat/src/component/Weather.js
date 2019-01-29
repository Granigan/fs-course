import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const APIKEY = process.env.REACT_APP_APIXU;
  const [weather, setNewWeather] = useState(
    {
      current: {
        temp_c: "n/a",
        wind_kph: "n/a",
        wind_dir: "n/a",
        condition: {
          icon: "#"
        }
      }
    }
  );

  useEffect(() => {
    axios
      .get(`https://api.apixu.com/v1/current.json?key=${APIKEY}&q=${city}`)
      .then(response => {
        setNewWeather(response.data);
      });
  }, []);

  return (
    <div>
      <h3>Weather in the capital {city}</h3>
      <p>
        <strong>Temperature:</strong> {weather.current.temp_c} Celsius
      </p>
      <img src={weather.current.condition.icon} alt="" width="100px" />
      <p>
        <strong>Wind:</strong> {weather.current.wind_kph} kph to {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
