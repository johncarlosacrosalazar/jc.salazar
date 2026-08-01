/**
 * HERO SECTION
 * 
 * Features:
 * - Conversion-focused headline & outcome-based value proposition
 * - GSAP Entrance Timeline (Text reveal, image scale-in, floating badges)
 * - Parallax background effects (SVG circles moving on scroll)
 * - Floating authority cards over portrait
 * - Trust Badges & Brand Highlight Strip for social proof
 * - Responsive layout (Stack on mobile, side-by-side on desktop)
 */

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Award, CheckCircle2, Sparkles, ShieldCheck, Briefcase } from 'lucide-react';
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
      .fromTo(".hero-badge", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }, "-=0.6")
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

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 pt-10 sm:pt-16 pb-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center flex-1 relative z-[2]">
        {/* Text Content Area */}
        <div>
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="hero-line w-8 sm:w-12 h-0.5 bg-gold" />
            <span className="hero-sub font-barlow text-[11px] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold flex items-center gap-2">
              <Sparkles size={14} className="animate-pulse shrink-0" /> Lead Web Developer & Systems Architect
            </span>
          </div>

          <h1 className="hero-title font-bebas text-[54px] xs:text-[68px] sm:text-[90px] md:text-[115px] leading-[0.85] tracking-tight mb-5 sm:mb-6 overflow-hidden">
            <span className="text-ink block mb-1">John Carlo</span>
            <span className="gold-stroke block">Salazar.</span>
          </h1>

          <p className="hero-p text-sm sm:text-lg leading-relaxed text-ash max-w-xl mb-6 sm:mb-8 border-l-4 border-gold pl-4 sm:pl-6">
            I build high-converting websites, online academies, custom web platforms, and AI automations that help businesses launch faster and grow revenue.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-8">
            <div className="hero-stat flex items-center gap-2 bg-card/80 border border-white/10 px-3 py-2 rounded-sm text-steel text-xs">
              <Award size={15} className="text-gold shrink-0" />
              <span className="font-semibold text-ink">10+ Years Exp</span>
            </div>
            <div className="hero-stat flex items-center gap-2 bg-card/80 border border-white/10 px-3 py-2 rounded-sm text-steel text-xs">
              <CheckCircle2 size={15} className="text-gold shrink-0" />
              <span className="font-semibold text-ink">30+ Platforms Launched</span>
            </div>
            <div className="hero-stat flex items-center gap-2 bg-card/80 border border-white/10 px-3 py-2 rounded-sm text-steel text-xs w-full sm:w-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse shrink-0" />
              <span className="font-semibold text-emerald-400">Available for Client Projects</span>
            </div>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full">
            <a 
              href="mailto:johncarlosacrosalazar@gmail.com?subject=New%20Website%20%2F%20Project%20Inquiry&body=Hi%20John%20Carlo,%0A%0AI%20am%20interested%20in%20building%20a%20project.%20Here%20are%20some%20details:%0A-%20Project%20Type:%20[Website%20/%20LMS%20Academy%20/%20Custom%20Portal%20/%20AI%20Automation]%0A-%20Timeline:%20[ASAP%20/%20Within%2030%20Days]%0A-%20Estimated%20Budget:%20[Enter%20Range]%0A%0ALet's%20connect!" 
              className="hero-btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-void font-barlow text-sm font-extrabold tracking-widest uppercase rounded-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-gold/15 hover:shadow-gold/30 text-center"
            >
              Start Your Project <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio" 
              className="hero-btn inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-ink font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:border-gold hover:text-gold transition-all text-center"
            >
              <Briefcase size={18} /> Explore Client Work
            </a>
          </div>

          {/* Mobile Profile Display (Shows on screens < lg) */}
          <div className="lg:hidden mt-8 border border-white/10 bg-card/60 p-4 rounded-sm flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-sm overflow-hidden border border-gold/30 shrink-0">
              <Image src={hero} alt="John Carlo Salazar" fill className="object-cover" />
            </div>
            <div>
              <p className="font-barlow text-sm font-bold text-ink uppercase tracking-wider">John Carlo Salazar</p>
              <p className="text-xs text-gold font-medium">Lead Developer & Systems Architect</p>
              <p className="text-[11px] text-ash">Temasek & International Client Experience</p>
            </div>
          </div>
        </div>

        {/* Desktop Profile Image Area with Floating Badges */}
        <div className="hero-img-container relative hidden lg:flex justify-end h-[580px]">
          {/* Background Card Accent */}
          <div className="absolute inset-0 bg-card/50 translate-x-6 translate-y-6 rounded-sm border border-white/5" />
          
          {/* Top Floating Badge */}
          <div className="hero-badge absolute -top-4 -left-6 z-[10] bg-void/90 backdrop-blur-md border border-gold/40 p-4 rounded-sm shadow-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-ink uppercase tracking-wider">Enterprise Reliability</p>
              <p className="text-[11px] text-ash">Temasek & SG National Projects</p>
            </div>
          </div>

          {/* Image Wrapper with Hover Effect */}
          <div className="relative z-[2] w-full h-full overflow-hidden rounded-sm border border-gold/20 shadow-2xl group cursor-crosshair">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.04, filter: "brightness(1.08)" }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-70 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <p className="font-barlow text-xs font-bold tracking-[0.4em] text-gold uppercase">Full-Stack Architect</p>
              <p className="text-[11px] text-ash font-medium">React · Next.js · Laravel · WordPress · AWS</p>
            </div>
          </div>

          {/* Bottom Floating Badge */}
          <div className="hero-badge absolute -bottom-5 -right-4 z-[10] bg-void/95 backdrop-blur-md border border-white/20 p-4 rounded-sm shadow-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-ink uppercase tracking-wider">Custom LMS & Web Apps</p>
              <p className="text-[11px] text-ash">High-converting online platforms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand & Project Highlights Strip */}
      <div className="relative z-[2] border-t border-b border-white/10 bg-card/60 backdrop-blur-sm py-4 px-4 sm:px-8 mt-6 sm:mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs">
          <span className="font-barlow font-bold tracking-[0.2em] text-gold uppercase text-[10px] sm:text-[11px]">
            Delivered Solutions For:
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-8 font-medium text-ash text-[11px] sm:text-xs">
            <span className="hover:text-ink transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Temasek Foundation</span>
            <span className="hover:text-ink transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Tax IQ Academies</span>
            <span className="hover:text-ink transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Pentagreen Capital</span>
            <span className="hover:text-ink transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> OnePeople Online</span>
            <span className="hover:text-ink transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Edge Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
}

