import React, { useContext } from 'react'
import Profile from './Components/Profile'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import MyWorks from './Components/MyWorks'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AdminPanel from './Components/AdminPanel'
import { PortfolioContext } from './PortfolioContext'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbaar from './suhel/Header'

AOS.init();
const App = () => {
  const { isAdminOpen } = useContext(PortfolioContext);

  if (isAdminOpen) {
    return <AdminPanel />;
  }

  return (
    <div>
      <Navbaar />
      <Profile />
      <AboutUs />
      <Services />
      <MyWorks />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 