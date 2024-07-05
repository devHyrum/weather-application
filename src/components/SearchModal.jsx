import React, { useState } from 'react';
import closeModal from '../assets/close.svg';
import search from '../assets/search.svg';
import vector from '../assets/vector.svg';

const SearchModal = ({ onClose, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (city) => {
    onSearch(city || query);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center md:justify-start">
      <div className="bg-gray-800 p-8 rounded w-full h-full md:h-full md:w-1/3">
        <button className="bg-gray-800 p-2 rounded mb-4 relative left-[280px] md:left-[350px]" onClick={onClose}>
          <img src={closeModal} alt="close" className="w-6 h-6" />
        </button>
        <div className="flex gap-3 mb-10">
          <div className="flex border-white border-solid border-[2px] w-full">
            <img src={search} alt="search" className="w-5 h-5 relative top-[12px] left-2 border-none" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search location" className="p-2 bg-gray-800 w-full outline-none text-white"/>
          </div>
          <button className="bg-[#3C47E9] text-white p-2 px-3" onClick={() => handleSearch()}>Search</button>
        </div>

        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" onClick={() => handleSearch('London')}>
          <p>London</p>
          <img src={vector} alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" onClick={() => handleSearch('Barcelona')}>
          <p>Barcelona</p>
          <img src={vector} alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
        <div className="group text-white border border-transparent my-2 cursor-pointer p-2 hover:border-[1px] hover:border-white flex justify-between transition-all duration-300" onClick={() => handleSearch('Long Beach')} >
          <p>Long Beach</p>
          <img src={vector} alt="vector" className="w-5 h-5 relative bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
