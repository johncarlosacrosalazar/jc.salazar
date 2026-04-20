'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Award, ExternalLink,
  Code2, Globe, Shield, ArrowRight, ChevronRight,
  Users, BookOpen, X, Maximize2
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionPathWaypoints from '@/components/MotionPathWaypoints';
import ImageModal from '@/components/ImageModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import hero from '../public/assets/images/hero.png';
import imgOximeter from '../public/assets/images/oximiter.png';
import imgStayprepared from '../public/assets/images/stayprepared.png';
import imgByobclean from '../public/assets/images/byobclean.png';
import imgStaymasked from '../public/assets/images/staymasked.png';
import imgStaywell from '../public/assets/images/staywell.png';
import imgOnepeople from '../public/assets/images/onepeopleonline.png';
import imgKnights from '../public/assets/images/knightstemplar.png';
import imgTemasek2022 from '../public/assets/images/temasek_2022.png';
import imgTemasek2025 from '../public/assets/images/temasek_2025.png';
import imgPentagreen from '../public/assets/images/pentagreen.png';
import imgB4B from '../public/assets/images/b4b.academy.png';
import imgCarloRosette from '../public/assets/images/carlo_and_rosette_wedding.png';
import imgLolasPlates from '../public/assets/images/lolas-pours-plates.png';
import imgJsxDashboard from '../public/assets/images/jsx-dashboard.png';
import imgPhuckjs from '../public/assets/images/Phuckjs-pagebuilder.png';



// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: 'Edge Digital',
    role: 'Lead Web Developer',
    period: '2020 — 2025',
    desc: 'Architected OnePeople—a platform connecting people through open dialogue and global voting—and delivered mission-critical COVID-19 campaign sites for Singapore. Engineered nationwide APIs and optimized AWS serverless infrastructure for high-traffic scalability.',
    tags: ['React.js', 'Node.js', 'AWS Lambda', 'QA Lead'],
    highlight: true,
  },
  {
    company: 'Breakthrough4business',
    role: 'Web Developer',
    period: '2017 — 2019',
    desc: 'Built the B4B Academy social platform from scratch. Delivered social networking modules and managed EC2 Ubuntu server environments.',
    tags: ['PHP', 'Laravel', 'jQuery', 'AWS EC2'],
    highlight: false,
  },
  {
    company: 'Leentech Network Solution',
    role: 'Junior Programmer',
    period: '2016 — 2017',
    desc: 'Developed custom Magento e-commerce solutions and pioneered mobile-first development using Ionic.',
    tags: ['Magento', 'PHP', 'Ionic', 'jQuery Mobile'],
    highlight: false,
  },
];

