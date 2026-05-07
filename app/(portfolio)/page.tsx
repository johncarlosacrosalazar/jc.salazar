/**
 * MAIN LANDING PAGE
 * 
 * This is the primary entry point for the portfolio. It assembles the various
 * section components into a single-page layout.
 * 
 * Architecture:
 * - Next.js App Router (Client Component)
 * - Modular Section Components (Hero, Experience, etc.)
 * - Shared State for Portfolio Image Previews
 */

'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Auxiliary Components
import MotionPathWaypoints from '@/components/MotionPathWaypoints';
import ImageModal from '@/components/ImageModal';

// Section Components (Extracted for better maintainability)
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Portfolio from '@/components/sections/Portfolio';
import Stack from '@/components/sections/Stack';
import Footer from '@/components/sections/Footer';

// Initialize GSAP ScrollTrigger for scroll-based animations
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioLandingPage() {
  /**
   * Global state for the image preview modal.
   * Defined here so it can be triggered by the child Portfolio component
   * and rendered at the root level for correct z-index/overlay behavior.
   */
  const [selectedPreview, setSelectedPreview] = useState<{ img: any; title: string } | null>(null);

  return (
    <div className="min-h-screen text-ink font-inter antialiased relative">
      {/* Background visual effect */}
      <MotionPathWaypoints />
      
      {/* 
          SEO: Structured Data (JSON-LD) 
          Helps search engines understand the entity (Person) and their expertise.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "John Carlo Salazar",
            "jobTitle": "Lead Web Developer",
            "url": "https://jc-salazar.vercel.app",
            "sameAs": [],
            "knowsAbout": ["React", "Node.js", "AWS", "Systems Architecture", "Quality Assurance", "Laravel", "PHP"]
          })
        }}
      />

      {/* Main Page Layout */}
      <Hero />
      <Experience />
      <Portfolio onPreview={(img, title) => setSelectedPreview({ img, title })} />
      <Stack />
      <Footer />

      {/* Shared Image Preview Modal (AnimatePresence handles the exit animation) */}
      <AnimatePresence>
        {selectedPreview && (
          <ImageModal
            image={selectedPreview.img}
            title={selectedPreview.title}
            onClose={() => setSelectedPreview(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
