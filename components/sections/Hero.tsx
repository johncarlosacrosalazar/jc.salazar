/**
 * HERO SECTION
 * 
 * Features:
 * - GSAP Entrance Timeline (Text reveal, image scale-in)
 * - Parallax background effects (SVG circles moving on scroll)
 * - Responsive layout (Stack on mobile, side-by-side on desktop)
 */

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { hero } from '@/constants/portfolio-data';

export default function Hero() {
  // Use a ref for the container to scope GSAP animations
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Initial Entrance Animation
    tl.from(".hero-line", {
      width: 0,
      duration: 1,
      ease: "power3.inOut"
    })
      .fromTo(".hero-sub", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.2")
      .fromTo(".hero-title span", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power4.out" }, "-=0.4")
      .fromTo(".hero-p", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-stat", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-btn", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.2")
      .fromTo(".hero-img-container", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "0.2")
      .fromTo(".hero-bg-svg circle", { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.4, duration: 2, stagger: 0.2, ease: "elastic.out(1, 0.75)" }, "0");

    // 2. Continuous Background Loop (Slow rotation of technical circles)
    gsap.to(".hero-bg-svg circle", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 60,
      repeat: -1,
      ease: "none"
    });

    // 3. Scroll-Linked Parallax (Background elements shift as user scrolls)
    gsap.to(".hero-bg-svg", {
      y: 100,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Individual circle parallax for depth
    const circles = gsap.utils.toArray<SVGCircleElement>(".hero-bg-svg circle");
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        y: (i + 1) * 30,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex flex-col pt-[68px] overflow-hidden">
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-void/50" />

      {/* Decorative Technical Background SVGs */}
      <div className="hero-bg-svg absolute top-0 right-0 w-[1100px] h-[800px] opacity-[0.25] pointer-events-none z-[1]">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="399" stroke="#FFD700" strokeWidth="2" strokeDasharray="10 20" />
          <circle cx="400" cy="400" r="300" stroke="#FFD700" strokeWidth="1" strokeDasharray="5 15" />
          <circle cx="400" cy="400" r="399" stroke="#FFD700" strokeWidth="3" strokeDasharray="10 20" />
          <circle cx="400" cy="400" r="300" stroke="#FFD700" strokeWidth="2" strokeDasharray="5 15" />
          <circle cx="400" cy="400" r="200" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M400 0 V800 M0 400 H800" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
          <path d="M117 117 L683 683 M117 683 L683 117" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
        </svg>
      </div>
      
      {/* Subtle Glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-[0.25] pointer-events-none z-[1]" style={{ background: 'radial-gradient(ellipse at bottom, rgba(255,215,0,0.2) 0%, transparent 70%)' }} />

      {/* Side Accent Line */}
      <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-gold to-transparent z-[1]" />

      <div className="max-w-7xl mx-auto w-full px-8 py-16 grid lg:grid-cols-2 gap-16 items-center flex-1 relative z-[2]">
        {/* Text Content Area */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="hero-line w-12 h-0.5 bg-gold" />
            <span className="hero-sub font-barlow text-sm font-bold tracking-[0.3em] uppercase text-gold">
              Full-Stack Developer for Growing Businesses
            </span>
          </div>

          <h1 className="hero-title font-bebas text-[80px] md:text-[120px] leading-[0.85] tracking-tight mb-8 overflow-hidden">
            <span className="text-ink block mb-2">John Carlo</span>
            <span className="gold-stroke block">Salazar.</span>
          </h1>

          <p className="hero-p text-lg leading-relaxed text-ash max-w-lg mb-10 border-l-4 border-gold pl-6">
            I build reliable websites, online academies, business portals, and AI automations that help companies launch faster and operate smarter.
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            <div className="hero-stat flex items-center gap-3 text-steel text-sm">
              <MapPin size={18} className="text-gold" />
              <span className="font-medium">Trece Martires, PH</span>
            </div>
            <div className="hero-stat flex items-center gap-3 text-steel text-sm">
              <Award size={18} className="text-gold" />
              <span className="font-medium">10+ Years Exp</span>
            </div>
            <div className="hero-stat flex items-center gap-3 text-steel text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              <span className="font-medium">Available for Client Projects</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="mailto:johncarlosacrosalazar@gmail.com?subject=Project%20Inquiry" className="hero-btn inline-flex items-center gap-3 px-10 py-4 bg-gold text-void font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-gold/10">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="hero-btn inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-ink font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:border-gold transition-all">
              <Mail size={18} /> See Client Work
            </a>
          </div>
        </div>

        {/* Profile Image Area */}
        <div className="hero-img-container relative hidden lg:flex justify-end h-[600px]">
          {/* Background Card Accent */}
          <div className="absolute inset-0 bg-card/50 translate-x-6 translate-y-6 rounded-sm border border-white/5" />
          
          {/* Image Wrapper with Hover Effect */}
          <div className="relative z-[2] w-full h-full overflow-hidden rounded-sm border border-gold/20 shadow-2xl group cursor-crosshair">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              transition={{ duration: 0.6, ease: "circOut" }}
            >
              <Image
                src={hero}
                alt="John Carlo Salazar - Lead Web Developer and Systems Architect"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <p className="font-barlow text-xs font-bold tracking-[0.4em] text-gold uppercase">Systems Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
