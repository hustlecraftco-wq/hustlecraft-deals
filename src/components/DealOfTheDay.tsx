'use client';

import Link from 'next/link';

export default function DealOfTheDay() {
  // This would normally come from your API - hardcoded for now
  const topDeal = {
    title: 'HP Student Business Laptop - Intel N150',
    discount: 75,
    price: 379.98,
    link: 'https://amzn.to/4n8Sy3n'
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl p-8 shadow-2xl">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
          }} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          {/* Fire emoji animation */}
          <div className="text-6xl animate-bounce">🔥</div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-bold mb-2">
              DEAL OF THE DAY
            </div>
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">
              {topDeal.title}
            </h3>
            <p className="text-orange-100 text-lg">
              <span className="font-bold text-2xl">{topDeal.discount}% OFF</span> · Only ${topDeal.price}
            </p>
          </div>
          
          <a
            href={topDeal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Grab It Now →
          </a>
        </div>
      </div>
    </section>
  );
}
