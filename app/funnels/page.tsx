"use client";

import Link from "next/link";
import { useState } from "react";

export default function FunnelsPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    serviceType: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* HERO */}
      <section className="w-full border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:py-16">
          {/* Hero copy */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              LocalWebsitePro • Websites that ring the phone
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              A website that turns
              <span className="block text-blue-300">
                Google reviews into booked jobs.
              </span>
            </h1>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              We build fast, done-for-you websites for plumbers, HVAC, and home service
              pros who already win on Google—but lose jobs because they don&apos;t have a
              real site.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl"
              >
                See a live demo
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-white"
              >
                View pricing
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Built custom on Next.js, not WordPress templates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Launch in as little as 10 days</span>
              </div>
            </div>
          </div>

          {/* Hero form */}
          <div className="flex-1">
            <div
              id="demo"
              className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur"
            >
              <p className="text-sm font-semibold text-slate-100">
                See what your business could look like online
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Tell us a bit about your business and we&apos;ll send over a personalized
                demo layout based on your Google profile.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    What type of work do you do?
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
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
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300">
                      Best phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300">
                      Work email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl"
                >
                  Get my free demo layout
                </button>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                  No long calls. No spam. We&apos;ll send over a link that shows how your
                  business could look online, then you decide if you want to move
                  forward.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Who This Is For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Handymen & General Contractors",
            "Plumbers & HVAC",
            "Roofers & Siding",
            "Landscapers & Lawn Care",
            "Electricians",
            "Cleaning Services",
            "Auto Repair & Detailing",
            "Home Inspectors",
          ].map((service) => (
            <div
              key={service}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 flex items-center gap-3"
            >
              <span className="text-2xl text-green-400">✓</span>
              <span className="text-slate-200 font-semibold">{service}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-300 text-center mt-8">
          If you have a solid Google Business profile and want more calls without hiring
          an agency, this is for you.
        </p>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          What&apos;s Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Funnel */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-4">🏗️ The Funnel</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ Mobile-first, single-page design</li>
              <li>✓ Your Google rating, reviews, and photos</li>
              <li>✓ Service list pulled from your profile</li>
              <li>✓ Sticky &quot;Call Now&quot; buttons</li>
              <li>✓ Simple quote request form</li>
              <li>✓ Work gallery with before/after</li>
              <li>✓ Trust signals (years in business, certifications)</li>
              <li>✓ Custom branding (logo, colors, fonts)</li>
            </ul>
          </div>

          {/* Tracking */}
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

          {/* Performance */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-purple-300 mb-4">
              ⚡ The Performance
            </h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ Built on Next.js (modern React framework)</li>
              <li>✓ Green Lighthouse scores (90+)</li>
              <li>✓ Sub-2.5s load time on mobile</li>
              <li>✓ Optimized images & videos</li>
              <li>✓ Zero layout shift (CLS &lt; 0.1)</li>
              <li>✓ Instant interaction (INP &lt; 200ms)</li>
              <li>✓ Mobile-responsive across all devices</li>
              <li>✓ SEO-optimized metadata</li>
            </ul>
          </div>

          {/* Support */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-orange-300 mb-4">🛠️ The Support</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li>✓ 30-day launch & optimization</li>
              <li>✓ Monthly maintenance & updates</li>
              <li>✓ Photo swaps & content changes</li>
              <li>✓ Email support (24–48hr response)</li>
              <li>✓ Performance optimization</li>
              <li>✓ Form tweaks & testing</li>
              <li>✓ Annual domain & SSL renewal</li>
              <li>✓ Server uptime monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          How It Works
        </h2>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "You fill out a brief",
              body: "Tell us about your business: services, service area, photos you want to feature, and what matters most (calls vs quotes vs bookings). Takes about 5 minutes.",
            },
            {
              step: 2,
              title: "We build your funnel",
              body: "We pull your Google profile data, design the layout for conversions, set up call tracking and GA4, and deploy to a custom domain. Usually done in 5–7 business days.",
            },
            {
              step: 3,
              title: "You start getting calls",
              body: "Your funnel goes live on Google Search and Maps. Visitors see a fast page with your ratings, services, and a big call button.",
            },
            {
              step: 4,
              title: "We measure & optimize",
              body: "Month 1 is optimization: we test copy, forms, and mobile flow. You see call counts and lead data; we tweak based on real numbers.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Why Choose LocalWebsitePro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "💨 Obsessively fast",
              color: "text-blue-300",
              body: "Built on Next.js with strong performance scores. Every millisecond counts when someone is searching for help on their phone.",
            },
            {
              title: "📞 Conversion-first",
              color: "text-green-300",
              body: "Every section is designed to drive calls and quote requests—no fluff or agency jargon.",
            },
            {
              title: "📊 Measurement built in",
              color: "text-purple-300",
              body: "Call tracking and analytics so you know exactly how many leads your site generates.",
            },
            {
              title: "🚀 Quick launch",
              color: "text-orange-300",
              body: "Launch in about a week, see calls in weeks, not months. No long-term retainers.",
            },
            {
              title: "🎯 Built for local pros",
              color: "text-red-300",
              body: "Designed specifically for home service businesses that live on Google Search and Maps.",
            },
            {
              title: "💰 No BS pricing",
              color: "text-pink-300",
              body: "Flat build fees and clear monthly plans. No surprise add-ons or mystery retainers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800"
            >
              <h3 className={`text-lg font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHEAP TEMPLATES VS CUSTOM */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Why cheap templates are costing you real money
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Most “affordable” site builders hide the real cost: lost calls from slow,
          generic pages with no tracking. We build funnels that are fast, branded, and
          fully measured.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Templates */}
          <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-300 mb-4">
              ❌ Template Builders (Wix, Squarespace, GoDaddy)
            </h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">5–10s</span>
                <span>
                  Average mobile load time. Over half of visitors bounce if they wait more
                  than 3 seconds.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">2–3%</span>
                <span>
                  Typical conversion rates thanks to slow pages and clunky forms.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">0</span>
                <span>
                  Real tracking. You don&apos;t actually know how many calls come from your
                  site.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">Generic</span>
                <span>
                  Same templates used by thousands of competitors. Nothing that makes
                  you the obvious choice.
                </span>
              </li>
            </ul>
          </div>

          {/* Custom funnels */}
          <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              ✅ LocalWebsitePro Custom Funnels
            </h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">&lt;2.5s</span>
                <span>
                  Mobile load time from optimized code and hosting built for speed.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">5–8%+</span>
                <span>
                  Target conversion rates when calls-to-action and forms are tuned for
                  home service leads.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">100%</span>
                <span>
                  Full tracking on calls and quote requests—so you know exactly what your
                  site is doing for you.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">Custom</span>
                <span>
                  A layout built around your services, reviews, and photos—not a generic
                  template.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ROI snapshot */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">
            What one better funnel can be worth
          </h3>
          <p className="text-slate-300 text-center mb-6">
            If your average job is worth{" "}
            <span className="text-blue-400 font-semibold">$2,000</span> and you close{" "}
            <span className="text-blue-400 font-semibold">20%</span> of leads, each lead
            is roughly worth{" "}
            <span className="text-blue-400 font-semibold">$400</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-red-900/10 rounded-lg border border-red-700/30">
              <p className="text-red-300 font-semibold mb-2">Slow template site</p>
              <p className="text-4xl font-bold text-white mb-2">10</p>
              <p className="text-slate-400 text-sm">Leads per month</p>
              <p className="text-2xl font-bold text-red-400 mt-3">= $4,000/mo</p>
            </div>
            <div className="text-center p-6 bg-green-900/10 rounded-lg border border-green-700/30">
              <p className="text-green-300 font-semibold mb-2">
                LocalWebsitePro funnel
              </p>
              <p className="text-4xl font-bold text-white mb-2">25</p>
              <p className="text-slate-400 text-sm">
                Leads per month (2.5x improvement)
              </p>
              <p className="text-2xl font-bold text-green-400 mt-3">= $10,000/mo</p>
            </div>
          </div>
          <p className="text-center text-slate-300 mt-6 text-sm">
            Adding{" "}
            <span className="text-green-400 font-semibold">
              $6,000/month in potential revenue
            </span>{" "}
            makes a $1k–$2.5k build an easy decision for most serious local businesses.
          </p>
        </div>
      </section>

      {/* TECH STACK / BUILT DIFFERENT */}
      <section className="max-w-5xl mx-auto px-4 py-16 bg-slate-900/50 rounded-xl border border-slate-800">
        <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
          How we build your funnel
        </h3>
        <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
          No Wix, WordPress, or GoHighLevel. Every funnel is{" "}
          <span className="text-blue-400 font-semibold">
            custom-coded from scratch
          </span>{" "}
          using tools that are built for speed and conversions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <p className="text-2xl font-bold text-blue-400 mb-2">Next.js</p>
            <p className="text-slate-400 text-xs">React framework with SSR</p>
          </div>
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <p className="text-2xl font-bold text-green-400 mb-2">Vercel</p>
            <p className="text-slate-400 text-xs">Global edge network</p>
          </div>
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <p className="text-2xl font-bold text-purple-400 mb-2">Tailwind</p>
            <p className="text-slate-400 text-xs">Custom design system</p>
          </div>
          <div className="text-center p-4 bg-slate-800 rounded-lg">
            <p className="text-2xl font-bold text-orange-400 mb-2">TypeScript</p>
            <p className="text-slate-400 text-xs">Type-safe code</p>
          </div>
        </div>
        <p className="text-slate-400 text-center mt-6 text-sm">
          <span className="text-white font-semibold">Not a template.</span> Not a page
          builder. Custom React code optimized for your business.
        </p>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Simple, transparent pricing
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Three ways to work with us. No hidden fees. No long-term contracts. Cancel
          anytime on managed plans.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Build & Own */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Build &amp; Own</h3>
            <p className="text-slate-400 mb-6 text-sm">
              For businesses that want to own their funnel outright and handle monthly
              tools themselves.
            </p>
            <div className="mb-6">
              <p className="text-5xl font-bold text-white">$999</p>
              <p className="text-slate-400 text-sm">One-time build</p>
            </div>
            <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-300 text-sm mb-2 font-semibold">
                You handle monthly tools:
              </p>
              <p className="text-slate-400 text-xs">• Hosting (Vercel): ~ $20/mo</p>
              <p className="text-slate-400 text-xs">• Call tracking: ~ $30/mo</p>
              <p className="text-slate-400 text-xs">• Updates: DIY or hire as needed</p>
            </div>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li>✓ Custom single-page funnel</li>
              <li>✓ Mobile-first design</li>
              <li>✓ GA4 setup & basic events</li>
              <li>✓ Call tracking integration</li>
              <li>✓ 30-day launch optimization</li>
              <li>✓ Domain registered in your name</li>
              <li>✓ Full code handoff & documentation</li>
              <li>✓ You own 100% of everything</li>
            </ul>
            <p className="text-xs text-slate-500 mb-3 text-center">
              Best for DIY-minded owners who want full control.
            </p>
            <button className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-blue-600 text-white font-bold rounded-lg transition-all">
              Get started
            </button>
          </div>

          {/* Managed Growth */}
          <div className="bg-slate-900 rounded-xl p-8 border-2 border-blue-600 shadow-xl flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">
              Managed Growth
            </h3>
            <p className="text-slate-400 mb-6 text-sm">
              For owners who want a hands-off funnel with ongoing optimization and
              support.
            </p>
            <div className="mb-6">
              <p className="text-5xl font-bold text-white">$499</p>
              <p className="text-slate-400 text-sm">Setup fee</p>
              <p className="text-2xl font-bold text-blue-400 mt-2">+ $199/mo</p>
              <p className="text-slate-400 text-xs">
                Hosting, tracking, and support included.
              </p>
            </div>
            <div className="mb-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
              <p className="text-blue-300 text-sm font-semibold mb-2">
                We handle everything:
              </p>
              <p className="text-slate-300 text-xs">
                • Vercel hosting &amp; SSL • Call tracking &amp; GA4 monitoring • Monthly
                reports • Ongoing tweaks
              </p>
            </div>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li>✓ Everything in Build &amp; Own, plus:</li>
              <li>✓ Unlimited photo/content updates</li>
              <li>✓ Monthly conversion optimization</li>
              <li>✓ Real-time call/form alerts</li>
              <li>✓ Priority email support</li>
              <li>✓ A/B testing & form tweaks</li>
              <li>✓ Annual domain renewal included</li>
              <li>✓ Performance monitoring & fixes</li>
            </ul>
            <p className="text-xs text-slate-400 mb-3 text-center">
              Best for busy owners who want results without babysitting a website.
            </p>
            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:scale-105">
              Get started
            </button>
          </div>

          {/* Growth Partner */}
          <div className="bg-gradient-to-br from-purple-900/40 to-slate-900 rounded-xl p-8 border border-purple-700/50 shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">
              Growth Partner
            </h3>
            <p className="text-slate-400 mb-6 text-sm">
              For tech-forward businesses that want advanced automation, integrations, and
              experiments.
            </p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">$2,500</p>
              <p className="text-slate-400 text-sm">One-time build</p>
              <p className="text-2xl font-bold text-purple-400 mt-2">+ from $199/mo</p>
              <p className="text-slate-400 text-xs">
                Base retainer plus only the add-ons you choose.
              </p>
            </div>
            <div className="mb-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
              <p className="text-purple-300 text-sm
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>• AI chatbot lead qualifier</span>
                  <span className="text-purple-400">+ $75/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• SMS auto-reply & follow-up</span>
                  <span className="text-purple-400">+ $30/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Automated review requests</span>
                  <span className="text-purple-400">+ $50/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Real-time lead dashboard</span>
                  <span className="text-purple-400">+ $100/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Lead scoring & prioritization</span>
                  <span className="text-purple-400">+ $75/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Automated email/SMS sequences</span>
                  <span className="text-purple-400">+ $40/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Advanced booking/scheduling</span>
                  <span className="text-purple-400">+ $50/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Heatmaps & session recording</span>
                  <span className="text-purple-400">+ $40/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Multi-language support</span>
                  <span className="text-purple-400">+ $75/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Custom CRM/API integrations</span>
                  <span className="text-purple-400">+ $200–500/mo</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li>✓ Everything in Managed Growth, plus advanced automation</li>
              <li>✓ Deep CRM integration (HubSpot, Pipedrive, ServiceTitan, etc.)</li>
              <li>✓ Custom tracking dashboards & reporting</li>
              <li>✓ Multi-step funnels and upsell flows</li>
              <li>✓ Async support via email/Slack-style channels</li>
              <li>✓ Roadmap planning based on your goals</li>
            </ul>

            <p className="text-xs text-slate-400 mb-3 text-center italic">
              “Most contractors have no idea this tech exists. This is for the ones who
              want to actually use it.”
            </p>
            <p className="text-xs text-slate-500 mb-3 text-center">
              Best for tech-forward businesses ready to automate and scale.
            </p>
            <button className="w-full px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition-all">
              Schedule a consultation
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            All plans include 30 days of launch optimization. No long-term contracts on
            managed plans—cancel anytime.
          </p>
          <p className="text-slate-500 text-xs">
            Growth Partner pricing depends on goals, market, and integrations. Book a
            consultation and we&apos;ll scope it together.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              How long does it take to launch?
            </h3>
            <p className="text-slate-300">
              Typically 5–7 business days from the time you submit your info. We&apos;ll
              send you a preview to approve before anything goes live.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              Do I own my site and funnel?
            </h3>
            <p className="text-slate-300">
              Yes. Domains are in your name and you get access to all accounts (hosting,
              analytics, call tracking). If you ever want to move, you can take
              everything with you.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              Will this actually get me more calls?
            </h3>
            <p className="text-slate-300">
              Most home service businesses with good Google visibility but weak websites
              see a clear lift in calls and quote requests within 30–60 days. Results
              still depend on your market and reviews, but we give you clear tracking so
              you see what&apos;s happening.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              Can you integrate my CRM or job software?
            </h3>
            <p className="text-slate-300">
              Yes. We can connect to tools via Zapier/Make or direct APIs for platforms
              like HubSpot, Pipedrive, ServiceTitan, and more. Mention your stack when you
              submit the brief.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              What if I need changes later?
            </h3>
            <p className="text-slate-300">
              On managed plans, photo swaps, copy changes, and layout tweaks are included.
              On Build &amp; Own, you can either edit the code yourself or hire us ad-hoc.
            </p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-bold text-blue-300 mb-2">
              Is this built on a website builder?
            </h3>
            <p className="text-slate-300">
              No. Everything is custom-coded in Next.js and deployed on Vercel&apos;s edge
              network. You&apos;re not locked into a proprietary platform.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL LEAD CAPTURE CTA */}
      <section className="max-w-3xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Ready to turn Google traffic into real jobs?
        </h2>
        <p className="text-slate-300 text-center mb-8">
          Share a few details about your business and we&apos;ll send over a personalized
          funnel concept—no pressure, no long sales call.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">
                Business name
              </label>
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
              <label className="block text-slate-300 font-semibold mb-2">
                Service type
              </label>
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
            Get your free funnel concept →
          </button>
          <p className="text-slate-400 text-xs text-center mt-4">
            We&apos;ll reach out within 24 hours with next steps and a preview of what your
            site could look like.
          </p>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-6 bg-slate-950 text-center text-slate-400 border-t border-slate-800">
        <p className="text-xs mb-2">
          LocalWebsitePro — custom funnels for home service businesses.
        </p>
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} LocalWebsitePro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
