import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaBookReader } from 'react-icons/fa';
import GlassCard from '../components/TiltCard';

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const About = () => {
  const infoItems = [
    { icon: <FaMapMarkerAlt className="text-primary" />, label: 'Location', value: 'Kalavad, Jamnagar, Gujarat, India' },
    { icon: <FaEnvelope className="text-primary" />, label: 'Email', value: 'axattarapra123@gmail.com', isLink: true, href: 'mailto:axattarapra123@gmail.com' },
    { icon: <FaPhone className="text-primary" />, label: 'Phone', value: '+91 9723690712', isLink: true, href: 'tel:+919723690712' },
    { icon: <FaLinkedin className="text-primary" />, label: 'LinkedIn', value: 'Akshat Tarapra', isLink: true, href: 'https://www.linkedin.com/in/akshat-tarapra-645a45294' },
  ];

  const stats = [
    { value: 15, suffix: '+', label: 'Technologies Mastered' },
    { value: 5, suffix: '+', label: 'Projects Completed' },
    { value: 1, suffix: '', label: 'Internship Experience' },
    { value: 500, suffix: '+', label: 'Hours of Coding' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Get To Know Me
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-slate-800 dark:text-slate-200">
              I'm <span className="text-primary">Akshat Tarapra</span>, a Full Stack Developer
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a B.Sc. Information Technology graduate with hands-on experience in MERN Stack and Python Full Stack Development. I enjoy creating modern, responsive, and highly scalable web applications that deliver exceptional user experiences.
            </p>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently, I am working as a Full Stack Developer Intern at <strong className="text-secondary dark:text-secondary-light">MDIDM Infoway</strong>, where I actively build MERN stack solutions. I am highly motivated and actively looking for full-time, internship, and freelance opportunities where I can apply my skills and build premium products.
            </p>

            <div className="pt-4 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <FaBookReader className="text-primary" />
              <span>B.Sc. IT Graduate (2023 - 2026) | Harivandana College</span>
            </div>
          </motion.div>

          {/* Details Box */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              
              <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-300 dark:border-white/10 pb-3">
                Contact & Details
              </h4>
              
              <ul className="space-y-5">
                {infoItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider">{item.label}</span>
                      {item.isLink ? (
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200 break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 break-all">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl text-center border-b-2 hover:border-b-primary transition-all duration-300"
            >
              <h4 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mb-1">
                <AnimatedCounter value={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </h4>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
