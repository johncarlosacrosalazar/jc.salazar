'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Portal from './Portal';

interface ImageModalProps {
  image: any;
  title: string;
  onClose: () => void;
}

export default function ImageModal({ image, title, onClose }: ImageModalProps) {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-void/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
      >
        <div
          className="absolute inset-0 cursor-zoom-out"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-7xl w-full max-h-[95vh] flex flex-col bg-card rounded-sm border border-gold/20 shadow-2xl overflow-hidden pointer-events-auto"
        >
          <div className="flex-shrink-0 relative z-[210] p-4 md:p-6 bg-void flex items-center justify-between border-b border-gold/10">
            <h3 className="font-bebas text-xl md:text-2xl text-ink tracking-wide">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 bg-gold text-void rounded-sm hover:brightness-110 transition-all shadow-lg"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative w-full flex-1 overflow-y-auto bg-void/50 custom-scrollbar">
            <Image
              src={image}
              alt={title}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </Portal>
  );
}
