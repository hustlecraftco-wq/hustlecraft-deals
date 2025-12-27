"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* Spline 3D Hero Section */}
      <section className="w-full h-[60vh] min-h-[400px] max-h-[700px] relative overflow-hidden border-b border-slate-800">
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
            minHeight: "400px",
            maxHeight: "700px",
            border: "none",
          }}
          allow="autoplay; fullscreen"
          title="NexBot Robot Character"
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
            Building Digital Assets
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg sm:text-2xl mt-2">
            High-performance products for builders, traders, and service businesses.
            <br />
            <span className="text-blue-400 font-bold">
              Automate income. Measure results. Make moves.
            </span>
          </p>
          <p className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs uppercase tracking-wide text-slate-300">
            <span className="text-green-400">●</span>
            Veteran owned • Built by a working trader
          </p>
        </div>
      </section>

      {/* Three Product Pillars */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Local Service Funnels */}
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-8 border border-blue-700/50 shadow-xl flex flex-col">
            <div className="text-5xl mb-4">💼</div>
            <h2 className="text-2xl font-bold text-blue-300 mb-1">
              Local Service Funnels
            </h2>
            <p className="text-slate-400 text-xs mb-3">
              Turn your Google profile into a lead-generation machine
            </p>
            <p className="text-slate-300 text-sm mb-4 flex-grow">
              Lightning-fast landing pages designed for one thing: getting your phone to ring. Built for plumbers, contractors, handymen, and trades.
            </p>
            <ul className="text-slate-400 space-y-2 text-xs mb-4">
              <li>✓ Sub-2.5s load times</li>
              <li>✓ Mobile-first conversion design</li>
              <li>✓ Built-in call tracking & analytics</li>
              <li>✓ Flat pricing, no agency BS</li>
            </ul>
            <p className="text-xs text-blue-300 font-semibold mb-6">
              83% average conversion rate increase*
            </p>
            <div className="mt-auto flex items-center gap-4">
              <Link
                href="/funnels"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all hover:scale-105 text-center text-sm"
              >
                Explore Funnels →
              </Link>
              <Link
                href="/funnels#pricing"
                className="text-xs text-slate-300 hover:text-white underline-offset-2 hover:underline"
              >
                See pricing
              </Link>
            </div>
          </div>

          {/* Trading Tools & Analysis */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-8 border border-purple-700/50 shadow-xl flex flex-col">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-purple-300 mb-1">
              Trading Tools & Analysis
            </h2>
            <p className="text-slate-400 text-xs mb-3">
              Real-time market data for day traders and volatility watchers
            </p>
            <p className="text-slate-300 text-sm mb-4 flex-grow">
              VIX tracking, market dashboards, and options analysis. Built for traders who need edge and speed without ten tabs and three brokers open.
            </p>
            <ul className="text-slate-400 space-y-2 text-xs mb-4">
              <li>✓ Live VIX chart & EMAs</li>
              <li>✓ Weekly volatility updates</li>
              <li>✓ SPY, BTC, ETH, QQQ (coming soon)</li>
              <li>✓ Option flow tracking</li>
            </ul>
            <p className="text-xs text-purple-300 font-semibold mb-6">
              Live market data, updated in real time
            </p>
            <div className="mt-auto flex items-center gap-4">
              <Link
                href="/markets"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all hover:scale-105 text-center text-sm"
              >
                View Markets →
              </Link>
              <Link
                href="/learn/trading"
                className="text-xs text-slate-300 hover:text-white underline-offset-2 hover:underline"
              >
                Learn trading
              </Link>
            </div>
          </div>

          {/* Deals & Community */}
          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-8 border border-green-700/50 shadow-xl flex flex-col">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-green-300 mb-1">
              Deals & Community
            </h2>
            <p className="text-slate-400 text-xs mb-3">
              Curated savings and a hangout for builders and hustlers
            </p>
            <p className="text-slate-300 text-sm mb-4 flex-grow">
              Real deals scored by value. Free playbooks. Trading tips. Join automators, builders, and side-project grinders who are stacking digital assets.
            </p>
            <ul className="text-slate-400 space-y-2 text-xs mb-4">
              <li>✓ Real savings, scored by value</li>
              <li>✓ Trading tips & analysis</li>
              <li>✓ Free playbooks & resources</li>
              <li>✓ Community features (launching soon)</li>
            </ul>
            <p className="text-xs text-green-300 font-semibold mb-6">
              No BS, just deals
            </p>
            <div className="mt-auto flex items-center gap-4">
              <Link
                href="/deals"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all hover:scale-105 text-center text-sm"
              >
                Browse Deals →
              </Link>
              <Link
                href="/community"
                className="text-xs text-slate-300 hover:text-white underline-offset-2 hover:underline"
              >
                Join community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Social Proof */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-400 mb-2">&lt;2.5s</p>
            <p className="text-slate-400 text-sm">
              Average funnel load time on mobile
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-400 mb-2">Live</p>
            <p className="text-slate-400 text-sm">
              Real-time VIX & market tracking
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400 mb-2">100%</p>
            <p className="text-slate-400 text-sm">
              Transparent pricing, no surprises
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-slate-950 text-center text-slate-400 border-t border-slate-800">
        HustleCraft &copy; {new Date().getFullYear()} — Building funnels. Automating income. Making moves.
        <br />
        <span className="text-xs">
          Local service funnels • Trading dashboards • Community playbooks
        </span>
      </footer>
    </div>
  );
}
