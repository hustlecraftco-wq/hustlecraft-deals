"use client";



import Link from "next/link";

import { useState, useEffect } from "react";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";



export default function FunnelsPage() {

  // --- FORM LOGIC ---

  const [formData, setFormData] = useState({

    businessName: "",

    serviceType: "",

    phone: "",

    email: "",

  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    console.log("Lead captured:", formData);

    alert("Success! We will reach out within 24 hours.");

    setFormData({ businessName: "", serviceType: "", phone: "", email: "" });

  };



  // --- SPEED TEST LOGIC ---

  const [speedTestActive, setSpeedTestActive] = useState(false);

  const [speedTestDone, setSpeedTestDone] = useState(false);

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => latest.toFixed(1));



  const runSpeedTest = () => {

    setSpeedTestActive(true);

    setSpeedTestDone(false);

    count.set(0);

    

    const controls = animate(count, 3.2, { 

      duration: 2.5, 

      ease: "circOut",

      onComplete: () => setSpeedTestDone(true)

    });



    return controls.stop;

  };



  // --- REUSABLE STYLE CLASSES ---

  const glassClass = "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-2xl";

  const gradientText = "bg-gradient-to-r from-white via-emerald-300 to-emerald-100 bg-clip-text text-transparent";



  return (

    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 selection:text-white">

      

      {/* HERO SECTION */}

      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden border-b border-white/5">

        <video 

          autoPlay 

          muted 

          loop 

          playsInline 

          className="absolute inset-0 w-full h-full object-cover opacity-30"

        >

          <source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-construction-worker-3984-large.mp4" type="video/mp4" />

        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-blue-900/20" />



        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <motion.span 

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            className="inline-block py-2 px-6 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-2xl"

          >

            KC'S ONLY HAND-CODED AGENCY

          </motion.span>



          <motion.h1 

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.1 }}

            className="text-5xl md:text-8xl font-black leading-[1.1] mb-6 tracking-tighter"

          >

            Stop Renting Sites.<br/>Own Your <span className={gradientText}>Lead Machine.</span>

          </motion.h1>



          <motion.p 

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ delay: 0.2 }}

            className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"

          >

            Custom code beats Lifted Logic bloat (0.4s vs 3s). No $14k subs. 

            KC HVAC/plumbers rank #1 locally.

          </motion.p>



          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">

            <Link href="#pricing" className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-transform">

              Build My $2,997 Asset

            </Link>

            <Link href="#compare" className={`px-10 py-5 ${glassClass} rounded-full text-xl font-bold hover:bg-white/5 transition-all`}>

              LWP vs Me (Save $14k)

            </Link>

          </div>



          {/* SPEED TEST BOX */}

          <div className="max-w-xl mx-auto">

            {!speedTestActive && !speedTestDone ? (

              <button onClick={runSpeedTest} className={`group flex items-center gap-3 mx-auto px-8 py-4 ${glassClass} rounded-2xl hover:border-emerald-400/50 transition-all`}>

                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"/>

                <span className="font-bold text-slate-300 group-hover:text-white uppercase tracking-widest text-sm">Test My Speed Edge →</span>

              </button>

            ) : (

              <motion.div 

                initial={{ opacity: 0, scale: 0.9 }}

                animate={{ opacity: 1, scale: 1 }}

                className={`${glassClass} p-8 rounded-3xl border-emerald-500/30`}

              >

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

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-6 text-emerald-300 font-bold">

                    In that 2.8s gap, they lost the plumber job.

                  </motion.p>

                )}

              </motion.div>

            )}

          </div>

        </div>

      </section>



      {/* COMPARISON TABLE */}

      <section id="compare" className="py-32 bg-[#080808] border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className={`text-4xl md:text-6xl font-black text-center mb-16 ${gradientText}`}>Asset Ownership vs. Rental Trap</h2>

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



      {/* PRICING SECTION */}

      <section id="pricing" className="py-32 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className={`text-4xl md:text-6xl font-black text-center mb-20 ${gradientText}`}>Pick Your Lead Machine</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className={`${glassClass} p-12 rounded-3xl flex flex-col hover:border-emerald-500/30 transition-all`}>

              <h3 className="text-3xl font-black mb-2">Build & Own</h3>

              <div className="text-5xl font-black text-emerald-400 mb-4">$2,997</div>

              <p className="text-slate-400 mb-8 font-bold uppercase tracking-widest text-xs">One-time asset investment</p>

              <ul className="space-y-4 mb-12 text-slate-300 flex-grow">

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> 48hr Custom-Coded Site</li>

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> 0.4s Vercel Infrastructure</li>

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> 50 Local Business Citations</li>

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> GBP Domination Plan</li>

              </ul>

              <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-emerald-400 transition-colors">START BUILD</button>

            </div>



            <div className={`${glassClass} p-12 rounded-3xl flex flex-col border-emerald-500/50 relative lg:scale-105 bg-emerald-500/[0.02]`}>

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-6 py-2 rounded-full font-black text-xs tracking-widest">MOST POPULAR</div>

              <h3 className="text-3xl font-black mb-2">Managed Growth</h3>

              <div className="text-5xl font-black text-emerald-400 mb-4">$3,997</div>

              <p className="text-slate-400 mb-8 font-bold uppercase tracking-widest text-xs">Full Marketing Integration</p>

              <ul className="space-y-4 mb-12 text-slate-300 flex-grow">

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> <strong>Everything in Build & Own</strong></li>

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> AI-Generated Service Videos</li>

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> Automated Review System</li>

                <li className="flex items-center gap-3"><span className="text-emerald-400">✓</span> CRM & Lead Tracking Portal</li>

              </ul>

              <button className="w-full py-5 bg-emerald-500 text-black rounded-2xl font-black text-xl hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]">START GROWTH</button>

            </div>

          </div>

        </div>

      </section>



      {/* LEAD FORM */}

      <section id="demo" className="py-32 px-6 bg-gradient-to-b from-transparent to-emerald-900/10">

        <div className={`${glassClass} max-w-3xl mx-auto p-12 rounded-[3rem]`}>

          <h2 className="text-4xl font-black mb-8 text-center">Ready to own your asset?</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input 

                name="businessName" 

                value={formData.businessName} 

                onChange={handleInputChange} 

                required 

                placeholder="Business Name" 

                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none"

              />

              <select 

                name="serviceType" 

                value={formData.serviceType} 

                onChange={handleInputChange} 

                required 

                className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none"

              >

                <option value="">Service Type</option>

                <option value="plumbing">Plumbing</option>

                <option value="hvac">HVAC</option>

                <option value="electrician">Electrician</option>

                <option value="contractor">General Contractor</option>

              </select>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input 

                name="phone" 

                value={formData.phone} 

                onChange={handleInputChange} 

                required 

                type="tel" 

                placeholder="Phone Number" 

                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none"

              />

              <input 

                name="email" 

                value={formData.email} 

                onChange={handleInputChange} 

                required 

                type="email" 

                placeholder="Email Address" 

                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-emerald-500 outline-none"

              />

            </div>

            <button type="submit" className="w-full py-6 bg-emerald-500 text-black font-black text-2xl rounded-2xl hover:bg-emerald-400 transition-all transform hover:scale-[1.01]">

              CLAIM MY KC LEAD ASSET →

            </button>

          </form>

        </div>

      </section>



      {/* FOOTER */}

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
