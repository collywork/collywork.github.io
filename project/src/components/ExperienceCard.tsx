import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  location,
  description,
  technologies = []
}) => {
  return (
    <div className="border-l-2 border-blue-500/30 pl-6 pb-8 last:pb-0 relative">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
      
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-100">{position}</h3>
          <p className="text-lg text-blue-400 font-medium">{company}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          {location && (
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-slate-300 flex items-start space-x-2">
              <span className="text-blue-400 mt-2 text-xs">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;