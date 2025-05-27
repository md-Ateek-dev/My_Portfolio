import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Instagram, Facebook, GitBranch, Github } from 'lucide-react';
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async () => {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !number || !email || !message) {
      setResult("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending your message...");
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "25125e9f-4586-46ed-9c11-603e85723742");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! ✨");
        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        ></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Let's 
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              {" "}Connect
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something extraordinary together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info Card */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Let's discuss how we can work together to create something amazing.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item">
                    <div className="p-3 bg-blue-500/20 rounded-xl group-hover/item:bg-blue-500/30 transition-all duration-300">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:mohdateek@gmail.com" className="text-white hover:text-blue-400 transition-colors text-lg font-medium">
                        mohdateek@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item">
                    <div className="p-3 bg-green-500/20 rounded-xl group-hover/item:bg-green-500/30 transition-all duration-300">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:7054375826" className="text-white hover:text-green-400 transition-colors text-lg font-medium">
                        +91 7054375826
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item">
                    <div className="p-3 bg-red-500/20 rounded-xl group-hover/item:bg-red-500/30 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white text-lg font-medium">Lucknow, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/mohd-ateek-80a949256" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-600/20 hover:bg-blue-600/40 rounded-2xl transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a 
                  href="https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-pink-600/20 hover:bg-pink-600/40 rounded-2xl transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
                </a>
                <a 
                  href="https://www.facebook.com/people/Mohd-Ateek/100058326015440/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-700/20 hover:bg-blue-700/40 rounded-2xl transition-all duration-300 hover:scale-110 group"
                >
                  <Facebook className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                </a>
                <a 
                  href="https://github.com/md-Ateek-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-black hover:bg-slate-800 rounded-2xl transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-white group-hover:text-white" />
                </a>
                <a 
                  href="https://wa.me/message/ANXSMJIEXO3GF1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-black hover:bg-slate-800 rounded-2xl transition-all duration-300 hover:scale-110 group"
                >
                  <FaSquareWhatsapp className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Send Message</h2>
                <p className="text-gray-400">Fill out the form below to get in touch</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="Enter your phone number"
                    className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-spin' : ''}`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {result && (
                <div className={`text-center p-4 rounded-xl ${
                  result.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/20' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/20'
                }`}>
                  {result}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;