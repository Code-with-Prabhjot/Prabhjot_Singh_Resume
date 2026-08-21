import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

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
        {/* GitHub Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#06b6d4]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center gap-2 mb-6 text-slate-200 font-semibold text-lg">
            <Activity size={20} className="text-[#06b6d4]" />
            GitHub Activity
          </div>
          <div className="flex flex-col gap-5 h-full justify-center pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0f172a]/50 p-4 rounded-lg border border-slate-700/50">
                <p className="text-[#06b6d4] text-xs uppercase tracking-wider font-bold mb-1">Total Contributions</p>
                <p className="text-[#f8fafc] font-semibold text-xl">120+ <span className="text-sm text-slate-400 font-normal">(Recent)</span></p>
              </div>
              <div className="bg-[#0f172a]/50 p-4 rounded-lg border border-slate-700/50">
                <p className="text-[#06b6d4] text-xs uppercase tracking-wider font-bold mb-1">Current Focus</p>
                <p className="text-[#f8fafc] font-semibold text-sm">Backend Systems & Data Structures</p>
              </div>
            </div>
            
            <div className="bg-[#0f172a]/50 p-4 rounded-lg border border-slate-700/50">
              <p className="text-[#06b6d4] text-xs uppercase tracking-wider font-bold mb-1">Top Languages</p>
              <p className="text-[#f8fafc] font-semibold">C++, Python, JavaScript</p>
            </div>
            
            <div className="mt-2 pt-4 border-t border-slate-700/50 flex items-center justify-between">
              <a 
                href="https://github.com/Code-with-Prabhjot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#06b6d4] transition-colors group/link"
              >
                <FaGithub size={18} className="group-hover/link:scale-110 transition-transform" />
                <span className="text-sm font-medium tracking-wide">View Full Profile</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* LeetCode Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#06b6d4]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center gap-2 mb-6 text-slate-200 font-semibold text-lg">
            <Activity size={20} className="text-amber-400" />
            LeetCode Stats
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
            <img 
              src="https://leetcard.jacoblin.cool/Code-with-Prabhjot?theme=dark&font=baloo&ext=activity" 
              alt="Prabhjot's LeetCode Stats" 
              className="min-w-[400px] h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
