'use client';

import React, { useRef } from 'react';
import { ArrowRight, Bot, GraduationCap, PanelsTopLeft, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SectionHeading from '../SectionHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: PanelsTopLeft,
    title: 'High-Converting Websites & Portals',
    badge: 'Popular Choice',
    badgeStyle: 'bg-gold/10 text-gold border-gold/30',
    desc: 'Custom, high-speed business websites engineered for modern branding, search visibility, and maximum visitor conversion.',
    features: [
      'Mobile-First Next.js & React Architecture',
      'Core Web Vitals & Speed Optimization',
      'Lead Form & CRM Integration',
      'Complete On-Page SEO Setup',
    ],
    tags: ['Next.js', 'React', 'WordPress', 'Tailwind CSS'],
  },
  {
    icon: GraduationCap,
    title: 'Online Academies & LMS Platforms',
    badge: 'Turnkey Solution',
    badgeStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    desc: 'Turn knowledge into automated revenue with custom learning portals, student management, and integrated sales funnels.',
    features: [
      'Course Delivery & Student Portals',
      'WooCommerce & Payment Gateways',
      'GoHighLevel Automated Lead Funnels',
      'White-Label Academy Setup',
    ],
    tags: ['LearnPress', 'WooCommerce', 'GoHighLevel', 'WordPress'],
  },
  {
    icon: Layers,
    title: 'Custom Web Apps & Admin Portals',
    badge: 'Scalable Architecture',
    badgeStyle: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    desc: 'Tailored web applications, internal dashboards, and database workflows built around your exact operational needs.',
    features: [
      'Secure Auth & Role-Based Access',
      'PostgreSQL & Database Workflows',
      'REST & WebSocket API Systems',
      'AWS Serverless Cloud Setup',
    ],
    tags: ['Next.js', 'Laravel', 'PostgreSQL', 'AWS'],
  },
  {
    icon: Bot,
    title: 'AI Assistants & Lead Automation',
    badge: 'Cutting-Edge AI',
    badgeStyle: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    desc: 'Smart AI chatbots and automated workflows that answer customer inquiries and capture leads 24 hours a day.',
    features: [
      'Retrieval-Augmented Generation (RAG)',
      'OpenAI API & Custom Knowledge Bases',
      'Real-Time WebSockets & Presence',
      '24/7 Automated Lead Capture',
    ],
    tags: ['OpenAI', 'RAG', 'Laravel Reverb', 'WebSockets'],
  },
];

export default function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative bg-void py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto w-full relative z-[2]">
        <SectionHeading eyebrow="Solutions That Drive Results" title="Services Built for Growth" />
        <p className="max-w-3xl text-ash text-base sm:text-lg leading-relaxed -mt-6 mb-10 sm:mb-14">
          Whether you need a high-impact marketing website, a full learning platform, or custom web software, I deliver end-to-end solutions that help your business scale.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, badge, badgeStyle, desc, features, tags }) => (
            <article 
              key={title} 
              className="service-card group bg-card/60 border border-white/10 p-6 sm:p-7 rounded-sm hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-gold/5"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/25 text-gold group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <span className={`px-2.5 py-1 border text-[10px] font-extrabold uppercase tracking-wider rounded-sm ${badgeStyle}`}>
                    {badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-barlow text-xl font-bold text-ink mb-3 leading-snug group-hover:text-gold transition-colors">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-ash leading-relaxed mb-6">
                  {desc}
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-steel">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Footer */}
              <div className="border-t border-white/5 pt-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 text-steel-light text-[10px] font-semibold uppercase tracking-wider rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* High-Converting Strategy Banner */}
        <div className="mt-12 sm:mt-14 border border-gold/30 bg-gradient-to-r from-card/80 via-card/50 to-gold/5 p-6 sm:p-8 rounded-sm shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gold/5 blur-3xl pointer-events-none" />
          <div className="w-full flex-1 max-w-2xl space-y-2 relative z-[2]">
            <div className="flex items-center gap-2 text-gold font-barlow text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} className="shrink-0" /> Free Consultation & Scope Review
            </div>
            <h4 className="font-barlow text-xl sm:text-2xl font-bold text-ink leading-tight">
              Have a project in mind but not sure what tech stack you need?
            </h4>
            <p className="text-xs sm:text-sm text-ash leading-relaxed">
              Tell me your business goals. I’ll provide a clear project roadmap, scope estimate, and tech recommendation—free of charge.
            </p>
          </div>
          <a 
            href="mailto:johncarlosacrosalazar@gmail.com?subject=Free%20Project%20Consultation%20%2F%20Scope%20Review&body=Hi%20John%20Carlo,%0A%0AI%20would%20like%20a%20free%20consultation%20and%20tech%20recommendation%20for%20my%20upcoming%20project.%0A%0AProject%20Overview:%20[Describe%20your%20idea%20or%20goals]" 
            className="inline-flex shrink-0 items-center justify-center gap-3 px-8 py-4 bg-gold text-void font-barlow text-xs font-extrabold tracking-widest uppercase rounded-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-gold/15 relative z-[2] w-full md:w-auto text-center whitespace-nowrap"
          >
            Get Free Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

