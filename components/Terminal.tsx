import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Minus, Square, X } from 'lucide-react';
import { PROFILE } from '../constants';

const TypewriterText = ({ text, delay = 0, speed = 30, onComplete }: { text: string, delay?: number, speed?: number, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const onCompleteRef = useRef(onComplete);

  // Keep ref updated to avoid re-triggering effect on callback change
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    
    setDisplayedText('');
    
    const startTyping = () => {
      let index = 0;
      interval = setInterval(() => {
        if (index < text.length) {
          // Use slice to ensure we never access out-of-bounds index or append undefined
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      }, speed);
    };

    timeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return <span>{displayedText}</span>;
};

export const Terminal: React.FC = () => {
  const [step, setStep] = useState(0);

  // Steps in the animation sequence
  // 0: Initial prompt
  // 1: Typing command
  // 2: Executing output (handled by step 1 triggering render of output)

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-1 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 shadow-2xl shadow-green-900/20">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors" />
        </div>
        <div className="text-gray-400 text-xs font-mono flex items-center">
          <TerminalIcon size={12} className="mr-2" />
          neu_lab_server — -zsh — 80x24
        </div>
        <div className="flex items-center space-x-3 text-gray-500">
           {/* Decorative UI elements */}
           <div className="h-2 w-16 bg-gray-800 rounded hidden sm:block"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base md:text-lg bg-[#0c0c0c] bg-opacity-95 text-green-400 rounded-b-lg min-h-[400px] overflow-hidden relative">
        
        {/* Line 1: Login */}
        <div className="mb-2">
          <span className="text-blue-400">changyang@neu-deepcv</span>:<span className="text-purple-400">~</span>$ 
          <TypewriterText text=" python3 profile.py --verbose" delay={500} onComplete={() => setStep(1)} />
          {step === 0 && <span className="animate-pulse">_</span>}
        </div>

        {/* Output Area */}
        {step >= 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="text-gray-500 italic text-xs mb-4">
              [SYSTEM] Loading CUDA kernels... Done.<br/>
              [SYSTEM] Mounting /dev/brain... Success.<br/>
              [SYSTEM] Initializing Researcher Class...
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column: Avatar/Gif */}
              <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="md:col-span-1 border border-green-800 p-2 rounded relative group"
              >
                <div className="absolute inset-0 bg-green-500/10 animate-pulse pointer-events-none"></div>
                <img 
                  src="https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif" 
                  alt="Profile Glitch" 
                  className="w-full h-auto rounded transition-all duration-500 object-cover opacity-90 hover:opacity-100"
                />
                <div className="mt-2 text-center text-xs text-green-600 border-t border-green-900 pt-2">
                  ID: 202410936<br/>
                  STATUS: ACTIVE
                </div>
              </motion.div>

              {/* Right Column: Code Output */}
              <div className="md:col-span-2 space-y-2">
                <div className="text-yellow-300">class <span className="text-green-300">Researcher</span>(Student):</div>
                <div className="pl-4 border-l border-gray-700">
                  <div>
                    <span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self):
                  </div>
                  <div className="pl-6 text-gray-300">
                    self.name = <span className="text-green-300">"{PROFILE.name}"</span><br/>
                    self.role = <span className="text-green-300">"{PROFILE.role}"</span><br/>
                    self.location = <span className="text-green-300">"{PROFILE.university}"</span><br/>
                    self.gpa = <span className="text-green-300">"{PROFILE.gpa}"</span><br/>
                    self.gpu = <span className="text-yellow-500">"RTX 4090"</span> <span className="text-gray-500"># Cloud Training</span>
                  </div>
                  
                  <br/>
                  
                  <div>
                    <span className="text-purple-400">def</span> <span className="text-blue-300">get_interests</span>(self):
                  </div>
                  <div className="pl-6 text-gray-300">
                    <span className="text-purple-400">return</span> [<br/>
                    &nbsp;&nbsp;<span className="text-green-300">"Deep Learning"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-green-300">"Computer Vision"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-green-300">"Noise Learning"</span>,<br/>
                    &nbsp;&nbsp;<span className="text-green-300">"Open Source (PaddlePaddle)"</span><br/>
                    ]
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated execution complete prompt */}
            <div className="mt-6 pt-4 border-t border-gray-800">
               <span className="text-blue-400">changyang@neu-deepcv</span>:<span className="text-purple-400">~</span>$ <span className="animate-pulse">_</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};