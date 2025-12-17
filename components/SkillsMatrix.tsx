import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillBar: React.FC<{ skill: typeof SKILLS[0]; colorClass: string }> = ({ skill, colorClass }) => (
  <div className="group mb-4">
    <div className="flex justify-between items-end mb-1">
      <div className="flex items-center space-x-2">
        {skill.iconUrl && (
          <img src={skill.iconUrl} alt={skill.name} className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" />
        )}
        <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
      </div>
      <span className="font-mono text-xs text-gray-500">{skill.level}%</span>
    </div>
    <div className="h-2 w-full bg-gray-900 border border-gray-800 rounded-sm relative overflow-hidden">
      {/* Background Grid in bar */}
      <div className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, #000 50%)', backgroundSize: '4px 100%' }} 
      />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`h-full ${colorClass} shadow-[0_0_10px_currentColor]`}
      />
    </div>
  </div>
);

export const SkillsMatrix: React.FC = () => {
  const languages = SKILLS.filter(s => s.category === 'language');
  const frameworks = SKILLS.filter(s => s.category === 'framework');
  const tools = SKILLS.filter(s => s.category === 'tool');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Languages */}
      <div className="bg-[#111] p-6 border border-gray-800 relative">
        <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 text-green-500 font-bold border border-green-900 text-xs tracking-widest uppercase">
          Languages
        </div>
        {languages.map(skill => (
          <SkillBar key={skill.name} skill={skill} colorClass="bg-green-500" />
        ))}
      </div>

      {/* Frameworks */}
      <div className="bg-[#111] p-6 border border-gray-800 relative">
        <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 text-purple-500 font-bold border border-purple-900 text-xs tracking-widest uppercase">
          Frameworks
        </div>
        {frameworks.map(skill => (
          <SkillBar key={skill.name} skill={skill} colorClass="bg-purple-500" />
        ))}
      </div>

      {/* Tools */}
      <div className="bg-[#111] p-6 border border-gray-800 relative">
        <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 text-yellow-500 font-bold border border-yellow-900 text-xs tracking-widest uppercase">
          DevOps & Tools
        </div>
        {tools.map(skill => (
          <SkillBar key={skill.name} skill={skill} colorClass="bg-yellow-500" />
        ))}
      </div>
    </div>
  );
};