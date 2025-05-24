import React, { useState } from 'react';
import logo from '../assets/ProfileImage.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Menu, X } from 'lucide-react'; // Optional: You can use any icon set

const Navbaar = () => {
  const [menu, setMenu] = useState("Profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    setIsMobileMenuOpen(false); // Close on link click (for mobile)
  };

  return (
    <div id='navbaar' className='w-full fixed z-50 bg-gray-700 text-white'>
      <div className='flex items-center justify-between px-4 h-20'>
        <img src={logo} alt="logo" className='h-9 w-9 border-2 bg-cover bg-center rounded-2xl' />

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-25 text-lg text-amber-600 font-semibold'>
          <li className='hover:text-blue-400'>
            <AnchorLink offset={40} href='#profile'><p onClick={() => handleMenuClick("profile")}>Home</p></AnchorLink>
          </li>
          <li className='hover:text-blue-400'>
            <AnchorLink offset={40} href='#about'><p onClick={() => handleMenuClick("about")}>About</p></AnchorLink>
          </li>
          <li className='hover:text-blue-400'>
            <AnchorLink offset={40} href='#services'><p onClick={() => handleMenuClick("services")}>Services</p></AnchorLink>
          </li>
          <li className='hover:text-blue-400'>
            <AnchorLink offset={40} href='#work'><p onClick={() => handleMenuClick("work")}>Project</p></AnchorLink>
          </li>
          <li className='hover:text-blue-400'>
            <AnchorLink offset={40} href='#contact'><p onClick={() => handleMenuClick("contact")}>Contact Us</p></AnchorLink>
          </li>
        </ul>

        {/* Connect Button */}
        <div className='hidden md:block p-2 rounded-3xl cursor-pointer bg-gray-500 font-medium transition-all transform-gpu hover:scale-105'>
          <AnchorLink offset={40} href='#contact'>
            <p onClick={() => handleMenuClick("contact")}>Connect with Me</p>
          </AnchorLink>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden cursor-pointer' onClick={handleToggle}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu List */}
      {isMobileMenuOpen && (
        <ul className='md:hidden flex flex-col items-center bg-gray-800 text-lg text-amber-500 font-semibold gap-5 py-4'>
          <li><AnchorLink offset={40} href='#profile'><p onClick={() => handleMenuClick("profile")}>Home</p></AnchorLink></li>
          <li><AnchorLink offset={40} href='#about'><p onClick={() => handleMenuClick("about")}>About</p></AnchorLink></li>
          <li><AnchorLink offset={40} href='#services'><p onClick={() => handleMenuClick("services")}>Services</p></AnchorLink></li>
          <li><AnchorLink offset={40} href='#work'><p onClick={() => handleMenuClick("work")}>Project</p></AnchorLink></li>
          <li><AnchorLink offset={40} href='#contact'><p onClick={() => handleMenuClick("contact")}>Contact</p></AnchorLink></li>
          <li className='p-2 rounded-2xl bg-gradient-to-r from-orange-600 to-green-500 text-white'>
            <AnchorLink offset={40} href='#contact'><p onClick={() => handleMenuClick("contact")}>Connect with Me</p></AnchorLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbaar;
