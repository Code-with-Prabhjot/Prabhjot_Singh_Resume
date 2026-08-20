import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'club',
      title: 'Coding Club Member & Dev Team Lead',
      organization: 'RVCE',
      date: 'Dec 2025 – Present',
      description: 'Development Team Lead for CloneFest 2.0. Spearheading a 5-member technical team to build and maintain the event\'s digital infrastructure. Coordinating feature deployments, delegating technical tasks, and ensuring platform stability for an event targeting 180+ participants.',
      icon: <Briefcase size={20} className="text-[#06b6d4]" />
    },
    {
      id: 2,
      type: 'hackathon',
      title: 'PitchTrial (Multi-AI SharkTank)',
      organization: 'Nebius x NovaHackathon',
      date: 'Recent',
      description: 'Built a working prototype of PitchTrial in 24 hours. Participated alongside talented teams to innovate using AI technologies.',
      icon: <Trophy size={20} className="text-[#06b6d4]" />
    },
    {
      id: 3,
      type: 'hackathon',
      title: 'Hackemon 2.0 & Team DHI Prompt Masters',
      organization: 'RVCE',
      date: 'Recent',
      description: 'Active participant in competitive events, solving complex problems and showcasing prompt engineering and development skills.',
      icon: <Trophy size={20} className="text-[#06b6d4]" />
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-[#06b6d4]">01.</span> Experience & Extracurriculars
          <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
        </h2>
      </motion.div>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot with Icon */}
            <div className="absolute -left-4 md:-left-5 top-1 bg-slate-900 border border-[#06b6d4] p-2 rounded-full z-10">
              {exp.icon}
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-colors border border-slate-800 hover:border-slate-700">
              <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 mb-4 text-sm text-[#06b6d4] font-medium">
                <span>{exp.organization}</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar size={14} /> {exp.date}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
