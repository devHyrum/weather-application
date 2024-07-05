import React from 'react';
import ForecastCard from './ForecastCard';
import useForecastData from '../Hooks/useForecastData';

const Forecast = ({ city, temperatureUnit }) => {
  const forecastData = useForecastData(city, temperatureUnit);

  const firstForecast = forecastData.length > 0 ? forecastData[0] : null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
      {/* Render "Tomorrow" for the first card */}
      {firstForecast && (
        <ForecastCard
          key={0}
          day="Tomorrow"
          date=""
          icon={firstForecast.icon}
          minTemp={temperatureUnit === 'C' ? Math.round(firstForecast.minTemp - 273.15) : Math.round((firstForecast.minTemp - 273.15) * 9/5 + 32)}
          maxTemp={temperatureUnit === 'C' ? Math.round(firstForecast.maxTemp - 273.15) : Math.round((firstForecast.maxTemp - 273.15) * 9/5 + 32)}
          temperatureUnit={temperatureUnit}
        />
      )}
      {/* Render other forecast cards */}
      {forecastData.slice(1).map((forecast, index) => (
        <ForecastCard
          key={index + 1}
          day=""
          date={forecast.date}
          icon={forecast.icon}
          minTemp={temperatureUnit === 'C' ? Math.round(forecast.minTemp - 273.15) : Math.round((forecast.minTemp - 273.15) * 9/5 + 32)}
          maxTemp={temperatureUnit === 'C' ? Math.round(forecast.maxTemp - 273.15) : Math.round((forecast.maxTemp - 273.15) * 9/5 + 32)}
          temperatureUnit={temperatureUnit}
        />
      ))}
    </div>
  );
};

export default Forecast;
