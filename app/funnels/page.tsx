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
            More Calls. More Jobs. Zero Fluff.
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            High-speed, conversion-focused landing pages built for local service businesses in Kansas City. 
            Get more phone calls and quote requests from your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#demo" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg">
              See Live Demo
            </a>
            <a href="#pricing" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all border border-slate-700">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Who This Is For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Handymen & General Contractors', 'Plumbers & HVAC', 'Roofers', 'Landscapers & Lawn Care', 'Electricians', 'Cleaning Services'].map((service, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-slate-200 font-semibold">{service}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-300 text-center mt-8">
          If you have a Google Business profile and want more calls without hiring an agency, we're your answer.
        </p>
      </section>

      {/* What You Get */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-4">🏗️ The Funnel</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ Mobile-first, single-page design</li>
              <li>✓ Your Google rating, reviews, and photos</li>
              <li>✓ Service list pulled from your profile</li>
              <li>✓ Sticky "Call Now" buttons</li>
              <li>✓ Simple quote request form</li>
              <li>✓ Work gallery with before/after</li>
              <li>✓ Trust signals (years in business, background check, local badge)</li>
              <li>✓ Custom branding (logo, colors, fonts)</li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-green-300 mb-4">📊 The Tracking</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ Google Analytics 4 (GA4) setup</li>
              <li>✓ Call tracking phone number</li>
              <li>✓ Form submission tracking</li>
              <li>✓ Monthly performance report</li>
              <li>✓ Conversion metrics dashboard</li>
              <li>✓ Real-time alerts for calls/forms</li>
              <li>✓ Call recording (optional)</li>
              <li>✓ Lead attribution reports</li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-purple-300 mb-4">⚡ The Performance</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ Built on Next.js (fastest framework)</li>
              <li>✓ Green Lighthouse scores (90+)</li>
              <li>✓ Sub-2.5s load time on mobile</li>
              <li>✓ Optimized images & videos</li>
              <li>✓ Zero layout shift (CLS &lt; 0.1)</li>
              <li>✓ Instant Interaction (INP &lt; 200ms)</li>
              <li>✓ Mobile-responsive across all devices</li>
              <li>✓ SEO-optimized metadata</li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-orange-300 mb-4">🛠️ The Support</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ 30-day launch & optimization</li>
              <li>✓ Monthly maintenance & updates</li>
              <li>✓ Photo swaps & content changes</li>
              <li>✓ Email support (24-48hr response)</li>
              <li>✓ Performance optimization</li>
              <li>✓ Form tweaks & testing</li>
              <li>✓ Annual domain & SSL renewal</li>
              <li>✓ Server uptime monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">See It Live</h2>
        <p className="text-slate-300 text-center mb-8">
          Here's what one of our funnels looks like. This is a real example built for a handyman in Kansas City.
        </p>
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="aspect-video bg-slate-800 flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-400 mb-4">Live Demo Coming Soon</p>
              <Link
                href="/demo/handyman-kc"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                Preview FixTman Funnel Template →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">You Fill Out a Brief</h3>
              <p className="text-slate-300">
                Tell us about your business: services, service area, photos you want to feature, and what matters most 
                (calls vs quotes vs bookings). Typical form takes 5 minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">We Build Your Funnel</h3>
              <p className="text-slate-300">
                We pull your Google profile data, optimize layout for conversions, set up call tracking and GA4, 
                and deploy to a custom domain. Usually done in 5–7 business days.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">You Start Getting Calls</h3>
              <p className="text-slate-300">
                Your funnel goes live on Google Search and Maps. Visitors see a lightning-fast page with your ratings, 
                services, and a big call button. You get a dashboard to track every lead.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">We Measure & Optimize</h3>
              <p className="text-slate-300">
                Month 1 is optimization: we test copy, button placement, form fields, and mobile flow. You see daily 
                call counts, and we tweak based on real data to increase conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose HustleCraft</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-3">💨 Obsessively Fast</h3>
            <p className="text-slate-300 text-sm">
              Built on Next.js with green Lighthouse scores. Every millisecond counts when someone's on a 4G connection 
              searching for help.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-green-300 mb-3">📞 Conversion Obsessed</h3>
            <p className="text-slate-300 text-sm">
              Every element is A/B tested and data-driven. No fluff. No big agency BS. Just a page that turns visitors 
              into phone calls.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-purple-300 mb-3">📊 Measurement Built-In</h3>
            <p className="text-slate-300 text-sm">
              You'll know exactly how many calls, leads, and jobs came from your funnel. No guessing. No "we think it's 
              working."
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-orange-300 mb-3">🚀 Get Results Fast</h3>
            <p className="text-slate-300 text-sm">
              You get a funnel in 1 week, calls in week 2, and measurable ROI in 30 days. No 6-month contracts or 
              retainer ramp.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-red-300 mb-3">🎯 Local First</h3>
            <p className="text-slate-300 text-sm">
              We understand KC service businesses. We're not a generic web shop. Your funnel is designed for local 
              search and trust signals.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-pink-300 mb-3">💰 No BS Pricing</h3>
            <p className="text-slate-300 text-sm">
              Flat build fee. Transparent monthly cost. No hidden setup fees, no surprise charges, no upsell 
              surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Starter</h3>
            <p className="text-slate-400 mb-6">Perfect for single-service businesses just getting started.</p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">$499</p>
              <p className="text-slate-400 text-sm">One-time build fee</p>
            </div>
            <p className="text-slate-300 font-semibold mb-4">Then $99/month for hosting, maintenance & support.</p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
              <li>✓ Single-page funnel</li>
              <li>✓ Up to 5 services</li>
              <li>✓ Mobile-optimized</li>
              <li>✓ Call tracking (basic)</li>
              <li>✓ GA4 setup</li>
              <li>✓ Monthly reporting</li>
              <li>✓ Email support</li>
            </ul>
            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all">
              Get Started
            </button>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 border-2 border-blue-600 shadow-xl relative">
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Professional</h3>
            <p className="text-slate-400 mb-6">For multi-service businesses or those serious about lead generation.</p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">$899</p>
              <p className="text-slate-400 text-sm">One-time build fee</p>
            </div>
            <p className="text-slate-300 font-semibold mb-4">Then $149/month for hosting, maintenance & support.</p>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm">
              <li>✓ Everything in Starter, plus:</li>
              <li>✓ Unlimited services</li>
              <li>✓ Advanced photo gallery</li>
              <li>✓ Video integration</li>
              <li>✓ Call tracking (advanced)</li>
              <li>✓ Form customization</li>
              <li>✓ Bi-weekly optimization calls</li>
              <li>✓ Call recording & transcripts</li>
              <li>✓ Priority email/phone support</li>
            </ul>
            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
        <p className="text-slate-400 text-center mt-8">
          Both plans include 30 days of launch optimization and ongoing monthly support. No contracts. Cancel anytime.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">How long does it take to launch?</h3>
            <p className="text-slate-300">
              Typically 5–7 business days from the time you submit your information. We'll send you previews for approval 
              before going live.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">Do I own my funnel?</h3>
            <p className="text-slate-300">
              Yes. We register the domain in your name and give you full access to all accounts (GA4, call tracking, 
              hosting). You can leave anytime, but we hope you won't!
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">Will I get more calls?</h3>
            <p className="text-slate-300">
              Most clients see measurable results within 30–60 days. That said, results depend on your service area, 
              market, and seasonality. We provide full transparency with call tracking and reporting.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">Can you integrate my CRM?</h3>
            <p className="text-slate-300">
              Yes. We support Zapier, Make, and direct API integrations to HubSpot, Pipedrive, ServiceTitan, and most 
              other CRMs. Let us know during onboarding.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">What if I need changes later?</h3>
            <p className="text-slate-300">
              That's included in your monthly maintenance. Photo swaps, service updates, copy changes, and A/B tests are 
              all part of the package.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">Do you do SEO?</h3>
            <p className="text-slate-300">
              Your funnel is optimized for mobile and Core Web Vitals (which help with Google rankings). We also set up 
              local schema and SEO metadata, but we focus primarily on converting existing traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-slate-800">
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
