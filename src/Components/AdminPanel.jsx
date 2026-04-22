import React, { useContext, useState } from 'react';
import { PortfolioContext } from '../PortfolioContext';
import { Lock, Eye, EyeOff, Shield, LogOut, Plus, Trash2, X } from 'lucide-react';

// ─── Admin URL Base ────────────────────────────────────────────────────────
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// ─── Login Screen ─────────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok) {
                onLogin();
            } else {
                setError(data.error || 'Invalid username or password!');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 w-full max-w-md px-4">
                <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 shadow-2xl shadow-black/50">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/20">
                            <Shield className="w-10 h-10 text-cyan-400" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                        Admin Access
                    </h1>
                    <p className="text-gray-500 text-center mb-8 text-sm">
                        Enter your credentials to manage portfolio
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Username */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                                <X className="w-4 h-4 flex-shrink-0" />
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <Lock className="w-5 h-5" />
                                    Login to Admin Panel
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-gray-600 text-xs text-center mt-6">
                        🔒 Secured area · Unauthorized access is prohibited
                    </p>
                </div>
            </div>
        </div>
    );
};

// ─── Main Admin Panel ─────────────────────────────────────────────────────────
const AdminPanel = () => {
    const {
        skills, addSkill, removeSkill,
        stats, updateStats,
        projects, addProject, removeProject,
        loading,
        setIsAdminOpen
    } = useContext(PortfolioContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('stats');

    const [newStat, setNewStat] = useState({
        clients: stats.clients || 'Pending..',
        experience: stats.experience || '1+',
        projects: stats.projects || '5+'
    });

    const [newSkill, setNewSkill] = useState({
        name: '', iconName: 'FaReact', percent: 80, color: 'from-blue-400 to-cyan-400'
    });

    const [newProject, setNewProject] = useState({
        w_imag: '', title: '', category: '', description: '', technologies: '', year: '', link: ''
    });

    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const [successMsg, setSuccessMsg] = useState('');

    const showSuccess = (msg) => {
        setSuccessMsg(msg);
        setTimeout(() => setSuccessMsg(''), 2500);
    };

    // ── Stats ──
    const handleStatChange = (e) => setNewStat({ ...newStat, [e.target.name]: e.target.value });
    const saveStats = () => { updateStats(newStat); showSuccess('✅ Stats updated successfully!'); };

    // ── Skills ──
    const handleSkillChange = (e) => setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
    const saveSkill = async () => {
        if (!newSkill.name) return;
        await addSkill({ ...newSkill, percent: parseInt(newSkill.percent, 10) });
        setNewSkill({ name: '', iconName: 'FaReact', percent: 80, color: 'from-blue-400 to-cyan-400' });
        showSuccess('✅ Skill added successfully!');
    };
    const handleRemoveSkill = async (id) => {
        await removeSkill(id);
        showSuccess('🗑️ Skill removed!');
    };

    // ── Projects ──
    const handleProjectChange = (e) => setNewProject({ ...newProject, [e.target.name]: e.target.value });

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const saveProject = async () => {
        if (!newProject.title) return;

        setIsUploading(true);

        try {
            let imageUrl = newProject.w_imag;

            // ✅ Step 1: Upload to Cloudinary
            if (imageFile) {
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("upload_preset", "portfolio_upload"); // 🔥 change if needed

                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/djv97kkwe/image/upload",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const data = await res.json();

                if (data.secure_url) {
                    imageUrl = data.secure_url;
                    console.log("✅ Cloudinary URL:", imageUrl);
                } else {
                    console.error("❌ Upload failed:", data);
                    showSuccess("❌ Image upload failed!");
                    setIsUploading(false);
                    return;
                }
            }

            // ✅ Step 2: Save in DB
            await addProject({
                ...newProject,
                w_imag: imageUrl,
                technologies: newProject.technologies
                    .split(",")
                    .map((t) => t.trim()),
            });

            // ✅ Reset form
            setNewProject({
                w_imag: "",
                title: "",
                category: "",
                description: "",
                technologies: "",
                year: "",
                link: "",
            });

            setImageFile(null);
            showSuccess("✅ Project added successfully!");

        } catch (error) {
            console.error("❌ Error:", error);
            showSuccess("❌ Something went wrong!");
        } finally {
            setIsUploading(false);
        }
    };
    const handleRemoveProject = async (id) => {
        await removeProject(id);
        showSuccess('🗑️ Project removed!');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdminOpen(false);
    };

    // ── Show Login if not logged in ──
    if (!isLoggedIn) {
        return (
            <div className="fixed inset-0 z-[9999] bg-gray-950">
                <button
                    onClick={() => setIsAdminOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200"
                >
                    <X className="w-5 h-5" />
                </button>
                <LoginScreen onLogin={() => setIsLoggedIn(true)} />
            </div>
        );
    }

    // ── Main Panel ──
    const tabs = [
        { id: 'stats', label: 'Stats & Experience', color: 'cyan' },
        { id: 'skills', label: 'Skills', color: 'purple' },
        { id: 'projects', label: 'Projects', color: 'blue' },
    ];

    const tabColors = {
        cyan: 'border-cyan-400 text-cyan-400',
        purple: 'border-purple-400 text-purple-400',
        blue: 'border-blue-400 text-blue-400',
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-gray-950 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
                        <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Admin Panel
                        </h1>
                        <p className="text-gray-500 text-xs">Portfolio Management</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 rounded-xl transition-all duration-300 text-sm font-medium"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>

            {/* Success Toast */}
            {successMsg && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-green-500/20 border border-green-500/40 text-green-300 rounded-2xl text-sm font-medium backdrop-blur-xl shadow-lg animate-bounce">
                    {successMsg}
                </div>
            )}

            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Tabs */}
                <div className="flex bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`flex-1 py-4 font-semibold text-sm text-center transition-all duration-300 border-t-2 ${activeTab === tab.id
                                ? `bg-gray-800/60 ${tabColors[tab.color]}`
                                : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ─── STATS TAB ─────────────────────────────── */}
                {activeTab === 'stats' && (
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            📊 <span>Update Statistics & Experience</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Years of Experience', name: 'experience', placeholder: '1+', emoji: '🏆' },
                                { label: 'Projects Completed', name: 'projects', placeholder: '5+', emoji: '🚀' },
                                { label: 'Happy Clients', name: 'clients', placeholder: 'Pending..', emoji: '🤝' },
                            ].map(field => (
                                <div key={field.name} className="group">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        {field.emoji} {field.label}
                                    </label>
                                    <input
                                        type="text"
                                        name={field.name}
                                        value={newStat[field.name]}
                                        placeholder={field.placeholder}
                                        onChange={handleStatChange}
                                        className="w-full bg-gray-800 border border-gray-700 group-hover:border-gray-600 rounded-xl p-3.5 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={saveStats}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                        >
                            <Plus className="w-5 h-5" />
                            Save Statistics
                        </button>
                    </div>
                )}

                {/* ─── SKILLS TAB ───────────────────────────── */}
                {activeTab === 'skills' && (
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">🎯 Add New Skill</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {[
                                    { label: 'Skill Name', name: 'name', placeholder: 'e.g. Next.js', type: 'text' },
                                    { label: 'Proficiency (%)', name: 'percent', placeholder: '80', type: 'number' },
                                    { label: 'Icon Name (React Icons)', name: 'iconName', placeholder: 'FaReact', type: 'text' },
                                    { label: 'Gradient Color Class', name: 'color', placeholder: 'from-blue-400 to-cyan-400', type: 'text' },
                                ].map(field => (
                                    <div key={field.name}>
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={newSkill[field.name]}
                                            onChange={handleSkillChange}
                                            className="w-full bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-3.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={saveSkill}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Add Skill
                            </button>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-5">Existing Skills ({skills.length})</h3>
                            {loading ? (
                                <p className="text-gray-500 text-sm">Loading...</p>
                            ) : (
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill._id}
                                            className="group flex items-center gap-3 bg-gray-800 border border-gray-700 hover:border-gray-600 px-4 py-2.5 rounded-xl transition-all duration-200"
                                        >
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                                            <span className="text-white text-sm font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-xs">{skill.percent}%</span>
                                            <button
                                                onClick={() => handleRemoveSkill(skill._id)}
                                                className="text-gray-600 hover:text-red-400 transition-colors duration-200 ml-1"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                    {skills.length === 0 && (
                                        <p className="text-gray-600 text-sm">No skills added yet.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ─── PROJECTS TAB ─────────────────────────── */}
                {activeTab === 'projects' && (
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">🚀 Add New Project</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {[
                                    { label: 'Project Title', name: 'title', placeholder: 'My Awesome App', type: 'text', span: false },
                                    { label: 'Category', name: 'category', placeholder: 'Web Development', type: 'text', span: false },
                                    { label: 'Project Image', name: 'w_imag', placeholder: '', type: 'file', span: false },
                                    { label: 'Year', name: 'year', placeholder: '2025', type: 'text', span: false },
                                    { label: '🔗 Project Link (opens on "View Project")', name: 'link', placeholder: 'https://yourproject.com', type: 'url', span: true },
                                    { label: 'Technologies (comma-separated)', name: 'technologies', placeholder: 'React, Tailwind, Node.js', type: 'text', span: true },
                                ].map(field => (
                                    <div key={field.name} className={field.span ? 'md:col-span-2' : ''}>
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            {field.label}
                                        </label>
                                        {field.type === 'file' ? (
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="w-full bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-2.5 text-white file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-500/20 file:text-blue-400 hover:file:bg-blue-500/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                value={newProject[field.name]}
                                                onChange={handleProjectChange}
                                                className="w-full bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        rows="3"
                                        placeholder="Brief description of your project..."
                                        value={newProject.description}
                                        onChange={handleProjectChange}
                                        className="w-full bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl p-3.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={saveProject}
                                disabled={isUploading}
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                            >
                                {isUploading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <Plus className="w-5 h-5" />
                                        Add Project
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-5">Existing Projects ({projects.length})</h3>
                            {loading ? (
                                <p className="text-gray-500 text-sm">Loading...</p>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {projects.map((proj) => (
                                        <div
                                            key={proj._id}
                                            className="group bg-gray-800/60 border border-gray-700 hover:border-gray-600 p-5 rounded-2xl flex justify-between items-start gap-4 transition-all duration-200"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-white text-base mb-1 truncate">{proj.title}</h4>
                                                <p className="text-gray-500 text-xs mb-2 truncate">{proj.description}</p>
                                                {proj.link && (
                                                    <a
                                                        href={proj.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-400 hover:text-blue-300 text-xs truncate block underline underline-offset-2 transition-colors"
                                                    >
                                                        {proj.link}
                                                    </a>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => handleRemoveProject(proj._id)}
                                                className="flex-shrink-0 p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                    {projects.length === 0 && (
                                        <p className="text-gray-600 text-sm col-span-2">No projects added yet.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
