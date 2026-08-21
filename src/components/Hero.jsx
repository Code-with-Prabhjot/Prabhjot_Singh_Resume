import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Download, Trophy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Typewriter = () => {
  const roles = ['Computer Science Student', 'Full-Stack Developer', 'AI/NLP Enthusiast', 'Problem Solver'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 md:h-12 overflow-hidden flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-4xl font-bold text-slate-400"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#06b6d4] font-medium tracking-wide mb-3 md:mb-4"
          >
            Hi, I am
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6"
          >
            Prabhjot Singh.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <Typewriter />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
          >
            I'm currently pursuing my <span className="text-slate-200 font-medium">Bachelor of Engineering in Computer Science and Engineering</span> at RV College of Engineering, with a 9.85 CGPA. I specialize in building scalable web applications, robust backends, and AI-driven platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full mb-10"
          >
            <a 
              href="/Prabhjot_Singh_Resume.pdf" 
              download="Prabhjot_Singh_Resume.pdf"
              className="flex items-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-3 rounded-full font-bold hover:bg-[#0891b2] transition-colors w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
              <a href="https://github.com/Code-with-Prabhjot" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-[#06b6d4] hover:bg-slate-700 transition-all shadow-sm">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/prabhjot-singh-88a683366/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-[#06b6d4] hover:bg-slate-700 transition-all shadow-sm">
                <FaLinkedin size={22} />
              </a>
              <a href="https://leetcode.com/u/Code-with-Prabhjot/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-[#06b6d4] hover:bg-slate-700 transition-all shadow-sm" title="LeetCode">
                <Code2 size={22} />
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Profile Image with Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.5 },
            scale: { duration: 0.5, type: 'spring' },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="relative flex-shrink-0"
        >
          <div className="w-48 h-60 md:w-64 md:h-80 rounded-3xl overflow-hidden ring-2 ring-[#06b6d4] shadow-[0_0_30px_rgba(6,182,212,0.2)] mx-auto relative group">
            {/* Glow effect underneath */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06b6d4]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
            <img 
              src="/PRABHJOT.png" 
              alt="Prabhjot Singh" 
              className="w-full h-full object-cover object-top scale-110 relative z-0 transition-transform duration-700 group-hover:scale-[1.15]"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
