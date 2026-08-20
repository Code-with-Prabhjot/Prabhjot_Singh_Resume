import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#06b6d4] font-medium tracking-wide mb-4"
        >
          Hi, I am
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Prabhjot Singh.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-slate-400 mb-8"
        >
          Engineering the Future.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm currently pursuing my <span className="text-slate-200 font-medium">Bachelor of Engineering in Computer Science and Engineering</span> at RV College of Engineering, with a 9.85 CGPA. I specialize in building scalable web applications, robust backends, and AI-driven platforms.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#" 
            className="flex items-center gap-2 bg-[#06b6d4] text-[#0f172a] px-8 py-3 rounded-full font-bold hover:bg-[#0891b2] transition-colors w-full sm:w-auto justify-center"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-[#06b6d4] hover:bg-slate-700 transition-all">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-[#06b6d4] hover:bg-slate-700 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-[#06b6d4] hover:bg-slate-700 transition-all" title="LeetCode">
              <Code2 size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
