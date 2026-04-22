/**
 * EXPERIENCE SECTION
 * 
 * Features:
 * - Vertical timeline with a scroll-linked progress line
 * - Experience cards with priority highlighting
 * - Staggered entrance animations for career items
 */

'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionHeading from '../SectionHeading';
import { experiences } from '@/constants/portfolio-data';

export default function Experience() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Vertical Progress Line Animation
    // The line scales down as the user scrolls through the experience list
    gsap.from(".exp-progress-line", {
      scaleY: 0,
      transformOrigin: "top center",
      scrollTrigger: {
        trigger: ".exp-list",
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,
      }
    });

    // 2. Individual Item Entrance
    const items = gsap.utils.toArray<HTMLElement>(".exp-item");
    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        }
      });
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container} className="relative bg-transparent py-24 px-8 overflow-hidden">
      {/* Background Grid Pattern Accent */}
      <div className="absolute top-24 -left-64 w-[500px] h-[500px] opacity-[0.02] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FFD700" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid1)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <SectionHeading eyebrow="Chronicle" title="Career Path" />

        <div className="exp-list relative space-y-6">
          {/* Base Vertical Line (The track) */}
          <div className="absolute left-[8px] top-4 bottom-4 w-[2px] bg-ink/5 z-0" />
          
          {/* Animated Progress Line (The fill) */}
          <div className="exp-progress-line absolute left-[8px] top-4 bottom-4 w-[2px] bg-gold z-0" />
          
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-item relative p-8 md:p-10 ml-8 md:ml-12 rounded-sm border-l-4 transition-all hover:bg-card/40 overflow-hidden ${exp.highlight ? 'bg-gold/[0.02] border-gold' : 'bg-card/20 border-gold/15 hover:border-gold/30'
                }`}
            >
              {/* Geometric Decorative Accent inside the card */}
              <div className="absolute -right-16 -top-16 w-32 h-32 opacity-[0.05] pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="#FFD700" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                <div>
                  <span className="font-barlow text-[10px] font-bold tracking-widest uppercase text-gold/60">{exp.period}</span>
                  <h3 className="font-barlow text-3xl font-bold text-ink mt-1 tracking-tight">{exp.company}</h3>
                  <p className="text-sm font-bold text-gold uppercase tracking-widest mt-1">{exp.role}</p>
                </div>
                {exp.highlight && (
                  <span className="px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest rounded-sm h-fit">
                    ★ Priority
                  </span>
                )}
              </div>
              <p className="text-ash leading-relaxed mb-6">{exp.desc}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-ink/5 text-steel-light text-[10px] font-bold uppercase tracking-widest rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
