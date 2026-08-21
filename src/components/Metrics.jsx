import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

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
          <div className="w-full overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
            <img 
              src="https://ghchart.rshah.org/06b6d4/Code-with-Prabhjot" 
              alt="Prabhjot's GitHub Chart" 
              className="min-w-[700px] h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
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
