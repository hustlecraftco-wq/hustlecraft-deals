export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Disclosure & Legal Notice</h1>
        
        {/* Finance/Trading Disclaimer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-5 rounded mb-8">
          <strong>Finance / Trading Disclaimer:</strong><br />
          The content on HustleCraft (hustlecraftco.com) is provided for <strong>educational and entertainment purposes only</strong> and does <strong>not</strong> constitute financial advice, investment recommendations, or an offer to buy or sell any security or financial instrument.<br /><br />
          While HustleCraft is run by a <strong>former licensed financial advisor</strong>, everything on this site reflects personal opinion and general educational information. <strong>Nothing here should be considered financial advice.</strong><br /><br />
          Always do your own due diligence and consult a qualified professional before making any investment decisions. Past performance does not guarantee future results.
        </div>

        {/* Affiliate Disclosure */}
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-4">Affiliate Disclosure</h2>
          <p className="text-lg">
            HustleCraft participates in affiliate marketing programs. That means we may earn commissions 
            when you purchase products using links on our website.
          </p>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">What This Means for You</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong className="text-white">No Extra Cost:</strong> You pay the same price whether you use our links or not. Commissions come from the retailer, not you.</li>
              <li><strong className="text-white">Independent Scoring:</strong> Our deal and content scoring is not affected by affiliate rates. If a deal isn’t top quality, it doesn't make the cut—no matter what.</li>
              <li><strong className="text-white">Honest Recommendations:</strong> We only feature deals and products that meet our standards, regardless of potential earnings.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Affiliate Programs We Work With</h2>
          <p>We currently participate in affiliate programs with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Amazon Associates</li>
            <li>CJ Affiliate</li>
            <li>Impact.com</li>
            <li>Rakuten Advertising</li>
            <li>ShareASale</li>
            <li>Other individual retailer programs</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">FTC Compliance</h2>
          <p>
            This disclosure complies with the Federal Trade Commission's 16 CFR Part 255: "Guides 
            Concerning the Use of Endorsements and Testimonials in Advertising."
          </p>
          <p>
            As an Amazon Associate, HustleCraft earns from qualifying purchases.
          </p>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-3">Questions?</h3>
            <p className="text-sm">
              We believe in transparency. If you have questions about how we evaluate deals, our 
              affiliate relationships, or our site policies, email us at <a href="mailto:hello@hustlecraftco.com" className="text-blue-400">hello@hustlecraftco.com</a>
            </p>
          </div>

          <p className="text-sm text-slate-400 mt-8">
            Last updated: October 2025
          </p>
        </div>
      </div>
    </div>
  );
}
