import React, { useState, useEffect } from 'react';
import WeatherDetails from './components/WeatherDetails';
import SearchModal from './components/SearchModal';
import TemperatureToggle from './components/TemperatureToggle';
import Forecast from './components/Forecast';
import locationIcon from './assets/myLocation.svg';
import locationChoose from './assets/location.svg';
import background from './assets/background.png'; 


const API_KEY = 'b700908cddeca72abb7e5ab6651be468';

const App = () => {
  const [unit, setUnit] = useState('C');
  const [temperature, setTemperature] = useState(15);
  const [weather, setWeather] = useState('Shower');
  const [icon, setIcon] = useState('01d');
  const [humidity, setHumidity] = useState(0);
  const [airPressure, setAirPressure] = useState(0);
  const [windStatus, setWindStatus] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('Helsinki');
  const [currentDate, setCurrentDate] = useState('');
  const [windDirection, setWindDirection] = useState(0); 
  const [visibility, setVisibility] = useState(10000); 


  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);
  

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

  const handleToggleUnit = (newUnit) => {
    setUnit(newUnit);
    fetchWeatherData(location);
  };

  const handleSearch = (query) => {
    setLocation(query);
  };

  const handleLocateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => setLocation(data.city || data.locality));
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-[Raleway]">
      {/* Left Side */}
      <div className='absolute inset-0 object-cover z-0 w-[400px] left-[-19px] top-[100px] md:w-[40%] md:left-[-70px] md:top-[200px] overflow-hidden'>
        <img src={background} alt='Cloud background' className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col p-8 w-full md:w-1/3 bg-gray-800 text-white md:h-[700px]">
        <div className="flex justify-between w-full mb-8">
          <button className="bg-[#6E707A] p-2 rounded-sm" onClick={() => setShowModal(true)}>Search for places</button>
          <button className="bg-[#6E707A] p-2 rounded-full" onClick={handleLocateUser}><img src={locationIcon} alt="Locate me" className="w-6 h-6" /></button>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src='/src/assets/background.png' alt='Cloud background' className=' w-full h-[100%]' /> */}
          <div className='py-10'><img src={`/src/assets/icons/${icon}.png`} alt="Weather icon" className="w-[120px] h-[120px]"/></div>
          <div className="text-8xl">{temperature} <span className='text-gray-400 text-3xl'>°{unit}</span></div>
          <div className="text-2xl text-gray-400 p-10">{weather}</div>
          <div className="mt-4 text-gray-400">{`Today • ${currentDate}`}</div>
          <div className="mt-2 flex text-gray-400 pt-3"><img src={locationChoose} alt="Locate" className="w-3 h-3 relative top-[5px] right-1"/>{location}</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-full md:w-2/3 md:h-[700px] bg-[#100E1D] text-white p-8 md:px-[140px] z-10">
        <TemperatureToggle unit={unit} onToggle={handleToggleUnit} />
        <Forecast />
        <div className='pt-5 text-2xl'>Today's Highlights</div>
        <WeatherDetails 
          windStatus={windStatus} 
          humidity={humidity} 
          visibility={visibility} 
          airPressure={airPressure} 
          windDirection={windDirection} 
        />
      </div>
      
      {showModal && <SearchModal onClose={() => setShowModal(false)} onSearch={handleSearch} />}
    </div>
  );
};

export default App;
