import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'MDIDM Infoway',
      period: 'Jan 2026 - Present',
      description: 'Developing high-performance, responsive MERN Stack web applications. Collaborating with senior developers to architect APIs, implement secure JWT-based authentication, and optimize frontend rendering speed.',
      highlights: [
        'Building reusable frontend layouts using React.js and Tailwind CSS',
        'Designing REST APIs in Node.js and Express.js and integrating MongoDB databases',
        'Debugging legacy applications and improving lighthouse/loading performance',
        'Using Git for version control and collaborating in team agile sprints'
      ],
      techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Debugging', 'Git', 'Performance Optimization']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-4xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Work Experience
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-300 dark:border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-100 dark:bg-[#020205] border-2 border-primary flex items-center justify-center text-primary z-10 shadow-lg shadow-primary/20">
                <FaBriefcase size={10} className="animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full blur-xl" />
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      {exp.role}
                      <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 py-0.5 px-2 rounded-full uppercase tracking-wider font-semibold font-mono animate-pulse">
                        Current
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mt-1">
                      <FaBuilding className="text-secondary" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold bg-slate-200/50 dark:bg-white/5 py-1 px-3 rounded-full border border-slate-300 dark:border-white/5 self-start md:self-center">
                    <FaCalendarAlt className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-500 font-bold mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                      <FaCheckCircle className="text-primary mt-0.5 shrink-0" size={13} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-500 font-bold mb-3">
                  Skills & Tools Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/60 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 px-3 py-1 rounded-full hover:border-primary/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default Experience;
