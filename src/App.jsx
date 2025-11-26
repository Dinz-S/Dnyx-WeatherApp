import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OWM_KEY || ""; // set locally in .env or on hosting

export default function App() {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric"); // metric = Celsius, imperial = Fahrenheit
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(e) {
    e.preventDefault();
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    try {
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=${units}&appid=${API_KEY}`;
      const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city
      )}&units=${units}&appid=${API_KEY}`;

      const [wRes, fRes] = await Promise.all([axios.get(urlWeather), axios.get(urlForecast)]);
      setWeather(wRes.data);
      setForecast(fRes.data);
    } catch (err) {
      console.error(err);
      setError("Could not find that city. Make sure it is spelled correctly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Dnyx WeatherApp</h1>

        <form onSubmit={fetchWeather} className="flex gap-2 flex-wrap mb-4">
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Enter city (e.g. Mumbai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <select
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="metric">Celsius (°C)</option>
            <option value="imperial">Fahrenheit (°F)</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        {weather && <WeatherCard data={weather} units={units} />}

        {forecast && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Forecast (next 5 days, 3-hour steps)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {forecast.list
                .filter((_, i) => i % 8 === 0)
                .map((item) => (
                  <div key={item.dt} className="p-3 border rounded">
                    <div className="font-medium">
                      {new Date(item.dt * 1000).toLocaleDateString()}
                    </div>
                    <div className="text-sm">{item.weather[0].description}</div>
                    <div className="mt-2">
                      Temp: {Math.round(item.main.temp)}°
                      {units === "metric" ? "C" : "F"}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <footer className="mt-6 text-xs text-gray-500">
          Data provided by OpenWeatherMap. Remember to set <code>VITE_OWM_KEY</code> in your environment.
        </footer>
      </div>
    </div>
  );
}
