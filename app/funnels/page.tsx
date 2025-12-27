'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FunnelsPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    serviceType: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    alert("Thanks! We'll reach out within 24 hours.");
    setFormData({ businessName: '', serviceType: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900/40 to-blue-800/30 border-b border-blue-700/50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 mb-4">
            Turn Your Google Profile Into a Lead Generation Machine
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Most service businesses have great Google ratings but lose calls every day to slow, outdated websites. 
            We build lightning-fast landing pages designed for one thing: <span className="text-blue-400 font-bold">getting your phone to ring</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg">
              See Pricing
            </a>
            <a href="#how-it-works" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all border border-slate-700">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-b border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">The Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">🐌 Slow Load Times</h3>
            <p className="text-slate-300 text-sm">
              53% of mobile users abandon sites that take longer than 3 seconds. Your visitors are bouncing before they ever see your services.
            </p>
          </div>
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">📱 Poor Mobile Experience</h3>
            <p className="text-slate-300 text-sm">
              84% of local searches happen on mobile. If your site isn't mobile-first, you're invisible to most of your market.
            </p>
          </div>
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">🤷 No Clear Action</h3>
            <p className="text-slate-300 text-sm">
              Visitors don't know what to do. Too many options, buried phone numbers, and complicated forms kill conversions.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">The HustleCraft Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-4">⚡ Built for Speed</h3>
            <p className="text-slate-300 text-sm mb-4">
              Sub-2.5 second load times on Next.js. Green Lighthouse scores. Every millisecond optimized for conversions.
            </p>
            <ul className="text-slate-400 space-y-2 text-xs">
              <li>✓ Server-side rendering</li>
              <li>✓ Automatic image optimization</li>
              <li>✓ Code splitting & lazy loading</li>
              <li>✓ Edge CDN delivery</li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-green-300 mb-4">📞 Conversion Focused</h3>
            <p className="text-slate-300 text-sm mb-4">
              One goal: get visitors to call or request a quote. Sticky CTAs, minimal friction, trust signals everywhere.
            </p>
            <ul className="text-slate-400 space-y-2 text-xs">
              <li>✓ Sticky "Call Now" buttons</li>
              <li>✓ Above-the-fold CTAs</li>
              <li>✓ Social proof & ratings</li>
              <li>✓ Before/after galleries</li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-purple-300 mb-4">📊 Measurable Results</h3>
            <p className="text-slate-300 text-sm mb-4">
              Built-in call tracking and analytics. You'll know exactly how many leads came from your funnel every month.
            </p>
            <ul className="text-slate-400 space-y-2 text-xs">
              <li>✓ GA4 event tracking</li>
              <li>✓ Call tracking numbers</li>
              <li>✓ Form submission alerts</li>
              <li>✓ Monthly performance reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Who This Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Handymen & General Contractors',
            'Plumbers & HVAC',
            'Roofers & Siding',
            'Landscapers & Lawn Care',
            'Electricians',
            'Cleaning Services',
            'Auto Repair & Detailing',
            'Home Inspectors'
          ].map((service, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center gap-3">
              <span className="text-2xl text-green-400">✓</span>
              <span className="text-slate-200 font-semibold">{service}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-300 text-center mt-8 text-lg">
          If you have a solid Google Business profile and want more calls without hiring a full agency, <span className="text-blue-400 font-bold">this is for you</span>.
        </p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">You Share Your Business Details</h3>
              <p className="text-slate-300">
                Fill out a 5-minute brief: services, service area, photos, and what you want visitors to do (call, book, quote).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">We Build Your Conversion Funnel</h3>
              <p className="text-slate-300">
                We pull your Google profile data, optimize for mobile and speed, wire in tracking, and deploy to a custom domain in 5–7 days.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Calls Start Coming In</h3>
              <p className="text-slate-300">
                Your funnel goes live. Google visitors see a fast, clear page with your rating, services, and a big call button. You get real-time lead alerts.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">We Optimize & Report</h3>
              <p className="text-slate-300">
                Month 1 is optimization: we test headlines, button placement, form fields, and mobile UX. You get monthly reports showing visits → leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">The Numbers Don't Lie</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-8 border border-blue-700/50 text-center">
            <p className="text-5xl font-bold text-blue-300 mb-2">83%</p>
            <p className="text-slate-300 text-sm">
              Average conversion rate increase after implementing CRO-focused funnels with sticky CTAs and streamlined navigation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-8 border border-green-700/50 text-center">
            <p className="text-5xl font-bold text-green-300 mb-2">&lt;2.5s</p>
            <p className="text-slate-300 text-sm">
              Target load time on mobile. Sites faster than 2.5s see 7–10% higher conversion rates than slower competitors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-8 border border-purple-700/50 text-center">
            <p className="text-5xl font-bold text-purple-300 mb-2">90%</p>
            <p className="text-slate-300 text-sm">
              Mobile conversion rate improvement for service businesses after adding sticky "Call Now" buttons and simplified forms.
            </p>
          </div>
        </div>
        <p className="text-slate-400 text-center mt-8 text-sm">
          Results from documented CRO case studies in home services and local trades. Individual results vary based on market and execution.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Starter</h3>
            <p className="text-slate-400 mb-6">Perfect for single-service businesses just getting started.</p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">$799</p>
              <p className="text-slate-400 text-sm">One-time build fee</p>
            </div>
            <p className="text-slate-300 font-semibold mb-4">Then $129/month for hosting, maintenance & optimization.</p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
              <li>✓ Single-page conversion funnel</li>
              <li>✓ Mobile-first design</li>
              <li>✓ Call tracking (basic)</li>
              <li>✓ GA4 setup & tracking</li>
              <li>✓ Monthly performance report</li>
              <li>✓ Email support (48hr response)</li>
