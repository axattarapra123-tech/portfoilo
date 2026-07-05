import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#020205] z-[99999] flex flex-col items-center justify-center font-display"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center max-w-sm w-full px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            AKSHAT TARAPRA
          </h1>
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mt-2 font-medium">
            Creative Developer
          </p>
        </motion.div>

        {/* Premium linear progress line */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-primary to-secondary"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-[10px] text-white/40 font-mono uppercase tracking-widest">
          <span>Compiling Portfolio</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
