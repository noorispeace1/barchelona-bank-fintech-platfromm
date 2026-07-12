'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PublicHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Minimum 3 routes for logged out
  const loggedOutRoutes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
  ];

  // Minimum 5 routes for logged in
  const loggedInRoutes = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Investments', path: '/investments' },
    { name: 'P2P/Escrow', path: '/p2p' },
    { name: 'Cards', path: '/card' },
    { name: 'Settings', path: '/settings' },
  ];

  const currentRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050e0a]/80 backdrop-blur-md border-b border-emerald-900/30">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-500/20 rounded flex items-center justify-center border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <div className="font-bold text-lg leading-tight hidden sm:block">
            <span className="block text-gray-200">BARCHELONA</span>
            <span className="block text-emerald-500 text-[10px] uppercase tracking-[0.2em]">BANK FINTECH</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {currentRoutes.map((route) => (
            <Link key={route.name} href={route.path} className="hover:text-emerald-400 transition-colors">
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button 
            onClick={() => setIsLoggedIn(!isLoggedIn)} 
            className="text-xs text-gray-500 hover:text-white underline mr-4"
          >
            Toggle Auth (Dev)
          </button>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                Go to App
              </Link>
              <div className="w-8 h-8 rounded-full bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                U
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className="px-5 py-2.5 rounded-lg border border-emerald-700/50 hover:bg-emerald-900/20 transition-colors">Log In</Link>
              <Link href="/register" className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">Sign up</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050e0a] border-b border-emerald-900/30 absolute w-full left-0 top-full shadow-2xl">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {currentRoutes.map((route) => (
              <Link 
                key={route.name} 
                href={route.path} 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setIsLoggedIn(!isLoggedIn)} 
              className="text-left text-sm text-emerald-500 py-2"
            >
              Toggle Logged In State: {isLoggedIn ? 'Yes' : 'No'}
            </button>

            {isLoggedIn ? (
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/dashboard" className="text-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">Go to App</Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/login" className="text-center px-5 py-2.5 rounded-lg border border-emerald-700/50 hover:bg-emerald-900/20 transition-colors">Log In</Link>
                <Link href="/register" className="text-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
