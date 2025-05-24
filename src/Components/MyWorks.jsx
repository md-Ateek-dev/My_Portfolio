import React, { useState } from 'react';
import MyWork from '../assets/MyWork';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import bgimage from '../assets/bg15.jpg';

const MyWorks = () => {
  const [showAll, setShowAll] = useState(false);
  const worksToShow = showAll ? MyWork : MyWork.slice(0, 4);

  return (
    <div
      style={{ backgroundImage: `url(${bgimage})` }}
      id='work'
      className='
        bg-cover bg-center bg-no-repeat
        bg-gradient-to-r from-purple-500 to-blue-500 
        flex flex-col items-center justify-center 
        px-4 py-12 gap-12 w-full min-h-screen
      '
    >
      {/* Heading */}
      <h1
        className='
          text-4xl sm:text-5xl font-extrabold mt-6 
          text-white text-center
          transition-transform duration-300 hover:scale-90 select-none
          drop-shadow-lg
        '
      >
        My Latest Work
      </h1>

      {/* Work Grid */}
      <div
        className='
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8
          max-w-7xl w-full px-4
        '
      >
        {worksToShow.map((work, index) => (
          <div
            key={index}
            className='
              relative rounded-xl overflow-hidden shadow-lg
              cursor-pointer group
              animate-fade-in-up
              transition-all duration-500
              hover:shadow-2xl
            '
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={work.w_imag}
              alt={`Work ${index + 1}`}
              className='
                w-full h-52 sm:h-56 md:h-60 object-cover
                rounded-xl
                transition-transform duration-500 group-hover:scale-105
              '
            />
            {/* Blurred overlay on hover */}
            <div
              className='
                absolute inset-0 bg-black bg-opacity-40 opacity-0
                group-hover:opacity-70 transition-opacity duration-500
                rounded-xl
                flex items-center justify-center
                text-white text-lg font-semibold
                pointer-events-none
              '
            >
              View Project
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less Buttons */}
      {MyWork.length > 4 && (
        <div className='mt-8'>
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className='
                group flex items-center gap-1 
                px-3 py-3 rounded-full text-white text-xl font-semibold
                border-1
                hover:shadow-ms hover:border-white
                hover:bg-white
                hover:text-blue-600
                transition-all duration-300
                select-none
                focus:outline-none focus:ring-1
                
              '
            >
              <IoIosArrowRoundBack
                className='
                  text-2xl transition-transform duration-500
                  group-hover:-translate-x-1
                '
              />
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className='
                group flex items-center gap-1 
                px-2 py-2 rounded-full text-white text-xl font-semibold
                border-1
                hover:shadow-ms hover:border-white
                hover:bg-blue-600
                transition-all duration-300
                select-none
                focus:outline-none focus:ring-1
              '
            >
              Show More
              <IoIosArrowRoundForward
                className='
                   text-2xl transition-transform duration-500
                  group-hover:translate-x-1
                '
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyWorks;
