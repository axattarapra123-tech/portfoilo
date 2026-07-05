import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import profileImg from '../assets/profile.jpg';
import Magnetic from '../components/Magnetic';
import TiltCard from '../components/TiltCard';

const TypingAnimation = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words]);

  // Cursor blink
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <span className="relative inline-block min-h-[32px] md:min-h-[44px]">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary font-bold">
        {words[index].substring(0, subIndex)}
      </span>
      <span 
        className={`ml-1 inline-block w-[3px] h-[1.1em] align-middle bg-primary transition-opacity duration-100 ${
          blink ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
};

const Hero = () => {
  const roles = ['MERN Stack Developer', 'Python Developer', 'Freelancer'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-[5]"
    >
      <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-widest mb-6">
              Welcome to my space
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-4 text-slate-800 dark:text-white"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">Akshat Tarapra</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-600 dark:text-slate-300 mb-6 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-2"
          >
            <span>Full Stack Developer |</span>
            <TypingAnimation words={roles} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Passionate MERN Stack & Python Developer specializing in building modern, responsive, and highly scalable web applications. Currently working as an intern, striving to write beautiful code.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Magnetic>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative flex items-center gap-2 py-3.5 px-7 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-secondary/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Hire Me</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" size={13} />
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              </button>
            </Magnetic>

            <Magnetic>
              <button
                onClick={() => scrollToSection('projects')}
                className="py-3.5 px-7 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white font-semibold text-sm hover:bg-slate-200 dark:hover:bg-white/10 hover:border-primary dark:hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                View Projects
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href="/Akshat_Tarapra_Resume.pdf"
                download="Akshat_Tarapra_Resume.pdf"
                className="flex items-center gap-2 py-3.5 px-6 rounded-full bg-transparent border border-dashed border-slate-400 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-semibold text-xs uppercase tracking-widest hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer"
                onClick={() => {
                  confetti({
                    particleCount: 70,
                    spread: 60,
                    origin: { y: 0.8 },
                    colors: ['#00d2ff', '#9d4edd', '#ffffff']
                  });
                }}
              >
                <FaDownload size={11} />
                <span>Resume</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Photo Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Visual background decorations */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 dark:opacity-30 animate-pulse-glow" />
            
            <TiltCard maxTilt={6}>
              <div className="relative glass-panel p-3.5 rounded-3xl overflow-hidden shadow-2xl max-w-[280px] sm:max-w-[340px]">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/15 pointer-events-none rounded-2xl" />
                <img 
                  src={profileImg} 
                  alt="Akshat Tarapra" 
                  className="w-full h-auto object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 aspect-[3/4]"
                  loading="eager"
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-primary transition-colors duration-300 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FaChevronDown size={12} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
