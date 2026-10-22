import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import * as THREE from 'three';

const Typewriter = () => {
  const roles = [
    'Computer Science Student',
    'Full-Stack Developer',
    'AI & Systems Engineer',
    'Competitive Programmer'
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="h-9 sm:h-11 overflow-hidden flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-xl sm:text-2xl md:text-3xl font-mono font-medium text-zinc-400 tracking-tight"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    let width = parent?.clientWidth || window.innerWidth;
    let height = parent?.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create soft circular dot texture for clean particle rendering
    const createCircleTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 32;
      texCanvas.height = 32;
      const ctx = texCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.6)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(texCanvas);
    };

    const circleTexture = createCircleTexture();

    // 3D coordinate particle field
    const particleCount = 750;
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 360;
      const y = (Math.random() - 0.5) * 240;
      const z = (Math.random() - 0.5) * 220;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 3.2,
      map: circleTexture,
      transparent: true,
      opacity: 0.38,
      color: new THREE.Color('#94a3b8'),
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle coordinate lines connecting proximity points
    const lineIndices = [];
    for (let i = 0; i < particleCount; i += 7) {
      for (let j = i + 1; j < Math.min(i + 14, particleCount); j++) {
        const dx = initialPositions[i * 3] - initialPositions[j * 3];
        const dy = initialPositions[i * 3 + 1] - initialPositions[j * 3 + 1];
        const dz = initialPositions[i * 3 + 2] - initialPositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 42) {
          lineIndices.push(i, j);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.45;
      targetMouseY = y * 0.35;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Subtle dynamic field rotation & ambient float
      particles.rotation.y = elapsedTime * 0.04 + mouseX * 0.3;
      particles.rotation.x = mouseY * 0.25;
      lines.rotation.y = particles.rotation.y;
      lines.rotation.x = particles.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      lineGeometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-45"
      style={{
        maskImage: 'radial-gradient(circle at 55% 45%, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at 55% 45%, black 20%, transparent 80%)'
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Interactive Lightweight Three.js Canvas Backdrop */}
      <HeroCanvas />

      <div className="max-w-6xl mx-auto z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
        
        {/* Left Column: Text & Actions */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Engineering Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#121722]/80 text-xs font-mono text-zinc-400 mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>RV College of Engineering &bull; 9.85 CGPA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 mb-3"
          >
            Prabhjot Singh<span className="text-zinc-600">.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mb-6 w-full"
          >
            <Typewriter />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mb-8 leading-relaxed font-normal"
          >
            Pursuing a <span className="text-zinc-200 font-medium">Bachelor of Engineering in Computer Science and Engineering</span> at RV College of Engineering with a top-tier academic record. Architecting scalable full-stack web platforms, distributed backends, and applied AI systems with deep foundations in data structures and systems design.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full"
          >
            {/* Crisp Primary Action Button */}
            <a 
              href="/Prabhjot_Singh_Resume.pdf" 
              download="Prabhjot_Singh_Resume.pdf"
              className="bg-white text-zinc-950 hover:bg-zinc-200 transition font-medium px-5 py-2.5 rounded-lg text-sm inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            
            {/* Minimal Bento-Card Social Buttons */}
            <div className="flex items-center gap-2.5">
              <a 
                href="https://github.com/Code-with-Prabhjot" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="border border-white/[0.08] bg-[#121722]/80 hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-all p-2.5 rounded-lg"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/prabhjot-singh-88a683366/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="border border-white/[0.08] bg-[#121722]/80 hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-all p-2.5 rounded-lg"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://leetcode.com/u/Code-with-Prabhjot/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
                className="border border-white/[0.08] bg-[#121722]/80 hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-all p-2.5 rounded-lg"
              >
                <Code2 size={18} />
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Right Column: Refined Photo Card Treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          {/* Card Container with deep slate background, subtle border and sleek inner shadow */}
          <div className="relative w-56 sm:w-64 md:w-72 aspect-[3/4] rounded-2xl p-1 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent border border-white/[0.08] shadow-2xl group overflow-hidden">
            
            {/* Sleek Inner Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#121722]">
              <img 
                src="/PRABHJOT.png" 
                alt="Prabhjot Singh" 
                className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-transparent to-transparent pointer-events-none" />

              {/* Clean Location & Dev Role Status Tag (B.E. CSE removed to eliminate redundancy) */}
              <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-[#0b0f17]/90 backdrop-blur-md border border-white/[0.08] flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-300 pointer-events-none">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>Available for Dev Roles &bull; Bengaluru, IN</span>
              </div>
            </div>

            {/* Inset Ring for Razor-Sharp Edge */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
