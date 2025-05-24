import React from 'react';
import ProfileImage from '../assets/ProfileImage.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import bgimage from '../assets/bg15.jpg';

const Profile = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1mqorA5SnoM5r8-YNmbVB1p7Vba9k2Wpb/view?usp=drivesdk';
    link.download = 'MyResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgimage})` }}
      id="profile"
      className="
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-center gap-6 
        px-6 py-12 sm:py-16 md:py-20 
        bg-gradient-to-r from-purple-600 to-blue-700 
        text-white w-full scroll-mt-20
        min-h-screen
      "
    >
      {/* Profile Image */}
      <img
        src={ProfileImage}
        alt="Profile"
        className="
          w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52
          rounded-full border-4 border-white 
          shadow-xl mt-6 sm:mt-8 md:mt-10
          hover:scale-105 transition-transform duration-300 ease-in-out
          z-10
        "
      />

      {/* Heading */}
      <h1
        className="
          text-xl sm:text-2xl md:text-3xl lg:text-5xl 
          font-extrabold text-center 
          bg-gradient-to-r from-orange-500 to-green-400
          bg-clip-text text-transparent select-none
          px-4
        "
      >
        I'm Mohd Ateek
      </h1>

      {/* Subheading */}
      <p
        className="
          text-sm sm:text-base md:text-lg lg:text-xl
          font-medium text-center max-w-xl sm:max-w-2xl px-6
          leading-relaxed
        "
      >
        Hi, I'm Mohd Ateek, a passionate MERN stack developer and frontend specialist. I love building user-friendly web applications with modern design and clean code.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-md px-4">
        {/* Connect Me Button */}
        <AnchorLink offset="60" href="#contact" className="w-full sm:w-auto">
          <button
            className="
              w-full sm:w-auto
              px-6 py-3
              border-2 border-white
              rounded-full
              font-medium text-white
              hover:bg-white hover:text-blue-600
              shadow-md
              hover:scale-105 hover:shadow-lg
              transition-transform duration-300 ease-in-out
            "
          >
            Connect Me
          </button>
        </AnchorLink>

        {/* Resume Download Button */}
        <button
          onClick={downloadPDF}
          className="
            w-full sm:w-auto
            px-6 py-3
            border-2 border-white
            rounded-full
            font-medium text-white
            hover:bg-white hover:text-blue-600
            shadow-md
            hover:scale-105 hover:shadow-lg
            transition-transform duration-300 ease-in-out
          "
        >
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Profile;
