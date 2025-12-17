import React, { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Terminal } from './components/Terminal';
import { ModelZoo } from './components/ModelZoo';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactNode } from './components/ContactNode';
import { Navbar } from './components/Navbar';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [bootSequence, setBootSequence] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (bootSequence) {
    return (
      <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center text-[#22c55e] z-50 font-mono">
        <div className="w-64 border border-green-900 bg-black p-1 mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="bg-[#22c55e] h-1 shadow-[0_0_15px_#22c55e]"
          />
        </div>
        <div className="text-[10px] tracking-widest uppercase opacity-70">
           System.booting... neural_link_v2.5
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-[#22c55e] selection:text-black">
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="flex-grow pt-28 pb-12 space-y-32">
          
          <section id="terminal" className="scroll-mt-28">
            <Terminal />
          </section>

          <section id="skills" className="scroll-mt-28">
            <div className="mb-10 border-l-2 border-green-500 pl-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                <span className="text-green-500/50 mr-3">#</span> ANALYZE_CAPABILITIES
              </h2>
            </div>
            <SkillsMatrix />
          </section>

          <section id="projects" className="scroll-mt-28">
            <div className="mb-10 border-l-2 border-purple-500 pl-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                <span className="text-purple-500/50 mr-3">#</span> NEURAL_MODEL_ZOO
              </h2>
            </div>
            <ModelZoo />
          </section>

          <section id="contact" className="scroll-mt-28">
            <ContactNode />
          </section>
          
        </main>

        <footer className="py-12 border-t border-white/5 text-center font-mono opacity-40">
          <p className="text-[10px] tracking-[0.2em] uppercase">
            Neural Interface v2.5.0-LTS | Status: <span className="text-[#22c55e]">Optimal</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;