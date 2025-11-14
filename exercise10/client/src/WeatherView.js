// src/WeatherView.js
import { useState, useEffect } from "react";
import "./WeatherView.css";

const zip = "92870";
const country = "US";
const APIkey = "9d3ea15388105a8ab5261fb964f8200d";

function WeatherView() {
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(false);
    const [emptyData, setEmptyData] = useState(false);
    const [data, setData] = useState(false);

    // Geolocation
    useEffect(() => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${APIkey}`
        )
            .then((response) => response.json())
            .then((geoData) => {
                console.log("Geolocation response:", geoData);
            })
            .catch((err) => {
                console.log("Geolocation error:", err.message);
            });
    }, []);

    // Get Weather
    useEffect(() => {
        const lat = "33.8744";
        const lon = "-117.8543";

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
        )
            .then((response) => response.json())
            .then((actualData) => {
                console.log("Weather response:", actualData);

                setLoadingData(false);
                setError(false);

                if (!actualData || actualData.cod !== 200) {
                    setEmptyData(true);
                    return;
                }

                setData(actualData);
            })
            .catch((err) => {
                console.log("Weather error:", err.message);
                setLoadingData(false);
                setError(true);
            });
    }, []);

    const toCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

    return (
        <main className="weather-main">
            <h1>Weather Dashboard</h1>
            <div className="weather-status">
                {loadingData ? <div>Loading Weather...</div> : null}
                {error ? <div>Error loading Data</div> : null}
                {emptyData ? <div>No Data Available</div> : null}

                {(!loadingData && !error && data) ? (
                    <div className="weather-card">
                        <h2>{data.name}</h2>

                        <div>Temperature: {toCelsius(data.main.temp)} °C</div>
                        <div>Min: {toCelsius(data.main.temp_min)} °C</div>
                        <div>Max: {toCelsius(data.main.temp_max)} °C</div>

                        <div>
                            Condition:{" "}
                            {data.weather && data.weather[0] ? data.weather[0].description : null}
                        </div>

                        <div>Wind Speed: {data.wind.speed} m/s</div>
                        <div>Wind Direction: {data.wind.deg}°</div>
                    </div>
                ) : null}
            </div>
        </main>
    );
}

export default WeatherView;
