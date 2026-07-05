import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-300/30 dark:border-white/5 bg-slate-200/20 dark:bg-[#020205]/40 py-10 z-[5] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand logo & Copyright */}
        <div className="text-center md:text-left">
          <span className="font-display font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary select-none">
            AT.
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 font-medium">
            &copy; {currentYear} Akshat Tarapra. All rights reserved.
          </p>
        </div>

        {/* Middle: Social Handles */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/akshat-tarapra-645a45294"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://github.com/akshat-tarapra"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
        </div>

        {/* Right: Scroll to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 group-hover:-translate-y-1 transition-transform duration-300">
              <FaArrowUp size={10} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
