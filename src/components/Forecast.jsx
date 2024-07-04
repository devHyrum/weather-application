import React from 'react';
import ForecastCard from './ForecastCard';
import sunnyIcon from '../assets/icons/01d.png';
import rainyIcon from '../assets/icons/09d.png';


const forecastData = [
    { day: 'Tomorrow', date: 'Sat, 6 Jun', icon: rainyIcon, minTemp: 11, maxTemp: 16 },
    { day: 'Sun, 7 Jun', date: '', icon: sunnyIcon, minTemp: 11, maxTemp: 18 },
    { day: 'Mon, 8 Jun', date: '', icon: rainyIcon, minTemp: 11, maxTemp: 16 },
    { day: 'Tue, 9 Jun', date: '', icon: sunnyIcon, minTemp: 11, maxTemp: 16 },
    { day: 'Wed, 10 Jun', date: '', icon: rainyIcon, minTemp: 11, maxTemp: 16 }
  ];
  
  const Forecast = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {forecastData.map((forecast, index) => (
          <ForecastCard 
            key={index}
            day={forecast.day}
            date={forecast.date}
            icon={forecast.icon}
            minTemp={forecast.minTemp}
            maxTemp={forecast.maxTemp}
          />
        ))}
      </div>
    );
  };
  
  export default Forecast;
