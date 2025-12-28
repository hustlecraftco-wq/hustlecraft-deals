"use client";

import Link from "next/link";
import { useState } from "react";

export default function FunnelsPage() {
  // --- FORM LOGIC (Preserved) ---
  const [formData, setFormData] = useState({
    businessName: "",
    serviceType: "",
    phone: "",
    email: "",
  });

  // --- SPEED TEST LOGIC (Upgraded) ---
  const [speedTestActive, setSpeedTestActive] = useState(false);
  const [speedTestDone, setSpeedTestDone] = useState(false);
  const [counter, setCounter] = useState(0.0);

  const runSpeedTest = () => {
    setSpeedTestActive(true);
    setSpeedTestDone(false);
    setCounter(0.0);
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 3.1) {
          clearInterval(interval);
          setSpeedTestDone(true);
          return 3.2;
        }
        return parseFloat((prev + 0.1).toFixed(1));
      });
    }, 80);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    alert("Thanks! We'll reach out within 24 hours.");
    setFormData({ businessName: "", serviceType: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      {/* GLOBAL STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        :root { 
          font-family: 'Inter', sans-serif; 
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.08);
        }
        .glass-panel {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .gradient-text {
          background: linear-gradient(90deg, #ffffff, #a8e6cf);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(168, 230, 207, 0.8);
        }
      `}</style>

      {/* HERO SECTION - UPGRADED */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-construction-worker-3984-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-blue-900/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-10">
          <span className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-extrabold uppercase tracking-[0.2em] mb-8 shadow-2xl">
            KC's Only Hand-Coded Agency
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Stop Renting Sites. Own Your<br className="hidden md:block"/>
            <span className="gradient-text">48hr Lead Machine.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Custom code beats Lifted Logic bloat (0.4s vs 3s). No $14k subs. KC HVAC/plumbers rank #1 locally.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link href="#pricing" className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-transform">
              Build My $2,997 Asset
            </Link>
            <Link href="#compare" className="px-10 py-5 glass-panel rounded-full text-xl font-bold hover:bg-white/5 transition-all">
              LWP vs Me (Save $14k)
            </Link>
          </div>

          {/* UPGRADED SPEED TEST */}
          <div className="max-w-xl mx-auto">
            {!speedTestActive ? (
              <button onClick={runSpeedTest} className="group flex items-center gap-3 mx-auto px-8 py-4 glass-panel rounded-full hover:border-emerald-400/50 transition-all">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"/>
                <span className="font-semibold text-slate-300 group-hover:text-white">Test My Speed Edge →</span>
              </button>
            ) : (
              <div className={`glass-panel p-8 rounded-2xl animate-in fade-in zoom-in border-emerald-500/30 ${speedTestDone ? 'scale-100' : 'scale-95'}`}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">LWP / Lifted</p>
                    <p className="text-4xl font-mono font-bold text-white">{counter.toFixed(1)}s</p>
                  </div>
                  <div className="hidden md:block h-12 w-[1px] bg-white/10"></div>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Your Asset</p>
                    <p className="text-4xl font-mono font-bold text-emerald-400 text-shadow-glow">0.4s</p>
                  </div>
                </div>
                {speedTestDone && (
                  <p className="text-center mt-4 text-emerald-300 font-semibold">
                    In that 2.8s gap, they lost the plumber job.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE - YOUR VERSION (UPGRADED) */}
      <section id="compare" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-6 gradient-text">Asset Ownership vs. Rental Trap</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto text-lg">See why paying monthly fees destroys your profit margins.</p>
          
          <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white/5 text-sm uppercase tracking-wider text-slate-400">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 text-center border-l border-white/5">Lifted Logic<br/><span className="text-[10px] text-orange-400">$50k+ Projects</span></th>
                  <th className="p-6 text-center border-l border-white/5">LWP (Rental)<br/><span className="text-[10px] text-orange-400">$399/mo Forever</span></th>
                  <th className="p-6 text-center border-l border-white/5 bg-emerald-500/10 text-emerald-300 font-bold">Your Asset<br/><span className="text-[10px] text-emerald-200">$2,997 One-Time</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-6 font-bold text-slate-200">3-Year Cost</td>
                  <td className="p-6 text-center text-orange-400 border-l border-white/5">$50k+</td>
                  <td className="p-6 text-center text-orange-400 border-l border-white/5">$14,364+</td>
                  <td className="p-6 text-center text-emerald-300 font-bold border-l border-white/5 bg-emerald-500/5">$2,997</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-200">Ownership</td>
                  <td className="p-6 text-center text-slate-500 border-l border-white/5">Agency Locked</td>
                  <td className="p-6 text-center text-orange-400 border-l border-white/5">Rented (Dies if canceled)</td>
                  <td className="p-6 text-center text-emerald-300 font-bold border-l border-white/5 bg-emerald-500/5">100% Yours</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-200">Speed</td>
                  <td className="p-6 text-center text-slate-500 border-l border-white/5">2-4s (Bloat)</td>
                  <td className="p-6 text-center text-slate-500 border-l border-white/5">3s+ (WordPress)</td>
                  <td className="p-6 text-center text-emerald-300 font-bold border-l border-white/5 bg-emerald-500/5">0.4s (Vercel)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ROI SNAPSHOT */}
          <div className="glass-panel rounded-3xl p-10 border-emerald-500/20">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">What one better funnel is worth</h3>
            <p className="text-slate-300 text-center mb-8">
              If your average job is <span className="text-white font-bold">$2,000</span> and you close 20%, every lead is worth <span className="text-white font-bold">$400</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-900/10 rounded-xl border border-red-500/20 text-center">
                <p className="text-red-400 font-bold mb-2">Slow Template Site</p>
                <p className="text-4xl font-black text-white mb-1">10 Leads</p>
                <p className="text-red-400 font-bold">= $4,000/mo</p>
              </div>
              <div className="p-6 bg-emerald-900/10 rounded-xl border border-emerald-500/20 text-center">
                <p className="text-emerald-400 font-bold mb-2">LocalWebsitePro Funnel</p>
                <p className="text-4xl font-black text-white mb-1">25 Leads</p>
                <p className="text-emerald-400 font-bold">= $10,000/mo</p>
              </div>
            </div>
            <p className="text-center text-slate-400 mt-8 italic">Switching pays for itself in Week 1.</p>
          </div>
        </div>
      </section>

      {/* PRESERVED SECTIONS - ALL WORKING */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">How we build your funnel</h3>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          No Wix. No WordPress. No Monthly Fees. We use the same tech stack as billion-dollar startups.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Next.js", "Vercel", "Tailwind", "TypeScript"].map((tech) => (
            <div key={tech} className="glass-panel p-6 rounded-xl text-center">
              <p className="text-xl font-bold text-white mb-1">{tech}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Enterprise Grade</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Who This Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Handymen & General Contractors", "Plumbers & HVAC", "Roofers & Siding",
            "Landscapers & Lawn Care", "Electricians", "Cleaning Services",
            "Auto Repair & Detailing", "Home Inspectors",
          ].map((service) => (
            <div key={service} className="glass-panel rounded-xl p-6 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xl text-emerald-400 bg-emerald-400/10 p-2 rounded-full">✓</span>
              <span className="text-slate-200 font-semibold text-lg">{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING - UPGRADED */}
      <section id="pricing" className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 gradient-text">Pick Your Lead Machine</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-10 rounded-3xl flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Build & Own</h3>
              <div className="text-4xl font-black text-emerald-400 mb-2">$2,997</div>
              <p className="text-slate-500 text-sm mb-8">One-time asset</p>
              <ul className="space-y-4 mb-8 text-slate-300 text-sm flex-grow">
                <li>✓ 48hr custom-coded site</li>
                <li>✓ 0.4s Vercel speed</li>
                <li>✓ 50 local citations</li>
                <li>✓ GBP optimization</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all">Get Started</button>
            </div>

            <div className="glass-panel p-10 rounded-3xl border-emerald-500/50 shadow-2xl shadow-emerald-900/20 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Managed Growth</h3>
              <div className="text-4xl font-black text-white mb-2">$3,997</div>
              <p className="text-slate-500 text-sm mb-8">One-time + optional support</p>
              <ul className="space-y-4 mb-8 text-slate-300 text-sm flex-grow">
                <li>✓ <strong>Everything in Build & Own</strong></li>
                <li>✓ AI videos (Veo)</li>
                <li>✓ Review system</li>
                <li>✓ Client portal</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg">Start Managed Plan</button>
            </div>

            <div className="glass-panel p-10 rounded-3xl flex flex-col">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Enterprise</h3>
              <div className="text-4xl font-black text-white mb-2">$4,997+</div>
              <p className="text-slate-500 text-sm mb-8">Full marketing suite</p>
              <ul className="space-y-4 mb-8 text-slate-300 text-sm flex-grow">
                <li>✓ <strong>Everything in Managed</strong></li>
                <li>✓ CRM Integrations</li>
                <li>✓ Custom animations</li>
                <li>✓ Dedicated support</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 text-white font-bold transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + FORM + FOOTER - ALL PRESERVED */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">How long does it take?</h3>
            <p className="text-slate-300">Homepage live in 48 hours. Full site in 5-7 days.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">Do I own my site?</h3>
            <p className="text-slate-300">100%. Unlike LWP rentals, you own code + domain forever.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">Will this rank #1 locally?</h3>
            <p className="text-slate-300">50 citations + optimized GBP = local domination in 30 days.</p>
          </div>
        </div>
      </section>

      <section id="demo" className="max-w-2xl mx-auto px-6 py-24">
        <div className="glass-panel p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to own your lead machine?</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">Business Name</label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Joe's Plumbing" />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">Service Type</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} required 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500">
                  <option value="">Select...</option>
                  <option value="plumber">Plumber</option>
                  <option value="hvac">HVAC</option>
                  <option value="electrician">Electrician</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase font-bold mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" />
              </div>
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg text-white font-bold text-lg hover:shadow-lg transition-all">
              Build My KC Lead Asset
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} LocalWebsitePro. Hand-Coded in Kansas City.</p>
        <p className="mt-2 text-xs">No Rental Fees. No Locked Contracts. Just Ownership. [web:12]</p>
      </footer>
    </div>
  );
}
