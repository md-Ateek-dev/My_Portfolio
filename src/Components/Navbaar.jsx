import React, { useState } from 'react'
import logo from '../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Profile from './Profile';
// import About from './About';
// import Services from './Services';
// import Work from './Work';
// import Contact from './Contact';


    
const Navbaar = () => {
  const [menu, setMenu] = useState("Profile");

  return (
    <div id='navbaar' className='flex h-20 items-center justify-between bg-gray-900 text-white'>
      <img src={logo} alt="" className='m-5 h-10 border-2 rounded-2xl'/>
      <ul className='flex items-center list-none gap-18 text-xl text-amber-600 font-semibold'>
        <li className=' hover:text-blue-400'><AnchorLink className='anchor-link' offset={40} href='#profile'><p onClick={ ()=>setMenu("profile")}>Home</p></AnchorLink></li>
        <li className=' hover:text-blue-400'><AnchorLink className='anchor-link' offset={40} href='#about'><p onClick={ ()=> setMenu("about")}>About</p></AnchorLink> </li>
        <li className=' hover:text-blue-400'><AnchorLink className='anchor-link' offset={40} href='#services'><p onClick={()=> setMenu("services")}>Services</p></AnchorLink></li>
        <li className=' hover:text-blue-400'><AnchorLink className='anchor-link' offset={40} href='#work'><p onClick={()=>setMenu("work")}>Porject</p></AnchorLink></li>
        <li className=' hover:text-blue-400'><AnchorLink className='anchor-link' offset={40} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className='p-2 m-5 rounded-3xl cursor-pointer bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 text-white  font-medium transition-all transform-gpu hover:scale-105'><AnchorLink className='anchor-link' offset={40} href='#contact'><p onClick={()=>setMenu("contact")}>
  Connect with Me</p></AnchorLink>
</div>

    </div>
  )
}

export default Navbaar