import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const projects = [
    {
      id: 1,
      title: 'ApexMarket',
      subtitle: 'Distributed AI Systems • Spot GPU Routing',
      tech: ['FastAPI', 'Python', 'Next.js 14', 'TypeScript', 'PostgreSQL', 'Nebius', 'NVIDIA Nemotron'],
      description: 'Architected a distributed AI batch inference router across spot GPU nodes, achieving 32.2% cost savings. Engineered an automated verification engine against an NVIDIA Nemotron anchor with zero-loss failover and live WebSocket telemetry.',
      github: 'https://github.com/Code-with-Prabhjot/apexmarket',
      live: 'https://apexmarket-roan.vercel.app/',
      telemetry: '52ms p50 TTFT • 32.2% Cost Reduction'
    },
    {
      id: 2,
      title: 'AI Resume Analyser',
      tech: ['Python', 'Flask', 'spaCy NLP', 'SQLite', 'JWT', 'Vercel'],
      description: 'Built a production NLP screening platform identifying candidate skill gaps across 1,700+ domain terms. Implemented a custom OCR extraction pipeline (PyMuPDF) and in-memory caching to accelerate batch processing speeds by 80%.',
      github: 'https://github.com/Code-with-Prabhjot/resume-analyzer-backend',
      live: 'https://resume-analyzer-frontend-gold.vercel.app/'
    },
    {
      id: 3,
      title: 'Nexus Event Registration Portal',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TypeScript'],
      description: 'Developed a high-concurrency registration SPA featuring granular role-based access. Designed a robust Prisma/PostgreSQL architecture tested against 2,000 RPM traffic spikes, integrating client-side device camera validation.',
      github: 'https://github.com/Code-with-Prabhjot/IEEE-TechFest-Backend',
      live: 'https://nexus-backend-acmg.onrender.com/'
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
                className="relative rounded-xl border border-white/[0.12] bg-[#161f30] hover:bg-[#1c273c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-sm p-6 sm:p-7 flex flex-col h-full hover:border-white/[0.2] transition-all duration-300 group overflow-hidden before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none"
              >
                {/* Card Header */}
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/[0.08] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <FolderGit2 size={20} />
                  </div>
                  
                  <div className="flex gap-2 items-center">
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
                  </div>
                </div>

                {/* Subtitle / Badge */}
                {project.subtitle && (
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-[11px] font-mono text-blue-400 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      {project.subtitle}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-100 mb-2.5 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                {/* Description wrapped in a div with flex-grow */}
                <div className="flex-grow">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Technology Stack Tags & Telemetry aligned to the bottom */}
                <div className="mt-auto">
                  {/* Technology Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {project.tech.map((tech, i) => (
                      <motion.div 
                        key={i}
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

                  {/* Telemetry Badge */}
                  {project.telemetry && (
                    <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-emerald-400/90 font-medium">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span>{project.telemetry}</span>
                    </div>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
