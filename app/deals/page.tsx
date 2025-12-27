import { Suspense } from 'react';
import DealsGrid from '@/components/DealsGrid';

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">All Deals</h1>
          <p className="text-xl text-slate-400">
            Every verified deal, scored by our system. Sorted by quality.
          </p>
        </div>

        <Suspense fallback={<DealsGridSkeleton />}>
          <DealsGrid />
        </Suspense>
      </div>
    </div>
  );
}

function DealsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-slate-800 rounded-xl h-96 animate-pulse" />
      ))}
    </div>
  );
}
