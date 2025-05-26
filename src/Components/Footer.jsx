import React from 'react';
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';
import bgimage from '../assets/bg15.jpg';

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white px-4 py-12">
      {/* Subtle Animated Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(120deg, rgba(0,0,0,0.97) 90%, rgba(255,255,255,0.03) 100%), url(${bgimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.6)',
        }}
      />
      <div className="relative z-10">
        <motion.hr
          className="mb-8 border-gray-800 opacity-70"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Main Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left max-w-2xl bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl px-2 font-light leading-relaxed text-gray-200">
              I am <strong className="font-semibold text-white">Mohd Ateek</strong>, Full Stack Developer and MERN Stack Expert with strong command over MongoDB, Express.js, React.js, and Node.js, both frontend and backend. Skilled in modern UI frameworks like Material UI.
            </p>
          </motion.div>

          {/* Subscribe Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 rounded-2xl p-6 shadow-md border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full sm:w-auto">
              <FaUser className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-300 text-lg" />
              <input
                className="pl-10 pr-4 h-11 w-full sm:w-64 rounded-2xl border border-gray-700 bg-black/70 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white outline-none transition-all"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.08, backgroundColor: '#fff', color: '#111' }}
              whileTap={{ scale: 0.96 }}
              className="text-lg px-6 py-2 border-2 border-white rounded-2xl cursor-pointer transition-all bg-black/80 text-white font-semibold shadow hover:shadow-white/10"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>

        <motion.hr
          className="my-8 border-gray-800 opacity-70"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ transformOrigin: 'right' }}
        />

        {/* Bottom Footer Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <p className="text-center opacity-70">© 2025 Web Developer. All rights reserved.</p>
          <p className="text-center">Developed by <strong className="text-white">Mohd Ateek</strong></p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-center">
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Connect with me</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
