/**
 * PORTFOLIO DATA CONSTANTS
 * 
 * This file acts as the single source of truth for all content on the website.
 * Centralizing data here makes it easier to update project details, 
 * professional experience, and tech stack items without digging into UI code.
 */

import React from 'react';
import { Code2, Globe, Shield } from 'lucide-react';

// Import local image assets (Next.js automatically handles optimization)
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
import imgChatLeads from '../public/assets/images/chatleads-rag.webp';
import imgNeo360RedesignTrial from '../public/assets/images/neo_360_redesign_trial.png';
import imgCustomWebAdminPortal from '../public/assets/images/custom-webadmin-portal.webp';
import imgTamagotchi from '../public/assets/images/tamagotchi.webp';
import imgTaxIqAcademy from '../public/assets/images/TIQA.webp';
import imgGenWealthAcademy from '../public/assets/images/gen_wealth.webp';
import imgMagicTaxAcademy from '../public/assets/images/magictaxacademy.webp';
import imgPortMacquarie from '../public/assets/images/portmacquarie.webp';
import imgJdTaxProAcademy from '../public/assets/images/jdtaxproacademy-.webp';
import imgEroTaxEducation from '../public/assets/images/erotaxeducation.webp';
import imgAxisProTaxAcademy from '../public/assets/images/axisprotaxacademy.webp';
import imgAtpTaxAcademy from '../public/assets/images/atptaxacademycourses.webp';

/**
 * Career Experience Data
 */
