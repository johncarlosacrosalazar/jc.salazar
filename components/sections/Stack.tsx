/**
 * TECHNICAL STACK SECTION
 * 
 * Features:
 * - Categorized list of technical skills
 * - Sidecards for Leadership and QA highlights
 * - Geometric background SVGs with scroll-linked rotation
 */

'use client';

import React, { useRef } from 'react';
import { Users, Shield } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionHeading from '../SectionHeading';

export default function Stack() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Main Card Entrance (Slide from left)
    gsap.from(".stack-card", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stack-card",
        start: "top 85%",
      }
    });

    // 2. Sidebar Cards Entrance (Staggered slide from bottom)
    gsap.from(".stack-sidebar > div", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stack-sidebar",
        start: "top 85%",
      }
    });

    // 3. Scroll-linked Background Rotation
    gsap.to(".stack-bg-svg", {
      rotation: 180,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section id="stack" ref={container} className="relative bg-void py-24 px-8 overflow-hidden">
      {/* Background Technical Hexagon Pattern */}
      <div className="stack-bg-svg absolute -right-32 bottom-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 10 L190 50 L190 150 L100 190 L10 150 L10 50 Z" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100 30 L170 65 L170 135 L100 170 L30 135 L30 65 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="10" y1="50" x2="190" y2="150" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="10" y1="150" x2="190" y2="50" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <SectionHeading eyebrow="Capabilities" title="Technical Stack" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Capabilities Grid */}
          <div className="stack-card lg:col-span-2 p-12 bg-card/40 border-l-4 border-gold rounded-sm space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: 'Frontend', items: ['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'TS'] },
                { label: 'Backend', items: ['Node.js', 'Laravel', 'PHP', 'AWS Lambda'] },
                { label: 'E-Commerce & LMS', items: ['WordPress', 'WooCommerce', 'LearnPress', 'GoHighLevel'] },
                { label: 'Quality', items: ['Manual/Auto QA', 'CI/CD', 'Git Ops'] },
              ].map(cat => (
                <div key={cat.label}>
                  <h4 className="font-barlow text-sm font-bold text-gold tracking-widest uppercase mb-4">{cat.label}</h4>
                  <ul className="space-y-3">
                    {cat.items.map(it => (
                      <li key={it} className="flex items-center gap-3 text-ink/70">
                        <div className="w-1 h-1 bg-gold/50 rounded-full" />
                        <span className="text-sm font-medium">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="stack-sidebar space-y-8">
            <div className="p-8 bg-card/20 border border-ink/5 rounded-sm">
              <Users className="text-gold mb-4" size={32} />
              <h3 className="font-barlow text-xl font-bold text-ink mb-2">Team Leadership</h3>
              <p className="text-sm text-ash leading-relaxed">Experienced in managing delivery teams for high-stakes Singaporean projects.</p>
            </div>
            <div className="p-8 bg-card/20 border border-ink/5 rounded-sm">
              <Shield className="text-sky-400 mb-4" size={32} />
              <h3 className="font-barlow text-xl font-bold text-ink mb-2">Enterprise QA</h3>
              <p className="text-sm text-ash leading-relaxed">Two cycles at Temasek Holdings for flagship digital report launches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
