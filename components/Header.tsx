'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".nav-logo", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" });
    gsap.fromTo(".nav-link", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.2 });
    gsap.fromTo(".nav-cta", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 });
  }, { scope: container });

  return (
    <nav ref={container} className="fixed top-0 w-full z-[100] bg-void/90 backdrop-blur-xl border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-8 h-[68px] flex items-center justify-between w-full">
        <div className="nav-logo mb-0">
          <motion.a
            href="#"
            className='flex items-center gap-3 group'
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="w-9 h-9 bg-gold rounded-sm flex items-center justify-center font-bebas text-lg text-void shadow-lg shadow-gold/10"
              variants={{
                initial: { rotate: 0, scale: 1 },
                hover: { rotate: 90, scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              JS
            </motion.div>
            <motion.span
              className="font-barlow text-xl font-bold tracking-tight text-ink"
              variants={{
                initial: { x: 0 },
                hover: { x: 4 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              SALAZAR
            </motion.span>
          </motion.a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Experience', 'Portfolio', 'Stack'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-[11px] font-bold tracking-[0.2em] uppercase text-ash hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="mailto:johncarlosacrosalazar@gmail.com"
            className="nav-cta px-6 py-2.5 bg-gold text-void font-barlow text-xs font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
