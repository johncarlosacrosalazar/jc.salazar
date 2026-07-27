'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Services', 'Portfolio', 'Experience', 'Stack'];

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
          {navItems.map((item) => (
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

        <button
          type="button"
          onClick={() => setIsMenuOpen(open => !open)}
          className="md:hidden inline-flex w-11 h-11 items-center justify-center border border-gold/25 text-gold rounded-sm"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-gold/15 bg-void/98 px-8 py-6 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 font-barlow text-lg font-bold tracking-[0.18em] uppercase text-ink border-b border-ink/5 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center justify-between gap-4 pt-4">
              <ThemeToggle />
              <a
                href="mailto:johncarlosacrosalazar@gmail.com?subject=Project%20Inquiry"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center px-6 py-3 bg-gold text-void font-barlow text-xs font-bold tracking-widest uppercase rounded-sm"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
