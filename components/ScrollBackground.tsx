'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollBackground() {
  const container = useRef(null);

  useGSAP(() => {
    // Parallax for circles
    gsap.to(".bg-circle-1", {
      y: -1200,
      rotation: 180,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      }
    });

    gsap.to(".bg-circle-2", {
      y: -1800,
      rotation: -240,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Parallax for lines
    gsap.to(".bg-lines", {
      y: -1600,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Parallax for dots
    gsap.to(".bg-dots", {
      y: -800,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    // Fade in the background elements with specific opacityTargets (Subtle Visibility)
    gsap.fromTo(".bg-circle-1", { opacity: 0 }, { opacity: 0.15, duration: 1.5, ease: "power2.out" });
    gsap.fromTo(".bg-circle-2", { opacity: 0 }, { opacity: 0.12, duration: 1.5, ease: "power2.out" });
    gsap.fromTo(".bg-lines", { opacity: 0 }, { opacity: 0.08, duration: 1.5, ease: "power2.out" });
    gsap.fromTo(".bg-dots", { opacity: 0 }, { opacity: 0.06, duration: 1.5, ease: "power2.out" });

    // Ensure recalculation after initial render
    ScrollTrigger.refresh();
  });

  return (
    <div ref={container} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="bg-circle-1 absolute -top-20 -left-20 w-[600px] h-[600px] border border-gold/25 rounded-full" />
      <div className="bg-circle-2 absolute top-1/2 -right-40 w-[800px] h-[800px] border border-gold/25 rounded-full" />

      <div className="bg-dots absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFD700 2px, transparent 2px)',
          backgroundSize: '80px 80px'
        }}
      />

      <svg className="bg-lines absolute inset-0 w-full h-[200%]">
        <line x1="0" y1="10%" x2="100%" y2="30%" stroke="#FFD700" strokeWidth="2.5" />
        <line x1="0" y1="40%" x2="100%" y2="60%" stroke="#FFD700" strokeWidth="2.5" />
        <line x1="20%" y1="0" x2="50%" y2="100%" stroke="#FFD700" strokeWidth="2.5" />
        <line x1="80%" y1="0" x2="40%" y2="100%" stroke="#FFD700" strokeWidth="2.5" />
      </svg>
    </div>
  );
}
