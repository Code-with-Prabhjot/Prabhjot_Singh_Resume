import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-[#06b6d4]">05.</span> What's Next?
        </h2>
        
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-200 mb-6">
          Get In Touch
        </h3>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Looking for exciting engineering opportunities or collaborations? Let's connect. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col items-center justify-center gap-8">
          <a 
            href="mailto:prabhjotsingh.swe@gmail.com" 
            className="flex items-center gap-3 bg-transparent border-2 border-[#06b6d4] text-[#06b6d4] px-10 py-4 rounded-full font-bold hover:bg-[#06b6d4]/10 transition-colors w-full sm:w-auto justify-center text-lg shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          >
            <Mail size={22} />
            Say Hello
          </a>
          
          <div className="flex items-center gap-6 mt-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <a href="https://github.com/Code-with-Prabhjot" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#06b6d4] transition-colors" title="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/prabhjot-singh-88a683366/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#06b6d4] transition-colors" title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
