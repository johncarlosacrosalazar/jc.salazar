import React from 'react';
import { Mail, Phone, MapPin, Code, Layers, Server, Terminal, ChevronRight, Award, Users, BookOpen, Globe, Briefcase, Zap } from 'lucide-react';
import hero from "../public/assets/images/hero.png";
const PortfolioLandingPage = () => {
  const experiences = [
    {
      company: "Edge Digital",
      role: "Lead Web Developer",
      period: "2020 — 2025",
      desc: "Architected the OnePeople online ecosystem and delivered mission-critical COVID-19 campaign sites for Singapore. Engineered nationwide centralized APIs and optimized AWS serverless infrastructure for high-traffic scalability.",
      tags: ['React.js', 'Express.js', 'AWS Lambda', 'Serverless', 'QA Specialist'],
      highlight: true
    },
    {
      company: "Breakthrough4business",
      role: "Web Developer",
      period: "2017 — 2019",
      desc: "Built the 'B4B Academy' social platform from the ground up. Focused on social networking features, user engagement modules, and managed EC2 Ubuntu server environments.",
      tags: ['CodeIgniter', 'PHP', 'jQuery', 'AWS EC2', 'Ubuntu'],
      highlight: false
    },
    {
      company: "Leentech Network Solution",
      role: "Junior Programmer",
      period: "2016 — 2017",
      desc: "Developed custom e-commerce solutions using Magento and raw PHP. Pioneered the transition to mobile-first development using Ionic and jQuery Mobile.",
      tags: ['Magento', 'PHP', 'Ionic', 'jQuery Mobile'],
      highlight: false
    },
    {
      company: "Colegio De Amore",
      role: "IT Admin Staff",
      period: "2014 — 2016",
      desc: "Managed the campus-wide LAN infrastructure and digitized student record systems. Provided technical leadership for internal networking and hardware maintenance.",
      tags: ['LAN Networking', 'System Admin', 'Database Management'],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Ambient Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white group-hover:rotate-12 transition-all">JS</div>
            <span className="text-xl font-bold text-white tracking-tighter">Salazar<span className="text-blue-500">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">Stack</a>
            <a href="#leadership" className="hover:text-blue-400 transition-colors">Leadership</a>
            <a href="#contact" className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">Hire Me</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                <Zap size={14} /> Full-Stack Specialist
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tight">
                John Carlo <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Salazar.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l border-blue-500/30 pl-6">
                A Lead Web Developer driving business growth through modern code and legacy-hardened experience. Based in the Philippines, operating globally.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                  <MapPin size={18} className="text-blue-500" />
                  <span className="text-sm font-semibold text-slate-200">Trece Martires City, PH</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                  <Award size={18} className="text-emerald-500" />
                  <span className="text-sm font-semibold text-slate-200">10+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
               <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                  <img src={hero.src} alt="Hero" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-40"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Experience Section - All Roles Included */}
        <section id="experience" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-20">
              <h2 className="text-5xl font-black text-white tracking-tighter mb-4">Professional Path</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </div>

            <div className="relative space-y-12">
              {/* Timeline Connector Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-600 via-slate-800 to-transparent hidden md:block"></div>

              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-0 md:pl-16 group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-2 w-10 h-10 rounded-full border-4 border-[#020617] z-10 items-center justify-center hidden md:flex ${exp.highlight ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-slate-800'}`}>
                    {exp.highlight ? <Briefcase size={16} className="text-white" /> : <div className="w-2 h-2 bg-slate-500 rounded-full" />}
                  </div>

                  <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${exp.highlight ? 'bg-blue-600/[0.03] border-blue-500/20 hover:border-blue-500/40' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <span className={`text-xs font-black uppercase tracking-widest ${exp.highlight ? 'text-blue-500' : 'text-slate-500'}`}>{exp.period}</span>
                        <h3 className="text-3xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">{exp.company}</h3>
                        <p className="text-blue-500/80 font-mono text-sm font-bold uppercase tracking-tighter mt-1">{exp.role}</p>
                      </div>
                      {exp.highlight && <div className="px-4 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full h-fit">Current / Featured</div>}
                    </div>
                    <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-3xl">
                      {exp.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/5 text-slate-300 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider group-hover:border-blue-500/30 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Box Stack & Leadership */}
        <section id="stack" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
            
            {/* Tech Stack - Large Card */}
            <div className="lg:col-span-2 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden group">
              <h2 className="text-5xl font-black tracking-tighter mb-6 relative z-10">Full-Stack <br />Capabilities.</h2>
              <div className="grid grid-cols-2 gap-8 relative z-10">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mb-4">Frontend & Mobile</h4>
                  <ul className="space-y-2 text-sm font-bold">
                    <li>React / Next.js</li>
                    <li>Ionic Framework</li>
                    <li>jQuery Mobile</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 mb-4">Backend & Infra</h4>
                  <ul className="space-y-2 text-sm font-bold">
                    <li>Node / Express</li>
                    <li>AWS Lambda / EC2</li>
                    <li>PHP / Magento</li>
                    <li>Ubuntu / Linux</li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            </div>

            {/* Leadership Card */}
            <div id="leadership" className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/[0.08] transition-all group">
              <Users className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Lead by Example</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proven track record in team collaboration and music ministry leadership. I bridge the gap between people and technology.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-10 rounded-[3rem] bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-blue-500/50 transition-all">
              <BookOpen className="text-emerald-500 mb-6" size={40} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                <p className="text-emerald-500 font-mono text-[10px] font-bold uppercase mb-2">Class of 2014</p>
                <p className="text-slate-200 font-bold">BS in Computer Science</p>
                <p className="text-slate-500 text-xs">Colegio De Amore</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer / CTA */}
      <footer id="contact" className="py-40 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl md:text-8xl font-black text-white tracking-tighter mb-16">
            Ready for <span className="text-blue-600">v2.0?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:johncarlosacrosalazar@gmail.com" className="group flex items-center gap-4 px-8 py-5 bg-white text-black rounded-3xl font-black hover:bg-blue-600 hover:text-white transition-all w-full md:w-auto">
              <Mail /> START A CONVERSATION
            </a>
            <div className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl font-bold text-white w-full md:w-auto">
              <Phone size={20} className="text-blue-500" /> 0927-331-5906
            </div>
          </div>
          <div className="mt-24 space-y-4">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Built with Precision & Purpose</p>
            <p className="text-slate-500 text-sm italic">Trece Martires City, Philippines</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLandingPage;