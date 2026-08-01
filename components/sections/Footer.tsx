/**
 * FOOTER SECTION
 * 
 * Features:
 * - Geometric pulsing background animation
 * - Contact links with hover effects
 * - Corner decorative accents
 * - Responsive multi-column layout for contact options
 */

'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Entrance animation for content
    gsap.from(".footer-content > *", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 80%",
      }
    });

    // 2. Continuous Pulsing SVG Background
    gsap.to(".footer-bg circle", {
      scale: 1.2,
      opacity: 0.1,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true
      },
      duration: 3,
      ease: "sine.inOut"
    });

    // 3. Scroll-linked Background Fade-in
    gsap.from(".footer-bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <footer id="contact" ref={container} className="relative bg-void border-t border-gold/10 py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Footer SVG Technical Background */}
      <div className="footer-bg absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none z-0 flex items-center justify-center">
        <svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD700" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" opacity="0.2" />
          <circle cx="500" cy="200" r="100" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="500" cy="200" r="150" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="10 20" />
          <circle cx="500" cy="200" r="200" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="500" cy="200" r="250" fill="none" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="20 40" />
          <circle cx="500" cy="200" r="400" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 16" />

          {/* Crosshair/Technical Accents */}
          <path d="M500 0 V400 M0 200 H1000" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
          <path d="M300 100 L320 100 M310 90 L310 110" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M700 300 L720 300 M710 290 L710 310" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M200 300 L220 300 M210 290 L210 310" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M800 100 L820 100 M810 90 L810 110" stroke="#FFD700" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Frame Decorative Accents */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-gold/20 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-gold/20 pointer-events-none hidden sm:block" />

      <div className="footer-content max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10">
        <div>
          <span className="font-barlow text-xs sm:text-sm font-bold tracking-[0.4em] sm:tracking-[0.5em] text-gold uppercase">Contact</span>
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-9xl text-ink leading-tight mt-2 sm:mt-4">LET&apos;S BUILD IT.</h2>
          <p className="text-ash text-sm sm:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2">Tell me what you want to launch, improve, or automate. I’ll reply with practical next steps for your project.</p>
          <p className="font-barlow text-base sm:text-2xl text-gold mt-4 sm:mt-5 low-tracking select-all break-all sm:break-normal">johncarlosacrosalazar@gmail.com</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 w-full">
          <a href="mailto:johncarlosacrosalazar@gmail.com?subject=Project%20Inquiry&amp;body=Hi%20John%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project.%0A%0AProject%20type%3A%0ATimeline%3A%0ABudget%20range%3A" className="px-8 sm:px-10 py-4 sm:py-5 bg-gold text-void font-barlow text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm hover:-translate-y-1 transition-all shadow-xl shadow-gold/10 flex items-center justify-center gap-3 w-full md:w-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            Start a Project
          </a>
          <a href="https://wa.me/639273315906" target="_blank" rel="noopener noreferrer" className="px-8 sm:px-10 py-4 sm:py-5 border border-ink/10 text-ink font-barlow text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm hover:border-gold/30 hover:text-gold transition-all flex items-center justify-center gap-3 w-full md:w-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            WhatsApp
          </a>
        </div>

        <p className="text-coal font-barlow text-[10px] tracking-[0.4em] sm:tracking-[0.6em] uppercase pt-8 sm:pt-12">
          Precision Engineering · John Carlo Salazar · 2026
        </p>
      </div>
    </footer>
  );
}
