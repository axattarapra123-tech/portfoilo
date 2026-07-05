import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Medicine Reminder System',
      description: 'A full-stack medical reminder web application built with a responsive interface, secure JWT credentials, and complex cron scheduler mechanisms to dispatch email reminders.',
      features: [
        'Secure user registration & authentication',
        'Medicine scheduler & recurring reminder manager',
        'Full CRUD operations for calendar plans',
        'Interactive client dashboard & MongoDB backend integration'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Auth'],
      liveLink: '#',
      githubLink: 'https://github.com/akshat-tarapra', // placeholder
      gradient: 'from-blue-600/20 via-cyan-500/10 to-teal-400/5'
    },
    {
      title: 'E-Commerce Clothing Website',
      description: 'A comprehensive full-stack e-commerce marketplace featuring standard storefront displays, catalog control dashboards, and smooth scroll animations.',
      features: [
        'User/Admin authentication & authorization',
        'Persistent database-driven Shopping Cart',
        'Product & Catalog CRUD operations for store admins',
        'Lenis/Locomotive Smooth Scroll integrations'
      ],
      tech: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'Smooth Scroll'],
      liveLink: '#',
      githubLink: 'https://github.com/akshat-tarapra', // placeholder
      gradient: 'from-purple-600/20 via-pink-500/10 to-secondary/5'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <TiltCard className="h-full" maxTilt={4}>
                <div className={`h-full glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between`}>
                  
                  {/* Decorative glowing gradient backing */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 -z-10`} />
                  <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-bl-full blur-2xl pointer-events-none" />
                  
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        <FaCode size={18} />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-800 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-200/50 dark:bg-white/5 border border-slate-300/30 dark:border-white/10 px-2.5 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links Buttons */}
                    <div className="flex items-center gap-3 border-t border-slate-300/50 dark:border-white/5 pt-5">
                      <a
                        href={project.liveLink}
                        className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-primary/10 hover:bg-primary/25 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                        onClick={(e) => {
                          if (project.liveLink === '#') {
                            e.preventDefault();
                            alert("Demo site will be available soon!");
                          }
                        }}
                      >
                        <FaExternalLinkAlt size={11} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 text-xs font-semibold uppercase tracking-wider"
                      >
                        <FaGithub size={12} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
