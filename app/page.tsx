import React from 'react';
import { Mail, Phone, MapPin, Code, Layers, Server, Terminal, ChevronRight, Award, Users, BookOpen } from 'lucide-react';
import hero from "../public/assets/images/hero.png";

const PortfolioLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Subtle Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-black text-white tracking-tighter italic">
            JS<span className="text-blue-500">.</span>
          </span>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#leadership" className="hover:text-blue-400 transition-colors">Leadership</a>
            <a href="#contact" className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-blue-500 font-mono font-medium tracking-widest uppercase">Lead Web Developer</h2>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter">
              John Carlo <br /> Salazar<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-slate-800 pl-6">
              To contribute to the growth of the company using the skills I have developed over time in website development, while advancing alongside evolving technology.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
                <MapPin size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Trece Martires City, PH</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
                <Award size={18} className="text-emerald-500" />
                <span className="text-sm font-medium">10+ Years Experience</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-slate-800 shadow-2xl">
              <img src={hero.src} alt="John Carlo Salazar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">Career Milestones</h2>
            <p className="text-slate-500 font-mono">/ FULL PROFESSIONAL HISTORY</p>
          </div>

          <div className="space-y-12">
            {/* Edge Digital */}
            <div className="group relative grid md:grid-cols-12 gap-8 p-8 rounded-3xl bg-slate-900/20 hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all">
              <div className="md:col-span-4">
                <span className="text-blue-500 font-bold">2020 — 2025</span>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">Edge Digital</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">Web Developer / Lead Developer</p>
              </div>
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg leading-relaxed text-slate-300">
                  Led the OnePeople online project and developed multiple COVID-19 campaign websites for Singapore. 
                  Built a nationwide centralized service API and managed AWS serverless infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Express.js', 'AWS Lambda', 'QA Specialist (Temasek)'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-tighter px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* B4B */}
            <div className="group relative grid md:grid-cols-12 gap-8 p-8 rounded-3xl border border-slate-900/50 hover:border-slate-800 transition-all">
              <div className="md:col-span-4">
                <span className="text-slate-500 font-bold">2017 — 2019</span>
                <h3 className="text-2xl font-bold text-white mt-2">Breakthrough4business</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">Web Developer</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-400 leading-relaxed">
                  Developed 'B4B Academy' social platform using CodeIgniter and jQuery. 
                  Managed AWS EC2 Ubuntu server configurations.
                </p>
              </div>
            </div>

            {/* Leentech */}
            <div className="group relative grid md:grid-cols-12 gap-8 p-8 rounded-3xl border border-slate-900/50 hover:border-slate-800 transition-all">
              <div className="md:col-span-4">
                <span className="text-slate-500 font-bold">2016 — 2017</span>
                <h3 className="text-2xl font-bold text-white mt-2">Leentech Network Solution</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">Junior Programmer</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-400 leading-relaxed">
                  Engineered solutions in raw PHP and Magento. Transitioned to mobile development using jQuery Mobile and the Ionic framework.
                </p>
              </div>
            </div>

            {/* Colegio De Amore Staff */}
            <div className="group relative grid md:grid-cols-12 gap-8 p-8 rounded-3xl border border-slate-900/50 hover:border-slate-800 transition-all">
              <div className="md:col-span-4">
                <span className="text-slate-500 font-bold">2014 — 2016</span>
                <h3 className="text-2xl font-bold text-white mt-2">Colegio De Amore</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-1">IT Admin Staff</p>
              </div>
              <div className="md:col-span-8 text-slate-400 leading-relaxed">
                Oversee school computer networks (LAN) and handled administrative student records.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Education Section */}
      <section id="leadership" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-4">
              <Users className="text-blue-500" /> Leadership
            </h2>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <p className="text-lg leading-relaxed mb-4">
                Lead Developer responsible for successful project deliveries through effective team collaboration.
              </p>
              <p className="text-slate-400 italic">
                Active Church Primary Leader and Band Leader, managing people and music ministries.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-4">
              <BookOpen className="text-blue-500" /> Education
            </h2>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white">Colegio De Amore</h3>
              <p className="text-blue-400 font-medium">BS in Computer Science</p>
              <p className="text-slate-500 mt-2 font-mono italic">Class of 2010 — 2014</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section id="stack" className="py-32 px-6 bg-blue-600">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center text-white">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-8">Modern Stack. <br />Legacy Results.</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-md">
              From full-stack JavaScript to legacy PHP and mobile frameworks.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-4">Development</h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li>React.js / Express.js</li>
                  <li>PHP / Magento</li>
                  <li>Ionic / jQuery Mobile</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-4">Cloud & Ops</h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li>AWS Lambda / EC2</li>
                  <li>Ubuntu Server</li>
                  <li>LAN Networking</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"><Terminal size={40} /></div>
            <div className="h-40 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mt-8"><Server size={40} /></div>
            <div className="h-40 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"><Code size={40} /></div>
            <div className="h-40 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mt-8"><Layers size={40} /></div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">Let's talk code.</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-10">
            <a href="mailto:johncarlosacrosalazar@gmail.com" className="group text-xl font-bold text-white flex items-center gap-4 hover:text-blue-400 transition-colors">
              <span className="p-4 bg-slate-900 rounded-full group-hover:bg-blue-600 transition-colors"><Mail /></span>
              johncarlosacrosalazar@gmail.com
            </a>
            <div className="group text-xl font-bold text-white flex items-center gap-4">
              <span className="p-4 bg-slate-900 rounded-full"><Phone /></span>
              0927-331-5906
            </div>
          </div>
          <div className="pt-20 text-slate-600 text-sm font-mono flex flex-col items-center gap-4">
            <p>153 Mahogany St. Brgy Cabezas, Trece Martires City</p>
            <p>© 2026 John Carlo Salazar — Built with Next.js & Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLandingPage;