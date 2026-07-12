'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* HeroUI v3 Style Card */}
      <div className="relative w-full max-w-md p-8 rounded-[2rem] bg-[#0f1915]/80 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-4">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-400">Sign in to your Barchelona Bank account</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* HeroUI Style Input: Email */}
          <div className="relative bg-[#050a08]/50 rounded-xl transition-all duration-200 border-2 border-transparent focus-within:border-emerald-500/50 hover:bg-[#050a08]/80">
            <label 
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                isFocusedEmail || email 
                  ? 'top-2 text-[10px] text-emerald-500 font-semibold' 
                  : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
              }`}
            >
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full bg-transparent px-4 pt-6 pb-2 text-white text-sm focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              required
            />
          </div>

          {/* HeroUI Style Input: Password */}
          <div className="relative bg-[#050a08]/50 rounded-xl transition-all duration-200 border-2 border-transparent focus-within:border-emerald-500/50 hover:bg-[#050a08]/80">
            <label 
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                isFocusedPassword || password 
                  ? 'top-2 text-[10px] text-emerald-500 font-semibold' 
                  : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
              }`}
            >
              Password
            </label>
            <input 
              type="password" 
              className="w-full bg-transparent px-4 pt-6 pb-2 text-white text-sm focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              required
            />
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center mt-0.5">
                <input type="checkbox" className="peer hidden" />
                <div className="w-4 h-4 rounded-[0.3rem] bg-[#050a08] border border-gray-700 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-colors flex items-center justify-center">
                  <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
            </label>
            <Link href="#" className="text-xs text-emerald-500 hover:text-emerald-400 transition-colors font-medium">
              Forgot password?
            </Link>
          </div>

          <Link href="/dashboard" className="block w-full text-center py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98]">
            Sign In
          </Link>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/register" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
