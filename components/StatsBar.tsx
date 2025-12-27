'use client';

import { useEffect, useState } from 'react';

export default function StatsBar() {
  const [stats, setStats] = useState({
    totalDeals: 0,
    avgDiscount: 0,
    topSavings: 0,
  });

  useEffect(() => {
    // TODO: Fetch real stats from API
    // For now, show placeholder stats
    setStats({
      totalDeals: 127,
      avgDiscount: 42,
      topSavings: 87,
    });
  }, []);

  return (
    <section className="border-b border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {stats.totalDeals}
            </div>
            <div className="text-sm text-slate-400">Active Deals</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">
              {stats.avgDiscount}%
            </div>
            <div className="text-sm text-slate-400">Avg. Discount</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">
              {stats.topSavings}%
            </div>
            <div className="text-sm text-slate-400">Top Savings Today</div>
          </div>
        </div>
      </div>
    </section>
  );
}