const projects = [
  {
    category: 'ReactJS / Next.js',
    icon: <Code2 size={11} />,
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { title: 'Phuckjs Page Builder', url: '', desc: 'ReactJS page builder, very good for building client website.', image: imgPhuckjs },
      { title: 'JSX Dashboard', url: '', desc: 'Next.js with PostgreSQL and NextAuth Dashboard.', image: imgJsxDashboard },
    ],
  },
  {
    category: 'WordPress',
    icon: <Globe size={11} />,
    badge: 'bg-gold/10 text-gold border-gold/20',
    items: [
      { title: 'Oximiter', url: 'https://web.archive.org/web/20210625034815/https://stayprepared.sg/oximeter/', desc: 'COVID-19 pulse oximeter e-commerce site for Singapore.', image: imgOximeter },
      { title: 'StayPrepared', url: 'https://web.archive.org/web/20210625034815/https://stayprepared.sg/oximeter/', desc: 'Stay Prepared is a Temasek Foundation initiative that strengthens Singapore’s emergency resilience through health programs, free mask distribution, training, and community preparedness.', image: imgStayprepared },
      { title: 'BYOBClean', url: 'https://web.archive.org/web/20210620040304/https://stayprepared.sg/byobclean/', desc: 'BYOBclean is a Temasek Foundation initiative where Singapore households bring used bottles to collect 500ml alcohol-free sanitizer, promoting reuse and reducing waste.', image: imgByobclean },
      { title: 'Staymasked', url: 'https://web.archive.org/web/20220630102230/https://stayprepared.sg/staymasked/', desc: '#StayMasked & #StayPrepared by Temasek Foundation provide free masks to SG residents via vending machines, boosting community health and resilience.', image: imgStaymasked },
      { title: 'Mouth Gargle', url: 'https://web.archive.org/web/20230401044153/https://stayprepared.sg/staywell/', desc: 'StayWell Mouth Gargle is a Temasek Foundation initiative in Singapore providing 250ml PVP-I gargle to households to support hygiene and help reduce the spread of germs and viruses.', image: imgStaywell },
    ],
  },
  {
    category: 'Static Website',
    icon: <Globe size={11} />,
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { title: 'Pentagreen', url: 'https://www.pentagreen.com/index.html', desc: 'Pentagreen Capital finances sustainable infrastructure projects across Asia, focusing on Southeast Asia to support clean infrastructure and advance climate goals.', image: imgPentagreen },
    ],
  },
  {
    category: 'ReactJS / Node.js',
    icon: <Code2 size={11} />,
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { title: 'OnePeople Online', url: 'https://onepeople.online/', desc: "OnePeople is a platform that connects people with different views through open dialogue and global voting. By sharing perspectives and participating in referendums, it helps communities understand each other and use collective insight to shape a better future.", image: imgOnepeople },
      { title: 'Carlo and Rosette', url: 'https://carloandrosette.vercel.app/', desc: 'A beautiful wedding website built with Next.js and Framer Motion.', image: imgCarloRosette },

    ],
  },
  {
    category: 'Next.js / Payload CMS',
    icon: <Code2 size={11} />,
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { title: "Lola's Plates & Pours", url: 'https://lola-s-plates-and-pours.vercel.app/', desc: "Lola's Plates & Pours in Cavite offers a cozy, Tagaytay-like vibe with comfort food, coffee, cocktails, and live music. Pet-friendly with free WiFi—ideal for late-night hangouts.", image: imgLolasPlates },
    ],
  },
  {
    category: 'Laravel',
    icon: <Code2 size={11} />,
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
    items: [
      { title: 'The Knights Templar', url: 'https://web.archive.org/web/20220310161843/https://theknightstemplar.info/', desc: 'Historic chivalric order member portal and portal.', image: imgKnights },
    ],
  },
  {
    category: 'Codeigniter',
    icon: <Code2 size={11} />,
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    items: [
      { title: 'B4B Academy', url: 'https://www.b4b.academy/', desc: 'B4B Academy social learning platform.', image: imgB4B },
    ],
  },
  {
    category: 'QA / Quality Assurance',
    icon: <Shield size={11} />,
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    items: [
      { title: 'Temasek Review 2025', url: 'https://www.temasekreview.com.sg/', desc: 'The Temasek Review 2025 outlines a record S$434 billion net portfolio value, driven by investments in Singapore, China, the US, and India. It highlights a long-term, sustainable investment approach focused on four structural trends: digitization, sustainable living, future of consumption, and longer lifespans', image: imgTemasek2022 },
      { title: 'Temasek Review 2023', url: 'https://tr23.temasekreview.com.sg/', desc: 'The Temasek Review 2023 ("Our Compass in a Complex World") highlights a net portfolio value of S$382 billion, with S$31 billion invested and S$27 billion divested amidst a cautious, uncertain, and high-inflation global environment. The report emphasizes the T2030 strategy, focusing on long-term structural trends like sustainability, digitalization, AI, and decarbonization to build a resilient, future-ready portfolio.', image: imgTemasek2025 },
    ],
  },
];

// ─── Shared Components ─────────────────────────────────────────────────────────

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  const container = useRef(null);

  useGSAP(() => {
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
        <span className="font-barlow text-[12px] font-bold tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
        <h2 className="font-bebas text-[48px] md:text-[64px] text-ink tracking-wide leading-none mt-1">{title}</h2>
      </div>
      <div className="heading-line flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent mb-3" />
    </div>
  );
}


// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

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

    // Continuous background animation
    gsap.to(".hero-bg-svg circle", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 60,
      repeat: -1,
      ease: "none"
    });

    // Parallax effect
    gsap.to(".hero-bg-svg", {
      y: 100,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

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
      <div className="absolute inset-0 z-0 bg-void/50" />

      {/* Hero Background SVGs */}
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
      <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-[0.25] pointer-events-none z-[1]" style={{ background: 'radial-gradient(ellipse at bottom, rgba(255,215,0,0.2) 0%, transparent 70%)' }} />

      <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-gold to-transparent z-[1]" />

      <div className="max-w-7xl mx-auto w-full px-8 py-16 grid lg:grid-cols-2 gap-16 items-center flex-1 relative z-[2]">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="hero-line w-12 h-0.5 bg-gold" />
            <span className="hero-sub font-barlow text-sm font-bold tracking-[0.3em] uppercase text-gold">
              Lead Web Developer
            </span>
          </div>

          <h1 className="hero-title font-bebas text-[80px] md:text-[120px] leading-[0.85] tracking-tight mb-8 overflow-hidden">
            <span className="text-ink block mb-2">John Carlo</span>
            <span className="gold-stroke block">Salazar.</span>
          </h1>

          <p className="hero-p text-lg leading-relaxed text-ash max-w-lg mb-10 border-l-4 border-gold pl-6">
            10+ years engineering high-performance ecosystems for Singapore and Philippines. Specialist in React, Node.js, and Enterprise QA.
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
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#portfolio" className="hero-btn inline-flex items-center gap-3 px-10 py-4 bg-gold text-void font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-gold/10">
              View Work <ArrowRight size={18} />
            </a>
            <a href="mailto:johncarlosacrosalazar@gmail.com" className="hero-btn inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-ink font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:border-gold transition-all">
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>

        <div className="hero-img-container relative hidden lg:flex justify-end h-[600px]">
          <div className="absolute inset-0 bg-card/50 translate-x-6 translate-y-6 rounded-sm border border-white/5" />
          <div className="relative z-[2] w-full h-full overflow-hidden rounded-sm border border-gold/20 shadow-2xl group cursor-crosshair">
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              transition={{ duration: 0.6, ease: "circOut" }}
            >
              <Image
                src={hero}
                alt="John Carlo Salazar"
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

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  const container = useRef(null);

  useGSAP(() => {
    // Scroll progress line
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
      {/* Experience Background SVGs */}
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
          {/* Vertical Progress Line */}
          <div className="absolute left-[8px] top-4 bottom-4 w-[2px] bg-ink/5 z-0" />
          <div className="exp-progress-line absolute left-[8px] top-4 bottom-4 w-[2px] bg-gold z-0" />
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-item relative p-8 md:p-10 ml-8 md:ml-12 rounded-sm border-l-4 transition-all hover:bg-card/40 overflow-hidden ${exp.highlight ? 'bg-gold/[0.02] border-gold' : 'bg-card/20 border-gold/15 hover:border-gold/30'
                }`}
            >
              {/* Subtle accent inside the card */}
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

// ─── Projects ─────────────────────────────────────────────────────────────────

function ProjectCard({ project, onPreview }: {
  project: {
    title: string;
    url?: string;
    desc: string;
    image?: any;
    badge: string;
    icon: React.ReactNode;
    category: string;
  };
  onPreview: (img: any, title: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    const overlay = card.querySelector(".project-overlay");
    const img = card.querySelector(".project-img");
    const accent = card.querySelector(".corner-accent");

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
      className="project-card group relative bg-card border border-ink/5 rounded-sm overflow-hidden transition-all hover:border-gold/20 shadow-2xl flex flex-col h-full"
    >
      {/* Project Header Stats/Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-barlow text-[10px] font-bold tracking-widest uppercase rounded-sm border bg-void/80 backdrop-blur-md ${project.badge}`}>
          {project.icon} {project.category}
        </span>
      </div>

      {/* Hero-like Image Section */}
      <div className="relative h-64 bg-void/50 overflow-hidden">
        <div className="absolute inset-0 bg-void/40 z-10 transition-colors duration-500" />
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="project-img object-cover grayscale scale-100 opacity-60"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-20"><Shield size={64} /></div>
        )}

        {/* Overlay Controls */}
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

        {/* Corner Accent */}
        <div className="corner-accent absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold/0 transition-all duration-500" />
      </div>

      <div className="p-10 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bebas text-3xl text-ink mb-4 group-hover:text-gold transition-colors tracking-wide leading-none">{project.title}</h3>
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

        {/* <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <span className="text-[10px] font-bold text-gold/40 uppercase tracking-[0.3em]">Project Details</span>
          <ChevronRight size={14} className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
        </div> */}
      </div>
    </div>
  );
}

