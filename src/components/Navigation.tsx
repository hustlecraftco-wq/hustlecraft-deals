'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-white font-bold text-xl">HustleCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1"
              >
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2"
                >
                  <Link href="/funnels" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                    <div className="font-semibold">Local Service Funnels</div>
                    <div className="text-xs text-slate-400">Turn Google visits into calls</div>
                  </Link>
                  <Link href="/markets" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                    <div className="font-semibold">Trading Tools</div>
                    <div className="text-xs text-slate-400">VIX tracking & analysis</div>
                  </Link>
                  <Link href="/deals" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                    <div className="font-semibold">Deals</div>
                    <div className="text-xs text-slate-400">Curated discounts & value</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setLearnOpen(true)}
                onMouseLeave={() => setLearnOpen(false)}
                className="text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1"
              >
                Learn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {learnOpen && (
                <div
                  onMouseEnter={() => setLearnOpen(true)}
                  onMouseLeave={() => setLearnOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2"
                >
                  <Link href="/learn/trading" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                    <div className="font-semibold">Trading Education</div>
                    <div className="text-xs text-slate-400">Free courses & guides</div>
                  </Link>
                  <Link href="/community" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                    <div className="font-semibold">Community</div>
                    <div className="text-xs text-slate-400">Chat, forums, & hangouts</div>
                  </Link>
                  <Link href="/book" className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                    <div className="font-semibold">The Book</div>
                    <div className="text-xs text-slate-400">HustleCraft Wealth System</div>
                  </Link>
                </div>
              )}
            </div>

            {/* About Link */}
            <Link href="/about" className="text-slate-300 hover:text-white font-medium transition-colors">
              About
            </Link>

            {/* CTA Button */}
            <Link
              href="/community"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              Stay Connected
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
