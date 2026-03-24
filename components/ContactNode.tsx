import React from 'react';
import { SOCIALS } from '../constants';
import { motion } from 'framer-motion';

export const ContactNode: React.FC = () => {
  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-12 text-center overflow-hidden relative group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e05,transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Ready to <span className="text-green-500">Collaborate?</span>
        </h2>
        <p className="text-white/60 leading-relaxed">
          Open to research collaborations, open-source contributions, or deep learning projects. 
          Let's build the future of AI together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-all hover:-translate-y-1"
            >
              <social.icon className="w-4 h-4 text-green-500" />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
