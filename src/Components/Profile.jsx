import React, { useState, useEffect, useRef, useCallback } from 'react';
import profile from '../assets/ProfileImage.png';

const ROLES = ['MERN Stack Developer', 'Full Stack Engineer', 'UI/UX Enthusiast', 'Problem Solver'];

// ── Typewriter hook ─────────────────────────────────────────────
function useTypewriter(words, { typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

// ── Particle background ─────────────────────────────────────────
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  opacity: 0.15 + Math.random() * 0.35,
}));

const Profile = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef(null);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const onMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1D7cdUZ4RM7Z_UpcM-pkje04VcmPHQgP7/view?usp=drivesdk', '_blank');
  };

  return (
    <section
      id="profile"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center"
    >
      {/* ── Aurora blobs ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #b687f9ff 0%, transparent 70%)',
            top: '0%', left: '0%',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.05] blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #2ff9afff 0%, transparent 70%)',
            bottom: '0%', right: '0%',
            animationDelay: '4s',
          }}
        />
        {/* Mouse-reactive radial */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(99,102,241,0.08) 0%, transparent 60%)`,
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      {/* ── Floating particles ───────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white animate-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-5xl mx-auto w-full">

        {/* Profile image */}
        <div
          className={`relative mb-10 transition-all duration-1000 ease-out
            ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full animate-pulse-ring bg-indigo-500/20" style={{ animationDelay: '0s' }} />
          <span className="absolute inset-0 rounded-full animate-pulse-ring bg-purple-500/15" style={{ animationDelay: '1s' }} />

          {/* Rotating gradient ring */}
          <div className="absolute -inset-0.5 rounded-full animate-spin-slow"
            style={{ background: 'white' }}
          />
          <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#050505] p-1">
            <img
              src={profile}
              alt="Mohd Ateek"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>

          {/* Status dot */}
          <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-400 border-4 border-[#050505] shadow-lg shadow-emerald-500/40" />
        </div>

        {/* Available badge */}
        <div
          className={`mb-6 transition-all duration-700 delay-200
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/20 text-sm text-emerald-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          id="heading"
          className={`font-bold tracking-tight text-white mb-4
            text-5xl md:text-7xl lg:text-8xl
            transition-all duration-1000 delay-300
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {Array.from('Mohd Ateek').map((char, i) => (
            <span
              key={i}
              className="inline-block hover:-translate-y-2 hover:text-indigo-300 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Typewriter role */}
        <div
          className={`h-10 mb-6 flex items-center justify-center
            transition-all duration-700 delay-500
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-xl md:text-2xl font-semibold text-white">
            {role}
          </span>
          <span className="ml-1 w-[2px] h-7 bg-white animate-pulse inline-block" />
        </div>

        {/* Thin gradient underline */}
        <div className={`w-24 h-px mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
          transition-all duration-700 delay-600
          ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
        />

        {/* Description */}
        <p
          className={`text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12
            transition-all duration-700 delay-700
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Passionate about crafting{' '}
          <span className="text-white font-medium">exceptional digital experiences</span>
          {' '}through clean code and modern design. Specializing in React, Node.js & full-stack development.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4
            transition-all duration-700 delay-[800ms]
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary px-8 py-4 rounded-full font-semibold text-white min-w-[180px] flex items-center justify-center gap-2 group"
          >
            Let's Connect
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button
            onClick={downloadResume}
            className="btn-secondary px-8 py-4 rounded-full font-semibold text-white min-w-[180px] flex items-center justify-center gap-2 group"
          >
            View Resume
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('aboutus')}
          className={`mt-16 flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors duration-300
            transition-opacity duration-1000 delay-[1200ms]
            ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default Profile;