function Portfolio({ onPreview }: { onPreview: (img: any, title: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    // Animate background blob
    gsap.to(".portfolio-bg-blob", {
      x: "-=50",
      y: "+=50",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Floating parallax shapes
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

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const allFilteredItems = activeCategory === 'All'
    ? projects.flatMap(group => group.items.map(item => ({ ...item, badge: group.badge, icon: group.icon, category: group.category })))
    : projects
      .filter(group => group.category === activeCategory)
      .flatMap(group => group.items.map(item => ({ ...item, badge: group.badge, icon: group.icon, category: group.category })));

  return (
    <section id="portfolio" ref={container} className="bg-transparent py-24 px-8 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="portfolio-bg-blob absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Floating Shapes */}
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
        <SectionHeading eyebrow="Showcase" title="Selected Work" />

        {/* Desktop Category Filter Bar */}
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

        {/* Mobile "Bento" Toggle */}
        <div className="md:hidden flex items-center justify-between mb-12 px-2">
          <div className="flex flex-col">
            <span className="font-barlow text-[10px] text-ash/40 uppercase tracking-[0.3em] font-bold mb-1">Category</span>
            <span className="font-bebas text-2xl text-gold tracking-widest uppercase">{activeCategory}</span>
          </div>
          <button
            onClick={() => setShowMobileCategories(true)}
            className="w-12 h-12 border border-ink/10 flex flex-wrap gap-1 p-3 items-center justify-center hover:border-gold/30 transition-colors"
          >
            <div className="w-1.5 h-1.5 bg-gold/60" />
            <div className="w-1.5 h-1.5 bg-gold" />
            <div className="w-1.5 h-1.5 bg-gold" />
            <div className="w-1.5 h-1.5 bg-gold/60" />
          </button>
        </div>

        {/* Mobile Category Overlay */}
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

        {/* Dynamic Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onAnimationComplete={() => ScrollTrigger.refresh()}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allFilteredItems.map((project) => (
              <ProjectCard key={project.title} project={project} onPreview={onPreview} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State (if needed, though projects are static) */}
        {allFilteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ash font-barlow text-sm uppercase tracking-widest">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Stack ────────────────────────────────────────────────────────────────────

function Stack() {
  const container = useRef(null);

  useGSAP(() => {
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

    // Scroll-linked rotation for background
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
      {/* Stack Background SVGs */}
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
          <div className="stack-card lg:col-span-2 p-12 bg-card/40 border-l-4 border-gold rounded-sm space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: 'Frontend', items: ['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'TS'] },
                { label: 'Backend', items: ['Node.js', 'Laravel', 'PHP', 'AWS Lambda'] },
                { label: 'E-Commerce', items: ['WordPress', 'WooCommerce', 'Magento'] },
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

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-content > *", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 80%",
      }
    });

    gsap.to(".footer-bg circle", {
      scale: 1.2,
      opacity: 0.1,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true
      },
      duration: 3,
      ease: "sine.inOut"
    });

    // Scroll-linked background fade
    gsap.from(".footer-bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <footer id="contact" ref={container} className="relative bg-void border-t border-gold/10 py-24 px-8 overflow-hidden">
      {/* Footer SVG Background */}
      <div className="footer-bg absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none z-0 flex items-center justify-center">
        <svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD700" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" opacity="0.2" />
          <circle cx="500" cy="200" r="100" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="500" cy="200" r="150" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="10 20" />
          <circle cx="500" cy="200" r="200" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="500" cy="200" r="250" fill="none" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="20 40" />
          <circle cx="500" cy="200" r="400" fill="none" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="4 16" />

          {/* Tech Accents */}
          <path d="M500 0 V400 M0 200 H1000" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
          <path d="M300 100 L320 100 M310 90 L310 110" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M700 300 L720 300 M710 290 L710 310" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M200 300 L220 300 M210 290 L210 310" stroke="#FFD700" strokeWidth="1.5" />
          <path d="M800 100 L820 100 M810 90 L810 110" stroke="#FFD700" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-gold/20 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-gold/20 pointer-events-none" />

      <div className="footer-content max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div>
          <span className="font-barlow text-sm font-bold tracking-[0.5em] text-gold uppercase">Contact</span>
          <h2 className="font-bebas text-7xl md:text-9xl text-ink leading-tight mt-4">LETS CONNECT.</h2>
          <p className="font-barlow text-xl md:text-2xl text-gold mt-4 low-tracking select-all">johncarlosacrosalazar@gmail.com</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:johncarlosacrosalazar@gmail.com" className="px-10 py-5 bg-gold text-void font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:-translate-y-1 transition-all shadow-xl shadow-gold/10 flex items-center justify-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            Email Me
          </a>
          <a href="https://wa.me/639273315906" target="_blank" rel="noopener noreferrer" className="px-10 py-5 border border-ink/10 text-ink font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:border-gold/30 hover:text-gold transition-all flex items-center justify-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            WhatsApp
          </a>
        </div>

        <p className="text-coal font-barlow text-[10px] tracking-[0.6em] uppercase pt-12">
          Precision Engineering · John Carlo Salazar · 2025
        </p>
      </div>
    </footer>
  );
}


export default function PortfolioLandingPage() {
  const [selectedPreview, setSelectedPreview] = useState<{ img: any; title: string } | null>(null);

  return (
    <div className="min-h-screen text-ink font-inter antialiased relative">
      <MotionPathWaypoints />
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

      <Hero />
      <Experience />
      <Portfolio onPreview={(img, title) => setSelectedPreview({ img, title })} />
      <Stack />
      <Footer />

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
