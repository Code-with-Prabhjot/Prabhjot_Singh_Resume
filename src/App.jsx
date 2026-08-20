import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0f172a] text-[#f8fafc] min-h-screen selection:bg-[#06b6d4] selection:text-[#0f172a]">
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>Built with React, Vite, and Tailwind CSS by Prabhjot Singh.</p>
      </footer>
    </div>
  );
}

export default App;
