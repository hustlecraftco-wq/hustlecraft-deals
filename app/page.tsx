'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* Spline 3D Hero Section */}
      <section className="w-full h-[70vh] min-h-[500px] max-h-[800px] relative overflow-hidden">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-2M9WZGD9vrd5L2d4y1LyY6fs/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            background: "transparent",
            display: "block",
            width: "100%",
            height: "100%",
            minHeight: "500px",
            maxHeight: "800px",
            border: "none",
          }}
          allow="autoplay; fullscreen"
          title="NexBot Robot Character"
        />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center px-4 max-w-5xl w-full">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
            LocalWebsitePro
          </h1>
          <p className="text-slate-200 max-w-3xl mx-auto text-xl sm:text-2xl mt-4 mb-6 font-light">
            Professional websites for local service businesses.
          </p>
          <p className="text-white max-w-3xl mx-auto text-2xl sm:text-3xl font-semibold mb-8">
            Turn your 5-star Google reviews into booked jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="#services"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-2xl"
            >
              See What We Build
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white font-bold text-lg rounded-lg transition-all border border-slate-600 shadow-xl"
            >
              View Pricing
            </Link>
          </div>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 backdrop-blur-sm border border-slate-700 text-sm text-slate-300">
            <span className="text-green-400">●</span>
            Veteran-owned • Built by a working developer
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Custom Websites Built for Local Service Pros
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            You have the reviews. You have the skills. You just need a website that turns visitors into customers.
            <br />
            <strong className="text-white">No templates. No WordPress. Just fast, conversion-focused sites.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 shadow-xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-slate-300 text-lg">
              Sub-2.5 second load times. Built with Next.js for speed that crushes templates and drag-and-drop builders.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 shadow-xl">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-white mb-4">More Calls</h3>
            <p className="text-slate-300 text-lg">
              Every element is designed to get your phone ringing. Call tracking, form analytics, and conversion optimization built-in.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 shadow-xl">
          <div className="text-4xl mb-4📊div>
            <h3 className="text-2xl font-bold text-white mb-4">Know Your ROI</h3>
            <p className="text-slate-300 text-lg">
              See exactly how many calls and jobs came from your site. Google Analytics 4 setup, lead tracking, monthly reports.
            </p>
          </div>
        </div>
        </div>

        <div className="text-center">
          <Link
            href="#pricing"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-xl"
          >
            See Full Features & Pricing →
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Built for Service Professionals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Plumbers',
            'HVAC',
            'Electricians',
            'Roofers',
            'Contractors',
            'Landscapers',
            'Cleaning Services',
            'Auto Repair'
          ].map((service, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-slate-800 text-center">
              <span className="text-2xl text-green-400 mb-2 block">✓</span>
              <span className="text-slate-200 font-semibold text-lg">{service}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-300 text-center mt-12 text-lg">
          If you have a solid Google Business profile and want more calls without hiring an agency, we're your answer.
        </p>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20 border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            No hidden fees. No long-term contracts. Professional websites that pay for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Build & Own</h3>
            <p className="text-4xl font-bold text-white mb-2">$999</p>
            <p className="text-slate-400 text-sm mb-6">One-time payment</p>
            <p className="text-slate-300 mb-6">Full website build. You own 100%. Handle your own hosting & updates.</p>
            <Link
              href="/funnels#pricing"
              className="block w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all text-center border border-slate-700"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 rounded-xl p-8 border-2 border-blue-600 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Managed Growth</h3>
            <p className="text-4xl font-bold text-white mb-2">$499</p>
            <p className="text-slate-300 text-sm mb-1">Setup fee</p>
            <p className="text-2xl font-bold text-blue-400 mb-2">+ $199/mo</p>
            <p className="text-slate-400 text-sm mb-6">Hosting, updates & support included</p>
            <p className="text-slate-300 mb-6">We handle everything. Unlimited updates, optimization, and monthly reports.</p>
            <Link
              href="/funnels#pricing"
              className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all text-center hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Growth Partner</h3>
            <p className="text-4xl font-bold text-white mb-2">$2,500+</p>
            <p className="text-slate-400 text-sm mb-6">Custom builds with automation</p>
            <p className="text-slate-300 mb-6">Advanced features: chatbots, booking systems, CRM integration, multi-page sites.</p>
            <Link
              href="/funnels#pricing"
              className="block w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all text-center border border-slate-700"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/funnels"
            className="inline-block text-blue-400 hover:text-blue-300 font-semibold text-lg underline"
          >
            See full features, examples, and detailed pricing →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 border-t border-slate-800">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get More Calls?</h2>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
            Let's talk about your business and build a website that actually works.
          </p>
          <Link
            href="/funnels#contact"
            className="inline-block px-10 py-5 bg-white hover:bg-gray-100 text-slate-900 font-bold text-xl rounded-lg transition-all hover:scale-105 shadow-2xl"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-slate-950 text-center text-slate-400 border-t border-slate-800">
        <p className="text-lg mb-2">LocalWebsitePro &copy; {new Date().getFullYear()}</p>
        <p className="text-sm text-slate-500">
          Professional websites for local service businesses. Veteran-owned.
        </p>
      </footer>
    </div>
  );
}
