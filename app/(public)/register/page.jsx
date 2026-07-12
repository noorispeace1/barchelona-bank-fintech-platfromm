'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const FloatingInput = ({ label, name, type = "text" }) => {
    const isFocused = focusedField === name;
    const hasValue = formData[name].length > 0;
    
    return (
      <div className="relative bg-[#050a08]/50 rounded-xl transition-all duration-200 border-2 border-transparent focus-within:border-emerald-500/50 hover:bg-[#050a08]/80">
        <label 
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            isFocused || hasValue 
              ? 'top-2 text-[10px] text-emerald-500 font-semibold' 
              : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
          }`}
        >
          {label}
        </label>
        <input 
          type={type}
          name={name}
          className="w-full bg-transparent px-4 pt-6 pb-2 text-white text-sm focus:outline-none"
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => handleFocus(name)}
          onBlur={handleBlur}
          required
        />
      </div>
    );
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* HeroUI v3 Style Card */}
      <div className="relative w-full max-w-lg p-8 md:p-10 rounded-[2rem] bg-[#0f1915]/80 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-4">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-sm text-gray-400">Join Barchelona Bank Fintech Platform today</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FloatingInput label="First Name" name="firstName" />
            <FloatingInput label="Last Name" name="lastName" />
          </div>
          
          <FloatingInput label="Email Address" name="email" type="email" />
          <FloatingInput label="Create Password" name="password" type="password" />

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center mt-0.5 shrink-0">
                <input type="checkbox" className="peer hidden" required />
                <div className="w-5 h-5 rounded-[0.4rem] bg-[#050a08] border border-gray-700 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 transition-colors flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-gray-400 leading-relaxed">
                By creating an account, you agree to our{' '}
                <Link href="/legal/terms" className="text-emerald-500 hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/legal/privacy" className="text-emerald-500 hover:underline">Privacy Policy</Link>.
              </span>
            </label>
          </div>

          <Link href="/dashboard" className="block w-full text-center py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98] mt-4">
            Create Account
          </Link>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
