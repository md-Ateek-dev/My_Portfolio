import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const ModernNavbar = () => {
  const [menu, setMenu] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    setTimeout(() => setIsLoaded(true), 200);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    setIsMobileMenuOpen(false);
  };

  const AnchorLink = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="block">
      {children}
    </a>
  );

  const navItems = [
    { id: 'profile', label: 'Home', href: '#profile' },
    { id: 'aboutus', label: 'AboutUs', href: '#aboutus' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'work', label: 'Projects', href: '#work' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInStagger {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes logoSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
          }
        }
        
        @keyframes borderFlow {
          0% {
            border-image-source: linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7, #6366f1);
            border-image-slice: 1;
          }
          25% {
            border-image-source: linear-gradient(45deg, #8b5cf6, #a855f7, #6366f1, #8b5cf6);
            border-image-slice: 1;
          }
          50% {
            border-image-source: linear-gradient(45deg, #a855f7, #6366f1, #8b5cf6, #a855f7);
            border-image-slice: 1;
          }
          75% {
            border-image-source: linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7, #6366f1);
            border-image-slice: 1;
          }
          100% {
            border-image-source: linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7, #6366f1);
            border-image-slice: 1;
          }
        }
        
        @keyframes morphButton {
          0% {
            border-radius: 50px;
            transform: scale(1);
          }
          50% {
            border-radius: 20px;
            transform: scale(1.05);
          }
          100% {
            border-radius: 50px;
            transform: scale(1);
          }
        }
        
        .navbar-enter {
          animation: slideInDown 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .nav-item-enter {
          animation: fadeInStagger 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
        }
        
        .logo-animation {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .logo-animation:hover {
          animation: logoSpin 0.6s ease-in-out;
        }
        
        .ripple-effect {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.4s, height 0.4s;
        }
        
        .ripple-effect:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .text-glow {
          animation: textGlow 2s ease-in-out infinite;
        }
        
        .border-flow {
          border: 2px solid;
          animation: borderFlow 3s linear infinite;
        }
        
        .morph-button {
          animation: morphButton 4s ease-in-out infinite;
        }
        
        .magnetic-hover {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .magnetic-hover:hover {
          transform: translateY(-8px) scale(1.05);
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .menu-slide-in {
          animation: slideInDown 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>

      <div className={`w-full fixed top-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'glass-effect shadow-2xl' 
          : 'bg-transparent backdrop-blur-sm'
      } ${isLoaded ? 'navbar-enter' : ''}`}>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-ping"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className='flex items-center justify-between px-6 lg:px-8 h-20'>
            
            {/* Modern Logo */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
              
              <div className="relative h-12 w-12 logo-animation group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                <div className="absolute inset-1 bg-black rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg text-glow transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500">A</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-2'>
              {navItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`nav-item-enter magnetic-hover ${isLoaded ? '' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <AnchorLink 
                    href={item.href}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <div className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ripple-effect overflow-hidden ${
                      menu === item.id 
                        ? 'text-white bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                      
                      <span className="relative z-10">{item.label}</span>
                      
                      {menu === item.id && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-70"></div>
                        </div>
                      )}
                    </div>
                  </AnchorLink>
                </div>
              ))}
            </nav>

            {/* Dark Connect Button */}
            <div className={`hidden lg:block nav-item-enter magnetic-hover ${isLoaded ? '' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
                
                <AnchorLink href='#contact'>
                  <div 
                    onClick={() => handleMenuClick("contact")}
                    className='relative px-8 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-full transition-all duration-500 ripple-effect overflow-hidden border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl cursor-pointer'
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <span className="relative z-10 group-hover:text-gray-100 transition-colors duration-300">Connect with Me</span>
                  </div>
                </AnchorLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden relative'>
              <button
                onClick={handleToggle}
                className='p-3 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 border border-white/10 hover:border-white/20'
              >
                <div className="relative">
                  {isMobileMenuOpen ? 
                    <X size={24} className="text-white transition-all duration-300" /> : 
                    <Menu size={24} className="text-white transition-all duration-300" />
                  }
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className='glass-effect mx-4 mb-4 rounded-2xl shadow-2xl menu-slide-in'>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-2xl"></div>
              
              <nav className='flex flex-col p-6 space-y-4 relative z-10'>
                {navItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="transform transition-all duration-500 magnetic-hover"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-30px)'
                    }}
                  >
                    <AnchorLink 
                      href={item.href}
                      onClick={() => handleMenuClick(item.id)}
                    >
                      <div className={`relative p-4 rounded-xl text-center transition-all duration-500 ripple-effect overflow-hidden ${
                        menu === item.id 
                          ? 'text-white bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                        
                        <span className="relative z-10 font-medium">{item.label}</span>
                      </div>
                    </AnchorLink>
                  </div>
                ))}
                
                {/* Mobile Dark Connect Button */}
                <div 
                  className="pt-2 transform transition-all duration-700 magnetic-hover"
                  style={{ 
                    animationDelay: '500ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-30px)'
                  }}
                >
                  <AnchorLink href='#contact'>
                    <div 
                      onClick={() => handleMenuClick("contact")}
                      className='relative p-4 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-xl text-center transition-all duration-500 ripple-effect overflow-hidden border border-gray-700 shadow-lg'
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                      
                      <span className="relative z-10">Connect with Me</span>
                    </div>
                  </AnchorLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;