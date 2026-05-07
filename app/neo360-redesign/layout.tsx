import { Metadata } from "next";
import Image from "next/image";
import { ChevronDown, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Phone, Menu, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design & Development | Neo360",
  description: "High-performance, growth-driven website design and development services. We build digital experiences that convert.",
};

export default function Neo360Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#4bb1ff]/30 selection:text-slate-900">
      {/* Top Announcement Bar */}
      <div className="relative z-[60] bg-[#05203b] text-white py-2 px-4 xl:px-6 border-b border-[#266fab]/30">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#4bb1ff] tracking-wider uppercase font-bold text-[10px] sm:text-xs">Call Us</span>
            <a href="tel:+6586917784" className="hover:text-[#4bb1ff] transition-colors flex items-center gap-1 font-semibold text-xs sm:text-sm"><Phone size={14} /> +65 8691 7784</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 opacity-80">
              <a href="https://www.facebook.com/NEO360.Digital/" target="_blank" rel="noreferrer" className="hover:text-[#4bb1ff] hover:scale-110 transition-all"><Facebook size={14} /></a>
              <a href="https://twitter.com/NEO360_Digital" target="_blank" rel="noreferrer" className="hover:text-[#4bb1ff] hover:scale-110 transition-all"><Twitter size={14} /></a>
              <a href="https://www.linkedin.com/company/neo360-digital" target="_blank" rel="noreferrer" className="hover:text-[#4bb1ff] hover:scale-110 transition-all"><Linkedin size={14} /></a>
              <a href="https://instagram.com/neo360.digital" target="_blank" rel="noreferrer" className="hover:text-[#4bb1ff] hover:scale-110 transition-all"><Instagram size={14} /></a>
              <a href="https://www.youtube.com/channel/UCQs_i_dYMBNElmiWQUGykOg" target="_blank" rel="noreferrer" className="hover:text-[#4bb1ff] hover:scale-110 transition-all"><Youtube size={14} /></a>
            </div>
            <img src="https://cdn-bhggc.nitrocdn.com/vzwVIMbXCDbDgwRcdobOcOWqGyVQkTZk/assets/images/optimized/rev-123fd0f/neo360.digital/wp-content/uploads/2023/07/googlestarRev.png" alt="Google 5 Stars" className="h-5 sm:h-6 w-auto object-contain" />
          </div>
        </div>
      </div>

      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      {/* Neo360 Custom Header */}
      <header className="sticky top-0 left-0 right-0 z-50 px-4 xl:px-6 py-2 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/images/neo360/NEO360-NEW-logo-81x82-1.png" 
              alt="Neo360 Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </div>
          
          {/* Hamburger Menu button */}
          <label htmlFor="menu-toggle" className="lg:hidden p-2 text-slate-700 cursor-pointer hover:text-[#266fab] transition-colors">
            <Menu size={24} />
          </label>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] font-bold text-slate-700">
            <a href="#" className="hover:text-[#266fab] transition-colors">Home</a>
            
            <div className="group relative py-4">
              <a href="#" className="flex items-center gap-1 hover:text-[#266fab] transition-colors">About Us <ChevronDown size={14}/></a>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Partners</a>
              </div>
            </div>

            <div className="group relative py-4">
              <a href="#" className="flex items-center gap-1 hover:text-[#266fab] transition-colors">Industry <ChevronDown size={14}/></a>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Medical</a>
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Education</a>
              </div>
            </div>

            <div className="group relative py-4">
              <a href="#" className="flex items-center gap-1 hover:text-[#266fab] transition-colors">360 Marketing <ChevronDown size={14}/></a>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                
                <div className="group/sub relative">
                  <a href="#" className="flex items-center justify-between px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">
                    Display Ads <ChevronRight size={14}/>
                  </a>
                  <div className="absolute top-0 left-full ml-1 hidden group-hover/sub:block w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Automation</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Email Marketing</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Content Marketing</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Web Analytics</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Video Production</a>
                  </div>
                </div>

                <div className="group/sub relative">
                  <a href="#" className="flex items-center justify-between px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">
                    Social Media <ChevronRight size={14}/>
                  </a>
                  <div className="absolute top-0 left-full ml-1 hidden group-hover/sub:block w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Organic Social</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Facebook Ads</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Instagram Ads</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">LinkedIn Ads</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">TikTok Ads</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Social Listening</a>
                  </div>
                </div>

                <div className="group/sub relative">
                  <a href="#" className="flex items-center justify-between px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">
                    AI SEO Services <ChevronRight size={14}/>
                  </a>
                  <div className="absolute top-0 left-full ml-1 hidden group-hover/sub:block w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Case Study</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">SEO ROI Calculator</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">AI SEO Guide</a>
                  </div>
                </div>

                <div className="group/sub relative">
                  <a href="#" className="flex items-center justify-between px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">
                    Search <ChevronRight size={14}/>
                  </a>
                  <div className="absolute top-0 left-full ml-1 hidden group-hover/sub:block w-56 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">SEO SERVICES</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">LOCAL SEO</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">SEM SERVICES</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">PMax Ads</a>
                    <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">SEO GUIDE</a>
                  </div>
                </div>

              </div>
            </div>

            <a href="#" className="hover:text-[#266fab] transition-colors">COMPASS</a>

            <div className="group relative py-4">
              <a href="#" className="flex items-center gap-1 hover:text-[#266fab] transition-colors">Blog <ChevronDown size={14}/></a>
              <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">SEO</a>
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Digital Marketing</a>
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Social Media</a>
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Web Analytics</a>
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Video Production</a>
              </div>
            </div>

            <div className="group relative py-4">
              <a href="#" className="flex items-center gap-1 hover:text-[#266fab] transition-colors">Portfolio <ChevronDown size={14}/></a>
              <div className="absolute top-full right-0 hidden group-hover:block w-48 bg-white shadow-xl rounded-xl border border-slate-100 p-2 z-50">
                <a href="#" className="block px-4 py-2.5 text-slate-600 hover:text-[#266fab] hover:bg-slate-50 rounded-lg font-semibold">Website Design</a>
              </div>
            </div>

            <a href="#" className="hover:text-[#266fab] transition-colors">Contact Us</a>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <label htmlFor="menu-toggle" className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 lg:hidden cursor-default" />
      
      {/* Mobile Drawer Menu */}
      <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[110] shadow-2xl translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out lg:hidden p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <Image 
            src="/assets/images/neo360/NEO360-NEW-logo-81x82-1.png" 
            alt="Neo360 Logo" 
            width={36} 
            height={36} 
            className="object-contain"
          />
          <label htmlFor="menu-toggle" className="p-2 text-slate-500 cursor-pointer hover:text-[#266fab] transition-colors">
            <X size={20} />
          </label>
        </div>
        
        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-4 text-base font-bold text-slate-800 overflow-y-auto pr-2">
          <a href="#" className="hover:text-[#266fab] py-2 border-b border-slate-100 transition-colors">Home</a>
          
          <div className="py-2 border-b border-slate-100">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider block mb-2">About Us</span>
            <div className="pl-3 flex flex-col gap-2.5">
              <a href="#" className="text-slate-600 hover:text-[#266fab] text-sm font-semibold">Partners</a>
            </div>
          </div>

          <div className="py-2 border-b border-slate-100">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider block mb-2">Industry</span>
            <div className="pl-3 flex flex-col gap-2.5">
              <a href="#" className="text-slate-600 hover:text-[#266fab] text-sm font-semibold">Medical</a>
              <a href="#" className="text-slate-600 hover:text-[#266fab] text-sm font-semibold">Education</a>
            </div>
          </div>

          <div className="py-2 border-b border-slate-100">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider block mb-2">360 Marketing</span>
            <div className="pl-3 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-800 text-xs font-bold">Display Ads</span>
                <div className="pl-3 flex flex-col gap-1 text-slate-500 text-xs font-semibold">
                  <a href="#" className="hover:text-[#266fab]">Automation</a>
                  <a href="#" className="hover:text-[#266fab]">Email Marketing</a>
                  <a href="#" className="hover:text-[#266fab]">Content Marketing</a>
                  <a href="#" className="hover:text-[#266fab]">Web Analytics</a>
                  <a href="#" className="hover:text-[#266fab]">Video Production</a>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-800 text-xs font-bold">Social Media</span>
                <div className="pl-3 flex flex-col gap-1 text-slate-500 text-xs font-semibold">
                  <a href="#" className="hover:text-[#266fab]">Organic Social</a>
                  <a href="#" className="hover:text-[#266fab]">Facebook Ads</a>
                  <a href="#" className="hover:text-[#266fab]">Instagram Ads</a>
                  <a href="#" className="hover:text-[#266fab]">LinkedIn Ads</a>
                  <a href="#" className="hover:text-[#266fab]">TikTok Ads</a>
                  <a href="#" className="hover:text-[#266fab]">Social Listening</a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-[#266fab] py-2 border-b border-slate-100 transition-colors">COMPASS</a>
          <a href="#" className="hover:text-[#266fab] py-2 border-b border-slate-100 transition-colors">Blog</a>
          <a href="#" className="hover:text-[#266fab] py-2 border-b border-slate-100 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[#266fab] py-2 transition-colors">Contact Us</a>
        </nav>
      </div>

      <main className="relative bg-white">
        {children}
      </main>

      {/* Neo360 Custom Footer */}
      <footer className="bg-[#041528] text-slate-300 border-t border-slate-900 pt-20 pb-12 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-slate-900">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-extrabold text-lg uppercase tracking-wider mb-4 border-l-4 border-[#266fab] pl-3">About NEO360</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                We help you <strong className="text-white">LISTEN</strong>, <strong className="text-white">REACH</strong> and <strong className="text-white">ENGAGE</strong> with your customers to grow your business through a 360 approach.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold text-sm mb-3">Connect With Us:</h5>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/NEO360.Digital/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center hover:bg-[#266fab] hover:border-[#266fab] hover:text-white hover:scale-110 transition-all"><Facebook size={16} /></a>
                <a href="https://twitter.com/NEO360_Digital" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center hover:bg-[#266fab] hover:border-[#266fab] hover:text-white hover:scale-110 transition-all"><Twitter size={16} /></a>
                <a href="https://www.linkedin.com/company/neo360-digital" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center hover:bg-[#266fab] hover:border-[#266fab] hover:text-white hover:scale-110 transition-all"><Linkedin size={16} /></a>
                <a href="https://instagram.com/neo360.digital" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center hover:bg-[#266fab] hover:border-[#266fab] hover:text-white hover:scale-110 transition-all"><Instagram size={16} /></a>
                <a href="https://www.youtube.com/channel/UCQs_i_dYMBNElmiWQUGykOg" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center hover:bg-[#266fab] hover:border-[#266fab] hover:text-white hover:scale-110 transition-all"><Youtube size={16} /></a>
              </div>
            </div>

            <div className="pt-2">
              <a href="https://g.page/neo360/review?rc" target="_blank" rel="noreferrer" className="inline-block hover:scale-105 transition-transform">
                <img 
                  src="https://cdn-bhggc.nitrocdn.com/vzwVIMbXCDbDgwRcdobOcOWqGyVQkTZk/assets/images/optimized/rev-123fd0f/neo360.digital/wp-content/uploads/2023/11/img-google-review-grey.png" 
                  alt="Google Review Grey" 
                  className="h-14 w-auto object-contain bg-slate-900/30 p-2 border border-slate-800/60 rounded-xl"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6 text-sm text-slate-400">
            <div>
              <h4 className="text-white font-extrabold text-lg uppercase tracking-wider mb-4 border-l-4 border-[#266fab] pl-3">Contact Information</h4>
              <p className="font-bold text-white mb-2">Singapore Office</p>
              <p className="leading-relaxed mb-3">Level 36 The Gateway East, 152 Beach Road, Singapore, 189721</p>
              <div className="space-y-1 text-slate-300">
                <p>Phone: <a href="tel:+6586917784" className="text-[#4bb1ff] hover:underline">+65 8691 7784</a></p>
                <p>WhatsApp: <a href="https://wa.me/6586917784" className="text-[#4bb1ff] hover:underline">+65 8691 7784</a></p>
                <p>Email: <a href="mailto:info@neo360.digital" className="text-[#4bb1ff] hover:underline">info@neo360.digital</a></p>
              </div>
            </div>

            <div className="border-t border-slate-900 pt-4">
              <p className="font-semibold text-white mb-1">Hours of Operation</p>
              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday & Sunday: Closed</p>
            </div>

            <div className="border-t border-slate-900 pt-4">
              <h5 className="font-bold text-white mb-2">Malaysia Office</h5>
              <p className="leading-relaxed">
                Unit 6, Level 4, SetiaWalk Mall (Block K), SetiaWalk, Persiaran Wawasan, Pusat Bandar Puchong 47160 Puchong, Selangor, Malaysia
              </p>
            </div>
          </div>

          {/* Column 3: Latest Blog Posts */}
          <div className="space-y-6">
            <h4 className="text-white font-extrabold text-lg uppercase tracking-wider mb-4 border-l-4 border-[#266fab] pl-3">Latest Blog Posts</h4>
            <div className="space-y-5">
              {[
                {
                  title: "Meta Ads in 2026: Why Your Strategy Might Already Be Outdated",
                  url: "https://neo360.digital/blog/meta-ads-2026-update/",
                  img: "https://cdn-bhggc.nitrocdn.com/vzwVIMbXCDbDgwRcdobOcOWqGyVQkTZk/assets/images/optimized/rev-123fd0f/neo360.digital/wp-content/uploads/2026/04/meta-ads-messaging-480x251.png"
                },
                {
                  title: "What Coca-Cola’s Brand DNA Reveals — And Why It Matters for AI Visibility",
                  url: "https://neo360.digital/blog/coca-cola-brand-dna-ai-visibility/",
                  img: "https://cdn-bhggc.nitrocdn.com/vzwVIMbXCDbDgwRcdobOcOWqGyVQkTZk/assets/images/optimized/rev-123fd0f/neo360.digital/wp-content/uploads/2026/03/coca-cola-pepsi-co-brand-dna-480x251.png"
                },
                {
                  title: "Why Some Brands Get Recommended by AI — And Others Don’t",
                  url: "https://neo360.digital/blog/brands-get-recommended-by-ai/",
                  img: "https://cdn-bhggc.nitrocdn.com/vzwVIMbXCDbDgwRcdobOcOWqGyVQkTZk/assets/images/optimized/rev-123fd0f/neo360.digital/wp-content/uploads/2026/03/ai-brand-recommedations-480x251.png"
                }
              ].map((post, i) => (
                <a href={post.url} key={i} target="_blank" rel="noreferrer" className="flex gap-4 group">
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex-shrink-0">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-300 group-hover:text-[#4bb1ff] transition-colors line-clamp-2 leading-snug">{post.title}</h5>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Sub Footer Block */}
        <div className="max-w-[1400px] mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
            <span>Copyright © 2026</span>
            <a href="https://neo360.digital/" className="text-slate-400 hover:text-white font-bold">NEO360</a>
            <span className="text-slate-700">::</span>
            <span className="text-slate-400">Listen. Reach. Engage.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
            <a href="https://neo360.digital/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-800">|</span>
            <a href="https://neo360.digital/terms-conditions/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="text-slate-800">|</span>
            <span>GST Registration Number: 201409455C</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
