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
    <div className="bg-[#0b0f17] text-zinc-100 min-h-screen selection:bg-blue-500/20 selection:text-white relative">
      <ScrollProgress />
      
      {/* Editorial High-Contrast Coordinate Grid Backdrop with Natural Depth */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"
        style={{ 
          maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 45%, transparent 100%)', 
          WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 45%, transparent 100%)' 
        }}
      />

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

        <footer className="py-12 border-t border-white/[0.08] bg-[#0b0f17]/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>
              Prabhjot Singh &bull; Software Engineer
            </p>
            <p>
              Engineered with depth &amp; high-contrast precision &bull; &copy; 2026
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
