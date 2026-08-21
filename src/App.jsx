import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Metrics from './components/Metrics';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-[#0f172a] text-[#f8fafc] min-h-screen selection:bg-[#06b6d4] selection:text-[#0f172a] relative">
      <ScrollProgress />
      
      {/* Vercel-Style Engineering Grid Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col">
          <Hero />
          <Experience />
          <Projects />
          <Metrics />
          <Skills />
          <Contact />
        </main>

        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
          <p>Built with React, Vite, and Tailwind CSS by Prabhjot Singh.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
