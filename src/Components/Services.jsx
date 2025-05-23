import React from 'react';
import Services_data from '../assets/Services_data';
import { FaLongArrowAltRight } from 'react-icons/fa';
import bgimage from '../assets/bg1.avif';

const Services = () => {
  return (
    <div
        style={{ backgroundImage: `url(${bgimage})` }}
    
      id='services'
      className='
      bg-cover bg-center bg-no-repeat
        bg-gradient-to-r from-purple-500 to-blue-500 
        flex flex-col items-center justify-center
        px-6 py-12 gap-10 w-full min-h-screen
      '
    >
      {/* Heading */}
      <h1
        className='
          text-4xl sm:text-5xl font-extrabold 
         text-white text-center
          hover:scale-105 transition-transform duration-300
          drop-shadow-lg select-none
        '
      >
        My Services
      </h1>

      {/* Services Grid */}
      <div className='
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
        w-full max-w-7xl
      '>
        {Services_data.map((service, index) => (
          <div
            key={index}
            className='
              relative
              backdrop-blur-md
              rounded-3xl p-8
              shadow-lg shadow-black/40
              cursor-pointer
              transform transition duration-500
              hover:scale-[1.03] hover:shadow-2xl
              border border-transparent hover:border-amber-400
              flex flex-col justify-between
              min-h-[220px]
              animate-fade-in-up
            '
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div>
              <h3 className='font-semibold text-sm text-amber-300 tracking-wide'>{service.s_no}</h3>
              <h2 className='text-2xl font-bold mt-2 text-white'>{service.s_name}</h2>
              <p className='text-sm mt-3 text-gray-200 leading-relaxed'>{service.s_desc}</p>
            </div>

            <div className='flex items-center gap-3 mt-6 text-amber-300 hover:text-white transition-colors font-medium select-none'>
              <p>Read more</p>
              <FaLongArrowAltRight className='text-lg' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
