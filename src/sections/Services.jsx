import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPython, FaMobileAlt, FaShoppingCart, FaTools, FaHandshake } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';

const Services = () => {
  const services = [
    {
      title: 'Full Stack / MERN Development',
      description: 'Building end-to-end scalable web applications using React, Node.js, Express, and MongoDB. Secure, high-performing, and designed to grow.',
      icon: <FaLaptopCode className="text-primary" size={24} />,
      list: ['RESTful API Architecture', 'JWT Authentication & Authorization', 'Database Schema Design (MongoDB)']
    },
    {
      title: 'Python Development',
      description: 'Creating backend services, utilities, and web applications using Python. Clean architectures, fast processing speeds, and optimal data management.',
      icon: <FaPython className="text-sky-500" size={24} />,
      list: ['Custom script writing', 'Automations & utilities', 'Database integrations (MySQL/SQLite)']
    },
    {
      title: 'Responsive Web Design',
      description: 'Designing pixel-perfect, mobile-responsive interfaces using Tailwind CSS and CSS3. Smooth transitions and layouts optimized for every screen size.',
      icon: <FaMobileAlt className="text-secondary" size={24} />,
      list: ['Mobile-first layout development', 'Interactive hover & scroll transitions', 'Modern UI styles (Glassmorphism)']
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Structuring responsive e-commerce web portals, featuring catalog navigation dashboards, secure shopping carts, and administration modules.',
      icon: <FaShoppingCart className="text-orange-500" size={24} />,
      list: ['Shopping cart mechanisms', 'Product inventory control desks', 'Client checkout user-flows']
    },
    {
      title: 'Maintenance & Optimization',
      description: 'Optimizing application performance, fixing bugs, and providing regular updates to keep your website fast, secure, and modern.',
      icon: <FaTools className="text-green-500" size={24} />,
      list: ['Lighthouse performance optimization', 'API bug tracking & troubleshooting', 'Code quality audits & upgrades']
    },
    {
      title: 'Freelance Collaborations',
      description: 'Partnering on remote software contracts, building bespoke landings pages, personal portfolio sites, and corporate presentation applications.',
      icon: <FaHandshake className="text-yellow-500" size={24} />,
      list: ['Bespoke Landing pages', 'Developer portfolio websites', 'Product showcase prototypes']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Offerings</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Services I Provide
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full" maxTilt={6}>
                <div className="h-full glass-panel p-6 rounded-3xl relative overflow-hidden shadow-lg border-b-2 hover:border-b-primary hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full blur-xl pointer-events-none" />
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-slate-200/50 dark:bg-white/5 border border-slate-300/30 dark:border-white/10 shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-display font-bold text-slate-800 dark:text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet list of details */}
                  <ul className="space-y-2 border-t border-slate-300/30 dark:border-white/5 pt-4">
                    {service.list.map((item, iIndex) => (
                      <li key={iIndex} className="text-[11px] text-slate-500 dark:text-slate-500 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
