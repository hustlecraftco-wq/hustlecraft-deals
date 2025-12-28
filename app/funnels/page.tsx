"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function FunnelsPage() {
  // FORM STATE
  const [formData, setFormData] = useState({
    businessName: "",
    serviceType: "",
    phone: "",
    email: "",
  });

  // SPEED TEST - FRAMER MOTION
  const [speedTestActive, setSpeedTestActive] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const runSpeedTest = async () => {
    setSpeedTestActive(true);
    await animate(count, 32, { duration: 3.2, ease: "linear" });
    setSpeedTestActive(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate Resend/Formspree
    console.log("Lead captured:", formData);
    alert("Thanks! We'll reach out within 24 hours.");
    setFormData({ businessName: "", serviceType: "", phone: "", email: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white font-['Inter'] selection:bg-emerald-500/30">
      {/* HERO - OPTIMIZED */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          aria-hidden="true"
          poster="/construction-poster.webp"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-construction-worker-3984-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/60 to-blue-900/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-10">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-orange-500/90 to-orange-400/90 text-white text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-2xl backdrop-blur-sm"
          >
            KC's Only Hand-Coded Agency
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
          >
            Stop Renting Sites. Own Your<br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-white via-emerald-300 to-emerald-100 bg-clip-text text-transparent font-black">
              48hr Lead Machine.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Custom code beats Lifted Logic bloat (0.4s vs 3s). No $14k subs. 
            KC HVAC/plumbers rank #1 locally.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <Link 
              href="#pricing" 
              className="group px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full text-xl font-black shadow-2xl hover:shadow-orange-500/50 hover:scale-[1.02] transform transition-all duration-300 backdrop-blur-sm border border-orange-400/30"
              aria-label="Build my $2,997 asset"
            >
              <span className="group-hover:-translate-x-1 transition-transform">Build My $2,997 Asset</span>
            </Link>
            <Link 
              href="#compare" 
              className="px-12 py-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-xl font-bold hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-300"
              aria-label="Compare pricing"
            >
              LWP vs Me (Save $14k)
            </Link>
          </motion.div>

          {/* SPEED TEST - FRAMER MOTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto"
          >
            <motion.button 
              onClick={runSpeedTest}
              disabled={speedTestActive}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 mx-auto px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl font-semibold text-lg hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all duration-300"
              aria-label="Test speed difference between competitors and our sites"
            >
              <motion.span 
                className="w-4 h-4 rounded-full bg-emerald-400"
                animate={speedTestActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              {speedTestActive ? (
                <motion.span key="loading">
                  Testing LWP Speed... <motion.span>{rounded}s</motion.span>
                </motion.span>
              ) : (
                "Test My Speed Edge →"
              )}
            </motion.button>

            {speedTestActive && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-8 bg-white/5 backdrop-blur-xl border border-emerald-500/30 rounded-3xl shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-orange-400 font-black mb-2">LWP / Lifted Logic</p>
                    <motion.p 
                      className="text-4xl lg:text-5xl font-mono font-black text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.3, repeat: Infinity }}
                    >
                      {rounded}s
                    </motion.p>
                  </div>
                  <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-emerald-400 font-black mb-2">Your KC Asset</p>
                    <p className="text-5xl font-mono font-black bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
                      0.4s
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-emerald-300 font-semibold text-lg">
                  In that 2.8s gap, they lost the plumber job.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* REST OF PAGE - Tailwind Only (No <style jsx>) */}
      <section id="compare" className="py-32 bg-gradient-to-b from-slate-950 to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-white via-emerald-300 to-emerald-100 bg-clip-text text-transparent"
          >
            Asset vs Rental Trap
          </motion.h2>
          
          <div className="bg-white/3 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl overflow-x-auto mb-20">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-8 font-black text-left text-slate-200">Metric</th>
                  <th className="p-8 font-semibold text-center text-slate-300 border-l border-white/10">Lifted Logic</th>
                  <th className="p-8 font-semibold text-center text-slate-300 border-l border-white/10">LWP Rental</th>
                  <th className="p-8 font-black text-center text-emerald-400 border-l border-white/10 bg-emerald-500/5">Your Asset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-8 font-black text-slate-100 bg-emerald-500/3 border-r border-white/10">3-Year Cost</td>
                  <td className="p-8 text-orange-400 font-bold text-center">$50k+</td>
                  <td className="p-8 text-orange-400 font-bold text-center">$14,364</td>
                  <td className="p-8 text-emerald-400 font-black text-center text-2xl">$2,997</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-8 font-black text-slate-100 bg-emerald-500/3 border-r border-white/10">Ownership</td>
                  <td className="p-8 text-slate-400 text-center">Agency Lock</td>
                  <td className="p-8 text-orange-400 text-center">Dies if Cancel</td>
                  <td className="p-8 text-emerald-400 font-black text-center">100% Yours</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-8 font-black text-slate-100 bg-emerald-500/3 border-r border-white/10">Speed</td>
                  <td className="p-8 text-slate-400 text-center">2-4s</td>
                  <td className="p-8 text-slate-400 text-center">3s+</td>
                  <td className="p-8 text-emerald-400 font-black text-center text-2xl">0.4s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white via-emerald-300 to-emerald-100 bg-clip-text text-transparent"
          >
            Pick Your KC Asset
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Core */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-white mb-4">Core Asset</h3>
              <div className="text-5xl font-black text-emerald-400 mb-4">$2,997</div>
              <p className="text-slate-400 mb-8">One-time ownership</p>
              <ul className="space-y-3 mb-10 text-slate-300">
                <li>✓ 48hr custom site</li>
                <li>✓ 0.4s Vercel speed</li>
                <li>✓ 50 citations + GBP</li>
                <li>✓ Full code ownership</li>
              </ul>
              <button className="w-full py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl font-black text-lg hover:shadow-emerald-500/50 hover:scale-[1.02] transition-all">
                Launch Core
              </button>
            </motion.div>

            {/* Pro - Most Popular */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative bg-white/10 backdrop-blur-xl border-emerald-500/30 rounded-3xl p-10 shadow-2xl shadow-emerald-900/20 hover:shadow-emerald-500/30 transition-all lg:-mt-12 lg:scale-105 lg:z-10"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-black px-6 py-3 rounded-2xl font-black text-sm shadow-2xl">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-black text-emerald-400 mb-4">Pro Asset</h3>
              <div className="text-5xl font-black text-emerald-400 mb-4">$3,997</div>
              <p className="text-slate-400 mb-8">Full lead machine</p>
              <ul className="space-y-3 mb-10 text-slate-300">
                <li>✓ Everything in Core</li>
                <li>✓ AI videos + reviews</li>
                <li>✓ Client portal</li>
                <li>✓ Monthly analytics</li>
              </ul>
              <button className="w-full py-5 bg-emerald-600 rounded-2xl font-black text-lg hover:bg-emerald-500 shadow-2xl hover:shadow-emerald-600/50 hover:scale-[1.02] transition-all">
                Launch Pro
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM - END */}
      <section id="demo" className="max-w-2xl mx-auto px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-black text-white mb-8 text-center">Own your lead machine today</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 font-bold text-sm uppercase tracking-wider mb-3">Business</label>
                <input 
                  required name="businessName" 
                  onChange={handleInputChange} 
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-lg backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-all"
                  placeholder="Joe's Plumbing KC"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold text-sm uppercase tracking-wider mb-3">Service</label>
                <select 
                  required name="serviceType" 
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-lg backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-all"
                >
                  <option>Select service...</option>
                  <option>Plumbing</option>
                  <option>HVAC</option>
                  <option>Electrician</option>
                  <option>Roofing</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 font-bold text-sm uppercase tracking-wider mb-3">Phone</label>
                <input 
                  required name="phone" 
                  type="tel"
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-lg backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold text-sm uppercase tracking-wider mb-3">Email</label>
                <input 
                  required name="email" 
                  type="email"
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-lg backdrop-blur-sm focus:border-emerald-400 focus:outline-none transition-all"
                />
              </div>
            </div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl text-xl font-black shadow-2xl hover:shadow-emerald-600/50 hover:from-emerald-500 transition-all duration-300"
            >
              Build My $2,997 KC Asset →
            </motion.button>
          </form>
        </motion.div>
      </section>

      <footer className="py-16 text-center text-slate-600 text-sm border-t border-white/5">
        <p>© 2025 LocalWebsitePro. Hand-coded in Kansas City, MO.</p>
        <p className="mt-2 text-xs opacity-75">No subscriptions. Full ownership. Enterprise performance.</p>
      </footer>
    </main>
  );
}
