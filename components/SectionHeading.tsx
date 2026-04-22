/**
 * SECTION HEADING COMPONENT
 * 
 * A reusable component for section titles across the portfolio.
 * Includes a stylized eyebrow text, a main title, and a decorative line.
 */

'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SectionHeadingProps {
  eyebrow: string; // Small text above the main title (e.g., "Showcase")
  title: string;   // Large main title (e.g., "Selected Work")
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Text Entrance (Slide up and fade in)
    gsap.from(".heading-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
      }
    });

    // 2. Decorative Line Animation (Scale from left)
    gsap.from(".heading-line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex items-end gap-6 mb-12">
      <div className="heading-content">
        {/* Eyebrow Text: Stylized with spacing and gold color */}
        <span className="font-barlow text-[12px] font-bold tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
        
        {/* Main Title: Large Bebas Neue font for impact */}
        <h2 className="font-bebas text-[48px] md:text-[64px] text-ink tracking-wide leading-none mt-1">{title}</h2>
      </div>
      
      {/* Decorative horizontal line that fades out */}
      <div className="heading-line flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent mb-3" />
    </div>
  );
}
