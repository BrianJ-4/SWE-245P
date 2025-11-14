// src/WeatherView.js
import { useState, useEffect } from "react";
import "./WeatherView.css";

function WeatherView() {
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(false);
    const [emptyData, setEmptyData] = useState(false);
    const [data, setData] = useState(false);

    return (
        <main className="weather-main">
            <h1>Weather Dashboard</h1>
            <div className="weather-status">
                <div>loading: {loadingData ? "loading" : "not loading"}</div>
                <div>error: {error ? "error" : "no error"}</div>
                <div>emptyData: {emptyData ? "empty" : "not empty"}</div>
                <div>data loaded: {data ? "yes" : "no"}</div>
            </div>
        </main>
    );
}

export default WeatherView;
