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
      {/* Hero */}
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

      {/* Lead Form */}
      <section id="pricing" className="max-w-3xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Ready to Get Started?</h2>
        <p className="text-slate-300 text-center mb-8">
          Let's talk about your business and how a high-speed funnel can turn more Google visitors into phone calls.
        </p>
        <form onSubmit={handleSubmit} className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a service...</option>
                <option value="handyman">Handyman</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="roofer">Roofer</option>
                <option value="hvac">HVAC</option>
                <option value="landscaper">Landscaper</option>
                <option value="cleaning">Cleaning</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
          >
            Get Your Free Consultation →
          </button>
          <p className="text-slate-400 text-xs text-center mt-4">
            We'll reach out within 24 hours to discuss your business and next steps.
          </p>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-slate-950 text-center text-slate-400 border-t border-slate-800">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-2 inline-block">
          ← Back to HustleCraft
        </Link>
        <br />
        HustleCraft Funnels &copy; {new Date().getFullYear()} — Building leads for local service businesses.
      </footer>
    </div>
  );
}

