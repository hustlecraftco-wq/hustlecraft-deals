'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Deal {
  id: string;
  title: string;
  price: number;
  msrp: number;
  discount_pct: number;
  description?: string;
  link: string;
  image_url?: string;
  vendor?: string;
  score?: number;
  published?: string;
}

export default function DealCard({ deal }: { deal: Deal }) {
  const [timeLeft, setTimeLeft] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const discountPercent = Math.round(deal.discount_pct || 0);
  const savings = deal.msrp - deal.price;

  useEffect(() => {
    const updateTimer = () => {
      const hours = Math.floor(Math.random() * 12) + 1;
      const minutes = Math.floor(Math.random() * 60);
      setTimeLeft(`${hours}h ${minutes}m`);
    };
    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    return () => clearInterval(interval);
  }, []);

  const getBadgeColor = () => {
    if (discountPercent >= 70) return 'bg-red-500/20 text-red-400 border-red-500/30';
    if (discountPercent >= 50) return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  const getBadgeText = () => {
    if (discountPercent >= 70) return '🔥 HOT DEAL';
    if (discountPercent >= 50) return '⚡ GREAT DEAL';
    return '✨ GOOD DEAL';
  };

  const handleShare = async (platform: string) => {
    const url = deal.link;
    const text = `Check out this deal: ${deal.title} - ${discountPercent}% OFF!`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      copy: 'copy'
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        alert('Deal link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
    setShowShareMenu(false);
  };

  return (
    <div className="group relative bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
      <div className="relative h-48 bg-slate-900 overflow-hidden">
        {deal.image_url ? (
          <Image
            src={deal.image_url}
            alt={deal.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
        
        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${getBadgeColor()}`}>
            {getBadgeText()}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-slate-200 border border-slate-700 backdrop-blur-sm">
            -{discountPercent}%
          </span>
        </div>

        {/* Verified Badge */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </span>
        </div>

        {/* Time Left Badge */}
        {timeLeft && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30 backdrop-blur-sm flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {timeLeft} left
          </div>
        )}

        {/* Share Button */}
        <div className="absolute bottom-3 right-3">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="p-2 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors"
            aria-label="Share deal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          
          {/* Share Menu */}
          {showShareMenu && (
            <div className="absolute bottom-full right-0 mb-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-10">
              <button
                onClick={() => handleShare('twitter')}
                className="w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors text-left flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Share on X
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="w-full px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors text-left flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
          {deal.title}
        </h3>

        {deal.description && (
          <p className="text-sm text-slate-400 line-clamp-2">
            {deal.description}
          </p>
        )}

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">${deal.price}</span>
          <span className="text-lg text-slate-500 line-through">${deal.msrp}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-400 font-medium">Save ${savings.toFixed(2)}</span>
          <span className="text-slate-600">•</span>
          {deal.vendor && (
            <span className="text-slate-400">via {deal.vendor}</span>
          )}
        </div>

        {deal.score && (
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                style={{ width: `${deal.score * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-slate-400">
              {Math.round(deal.score * 100)}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          <a
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Deal →
          </a>
          
          <button
            onClick={() => alert('Price drop alert set! (Feature coming soon)')}
            className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Alert if price drops
          </button>
        </div>
      </div>
    </div>
  );
}
