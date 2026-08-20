import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Resume Analyser',
      tech: ['Python', 'Flask', 'spaCy', 'SQLite', 'JWT', 'Vercel'],
      description: 'Developed a live, NLP-driven screening platform that identifies exact candidate skill gaps across 1,700+ engineering terms. Implemented an intelligent OCR extraction pipeline accelerating batch processing speeds by 80%.',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Nexus Event Registration Portal',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TypeScript'],
      description: 'Built a full-stack, high-concurrency event registration SPA featuring distinct role-based access for students and gate volunteers. Designed a robust backend architecture resulting in seamless data processing during simulated 2,000 RPM traffic spikes.',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'eConfMate',
      tech: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
      description: 'Collaborated with a team to build and scale a comprehensive conference management platform utilized for university events. Designed and developed the frontend UI and branded PDF export templates to visualize multi-day schedules.',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-[#06b6d4]">02.</span> Projects
          <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/40 rounded-xl p-6 border border-slate-700 hover:border-[#06b6d4] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
          >
            <div className="flex justify-between items-center mb-6 text-slate-400 group-hover:text-[#06b6d4] transition-colors">
              <Folder size={40} className="text-[#06b6d4]" />
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors" title="GitHub">
                  <FaGithub size={22} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors" title="Live Demo">
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#06b6d4] transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#06b6d4]">
              {project.tech.map((tech, i) => (
                <li key={i} className="bg-[#06b6d4]/10 px-2 py-1 rounded">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
