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
        <div className="flex items-start gap-4">
          <span className="text-[#22c55e] shrink-0">➜</span>
          <div className="space-y-1">
            <div className="text-white/40 text-xs uppercase tracking-widest">Identify</div>
            <div className="text-2xl font-bold text-white">{PROFILE.name}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <span className="text-[#22c55e] shrink-0">➜</span>
          <div className="space-y-1">
            <div className="text-white/40 text-xs uppercase tracking-widest">Role</div>
            <div className="text-lg text-white/80">{PROFILE.role}</div>
          </div>
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
