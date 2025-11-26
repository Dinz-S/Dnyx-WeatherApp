import React from "react";

export default function WeatherCard({ data, units }) {
  const tempUnit = units === "metric" ? "°C" : "°F";
  return (
    <div className="p-4 border rounded shadow-sm">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            width={80}
            height={80}
          />
        </div>
        <div>
          <div className="text-xl font-bold">
            {data.name}, {data.sys.country}
          </div>
          <div className="text-sm text-gray-600">{data.weather[0].description}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-3xl font-extrabold">{Math.round(data.main.temp)}{tempUnit}</div>
          <div className="text-sm text-gray-600">Feels like {Math.round(data.main.feels_like)}{tempUnit}</div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
        <div>Humidity: {data.main.humidity}%</div>
        <div>Pressure: {data.main.pressure} hPa</div>
        <div>Wind: {Math.round(data.wind.speed)} {units === "metric" ? "m/s" : "mph"}</div>
        <div>Clouds: {data.clouds.all}%</div>
      </div>
    </div>
  );
}
