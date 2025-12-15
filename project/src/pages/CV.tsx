import React from 'react';
import { Download, User, Briefcase, GraduationCap, Code, Award, Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CVSection from '../components/CVSection';
import ExperienceCard from '../components/ExperienceCard';
import SkillsGrid from '../components/SkillsGrid';
import ProjectCard from '../components/ProjectCard';
import GlassCard from '../components/GlassCard';

export default function CV() {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full-Stack Developer',
      duration: 'Jan 2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and established coding standards',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with product team to deliver features ahead of schedule'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      company: 'Digital Solutions LLC',
      position: 'Full-Stack Developer',
      duration: 'Mar 2020 - Dec 2021',
      location: 'Remote',
      description: [
        'Built responsive web applications using React and Express.js',
        'Integrated third-party APIs and payment processing systems',
        'Optimized database queries improving performance by 40%',
        'Participated in agile development and code reviews'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe API', 'Jest']
    },
    {
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: 'Jun 2019 - Feb 2020',
      location: 'Austin, TX',
      description: [
        'Developed user interfaces for B2B SaaS platform',
        'Implemented responsive design and accessibility standards',
        'Collaborated with UX team to improve user experience',
        'Maintained 95%+ test coverage for frontend components'
      ],
      technologies: ['Vue.js', 'Sass', 'Webpack', 'Cypress']
    }
  ];

  const education = [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2015 - 2019',
      location: 'Austin, TX',
      details: 'Graduated Magna Cum Laude, GPA: 3.8/4.0'
    }
  ];

  const skills = [
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Vue.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 88, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'AWS', level: 78, category: 'devops' },
    { name: 'Docker', level: 82, category: 'devops' },
    { name: 'Git', level: 92, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const handleDownloadCV = () => {
    // In a real app, this would trigger a PDF download
    console.log('Downloading CV...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      <main className="pt-16">
        {/* CV Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                Curriculum Vitae
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Full-Stack Developer & UI/UX Designer
              </p>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Contact Info */}
            <GlassCard className="mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="John Doe"
                  className="w-32 h-32 rounded-full border-4 border-slate-700/50"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-slate-100 mb-2">John Doe</h2>
                  <p className="text-lg text-blue-400 mb-4">Senior Full-Stack Developer</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span>john.doe@email.com</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Summary */}
          <CVSection title="Professional Summary" icon={<User className="w-6 h-6" />}>
            <p className="text-slate-300 leading-relaxed text-lg">
              Experienced Full-Stack Developer with 5+ years of expertise in building scalable web applications 
              using modern technologies. Passionate about creating exceptional user experiences through clean, 
              efficient code and innovative design solutions. Proven track record of leading development teams, 
              implementing best practices, and delivering projects that exceed client expectations.
            </p>
          </CVSection>

          {/* Experience */}
          <CVSection title="Professional Experience" icon={<Briefcase className="w-6 h-6" />}>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </CVSection>

          {/* Education */}
          <CVSection title="Education" icon={<GraduationCap className="w-6 h-6" />}>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-500/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                  <h3 className="text-xl font-semibold text-slate-100">{edu.degree}</h3>
                  <p className="text-lg text-blue-400 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-2">
                    <span>{edu.duration}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </CVSection>

          {/* Skills */}
          <CVSection title="Technical Skills" icon={<Code className="w-6 h-6" />}>
            <SkillsGrid skills={skills} />
          </CVSection>

          {/* Projects */}
          <CVSection title="Featured Projects" icon={<Award className="w-6 h-6" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </CVSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}