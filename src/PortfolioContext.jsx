import React, { createContext, useState, useEffect } from 'react';
import { FaHtml5, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

export const PortfolioContext = createContext();

// ──────────────────────────────────────────────────────────────────────────────
// Backend API base URL
// ──────────────────────────────────────────────────────────────────────────────
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const PortfolioProvider = ({ children }) => {

  // ── State ──────────────────────────────────────────────────────────────────
  const [skills, setSkills] = useState([]);
  const [stats, setStats] = useState({ experience: '1+', projects: '5+', clients: 'Pending..' });
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // ── Fetch all data on mount ─────────────────────────────────────────────────
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [skillsRes, statsRes, projectsRes] = await Promise.all([
          fetch(`${API_BASE}/skills`),
          fetch(`${API_BASE}/stats`),
          fetch(`${API_BASE}/projects`),
        ]);
        const skillsData = await skillsRes.json();
        const statsData = await statsRes.json();
        const projectsData = await projectsRes.json();

        setSkills(skillsData);
        setStats(statsData);
        setProjects(projectsData);
      } catch (err) {
        console.error('❌ Failed to fetch portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // ── Skills CRUD ────────────────────────────────────────────────────────────
  const addSkill = async (skill) => {
    try {
      const res = await fetch(`${API_BASE}/skills`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(skill),
      });
      const saved = await res.json();
      setSkills(prev => [...prev, saved]);
    } catch (err) {
      console.error('❌ addSkill error:', err);
    }
  };

  const removeSkill = async (id) => {
    try {
      await fetch(`${API_BASE}/skills/${id}`, { method: 'DELETE' });
      setSkills(prev => prev.filter(s => s._id !== id));
    } catch (err) {
      console.error('❌ removeSkill error:', err);
    }
  };

  // ── Stats CRUD ─────────────────────────────────────────────────────────────
  const updateStats = async (newStats) => {
    try {
      const res = await fetch(`${API_BASE}/stats`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStats),
      });
      const saved = await res.json();
      setStats(saved);
    } catch (err) {
      console.error('❌ updateStats error:', err);
    }
  };

  // ── Projects CRUD ──────────────────────────────────────────────────────────
  const addProject = async (project) => {
    try {
      const res = await fetch(`${API_BASE}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      const saved = await res.json();
      setProjects(prev => [saved, ...prev]);
    } catch (err) {
      console.error('❌ addProject error:', err);
    }
  };

  const removeProject = async (id) => {
    try {
      await fetch(`${API_BASE}/projects/${id}`, { method: 'DELETE' });
      setProjects(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      console.error('❌ removeProject error:', err);
    }
  };

  return (
    <PortfolioContext.Provider value={{
      skills, addSkill, removeSkill, setSkills,
      stats, updateStats,
      projects, addProject, removeProject, setProjects,
      loading,
      isAdminOpen, setIsAdminOpen
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};
