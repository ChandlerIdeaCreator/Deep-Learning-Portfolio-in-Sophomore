import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Award } from 'lucide-react';

export const ModelZoo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ y: -5 }}
          className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Github className="w-5 h-5 text-purple-400" />
            </div>
            {project.award && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[10px] font-bold text-yellow-500 uppercase tracking-wider">
                <Award className="w-3 h-3" />
                {project.award}
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Architecture</div>
                <div className="text-xs text-white/80 font-mono">{project.stats.modelType}</div>
              </div>
              <div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Performance</div>
                <div className="text-xs text-white/80 font-mono">{project.stats.accuracy}</div>
              </div>
            </div>

            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-medium text-white transition-all"
            >
              View Source <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
