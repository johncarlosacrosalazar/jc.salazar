'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Award, ExternalLink,
  Code2, Globe, Shield, ArrowRight, ChevronRight,
  Users, BookOpen, X, Maximize2
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: 'Edge Digital',
    role: 'Lead Web Developer',
    period: '2020 — 2025',
    desc: 'Architected the OnePeople civic ecosystem and delivered mission-critical COVID-19 campaign sites for Singapore. Engineered nationwide APIs and optimized AWS serverless infrastructure for high-traffic scalability.',
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
    category: 'WordPress',
    icon: <Globe size={11} />,
    badge: 'bg-gold/10 text-gold border-gold/20',
    items: [
      { title: 'Oximiter', url: 'https://web.archive.org/web/20210625034815/https://stayprepared.sg/oximeter/', desc: 'COVID-19 pulse oximeter e-commerce site for Singapore.', image: imgOximeter },
      { title: 'StayPrepared', url: 'https://web.archive.org/web/20210625034815/https://stayprepared.sg/oximeter/', desc: 'Singapore health & wellness platform.', image: imgStayprepared },
      { title: 'BYOBClean', url: 'https://web.archive.org/web/20210620040304/https://stayprepared.sg/byobclean/', desc: 'Eco-conscious cleaning product configurator.', image: imgByobclean },
      { title: 'Staymasked', url: 'https://web.archive.org/web/20220630102230/https://stayprepared.sg/staymasked/', desc: 'National mask distribution initiative portal.', image: imgStaymasked },
      { title: 'Mouth Gargle', url: 'https://web.archive.org/web/20230401044153/https://stayprepared.sg/staywell/', desc: 'Preventative health solution platform.', image: imgStaywell },
    ],
  },
  {
    category: 'Static Website',
    icon: <Globe size={11} />,
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { title: 'Pentagreen', url: 'https://www.pentagreen.com/index.html', desc: 'Corporate website for Pentagreen Capital.', image: imgPentagreen },
    ],
  },
  {
    category: 'ReactJS / Node.js',
    icon: <Code2 size={11} />,
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { title: 'OnePeople Online', url: 'https://onepeople.online/', desc: 'Civic engagement ecosystem built for the Singapore government.', image: imgOnepeople },
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
      { title: 'Temasek Review', url: 'https://www.temasekreview.com.sg/', desc: 'QA Specialist for flagship corporate digital publications.', image: imgTemasek2022 },
      { title: 'Temasek Review 2023', url: 'https://tr23.temasekreview.com.sg/', desc: 'Ensuring zero-defect delivery on high-profile stakeholder platforms.', image: imgTemasek2025 },
    ],
  },
];

// ─── Shared Components ─────────────────────────────────────────────────────────

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-end gap-6 mb-12"
    >
      <div>
        <span className="font-barlow text-[12px] font-bold tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
        <h2 className="font-bebas text-[48px] md:text-[64px] text-ink tracking-wide leading-none mt-1">{title}</h2>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent mb-3" />
    </motion.div>
  );
}

