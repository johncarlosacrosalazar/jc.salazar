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
import Services from '@/components/sections/Services';
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
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://johncarlosalazar.com/#person",
                "name": "John Carlo Salazar",
                "url": "https://johncarlosalazar.com/",
                "image": "https://johncarlosalazar.com/assets/images/hero.png",
                "jobTitle": ["Full-Stack Web Developer", "Systems Architect"],
                "description": "Philippines-based full-stack developer with more than 10 years of experience building websites, online academies, business portals, e-commerce platforms, and AI automation.",
                "email": "mailto:johncarlosacrosalazar@gmail.com",
                "telephone": "+63 927 331 5906",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Trece Martires",
                  "addressRegion": "Cavite",
                  "addressCountry": "PH"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/john-carlo-salazar-8028083b6/"
                ],
                "knowsAbout": ["React", "Next.js", "Node.js", "Laravel", "WordPress", "WooCommerce", "AWS", "Systems Architecture", "RAG chatbots", "AI automation"]
              },
              {
                "@type": "WebSite",
                "@id": "https://johncarlosalazar.com/#website",
                "url": "https://johncarlosalazar.com/",
                "name": "John Carlo Salazar Portfolio",
                "description": "Portfolio and services of full-stack developer John Carlo Salazar.",
                "inLanguage": "en-PH",
                "publisher": { "@id": "https://johncarlosalazar.com/#person" }
              },
              {
                "@type": "ProfilePage",
                "@id": "https://johncarlosalazar.com/#profilepage",
                "url": "https://johncarlosalazar.com/",
                "name": "John Carlo Salazar | Full-Stack Web Developer",
                "isPartOf": { "@id": "https://johncarlosalazar.com/#website" },
                "mainEntity": { "@id": "https://johncarlosalazar.com/#person" }
              }
            ]
          }).replace(/</g, '\\u003c')
        }}
      />

      {/* Main Page Layout */}
      <Hero />
      <Services />
      <Portfolio onPreview={(img, title) => setSelectedPreview({ img, title })} />
      <Experience />
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
