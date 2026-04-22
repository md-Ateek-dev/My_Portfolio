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
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* ── Global Grid Background ───────────────────────────── */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />
      
      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="relative z-10">
        <Navbaar />
        <Profile />
        <AboutUs />
        <Services />
        <MyWorks />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App 