import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Layers, Mail, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Terminal', href: '#terminal', icon: Terminal },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-green-500/20 border border-green-500/30 rounded flex items-center justify-center">
            <span className="text-green-500 font-bold text-lg">C</span>
          </div>
          <span className="text-white font-mono tracking-tighter text-lg font-bold">QIAN.DL</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-xs font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest"
            >
              <link.icon className="w-3 h-3 group-hover:text-green-500 transition-colors" />
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-sm font-mono text-white/60 hover:text-white uppercase tracking-widest"
                >
                  <link.icon className="w-4 h-4 text-green-500" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
