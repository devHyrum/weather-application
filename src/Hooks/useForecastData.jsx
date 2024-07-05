import { useState, useEffect } from 'react';

const API_KEY = 'b700908cddeca72abb7e5ab6651be468';

const useForecastData = (city, temperatureUnit) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetchForecastData(city);
  }, [city, temperatureUnit]);

  const fetchForecastData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const filteredData = filterForecastData(data.list);
        setForecastData(filteredData);
      })
      .catch(error => {
        console.error('Error fetching forecast data:', error);
      });
  };

  const filterForecastData = (forecastList) => {
    const filteredList = [];
    const seenDays = new Set();

    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000); 
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

      if (time === '03:00 AM' && !seenDays.has(day)) {
        seenDays.add(day);

        let minTemp = item.main.temp_min;
        let maxTemp = item.main.temp_max;

        forecastList.forEach(innerItem => {
          const innerDate = new Date(innerItem.dt * 1000);
          const innerDay = innerDate.toLocaleDateString('en-US', { weekday: 'short' });

          if (innerDay === day) {
            if (innerItem.main.temp_min < minTemp) {
              minTemp = innerItem.main.temp_min;
            }
            if (innerItem.main.temp_max > maxTemp) {
              maxTemp = innerItem.main.temp_max;
            }
          }
        });

        filteredList.push({
          day,
          date: `${day}, ${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`,
          icon: `/src/assets/icons/${item.weather[0].icon}.png`,
          minTemp,
          maxTemp
        });

        if (filteredList.length === 5) { 
          return filteredList;
        }
      }
    });

    return filteredList;
  };

  return forecastData;
};

export default useForecastData;
