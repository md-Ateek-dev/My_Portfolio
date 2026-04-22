import React, { useContext } from 'react';
import { PortfolioContext } from '../PortfolioContext';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import profile from '../assets/ProfileImage.png';
import { motion } from 'framer-motion';

const renderIcon = (iconName) => {
  if (iconName?.startsWith('Fa') && FaIcons[iconName]) { const I = FaIcons[iconName]; return <I />; }
  if (iconName?.startsWith('Si') && SiIcons[iconName]) { const I = SiIcons[iconName]; return <I />; }
  return <FaIcons.FaCode />;
};

const StatCard = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors rounded-2xl p-8 text-center flex-1 min-w-[160px] shadow-lg"
    >
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">{number}</p>
      <p className="text-gray-500 text-xs tracking-widest uppercase font-medium">{label}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  const { skills, stats } = useContext(PortfolioContext);

  const statsArray = [
    { number: stats?.experience || '1+', label: 'Years Experience', delay: 0 },
    { number: stats?.projects || '5+', label: 'Projects Done', delay: 0.15 },
    { number: stats?.clients || '0', label: 'Happy Clients', delay: 0.3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="aboutus" className="relative min-h-screen bg-transparent overflow-hidden py-24 px-6">
      {/* ── Background glows ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }} />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section heading ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-5">
            About Me
          </span>
          <h2 id="heading" className="text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Who I <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Am</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* ── Two-column layout ────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20">
          {/* Left – profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[38%] flex-shrink-0"
          >
            <div className="relative group mx-auto max-w-[340px]">
              {/* Glowing border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white via-purple-200 to-cyan-500 opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
              <div className="relative overflow-hidden border-2 border-white rounded-3xl">
                <img
                  src={profile}
                  alt="Mohd Ateek"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10" />
              </div>

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-gray-900/80 backdrop-blur-md border border-indigo-500/20 rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="text-white font-semibold text-sm">MERN Stack</p>
                <p className="text-gray-400 text-xs">Full Stack Dev</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – bio + skills */}
          <div className="w-full lg:flex-1 space-y-8">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors rounded-2xl p-8 border border-white/10"
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">"I'm Mohd Ateek"</span>
              </p>
              <p className="text-purple-300 font-medium mb-4">Full Stack Developer</p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I love building clean, responsive web applications and solving real-world problems
                with impactful code. My motto:{' '}
                <span className="italic text-cyan-300 font-medium">"Clean Code, Deep Impact."</span>
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full" />
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills && skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-300 rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-2xl text-indigo-400 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300 shadow-inner">
                          {renderIcon(skill.iconName)}
                        </div>
                        <span className="font-semibold tracking-wide">{skill.name}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold text-lg">
                          {skill.percent}%
                        </span>
                      </div>
                    </div>
                    {/* Progress bar track */}
                    <div className="h-2.5 bg-black/40 rounded-full overflow-hidden relative shadow-inner">
                      {/* Animated Progress */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                        className={`h-full rounded-full relative bg-gradient-to-r ${skill.color ?? 'from-indigo-500 via-purple-500 to-cyan-500'}`}
                      >
                        {/* Shimmer effect inside the bar using framer-motion */}
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Stats row ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-5">
          {statsArray.map((s, i) => (
            <StatCard key={i} number={s.number} label={s.label} delay={s.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;