import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Tools & Frameworks',
      items: ['React', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Render']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-[#06b6d4]">03.</span> Skills
          <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
        </h2>
      </motion.div>

      <div className="space-y-12">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 text-sm font-medium transition-colors hover:text-[#06b6d4] hover:border-[#06b6d4] cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
