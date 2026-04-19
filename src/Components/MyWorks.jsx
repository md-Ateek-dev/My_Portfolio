import React, { useState, useEffect, useRef, useContext } from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import { PortfolioContext } from '../PortfolioContext';

const MyWorks = () => {
  const { projects } = useContext(PortfolioContext);

  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);

  const worksToShow = showAll ? projects : projects.slice(0, 3);

  const categories = ['All', ...new Set(projects.map(work => work.category))].filter(Boolean);

  const filteredWorks = filter === 'All'
    ? worksToShow
    : worksToShow.filter(work => work.category === filter);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewProject = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      id='work'
      className='relative bg-black min-h-screen w-full overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center px-6 py-16 gap-16 w-full min-h-screen'>

        {/* Header Section */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            <h1 id='heading' className='text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-6 tracking-tight'>
              My Latest Work
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects, showcasing cutting-edge technologies and creative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50" className={`flex flex-wrap justify-center gap-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${filter === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg'
                : 'bg-gray-900/50 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white backdrop-blur-sm'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50"
          ref={containerRef}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full'
        >
          {filteredWorks.map((work, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card */}
              <div className='relative bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-transparent h-full'>

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={work.w_imag}
                    alt={work.title}
                    className='w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  {/* Image Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100'>
  <div className="absolute bottom-4 left-4 right-4">
    <div className="flex flex-wrap gap-2">
      {work.technologies.slice(0, 3).map((tech, i) => (
        <span
          key={i}
          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white transition-all duration-300 group-hover:bg-blue-500"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>

                  {/* Hover Actions */}
                 <div className="absolute z-10 top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
  
  <button
    onClick={(e) => { e.stopPropagation(); handleViewProject(work.w_imag); }}
    title={work.w_imag ? 'View Image' : 'No image'}
    className={`p-2 backdrop-blur-sm rounded-full text-white transition ${work.w_imag ? 'bg-black/60 hover:bg-black/80 cursor-pointer' : 'bg-red-500 cursor-not-allowed opacity-50'}`}
  >
    <FaEye className="w-4 h-4" />
  </button>

  <button
    onClick={(e) => { e.stopPropagation(); handleViewProject(work.link); }}
    title={work.link ? 'Open project' : 'No link'}
    className={`p-2 backdrop-blur-sm rounded-full text-white transition ${work.link ? 'bg-black/60 hover:bg-black/80 cursor-pointer' : 'bg-gray-500 cursor-not-allowed opacity-50'}`}
  >
    <FaExternalLinkAlt className="w-4 h-4" />
  </button>

</div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className='text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300'>
                      {work.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">
                      {work.year}
                    </span>
                  </div>

                  <p className='text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300'>
                    {work.description}
                  </p>

                  {/* View Project Link */}
                  <button
                    onClick={() => handleViewProject(work.link)}
                    disabled={!work.link}
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 group/btn ${work.link
                        ? 'text-blue-400 hover:text-blue-300 cursor-pointer'
                        : 'text-gray-600 cursor-not-allowed'
                      }`}
                    title={work.link ? 'View live project' : 'No link available'}
                  >
                    <span>View Project</span>
                    <IoIosArrowRoundForward className={`text-lg transform transition-transform duration-300 ${hoveredIndex === index && work.link ? 'translate-x-1' : ''
                      }`} />
                  </button>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        {projects.length > 4 && (
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className='group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-white font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              {/* Button Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                {showAll && <IoIosArrowRoundBack className="text-2xl transition-transform duration-300 group-hover:-translate-x-1" />}
                {showAll ? 'Show Less' : 'Show More'}
                {!showAll && <IoIosArrowRoundForward className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />}
              </span>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MyWorks;