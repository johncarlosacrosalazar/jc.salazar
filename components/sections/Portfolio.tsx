/**
 * PORTFOLIO SECTION
 * 
 * Features:
 * - Dynamic category filtering with layout animations (AnimatePresence)
 * - Custom ProjectCard with GSAP hover effects
 * - Mobile-specific "Bento" style filter menu
 * - Background decorative elements (Parallax blobs and shapes)
 */

'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, Shield, Sparkles, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../SectionHeading';
import { projects } from '@/constants/portfolio-data';

interface ProjectCardProps {
  project: {
    title: string;
    url?: string;
    desc: string;
    image?: any;
    badge: string;
    icon: React.ReactNode;
    category: string;
    featured?: boolean;
    impact?: string;
  };
  onPreview: (img: any, title: string) => void;
}

/**
 * Individual Project Card Component
 */
function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const overlay = card.querySelector(".project-overlay");
    const img = card.querySelector(".project-img");
    const accent = card.querySelector(".corner-accent");

    // GSAP Hover Animation Timeline
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl.to(overlay, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .to(img, { scale: 1.05, filter: "grayscale(0)", opacity: 1, duration: 0.6, ease: "power2.out" }, 0)
      .to(accent, { borderColor: "rgba(255, 215, 0, 0.5)", duration: 0.4 }, 0);

    const onMouseEnter = () => hoverTl.play();
    const onMouseLeave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className={`project-card group relative bg-card border rounded-sm overflow-hidden transition-all duration-300 hover:border-gold/40 shadow-2xl flex flex-col h-full ${
        project.featured ? 'border-gold/30 bg-card/80' : 'border-ink/5'
      }`}
    >
      {/* Top Category Badge */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-barlow text-[10px] font-bold tracking-widest uppercase rounded-sm border bg-void/90 backdrop-blur-md ${project.badge}`}>
          {project.icon} {project.category}
        </span>
      </div>

      {/* Image Container with Custom Overlay */}
      <div className="relative h-64 bg-void/50 overflow-hidden">
        <div className="absolute inset-0 bg-void/40 z-10 transition-colors duration-500" />
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} - ${project.category} project by John Carlo Salazar`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="project-img object-cover grayscale scale-100 opacity-60"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-20"><Shield size={64} /></div>
        )}

        {/* Action Buttons (Preview & Visit) */}
        <div className="project-overlay absolute inset-0 flex items-center justify-center gap-4 bg-void/60 opacity-0 z-30">
          {project.image && (
            <button
              onClick={() => onPreview(project.image, project.title)}
              className="p-4 bg-gold text-void rounded-sm hover:scale-110 transition-transform shadow-xl"
              title="Expand View"
            >
              <Maximize2 size={24} />
            </button>
          )}
          {project.url && project.url !== '' && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-void rounded-sm hover:scale-110 transition-transform shadow-xl"
              title="Visit Site"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>

        {/* Technical Corner Accent */}
        <div className="corner-accent absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold/0 transition-all duration-500" />
      </div>

      {/* Content Area */}
      <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Business Impact Pill */}
          {project.impact && (
            <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold/10 border border-gold/25 text-gold text-[11px] font-bold uppercase tracking-wider rounded-sm">
              <Sparkles size={12} className="shrink-0" />
              <span>{project.impact}</span>
            </div>
          )}

          <h3 className="font-bebas text-3xl text-ink mb-3 group-hover:text-gold transition-colors tracking-wide leading-none">
            {project.title}
          </h3>
          <div className="relative">
            <p
              className={`text-ash text-sm leading-relaxed mb-4 overflow-hidden ${!isExpanded ? 'line-clamp-3' : ''}`}
              style={{ height: isExpanded ? 'auto' : '4.5rem' }}
            >
              {project.desc}
            </p>
            {project.desc.length > 100 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gold text-[10px] font-bold uppercase tracking-widest hover:underline mb-6 block"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>

        <a
          href={`mailto:johncarlosacrosalazar@gmail.com?subject=${encodeURIComponent(`Inquiry for project similar to ${project.title}`)}&body=${encodeURIComponent(`Hi John Carlo,\n\nI liked your work on ${project.title} and want to discuss building something similar for my business.`)}`}
          className="inline-flex items-center gap-2 text-gold text-[11px] font-extrabold uppercase tracking-widest hover:gap-3 transition-all mt-4 border-t border-white/5 pt-4"
        >
          Build Something Similar <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

/**
 * Main Portfolio Listing Section
 */
export default function Portfolio({ onPreview }: { onPreview: (img: any, title: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance animation for filter buttons
    gsap.fromTo(".filter-btn", { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".filter-btn",
        start: "top 90%",
      }
    });

    // Background Blob Float
    gsap.to(".portfolio-bg-blob", {
      x: "-=50",
      y: "+=50",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Floating Geometric Shapes Parallax
    gsap.to(".portfolio-shape", {
      y: (i) => (i + 1) * -150,
      x: (i) => (i % 2 === 0 ? 50 : -50),
      rotation: (i) => (i + 1) * 90,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, { scope: container });

  const categories = [
    'All',
    ...[...new Set(projects.flatMap(group =>
      group.categories ?? [group.category]
    ))].sort((a, b) => a.localeCompare(b)),
  ];

  // Logic to filter projects based on activeCategory
  const allFilteredItems = activeCategory === 'All'
    ? projects.flatMap(group => group.items.map(item => ({ ...item, badge: group.badge, icon: group.icon, category: group.category })))
    : projects
      .filter(group => (group.categories ?? [group.category]).includes(activeCategory))
      .flatMap(group => group.items.map(item => ({ ...item, badge: group.badge, icon: group.icon, category: group.category })));

  // Prioritize Featured Projects first, then alphabetical
  allFilteredItems.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });

  return (
    <section id="portfolio" ref={container} className="bg-transparent py-16 sm:py-24 px-4 sm:px-8 overflow-hidden relative">
      {/* Decorative Blur Blob */}
      <div className="portfolio-bg-blob absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Floating Parallax Shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="portfolio-shape absolute border border-gold/10 opacity-20 pointer-events-none z-0"
          style={{
            width: `${40 + (i % 3) * 40}px`,
            height: `${40 + (i % 3) * 40}px`,
            top: `${15 + i * 15}%`,
            left: i % 2 === 0 ? `${5 + i * 2}%` : `${85 - i * 2}%`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '0',
            transform: `rotate(${i * 30}deg)`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <SectionHeading eyebrow="Showcase & Case Studies" title="Selected Work" />

        {/* Desktop Category Navigation */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn relative px-6 py-2.5 font-barlow text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm border ${activeCategory === cat
                ? 'text-void border-gold'
                : 'text-ash border-ink/10 hover:border-gold/30 hover:text-gold'
                }`}
            >
              <span className="relative z-10">{cat}</span>
              {/* Framer Motion Layout Animation for the active indicator */}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gold z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Category Toggle (Bento Menu) */}
        <div className="md:hidden flex items-center justify-between mb-8 px-2">
          <div className="flex flex-col">
            <span className="font-barlow text-[10px] text-ash/40 uppercase tracking-[0.3em] font-bold mb-1">Category</span>
            <span className="font-bebas text-2xl text-gold tracking-widest uppercase">{activeCategory}</span>
          </div>
          <button
            onClick={() => setShowMobileCategories(true)}
            className="w-11 h-11 border border-ink/10 flex flex-wrap gap-1 p-2.5 items-center justify-center hover:border-gold/30 transition-colors"
          >
            <div className="w-1.5 h-1.5 bg-gold/60" />
            <div className="w-1.5 h-1.5 bg-gold" />
            <div className="w-1.5 h-1.5 bg-gold" />
            <div className="w-1.5 h-1.5 bg-gold/60" />
          </button>
        </div>

        {/* Mobile Filter Overlay */}
        <AnimatePresence>
          {showMobileCategories && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-xl md:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-bebas text-2xl text-gold tracking-widest">CATEGORIES</span>
                <button
                  onClick={() => setShowMobileCategories(false)}
                  className="text-gold font-barlow text-sm font-bold tracking-widest uppercase"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 overflow-y-auto pb-12">
                {categories.map((cat, i) => (
                  <motion.button
                    key={cat}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      setActiveCategory(cat);
                      setShowMobileCategories(false);
                    }}
                    className={`relative p-6 text-left border ${activeCategory === cat ? 'border-gold bg-gold/5' : 'border-ink/5'}`}
                  >
                    <span className={`font-bebas text-3xl tracking-wider ${activeCategory === cat ? 'text-gold' : 'text-ash/60'}`}>
                      {cat}
                    </span>
                    {activeCategory === cat && (
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Project Grid (React-level filtering + Framer Motion) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onAnimationComplete={() => ScrollTrigger.refresh()} // Fix ScrollTrigger after height changes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allFilteredItems.map((project) => (
              <ProjectCard key={project.title} project={project} onPreview={onPreview} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Fallback if no projects exist */}
        {allFilteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ash font-barlow text-sm uppercase tracking-widest">No projects found in this category.</p>
          </div>
        )}

        {/* Bottom Portfolio Conversion Callout Banner */}
        <div className="mt-12 sm:mt-16 border border-gold/30 bg-gradient-to-r from-card/90 via-card/60 to-gold/10 p-6 sm:p-10 rounded-sm shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
          <div className="w-full flex-1 max-w-2xl space-y-2 sm:space-y-3 relative z-10">
            <div className="flex items-center gap-2 text-gold font-barlow text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} className="shrink-0" /> Ready to Build Your Solution?
            </div>
            <h4 className="font-barlow text-2xl md:text-3xl font-bold text-ink leading-tight">
              Like what you see? Let’s build something great for your business.
            </h4>
            <p className="text-ash text-xs sm:text-sm leading-relaxed">
              Whether you need a new website, learning academy, custom admin portal, or AI automation, I can help turn your idea into a launched product.
            </p>
          </div>
          <a
            href="mailto:johncarlosacrosalazar@gmail.com?subject=New%20Project%20Inquiry%20from%20Portfolio&body=Hi%20John%20Carlo,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
            className="inline-flex shrink-0 items-center justify-center gap-3 px-8 py-4 bg-gold text-void font-barlow text-xs font-extrabold tracking-widest uppercase rounded-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-gold/15 relative z-10 w-full md:w-auto text-center whitespace-nowrap"
          >
            Get Custom Scope & Quote <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

