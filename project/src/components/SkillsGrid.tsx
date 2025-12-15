import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-slate-200 mb-4 capitalize">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.1 + index * 0.05 
                  }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.2 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;