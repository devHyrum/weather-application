import React from 'react';

const TemperatureToggle = ({ unit, onToggle }) => {
  const handleToggle = (selectedUnit) => {
    onToggle(selectedUnit);
  };

  return (
    <div className="flex justify-end gap-2">
      <button
        className={`p-3 px-4 ${unit === 'C' ? 'bg-white text-black font-bold' : 'bg-[#585676]'} rounded-full`}
        onClick={() => handleToggle('C')}
      >
        °C
      </button>
      <button
        className={`p-3 px-4 ${unit === 'F' ? 'bg-white text-black ' : 'bg-[#585676]'} rounded-full`}
        onClick={() => handleToggle('F')}
      >
        °F
      </button>
    </div>
  );
};

export default TemperatureToggle;