function ImageModal({ image, title, onClose }: { image: any; title: string; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-void/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
    >
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-7xl w-full max-h-full bg-card rounded-sm border border-gold/20 shadow-2xl overflow-hidden pointer-events-auto"
      >
        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-void/90 to-transparent z-[210] flex items-center justify-between">
          <h3 className="font-bebas text-2xl text-ink tracking-wide">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 bg-gold text-void rounded-sm hover:brightness-110 transition-all shadow-lg"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative w-full aspect-video md:aspect-[16/9] overflow-y-auto bg-void/50 mt-16">
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-void/90 backdrop-blur-xl border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-8 h-[68px] flex items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-gold rounded-sm flex items-center justify-center font-bebas text-lg text-void">
            JS
          </div>
          <span className="font-barlow text-xl font-bold tracking-tight text-ink">SALAZAR</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Experience', 'Portfolio', 'Stack'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-ash hover:text-gold transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            href="mailto:johncarlosacrosalazar@gmail.com"
            className="px-6 py-2.5 bg-gold text-void font-barlow text-xs font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all"
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-[68px] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0C0C0C]" />
      <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-gold to-transparent z-[1]" />

      <div className="max-w-7xl mx-auto w-full px-8 py-16 grid lg:grid-cols-2 gap-16 items-center flex-1 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-gold" />
            <span className="font-barlow text-sm font-bold tracking-[0.3em] uppercase text-gold">
              Lead Web Developer
            </span>
          </div>

          <h1 className="font-bebas text-[80px] md:text-[120px] leading-[0.85] tracking-tight text-ink mb-2">
            John Carlo
          </h1>
          <h1 className="font-bebas text-[80px] md:text-[120px] leading-[0.85] tracking-tight mb-8 gold-stroke">
            Salazar.
          </h1>

          <p className="text-lg leading-relaxed text-ash max-w-lg mb-10 border-l-4 border-gold pl-6">
            10+ years engineering high-performance ecosystems for Singapore and Philippines. Specialist in React, Node.js, and Enterprise QA.
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            <div className="flex items-center gap-3 text-steel text-sm">
              <MapPin size={18} className="text-gold" />
              <span className="font-medium">Trece Martires, PH</span>
            </div>
            <div className="flex items-center gap-3 text-steel text-sm">
              <Award size={18} className="text-gold" />
              <span className="font-medium">10+ Years Exp</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#portfolio" className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-void font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-gold/10">
              View Work <ArrowRight size={18} />
            </a>
            <a href="mailto:johncarlosacrosalazar@gmail.com" className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-ink font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:border-gold transition-all">
              <Mail size={18} /> Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex justify-end h-[600px]"
        >
          <div className="absolute inset-0 bg-card/50 translate-x-6 translate-y-6 rounded-sm border border-white/5" />
          <div className="relative z-[2] w-full h-full overflow-hidden rounded-sm border border-gold/20 shadow-2xl">
            <Image
              src={hero}
              alt="John Carlo Salazar"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <p className="font-barlow text-xs font-bold tracking-[0.4em] text-gold uppercase">Systems Architect</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="bg-void py-24 px-8">
      <div className="max-w-5xl mx-auto w-full">
        <SectionHeading eyebrow="Chronicle" title="Career Path" />
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-sm border-l-4 transition-all hover:bg-card/40 ${exp.highlight ? 'bg-gold/[0.02] border-gold' : 'bg-card/20 border-white/5 hover:border-gold/30'
                }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
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
                  <span key={tag} className="px-3 py-1 bg-white/[0.05] text-steel-light text-[10px] font-bold uppercase tracking-widest rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Portfolio({ onPreview }: { onPreview: (img: any, title: string) => void }) {
  return (
    <section id="portfolio" className="bg-dark py-24 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading eyebrow="Showcase" title="Selected Work" />
        <div className="grid gap-8">
          {projects.map((group, gi) => (
            <div key={gi} className="space-y-8">
              <div className="flex items-center gap-6">
                <span className={`inline-flex items-center gap-2 px-4 py-2 font-barlow text-xs font-bold tracking-widest uppercase rounded-sm border ${group.badge}`}>
                  {group.icon}{group.category}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((project, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                    className="group bg-card/30 border border-white/5 rounded-sm overflow-hidden transition-all hover:bg-card/50 hover:border-gold/20 shadow-2xl"
                  >
                    <div className="relative h-56 bg-void/50 overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-20"><Shield size={64} /></div>
                      )}

                      {/* Overlay Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />

                      <div className="absolute top-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {project.image && (
                          <button
                            onClick={() => onPreview(project.image, project.title)}
                            className="p-2.5 bg-ink text-void rounded-sm hover:bg-gold transition-colors shadow-lg"
                            title="Preview Image"
                          >
                            <Maximize2 size={16} />
                          </button>
                        )}
                        <a
                          href={project.url}
                          target="_blank"
                          className="p-2.5 bg-gold text-void rounded-sm hover:brightness-110 transition-colors shadow-lg"
                          title="Visit Website"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="font-barlow text-2xl font-bold text-ink mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                      <p className="text-sm text-ash line-clamp-2 leading-relaxed">{project.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stack ────────────────────────────────────────────────────────────────────

function Stack() {
  return (
    <section id="stack" className="bg-void py-24 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading eyebrow="Capabilities" title="Technical Stack" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-12 bg-card/40 border-l-4 border-gold rounded-sm space-y-10">
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
          <div className="space-y-8">
            <div className="p-8 bg-card/20 border border-white/5 rounded-sm">
              <Users className="text-gold mb-4" size={32} />
              <h3 className="font-barlow text-xl font-bold text-ink mb-2">Team Leadership</h3>
              <p className="text-sm text-ash leading-relaxed">Experienced in managing delivery teams for high-stakes Singaporean projects.</p>
            </div>
            <div className="p-8 bg-card/20 border border-white/5 rounded-sm">
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
  return (
    <footer id="contact" className="bg-[#080808] border-t border-white/5 py-24 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <span className="font-barlow text-sm font-bold tracking-[0.5em] text-gold uppercase">Contact</span>
          <h2 className="font-bebas text-7xl md:text-9xl text-ink leading-tight mt-4">LETS CONNECT.</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:johncarlosacrosalazar@gmail.com" className="px-12 py-5 bg-gold text-void font-barlow text-sm font-bold tracking-widest uppercase rounded-sm hover:-translate-y-1 transition-all shadow-xl shadow-gold/10">
            Open Mail
          </a>
          <div className="px-12 py-5 border border-white/10 text-ink font-barlow text-sm font-bold tracking-widest uppercase rounded-sm">
            0927-331-5906
          </div>
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
    <div className="min-h-screen bg-void text-ink font-inter antialiased">
      <Header />
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
