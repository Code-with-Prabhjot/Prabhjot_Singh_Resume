import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'prabhjotsingh.swe@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">05 / INITIATE CONTACT</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
          Let's build something remarkable.
        </h2>
        
        <p className="text-sm sm:text-base text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Seeking challenging software engineering roles, high-throughput systems design, or AI engineering projects. My inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-12">
          {/* Primary Mailto Link */}
          <a 
            href={`mailto:${email}`} 
            className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 transition font-medium px-6 py-2.5 rounded-lg text-sm inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <Mail size={16} />
            <span>Send Email</span>
            <ArrowUpRight size={14} className="text-zinc-600" />
          </a>

          {/* Copy Address Button */}
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto border border-white/[0.08] bg-[#121722]/80 hover:bg-white/[0.06] text-zinc-300 hover:text-white transition font-mono text-xs px-4 py-2.5 rounded-lg inline-flex items-center justify-center gap-2"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
          </button>
        </div>

        {/* Social Row */}
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500 pt-8 border-t border-white/[0.06]">
          <a 
            href="https://github.com/Code-with-Prabhjot" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <FaGithub size={15} />
            <span>GitHub</span>
          </a>
          <span>&bull;</span>
          <a 
            href="https://www.linkedin.com/in/prabhjot-singh-88a683366/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <FaLinkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <span>&bull;</span>
          <a 
            href="https://leetcode.com/u/Code-with-Prabhjot/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>LeetCode</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
