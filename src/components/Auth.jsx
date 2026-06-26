import React, { useState } from 'react';
import { Circle, Sparkles, LayoutTemplate, Download, LogIn, UserPlus } from 'lucide-react';
import { DB } from '../utils/db';

export function Auth({ onLoginSuccess }) {
  const [tab, setTab] = useState('login');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // Verification State
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [unverifiedEmail, setUnverifiedEmail] = useState('');

  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // Register State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regConfirm, setRegConfirm] = useState('');

  const handleLogin = async () => {
    setError('');
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPass })
      });
      const data = await res.json();
      
      if (!res.ok) {
        if (data.needsVerification) {
          setUnverifiedEmail(data.email);
          setIsVerifying(true);
        }
        throw new Error(data.error || 'Login failed');
      }
      
      localStorage.setItem('rf_token', data.token);
      localStorage.setItem('rf_user', JSON.stringify(data.user));
      onLoginSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setError('');
    setMessage('');
    if (regPass !== regConfirm) return setError('Passwords do not match.');
    
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName: regName, email: regEmail, password: regPass })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      
      setMessage(data.message);
      setUnverifiedEmail(data.email);
      setIsVerifying(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setError('');
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: unverifiedEmail, code: verificationCode })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Verification failed');
      
      localStorage.setItem('rf_token', data.token);
      localStorage.setItem('rf_user', JSON.stringify(data.user));
      onLoginSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError('');
    setMessage('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/resend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: unverifiedEmail })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Resend failed');
      
      setMessage('A new code has been sent to your email.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Replacement handles all the functions

  return (
    <div className="flex-1 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Left Side: Welcome / Info */}
        <div className="hidden lg:flex w-1/2 bg-slate-900 text-white flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-600/10 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/10">
              <Circle className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">EduAi Reports</span>
          </div>

          <div className="relative z-10 max-w-lg mt-auto mb-auto">
            <h1 className="text-5xl font-bold leading-[1.1] mb-6 font-serif">Craft Professional Reports with AI.</h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">Join thousands of professionals using EduAi Reports to generate, style, and export stunning PDF reports in seconds.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500/20 p-2.5 rounded-lg text-indigo-300 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Powered by Gemini AI</h3>
                  <p className="text-slate-400 text-sm mt-1">Generate full reports from a single prompt, rewrite sections, and fix grammar instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-2.5 rounded-lg text-emerald-300 mt-1">
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Premium Templates</h3>
                  <p className="text-slate-400 text-sm mt-1">Choose from modern, clean, and professional layouts tailored for any industry.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sky-500/20 p-2.5 rounded-lg text-sky-300 mt-1">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Flawless PDF Export</h3>
                  <p className="text-slate-400 text-sm mt-1">Export your work to crisp, pixel-perfect A4 PDFs with just one click.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-sm text-slate-500 font-medium">
            © 2026 EduAi Reports Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side: Auth Forms */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-50 p-6 lg:p-12 overflow-y-auto">
          <div className="w-full max-w-[420px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 sm:p-10 relative">
            
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
              <div className="bg-slate-900 p-2 rounded-xl">
                <Circle className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">EduAi Reports</span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
              <p className="text-slate-500 text-sm">Enter your details to access your reports.</p>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
              <button 
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${tab === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                onClick={() => setTab('login')}
              >Sign In</button>
              <button 
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${tab === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                onClick={() => setTab('register')}
              >Create Account</button>
            </div>

            {error && <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}
            {message && <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-lg text-sm">{message}</div>}

            {isVerifying ? (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-lg font-bold mb-2">Verify your email</h3>
                <p className="text-sm text-slate-500 mb-6">We sent a 6-digit code to <strong>{unverifiedEmail}</strong>.</p>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Verification Code</label>
                  <input value={verificationCode} onChange={e => setVerificationCode(e.target.value)} type="text" maxLength={6} className="w-full px-4 py-2.5 text-center tracking-[0.5em] text-lg bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="000000" />
                </div>
                
                <button onClick={handleVerify} disabled={loading} className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mb-4">
                  {loading ? 'Verifying...' : 'Verify Email'}
                </button>
                
                <button onClick={handleResend} disabled={loading} className="w-full py-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors">
                  Didn't receive the code? Resend
                </button>
                <button onClick={() => setIsVerifying(false)} className="w-full mt-2 py-2 text-slate-400 hover:text-slate-600 text-xs transition-colors">
                  Back to login
                </button>
              </div>
            ) : tab === 'login' ? (
              <div className="animate-in fade-in">
                <div className="mb-5">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="email" className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" placeholder="you@example.com" />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-medium text-slate-700">Password</label>
                  </div>
                  <input value={loginPass} onChange={e => setLoginPass(e.target.value)} type="password" className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" placeholder="••••••••" />
                </div>
                <button onClick={handleLogin} disabled={loading} className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" /> {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Display Name</label>
                  <input value={regName} onChange={e => setRegName(e.target.value)} type="text" className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" placeholder="Alex Mercer" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input value={regEmail} onChange={e => setRegEmail(e.target.value)} type="email" className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" placeholder="alex@example.com" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                  <input value={regPass} onChange={e => setRegPass(e.target.value)} type="password" className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" placeholder="••••••••" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password</label>
                  <input value={regConfirm} onChange={e => setRegConfirm(e.target.value)} type="password" className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" placeholder="••••••••" />
                </div>
                <button onClick={handleRegister} disabled={loading} className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4" /> {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
