import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages & Core',
      icon: <Code size={16} className="text-zinc-400" />,
      items: ['C++', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      category: 'Frameworks & Runtimes',
      icon: <Layers size={16} className="text-zinc-400" />,
      items: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS']
    },
    {
      category: 'Storage & Infrastructure',
      icon: <Database size={16} className="text-zinc-400" />,
      items: ['PostgreSQL', 'SQLite', 'Prisma ORM', 'Git', 'GitHub CI/CD', 'Vercel']
    },
    {
      category: 'Systems & Methodologies',
      icon: <Cpu size={16} className="text-zinc-400" />,
      items: ['Data Structures & Algorithms', 'RESTful API Design', 'NLP / spaCy', 'OOP Design']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">04 / STACK</span>
          <div className="h-px bg-white/[0.08] flex-grow max-w-xs"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
          Technical Arsenal
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-6 hover:border-white/[0.2] transition-all duration-300"
          >
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/[0.08]">
                {group.icon}
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider font-mono">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-white/[0.03] text-zinc-300 rounded-lg border border-white/[0.08] text-xs font-mono transition-colors hover:border-white/[0.16] hover:text-white hover:bg-white/5 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
