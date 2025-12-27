'use client';

import { useEffect, useState } from 'react';
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

interface DealsGridProps {
  searchTerm?: string;
  category?: string;
  sortBy?: string;
}

export default function DealsGrid({ searchTerm = '', category = 'all', sortBy = 'score' }: DealsGridProps) {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDeals();
  }, []);

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/deals');
      if (!response.ok) {
        throw new Error('Failed to fetch deals');
      }
      const data = await response.json();
      setDeals(data.deals || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort deals
  const filteredDeals = deals
    .filter(deal => {
      // Filter by search term
      const matchesSearch = searchTerm === '' || 
        deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.brand?.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter by category (you can expand this with actual categories later)
      const matchesCategory = category === 'all' || true; // Add category logic when ready

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'discount':
          return b.discount_pct - a.discount_pct;
        case 'newest':
          return 0; // Add timestamp when available
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'score':
        default:
          return b.score - a.score;
      }
    });

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-slate-800 rounded-xl h-96 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Failed to load deals</h3>
        <p className="text-slate-400 mb-4">{error}</p>
        <button 
          onClick={fetchDeals}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (filteredDeals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No deals found</h3>
        <p className="text-slate-400">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 text-slate-400">
        Showing {filteredDeals.length} deal{filteredDeals.length !== 1 ? 's' : ''}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  const savings = (deal.msrp - deal.price).toFixed(2);
  
  return (
    <Link 
      href={`/deal/${deal.slug}`}
      className="group block bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all"
    >
      {/* Deal Image */}
      <div className="relative h-48 bg-slate-700 overflow-hidden">
        {deal.image_url ? (
          <img 
            src={deal.image_url} 
            alt={deal.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
        )}
        
        {/* Discount Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white font-bold rounded-lg text-sm">
          -{deal.discount_pct}%
        </div>
        
        {/* Quality Score Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white font-semibold rounded-lg text-sm">
          Score: {(deal.score * 100).toFixed(0)}
        </div>
      </div>

      {/* Deal Info */}
      <div className="p-4">
        {deal.brand && (
          <div className="text-xs text-blue-400 font-semibold mb-1 uppercase tracking-wider">
            {deal.brand}
          </div>
        )}
        
        <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {deal.title}
        </h3>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-green-400">
            ${deal.price.toFixed(2)}
          </span>
          <span className="text-sm text-slate-400 line-through">
            ${deal.msrp.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-emerald-400 font-semibold">
            Save ${savings}
          </span>
          {deal.vendor && (
            <span className="text-slate-400">
              {deal.vendor}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
