import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaBookmark } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';

const Education = () => {
  const educations = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Harivandana College',
      university: 'Saurashtra University',
      period: '2023 - 2026',
      description: 'Acquired core competencies in software engineering, database management, and web programming. Developed a deep understanding of standard software architectures, object-oriented concepts, and data structures.',
      courses: [
        'Web Application Development',
        'Database Management Systems (RDBMS)',
        'Object-Oriented Programming',
        'Software Engineering Principles'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-4xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Qualifications</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Education
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <TiltCard maxTilt={3}>
                <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full blur-xl pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Cap Icon */}
                      <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                        <FaGraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-bold text-slate-800 dark:text-white leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mt-1">
                          <FaUniversity className="text-secondary" />
                          <span>{edu.institution} | {edu.university}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold bg-slate-200/50 dark:bg-white/5 py-1 px-3 rounded-full border border-slate-300 dark:border-white/5 self-start md:self-center shrink-0">
                      <FaCalendarAlt className="text-primary" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-500 font-bold mb-3 flex items-center gap-2">
                    <FaBookmark className="text-primary" size={10} />
                    <span>Relevant Coursework</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.courses.map((course, cIndex) => (
                      <div
                        key={cIndex}
                        className="text-xs md:text-sm text-slate-600 dark:text-slate-400 bg-slate-200/40 dark:bg-white/5 border border-slate-300/30 dark:border-white/10 py-2.5 px-4 rounded-xl flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{course}</span>
                      </div>
                    ))}
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

export default Education;
