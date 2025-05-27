import React, { useState, useEffect } from 'react';
import { FaLongArrowAltRight, FaCode, FaMobile, FaPalette, FaRocket, FaChartLine, FaCog } from 'react-icons/fa';

// Mock Services Data
const Services_data = [
  {
    s_no: "01",
    s_name: "Web Development",
    s_desc: "Creating responsive and modern web applications using cutting-edge technologies and best practices.",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500"
  },
  {
    s_no: "02", 
    s_name: "Mobile Development",
    s_desc: "Building cross-platform mobile applications that provide seamless user experiences.",
    icon: FaMobile,
    color: "from-purple-500 to-pink-500"
  },
  {
    s_no: "03",
    s_name: "UI/UX Design",
    s_desc: "Crafting intuitive and visually appealing user interfaces that enhance user engagement.",
    icon: FaPalette,
    color: "from-orange-500 to-red-500"
  },
  {
    s_no: "04",
    s_name: "Performance Optimization",
    s_desc: "Optimizing applications for maximum speed, efficiency, and user satisfaction.",
    icon: FaRocket,
    color: "from-green-500 to-emerald-500"
  },
  {
    s_no: "05",
    s_name: "Analytics & SEO",
    s_desc: "Implementing data-driven solutions and search engine optimization strategies.",
    icon: FaChartLine,
    color: "from-yellow-500 to-orange-500"
  },
  {
    s_no: "06",
    s_name: "System Integration",
    s_desc: "Seamlessly connecting different systems and platforms for optimal workflow.",
    icon: FaCog,
    color: "from-indigo-500 to-purple-500"
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const servicesToShow = showAll ? Services_data : Services_data.slice(0, 3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      id='services'
      className='relative bg-black min-h-screen w-full overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center px-6 py-16 gap-16 w-full min-h-screen'>
        {/* Heading Section */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            <h1 id='heading' className='text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-4 tracking-tight'>
              My Services
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital excellence with cutting-edge solutions and innovative approaches
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'>
          {servicesToShow.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glowing Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
                
                {/* Main Card */}
                <div className='relative bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full cursor-pointer transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-transparent overflow-hidden'>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-white to-transparent transform rotate-12 rounded-lg"></div>
                  </div>

                  {/* Service Number */}
                  <div className="absolute top-4 right-6">
                    <span className="text-6xl font-black text-gray-800 group-hover:text-gray-700 transition-colors duration-300">
                      {service.s_no}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h2 className='text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300'>
                      {service.s_name}
                    </h2>
                    <p className='text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300'>
                      {service.s_desc}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className='flex items-center gap-3 text-gray-400 group-hover:text-white transition-all duration-300 mt-auto'>
                    <span className="font-medium">Explore more</span>
                    <FaLongArrowAltRight className={`text-lg transform transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-x-2' : ''
                    }`} />
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Less Button */}
        {Services_data.length > 3 && (
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className='group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-white font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
            >
              {/* Button Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-3">
                {showAll ? 'Show Less' : 'Show More'}
                <FaLongArrowAltRight className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
              </span>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Services;