import React, { useState } from 'react';
import { Save, Upload, Eye, Edit3, Plus, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import GlassCard from '../components/GlassCard';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'settings', label: 'Settings' },
  ];

  const handleSave = () => {
    toast.success('Changes saved successfully!');
    setIsEditing(false);
  };

  const handleImageUpload = () => {
    toast.info('Image upload functionality coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header isAuthenticated={true} onLogout={() => console.log('Logout')} />
      
      <main className="pt-16">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">Admin Dashboard</h1>
                <p className="text-slate-400">Manage your CV content and settings</p>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 text-slate-100 rounded-lg hover:bg-slate-700/50 transition-colors border border-slate-700/50"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>{isEditing ? 'Cancel' : 'Edit Mode'}</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>Preview CV</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <GlassCard>
                  <nav className="space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-slate-300 hover:bg-slate-700/30 hover:text-slate-100'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </GlassCard>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <GlassCard>
                  {activeTab === 'profile' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-100">Profile Information</h2>
                        {isEditing && (
                          <button
                            onClick={handleSave}
                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Save className="w-4 h-4" />
                            <span>Save Changes</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 flex items-center space-x-6">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                            alt="Profile"
                            className="w-20 h-20 rounded-full border-4 border-slate-700/50"
                          />
                          {isEditing && (
                            <button
                              onClick={handleImageUpload}
                              className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-colors"
                            >
                              <Upload className="w-4 h-4" />
                              <span>Upload Photo</span>
                            </button>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue="John Doe"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Job Title
                          </label>
                          <input
                            type="text"
                            defaultValue="Senior Full-Stack Developer"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue="john.doe@email.com"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Professional Summary
                          </label>
                          <textarea
                            rows={4}
                            defaultValue="Experienced Full-Stack Developer with 5+ years of expertise in building scalable web applications using modern technologies..."
                            disabled={!isEditing}
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'experience' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-100">Work Experience</h2>
                        {isEditing && (
                          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4" />
                            <span>Add Experience</span>
                          </button>
                        )}
                      </div>

                      <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-slate-100">Senior Full-Stack Developer</h3>
                                <p className="text-blue-400">Tech Innovations Inc.</p>
                                <p className="text-slate-400 text-sm">Jan 2022 - Present</p>
                              </div>
                              {isEditing && (
                                <div className="flex space-x-2">
                                  <button className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-slate-400 hover:text-red-400 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              )}
                            </div>
                            <p className="text-slate-300">
                              Led development of microservices architecture serving 1M+ users. 
                              Mentored junior developers and established coding standards.
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'projects' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-100">Projects</h2>
                        {isEditing && (
                          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4" />
                            <span>Add Project</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-lg font-semibold text-slate-100">Project {i}</h3>
                              {isEditing && (
                                <div className="flex space-x-2">
                                  <button className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 text-slate-400 hover:text-red-400 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              )}
                            </div>
                            <p className="text-slate-300 mb-4">
                              A brief description of this project and the technologies used.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {['React', 'TypeScript', 'Node.js'].map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'skills' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-100">Skills</h2>
                        {isEditing && (
                          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4" />
                            <span>Add Skill</span>
                          </button>
                        )}
                      </div>

                      <div className="space-y-8">
                        {['Frontend', 'Backend', 'DevOps', 'Tools'].map((category) => (
                          <div key={category}>
                            <h3 className="text-lg font-semibold text-slate-200 mb-4">{category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                                  <span className="text-slate-300">Skill {i}</span>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-slate-400 text-sm">90%</span>
                                    {isEditing && (
                                      <button className="p-1 text-slate-400 hover:text-red-400 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'settings' && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-100">Settings</h2>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
                          <h3 className="text-lg font-semibold text-slate-100 mb-4">CV Visibility</h3>
                          <div className="space-y-3">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="visibility"
                                className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600"
                                defaultChecked
                              />
                              <span className="ml-2 text-slate-300">Public - Anyone can view</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="visibility"
                                className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600"
                              />
                              <span className="ml-2 text-slate-300">Private - Only authenticated users</span>
                            </label>
                          </div>
                        </div>

                        <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
                          <h3 className="text-lg font-semibold text-slate-100 mb-4">Export Options</h3>
                          <div className="space-y-3">
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Generate PDF
                            </button>
                            <button className="w-full px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-colors">
                              Export JSON
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}