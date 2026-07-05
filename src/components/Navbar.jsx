import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 250;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Allow scroll spying to pause temporarily or scroll naturally
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[99] transition-all duration-500 ${
          scrolled ? 'py-3 px-4 md:px-8' : 'py-5 px-6 md:px-12'
        }`}
      >
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between py-3 px-6 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'glass-panel shadow-lg shadow-black/10 dark:shadow-black/35 backdrop-blur-md' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-display font-extrabold cursor-pointer tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary select-none"
          >
            AT.
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 py-2 px-4 rounded-full ${
                  activeSection === link.id 
                    ? 'text-primary dark:text-primary font-bold' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/5 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Dark Mode toggle */}
            <div className="w-[1px] h-5 bg-slate-300 dark:bg-slate-800 mx-2" />
            
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-400 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-slate-200/50 dark:bg-white/5 text-slate-800 dark:text-slate-300 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-[74px] left-0 z-[98] w-full glass-panel-heavy p-8 border-b border-slate-200 dark:border-white/10 flex flex-col md:hidden items-center shadow-2xl"
          >
            <div className="flex flex-col space-y-6 text-center w-full max-w-xs">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-display font-semibold uppercase tracking-widest py-2 rounded-xl transition-all duration-200 ${
                    activeSection === link.id 
                      ? 'text-primary bg-primary/5 font-bold shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-primary'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
