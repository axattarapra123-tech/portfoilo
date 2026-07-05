import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Education from './sections/Education';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // default dark
  });

  // Toggle theme callback
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Sync class name on body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Init Lenis smooth scroll
  useEffect(() => {
    if (loading) return; // Wait until loader closes
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const progress = (window.scrollY / total) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Loading preloader */}
      <AnimatePresence>
        {loading && <Loader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main website wrappers */}
      {!loading && (
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#020205] text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans selection:bg-primary/30 selection:text-white">
          
          {/* Scroll Progress Indicator Bar */}
          <div 
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-secondary z-[100] transition-all duration-100 ease-out" 
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Custom lagging Cursor */}
          <CustomCursor />

          {/* Interactive particles background */}
          <ParticleBackground isDarkMode={isDarkMode} />

          {/* Header Navbar */}
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          {/* Sections layout wrapper */}
          <main className="relative z-10 max-w-7xl mx-auto">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Education />
            <FAQ />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

        </div>
      )}
    </>
  );
}

export default App;
