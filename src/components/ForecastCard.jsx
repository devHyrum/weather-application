import React from 'react';

const ForecastCard = ({ day, date, icon, minTemp, maxTemp }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 ">
      <div className="text-lg">{day}</div>
      <div className="text-sm text-gray-400">{date}</div>
      <img src={icon} alt="weather icon" className="w-12 h-12 my-2" />
      <div className='flex gap-4'>
        <div className="text-lg">{maxTemp}°C</div>
        <div className="text-sm text-gray-400">{minTemp}°C</div>
      </div>
      
    </div>
  );
};

export default ForecastCard;
