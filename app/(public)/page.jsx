'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PublicPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    { name: "Sarah Jenkins", role: "CEO, TechFlow", text: "Barchelona Bank Fintech has completely transformed how we handle cross-border payments. The AI advisory is a game-changer." },
    { name: "David Chen", role: "Founder, GlobalTrade", text: "The profit split matrix and automated tax compliance saved us hundreds of hours this quarter. Highly recommended!" },
    { name: "Elena Rodriguez", role: "CFO, Innovate Corp", text: "Secure, fast, and incredibly intuitive. It's the banking platform we've been waiting for." }
  ];

  const faqs = [
    { q: "How long does it take to open an account?", a: "Most corporate accounts are approved within 24-48 hours after KYC verification." },
    { q: "Are there transaction limits?", a: "Limits are dynamically adjusted based on your business profile and compliance tier." },
    { q: "Which countries do you support?", a: "We currently support businesses registered in the US, UK, EU, and over 50 other jurisdictions." },
    { q: "How does the AI Advisory work?", a: "Our AI continuously monitors local tax laws and regulations, alerting you to compliance requirements before you make a transaction." }
  ];

  // Auto-advance testimonial
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <main className="w-full">
      {/* 1. Hero Section (Height limited to 70vh) */}
      <section className="relative min-h-[70vh] flex flex-col justify-center max-w-7xl mx-auto px-8 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 transition-all duration-1000 translate-y-0 opacity-100">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              BARCHELONA BANK:<br />
              YOUR PREMIER<br />
              SECURE PARTNER
            </h1>
            <p className="text-gray-400 max-w-md text-lg">
              Corporate modern and secure universal ecommerce and fintech platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="inline-block text-center px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                Create Now
              </Link>
              <Link href="#services" className="inline-block text-center px-8 py-4 rounded-lg border border-emerald-700/50 hover:bg-emerald-900/20 text-white font-medium transition-all">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[400px]">
             <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />
             <div className="relative z-10 w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-500 cursor-pointer">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl filter" style={{ filter: 'drop-shadow(0 0 30px rgba(16,185,129,0.3))' }}>
                  <defs>
                    <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3f4f6" />
                      <stop offset="50%" stopColor="#9ca3af" />
                      <stop offset="100%" stopColor="#4b5563" />
                    </linearGradient>
                  </defs>
                  {/* Base steps */}
                  <rect x="50" y="320" width="300" height="20" fill="url(#silver)" rx="4" />
                  <rect x="70" y="300" width="260" height="20" fill="url(#silver)" rx="2" />
                  <rect x="90" y="280" width="220" height="20" fill="url(#silver)" rx="2" />
                  
                  {/* Pillars */}
                  <rect x="100" y="140" width="20" height="140" fill="url(#silver)" rx="2" />
                  <rect x="150" y="140" width="20" height="140" fill="url(#silver)" rx="2" />
                  <rect x="230" y="140" width="20" height="140" fill="url(#silver)" rx="2" />
                  <rect x="280" y="140" width="20" height="140" fill="url(#silver)" rx="2" />

                  {/* Roof base */}
                  <rect x="80" y="120" width="240" height="20" fill="url(#silver)" rx="2" />
                  
                  {/* Triangle roof */}
                  <polygon points="200,40 70,120 330,120" fill="url(#silver)" />
                  <polygon points="200,60 100,110 300,110" fill="#374151" />

                  {/* Huge Dollar Sign */}
                  <text x="200" y="240" fontSize="120" fontWeight="900" fill="url(#silver)" textAnchor="middle" dominantBaseline="middle" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}>$</text>
                </svg>
             </div>
          </div>
        </div>
        
        {/* Visual flow indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest mb-1">Scroll</span>
          <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="bg-[#050e0a] py-16 border-y border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Active Businesses", value: "10,000+" },
            { label: "Daily Volume", value: "$500M+" },
            { label: "Countries Supported", value: "150+" },
            { label: "Platform Uptime", value: "99.99%" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2 hover:scale-105 transition-transform cursor-default">
              <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-emerald-500 text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services / Highlights */}
      <section id="services" className="max-w-7xl mx-auto px-8 py-24 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Banking Designed for Scale</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to manage your global finances, all in one powerful platform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Global Banking Rails", desc: "Create banking accounts on demand. Start transacting with ease across borders.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
            { title: "Profit Split Matrix", desc: "Build smart workflows, distribute revenues instantly, and grow capabilities on demand.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            { title: "Automated Compliance", desc: "Real-time AML checks and regulatory compliance monitoring built into every transaction.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          ].map((feature, i) => (
             <div key={i} className="p-8 rounded-2xl bg-[#0f1915] border border-emerald-900/20 hover:border-emerald-500/50 transition-colors group">
                <div className="p-4 rounded-xl bg-emerald-900/30 text-emerald-500 w-fit mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-xl mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* 4. AI Advisory (Existing but enhanced) & Founder Card */}
      <section className="bg-gradient-to-b from-[#07130e] to-[#0a1f16] py-24 border-t border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* CEO Card */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#b8955c] via-[#dfca8d] to-[#b8955c] rounded-2xl blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-[#131b17] p-8 rounded-2xl h-full flex flex-col items-center border-[2px] border-transparent" style={{ backgroundClip: 'padding-box' }}>
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#dfca8d] mb-6 relative bg-[#1e293b] flex items-center justify-center shrink-0">
                   <Image 
                     src="/lemon.jpg" 
                     alt="Md. Limon Miah" 
                     fill 
                     className="object-cover"
                     sizes="(max-width: 768px) 128px, 192px"
                     priority
                   />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Md. Limon Miah</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">CEO & Founder</p>
                <p className="text-[#dfca8d] text-sm uppercase tracking-widest mb-8 text-center leading-tight">BARCHELONA BANK FINTECH</p>
                <svg className="h-12 w-32 group-hover:stroke-white transition-colors" viewBox="0 0 100 40">
                  <path d="M 10 30 C 20 10, 30 10, 40 30 C 50 40, 60 10, 70 20 C 80 30, 90 20, 95 25" fill="transparent" stroke="inherit" style={{stroke: '#dfca8d'}} strokeWidth="2" />
                  <path d="M 20 20 L 40 20" stroke="inherit" style={{stroke: '#dfca8d'}} strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* AI Advisory Box */}
            <div className="lg:col-span-8 relative group flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b8955c] via-[#dfca8d] to-[#b8955c] rounded-2xl blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-[#131b17] p-8 rounded-2xl h-full border-[2px] border-transparent flex flex-col justify-center" style={{ backgroundClip: 'padding-box' }}>
                <h3 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">AI-Driven Personal Advisory</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* USA AI */}
                  <div className="p-6 rounded-xl bg-black/40 border border-gray-800/50 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-6 bg-blue-900 rounded shadow-inner flex items-center justify-center text-[10px] font-bold text-white border border-blue-700">USA</div>
                      <h4 className="text-emerald-500 font-semibold text-lg">USA AI:</h4>
                    </div>
                    <h5 className="text-white font-medium mb-3">Tax Compliance & Local Investment</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Lobe Of Tax Compliance & local investment for Barchelona Bank client accounts.
                    </p>
                  </div>
                  {/* UK AI */}
                  <div className="p-6 rounded-xl bg-black/40 border border-gray-800/50 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-6 bg-red-900 rounded shadow-inner flex items-center justify-center text-[10px] font-bold text-white border border-red-700">UK</div>
                      <h4 className="text-emerald-500 font-semibold text-lg">UK AI:</h4>
                    </div>
                    <h5 className="text-white font-medium mb-3">Regulatory Guardrails & Europe Markets</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Cross-border banking made seamless. Navigate EU & UK specific financial regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Categories / Use Cases */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built For Every Stage</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Whether you are just starting out or moving millions daily, our platform adapts to your needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["For Startups", "For Enterprises", "For Global Traders"].map((cat, idx) => (
             <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer border border-emerald-900/30">
               <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/40 transition-colors z-10" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-[#07130e]/80 to-transparent z-20" />
               <div className="absolute bottom-0 left-0 p-8 z-30 w-full transform group-hover:-translate-y-2 transition-transform">
                 <h3 className="text-2xl font-bold text-white mb-2">{cat}</h3>
                 <p className="text-emerald-400 text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   View Solutions <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </p>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials Slider */}
      <section className="bg-[#050e0a] py-24 border-y border-emerald-900/30 overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>
          <div className="relative h-[220px] md:h-[180px]">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                  idx === activeTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                <div className="text-emerald-500 mb-6 flex justify-center gap-1">
                   {[1,2,3,4,5].map(star => (
                     <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   ))}
                </div>
                <p className="text-lg md:text-xl text-gray-300 italic mb-8 px-4">"{test.text}"</p>
                <div>
                  <h4 className="text-white font-bold">{test.name}</h4>
                  <p className="text-emerald-500 text-sm">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === activeTestimonial ? 'bg-emerald-500 scale-125' : 'bg-gray-700 hover:bg-gray-500'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="max-w-3xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-emerald-900/30 rounded-lg overflow-hidden bg-[#0f1915]">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-emerald-900/20 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-emerald-500 transform transition-transform shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Call to Action (CTA) */}
      <section className="relative overflow-hidden py-24 bg-emerald-900/10 border-t border-emerald-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of businesses worldwide managing their cross-border payments with Barchelona Bank Fintech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
              Open Your Account
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-lg bg-transparent border border-gray-600 hover:border-white text-white font-medium transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
