'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    id: 'tech',
    name: 'Tech & Electronics',
    icon: '💻',
    description: 'Laptops, phones, gaming gear, smart home devices',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    icon: '🏠',
    description: 'Appliances, furniture, décor, organization',
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: '🎮',
    description: 'Consoles, accessories, monitors, peripherals',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    icon: '👕',
    description: 'Clothing, shoes, accessories, watches',
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'fitness',
    name: 'Fitness & Outdoors',
    icon: '💪',
    description: 'Workout equipment, activewear, outdoor gear',
    color: 'from-yellow-600 to-amber-600'
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: '💄',
    description: 'Skincare, makeup, grooming, wellness',
    color: 'from-pink-600 to-rose-600'
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Shop by Category</h1>
          <p className="text-xl text-slate-400">
            Find the best deals in your favorite categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/deals?category=${category.id}`}
              className="group relative overflow-hidden rounded-xl bg-slate-800 p-8 hover:bg-slate-750 transition-all hover:scale-105 border border-slate-700 hover:border-slate-600"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-400 text-sm">
                  {category.description}
                </p>

                <div className="mt-6 flex items-center text-blue-400 font-semibold">
                  <span>Browse Deals</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">More Categories Coming Soon</h3>
          <p className="text-slate-400 max-w-md mx-auto">
            We&apos;re constantly adding new categories and deals. Subscribe to get notified when we launch new sections.
          </p>
        </div>
      </div>
    </div>
  );
}
