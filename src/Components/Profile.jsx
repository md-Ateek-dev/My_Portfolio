import React, { useState } from 'react';
import ProfileImage from '../assets/ProfileImage.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ContactUs from './ContactUs';
const Profile = () => {
  const [contact, setContact] = useState(false);

  // ✅ Function ko JSX ke return ke bahar rakho
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1mqorA5SnoM5r8-YNmbVB1p7Vba9k2Wpb';
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id='profile'
      className='flex items-center flex-col gap-5 bg-gradient-to-r from-purple-500 to-blue-500'
    >
      <img
        src={ProfileImage}
        alt='ProfileImage'
        className='border-2 rounded-full h-50 w-50 mt-5 transition-all transform-stroke hover:scale-105'
      />
      <h1 className='text-3xl font-bold text-center w-70 bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent'>
        I'm Mohd Ateek
      </h1>
      <p className='text-2xl font-semibold'>I am Full Stack Developer</p>

      <div className='flex items-center gap-5 text-xl font-sans mb-5'>
        {/* Connect Me Button */}
        <div
          className='p-2 m-3 border-2 border-orange-500 rounded-full bg-gradient-to-r from-orange-600 to-green-500 font-medium text-white cursor-pointer shadow-xl shadow-orange-500/50 hover:border-green-600 transition-all transform-gpu hover:scale-105'
        >
          <AnchorLink
            className='anchor-link'
            offset={40}
            href='#contact'
          >
            <p onClick={() => setIsModalOpen(true)}>Connect Me</p>
          </AnchorLink>
        </div>

        {/* Resume Download Button */}
        <div
          onClick={downloadPDF}
          className='p-2 m-3 border-2 border-orange-500 rounded-full bg-gradient-to-r from-orange-600 to-green-500 font-medium text-white cursor-pointer shadow-xl shadow-orange-500/50 hover:border-green-600 transition-all transform-gpu hover:scale-105'
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Profile;
