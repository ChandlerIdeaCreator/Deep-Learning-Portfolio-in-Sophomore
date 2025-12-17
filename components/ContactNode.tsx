import React from 'react';
import { SOCIALS } from '../constants';

export const ContactNode: React.FC = () => {
  return (
    <div className="relative border border-gray-800 bg-[#0c0c0c] p-8 max-w-3xl mx-auto overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>

      <div className="text-center mb-8">
         <h2 className="text-2xl font-mono text-white mb-2">Initialize Connection</h2>
         <p className="text-gray-500 text-sm">Open communication channels for collaboration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOCIALS.map((social) => {
          const Icon = social.icon;
          return (
            <a 
              key={social.platform}
              href={social.url}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center p-4 border border-gray-800 bg-black/50 hover:bg-green-900/10 hover:border-green-500/50 transition-all group"
            >
              <div className="p-3 bg-gray-900 group-hover:bg-green-900/20 rounded mr-4">
                {Icon ? <Icon size={20} className="text-gray-400 group-hover:text-green-400" /> : null}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs text-gray-500 uppercase tracking-widest">{social.platform}</div>
                <div className="text-sm font-mono text-gray-300 group-hover:text-white truncate">{social.label}</div>
              </div>
            </a>
          );
        })}
        
        {/* Manual entry for QQ since Lucide doesn't have it */}
        <div className="flex items-center p-4 border border-gray-800 bg-black/50 hover:bg-green-900/10 hover:border-green-500/50 transition-all group cursor-default">
           <div className="p-3 bg-gray-900 group-hover:bg-green-900/20 rounded mr-4">
             <span className="text-gray-400 group-hover:text-green-400 font-bold">QQ</span>
           </div>
           <div>
             <div className="text-xs text-gray-500 uppercase tracking-widest">Tencent QQ</div>
             <div className="text-sm font-mono text-gray-300 group-hover:text-white">3237460759</div>
           </div>
        </div>
      </div>
    </div>
  );
};