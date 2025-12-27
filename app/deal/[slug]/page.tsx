import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Deal {
  id: string;
  title: string;
  description?: string;
  price: number;
  msrp: number;
  discount_pct: number;
  brand?: string;
  vendor?: string;
  link: string;
  score: number;
  slug: string;
  image_url?: string;
}

async function getDeal(slug: string): Promise<Deal | null> {
  try {
    // Build the correct URL - use Vercel URL in production, localhost in dev
    const baseUrl = "https://hustlecraftco.com";
    
    const response = await fetch(`${baseUrl}/api/deals`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    
    if (!response.ok) {
      console.error('Failed to fetch deals:', response.status);
      return null;
    }
    
    const data = await response.json();
    const deal = data.deals.find((d: Deal) => d.slug === slug);
    
    return deal || null;
  } catch (error) {
    console.error('Error fetching deal:', error);
    return null;
  }
}

export default async function DealPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const deal = await getDeal(resolvedParams.slug);
  
  if (!deal) {
    notFound();
  }

  const savings = (deal.msrp - deal.price).toFixed(2);
  const savingsPercent = deal.discount_pct;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all deals
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-2xl overflow-hidden">
            {deal.image_url ? (
              <img 
                src={deal.image_url} 
                alt={deal.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-96 flex items-center justify-center">
                <svg className="w-32 h-32 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {deal.brand && (
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                  {deal.brand}
                </span>
              </div>
            )}

            <h1 className="text-4xl font-bold text-white leading-tight">
              {deal.title}
            </h1>

            {deal.description && (
              <p className="text-lg text-slate-300 leading-relaxed">
                {deal.description}
              </p>
            )}

            <div className="bg-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-green-400">
                  ${deal.price.toFixed(2)}
                </span>
                <span className="text-2xl text-slate-400 line-through">
                  ${deal.msrp.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg">
                  {savingsPercent}% OFF
                </div>
                <div className="text-emerald-400 font-semibold text-lg">
                  Save ${savings}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">HustleCraft Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                        style={{ width: `${deal.score * 100}%` }}
                      />
                    </div>
                    <span className="text-white font-bold">
                      {(deal.score * 100).toFixed(0)}/100
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={deal.link}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="block w-full"
            >
              <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                Get This Deal
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </a>

            {deal.vendor && (
              <div className="text-center text-sm text-slate-400">
                Available at <span className="text-white font-semibold">{deal.vendor}</span>
              </div>
            )}

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Disclosure:</strong> We may earn a commission when you purchase through our affiliate links. This helps support HustleCraft at no extra cost to you. We only recommend deals that meet our quality standards. #ad
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why This Deal Scored {(deal.score * 100).toFixed(0)}/100</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div>
              <div className="text-green-400 font-bold text-lg mb-2">{savingsPercent}% Discount</div>
              <p className="text-sm">Above-average savings compared to typical deals in this category.</p>
            </div>
            <div>
              <div className="text-blue-400 font-bold text-lg mb-2">Verified Deal</div>
              <p className="text-sm">Automatically checked and verified to be active and legitimate.</p>
            </div>
            <div>
              <div className="text-purple-400 font-bold text-lg mb-2">Quality Score</div>
              <p className="text-sm">Based on price history, vendor reputation, and discount authenticity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
