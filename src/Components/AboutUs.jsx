import React, { useState, useEffect } from 'react';
import { FaHtml5, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setSkillsAnimated(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { icon: <FaHtml5 className='text-orange-500' />, name: 'HTML5', percent: 100, color: 'from-orange-500 to-red-500' },
    { icon: <FaCss3Alt className='text-blue-500' />, name: 'CSS3', percent: 100, color: 'from-blue-500 to-cyan-500' },
    { icon: <FaJsSquare className='text-yellow-400' />, name: 'JavaScript', percent: 80, color: 'from-yellow-400 to-orange-400' },
    { icon: <FaBootstrap className='text-purple-600' />, name: 'Bootstrap', percent: 100, color: 'from-purple-600 to-indigo-600' },
    { icon: <FaReact className='text-cyan-400' />, name: 'React', percent: 70, color: 'from-cyan-400 to-blue-400' },
    { icon: <FaNodeJs className='text-green-500' />, name: 'Node.js', percent: 80, color: 'from-green-500 to-emerald-500' },
    { icon: <SiExpress className='text-gray-300' />, name: 'Express', percent: 80, color: 'from-gray-300 to-gray-500' },
    { icon: <SiMongodb className='text-green-600' />, name: 'MongoDB', percent: 90, color: 'from-green-600 to-green-400' }
  ];

  const stats = [
    { number: '1+', label: 'YEAR OF EXPERIENCE', delay: '0ms' },
    { number: '5+', label: 'PROJECTS COMPLETED', delay: '200ms' },
    { number: 'Pending..', label: 'HAPPY CLIENTS', delay: '400ms' }
  ];

  return (
    <div id='aboutus' className='relative min-h-screen bg-black'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className='absolute w-1 h-1 bg-white/20 rounded-full animate-pulse'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}

      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16'>
        {/* Main Heading */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 id='heading' className='text-5xl md:text-7xl font-bold text-center mb-4 text-white animate-pulse'>
            About Me
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full'></div>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-16 w-full max-w-7xl mt-16'>
          
          {/* Profile Section */}
          <div className={`w-full lg:w-1/3 flex flex-col items-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className='relative group'>
              {/* Glowing Border Effect */}
              <div className='absolute rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse'></div>
              
              {/* Profile Image Placeholder */}
              <div className='relative w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center border border-slate-600 group-hover:scale-105 transition-transform duration-500'>
                <div className='text-slate-400 text-6xl'> <img className='bg-cover bg-center h-80 w-80 rounded-2xl' src="/src/assets/ProfileImage.png" alt="ateek" /></div>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 rounded-2xl'></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`w-full lg:w-2/3 space-y-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Introduction */}
            <div className='backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500'>
              <p className='text-xl md:text-2xl leading-relaxed text-gray-200'>
                <span className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                  "I'm Mohd Ateek"
                </span>
                <br />
                <span className='text-purple-300 font-semibold'>Full Stack Developer</span> who loves building clean, responsive websites and solving real-world problems with impactful code.
                <br />
                <span className='italic text-cyan-300'>"Clean Code, Deep Impact."</span>
              </p>
            </div>

            {/* Skills Section */}
            <div className='backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl'>
              <h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
                <span className='w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full'></span>
                Technical Skills
              </h3>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {skills.map((skill, index) => (
                  <div key={index} className='group hover:scale-105 transition-transform duration-300'>
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-3 text-white'>
                        <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                          {skill.icon}
                        </span>
                        <span className='font-medium'>{skill.name}</span>
                      </div>
                      <span className='text-cyan-300 font-bold'>{skill.percent}%</span>
                    </div>
                    
                    <div className='w-full bg-slate-700 rounded-full h-3 overflow-hidden'>
                      <div className='h-full bg-slate-600 rounded-full relative overflow-hidden'>
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: skillsAnimated ? `${skill.percent}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <div className='absolute inset-0 bg-white/20 animate-pulse'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-12 mt-20 w-full max-w-5xl'>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group cursor-pointer transform transition-all duration-700 hover:scale-110 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: stat.delay }}
            >
              <div className='backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500'>
                <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300'>
                  {stat.number}
                </h2>
                <p className='text-gray-300 text-sm md:text-base font-medium tracking-wider'>
                  {stat.label}
                </p>
                <div className='w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;