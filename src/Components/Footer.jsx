import React, { useState, useContext, useEffect } from 'react';
import { Mail, User, ArrowRight, Github, Linkedin, Twitter, Instagram, Code, Heart, ChevronUp } from 'lucide-react';
import { PortfolioContext } from '../PortfolioContext';
import { useReveal } from '../hooks/useReveal';

const Footer = () => {
  const { setIsAdminOpen } = useContext(PortfolioContext);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subResult, setSubResult] = useState('');
  const [showTop, setShowTop] = useState(false);

  const aboutRef = useReveal({ threshold: 0.15 });
  const linksRef = useReveal({ threshold: 0.15 });
  const newsRef = useReveal({ threshold: 0.15 });

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    if (!email) { setSubResult('Please enter a valid email.'); return; }
    setIsSubscribing(true); setSubResult('Subscribing...');
    setTimeout(() => {
      setSubResult('Thank you for subscribing! 🎉');
      setEmail(''); setIsSubscribing(false);
      setTimeout(() => setSubResult(''), 3000);
    }, 1500);
  };

  const socials = [
    { icon: Github, href: 'https://github.com/md-Ateek-dev/My_Portfolio', label: 'GitHub', hoverCls: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohd-ateek-80a949256', label: 'LinkedIn', hoverCls: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/md_Ateek09', label: 'Twitter', hoverCls: 'hover:text-sky-400' },
    { icon: Instagram, href: 'https://www.instagram.com/md_ateek09', label: 'Instagram', hoverCls: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { label: 'About', href: '#aboutus' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* Divider */}
      <div className="section-divider" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/[0.04] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* About */}
          <div ref={aboutRef} className="reveal lg:col-span-2 space-y-8">
            <div className="glass glass-hover rounded-2xl p-8 border border-white/[0.06]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-xl"><Code className="w-7 h-7 text-indigo-400" /></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Mohd Ateek</h3>
                  <p className="text-indigo-400 text-sm font-medium">Full Stack Developer & MERN Expert</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Passionate Full Stack Developer specializing in MERN stack. I build modern, scalable web apps with MongoDB, Express.js, React.js, and Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript'].map(s => (
                  <span key={s} className="px-3 py-1 text-xs text-gray-400 rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-colors">{s}</span>
                ))}
              </div>
            </div>

            <div ref={linksRef} className="reveal grid sm:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 border border-white/[0.06]">
                <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2.5">
                  {quickLinks.map(l => (
                    <button key={l.label} onClick={() => scrollTo(l.href)} className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 group w-full text-left text-sm">
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />{l.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="glass rounded-xl p-6 border border-white/[0.06]">
                <h4 className="text-base font-semibold text-white mb-4">Legal</h4>
                <div className="space-y-2.5">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                    <a key={l} href="#" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 group text-sm">
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />{l}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter + Socials */}
          <div ref={newsRef} className="reveal space-y-8">
            <div className="glass glass-hover rounded-2xl p-8 border border-white/[0.06]">
              <div className="text-center mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mx-auto mb-3"><Mail className="w-7 h-7 text-indigo-400" /></div>
                <h4 className="text-lg font-bold text-white mb-1">Stay Updated</h4>
                <p className="text-gray-500 text-sm">Get the latest updates and insights</p>
              </div>
              <div className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3.5 bg-white/[0.06] border border-white/[0.10] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm transition-all" />
                </div>
                <button onClick={handleSubscribe} disabled={isSubscribing}
                  className="btn-primary w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 text-sm">
                  <Mail className={`w-4 h-4 ${isSubscribing ? 'animate-spin' : ''}`} />
                  {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                </button>
                {subResult && (
                  <div className={`text-center p-3 rounded-xl text-xs ${subResult.includes('Thank') ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'}`}>
                    {subResult}
                  </div>
                )}
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-white/[0.06]">
              <h4 className="text-base font-semibold text-white mb-4 text-center">Connect With Me</h4>
              <div className="flex justify-center gap-3">
                {socials.map(s => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                      className={`p-3 bg-white/[0.06] hover:bg-white/[0.12] rounded-xl transition-all duration-300 hover:scale-110 ${s.hoverCls}`}>
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-gray-600 text-sm">© 2025 Mohd Ateek. All rights reserved.</span>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>Made by</span><span>Mohd Ateek</span><Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-700">
              <span>Full Stack Developer</span>
              <button onClick={() => setIsAdminOpen(true)}
                className="px-3 py-1.5 glass border border-white/[0.08] hover:border-indigo-500/30 text-gray-600 hover:text-indigo-400 rounded-lg transition-all text-xs font-medium">
                🔐 Admin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 btn-primary rounded-full text-white shadow-xl transition-all duration-500 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;