import React from 'react';
import ProfileImage from '../assets/ProfileImage.png';
import bgimage from '../assets/bg1.avif';

const AboutUs = () => {
  return (
    <div
        style={{ backgroundImage: `url(${bgimage})` }}
    
      id='about'
      className='bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 px-4 py-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full'
    >
      {/* Heading */}
      <h1 className='text-3xl sm:text-4xl font-bold  text-center hover:scale-105 transition-transform'>
        About Me
      </h1>

      {/* Image & Text Section */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl'>
        {/* Profile Image */}
        <div className='w-full md:w-1/3 flex justify-center'>
          <img
            src={ProfileImage}
            alt='ProfileImage'
            className='rounded-xl w-48 sm:w-56 md:w-64 lg:w-72 object-cover shadow-lg hover:scale-105 transition-transform'
          />
        </div>

        {/* Text & Skills */}
        <div className='flex flex-col gap-6 w-full md:w-2/3'>
          <div className='text-lg sm:text-xl font-light text-center md:text-left'>
            <p>
              <span className='font-semibold bg-gradient-to-r from-orange-600 to-green-500 bg-clip-text text-transparent'>
                "I'm Mohd Ateek
              </span>{' '}
              I'm a Full Stack Developer"
            </p>
            <p>
              who loves building clean, responsive websites and solving real-world problems
              with impactful code. "Clean Code, Real Impact."
            </p>
          </div>

          {/* Skills Progress */}
          <div className='flex flex-col gap-4'>
            {[
              ['HTML & CSS', 100],
              ['JavaScript', 80],
              ['Bootstrap', 100],
              ['React.js', 70],
              ['Node.js', 80],
              ['Express.js', 80],
              ['MongoDB', 90],
            ].map(([skill, percent], index) => (
              <div
                key={index}
                className='flex flex-col sm:flex-row sm:items-center gap-2 font-medium hover:scale-[1.02] transition-transform'
              >
                <p className='w-full sm:w-40'>{skill} {percent}%</p>
                <hr
                  className='w-full h-2 rounded-full border-0 outline-none bg-white'
                  style={{ width: `${percent}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience / Projects / Clients */}
      <div className='flex flex-col sm:flex-row items-center justify-around w-full max-w-5xl gap-6 mt-10 text-center'>
        <div className='hover:scale-105 transition-transform'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-500 bg-clip-text text-transparent'>
            1+
          </h1>
          <p className='text-xl'>YEAR OF EXPERIENCE</p>
        </div>

        <div className='hover:scale-105 transition-transform'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-500 bg-clip-text text-transparent'>
            5+
          </h1>
          <p className='text-xl'>PROJECTS COMPLETED</p>
        </div>

        <div className='hover:scale-105 transition-transform'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600 to-green-500 bg-clip-text text-transparent'>
            Pending..
          </h1>
          <p className='text-xl'>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
