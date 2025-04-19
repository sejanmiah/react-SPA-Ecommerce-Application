import React, { useState } from 'react';
import image from '../../assets/banner.png';

const Hero = ({ handleSearch, datas }) => {
  const [searchText, setSearchText] = useState('');

  const handleLocalSearch = (e) => {
    e.preventDefault();
    const searchedPhones = datas.filter((phone) =>
        phone.name.toLowerCase().split(' ').includes(searchText.toLowerCase()) ||
        phone.brand.toLowerCase().split(' ').includes(searchText.toLowerCase())
    );
    console.log(searchedPhones);

    handleSearch(searchedPhones);
  };

  return (
    <div>
      <img className='w-full mx-auto md:max-w-md ' src={image} alt="Banner-Image" />
      <h1 className='text-7xl text-center font-[100]'>Browse, Search, View, Buy</h1>
      <p className='text-[#6a7282] text-center mt-2 mb-5'>
        Best place to browse, search, view details and purchase of top flagship phones <br />
        of the current time - FlagshipFaceOff
      </p>

      <form onSubmit={handleLocalSearch} className='flex flex-col md:flex-row justify-center mb-4 md:px-24'>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className='bg-white border border-gray-300 rounded w-2/3 h-12  px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 focus:shadow'
          placeholder='Search Phone By Name'
        />
        <button type='submit' className="relative inline-block text-lg group cursor-pointer">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Search</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
