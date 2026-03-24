import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

export const SkillsMatrix: React.FC = () => {
  const categories = [
    { id: 'language', label: 'Languages' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'tool', label: 'Tools' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div key={cat.id} className="space-y-6">
          <h3 className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] mb-4">
            {cat.label}
          </h3>
          <div className="space-y-4">
            {SKILLS.filter(s => s.category === cat.id).map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img src={skill.iconUrl} alt={skill.name} className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/30">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
