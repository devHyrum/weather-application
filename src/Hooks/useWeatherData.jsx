import { useState, useEffect } from 'react';

const API_KEY = 'b700908cddeca72abb7e5ab6651be468';

const useWeatherData = (location, unit) => {
  const [temperature, setTemperature] = useState(15);
  const [weather, setWeather] = useState('Shower');
  const [icon, setIcon] = useState('01d');
  const [humidity, setHumidity] = useState(0);
  const [airPressure, setAirPressure] = useState(0);
  const [windStatus, setWindStatus] = useState(0);
  const [windDirection, setWindDirection] = useState(0);
  const [visibility, setVisibility] = useState(10000);

  useEffect(() => {
    fetchWeatherData(location);
  }, [location, unit]);

  const fetchWeatherData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const tempInKelvin = data.main.temp;
        const tempInCelsius = tempInKelvin - 273.15;
        const tempInFahrenheit = (tempInKelvin - 273.15) * 9 / 5 + 32;

        setTemperature(unit === 'C' ? Math.round(tempInCelsius) : Math.round(tempInFahrenheit));
        setWeather(data.weather[0].main);
        setIcon(data.weather[0].icon);
        setHumidity(data.main.humidity);
        setAirPressure(data.main.pressure);
        setWindStatus(data.wind.speed);
        setWindDirection(data.wind.deg);
        setVisibility(data.visibility);
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
      });
  };

  return { temperature, weather, icon, humidity, airPressure, windStatus, windDirection, visibility };
};

export default useWeatherData;
