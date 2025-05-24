import React from 'react';
import { FaUser } from "react-icons/fa";
import bgimage from '../assets/bg15.jpg';


const Footer = () => {
  return (
    <div
    style={{ backgroundImage: `url(${bgimage})` }}
    
     className='bg-cover bg-center bg-no-repeat flex flex-col bg-black text-white px-4 py-8'>
      <hr className='mb-6 border-gray-600' />

      {/* Main Footer Section */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
        
        {/* Left Content */}
        <div className='text-center lg:text-left max-w-2xl'>
          <p className='text-lg sm:text-xl px-4'>
            I am <strong>Mohd Ateek</strong>, Full Stack Developer and MERN Stack Expert with strong command over MongoDB, Express.js, React.js, and Node.js, both frontend and backend. Skilled in modern UI frameworks like Material UI.
          </p>
        </div>

        {/* Subscribe Section */}
        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <div className='relative w-full sm:w-auto'>
            <FaUser className='absolute top-1/2 -translate-y-1/2 left-3 text-white text-lg' />
            <input
              className='pl-10 pr-4 h-11 w-full sm:w-64 rounded-2xl border-2 border-white text-white focus:outline-none'
              type='email'
              placeholder='Enter your Email'
            />
          </div>
          <div className=' text-lg px-5 py-2 border-2 border-white rounded-2xl cursor-pointer transition-transform hover:scale-105 hover:border-white shadow-sm shadow-amber-50'>
            Subscribe
          </div>
        </div>
      </div>

      <hr className='my-6 border-gray-600' />

      {/* Bottom Footer Section */}
      <div className='flex flex-col md:flex-row justify-between items-center text-sm gap-4 px-2'>
        <p className='text-center'>© 2025 Web Developer. All rights reserved.</p>
        <p className='text-center'>Developed by <strong>Mohd Ateek</strong></p>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 text-center'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
