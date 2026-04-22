import React, { useState } from 'react';
import { FaCode, FaMobile, FaPalette, FaRocket, FaChartLine, FaCog } from 'react-icons/fa';
import { useReveal, useRevealChildren } from '../hooks/useReveal';

const SERVICES = [
  { no: '01', name: 'Web Development',         desc: 'Creating responsive, blazing-fast web apps with modern frameworks and industry best practices.',                        icon: FaCode,       color: 'from-indigo-500 to-blue-500'    },
  { no: '02', name: 'UI / UX Design',           desc: 'Crafting intuitive, visually stunning interfaces that enhance engagement and delight users.',                           icon: FaPalette,    color: 'from-pink-500 to-rose-500'      },
  { no: '03', name: 'Performance Optimization', desc: 'Diagnosing bottlenecks and tuning apps for maximum speed, efficiency, and Core Web Vitals score.',                    icon: FaRocket,     color: 'from-emerald-500 to-cyan-500'   },
  { no: '04', name: 'Analytics & SEO',          desc: 'Data-driven strategies and search-engine optimization to increase visibility and organic traffic.',                    icon: FaChartLine,  color: 'from-amber-500 to-orange-500'   },
  { no: '05', name: 'Mobile-First Design',      desc: 'Pixel-perfect, responsive layouts that look great on every device from watch to widescreen.',                         icon: FaMobile,     color: 'from-violet-500 to-purple-600'  },
  { no: '06', name: 'System Integration',        desc: 'Seamlessly connecting REST APIs, third-party services, and microservices for optimal workflow and reliability.',       icon: FaCog,        color: 'from-teal-500 to-sky-500'       },
];

const ServiceCard = ({ service, idx }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal({ threshold: 0.15 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="reveal card-glow"
      style={{ transitionDelay: `${idx * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer glow border */}
      <div className="relative group h-full">
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 blur transition-all duration-500`} />

        <div className="relative glass glass-hover h-full rounded-2xl p-7 border border-white/[0.07] overflow-hidden flex flex-col">

          {/* Subtle bg number */}
          <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.04] select-none pointer-events-none">
            {service.no}
          </span>

          {/* Icon box */}
          <div className={`icon-box w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}>
            <Icon className="text-2xl text-white" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
            {service.name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            {service.desc}
          </p>

          {/* Arrow link */}
          <div className="mt-6 flex items-center gap-2 text-gray-600 group-hover:text-indigo-400 transition-colors duration-300">
            <span className="text-sm font-medium">Explore more</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-1.5' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Bottom shimmer line */}
          <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${service.color} transition-all duration-500 ${hovered ? 'w-full' : 'w-0'}`} />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const titleRef   = useReveal({ threshold: 0.3 });
  const gridRef    = useRevealChildren({ stagger: 80, threshold: 0.1 });

  const visible = showAll ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section id="services" className="relative min-h-screen bg-transparent overflow-hidden py-24 px-6">
      {/* ── Background ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ──────────────────────────────── */}
        <div ref={titleRef} className="reveal text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-5">
            What I Do
          </span>
          <h2 id="heading" className="text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital excellence with cutting-edge solutions and innovative approaches.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mt-6" />
        </div>

        {/* ── Cards grid ───────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {visible.map((s, i) => (
            <ServiceCard key={s.no} service={s} idx={i} />
          ))}
        </div>

        {/* ── Show more / less ─────────────────────── */}
        {SERVICES.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="btn-secondary inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold"
            >
              {showAll ? 'Show Less' : 'Show More'}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;