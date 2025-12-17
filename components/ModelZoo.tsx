import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Github, Trophy, Cpu, Database, Activity } from 'lucide-react';

export const ModelZoo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-[#0f0f0f] border border-gray-800 hover:border-green-500/50 transition-colors duration-300 flex flex-col h-full overflow-hidden"
        >
          {/* Glitch Overlay on Hover */}
          <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-0" />
          
          {/* Header */}
          <div className="p-6 border-b border-gray-800 relative z-10 bg-[#0f0f0f]">
            <div className="flex justify-between items-start mb-2">
              <div className="text-xs text-gray-500 font-mono">ID: {project.id.toUpperCase()}</div>
              {project.award && (
                <div className="flex items-center text-yellow-400 text-xs border border-yellow-900/50 bg-yellow-900/20 px-2 py-1 rounded">
                  <Trophy size={12} className="mr-1" />
                  AWARD WINNER
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Tech Stats visualization */}
          <div className="px-6 py-4 bg-[#0a0a0a] border-b border-gray-800 relative z-10">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-400">
               <div className="flex items-center">
                 <Cpu size={12} className="mr-2 text-purple-500" />
                 {project.stats?.modelType || "Unknown Arch"}
               </div>
               <div className="flex items-center">
                 <Activity size={12} className="mr-2 text-green-500" />
                 {project.stats?.accuracy || "N/A"} Acc
               </div>
               <div className="flex items-center col-span-2">
                 <Database size={12} className="mr-2 text-blue-500" />
                 {project.stats?.dataset || "Custom Data"}
               </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-6 flex-grow relative z-10">
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider text-green-600 bg-green-900/10 border border-green-900/30 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-800 bg-[#111] relative z-10 mt-auto">
             <a 
               href={project.githubUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center w-full py-2 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-black transition-all duration-300 font-mono text-sm uppercase tracking-wide group-button"
             >
               <Github size={16} className="mr-2" />
               View Source
             </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};