import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden mb-4 border transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left font-sans font-semibold text-sm md:text-base text-slate-700 dark:text-slate-200 hover:text-primary transition-colors duration-200"
      >
        <span className="flex items-center gap-3">
          <FaQuestionCircle className="text-primary shrink-0" size={16} />
          <span>{question}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400"
        >
          <FaChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-5 md:p-6 pt-0 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-300/30 dark:border-white/5 bg-slate-200/20 dark:bg-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your primary technology stack?',
      answer: 'My primary stack is the MERN Stack (MongoDB, Express.js, React.js, and Node.js) along with Python. I also work with MySQL, PHP, HTML5, CSS3, JavaScript, and Tailwind CSS. I enjoy building modern APIs, secure systems, and responsive web designs.'
    },
    {
      question: 'What kind of opportunities are you looking for?',
      answer: 'I am actively looking for Full-Time developer roles, Internship positions, and Freelance projects. I am excited to contribute to professional dev teams, build scalable code, and collaborate on premium products.'
    },
    {
      question: 'Can you work remotely or relocate?',
      answer: 'Yes! I am open to both. I can work fully remotely from Jamnagar/Gujarat, or relocate for on-site/hybrid opportunities. I adapt quickly to new workflows and team setups.'
    },
    {
      question: 'Are you available for freelance projects?',
      answer: 'Yes, I am available for freelance work! I design landing pages, business portfolio websites, custom e-commerce stores, responsive UI designs, and assist in bug-fixing and website maintenance.'
    },
    {
      question: 'How can we get in touch with you?',
      answer: 'You can reach me directly via the Contact Form on this site, email me at axattarapra123@gmail.com, or call/message me at +91 9723690712. You can also connect with me on LinkedIn!'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-3xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Questions</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Frequently Asked
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
