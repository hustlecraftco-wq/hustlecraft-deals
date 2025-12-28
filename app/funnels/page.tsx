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
            More Calls. More Jobs. More Money.
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Custom-coded, high-speed funnels built for local service businesses. Not templates. Not WordPress. Pure performance. 
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
        <p className="text-slate-300 text-center mt-8">
          If you have a solid Google Business profile and want more calls without hiring an agency, we're your answer.
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
              <li>✓ Trust signals (years in business, certifications)</li>
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
          Here's what one of our funnels looks like. Real examples built for real service businesses.
        </p>
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="aspect-video bg-slate-800 flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-400 mb-4">Live Demo Coming Soon</p>
              <Link
                href="/demo/handyman"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                Preview Funnel Template →
              </Link>
            </div>
          </div>
        </div>
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose LocalWebsitePro</h2>
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
            <h3 className="text-lg font-bold text-red-300 mb-3">🎯 Built for Service Pros</h3>
            <p className="text-slate-300 text-sm">
              We understand local service businesses. Your funnel is designed for local 
              search, trust signals, and immediate action.
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

      {/* The Cost of Cheap Websites */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Why Cheap Templates Are Killing Your Business</h2>
        <p className="text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Most "affordable" website builders promise easy setup. What they don't tell you is how much money you're losing every day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* The Template Problem */}
          <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-300 mb-4">❌ Template Builders (Wix, Squarespace, GoDaddy)</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">5-10s</span>
                <span>Average mobile load time. <strong>53% of visitors abandon sites over 3 seconds.</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">2-3%</span>
                <span>Average conversion rate. Poor mobile UX and slow speed kill conversions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">0</span>
                <span>Real tracking. No idea how many calls or leads your site generates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 font-bold">Generic</span>
                <span>Same templates used by thousands of competitors. Zero differentiation.</span>
              </li>
            </ul>
          </div>

          {/* The LocalWebsitePro Difference */}
          <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-300 mb-4">✅ LocalWebsitePro Custom Funnels</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">&lt;2.5s</span>
                <span>Mobile load time. Built on Next.js with server-side rendering and optimized images.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">5-8%+</span>
                <span>Target conversion rate. Case studies show 30-90% lifts after CRO implementation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">100%</span>
                <span>Full tracking. Know exactly how many calls and quote requests your funnel generates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">Custom</span>
                <span>Tailored to your business. Not a template anyone else has.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Math */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">The ROI Math</h3>
          <p className="text-slate-300 text-center mb-6">
            Let's say your average job is worth <strong className="text-blue-400">$2,000</strong> and you close <strong className="text-blue-400">20%</strong> of your leads. 
            That means each lead is worth <strong className="text-blue-400">$400</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-red-900/10 rounded-lg border border-red-700/30">
              <p className="text-red-300 font-semibold mb-2">Slow Template Site</p>
              <p className="text-4xl font-bold text-white mb-2">10</p>
              <p className="text-slate-400 text-sm">Leads per month</p>
              <p className="text-2xl font-bold text-red-400 mt-3">= $4,000/mo</p>
            </div>
            <div className="text-center p-6 bg-green-900/10 rounded-lg border border-green-700/30">
              <p className="text-green-300 font-semibold mb-2">LocalWebsitePro Funnel</p>
              <p className="text-4xl font-bold text-white mb-2">25</p>
              <p className="text-slate-400 text-sm">Leads per month (2.5x increase)</p>
              <p className="text-2xl font-bold text-green-400 mt-3">= $10,000/mo</p>
            </div>
          </div>
          <p className="text-center text-slate-300 mt-6">
            A <strong className="text-green-400">$6,000/month revenue increase</strong> makes a $999-$2,500 investment look like a no-brainer. 
            That's ROI in the first month for most businesses.
          </p>
        </div>

      {/* Technology Stack */}
      <section className="max-w-5xl mx-auto px-4 py-12 bg-slate-900/50 rounded-xl border border-slate-800">
        <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">How We Build Your Funnel</h3>
        <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
          We don't use Wix, WordPress, or GoHighLevel. Every funnel is <strong className="text-blue-400">custom-coded from scratch</strong> using 
          enterprise-grade tools built for speed and conversions.
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
          <strong className="text-white">Not a template.</strong> Not a page builder. Custom React code optimized for your business.
        </p>
      </section>

        {/* Technical Superiority */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-purple-300 mb-4 text-center">Built Different: Custom Code vs Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400 mb-2">Next.js</p>
              <p className="text-slate-400 text-sm">Not Wix. Not WordPress. Modern React framework with SSR for speed.</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400 mb-2">90+ Lighthouse</p>
              <p className="text-slate-400 text-sm">Green performance scores. Templates typically score 30-50.</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">You Own It</p>
              <p className="text-slate-400 text-sm">Full code ownership. No platform lock-in. Leave anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Simple, Transparent Pricing</h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Choose the model that fits your business. No hidden fees. No long-term contracts. Cancel anytime.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* DIY Package */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Build & Own</h3>
            <p className="text-slate-400 mb-6 text-sm">For businesses that want to own their funnel outright and handle monthly costs themselves.</p>
            <div className="mb-6">
              <p className="text-5xl font-bold text-white">$999</p>
              <p className="text-slate-400 text-sm">One-time payment</p>
            </div>
            <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-300 text-sm mb-2 font-semibold">You'll handle monthly:</p>
              <p className="text-slate-400 text-xs">• Hosting: ~$20/mo (Vercel)</p>
              <p className="text-slate-400 text-xs">• Call tracking: ~$30/mo (your choice)</p>
              <p className="text-slate-400 text-xs">• Updates: DIY or hire us as-needed</p>
            </div>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li>✓ Full funnel build (single-page)</li>
              <li>✓ Mobile-first design</li>
              <li>✓ GA4 setup & event tracking</li>
              <li>✓ Call tracking integration</li>
              <li>✓ 30-day launch optimization</li>
              <li>✓ Full handoff with documentation</li>
              <li>✓ Domain registered in your name</li>
              <li>✓ You own 100% of everything</li>
            </ul>
            <div className="mt-auto">
              <p className="text-xs text-slate-500 mb-3 text-center">Best for: DIY-minded businesses who want full control</p>
              <button className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-blue-600 text-white font-bold rounded-lg transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* Managed Package - MOST POPULAR */}
          <div className="bg-slate-900 rounded-xl p-8 border-2 border-blue-600 shadow-xl flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Managed Growth</h3>
            <p className="text-slate-400 mb-6 text-sm">For businesses that want hands-off optimization and ongoing support.</p>
            <div className="mb-6">
              <p className="text-5xl font-bold text-white">$499</p>
              <p className="text-slate-400 text-sm">Setup fee</p>
              <p className="text-2xl font-bold text-blue-400 mt-2">+ $199/mo</p>
              <p className="text-slate-400 text-xs">Includes hosting, tracking, & support</p>
            </div>
            <div className="mb-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
              <p className="text-blue-300 text-sm font-semibold mb-2">We handle everything:</p>
              <p className="text-slate-300 text-xs">• Vercel hosting & SSL</p>
              <p className="text-slate-300 text-xs">• Call tracking & GA4 monitoring</p>
              <p className="text-slate-300 text-xs">• Monthly performance reports</p>
              <p className="text-slate-300 text-xs">• Ongoing optimization & updates</p>
            </div>
            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li>✓ Everything in Build & Own, plus:</li>
              <li>✓ Unlimited photo/content updates</li>
              <li>✓ Monthly conversion optimization</li>
              <li>✓ Real-time call/form alerts</li>
              <li>✓ Priority email support</li>
              <li>✓ A/B testing & form tweaks</li>
              <li>✓ Annual domain renewal included</li>
              <li>✓ Performance monitoring & fixes</li>
            </ul>
            <div className="mt-auto">
              <p className="text-xs text-slate-400 mb-3 text-center">Best for: Busy business owners who want results without the work</p>
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

	            {/* Growth Partner */}
          <div className="bg-gradient-to-br from-purple-900/40 to-slate-900 rounded-xl p-8 border border-purple-700/50 shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Growth Partner</h3>
            <p className="text-slate-400 mb-6 text-sm">For businesses that need advanced tech, automation, and custom integrations. Built to scale.</p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">$2,500</p>
              <p className="text-slate-400 text-sm">One-time setup (always flat)</p>
              <p className="text-2xl font-bold text-purple-400 mt-2">+ $199/mo</p>
              <p className="text-slate-400 text-xs">Base retainer + add-ons you choose</p>
            </div>
            
            <div className="mb-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
              <p className="text-purple-300 text-sm font-semibold mb-3">Everything in Managed Growth, PLUS choose from:</p>
              
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>• AI Chatbot (24/7 lead qualifier)</span>
                  <span className="text-purple-400">+$75/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• SMS Auto-Reply System</span>
                  <span className="text-purple-400">+$30/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Automated Review Requests</span>
                  <span className="text-purple-400">+$50/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Real-Time Lead Dashboard</span>
                  <span className="text-purple-400">+$100/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Lead Scoring & Prioritization</span>
                  <span className="text-purple-400">+$75/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Automated Follow-Up Sequences</span>
                  <span className="text-purple-400">+$40/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Advanced Booking/Scheduling</span>
                  <span className="text-purple-400">+$50/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• 3D Product Visualization</span>
                  <span className="text-purple-400">+$150/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Dynamic Pricing Calculator</span>
                  <span className="text-purple-400">+$100/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Heatmap & Session Recording</span>
                  <span className="text-purple-400">+$40/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Multi-Language Support</span>
                  <span className="text-purple-400">+$75/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>• Custom CRM/API Integrations</span>
                  <span className="text-purple-400">+$200-500/mo</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-slate-300 text-sm flex-grow">
              <li>✓ Custom funnel with advanced integrations</li>
              <li>✓ LLM/AI-powered chatbots & automation</li>
              <li>✓ Deep CRM integration (HubSpot, Pipedrive, etc.)</li>
              <li>✓ Real-time analytics & performance dashboards</li>
              <li>✓ 3D visualization & interactive experiences</li>
              <li>✓ E-commerce & payment processing</li>
              <li>✓ Multi-page expansion with complex logic</li>
              <li>✓ Async support via Slack/email (no meetings)</li>
              <li>✓ Choose only the features you need</li>
            </ul>
            
            <div className="mt-auto">
              <p className="text-xs text-slate-400 mb-3 text-center italic">
                "Most businesses have no idea this tech exists. We build what others can't."
              </p>
              <p className="text-xs text-slate-500 mb-3 text-center">
                Best for: Tech-forward businesses ready to automate and scale
              </p>
              <button className="w-full px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
          {/* End Growth Partner */}

        </div>
        {/* End pricing grid */}

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            All plans include 30 days of launch optimization. No long-term contracts. Cancel anytime (managed plans only).
          </p>
          <p className="text-slate-500 text-xs">
            Growth Partner pricing is custom based on revenue goals, market size, and scope of work. Book a consultation to discuss your needs.
          </p>
        </div>
      </section>
      {/* End Pricing Section */}

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
            <h3 className="text-lg font-bold text-blue-300 mb-2">Is this built on a platform like Wix or GoHighLevel?</h3>
            <p className="text-slate-300">
              No. Every funnel is custom-coded in Next.js and deployed on Vercel's global edge network. You're not locked into a platform. 
              You own the code, the domain, and all accounts. If you ever want to leave, you can take everything with you or hire any developer 
              to maintain it.
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
        <br />
        LocalWebsitePro Funnels &copy; {new Date().getFullYear()} — — Professional websites for local service businesses.
      </footer>
    </div>
  );
}
