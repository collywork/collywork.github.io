import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        bg-slate-800/30 backdrop-blur-md border border-slate-700/50 
        rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;