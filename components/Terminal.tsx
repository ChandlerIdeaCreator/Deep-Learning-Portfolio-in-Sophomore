import React from 'react';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';

export const Terminal: React.FC = () => {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden font-mono shadow-2xl">
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-[10px] text-white/40 ml-4 uppercase tracking-widest">
          neural_terminal_v2.5
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex items-start gap-4">
            <span className="text-[#22c55e] shrink-0 mt-1.5">➜</span>
            <div className="space-y-1">
              <div className="text-white/40 text-xs uppercase tracking-widest">Identify & Role</div>
              <div className="text-3xl font-bold text-white tracking-tight">{PROFILE.name}</div>
              <div className="text-lg text-[#22c55e] font-mono mt-1">{PROFILE.role}</div>
            </div>
          </div>
          <motion.div 
            className="relative shrink-0 self-center"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#22c55e] to-purple-500 rounded-xl blur opacity-50 animate-pulse-glow"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden border border-[#22c55e]/40 bg-black/60 flex items-center justify-center p-2 shadow-[0_0_25px_rgba(34,197,94,0.25)]">
              <img 
                src="https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif" 
                alt="Pikachu" 
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-[#22c55e] shrink-0">➜</span>
          <div className="space-y-1">
            <div className="text-white/40 text-xs uppercase tracking-widest">Education</div>
            <div className="text-white/80">
              {PROFILE.university} — {PROFILE.major}
              <div className="text-[#22c55e] mt-1">GPA: {PROFILE.gpa}</div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-[#22c55e] shrink-0">➜</span>
          <div className="space-y-2">
            <div className="text-white/40 text-xs uppercase tracking-widest">Bio_Data</div>
            <div className="space-y-1">
              {PROFILE.bio.map((line, i) => (
                <div key={i} className="text-white/60 leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
