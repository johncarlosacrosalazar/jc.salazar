'use client';

import React, { useRef } from 'react';
import { ArrowRight, Bot, GraduationCap, PanelsTopLeft } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SectionHeading from '../SectionHeading';

const services = [
  { icon: PanelsTopLeft, title: 'Business Websites & Portals', desc: 'Fast, polished websites and secure internal tools designed around your business goals—not a generic template.', tags: ['Next.js', 'React', 'Laravel', 'WordPress'] },
  { icon: GraduationCap, title: 'Course & E-Commerce Platforms', desc: 'Online academies that connect course delivery, payments, lead capture, and follow-up into one reliable customer journey.', tags: ['LearnPress', 'WooCommerce', 'GoHighLevel'] },
  { icon: Bot, title: 'AI & Workflow Automation', desc: 'Practical AI chatbots, integrations, and automations that reduce repetitive work and help teams respond faster.', tags: ['OpenAI', 'RAG', 'APIs', 'Automation'] },
];

export default function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.service-card', {
      opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="relative bg-void py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading eyebrow="How I Can Help" title="Services Built for Growth" />
        <p className="max-w-3xl text-ash text-lg leading-relaxed -mt-6 mb-12">I help businesses launch dependable digital products—from the first customer-facing page to the systems and automation behind it.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <article key={title} className="service-card group bg-card/50 border border-ink/10 p-8 rounded-sm hover:border-gold/40 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/20 text-gold mb-7"><Icon size={24} /></div>
              <h3 className="font-barlow text-2xl font-bold text-ink mb-4">{title}</h3>
              <p className="text-sm text-ash leading-relaxed mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="px-3 py-1 bg-ink/5 text-steel-light text-[10px] font-bold uppercase tracking-wider">{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-gold bg-card/40 p-7">
          <div>
            <p className="font-barlow text-xl font-bold text-ink">Have a project in mind but not sure what stack you need?</p>
            <p className="text-sm text-ash mt-1">Tell me the business problem. I’ll help you identify the right first step.</p>
          </div>
          <a href="mailto:johncarlosacrosalazar@gmail.com?subject=Project%20Inquiry" className="inline-flex shrink-0 items-center gap-3 px-7 py-3.5 bg-gold text-void font-barlow text-xs font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all">Discuss Your Project <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
