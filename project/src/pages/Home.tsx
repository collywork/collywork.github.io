import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';

export default function Home() {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Briefcase },
    { label: 'Projects Completed', value: '50+', icon: Code },
    { label: 'Certifications', value: '10+', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-slate-700/50 shadow-2xl"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
                  John <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Doe</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-6">
                  Full-Stack Developer & UI/UX Designer
                </p>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Passionate about creating exceptional digital experiences through clean code, 
                  innovative design, and user-centered thinking. Specialized in React, TypeScript, 
                  and modern web technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/cv"
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="font-semibold">View CV</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group flex items-center space-x-2 px-8 py-4 bg-slate-800/50 text-slate-100 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                <span className="font-semibold">Download CV</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <GlassCard key={stat.label} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-100 mb-2">{stat.value}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </GlassCard>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Work</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A selection of recent projects showcasing my skills in full-stack development and design.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <GlassCard key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={`https://placehold.co/600x400 + i}-${
                        ['a8a3a3c8c8a8', 'b8b3b3c8c8b8', 'c8c3c3c8c8c8'][i - 1]
                      }?w=400&h=300&fit=crop`}
                      alt={`Project ${i}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                    Project {i}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mt-12"
            >
              <Link
                to="/cv"
                className="inline-flex items-center space-x-2 px-6 py-3 text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>View all projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}