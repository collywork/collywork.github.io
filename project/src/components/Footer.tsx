import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Email', href: 'mailto:contact@example.com', icon: Mail },
  ];

  return (
    <footer className="bg-slate-950/90 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Let's Connect</h3>
            <p className="text-slate-400 max-w-md">
              Open to new opportunities and interesting projects. Feel free to reach out!
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-slate-100 rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;