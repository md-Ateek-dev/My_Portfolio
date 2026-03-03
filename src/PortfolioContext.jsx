import React, { createContext, useState, useEffect } from 'react';
import { FaHtml5, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const defaultSkills = [
    { iconName: 'FaHtml5', name: 'HTML5', percent: 100, color: 'from-orange-500 to-red-500' },
    { iconName: 'FaCss3Alt', name: 'CSS3', percent: 100, color: 'from-blue-500 to-cyan-500' },
    { iconName: 'FaJsSquare', name: 'JavaScript', percent: 80, color: 'from-yellow-400 to-orange-400' },
    { iconName: 'FaBootstrap', name: 'Bootstrap', percent: 100, color: 'from-purple-600 to-indigo-600' },
    { iconName: 'FaReact', name: 'React', percent: 70, color: 'from-cyan-400 to-blue-400' },
    { iconName: 'FaNodeJs', name: 'Node.js', percent: 80, color: 'from-green-500 to-emerald-500' },
    { iconName: 'SiExpress', name: 'Express', percent: 80, color: 'from-gray-300 to-gray-500' },
    { iconName: 'SiMongodb', name: 'MongoDB', percent: 90, color: 'from-green-600 to-green-400' }
  ];

  const defaultStats = {
    experience: '1+',
    projects: '5+',
    clients: 'Pending..'
  };

  const defaultProjects = [
    {
      w_imag: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with React & Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      year: "2024",
      link: ""
    },
    {
      w_imag: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure banking application with biometric authentication",
      technologies: ["React Native", "Firebase", "TypeScript"],
      year: "2024",
      link: ""
    }
  ];

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('portfolioSkills');
    return saved ? JSON.parse(saved) : defaultSkills;
  });

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('portfolioStats');
    return saved ? JSON.parse(saved) : defaultStats;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolioProjects');
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolioSkills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('portfolioStats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
  }, [projects]);

  const addSkill = (skill) => setSkills([...skills, skill]);
  const addProject = (project) => setProjects([project, ...projects]);
  const updateStats = (newStats) => setStats({ ...stats, ...newStats });

  return (
    <PortfolioContext.Provider value={{
      skills, addSkill, setSkills,
      stats, updateStats,
      projects, addProject, setProjects,
      isAdminOpen, setIsAdminOpen
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};
