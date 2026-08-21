import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Trophy, GitCommit, Target } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Code2 } from 'lucide-react';

const Metrics = () => {
  return (
    <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-[#06b6d4]">03.</span> Live Coding Metrics
          <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
        </h2>
      </motion.div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* GitHub Milestone Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 bg-slate-800/40 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-[#06b6d4]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 relative group flex flex-col justify-between items-center text-center min-h-[350px]"
        >
          <div className="w-full flex items-center justify-between mb-8 opacity-60">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm uppercase tracking-widest">
              <Activity size={16} className="text-[#06b6d4]" />
              GitHub
            </div>
            <FaGithub size={20} className="text-slate-400 group-hover:text-[#06b6d4] transition-colors" />
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow w-full">
            <h3 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-blue-400">
              130+
            </h3>
            <p className="flex items-center justify-center gap-2 text-slate-200 font-semibold text-lg md:text-xl tracking-wide mb-8">
              <GitCommit size={20} className="text-[#06b6d4]" />
              Contributions
            </p>
            
            <div className="flex flex-col gap-3 text-sm md:text-base text-slate-400 w-full max-w-xs mx-auto">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="uppercase tracking-wider text-xs font-semibold">Languages</span>
                <span className="text-[#f8fafc] font-medium text-right">C++, Python, JS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="uppercase tracking-wider text-xs font-semibold">Focus</span>
                <span className="text-[#f8fafc] font-medium text-right">Backend & DS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LeetCode Milestone Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-slate-800/40 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] transition-all duration-300 relative group flex flex-col justify-between items-center text-center min-h-[350px]"
        >
          <div className="w-full flex items-center justify-between mb-8 opacity-60">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm uppercase tracking-widest">
              <Trophy size={16} className="text-amber-400" />
              LeetCode
            </div>
            <Code2 size={20} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow w-full">
            <h3 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 text-[#f8fafc]">
              440+
            </h3>
            <p className="flex items-center justify-center gap-2 text-slate-200 font-semibold text-lg md:text-xl tracking-wide mb-8">
              <Target size={20} className="text-amber-400" />
              Problems Solved
            </p>
            
            <div className="bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-xl px-6 py-3 inline-flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="text-[#06b6d4] font-bold text-sm md:text-base tracking-widest uppercase">
                Top 1.2% (Beats 98.8%)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
