'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if images are already cached/loaded
    const checkAssets = () => {
      const images = Array.from(document.images);
      if (images.length === 0) return true;
      return images.every(img => img.complete);
    };

    const isCached = checkAssets() && document.readyState === 'complete';

    if (isCached) {
      setTimeout(() => {
        setIsLoading(false);
        setShouldRender(false);
      }, 0);
      return;
    }
    
    const handleLoad = () => {
      // Minimum loading time to show the animation (only if it wasn't cached)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(safetyTimer);
      };
    }
  }, []);

  // Sync scroll lock and visibility class
  useEffect(() => {
    if (isLoading && shouldRender) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('loading-active');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('loading-active');
    }
  }, [isLoading, shouldRender]);

  if (!isLoading || !shouldRender) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          id="page-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { 
              duration: 1, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-void"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              {/* Outer Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="absolute inset-0 bg-gold/5 blur-3xl rounded-full"
              />
              
              <div className="relative flex items-center gap-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.76, 0, 0.24, 1] 
                  }}
                  className="w-20 h-20 bg-gold rounded-sm flex items-center justify-center font-bebas text-4xl text-void shadow-2xl shadow-gold/20"
                >
                  JS
                </motion.div>
                
                <div className="flex flex-col overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.4, 
                      ease: [0.76, 0, 0.24, 1] 
                    }}
                    className="font-barlow text-5xl font-bold tracking-tight text-ink"
                  >
                    SALAZAR
                  </motion.span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6, 
                      ease: [0.76, 0, 0.24, 1] 
                    }}
                    className="h-[1px] bg-gold/40 w-full origin-left"
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8, 
                    }}
                    className="font-barlow text-[10px] tracking-[0.5em] text-gold/80 uppercase mt-1 ml-1"
                  >
                    Systems Architect
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="relative w-64 h-[2px] bg-gold/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ 
                   duration: 2, 
                   ease: "easeInOut" 
                 }}
                 className="absolute inset-y-0 left-0 bg-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]"
               />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[10px] font-medium tracking-widest text-ash uppercase"
            >
              Initializing Experience...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
