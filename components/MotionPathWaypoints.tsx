'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

const MotionPathWaypoints = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !boxRef.current || !startRef.current) return;

    const container = containerRef.current;
    const box = boxRef.current;
    const startPoint = startRef.current;
    
    const getRelativeCenter = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      return {
        x: (rect.left + rect.width / 2) - containerRect.left,
        y: (rect.top + rect.height / 2) - containerRect.top
      };
    };

    const startCenter = getRelativeCenter(startPoint);
    gsap.set(box, { 
      x: startCenter.x - (box.offsetWidth / 2), 
      y: startCenter.y - (box.offsetHeight / 2),
      opacity: 1 
    });

    const waypoints = gsap.utils.toArray<HTMLElement>('.background-waypoint');
    
    const points = waypoints.map((w) => {
      const center = getRelativeCenter(w);
      return {
        x: center.x - (box.offsetWidth / 2),
        y: center.y - (box.offsetHeight / 2)
      };
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    tl.to(box, {
      motionPath: {
        path: points,
        curviness: 2,
        autoRotate: true
      },
      duration: 1,
      ease: "none"
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 z-[1] pointer-events-none overflow-hidden h-full w-full">
      {/* Moving Geometric Object */}
      <div 
        ref={boxRef} 
        className="absolute top-0 left-0 w-12 h-12 z-[5] opacity-0"
      >
        <div className="w-full h-full bg-gold/80 rounded-full blur-[2px] shadow-[0_0_30px_rgba(255,215,0,0.5)] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-void">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Grid Pattern Background - Full Page */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="bg-journey-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#FFD700" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bg-journey-grid)" />
        </svg>
      </div>

      {/* Background Markers (Subtle) */}
      <div className="relative w-full h-full">
        {/* Start */}
        <div ref={startRef} className="absolute left-[85%] top-[5%] w-4 h-4 rounded-full border border-gold/20" />
        
        {/* Spread markers across the page height */}
        <div className="background-waypoint absolute left-[10%] top-[15%] w-2 h-2 rounded-full bg-gold/10" />
        <div className="background-waypoint absolute left-[80%] top-[30%] w-2 h-2 rounded-full bg-gold/10" />
        <div className="background-waypoint absolute left-[15%] top-[45%] w-2 h-2 rounded-full bg-gold/10" />
        <div className="background-waypoint absolute left-[70%] top-[60%] w-2 h-2 rounded-full bg-gold/10" />
        <div className="background-waypoint absolute left-[20%] top-[75%] w-2 h-2 rounded-full bg-gold/10" />
        <div className="background-waypoint absolute left-[75%] top-[85%] w-2 h-2 rounded-full bg-gold/10" />
        <div className="background-waypoint absolute left-[10%] top-[95%] w-4 h-4 rounded-full border border-gold/20" />
      </div>
    </div>
  );
};

export default MotionPathWaypoints;
