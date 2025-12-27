'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      {/* Spline 3D Hero Section */}
      <section className="w-full h-[75vh] min-h-[400px] max-h-[900px] relative overflow-hidden border-b border-slate-800">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-2M9WZGD9vrd5L2d4y1LyY6fs/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            background: 'transparent',
            display: 'block',
            width: '100%',
            height: '100%',
            minHeight: '400px',
            maxHeight: '900px',
            border: 'none'
          }}
          allow="autoplay; fullscreen"
          title="NexBot Robot Character"
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
            Welcome to HustleCraft
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-2xl mt-2">
            Building digital assets. Automating income. <br/>
            <span className="text-blue-400 font-bold">
              Local service funnels • Trading tools • Community
            </span>
          </p>
        </div>
      </section>

      {/* Primary CTA Section - Local Service Funnels */}
      <section className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-y border-blue-700/50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-4">
            🚀 Local Service Funnels
          </h2>
          <p className="text-slate-200 text-lg mb-6 max-w-2xl mx-auto">
            Get more calls and booked jobs from Google. High-speed, conversion-focused websites built for handymen, 
            roofers, plumbers, and contractors in Kansas City.
          </p>
          <Link 
            href="/funnels"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            See How It Works →
          </Link>
        </div>
      </section>

      {/* Main Call-to-Action Buttons */}
      <section className="text-center py-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <Link 
            href="/funnels"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Explore Funnels
          </Link>
          <Link 
            href="/markets"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700"
          >
            View Live Markets
          </Link>
          <Link 
            href="/playbook"
            className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all border border-purple-800"
          >
            Free Playbook
          </Link>
        </div>
      </section>

      {/* Funnels Quick Pitch */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-xl">
          <h3 className="text-xl font-bold text-blue-300 mb-3">⚡ Fast & Mobile-First</h3>
          <p className="text-slate-300 text-sm">
            Built on Next.js with green Lighthouse scores. Visitors see your content in under 2.5 seconds on any device.
          </p>
        </div>
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-xl">
          <h3 className="text-xl font-bold text-green-300 mb-3">📞 Convert to Calls</h3>
          <p className="text-slate-300 text-sm">
            Sticky call buttons, trust signals, and gallery proof. Designed for one job: getting your phone to ring.
          </p>
        </div>
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-xl">
          <h3 className="text-xl font-bold text-purple-300 mb-3">📊 Measurable Results</h3>
          <p className="text-slate-300 text-sm">
            Built-in call tracking and analytics. See exactly how many leads come from your funnel each month.
          </p>
        </div>
      </section>

      {/* VIX Live Watch Teaser + Blog Post */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
        {/* VIX Advanced Chart Block */}
        <div
          className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl w-full flex flex-col items-center"
          style={{ minHeight: 450 }}
        >
          <h2 className="text-2xl font-bold text-blue-300 mb-4">🚨 VIX Live Watch</h2>
          <div
            className="tradingview-widget-container w-full"
            style={{ height: "400px", width: "100%" }}
            dangerouslySetInnerHTML={{
              __html: `
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright">
                  <a href="https://www.tradingview.com/symbols/VIX/" rel="noopener nofollow" target="_blank">
                    <span class="blue-text">VIX chart</span>
                  </a> by TradingView
                </div>
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
                {
                  "width": "100%",
                  "height": 400,
                  "symbol": "VIX",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "dark",
                  "style": "1",
                  "locale": "en",
                  "hide_top_toolbar": false,
                  "hide_side_toolbar": true,
                  "allow_symbol_change": true,
                  "backgroundColor": "#0F0F0F",
                  "gridColor": "rgba(242, 242, 242, 0.06)",
                  "autosize": true
                }
                </script>
                <!-- TradingView Widget END -->
              `,
            }}
          />
          <span className="text-blue-400 mt-2 text-sm text-center">
            Watching VIX as we build!<br />
            Others coming soon: SPY, BTC, ETH, QQQ...
          </span>
        </div>
        {/* Blog Post Block */}
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl flex flex-col items-start">
          <h2 className="text-xl font-bold text-purple-300 mb-3">Latest VIX Weekly Update</h2>
          <div className="text-slate-200 text-base mb-2">
            🚨 <strong>VIX quick check:</strong> Noon to now, 19.76 → 20.81 (+5.3%). <br />
            Bull momentum confirmed above EMAs (5W: 17.76, 20W: 16.88). Heavy call action into October.<br />
            <span className="text-blue-400">22oct25 $30C: .28→.53 (+89%). Squeeze could keep running.</span>
          </div>
          <div className="bg-slate-800 p-3 text-slate-300 rounded mb-3 text-xs">
            VIX Weekly Update: The CBOE Volatility Index (VIX) is currently trading at 19.76, up 6.38% for the period. Recent weekly chart data shows a bullish crossover, with the 5-week EMA at 17.76 and the 20-week EMA at 16.88. Historically, such crossovers have preceded notable moves—in April 2025, VIX spiked to 65.73. The current setup suggests increased volatility ahead, with upside potential for October call options if VIX sustains moves above 21. Institutional option flow has favored calls.
          </div>
          <a 
            href="https://www.threads.com/@hustlecraftdeals" 
            className="text-blue-400 underline font-bold" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            @hustlecraftdeals on Threads
          </a>
        </div>
      </section>

      {/* Preview Others & Community/Learning */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-300 mb-4">Live Markets — More Soon!</h2>
          <div className="flex gap-4 mb-2">
            {['SPY', 'BTC', 'ETH', 'QQQ'].map((ticker, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-3 flex flex-col items-center min-w-[70px]">
                <span className="text-xl font-bold text-blue-200">{ticker}</span>
                <div className="w-full h-6 bg-slate-700 rounded text-center flex items-center justify-center text-slate-400 text-xs mt-1">
                  Launching soon!
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl flex flex-col items-center">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Join the Hustle</h2>
          <p className="text-base text-slate-300 mb-2 text-center">
            Trading tips, playbooks, and a hangout for builders, automators, and investors.<br/>
            <span className="font-bold text-purple-400">Vote on features, unlock drops, and learn together.</span>
          </p>
          <Link href="/playbook" className="mt-3 px-6 py-2 bg-purple-700 text-white rounded hover:scale-105 transition">Open Playbook</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-slate-950 text-center text-slate-400 border-t border-slate-800">
        HustleCraft &copy; {new Date().getFullYear()} — Building funnels. Automating income. Making moves.
        <br/>
        <span className="text-xs">Local service funnels • Trading dashboards • Community playbooks</span>
      </footer>
    </div>
  );
}
