import React, { useState } from 'react';
import ProfileImage from '../assets/ProfileImage.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import bgimage from '../assets/bg15.jpg'

const Profile = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1mqorA5SnoM5r8-YNmbVB1p7Vba9k2Wpb/view?usp=drivesdk';
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
    style={{ backgroundImage: `url(${bgimage})` }}

      id='profile'
      className=' bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-center gap-6 
        px-4 py-16 sm:py-20 md:py-24 
        bg-gradient-to-r from-purple-500 to-blue-500 
        text-white w-full scroll-mt-20
      '
    >
      {/* Profile Image */}
      <img
        src={ProfileImage}
        alt='Profile'
        className='
          w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 
          rounded-full bg-cover bg-center border-4 border-white 
          shadow-xl mt-8 hover:scale-105 transition-transform
          z-10
        '
      />

      {/* Heading */}
      <h1 className='
        text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
        bg-gradient-to-r from-orange-600 to-green-500 
        bg-clip-text text-transparent select-none
      '>
        I'm Mohd Ateek
      </h1>

      {/* Subheading */}
      <p className='
        text-lg sm:text-xl md:text-2xl font-medium text-center text-white 
        max-w-2xl px-4
      '>
       Hi, I'm Mohd Ateek a passionate MERN stack developer and frontend specialist. I love building user-friendly web applications with modern design and clean code.
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
        {/* Connect Me Button */}
        <AnchorLink offset='60' href='#contact'>
          <div className='
            px-6 py-2 border-2 border-white 
            rounded-full 
            font-medium text-white cursor-pointer shadow-md 
            hover:scale-105 hover:shadow-lg transition-all duration-300
          '>
            Connect Me
          </div>
        </AnchorLink>

        {/* Resume Download Button */}
        <div
          onClick={downloadPDF}
          className='
            px-6 py-2 border-2 border-white
            rounded-full 
            font-medium text-white cursor-pointer shadow-md 
            hover:scale-105 hover:shadow-lg transition-all duration-300
          '
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Profile;
