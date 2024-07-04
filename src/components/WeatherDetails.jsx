import React from 'react';
import direction from '../assets/direction.svg';

const WeatherDetails = ({ windStatus, humidity, visibility, airPressure, windDirection }) => {

  const getRotation = (deg) => {
    return `rotate(${deg}deg)`;
  };

   const getWindDirectionAbbreviation = (deg) => {
    if (deg === 0 || deg === 360) {
      return 'N';
    } else if (deg > 0 && deg < 45) {
      return 'NNE';
    } else if (deg === 45) {
      return 'NE';
    } else if (deg > 45 && deg < 90) {
      return 'ENE';
    } else if (deg === 90) {
      return 'E';
    } else if (deg > 90 && deg < 135) {
      return 'ESE';
    } else if (deg === 135) {
      return 'SE';
    } else if (deg > 135 && deg < 180) {
      return 'SSE';
    } else if (deg === 180) {
      return 'S';
    } else if (deg > 180 && deg < 225) {
      return 'SSW';
    } else if (deg === 225) {
      return 'SW';
    } else if (deg > 225 && deg < 270) {
      return 'WSW';
    } else if (deg === 270) {
      return 'W';
    } else if (deg > 270 && deg < 315) {
      return 'WNW';
    } else if (deg === 315) {
      return 'NW';
    } else if (deg > 315 && deg < 360) {
      return 'NNW';
    } else {
      return 'N';
    }
  };
  

  const windAbbreviation = getWindDirectionAbbreviation(windDirection);

  const formatVisibility = (visibility) => {
    if (visibility >= 10000) {
      return `${Math.floor(visibility / 1000)}`;
    } else if (visibility >= 1000) {
      return `${(visibility / 1000).toFixed(1)}`;
    } else {
      return `${(visibility / 1000).toFixed(1)}`; 
    }
  };

  const formattedVisibility = formatVisibility(visibility);


  return (
    <div className="grid grid-cols-1 gap-6 mt-8 w-full mx-auto md:flex-wrap md:w-full md:grid-cols-2">
      
      <div className="bg-gray-800 p-4 flex flex-col items-center">
        <h3 className="text-sm">Wind status</h3>
        <p className="text-3xl p-3"><span className='text-6xl font-bold'>{windStatus}</span> mph</p>
        <div className='flex pt-3 text-sm'>
          <img src={direction} alt="Locate" className="w-5 h-5 relative top-[0px] right-1" style={{ transform: getRotation(windDirection) }} />
          <p>{windAbbreviation}</p>
        </div>
      </div>

      <div className="bg-gray-800 p-4 ">
        <div className='flex flex-col items-center'>
          <h3 className="text-sm">Humidity</h3>
          <p className="text-3xl"><span className='text-6xl font-bold'>{humidity}</span>%</p>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-[#A09FB1]">0</span>
          <span className="text-base font-medium  text-[#A09FB1]">50</span>
          <span className="text-sm font-medium  text-[#A09FB1]">100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#E7E7EB]">
          <div className="bg-[#FFEC65] h-2.5 rounded-full" style={{width: `${humidity}%`}}></div>
        </div>
        <div className="flex justify-end">
          <span className="text-sm font-medium  text-[#A09FB1]">%</span>
        </div>
      </div>

      <div className="bg-gray-800 p-4 flex flex-col items-center">
        <h3 className="text-sm">Visibility</h3>
        <p className="text-3xl"><span className='text-6xl font-bold'>{formattedVisibility}</span>miles</p>
      </div>

      <div className="bg-gray-800 p-4 flex flex-col items-center">
        <h3 className="text-sm">Air Pressure</h3>
        <p className="text-3xl"><span className='text-6xl font-bold'>{airPressure}</span> mb</p>
      </div>
      
    </div>
  );
};

export default WeatherDetails;
