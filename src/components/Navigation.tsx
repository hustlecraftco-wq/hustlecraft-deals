'use client';

import Link from 'next/link';
import { useState } from 'react';
import EmailSignupModal from '@/components/EmailSignupModal';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">HustleCraft</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/deals" className="text-slate-300 hover:text-white transition-colors font-medium">
                All Deals
              </Link>
              <Link href="/categories" className="text-slate-300 hover:text-white transition-colors font-medium">
                Categories
              </Link>
              <Link href="/playbook" className="text-slate-300 hover:text-white transition-colors font-medium">
                Playbook
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition-colors font-medium">
                About
              </Link>
              <button 
                onClick={() => setEmailModalOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Alerts
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col gap-4">
                <Link href="/deals" className="text-slate-300 hover:text-white transition-colors font-medium">
                  All Deals
                </Link>
                <Link href="/categories" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Categories
                </Link>
                <Link href="/playbook" className="text-slate-300 hover:text-white transition-colors font-medium">
                  Playbook
                </Link>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors font-medium">
                  About
                </Link>
                <button 
                  onClick={() => {
                    setEmailModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Alerts
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <EmailSignupModal 
        isOpen={emailModalOpen} 
        onClose={() => setEmailModalOpen(false)} 
      />
    </>
  );
}
