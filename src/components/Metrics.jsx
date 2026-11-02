import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { GitCommit, Code2, Award, Calendar, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Metrics = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const leetCodeTopics = [
    'Linked Lists',
    'Arrays',
    'Dynamic Programming',
    'Strings',
    'Two Pointers'
  ];

  const gitHubStack = [
    'React',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Prisma',
    'Supabase',
    'Python'
  ];

  return (
    <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">03 / METRICS</span>
          <div className="h-px bg-white/[0.08] flex-grow max-w-xs"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
          Code &amp; Engineering Metrics
        </h2>
        <p className="text-sm text-zinc-400 mt-1 font-normal">
          Verified problem solving consistency and production repository velocity.
        </p>
      </motion.div>

      {/* Bento Grid Technical Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Bento Card 1: LeetCode */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-full"
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="white"
            glarePosition="all"
            transitionSpeed={2000}
            scale={1.02}
            className="h-full rounded-xl"
            glareBorderRadius="12px"
          >
            <div
              onMouseMove={handleMouseMove}
              className="relative rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-6 sm:p-8 flex flex-col h-full justify-between hover:border-white/[0.2] transition-all duration-300 group overflow-hidden before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none"
            >
              <div className="flex-grow flex flex-col">
                {/* Card Header with locked min-h */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] min-h-[58px]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/[0.08] text-zinc-300">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">ALGORITHMIC DSA</span>
                      <h3 className="text-sm font-medium text-zinc-200">LeetCode Profile</h3>
                    </div>
                  </div>
                  
                  {/* Verified Percentile Badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[11px] font-mono text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Top 0.9% Globally &bull; Beats 99.1% of Solvers
                  </span>
                </div>

                {/* Metric Counter & Tag */}
                <div className="my-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-zinc-100">
                      500+
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Problems Solved</span>
                  </div>
                  
                  <p className="mt-2 text-sm text-zinc-300 font-medium italic">
                    Data Structures &amp; Algorithms
                  </p>

                  {/* Consistency Badges */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-zinc-300">
                      <Calendar size={13} className="text-blue-400" />
                      260+ Active Days
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-500/20 bg-amber-500/10 text-xs font-mono text-amber-300">
                      <Award size={13} className="text-amber-400" />
                      200 Days Badge (2026)
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Topics Breakdown */}
              <div className="pt-5 border-t border-white/[0.06] mt-auto">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2.5">
                  Core Topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {leetCodeTopics.map((topic) => (
                    <motion.div 
                      key={topic}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.6}
                      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-[11px] font-mono cursor-grab select-none"
                    >
                      {topic}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Bento Card 2: GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="h-full"
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="white"
            glarePosition="all"
            transitionSpeed={2000}
            scale={1.02}
            className="h-full rounded-xl"
            glareBorderRadius="12px"
          >
            <div
              onMouseMove={handleMouseMove}
              className="relative rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-6 sm:p-8 flex flex-col h-full justify-between hover:border-white/[0.2] transition-all duration-300 group overflow-hidden before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none"
            >
              <div className="flex-grow flex flex-col">
                {/* Card Header with locked min-h */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] min-h-[58px]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/[0.08] text-zinc-300">
                      <FaGithub size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Open Source &amp; Systems</span>
                      <h3 className="text-sm font-medium text-zinc-200">GitHub Activity</h3>
                    </div>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-[11px] font-mono text-blue-400 font-medium">
                    <GitCommit size={12} />
                    Production Velocity
                  </span>
                </div>

                {/* Metric Counter & Tag */}
                <div className="my-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100">
                      Full-Stack
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Production Systems</span>
                  </div>
                  
                  <p className="mt-2 text-sm text-zinc-300 font-medium italic">
                    Continuous Integration &amp; Production Repositories
                  </p>

                  {/* Focus Area */}
                  <div className="mt-4 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-2">
                    <Layers size={14} className="text-zinc-400 mt-0.5 flex-shrink-0" />
                    <div className="text-xs font-mono text-zinc-400">
                      <span className="text-zinc-300 font-medium">Focus Area: </span>
                      Backend Automation, RBAC Middleware &amp; High-Availability APIs
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Production Stack */}
              <div className="pt-5 border-t border-white/[0.06] mt-auto">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2.5">
                  Production Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {gitHubStack.map((tech) => (
                    <motion.div 
                      key={tech}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.6}
                      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-[11px] font-mono cursor-grab select-none"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

      </div>

      {/* Academic & Engineering Highlights Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
      >
        <div 
          onMouseMove={handleMouseMove}
          className="relative rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-5 transition-all duration-300 overflow-hidden flex flex-col justify-center items-center h-full before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none group"
        >
          <div className="font-mono text-xl sm:text-2xl font-bold text-zinc-100">9.85 CGPA</div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-1">RVCE Computer Science</div>
        </div>
        <div 
          onMouseMove={handleMouseMove}
          className="relative rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-5 transition-all duration-300 overflow-hidden flex flex-col justify-center items-center h-full before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none group"
        >
          <div className="font-mono text-xl sm:text-2xl font-bold text-zinc-100">260+ Days</div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Consecutive Problem Solving Streak</div>
        </div>
        <div 
          onMouseMove={handleMouseMove}
          className="relative rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-5 transition-all duration-300 overflow-hidden flex flex-col justify-center items-center h-full before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none group"
        >
          <div className="font-mono text-xl sm:text-2xl font-bold text-zinc-100">Full-Stack</div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-1">Modern Architecture &amp; Systems</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Metrics;
