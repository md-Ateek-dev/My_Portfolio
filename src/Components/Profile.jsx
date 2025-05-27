import React, { useState, useEffect } from 'react';


const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1mqorA5SnoM5r8-YNmbVB1p7Vba9k2Wpb/view?usp=drivesdk';
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id="profile"
      className="relative min-h-screen w-full overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 50%),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.03) 25%, rgba(255, 255, 255, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.03) 75%, rgba(255, 255, 255, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(transparent 24%, rgba(255, 255, 255, 0.03) 25%, rgba(255, 255, 255, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.03) 75%, rgba(255, 255, 255, 0.03) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '80px 80px',
        }}
      ></div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full animate-float-delay opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gray-300 rounded-full animate-float-slow opacity-30"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full animate-bounce opacity-50"></div>
        
        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        
        {/* Profile Section */}
        <div 
          className={`
            text-center transform transition-all duration-1200 ease-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}
        >
          {/* Profile Image with Simple Frame */}
          <div className="relative mb-12 group">
            <div className="relative">
              {/* Simple Glow Effect */}
              <div className="absolute -inset-2 bg-white/5 rounded-full blur-lg group-hover:bg-white/10 transition-all duration-500"></div>
              
              {/* Profile Image */}
              <div className="relative">
                <img
                  src="/src/assets/ProfileImage.png"
                  alt="Mohd Ateek"
                  className="
                    w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mt-15
                    rounded-full bg-cover bg-center border-2 border-gray-800
                    transform transition-all duration-300 ease-out
                    group-hover:border-gray-600 group-hover:shadow-xl group-hover:shadow-white/5
                  "
                />
              </div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-3 border-black shadow-lg"></div>
            </div>
          </div>

          {/* Name with Letter Animation */}
          <div className="mb-8">
            
            {/* Heading */}
            
            <h1 id='heading' className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              
             {/* Heading */}

              {Array.from("Mohd Ateek").map((char, index) => (
                <span
                  key={index}
                  className={`
                    inline-block transform transition-all duration-500 ease-out
                    hover:scale-110 hover:-translate-y-2 hover:text-gray-300
                    cursor-default
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  `}
                  style={{ 
                    transitionDelay: `${index * 80}ms`,
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            {/* Animated Underline */}
            <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-slide-right"></div>
            </div>
          </div>

          {/* Role Badge */}
          <div 
            className={`
              inline-flex items-center px-6 py-3 mb-10 bg-gray-900 border border-gray-700 rounded-full
              transform transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              hover:bg-gray-800 hover:border-gray-600 hover:scale-105
              cursor-default
            `}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-medium tracking-wide">MERN Stack Developer</span>
          </div>

          {/* Description */}
          <div 
            className={`
              mb-12 max-w-2xl mx-auto transform transition-all duration-1000 ease-out delay-500
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Passionate about creating{' '}
              <span className="text-white font-medium hover:text-gray-300 transition-colors cursor-default">
                exceptional digital experiences
              </span>{' '}
              through clean code and modern design. Specializing in React, Node.js, and full-stack development.
            </p>
          </div>

          {/* Action Buttons */}
          <div 
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-6
              transform transition-all duration-1000 ease-out delay-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            {/* Primary Button - Connect */}
            <button
              onClick={scrollToContact}
              className="
                group relative px-8 py-4 bg-white text-black font-semibold rounded-full
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl hover:shadow-white/20
                active:scale-95 min-w-[180px]
                overflow-hidden
              "
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let's Connect
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>

            {/* Secondary Button - Resume */}
            <button
              onClick={downloadPDF}
              className="
                group relative px-8 py-4 border border-gray-700 text-white font-semibold rounded-full
                backdrop-blur-sm bg-gray-900/50
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:bg-gray-800 hover:border-gray-600
                active:scale-95 min-w-[180px]
                overflow-hidden
              "
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Resume
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }
      `}
      
      

      
      </style>
    </div>
  );
};

export default Profile;