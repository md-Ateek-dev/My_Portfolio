import React, { useState, useEffect } from 'react';
import { Mail, User, ArrowRight, Github, Linkedin, Twitter, Instagram, Code, Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionResult, setSubscriptionResult] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubscribe = async () => {
    if (!email) {
      setSubscriptionResult('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionResult('Subscribing...');

    // Simulate API call
    setTimeout(() => {
      setSubscriptionResult('Thank you for subscribing! 🎉');
      setEmail('');
      setIsSubscribing(false);
      setTimeout(() => setSubscriptionResult(''), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/md-Ateek-dev/My_Portfolio', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohd-ateek-80a949256', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/md_Ateek09?t=K769gdOSAwL-Kihfm-GSnA&s=09', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Instagram, href: 'https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx', label: 'Instagram', color: 'hover:text-pink-400' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 50%)`
          }}
        ></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"></div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* About Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-2xl">
                    <Code className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Mohd Ateek</h2>
                    <p className="text-blue-400 font-medium">Full Stack Developer & MERN Expert</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Passionate Full Stack Developer specializing in MERN stack technologies. 
                  I create modern, scalable web applications with expertise in MongoDB, Express.js, 
                  React.js, and Node.js. Let's build something amazing together.
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Material UI', 'JavaScript', 'TypeScript'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {quickLinks.map((link) => (
                      <a 
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
                  <div className="space-y-3">
                    {legalLinks.map((link) => (
                      <a 
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl w-fit mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-300">Subscribe to get the latest updates and insights</p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribing}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Mail className={`w-5 h-5 ${isSubscribing ? 'animate-spin' : ''}`} />
                    {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                  </button>

                  {subscriptionResult && (
                    <div className={`text-center p-3 rounded-xl ${
                      subscriptionResult.includes('Thank you') 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/20' 
                        : subscriptionResult.includes('Please') 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/20'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/20'
                    }`}>
                      {subscriptionResult}
                    </div>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Connect With Me</h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 ${social.color} group`}
                      title={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2025 Mohd Ateek. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>by Mohd Ateek</span>
              </div>
              
              <div className="text-sm text-gray-500">
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;