export const experiences = [
  {
    company: 'Edge Digital',
    role: 'Lead Web Developer',
    period: '2020 — 2025',
    desc: 'Architected OnePeople—a platform connecting people through open dialogue and global voting—and delivered mission-critical COVID-19 campaign sites for Singapore. Engineered nationwide APIs and optimized AWS serverless infrastructure for high-traffic scalability.',
    tags: ['React.js', 'Node.js', 'AWS Lambda', 'QA Lead'],
    highlight: true, // Used to trigger priority styling in UI
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

/**
 * Portfolio Projects Data
 * Grouped by category for the filtering system
 */
export const projects = [
  {
    category: 'Laravel / AI',
    icon: <Code2 size={11} />,
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    items: [
      { 
        title: 'ChatLeads', 
        url: '', 
        desc: 'An advanced AI-powered chatbot featuring Retrieval-Augmented Generation (RAG) for highly contextual responses, seamlessly integrated with the OpenAI API. The platform incorporates real-time presence tracking and online status detection powered by Laravel Reverb and WebSockets, ensuring a dynamic and responsive user experience.', 
        image: imgChatLeads,
        featured: true,
        impact: '🤖 RAG AI & Real-Time WebSockets'
      },
    ],
  },
  {
    category: 'ReactJS / Next.js',
    icon: <Code2 size={11} />,
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { 
        title: 'Custom Web Admin Portal', 
        url: '', 
        desc: "A tailored admin portal built around the client's operational needs, featuring secure authentication, flexible content management, and PostgreSQL-backed data workflows. Developed with Next.js, PhuckJS, NextAuth, and PostgreSQL.", 
        image: imgCustomWebAdminPortal,
        featured: true,
        impact: '🔑 Secure Auth & PostgreSQL Data Workflows'
      },
      { 
        title: 'Neo360 Redesign Trial', 
        url: '/neo360-redesign', 
        desc: 'A high-performance landing page redesign trial built with Next.js and Tailwind CSS. Showcases clean architecture, dynamic client-side metric dashboards, smooth CSS animations, and authoritative brand visuals. (Note: This is a redesign trial request / design concept, not an official brand project).', 
        image: imgNeo360RedesignTrial,
        featured: true,
        impact: '⚡ High-Performance Agency Redesign'
      },
      { 
        title: 'My EWL Pet Concept', 
        url: '/tamagotchi', 
        desc: 'An interactive Tamagotchi-style virtual pet concept built with Next.js and TypeScript. Features dog and cat selection, state-driven SVG animations, server-synchronised time, daily care actions, changing wellbeing needs, aging and lifecycle behaviour.', 
        image: imgTamagotchi,
        featured: false
      },
      { title: 'Phuckjs Page Builder', url: '', desc: 'ReactJS page builder, very good for building client website.', image: imgPhuckjs, featured: false },
      { title: 'JSX Dashboard', url: '', desc: 'Next.js with PostgreSQL and NextAuth Dashboard.', image: imgJsxDashboard, featured: false },
    ],
  },
  {
    category: 'WordPress',
    categories: ['WordPress', 'Elementor', 'LearnPress', 'GoHighLevel', 'WooCommerce'],
    icon: <Globe size={11} />,
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    items: [
      { 
        title: 'Tax IQ Academy', 
        url: 'https://taxiqacademy.com/', 
        desc: 'A tax education academy built with WordPress, LearnPress, and WooCommerce, featuring online course delivery plus GoHighLevel form integrations and automated lead-nurturing workflows.', 
        image: imgTaxIqAcademy,
        featured: true,
        impact: '📈 6+ White-Label Academies Powered'
      },
      { title: 'ATP Tax Academy', url: 'https://atptaxacademycourses.com/', desc: 'A tax education academy built with WordPress, LearnPress, and WooCommerce, featuring online course delivery plus GoHighLevel form integrations and automated lead-nurturing workflows.', image: imgAtpTaxAcademy, featured: false },
      { title: 'Axis Pro Tax Academy', url: 'https://axisprotaxacademy.com/', desc: 'A tax education academy built with WordPress, LearnPress, and WooCommerce, featuring online course delivery plus GoHighLevel form integrations and automated lead-nurturing workflows.', image: imgAxisProTaxAcademy, featured: false },
      { title: 'ERO Tax Education', url: 'https://erotaxeducation.com/', desc: 'A tax education academy built with WordPress, LearnPress, and WooCommerce, featuring online course delivery plus GoHighLevel form integrations and automated lead-nurturing workflows.', image: imgEroTaxEducation, featured: false },
      { title: 'JD Tax Pro Academy', url: 'https://jdtaxproacademy.com/', desc: 'A tax education academy built with WordPress, LearnPress, and WooCommerce, featuring online course delivery plus GoHighLevel form integrations and automated lead-nurturing workflows.', image: imgJdTaxProAcademy, featured: false },
      { title: 'Gen Wealth Tax Academy', url: 'https://genwealthtaxacademy.com/', desc: 'A white-label Tax IQ Academy site built with WordPress, LearnPress, and WooCommerce, with GoHighLevel forms and automation supporting lead capture and customer journeys.', image: imgGenWealthAcademy, featured: false },
      { title: 'Magic Tax Academy', url: 'https://magictaxacademy.com/', desc: 'A white-label Tax IQ Academy site built with WordPress, LearnPress, and WooCommerce, with GoHighLevel forms and automation supporting lead capture and customer journeys.', image: imgMagicTaxAcademy, featured: false },
    ],
  },
  {
    category: 'WordPress / Elementor',
    categories: ['WordPress', 'Elementor'],
    icon: <Globe size={11} />,
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    items: [
      { 
        title: 'Port Macquarie Aged Care Expo', 
        url: 'https://portmacquarieagedcareexpo.com.au/', 
        desc: 'An accessible event website built with WordPress and Elementor for the Port Macquarie Aged Care Expo. It connects seniors, caregivers, healthcare professionals, and the wider community with aged-care providers through event information, exhibitor listings, free-ticket registration, testimonials, and galleries.', 
        image: imgPortMacquarie,
        featured: true,
        impact: '♿ Accessible Event & Ticket Booking Site'
      },
    ],
  },
  {
    category: 'WordPress',
    icon: <Globe size={11} />,
    badge: 'bg-gold/10 text-gold border-gold/20',
    items: [
      { 
        title: 'StayPrepared', 
        url: 'https://web.archive.org/web/20210625034815/https://stayprepared.sg/oximeter/', 
        desc: 'Stay Prepared is a Temasek Foundation initiative that strengthens Singapore’s emergency resilience through health programs, free mask distribution, training, and community preparedness.', 
        image: imgStayprepared,
        featured: true,
        impact: '🛡️ Singapore National Resilience Initiative'
      },
      { title: 'Oximiter', url: 'https://web.archive.org/web/20210625034815/https://stayprepared.sg/oximeter/', desc: 'COVID-19 pulse oximeter e-commerce site for Singapore.', image: imgOximeter, featured: false },
      { title: 'BYOBClean', url: 'https://web.archive.org/web/20210620040304/https://stayprepared.sg/byobclean/', desc: 'BYOBclean is a Temasek Foundation initiative where Singapore households bring used bottles to collect 500ml alcohol-free sanitizer, promoting reuse and reducing waste.', image: imgByobclean, featured: false },
      { title: 'Staymasked', url: 'https://web.archive.org/web/20220630102230/https://stayprepared.sg/staymasked/', desc: '#StayMasked & #StayPrepared by Temasek Foundation provide free masks to SG residents via vending machines, boosting community health and resilience.', image: imgStaymasked, featured: false },
      { title: 'Mouth Gargle', url: 'https://web.archive.org/web/20230401044153/https://stayprepared.sg/staywell/', desc: 'StayWell Mouth Gargle is a Temasek Foundation initiative in Singapore providing 250ml PVP-I gargle to households to support hygiene and help reduce the spread of germs and viruses.', image: imgStaywell, featured: false },
    ],
  },
  {
    category: 'Static Website',
    icon: <Globe size={11} />,
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { 
        title: 'Pentagreen', 
        url: 'https://www.pentagreen.com/index.html', 
        desc: 'Pentagreen Capital finances sustainable infrastructure projects across Asia, focusing on Southeast Asia to support clean infrastructure and advance climate goals.', 
        image: imgPentagreen,
        featured: true,
        impact: '🌐 Sustainable Infrastructure Platform'
      },
    ],
  },
  {
    category: 'ReactJS / Node.js',
    icon: <Code2 size={11} />,
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { 
        title: 'OnePeople Online', 
        url: 'https://onepeople.online/', 
        desc: "OnePeople is a platform that connects people with different views through open dialogue and global voting. By sharing perspectives and participating in referendums, it helps communities understand each other and use collective insight to shape a better future.", 
        image: imgOnepeople,
        featured: true,
        impact: '⚡ Global Dialogue & Voting Web App'
      },
      { title: 'Carlo and Rosette', url: 'https://carloandrosette.vercel.app/', desc: 'A beautiful wedding website built with Next.js and Framer Motion.', image: imgCarloRosette, featured: false },
    ],
  },
  {
    category: 'Next.js / Payload CMS',
    icon: <Code2 size={11} />,
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { title: "Lola's Plates & Pours", url: 'https://lola-s-plates-and-pours.vercel.app/', desc: "Lola's Plates & Pours in Cavite offers a cozy, Tagaytay-like vibe with comfort food, coffee, cocktails, and live music. Pet-friendly with free WiFi—ideal for late-night hangouts.", image: imgLolasPlates, featured: false },
    ],
  },
  {
    category: 'Laravel',
    icon: <Code2 size={11} />,
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
    items: [
      { title: 'The Knights Templar', url: 'https://web.archive.org/web/20220310161843/https://theknightstemplar.info/', desc: 'Historic chivalric order member portal and portal.', image: imgKnights, featured: false },
    ],
  },
  {
    category: 'Codeigniter',
    icon: <Code2 size={11} />,
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    items: [
      { title: 'B4B Academy', url: 'https://www.b4b.academy/', desc: 'B4B Academy social learning platform.', image: imgB4B, featured: false },
    ],
  },
  {
    category: 'QA / Quality Assurance',
    icon: <Shield size={11} />,
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    items: [
      { 
        title: 'Temasek Review 2025', 
        url: 'https://www.temasekreview.com.sg/', 
        desc: 'The Temasek Review 2025 outlines a record S$434 billion net portfolio value, driven by investments in Singapore, China, the US, and India.', 
        image: imgTemasek2022,
        featured: true,
        impact: '🏆 Flagship S$434B Net Portfolio QA'
      },
      { title: 'Temasek Review 2023', url: 'https://tr23.temasekreview.com.sg/', desc: 'The Temasek Review 2023 ("Our Compass in a Complex World") highlights a net portfolio value of S$382 billion.', image: imgTemasek2025, featured: false },
    ],
  },
];

export { hero };
