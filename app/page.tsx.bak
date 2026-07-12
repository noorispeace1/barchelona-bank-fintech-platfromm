import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07130e] text-white font-sans selection:bg-emerald-500/30">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-emerald-900/30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500/20 rounded flex items-center justify-center border border-emerald-500/30">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <div className="font-bold text-lg leading-tight">
            <span className="block text-gray-200">GLOBAL</span>
            <span className="block text-emerald-500 text-xs tracking-wider">DOLLAR BANK</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-white border-b-2 border-emerald-500 pb-1">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="px-5 py-2.5 rounded-lg border border-emerald-700/50 hover:bg-emerald-900/20 transition-colors">Log In</a>
          <a href="#" className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">Sign up</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Hero Left */}
          <div className="space-y-8 relative z-10">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              GLOBAL DOLLAR BANK:<br />
              YOUR PREMIER<br />
              SECURE PARTNER
            </h1>
            <p className="text-gray-400 max-w-md text-lg">
              Corporate modern and secure universal ecommerce.
            </p>
            <button className="px-8 py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
              Create Now
            </button>
          </div>

          {/* Hero Right - 3D Bank Icon Placeholder */}
          <div className="relative flex justify-center items-center h-[400px]">
             {/* Glow effect behind the bank */}
             <div className="absolute w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]" />
             
             {/* Instead of the generated image which we couldn't copy, we'll create a majestic CSS/SVG bank */}
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl filter" style={{ filter: 'drop-shadow(0 0 30px rgba(16,185,129,0.3))' }}>
                  <defs>
                    <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3f4f6" />
                      <stop offset="50%" stopColor="#9ca3af" />
                      <stop offset="100%" stopColor="#4b5563" />
                    </linearGradient>
                    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#854d0e" />
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
                  
                  {/* Inner roof triangle for depth */}
                  <polygon points="200,60 100,110 300,110" fill="#374151" />

                  {/* Huge Dollar Sign */}
                  <text x="200" y="240" fontSize="120" fontWeight="900" fill="url(#silver)" textAnchor="middle" dominantBaseline="middle" style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}>$</text>
                </svg>
             </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CEO Card */}
          <div className="lg:col-span-4 relative group">
            {/* Golden border wrapper */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#b8955c] via-[#dfca8d] to-[#b8955c] rounded-2xl blur-[1px] opacity-70"></div>
            <div className="relative bg-[#131b17] p-8 rounded-2xl h-full flex flex-col items-center border-[2px] border-transparent" style={{ backgroundClip: 'padding-box' }}>
              
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#dfca8d] mb-6 relative bg-[#1e293b]">
                 <Image 
                   src="/lemon.jpg" 
                   alt="Md. Limon Miah" 
                   fill 
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 192px"
                 />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Md. Limon Miah</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">CEO & Founder</p>
              <p className="text-[#dfca8d] text-sm uppercase tracking-widest mb-8">Global Dollar Bank</p>
              
              {/* Signature SVG */}
              <svg className="h-12 w-32" viewBox="0 0 100 40">
                <path d="M 10 30 C 20 10, 30 10, 40 30 C 50 40, 60 10, 70 20 C 80 30, 90 20, 95 25" fill="transparent" stroke="#dfca8d" strokeWidth="2" />
                <path d="M 20 20 L 40 20" stroke="#dfca8d" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl bg-[#0f1915]">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-emerald-900/30 text-emerald-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Global Banking Rails</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Create banking accounts on demand. Start transacting with ease.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-emerald-900/30 text-emerald-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Profit Split Matrix</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Build smart workflows and grow capabilities on demand.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Advisory Box */}
            <div className="relative group flex-1">
              {/* Golden border wrapper */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#b8955c] via-[#dfca8d] to-[#b8955c] rounded-2xl blur-[1px] opacity-70"></div>
              <div className="relative bg-[#131b17] p-8 rounded-2xl h-full border-[2px] border-transparent" style={{ backgroundClip: 'padding-box' }}>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">AI-Driven Personal Advisory</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* USA AI */}
                  <div className="p-6 rounded-xl bg-black/40 border border-gray-800/50 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      {/* US Flag SVG */}
                      <svg className="w-8 h-6 rounded shadow-sm" viewBox="0 0 300 200">
                        <rect width="300" height="200" fill="#bf0a30"/>
                        <rect width="300" height="15.38" fill="#fff"/>
                        <rect width="300" height="15.38" y="30.76" fill="#fff"/>
                        <rect width="300" height="15.38" y="61.53" fill="#fff"/>
                        <rect width="300" height="15.38" y="92.3" fill="#fff"/>
                        <rect width="300" height="15.38" y="123.07" fill="#fff"/>
                        <rect width="300" height="15.38" y="153.84" fill="#fff"/>
                        <rect width="300" height="15.38" y="184.61" fill="#fff"/>
                        <rect width="120" height="107.69" fill="#002868"/>
                        {/* Simplified stars */}
                        <circle cx="60" cy="53" r="10" fill="#fff" opacity="0.5"/>
                      </svg>
                      <h4 className="text-emerald-500 font-semibold text-lg">USA AI:</h4>
                    </div>
                    <h5 className="text-white font-medium mb-3">Tax Compliance & Local Investment</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Lobe Of Tax Compliance & local investment for Global Dollar Bank client accounts.
                    </p>
                  </div>

                  {/* UK AI */}
                  <div className="p-6 rounded-xl bg-black/40 border border-gray-800/50 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      {/* UK Flag SVG */}
                      <svg className="w-8 h-6 rounded shadow-sm" viewBox="0 0 60 30">
                        <rect width="60" height="30" fill="#012169"/>
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                        <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10"/>
                        <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6"/>
                      </svg>
                      <h4 className="text-emerald-500 font-semibold text-lg">UK AI:</h4>
                    </div>
                    <h5 className="text-white font-medium mb-3">Regulatory Guardrails & Europe Markets</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Cross-border banking made seamless. Navigate EU & UK specific financial regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
