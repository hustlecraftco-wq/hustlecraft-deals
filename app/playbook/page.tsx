'use client';

import { useState } from 'react';
import EmailSignupModal from '@/components/EmailSignupModal';

export default function PlaybookPage() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                  Free Chapter Available
                </span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              The HustleCraft Wealth System
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Escape & Build: Launch Income, Master Systems, and Create Financial Freedom
            </p>
            <p className="text-lg text-slate-500 italic mb-8">
              From bankruptcy to financial independence. The exact blueprint I used.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Chapter 1 Free
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-md mx-auto">
              &quot;Break the Script, Rebuild the System&quot; - Learn why playing it safe is the riskiest move you can make.
            </p>
            <button 
              onClick={() => setEmailModalOpen(true)}
              className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Download Free Chapter →
            </button>
            <p className="text-sm text-blue-200 mt-4">
              No credit card required. Instant download.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              What&apos;s Inside The Full System
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">💰 Build Multiple Income Streams</h4>
                <p className="text-slate-300">Learn the 7 types of income the wealthy use. Start with digital products, affiliate marketing, and platform leverage.</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-green-400 mb-3">📊 Strategic Investing</h4>
                <p className="text-slate-300">ETFs, dividend stocks, REITs, and real estate. Build wealth without gambling or guesswork.</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">🏠 Real Estate 101</h4>
                <p className="text-slate-300">BRRRR method, house hacking, and creative financing. Build cash flow without huge capital.</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-orange-400 mb-3">⚙️ Systems & Automation</h4>
                <p className="text-slate-300">Scale without burnout. Build once, earn forever. Buy back your time.</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-red-400 mb-3">🎯 The 20% Rule</h4>
                <p className="text-slate-300">Conservative wealth building that protects the downside. How to never start over again.</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h4 className="text-xl font-semibold text-yellow-400 mb-3">🚀 Launch Strategy</h4>
                <p className="text-slate-300">From idea to income in 7 days. Build your first product and make your first sale.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">About the Author</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Devin Hummel</strong> is a Navy Veteran, former Licensed Financial Advisor, 
              and compliance officer who rebuilt his life from bankruptcy after returning from deployment.
            </p>
            <p className="text-slate-300 leading-relaxed">
              He served as Associate Director of Office Supervision at a branch of one of the world&apos;s 
              largest mutual companies. This book is the exact system he built from rock bottom—forged 
              from real failure, not theory.
            </p>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setEmailModalOpen(true)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              Get Your Free Chapter Now
            </button>
            <p className="text-slate-400 mt-4 text-sm">
              Join 1,000+ readers building real wealth systems
            </p>
          </div>
        </div>
      </div>

      <EmailSignupModal 
        isOpen={emailModalOpen} 
        onClose={() => setEmailModalOpen(false)} 
      />
    </>
  );
}
