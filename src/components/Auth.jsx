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
        {/* Left Side: Premium Black & White Landing Info */}
        <div className="hidden lg:flex w-1/2 bg-black text-white flex-col justify-between p-12 lg:p-20 relative overflow-hidden">
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="bg-white text-black p-2 rounded-lg">
              <Circle className="w-5 h-5 fill-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">EduAi Reports</span>
          </div>

          <div className="relative z-10 max-w-lg mt-auto mb-auto">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 font-serif tracking-tight">
              Welcome.
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed font-light">
              Experience the new standard in professional document generation. 
              <br/><br/>
              Log in to craft, design, and export stunning A4 reports seamlessly.
            </p>
          </div>

          <div className="relative z-10 text-xs text-neutral-600 font-medium tracking-wide uppercase">
            © 2026 EduAi Reports Inc.
          </div>
        </div>

        {/* Right Side: Minimalist Auth Forms (Show Nothing Else) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-6 lg:p-12 overflow-y-auto">
          <div className="w-full max-w-[400px]">
            
            <div className="flex lg:hidden items-center justify-center gap-3 mb-12">
              <div className="bg-black p-2 rounded-lg">
                <Circle className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-black">EduAi Reports</span>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-black mb-3 tracking-tight">Welcome Back</h2>
              <p className="text-neutral-500 text-sm font-light">Enter your details to access your reports.</p>
            </div>

            <div className="flex bg-neutral-100/50 p-1 rounded-xl mb-10 border border-neutral-100">
              <button 
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${tab === 'login' ? 'bg-white text-black shadow-sm border border-neutral-200' : 'text-neutral-500 hover:text-black'}`}
                onClick={() => setTab('login')}
              >Sign In</button>
              <button 
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${tab === 'register' ? 'bg-white text-black shadow-sm border border-neutral-200' : 'text-neutral-500 hover:text-black'}`}
                onClick={() => setTab('register')}
              >Create Account</button>
            </div>

            {error && <div className="mb-8 p-4 bg-white border border-red-200 text-red-600 rounded-xl text-sm font-medium">{error}</div>}
            {message && <div className="mb-8 p-4 bg-white border border-neutral-200 text-black rounded-xl text-sm font-medium">{message}</div>}

            {isVerifying ? (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-lg font-bold mb-2">Verify your email</h3>
                <p className="text-sm text-neutral-500 mb-8 font-light">We sent a 6-digit code to <strong className="font-medium text-black">{unverifiedEmail}</strong>.</p>
                
                <div className="mb-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Verification Code</label>
                  <input value={verificationCode} onChange={e => setVerificationCode(e.target.value)} type="text" maxLength={6} className="w-full px-4 py-3.5 text-center tracking-[0.75em] text-xl font-mono bg-neutral-50 border-transparent focus:bg-white border rounded-xl focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="000000" />
                </div>
                
                <button onClick={handleVerify} disabled={loading} className="w-full py-3.5 px-4 bg-black hover:bg-neutral-800 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2 mb-6">
                  {loading ? 'Verifying...' : 'Verify Email'}
                </button>
                
                <button onClick={handleResend} disabled={loading} className="w-full py-2 text-neutral-500 hover:text-black text-sm font-medium transition-colors">
                  Didn't receive the code? Resend
                </button>
                <button onClick={() => setIsVerifying(false)} className="w-full mt-2 py-2 text-neutral-400 hover:text-neutral-600 text-xs transition-colors">
                  Back to login
                </button>
              </div>
            ) : tab === 'login' ? (
              <div className="animate-in fade-in">
                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
                  <input value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="email" className="w-full px-4 py-3.5 bg-neutral-50 border-transparent focus:bg-white border rounded-xl text-sm focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="you@example.com" />
                </div>
                <div className="mb-10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Password</label>
                  <input value={loginPass} onChange={e => setLoginPass(e.target.value)} type="password" className="w-full px-4 py-3.5 bg-neutral-50 border-transparent focus:bg-white border rounded-xl text-sm focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="••••••••" />
                </div>
                <button onClick={handleLogin} disabled={loading} className="w-full py-3.5 px-4 bg-black hover:bg-neutral-800 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                  {loading ? 'Signing In...' : 'Sign In'} <LogIn className="w-4 h-4 ml-1" />
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in">
                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Display Name</label>
                  <input value={regName} onChange={e => setRegName(e.target.value)} type="text" className="w-full px-4 py-3.5 bg-neutral-50 border-transparent focus:bg-white border rounded-xl text-sm focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="Alex Mercer" />
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
                  <input value={regEmail} onChange={e => setRegEmail(e.target.value)} type="email" className="w-full px-4 py-3.5 bg-neutral-50 border-transparent focus:bg-white border rounded-xl text-sm focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="alex@example.com" />
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Password</label>
                  <input value={regPass} onChange={e => setRegPass(e.target.value)} type="password" className="w-full px-4 py-3.5 bg-neutral-50 border-transparent focus:bg-white border rounded-xl text-sm focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="••••••••" />
                </div>
                <div className="mb-10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Confirm Password</label>
                  <input value={regConfirm} onChange={e => setRegConfirm(e.target.value)} type="password" className="w-full px-4 py-3.5 bg-neutral-50 border-transparent focus:bg-white border rounded-xl text-sm focus:outline-none focus:ring-0 focus:border-black transition-all" placeholder="••••••••" />
                </div>
                <button onClick={handleRegister} disabled={loading} className="w-full py-3.5 px-4 bg-black hover:bg-neutral-800 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                  {loading ? 'Creating Account...' : 'Create Account'} <UserPlus className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
