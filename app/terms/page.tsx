export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p className="text-lg">
            By accessing and using HustleCraft (hustlecraftco.com), you accept and agree to be bound 
            by the terms and provisions of this agreement.
          </p>

          {/* Financial/Educational Content Disclaimer */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-5 rounded">
            <strong>Educational Content & Financial Disclaimer:</strong> <br />
            All content, trading ideas, charting tools, posts, and commentary on HustleCraft are strictly for <strong>educational and entertainment purposes only</strong>. <br /><br />
            <strong>Nothing on this site constitutes financial, investment, tax, or trading advice.</strong> 
            While the site is run by a former licensed financial advisor, the information, analysis, and opinions expressed here represent general knowledge and personal perspective—not tailored recommendations. <br /><br />
            Always do your own research and consult a certified advisor before making any investment decisions. Past performance is not indicative of future results.
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Use of Service</h2>
          <p>
            HustleCraft provides a curated feed of product deals, educational market commentary, and trading ideas. Our service is provided "as is" without warranties of any kind.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Affiliate Relationships</h2>
          <p>
            HustleCraft participates in affiliate marketing programs. When you click on links and make 
            purchases, we may receive compensation from retailers. See our <a href="/disclosure" className="text-blue-400 hover:text-blue-300">Disclosure</a> page for details.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Deal & Market Information Accuracy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We strive to provide accurate deals, market, and price information, but prices, availability, market conditions, and data can change without notice.</li>
            <li>Always verify current prices and terms with third-party sites before purchasing or making financial decisions.</li>
            <li>We are not responsible for pricing, chart, or data errors or outdated information.</li>
            <li>Deals and market data may be time-limited or subject to change/stock availability.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Quality Scores & Content</h2>
          <p>
            Our deal and content scores are our algorithmic assessments based on discount depth, price history, trading analysis, or other factors. <strong>They are opinions for education only, not professional financial or investment advice.</strong>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third-Party Websites</h2>
          <p>
            When you click on links, you'll be directed to third-party websites. We are not responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The content or practices of these third-party sites</li>
            <li>Product quality, shipping, returns, or customer service</li>
            <li>Payment security (these are the retailer's responsibility)</li>
            <li>Trading data on external platforms or widgets</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our site or community for any illegal purpose</li>
            <li>Attempt to disrupt our service or compromise site security</li>
            <li>Collect or copy site data or content without permission</li>
            <li>Impersonate HustleCraft, staff, or mislead users regarding your affiliation</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intellectual Property</h2>
          <p>
            All content on HustleCraft, including text, graphics, code, logos, images, and site design, are the property of HustleCraft or its content suppliers and protected by copyright laws.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitation of Liability</h2>
          <p>
            HustleCraft shall not be liable for any indirect, incidental, special, consequential, or 
            punitive damages resulting from your use of or inability to use the service—including loss of opportunity, profits, trading losses, or data.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes become effective immediately 
            upon posting. Continued use of the service constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service immediately, without prior 
            notice, for any violation of these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, 
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact</h2>
          <p>
            Questions about these Terms? Email <a className="text-blue-400" href="mailto:legal@hustlecraftco.com">legal@hustlecraftco.com</a>
          </p>

          <p className="text-sm text-slate-400 mt-8">
            Last updated: October 2025
          </p>
        </div>
      </div>
    </div>
  );
}
