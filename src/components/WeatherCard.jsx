import React from 'react';

const WeatherCard = ({ temperature, weather }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="text-6xl">{temperature}°C</div>
      <div className="text-xl">{weather}</div>
    </div>
  );
};

export default WeatherCard;
