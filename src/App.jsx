import React from 'react'
// import Navbaar from './Components/Navbaar'
import Profile from './Components/Profile'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import MyWorks from './Components/MyWorks'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import ContactUs from './Components/ContactUs'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbaar from './suhel/Header'
// ..
AOS.init();
const App = () => {
  return (
    <div>
      {/* <Navbaar/> */}
      <Navbaar/>
      <Profile/>
      {/* <ContactUs/> */}
      <AboutUs/>
      <Services/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App 