import React, { useState } from 'react';

import image8 from './images/image8.jpeg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';

const realizationsData = [
  { image: image11, type: 'RUUKI FRIGGE', area: '120m2' },
  { image: image8, type: 'RUKKI FRIGGE', area: '150m2' },
  { image: image9, type: 'RUUKI FRIGGE', area: '130m2' },
  { image: image10, type: 'PRUSZYŃSKI', area: '160m2' },
  { image: image11, type: 'RUUKI FRIGGE', area: '120m2' },
  { image: image8, type: 'RUKKI FRIGGE', area: '150m2' },
  { image: image9, type: 'RUUKI FRIGGE', area: '130m2' },
  { image: image10, type: 'PRUSZYŃSKI', area: '160m2' },
];

export default function Realizations() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <div id="realizations" className="relative w-screen flex flex-col items-start justify-start px-4 py-2 md:px-16 mt-8 md:mt-16">
      <h2 className="text-2xl md:text-3xl w-full font-bold uppercase text-center md:text-left">
        Nasze Realizacje
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-3 gap-1 mt-8">
        {realizationsData.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="relative group m-2 md:m-4">
            <img
              src={item.image}
              className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:opacity-50"
              alt={`Nasze realizacje ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg flex-col">
              <p className="text-white font-bold text-lg">
                Blachodachówka: <span className="text-green-400">{item.type}</span>
              </p>
              <p className="text-white font-bold text-lg">
                Powierzchnia: <span className="text-green-400">{item.area}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < realizationsData.length && (
        <button
        onClick={handleShowMore}
        className="mt-8 px-6 py-2 bg-green-400 text-white font-bold text-xl rounded-lg hover:bg-green-500 transition-colors self-center">
        Pokaż więcej
      </button>
      )}
    </div>
  );
} 
