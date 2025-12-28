"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function FunnelsPage() {
  // --- FORM LOGIC ---
  const [formData, setFormData] = useState({
    businessName: "",
    serviceType: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay (Replace with real server action later)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Lead captured:", formData);
    alert(`Success! We received the request for ${formData.businessName}. Expect a text/email within 24 hours.`);
    setFormData({ businessName: "", serviceType: "", phone: "", email: "" });
    setIsSubmitting(false);
  };

  // --- SPEED TEST LOGIC ---
  const [speedTestActive, setSpeedTestActive] = useState(false);
  const [speedTestDone, setSpeedTestDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));

  const runSpeedTest = () => {
    if (speedTestActive) return;
    setSpeedTestActive(true);
    setSpeedTestDone(false);
    count.set(0);
    animate(count, 3.2, { 
      duration: 2.5, 
      ease: "circOut",
      onComplete: () => setSpeedTestDone(true)
    });
  };

  const resetSpeedTest = () => {
    count.set(0);
    setSpeedTestActive(false);
    setSpeedTestDone(false);
  };

  // --- STYLES ---
  const glassClass = "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl";
  const glassHover = "hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 cursor-default";
  const gradientText = "bg-gradient-to-r from-white via-emerald-300 to-emerald-100 bg-clip-text text-transparent";

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden border-b border-white/5 bg-[#050505]">
        {/* Background Video - Now strictly positioned */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></div>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-construction-worker-3984-large.mp4" type="video/mp4" />
          </video>
                     {/* Lighter Gradient Overlay so it's not too dark */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] overflow-hidden border-b border-white/via-[#050505]/505 bg-[#050505]"> to-blue-900/20" />
                    </div>


        {/* Content - Forced to Z-10 to sit on top */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-2xl border border-orange-500/20"
          >
            KC'S ONLY HAND-CODED AGENCY
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black leading-[1.1] mb-6 tracking-tighter"
          >
            Stop Renting Sites.<br/>Own Your <span className={gradientText}>Lead Machine.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build fast, done-for-you websites for plumbers, HVAC, and home service pros who already win on Google—but lose jobs because of slow sites.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link href="#pricing" className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-xl font-bold shadow-xl shadow-orange-900/20 hover:scale-105 transition-transform">
              Build My $2,997 Asset
            </Link>
            <Link href="#compare" className={`px-10 py-5 ${glassClass} rounded-full text-xl font-bold hover:bg-white/5 transition-all`}>
              LWP vs Me (Save $14k)
            </Link>
          </div>

          {/* Speed Test Box */}
          <div className="max-w-xl mx-auto min-h-[180px]">
            {!speedTestActive ? (
              <button onClick={runSpeedTest} className={`group flex items-center gap-3 mx-auto px-8 py-4 ${glassClass} rounded-2xl hover:border-emerald-400/50 transition-all`}>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]"/>
                <span className="font-bold text-slate-300 group-hover:text-white uppercase tracking-widest text-sm">Test My Speed Edge →</span>
              </button>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`${glassClass} p-8 rounded-3xl border-emerald-500/30`}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-orange-500 font-black mb-1">Competitors</p>
                    <motion.p className="text-5xl font-mono font-black text-white">{rounded}s</motion.p>
                  </div>
                  <div className="hidden md:block h-12 w-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-emerald-400 font-black mb-1">Your Asset</p>
                    <p className="text-5xl font-mono font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">0.4s</p>
                  </div>
                </div>
                {speedTestDone && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center mt-6 border-t border-white/10 pt-4">
                    <p className="text-center text-emerald-300 font-bold mb-4">In that 2.8s gap, they lost the job.</p>
                    <button onClick={resetSpeedTest} className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors border-b border-slate-700 pb-0.5">Reset Test</button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section id="compare" className="py-24 bg-[#080808] border-b border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className={`text-3xl md:text-6xl font-black text-center mb-16 ${gradientText}`}>Asset Ownership vs. Rental Trap</h2>
          <div className={`${glassClass} rounded-3xl overflow-hidden overflow-x-auto`}>
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
                  <th className="p-8 font-black">Feature</th>
                  <th className="p-8 text-center border-l border-white/5">Lifted Logic</th>
                  <th className="p-8 text-center border-l border-white/5">LWP Rental</th>
                  <th className="p-8 text-center border-l border-white/5 bg-emerald-500/10 text-emerald-300">Your Asset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-8 font-bold text-slate-200">3-Year Cost</td>
                  <td className="p-8 text-center text-orange-400">$50,000+</td>
                  <td className="p-8 text-center text-orange-400">$14,364</td>
                  <td className="p-8 text-center text-emerald-300 font-black bg-emerald-500/5 text-2xl">$2,997</td>
                </tr>
                <tr>
                  <td className="p-8 font-bold text-slate-200">Ownership</td>
                  <td className="p-8 text-center text-slate-500 text-sm">Agency Locked</td>
                  <td className="p-8 text-center text-orange-400 text-sm">Rented (Dies if canceled)</td>
                  <td className="p-8 text-center text-emerald-300 font-black bg-emerald-500/5">100% Legal Ownership</td>
                </tr>
                <tr>
                  <td className="p-8 font-bold text-slate-200">Speed (LCP)</td>
                  <td className="p-8 text-center text-slate-500 text-sm">2.5s - 4.0s</td>
                  <td className="p-8 text-center text-slate-500 text-sm">3.0s+</td>
                  <td className="p-8 text-center text-emerald-300 font-black bg-emerald-500/5 text-2xl">0.4s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- WHO THIS IS FOR --- */}
      <section className="py-24 px-6 border-b border-white/5 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Handymen & General Contractors", "Plumbers & HVAC", "Roofers & Siding",
              "Landscapers & Lawn Care", "Electricians", "Cleaning Services",
              "Auto Repair & Detailing", "Home Inspectors",
            ].map((service, i) => (
              <motion.div 
                key={service} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                className={`${glassClass} rounded-xl p-6 flex items-center gap-4 ${glassHover}`}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">✓</span>
                <span className="text-slate-200 font-semibold text-lg">{service}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-slate-400 text-center mt-12 text-sm uppercase tracking-widest font-bold">
            If you have a solid Google Business profile but a weak website, this is for you.
          </p>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED --- */}
      <section className="py-24 px-6 bg-[#080808] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Funnel */}
            <div className={`${glassClass} rounded-3xl p-10 hover:border-emerald-500/30 transition-all`}>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">🏗️ The Funnel</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Mobile-first, single-page design</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Service list pulled from GBP</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Sticky "Call Now" buttons</li>
                <li className="flex gap-3"><span className="text-emerald-500">✓</span> Work gallery with before/after</li>
              </ul>
            </div>
            {/* Tracking */}
            <div className={`${glassClass} rounded-3xl p-10 hover:border-blue-500/30 transition-all`}>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">📊 The Tracking</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Google Analytics 4 (GA4) setup</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Call tracking phone number</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Real-time lead alerts</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Monthly performance report</li>
              </ul>
            </div>
            {/* Performance */}
            <div className={`${glassClass} rounded-3xl p-10 hover:border-purple-500/30 transition-all`}>
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">⚡ The Performance</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3"><span className="text-purple-500">✓</span> Built on Next.js (React)</li>
                <li className="flex gap-3"><span className="text-purple-500">✓</span> Green Lighthouse scores (90+)</li>
                <li className="flex gap-3"><span className="text-purple-500">✓</span> Zero layout shift (CLS 0)</li>
                <li className="flex gap-3"><span className="text-purple-500">✓</span> Instant interaction (INP &lt; 200ms)</li>
              </ul>
            </div>
            {/* Support */}
            <div className={`${glassClass} rounded-3xl p-10 hover:border-orange-500/30 transition-all`}>
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">🛠️ The Support</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3"><span className="text-orange-500">✓</span> 30-day launch optimization</li>
                <li className="flex gap-3"><span className="text-orange-500">✓</span> Photo swaps & content changes</li>
                <li className="flex gap-3"><span className="text-orange-500">✓</span> Annual domain & SSL renewal</li>
                <li className="flex gap-3"><span className="text-orange-500">✓</span> Server uptime monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-24 px-6 bg-[#050505] border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Built on the Billion-Dollar Stack</h3>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            No Wix. No WordPress. No Monthly Fees. We use the same tech stack as modern startups (Next.js & Vercel) to guarantee speed.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Next.js", desc: "React Framework" },
              { name: "Vercel", desc: "Edge Network" },
              { name: "Tailwind", desc: "Custom Design" },
              { name: "TypeScript", desc: "Type Safety" }
            ].map((tech) => (
              <div key={tech.name} className={`${glassClass} p-6 rounded-xl text-center hover:border-white/20 transition-colors`}>
                <p className="text-xl font-bold text-white mb-1">{tech.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-6xl font-black text-center mb-20 ${gradientText}`}>Pick Your Lead Machine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Build & Own */}
            <div className={`${glassClass} p-10 rounded-3xl flex flex-col hover:border-emerald-500/30 transition-all`}>
              <h3 className="text-2xl font-black mb-2">Build & Own</h3>
              <div className="text-4xl font-black text-emerald-400 mb-4">$2,997</div>
              <p className="text-slate-400 mb-8 font-bold uppercase tracking-widest text-[10px]">One-time asset investment</p>
              <ul className="space-y-4 mb-8 text-slate-300 flex-grow text-sm">
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> Custom single-page funnel</li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> Mobile-first design</li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> 100% Code Ownership</li>
                <li className="flex gap-3 text-slate-500">You handle hosting (~$20/mo)</li>
              </ul>
              <button className="w-full py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-colors">START BUILD</button>
            </div>

            {/* Managed Growth */}
            <div className={`${glassClass} p-10 rounded-3xl flex flex-col border-emerald-500/50 relative md:scale-105 bg-emerald-500/[0.02]`}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full font-black text-[10px] tracking-widest">MOST POPULAR</div>
              <h3 className="text-2xl font-black mb-2">Managed Growth</h3>
              <div className="text-4xl font-black text-emerald-400 mb-4">$3,997</div>
              <p className="text-slate-400 mb-8 font-bold uppercase tracking-widest text-[10px]">Full Marketing Integration</p>
              <ul className="space-y-4 mb-8 text-slate-300 flex-grow text-sm">
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> <strong>Everything in Build & Own</strong></li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> Hosting & SSL Included</li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> Unlimited Content Updates</li>
                <li className="flex gap-3"><span className="text-emerald-400">✓</span> CRM & Lead Tracking Portal</li>
              </ul>
              <button className="w-full py-4 bg-emerald-500 text-black rounded-xl font-black hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">START GROWTH</button>
            </div>

            {/* Growth Partner */}
            <div className={`${glassClass} p-10 rounded-3xl flex flex-col hover:border-purple-500/30 transition-all`}>
              <h3 className="text-2xl font-black mb-2 text-purple-400">Growth Partner</h3>
              <div className="text-4xl font-black text-white mb-4">$2,500</div>
              <p className="text-slate-400 mb-8 font-bold uppercase tracking-widest text-[10px]">Setup + from $199/mo</p>
              <ul className="space-y-4 mb-8 text-slate-300 flex-grow text-sm">
                <li className="flex gap-3"><span className="text-purple-400">✓</span> <strong>Everything in Managed</strong></li>
                <li className="flex gap-3"><span className="text-purple-400">✓</span> AI Chatbot Integration</li>
                <li className="flex gap-3"><span className="text-purple-400">✓</span> Review Automation System</li>
                <li className="flex gap-3"><span className="text-purple-400">✓</span> Advanced Integrations</li>
              </ul>
              <button className="w-full py-4 border border-purple-500/30 text-white rounded-xl font-bold hover:bg-purple-500/10 transition-colors">CONTACT US</button>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${glassClass} p-8 rounded-2xl`}>
              <h3 className="font-bold text-emerald-400 mb-3">How long does it take?</h3>
              <p className="text-slate-400 text-sm">Typically 5–7 business days. We send a preview for approval before launch.</p>
            </div>
            <div className={`${glassClass} p-8 rounded-2xl`}>
              <h3 className="font-bold text-emerald-400 mb-3">Do I own my site?</h3>
              <p className="text-slate-400 text-sm">Yes. Unlike rental agencies, you own the domain and the code. You can leave anytime.</p>
            </div>
            <div className={`${glassClass} p-8 rounded-2xl`}>
              <h3 className="font-bold text-emerald-400 mb-3">Will this get more calls?</h3>
              <p className="text-slate-400 text-sm">Most businesses see a lift in calls within 30-60 days due to faster load times and conversion design.</p>
            </div>
            <div className={`${glassClass} p-8 rounded-2xl`}>
              <h3 className="font-bold text-emerald-400 mb-3">Can you integrate my CRM?</h3>
              <p className="text-slate-400 text-sm">Yes. We connect to tools via Zapier or APIs for HubSpot, ServiceTitan, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEAD FORM --- */}
      <section id="demo" className="py-32 px-6 bg-gradient-to-b from-transparent to-emerald-900/10 border-t border-white/5">
        <div className={`${glassClass} max-w-3xl mx-auto p-12 rounded-[3rem]`}>
          <h2 className="text-4xl font-black mb-8 text-center">Ready to own your asset?</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="businessName" value={formData.businessName} onChange={handleInputChange} required placeholder="Business Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none" />
              <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} required className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none">
                <option value="">Service Type</option>
                <option value="plumbing">Plumbing</option>
                <option value="hvac">HVAC</option>
                <option value="electrician">Electrician</option>
                <option value="contractor">General Contractor</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="phone" value={formData.phone} onChange={handleInputChange} required type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none" />
              <input name="email" value={formData.email} onChange={handleInputChange} required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-emerald-500 text-black font-black text-2xl rounded-2xl hover:bg-emerald-400 transition-all transform hover:scale-[1.01] disabled:opacity-50">
              {isSubmitting ? 'SENDING...' : 'CLAIM MY KC LEAD ASSET →'}
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-slate-500 font-bold tracking-widest text-sm uppercase">© 2025 LocalWebsitePro • Hand-Coded in Kansas City</p>
        <div className="mt-4 flex justify-center gap-8 text-xs text-slate-600 font-medium">
          <span>NO RENTAL FEES</span>
          <span>NO BLOAT</span>
          <span>100% OWNERSHIP</span>
        </div>
      </footer>

    </main>
  );
}
