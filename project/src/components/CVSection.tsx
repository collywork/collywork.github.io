import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const CVSection: React.FC<CVSectionProps> = ({ 
  title, 
  children, 
  icon, 
  className = '' 
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      <div className="flex items-center space-x-3 mb-6">
        {icon && (
          <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
      </div>
      <GlassCard hover={false}>
        {children}
      </GlassCard>
    </motion.section>
  );
};

export default CVSection;