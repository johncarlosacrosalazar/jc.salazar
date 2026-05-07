"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Layers, Smartphone, Zap, Monitor, CheckCircle2, X, Maximize2, Star } from "lucide-react";
import Image from "next/image";


export default function Neo360WebsiteDesignPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#266fab]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-[#4bb1ff]/5 blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:pt-40 lg:pb-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-[#266fab] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#266fab] animate-pulse" />
            Next-Generation Web Design
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Digital Experiences <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#266fab] to-[#4bb1ff]">
              That Drive Growth.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-500 max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just build websites; we engineer high-performance, conversion-optimized digital assets that elevate your brand and dominate your market.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#266fab] to-[#4bb1ff] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(10,153,147,0.3)] transition-shadow flex items-center gap-2">
              Get a Free Proposal <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              View Our Portfolio
            </button>
          </motion.div>
        </div>
        
        {/* Mockup Preview - Right Column */}
        <motion.div 
          className="flex-1 w-full relative z-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-2 overflow-hidden shadow-2xl relative rotate-0 lg:-rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="aspect-[4/3] w-full relative overflow-hidden flex items-center justify-center">
              <Image 
                src="/assets/images/neo360/hero-mockup.png"
                alt="Neo360 Hero Workspace Mockup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
          
          {/* Decorative element behind mockup */}
          <div className="absolute top-[10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#266fab]/20 to-[#4bb1ff]/20 blur-[80px] -z-10" />
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-[#f4f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">Built for <span className="text-[#266fab]">Performance</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our methodology combines stunning aesthetics with rigorous engineering to deliver websites that outrank, outperform, and outlast the competition.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized Core Web Vitals and blazing fast load times for maximum retention." },
              { icon: Smartphone, title: "Mobile-First", desc: "Flawless responsive design that looks and feels native on any device." },
              { icon: Code2, title: "Clean Architecture", desc: "Scalable, secure, and maintainable codebases built on modern stacks." },
              { icon: Layers, title: "Growth-Driven", desc: "Strategic UX/UI choices designed specifically to maximize conversion rates." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#266fab]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#266fab]/10 flex items-center justify-center text-[#266fab] mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-[#266fab] mb-4"
            >
              Featured Work
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">Our <span className="text-[#266fab]">Masterpieces</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Explore some of the high-converting digital experiences we've engineered for industry leaders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Successglo", img: "successglo.jpg", category: "Corporate" },
              { name: "Culum Capital", img: "culumcapital.jpg", category: "Finance" },
              { name: "Hwakong", img: "hwakong.jpg", category: "Retail" },
              { name: "Dr. Andrew Dutton", img: "dr-andrew.png", category: "Healthcare" },
              { name: "JL Eye Specialist", img: "jl-eye.jpg", category: "Healthcare" },
              { name: "Dr. Pam Tan", img: "drpam-tan.jpg", category: "Healthcare" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-[0_20px_40px_rgba(10,153,147,0.15)] hover:border-[#266fab]/40 hover:-translate-y-2 transition-all duration-500 bg-slate-100"
              >
                <div 
                  className="w-full h-full bg-top hover:bg-bottom transition-all duration-[8s] ease-in-out bg-cover cursor-pointer"
                  style={{ backgroundImage: `url('/assets/images/neo360/portfolio/${item.img}')` }}
                  onClick={() => setSelectedImage(`/assets/images/neo360/portfolio/${item.img}`)}
                />
                <div 
                  className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-end justify-between"
                >
                  <div>
                    <div className="text-[#4bb1ff] text-xs font-bold uppercase tracking-wider mb-1 drop-shadow-md">{item.category}</div>
                    <h3 className="text-white font-bold text-2xl drop-shadow-md">{item.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-lg">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2">
              View Full Portfolio <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section - High Contrast Dark Mode */}
      <section className="py-32 px-6 bg-[#05203b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://neo360.digital/wp-content/themes/Divi/core/admin/fonts/modules.svg')] opacity-5" />
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#4bb1ff]/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Our Proven <br/><span className="text-[#4bb1ff]">Delivery Process</span></h2>
              <p className="text-slate-400 mb-8 text-lg">We execute with precision. Every project follows a battle-tested framework ensuring transparency, quality, and timely delivery.</p>
              
              <div className="space-y-6">
                {[
                  "Discovery & Strategic Planning",
                  "UX/UI Design & Prototyping",
                  "Full-Stack Development",
                  "QA Testing & Optimization",
                  "Launch & Post-Go-Live Support"
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#266fab]/20 border border-[#4bb1ff]/30 text-[#4bb1ff] flex items-center justify-center font-bold text-sm group-hover:scale-110 group-hover:bg-[#4bb1ff] group-hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-xl text-slate-200 group-hover:text-white transition-colors">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#266fab] to-[#4bb1ff] rounded-3xl blur-[120px] opacity-25 mix-blend-screen pointer-events-none" />
              <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase font-mono">neo_delivery_tracker.exe</span>
                  <div className="w-12" /> {/* spacer to balance layout */}
                </div>

                {/* Dashboard Metrics Panel */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl">
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider font-bold block mb-1">SEO SCORE</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-white">98</span>
                      <span className="text-xs text-[#4bb1ff] font-bold font-mono">/ 100</span>
                    </div>
                    <div className="w-full bg-slate-800/50 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#266fab] to-[#4bb1ff] h-full w-[98%]" />
                    </div>
                  </div>
                  <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl">
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider font-bold block mb-1">CONVERSION GROWTH</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-white">+14.2%</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1.5 mt-3.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live Campaign Optimized
                    </span>
                  </div>
                </div>

                {/* Active Tracking Status Timeline */}
                <div className="bg-slate-900/40 border border-slate-800/60 p-5 rounded-2xl space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800/60">
                    <span className="text-xs font-bold text-slate-400">Project Timeline</span>
                    <span className="px-2 py-0.5 rounded bg-[#266fab]/10 border border-[#266fab]/30 text-[#4bb1ff] text-[9px] font-black uppercase tracking-wider">Phase 3: Active</span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { step: "Phase 1: Discovery & Strategy", status: "completed", desc: "Target audience mapped & technical SEO plan approved." },
                      { step: "Phase 2: High-Converting UX Design", status: "completed", desc: "Interactive Figma layout concepts fully finalized." },
                      { step: "Phase 3: Clean Architecture Dev", status: "active", desc: "Next.js engineering & core web vital tuning in progress." },
                    ].map((phase, idx) => (
                      <div key={idx} className="flex gap-3 text-left">
                        <div className="flex flex-col items-center">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all duration-500 ${
                            phase.status === 'completed' 
                              ? 'bg-[#266fab]/20 border-[#266fab] text-[#4bb1ff]' 
                              : 'bg-slate-950 border-[#4bb1ff] text-[#4bb1ff] animate-pulse shadow-[0_0_12px_rgba(75,177,255,0.4)]'
                          }`}>
                            {phase.status === 'completed' ? '✓' : '●'}
                          </div>
                          {idx < 2 && <div className={`w-[2px] h-10 ${phase.status === 'completed' ? 'bg-[#266fab]' : 'bg-slate-800/60'}`} />}
                        </div>
                        <div className="flex-1 pb-1">
                          <h4 className={`text-xs font-bold transition-colors ${phase.status === 'active' ? 'text-white' : 'text-slate-400'}`}>{phase.step}</h4>
                          <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-relaxed">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">What Clients Say <br/><span className="text-[#266fab]">About Working With Us</span></h2>
            <div className="flex items-center justify-center gap-2 mt-6 mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="font-bold text-slate-900 text-lg">5.0</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">Based on 17 Google Reviews</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { name: "Saumya Sahi Kumar", time: "3 years ago", text: "Neo360 is one of the best if not the very best digital marketing agency in Singapore. If you want creativity in abundance, integrity, dedication, 200% effort and RESULTS, then this the agency is the one for you. They work hand and hand with you to understand your goals and objectives-from there on, you can take a back seat and they will get you to the finish line towards your targets." },
              { name: "Hwee Ching Ho", time: "3 years ago", text: "We have worked team at Neo360 for almost 10 years now! And they are creative, professional and very efficient. It's been a great partnership and we look forward to more great years!" },
              { name: "Sivam Kumar", time: "3 years ago", text: "We have nothing but praise for the amazing team at NEO360 for their professional ethics, amazing creativity and concepts. They guided us through this journey in many ways. Shei Wah and Sonia clearly understood the vision & aesthetics for our venture. Thank you for your tireless work!" },
              { name: "CT Chua", time: "3 years ago", text: "Neo360 drives value and maximises budget. They have added a whole new dimension of growth to our business through their digital campaigns. Great partner to work with!!!" },
              { name: "Janice Chua", time: "3 years ago", text: "Worked with Neo360 for a year to raise awareness and generate leads for a new product. Shei Wah and team were quick in responding to my enquiries. Despite having to work with a thin project budget, they provided good advice on channel and ad strategy and possible ways to optimize the campaign." },
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-lg hover:border-[#266fab]/30 transition-all duration-300"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <span className="text-xs text-slate-500">{review.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#266fab]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4bb1ff]/20 to-transparent mix-blend-overlay pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Ready to <span className="text-[#4bb1ff]">Dominate?</span></h2>
          <p className="text-lg md:text-xl text-[#b2d6e5] mb-8 max-w-2xl mx-auto">
            Stop losing customers to outdated design. Partner with Neo360 and transform your website into your most powerful growth engine.
          </p>
          <button className="px-8 py-4 rounded-full bg-white text-[#266fab] font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl">
            Start Your Transformation <ArrowRight />
          </button>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full overflow-y-auto smooth-scroll">
                <img 
                  src={selectedImage} 
                  alt="Portfolio Full View" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
