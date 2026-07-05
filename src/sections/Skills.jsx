import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaPython, FaPhp, FaDatabase, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const skillsData = {
  frontend: [
    { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', level: 88, icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'React.js', level: 85, icon: <FaReact className="text-sky-500" /> },
    { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Bootstrap', level: 85, icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'Responsive Design', level: 92, icon: <div className="w-5 h-5 border border-primary rounded flex items-center justify-center text-[10px] font-bold">RD</div> },
  ],
  backend: [
    { name: 'Node.js', level: 82, icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', level: 80, icon: <SiExpress className="text-slate-400" /> },
    { name: 'Python', level: 78, icon: <FaPython className="text-sky-600" /> },
    { name: 'PHP', level: 70, icon: <FaPhp className="text-indigo-500" /> },
    { name: 'REST APIs', level: 88, icon: <div className="w-5 h-5 border border-primary rounded flex items-center justify-center text-[10px] font-bold">API</div> },
    { name: 'Authentication', level: 85, icon: <div className="w-5 h-5 border border-primary rounded flex items-center justify-center text-[10px] font-bold">AUTH</div> },
  ],
  database: [
    { name: 'MongoDB', level: 82, icon: <SiMongodb className="text-green-600" /> },
    { name: 'MySQL', level: 85, icon: <SiMysql className="text-sky-600" /> },
  ],
  tools: [
    { name: 'Git', level: 88, icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', level: 90, icon: <FaGithub className="text-slate-300 dark:text-white" /> },
    { name: 'VS Code', level: 92, icon: <TbBrandVscode className="text-blue-500" /> },
    { name: 'Postman', level: 85, icon: <SiPostman className="text-orange-500" /> },
    { name: 'MongoDB Compass', level: 80, icon: <SiMongodb className="text-green-600" /> },
    { name: 'XAMPP', level: 75, icon: <div className="w-5 h-5 border border-orange-500 rounded flex items-center justify-center text-[9px] font-bold">XAMP</div> },
  ]
};

const SkillBar = ({ name, level, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-panel p-5 rounded-2xl relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl p-1.5 rounded-lg bg-slate-200/50 dark:bg-white/5 border border-slate-300/30 dark:border-white/5">
            {icon}
          </div>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{name}</span>
        </div>
        <span className="text-xs font-mono font-bold text-primary">{level}%</span>
      </div>
      
      {/* Track */}
      <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            My Skillset
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative py-2.5 px-6 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === cat.id
                  ? 'text-white border-transparent bg-gradient-to-r from-primary to-secondary shadow-md shadow-primary/20'
                  : 'text-slate-600 dark:text-slate-400 border-slate-300 dark:border-white/10 bg-slate-200/30 dark:bg-white/5 hover:border-primary dark:hover:border-primary/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid container */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeTab].map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
