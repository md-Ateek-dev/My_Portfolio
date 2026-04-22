import React, { useState, useContext } from 'react';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { PortfolioContext } from '../PortfolioContext';
import { useReveal, useRevealChildren } from '../hooks/useReveal';

const ProjectCard = ({ work, idx }) => {
  const ref = useReveal({ threshold: 0.12 });

  const open = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={ref}
      className="reveal card-glow"
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div className="group relative glass glass-hover rounded-2xl overflow-hidden border border-white/[0.07] h-full flex flex-col">

        {/* ── Image ─────────────────────────────── */}
        <div className="relative overflow-hidden aspect-video flex-shrink-0">
          <img
            src={work.w_imag}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Tech chips */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {(work.technologies ?? []).slice(0, 3).map((t, i) => (
              <span key={i} className="px-2 py-0.5 text-[10px] font-medium text-white rounded-full
                bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-indigo-500/50 transition-colors duration-300">
                {t}
              </span>
            ))}
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold text-white rounded-full
              bg-gradient-to-r from-indigo-600/80 to-purple-600/80 backdrop-blur-sm">
              {work.category}
            </span>
          </div>

          {/* Action icons (top-right) */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100
            translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            <button
              onClick={() => open(work.w_imag)}
              title="Preview image"
              className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition"
            >
              <FaEye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => open(work.link)}
              title={work.link ? 'Open project' : 'No link'}
              className={`p-2 rounded-full backdrop-blur-sm text-white transition ${work.link ? 'bg-black/60 hover:bg-indigo-600' : 'bg-gray-700 opacity-40 cursor-not-allowed'}`}
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ── Content ───────────────────────────── */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-white text-base leading-snug group-hover:gradient-text transition-all duration-300 flex-1 pr-2">
              {work.title}
            </h3>
            {work.year && (
              <span className="text-xs text-gray-600 font-medium flex-shrink-0">{work.year}</span>
            )}
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
            {work.description}
          </p>

          <button
            onClick={() => open(work.link)}
            disabled={!work.link}
            className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300
              ${work.link ? 'text-indigo-400 hover:text-indigo-300' : 'text-gray-700 cursor-not-allowed'}`}
          >
            View Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const MyWorks = () => {
  const { projects } = useContext(PortfolioContext);
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const titleRef = useReveal({ threshold: 0.3 });
  const tabsRef = useReveal({ threshold: 0.2 });

  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="work" className="relative min-h-screen bg-transparent overflow-hidden py-24 px-6">

      {/* ── Background ──────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ──────────────────────────── */}
        <div ref={titleRef} className="reveal text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-5">
            Portfolio
          </span>
          <h2 id="heading" className="text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            My Latest <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects showcasing cutting-edge technologies and creative solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-6" />
        </div>

        {/* ── Filter tabs ──────────────────────── */}
        <div ref={tabsRef} className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300
                ${filter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/25'
                  : 'glass text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visible.map((work, i) => (
            <ProjectCard key={work._id ?? i} work={work} idx={i} />
          ))}
        </div>

        {/* ── Show more/less ───────────────────── */}
        {filtered.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="btn-secondary inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold"
            >
              {showAll ? 'Show Less' : `Show More (${filtered.length - 6} more)`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWorks;