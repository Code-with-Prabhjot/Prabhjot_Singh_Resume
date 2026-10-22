import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Lock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Resume Analyser',
      tech: ['Python', 'Flask', 'spaCy NLP', 'SQLite', 'JWT', 'Vercel'],
      description: 'Production NLP-driven resume screening platform identifying skill gaps across 1,700+ domain terms. Implemented an OCR pipeline accelerating batch processing throughput by 80%.',
      github: 'https://github.com/Code-with-Prabhjot/resume-analyzer-backend',
      live: 'https://resume-analyzer-frontend-gold.vercel.app/'
    },
    {
      id: 2,
      title: 'Nexus Event Registration Portal',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TypeScript'],
      description: 'High-concurrency event registration SPA featuring granular role-based access for students and coordinators. Validated across simulated 2,000 RPM traffic spikes without packet drop.',
      github: 'https://github.com/Code-with-Prabhjot/IEEE-TechFest-Backend',
      live: 'https://nexus-backend-acmg.onrender.com/'
    },
    {
      id: 3,
      title: 'eConfMate Platform',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'PDF Export'],
      description: 'Comprehensive multi-tier conference orchestration suite built for university-scale summits. Engineered dynamic session visualizers and client-side deterministic PDF report generation.',
      github: null,
      live: null,
      isPrivate: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">02 / SYSTEMS &amp; PRODUCTS</span>
          <div className="h-px bg-white/[0.08] flex-grow max-w-xs"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
          Featured Engineering Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.2] transition-all duration-300 group"
          >
            <div>
              {/* Card Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/[0.08] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <FolderGit2 size={20} />
                </div>
                
                <div className="flex gap-2 items-center">
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/[0.08] text-zinc-400 text-[11px] font-mono rounded-md">
                      <Lock size={11} />
                      Private IP
                    </span>
                  ) : (
                    <>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-lg border border-white/[0.12] bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" 
                        aria-label="Repository Source"
                        title="GitHub Repository"
                      >
                        <FaGithub size={16} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-lg border border-white/[0.12] bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors" 
                        aria-label="Live Deployment"
                        title="Live Deployment"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-zinc-100 mb-2.5 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            {/* Technology Stack Tags */}
            <ul className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {project.tech.map((tech, i) => (
                <li 
                  key={i} 
                  className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-[11px] font-mono"
                >
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
