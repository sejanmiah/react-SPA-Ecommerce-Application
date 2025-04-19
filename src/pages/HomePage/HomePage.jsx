import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../../component/Hero/Hero';
import Phones from '../../component/Phones/Phones';

const HomePage = () => {
  const datas = useLoaderData(); // 
  const [displayProduct, setDisplayProduct] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayProduct(datas);
    } else {
      setDisplayProduct(datas.slice(0, 6));
    }
  }, [showAll, datas]);

  // ✅ This will be called from Hero
  const handleSearch = (results) => {
    setDisplayProduct(results); // Show filtered phones
    setShowAll(true); // Show all (remove slicing)
  };

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      setShowAll(true);
    }
  };

  if (!datas || !Array.isArray(datas)) return <p>Loading...</p>;

  return (
    <div className="my-20">

      <Hero handleSearch={handleSearch} datas={datas} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayProduct.length > 0 ? (
          displayProduct.map((data) => (
            <Phones key={data.id} data={data} />
          ))
        ) : (
          <p className="col-span-3 text-center text-red-500">No phones found</p>
        )}
      </div>

      {/* Only show toggle if no search performed */}
      {displayProduct.length !== 0 && (
        <div className="flex justify-center">
          <button
            onClick={handleToggle}
            className="relative inline-block text-lg group cursor-pointer mt-10"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">{showAll ? 'Show Less' : 'Show All'}</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
