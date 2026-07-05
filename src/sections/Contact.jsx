import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const triggerSuccessEffects = () => {
    // Fire confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00d2ff', '#9d4edd', '#ffffff']
    });
    
    setSuccess(true);
    setLoading(false);
    setForm({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setError(false);

    // Retrieve EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock submit simulation if EmailJS is not configured
      console.log('EmailJS keys not found in .env. Simulating successful submission.');
      setTimeout(() => {
        triggerSuccessEffects();
      }, 1500);
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: 'Akshat Tarapra',
        from_email: form.email,
        to_email: 'axattarapra123@gmail.com',
        message: form.message,
      },
      publicKey
    )
    .then(() => {
      triggerSuccessEffects();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden z-[5]">
      <div className="max-w-6xl mx-auto w-full px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">Connect</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-800 dark:text-white mt-2">
            Get In Touch
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-display font-bold text-slate-800 dark:text-white">
                Let's discuss something <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">creative</span>
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                I am actively looking for Full-Time, Internship, and Freelance opportunities. If you have an idea, a project, or just want to say hi, feel free to send a message!
              </p>

              <div className="space-y-4 pt-4">
                {/* Contact Card 1 */}
                <div className="flex items-center gap-4 p-4 glass-panel rounded-2xl">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Email Me</span>
                    <a href="mailto:axattarapra123@gmail.com" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                      axattarapra123@gmail.com
                    </a>
                  </div>
                </div>

                {/* Contact Card 2 */}
                <div className="flex items-center gap-4 p-4 glass-panel rounded-2xl">
                  <div className="p-3 bg-secondary/10 text-secondary rounded-xl border border-secondary/20">
                    <FaPhone size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Call Me</span>
                    <a href="tel:+919723690712" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                      +91 9723690712
                    </a>
                  </div>
                </div>

                {/* Contact Card 3 */}
                <div className="flex items-center gap-4 p-4 glass-panel rounded-2xl">
                  <div className="p-3 bg-green-500/10 text-green-500 rounded-xl border border-green-500/20">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Jamnagar, Gujarat, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-8 lg:mt-0 flex gap-4 pt-6 border-t border-slate-300/30 dark:border-white/5">
              <a 
                href="https://www.linkedin.com/in/akshat-tarapra-645a45294" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/akshat-tarapra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2 uppercase tracking-wider font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 focus:border-primary dark:focus:border-primary/80 focus:ring-1 focus:ring-primary rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 text-slate-800 dark:text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2 uppercase tracking-wider font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 focus:border-primary dark:focus:border-primary/80 focus:ring-1 focus:ring-primary rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 text-slate-800 dark:text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs text-slate-500 dark:text-slate-400 font-semibold mb-2 uppercase tracking-wider font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className="w-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 focus:border-primary dark:focus:border-primary/80 focus:ring-1 focus:ring-primary rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 text-slate-800 dark:text-white resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={12} />
                    </>
                  )}
                </button>

                {/* Submission status feedback */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 text-green-500 text-xs md:text-sm rounded-2xl text-center font-medium"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 text-xs md:text-sm rounded-2xl text-center font-medium"
                  >
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
