import React, { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Terminal } from './components/Terminal';
import { ModelZoo } from './components/ModelZoo';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactNode } from './components/ContactNode';
import { Navbar } from './components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [bootSequence, setBootSequence] = useState(true);

  // Simulate a boot sequence loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (bootSequence) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-green-500 z-50">
        <div className="w-64 border border-green-900 bg-black p-2 mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "linear" }}
            className="h-full bg-green-500 h-2"
          />
        </div>
        <div className="font-mono text-xs">
           <motion.span
             animate={{ opacity: [0, 1, 0] }}
             transition={{ repeat: Infinity, duration: 0.5 }}
           >
             INITIALIZING NEURAL LINK...
           </motion.span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-gray-200 selection:bg-green-500 selection:text-black">
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12 space-y-24">
          
          <section id="terminal" className="scroll-mt-24">
            <Terminal />
          </section>

          <section id="skills" className="scroll-mt-24">
            <div className="mb-8 border-l-4 border-green-500 pl-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="text-green-500 mr-2">root@system:~/skills$</span> ./analyze_capabilities.sh
              </h2>
            </div>
            <SkillsMatrix />
          </section>

          <section id="projects" className="scroll-mt-24">
            <div className="mb-8 border-l-4 border-purple-500 pl-4">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="text-purple-500 mr-2">root@system:~/projects$</span> ls -la ./model_zoo
              </h2>
            </div>
            <ModelZoo />
          </section>

          <section id="contact" className="scroll-mt-24">
            <ContactNode />
          </section>
          
        </main>

        <footer className="py-8 border-t border-green-900/30 text-center text-xs text-gray-500 font-mono">
          <p>SYSTEM STATUS: ONLINE | LATENCY: 12ms</p>
          <p className="mt-2">© {new Date().getFullYear()} CHANGYANG QIAN. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;