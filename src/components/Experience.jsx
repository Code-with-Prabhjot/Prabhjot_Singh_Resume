import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Code, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'club',
      title: 'Coding Club Member & Dev Team Lead',
      organization: 'RVCE',
      date: 'Dec 2025 – Present',
      description: 'Development Team Lead for CloneFest 2.0. Spearheaded a technical team to build and maintain the event\'s digital infrastructure, managed live platform deployments, and ensured system stability for over 180+ participants.',
      icon: <Briefcase size={16} className="text-zinc-300" />
    },
    {
      id: 2,
      type: 'leadership',
      title: 'Core Organizing Team – Coding Club 10th Anniversary',
      organization: 'Coding Club RVCE',
      date: 'Recent',
      description: 'Part of the core technical & event organizing team for the landmark 10th Decennial Anniversary celebration of RVCE Coding Club. Coordinated technical workshops, event logistics, digital platforms, and collaborative hack sessions engaging alumni and students.',
      icon: <Users size={16} className="text-zinc-300" />
    },
    {
      id: 3,
      type: 'project-lead',
      title: 'Project Lead & Full-Stack Developer',
      organization: 'Systems & Applied AI Projects',
      date: 'Recent',
      description: 'Led the design and end-to-end architecture for applied developer platforms including the AI Resume Analyser and IEEE Nexus registration portal. Architected backend automation, schema migrations, and role-based access control.',
      icon: <Code size={16} className="text-zinc-300" />
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">01 / TRACK RECORD</span>
          <div className="h-px bg-white/[0.08] flex-grow max-w-xs"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
          Experience &amp; Leadership
        </h2>
      </motion.div>

      <div className="relative border-l border-white/[0.08] ml-3 md:ml-6 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Minimalist Timeline Dot */}
            <div className="absolute -left-3.5 md:-left-4 top-1.5 bg-[#0b0f17] border border-white/20 p-1.5 rounded-full z-10">
              {exp.icon}
            </div>

            <div className="bg-[#121722]/90 backdrop-blur-sm rounded-xl p-6 border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-zinc-100">{exp.title}</h3>
                <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <Calendar size={13} /> {exp.date}
                </span>
              </div>
              
              <div className="text-xs font-mono text-blue-400 font-medium mb-3">
                {exp.organization}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
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
