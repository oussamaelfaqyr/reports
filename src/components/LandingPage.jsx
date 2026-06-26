import React, { useState, useEffect } from 'react';
import {
  Sparkles, LayoutTemplate, Download, ArrowRight, Check,
  FileText, Zap, Users, Star, ChevronDown, Menu, X,
  Shield, Globe, Clock, TrendingUp, PenTool, Eye
} from 'lucide-react';

export function LandingPage({ onGetStarted }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen font-sans antialiased">

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur border-b border-neutral-100 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 rounded-lg">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight">EduAi Reports</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm text-neutral-500 hover:text-black transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-neutral-500 hover:text-black transition-colors">How it works</a>
            <a href="#pricing" className="text-sm text-neutral-500 hover:text-black transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm text-neutral-500 hover:text-black transition-colors">Reviews</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={onGetStarted} className="text-sm font-medium text-neutral-500 hover:text-black transition-colors">Sign In</button>
            <button onClick={onGetStarted} className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-neutral-800 transition-colors">
              Get Started Free
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6 flex flex-col gap-5">
            <a href="#features" className="text-sm font-medium" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm font-medium" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#pricing" className="text-sm font-medium" onClick={() => setMenuOpen(false)}>Pricing</a>
            <button onClick={onGetStarted} className="bg-black text-white text-sm font-medium px-5 py-3 rounded-xl text-left">Get Started Free</button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f5f5f5_0%,_white_60%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-neutral-100 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-neutral-100 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-8">
            <Sparkles className="w-3 h-3" />
            Powered by Gemini AI
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            Reports.
            <br />
            <span className="text-neutral-400">Reimagined.</span>
          </h1>

          <p className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            EduAi Reports is the all-in-one AI-powered platform for creating, designing, 
            and exporting pixel-perfect professional PDF reports — in seconds, not hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="group bg-black text-white text-sm font-medium px-8 py-4 rounded-2xl hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg shadow-black/10"
            >
              Start Building for Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#how-it-works" className="text-sm text-neutral-500 hover:text-black transition-colors flex items-center gap-2">
              See how it works <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon: <Users className="w-4 h-4" />, label: '10,000+ users' },
              { icon: <FileText className="w-4 h-4" />, label: '50K+ reports generated' },
              { icon: <Star className="w-4 h-4" />, label: '4.9/5 rating' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-sm text-neutral-500">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-32 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Platform Features</p>
            <h2 className="text-5xl font-bold tracking-tight mb-6">Everything you need.<br/>Nothing you don't.</h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto font-light">A professional-grade toolkit purpose-built for creating stunning, polished reports.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'AI Report Generation',
                desc: 'Write a single prompt and let Gemini AI generate a fully structured, well-written report in seconds. Customize tone, length, and style instantly.',
              },
              {
                icon: <LayoutTemplate className="w-6 h-6" />,
                title: 'Premium Templates',
                desc: 'Choose from a curated library of professionally designed report templates. Corporate, academic, creative — there\'s a layout for every use case.',
              },
              {
                icon: <Download className="w-6 h-6" />,
                title: 'One-Click PDF Export',
                desc: 'Export any report to a crisp, pixel-perfect A4 PDF with a single click. Fonts, colors, and layouts render exactly as designed.',
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: 'Live Report Builder',
                desc: 'Fine-tune every section, heading, font, and color in real time using our powerful drag-and-drop visual builder.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'AI Section Assistant',
                desc: 'Stuck on a paragraph? Use in-line AI tools to rewrite, expand, summarize, or fix grammar on any section of your report.',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Secure & Private',
                desc: 'All your reports and data are stored securely. Email verification, JWT authentication, and encrypted storage keep your work safe.',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Cloud Sync',
                desc: 'Your reports are saved to the cloud and accessible from any device, any browser, anywhere in the world.',
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Version History',
                desc: 'Never lose your work. Every change is tracked so you can roll back to any previous version of your report at any time.',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Analytics & Insights',
                desc: 'Track how your reports perform. See who opened them, when, and for how long — directly from your dashboard.',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-neutral-300 hover:shadow-lg transition-all group">
                <div className="bg-black text-white rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">How It Works</p>
            <h2 className="text-5xl font-bold tracking-tight mb-6">Three steps to a<br/>perfect report.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Describe your report',
                desc: 'Type a short description of what your report should cover. Our AI understands context, structure, and your goals.',
              },
              {
                step: '02',
                title: 'Customize & refine',
                desc: 'Choose a template, adjust colors, fonts, and sections. Use the AI assistant to polish any part of the content.',
              },
              {
                step: '03',
                title: 'Export & share',
                desc: 'Download a pixel-perfect A4 PDF instantly. Share a link or send directly from the platform to any collaborator.',
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="text-8xl font-bold text-neutral-100 mb-4 leading-none">{step.step}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-32 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Testimonials</p>
            <h2 className="text-5xl font-bold tracking-tight mb-6">Loved by professionals.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah A.',
                role: 'Project Manager',
                text: 'EduAi Reports has completely transformed how our team handles client deliverables. What used to take half a day now takes 5 minutes.',
                stars: 5,
              },
              {
                name: 'Marcus L.',
                role: 'Educator & Researcher',
                text: 'I use it for academic reports and research summaries. The AI gets the structure right every single time. It\'s like having a writing assistant on call.',
                stars: 5,
              },
              {
                name: 'Zara K.',
                role: 'Business Consultant',
                text: 'The templates are gorgeous and the PDF quality is unmatched. My clients always ask how I produce such polished documents so quickly.',
                stars: 5,
              },
            ].map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-8 border border-neutral-100">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-8 font-light">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-neutral-400 text-xs mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Pricing</p>
            <h2 className="text-5xl font-bold tracking-tight mb-6">Simple, honest pricing.</h2>
            <p className="text-lg text-neutral-500 font-light">Start for free. Upgrade when you're ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-neutral-50 rounded-3xl p-10 border border-neutral-200">
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-6">Free</p>
              <div className="text-5xl font-bold mb-2">$0</div>
              <p className="text-neutral-500 text-sm mb-10 font-light">Forever free. No card required.</p>
              <ul className="space-y-4 mb-10">
                {['5 reports per month', 'Basic templates', 'PDF export', 'AI generation (limited)', 'Email support'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-black flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={onGetStarted} className="w-full py-3.5 border border-neutral-300 rounded-xl text-sm font-medium hover:border-black transition-colors">
                Get Started Free
              </button>
            </div>

            {/* Pro */}
            <div className="bg-black text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-5 right-5 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">Popular</div>
              <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-6">Pro</p>
              <div className="text-5xl font-bold mb-2">$12<span className="text-2xl text-neutral-400">/mo</span></div>
              <p className="text-neutral-500 text-sm mb-10 font-light">Everything you need to scale.</p>
              <ul className="space-y-4 mb-10">
                {['Unlimited reports', 'All premium templates', 'Priority PDF export', 'Unlimited AI generation', 'Priority support', 'Cloud sync & version history', 'Analytics dashboard'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-white flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={onGetStarted} className="w-full py-3.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-neutral-100 transition-colors">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-bold tracking-tight mb-8 leading-tight">
            Ready to build<br/>your first report?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 font-light leading-relaxed">
            Join thousands of professionals who create stunning, AI-powered reports in minutes.
          </p>
          <button
            onClick={onGetStarted}
            className="group bg-white text-black text-base font-medium px-10 py-5 rounded-2xl hover:bg-neutral-100 transition-all flex items-center gap-3 mx-auto shadow-xl"
          >
            Create Your Free Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black border-t border-neutral-900 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white text-black p-1.5 rounded-lg">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold text-white">EduAi Reports</span>
          </div>
          <p className="text-xs text-neutral-600">© 2026 EduAi Reports Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
